import { $$, doc, Dom, frag, dom, Routes } from "yvee";
import Body from "../@/root";
import CSS from "./i.css";

export default Routes((r) => {
  //

  @r("/library")
  class subin extends doc<{ args: { tab: string } }> {
    async head() {
      this.title = "Library";
      this.css = [CSS];
    }
    import = import(".");
    body(): Promise<Dom> | Dom {
      return <Body>{this.import}</Body>;
    }
  }

  @r("/library/<string:tab>")
  class ent extends subin {
    async head() {
      this.title = "@yvee LIBRARY";
      this.css = [CSS];
    }
  }
});
