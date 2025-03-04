import { $$, frag, dom } from "yvee";
import * as i from "../css";
import { CategoryAlt } from "@yvee/box-svg";

export default (a: attr, ...D: ctx[]) => {
  return (
    <div class={[i.hero]}>
      <div class={[i.hero_top]}>
        <CategoryAlt class={[i.svLOGO]} />
        <div>Library</div>
      </div>
      <div class={[i.hero_desc]}>
        <p>Yvee components 🌱</p>
      </div>
    </div>
  );
};
