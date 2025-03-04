import { Dom, dom, Yvee, doc } from "yvee";
import Head from "./@/head";
import Error from "./error/router";
import ROOT from "./HOME/router";
import SVG from "./SVG/router";
import LIBRARY from "./LIBRARY/router";

export const { head, error, route, load, path, A } = new Yvee(import.meta, {
  pushState: false,
  classes: ["root"],
  prefix: "/-yvee",
});

Head(head);
Error(error);
//
[
  //
  ROOT,
  SVG,
  LIBRARY,
].forEach((r) => {
  r(route);
});

export default await load();
