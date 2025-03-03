import { $$, frag, dom, __ } from "yvee";
import * as i from "./css";

declare const BUILD_DATE: string;

export default (a: attr, ...D: ctx[]) => {
  __.class(a, [i.footer]);
  return (
    <footer {...a}>
      <div>I am the footer</div>
      <div>Contact me</div>
      <div>{BUILD_DATE}</div>
    </footer>
  );
};
