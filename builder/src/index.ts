import {
  readdirSync,
  rmSync,
  statSync,
  unlinkSync,
  watch,
  WatchEventType,
} from "node:fs";
import path from "node:path";
import { isDir } from "./@/bun";
import { log, isFN, makeID, ngify, oAss, oFItems, oItems, oLen } from "./@";
import { BunPlugin } from "bun";
import { rollup, ModuleFormat, InputPluginOption } from "rollup";

interface buildrCFG {
  files: string[];
  target?: "browser" | "bun";
  define?: Record<string, any>;
  hashAsset?: boolean;
  external?: string[];
  drop?: string[];
  plugins?: BunPlugin[];
  out?: string;
  dir?: string;
  base?: string;
  minify?: _minify;
  successFN?: () => Promise<void>;
}

type _minify = {
  identifiers?: boolean;
  whitespace?: boolean;
  syntax?: boolean;
};

export default class Builder {
  dir: string;
  out: string;
  files: string[];
  external: string[];
  drop: string[];
  target: string;
  define: Record<string, any> = {
    YVEE_ID: () => makeID(4),
  };
  exclude: string[] = [];
  hashAsset: boolean;
  plugins: BunPlugin[] = [];
  protected successFN?: () => Promise<void>;
  private clearing?: boolean = false;
  minify: _minify;

  constructor({
    files,
    target = "browser",
    define = {},
    hashAsset,
    external = [],
    drop = [],
    plugins = [],
    out = "./client",
    dir = "./src",
    base = "",
    minify = {},
    successFN,
  }: buildrCFG) {
    this.out = out + base;
    this.dir = dir + base;
    this.minify = { identifiers: true, whitespace: true, syntax: true };
    oAss(this.minify, minify);
    this.files = files.map((m) => (this.dir + "/" + m).replaceAll("//", "/"));
    this.hashAsset = hashAsset === undefined ? false : hashAsset;
    this.external = external;
    this.drop = drop;
    this.plugins = plugins;
    isDir(this.out);
    this.target = target;
    this.successFN = successFN;

    oAss(this.define, define);
  }
  clear(
    c: { exclude?: string[]; all?: boolean } = { exclude: [], all: false },
  ) {
    //
    c.exclude && c.exclude.length && this.exclude.push(...c.exclude);

    this.clearing = true;

    const recurse = (_PATH: string) => {
      const dirs = readdirSync(_PATH);
      if (dirs.length == 0) {
        rmSync(_PATH, { recursive: true });
        return;
      }
      dirs.forEach((ff) => {
        if (
          ff.startsWith(".") ||
          (!c.all && (ff.endsWith(".html") || this.exclude.includes(ff)))
        ) {
          return;
        }
        const _path = path.join(_PATH, ff);
        if (statSync(_path).isDirectory()) {
          recurse(_path);
        } else {
          unlinkSync(_path);
        }
      });
    };

    recurse(this.out);

    return this;
  }
  async build() {
    const asset = `[dir]/[name]${this.hashAsset ? "-[hash]" : ""}.[ext]`;

    if (this.files.length) {
      try {
        const Build = await Bun.build({
          entrypoints: this.files,
          outdir: this.out,
          splitting: true,
          minify: this.minify,
          target: (this.target as "browser") ?? "browser",
          naming: {
            chunk: "[dir]/[name]-[hash].[ext]",
            entry: "[dir]/[name].[ext]",
            asset,
          },
          define: {
            ...ProcessDefine(this.define),
          },
          loader: {
            ".css": "file",
          },
          external: this.external,
          drop: this.drop,
          plugins: this.plugins,
        });

        if (Build.success) {
          const dt = new Date().toLocaleTimeString();
          log.i = `builder @ ${dt}`;
          // run fn here
          try {
            await this.successFN?.();
          } catch (e) {
            log.i = e;
          }
        } else {
          log.i = Build.logs;
        }
      } catch (e) {
        log.i = e;
      }
    }

    return this;
  }
  async watch(condition: (filename: string) => boolean = () => true) {
    const watcher = watch(
      this.dir,
      { recursive: true },
      async (event, filename) => {
        if (filename && condition(filename)) {
          this.clearing && this.clear();
          try {
            await this.build();
          } catch (e) {
            console.error(e);
          }
        }
      },
    );

    process.on("SIGINT", () => {
      console.log("\nwatcher closed...");
      watcher.close();
      process.exit(0);
    });
  }
  set onsuccess(fn: () => Promise<void>) {
    this.successFN = fn;
  }
}

const ProcessDefine = (define: Record<string, any>) => {
  return oFItems(
    oItems(define).map(([k, v]) => {
      let lv = v;
      if (isFN(v)) {
        lv = v();
      }
      return [k, ngify(lv)];
    }),
  );
};

export async function RollUP({
  input,
  output,
  format = "es",
  external = [],
  plugins = [],
  fn,
}: {
  input: string;
  output: string;
  format?: ModuleFormat;
  external?: string[];
  plugins: InputPluginOption;
  fn?: () => void;
}) {
  const bundle = await rollup({
    input,
    plugins,
    external,
  });

  await bundle.write({
    file: output,
    format,
  });

  const dt = new Date().toLocaleTimeString();
  log.i = `rollup @ ${dt}`;
  fn?.();
}
