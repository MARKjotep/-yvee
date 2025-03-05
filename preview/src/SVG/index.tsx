import { $$, frag, dom } from "yvee";
import Hero from "./hero";
import * as i from "./css";
import SVGS from "../svgs";

export default (a: attr, ...D: ctx[]) => {
  //
  return (
    <div class={[i.svg]}>
      <Hero />
      <SVGS />
    </div>
  );
};
