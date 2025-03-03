import { $$, headAttr, Meta, resolvePath } from "yvee";
import root from "../../i.css";
// import favi from "../../favicon.ico";

// import i192 from "../../static/ico/192.png";
// import i512 from "../../static/ico/512.png";

// i192;
// i512;

export default (head: (heads?: headAttr) => void) => {
  head({
    title: "Welcome!",
    meta: new Meta("Made with love by marky"),
    link: [
      {
        rel: "stylesheet",
        href: resolvePath("/", root),
        as: "style",
      },
      // {
      //   rel: "icon",
      //   sizes: "32x32",
      //   type: "image/png",
      //   href: resolvePath("/", favi),
      // },
      // {
      //   rel: "manifest",
      //   href: resolvePath("/", siteManifest),
      // },
    ],
  });
};
