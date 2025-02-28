import { $$, Builder } from "rossa";

const BLDR = new Builder({
  files: ["index.tsx"],
  hashAsset: false,
  define: {
    BUILD_DATE: () => new Date().toUTCString(),
  },
});

BLDR.clear();
BLDR.build();
BLDR.watch();
