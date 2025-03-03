import { Dom, dom, Yvee, doc } from "yvee";
import Body from "./@/root";
import Head from "./@/head";
import Home from "./home";
import { load as homeLoader } from "./home/router";

export const { head, route, load, path, A } = new Yvee(import.meta, {
  pushState: false,
  classes: ["root"],
});

Head(head);

@route("/")
@route("/-yvee/")
class index extends doc {
  async head() {
    this.title = "@yvee";
    await homeLoader("/");
  }
  body(): Promise<Dom> | Dom {
    //
    return (
      <Body>
        <Home />
      </Body>
    );
  }
}

@route("/<string:tab>")
@route("/-yvee/<string:tab>")
class subin extends doc<{ args: { tab: string } }> {
  async head() {
    this.title = "@yvee " + this.args.tab;

    await homeLoader(`/${this.args.tab}`);
  }
  body(): Promise<Dom> | Dom {
    return (
      <Body>
        <Home />
      </Body>
    );
  }
}

export default await load();
