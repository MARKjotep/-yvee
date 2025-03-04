import Body from "../@/root";
import { dom, doc, Meta, Errors } from "yvee";
import error_css from "./i.css";

export default Errors((error) => {
  //
  @error()
  class err extends doc {
    head() {
      const err = `error ${this.status}`;
      this.title = err;
      this.meta = new Meta(err);

      this.css = error_css;
    }
    import = import(".");
    async body() {
      return <Body>{this.import}</Body>;
    }
  }
});
