import { $$, frag, dom } from "yvee";
import { Bolt } from "@yvee/material-svg";
import * as i from "../css";
import { Yvee } from "../../@/svg";

export default (a: attr, ...D: ctx[]) => {
  return (
    <div class={[i.hero]}>
      <Yvee class={[i.yveei]} />
      <h1>
        <Bolt />
        Yvee
      </h1>
      <p>JS Framework.. Components, SVG and etc...</p>
    </div>
  );
};
