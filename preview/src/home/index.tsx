import { $$, frag, dom, Router } from "yvee";
import Hero from "./hero";
import Route from "./router";
import * as i from "./css";

export default ({ tab = "/" }) => {
  return (
    <div class={[i.home]}>
      <Hero />
      <Route />
    </div>
  );
};
