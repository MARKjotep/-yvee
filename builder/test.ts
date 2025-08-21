import { dts } from "rollup-plugin-dts";
import { RollUP } from "./dist";

await RollUP({
  input: "./types/index.d.ts",
  output: "./dist/index2.d.ts",
  plugins: [dts()],
});
// async function build() {
//   const bundle = await rollup({
//     input: "./types/index.d.ts",
//     plugins: [dts()],
//   });

//   await bundle.write({
//     file: "./dist/index2.d.ts",
//     format: "es",
//   });

//   console.log("Declaration file built successfully!");
// }

// build();
