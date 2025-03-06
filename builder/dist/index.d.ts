import { WatchEventType } from 'node:fs';
import { BunPlugin } from 'bun';

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
    successFN?: () => Promise<void>;
    private clearing?;
    constructor({ files, target, define, hashAsset, external, drop, plugins, out, dir, base, successFN, }: buildrCFG);
    clear(c?: {
        exclude: string[];
    }): this;
    build(): Promise<this>;
    watch(fn?: (event: WatchEventType, filename: string | null) => void): Promise<void>;
}

export { Builder as default };
