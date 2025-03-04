import { SweetSS, fileName, Var, v, med } from "sweetss";
import { gray } from "@sweetss/colors";

export const Footer = new SweetSS({
  __filename,
  exportMap: false,
});

const { dom, cx, save } = Footer;

cx.err = [
  {
    border: 0,
  },
];

save({
  dir: ["./src/error", "./app/error"],
  mapName: "index",
  mapDir: __dirname,
  minify: false,
});
