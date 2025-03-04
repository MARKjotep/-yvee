import { $$, frag, dom } from "yvee";
import Hero from "./hero";
import * as i from "./css";

export default (a: attr, ...D: ctx[]) => {
  return (
    <div class={[i.library]}>
      <Hero />
    </div>
  );
};
