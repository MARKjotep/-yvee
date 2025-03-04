import { $$, frag, dom, __ } from "yvee";
import * as i from "./css";
import { EcgHeart } from "@yvee/material-svg";
import { HeartCircle, Unite } from "@yvee/box-svg";

declare const BUILD_DATE: string;

export default (a: attr, ...D: ctx[]) => {
  __.class(a, [i.footer]);
  return (
    <footer {...a}>
      <div></div>
      <div></div>
      <div class={[i.hmarky]}>
        <HeartCircle class={[i.hearty]} />
        <span>Marky</span>
      </div>
      <div class={[i.built]}>
        <Unite />
        <span>{BUILD_DATE}</span>
      </div>
    </footer>
  );
};
