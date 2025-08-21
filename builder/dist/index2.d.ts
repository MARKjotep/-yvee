import { WatchEventType } from 'node:fs';
import { BunPlugin } from 'bun';
import { ModuleFormat, InputPluginOption } from 'rollup';

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
declare class Builder {
    dir: string;
    out: string;
    files: string[];
    external: string[];
    drop: string[];
    target: string;
    define: Record<string, any>;
    exclude: string[];
    hashAsset: boolean;
    plugins: BunPlugin[];
    protected successFN?: () => Promise<void>;
    private clearing?;
    minify: _minify;
    constructor({ files, target, define, hashAsset, external, drop, plugins, out, dir, base, minify, successFN, }: buildrCFG);
    clear(c?: {
        exclude?: string[];
        all?: boolean;
    }): this;
    build(): Promise<this>;
    watch(fn?: (event: WatchEventType, filename: string | null) => void): Promise<void>;
    set onsuccess(fn: () => Promise<void>);
}
declare function RollUP({ input, output, format, external, plugins, fn, }: {
    input: string;
    output: string;
    format?: ModuleFormat;
    external?: string[];
    plugins: InputPluginOption;
    fn?: () => void;
}): Promise<void>;

export { RollUP, Builder as default };
