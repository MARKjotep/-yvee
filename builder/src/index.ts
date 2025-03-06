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
import { $$, isFN, ngify, oFItems, oItems, oLen } from "./@";
import { BunPlugin } from "bun";

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
  successFN?: () => Promise<void>;
}

export default class Builder {
  dir: string;
  out: string;
  files: string[];
  external: string[];
  drop: string[];
  target: string;
  define: Record<string, any>;
  exclude: string[] = [];
  hashAsset: boolean;
  plugins: BunPlugin[] = [];
  successFN?: () => Promise<void>;
  private clearing?: boolean = false;
  constructor({
    files,
    target = "browser",
    define = {},
    hashAsset,
    external = [],
    drop = [],
    plugins = [],
    out = "./app",
    dir = "./src",
    base = "",
    successFN,
  }: buildrCFG) {
    this.out = out + base;
    this.dir = dir + base;

    this.files = files.map((m) => (this.dir + "/" + m).replaceAll("//", "/"));
    this.hashAsset = hashAsset == undefined ? true : hashAsset;
    this.external = external;
    this.drop = drop;
    this.plugins = plugins;
    isDir(this.out);
    this.target = target;
    this.successFN = successFN;
    this.define = define;
  }
  clear(c: { exclude: string[] } = { exclude: [] }) {
    //
    c.exclude.length && this.exclude.push(...c.exclude);

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
          ff.endsWith(".html") ||
          this.exclude.includes(ff)
        )
          return;
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
          minify: {
            identifiers: true,
            whitespace: true,
            syntax: true,
          },
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
          $$.p = `builder @ ${dt}`;
          // run fn here
          try {
            await this.successFN?.();
          } catch (e) {
            $$.p = e;
          }
        } else {
          $$.p = Build.logs;
        }
      } catch (e) {
        $$.p = e;
      }
    }

    return this;
  }
  async watch(fn?: (event: WatchEventType, filename: string | null) => void) {
    const watcher = watch(
      this.dir,
      { recursive: true },
      async (event, filename) => {
        if (filename && filename.endsWith("tsx")) {
          this.clearing && this.clear();
          try {
            await this.build();
          } catch (e) {
            console.error(e);
          }
        }
        fn?.(event, filename);
      },
    );

    process.on("SIGINT", () => {
      console.log("\nwatcher closed...");
      watcher.close();
      process.exit(0);
    });
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
