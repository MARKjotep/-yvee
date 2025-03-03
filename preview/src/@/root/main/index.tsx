import { $$, dom, __ } from "yvee";
import * as i from "./css";

export default (a: attr, ...D: ctx[]) => {
  __.class(a, [i.main]);
  return <main {...a}>{...D}</main>;
};
