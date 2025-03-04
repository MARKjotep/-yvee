import { $$, frag, dom } from "yvee";
import { Bolt } from "@yvee/material-svg";
import * as i from "../css";

export default (a: attr, ...D: ctx[]) => {
  return (
    <div class={[i.hero]}>
      <h1>
        <Bolt />
        Yvee Library
      </h1>
      <p>Components, SVG and etc...</p>
    </div>
  );
};
