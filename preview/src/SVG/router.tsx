import { $$, doc, Dom, frag, dom, Routes } from "yvee";
import Body from "../@/root";
import CSS from "./i.css";
import { load, path } from "./svgs";

export default Routes((r) => {
  //

  @r("/svg")
  class subin extends doc<{ args: { tab: string } }> {
    async head() {
      this.title = "SVG";
      this.css = [CSS];

      await load("/");
    }
    import = import(".");
    body(): Promise<Dom> | Dom {
      return <Body>{this.import}</Body>;
    }
  }

  @r("/svg/<string:tab>")
  class ent extends subin {
    async head() {
      this.title = "@yvee SVG";
      this.css = [CSS];
      await load("/" + this.args.tab);
    }
  }
});
