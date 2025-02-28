import { WatchEventType } from 'node:fs';
import { BunPlugin } from 'bun';

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
    private clearing?;
    constructor({ files, target, define, hashAsset, external, drop, plugins, }: {
        files: string[];
        target?: "browser" | "bun";
        define?: Record<string, any>;
        hashAsset?: boolean;
        external?: string[];
        drop?: string[];
        plugins?: BunPlugin[];
    });
    clear(c?: {
        exclude: string[];
    }): this;
    build(): this;
    watch(fn?: (event: WatchEventType, filename: string | null) => void): void;
}

export { Builder as default };
