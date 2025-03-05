import { $$, frag, doc, dom, Routes } from "yvee";

export default Routes((r) => {
  //
  @r("/material")
  class Mat extends doc {
    head() {}
    import = import(".");
  }
});
