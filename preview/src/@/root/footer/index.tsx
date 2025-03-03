import { $$, frag, dom, __ } from "yvee";
import * as i from "./css";
import { EcgHeart } from "@yvee/material-svg";

declare const BUILD_DATE: string;

export default (a: attr, ...D: ctx[]) => {
  __.class(a, [i.footer]);
  return (
    <footer {...a}>
      <div></div>
      <div></div>
      <div class={[i.built]}>
        <EcgHeart class={[i.hearty]} />
        <span>{BUILD_DATE}</span>
      </div>
    </footer>
  );
};
