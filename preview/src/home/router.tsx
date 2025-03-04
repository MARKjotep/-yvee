import { $, $$, frag, dom, doc, Router, Dom, Routes, __ } from "yvee";
import Body from "../@/root";
import * as i from "./css";

export default Routes((r) => {
  //

  @r("/")
  class subin extends doc<{ args: { tab: string } }> {
    async head() {
      this.title = "@yvee";
    }
    import = import(".");
    body() {
      return <Body>{this.import}</Body>;
    }
  }
});
