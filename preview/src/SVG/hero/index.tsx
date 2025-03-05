import { $$, frag, dom } from "yvee";
import * as i from "../css";
import { Health } from "@yvee/box-svg";

export default (a: attr, ...D: ctx[]) => {
  return (
    <div class={[i.hero]}>
      <div class={[i.hero_top]}>
        <Health class={[i.LOGO]} />
        <div>SVG</div>
      </div>
      <div class={[i.hero_desc]}>
        <p>Yvee SVG 🌱</p>
      </div>
    </div>
  );
};
