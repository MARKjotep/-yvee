import Builder from "@yvee/builder";
import { __ } from "yvee";

const BLDR = new Builder({
  files: ["index.tsx"],
  hashAsset: false,
  define: {
    BUILD_DATE: () => new Date().toUTCString(),
    BUILD_ID: () => __.makeID(4),
  },
});

BLDR.successFN = async () => {
  const procee = Bun.spawn(["bun", "run", "main.ts"]);
  await procee.exited;
};

BLDR.clear();

await BLDR.build();
await BLDR.watch();
