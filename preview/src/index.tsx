import { Dom, dom, Yvee, doc } from "yvee";
import Body from "./@/root";
import main from "./i.css";

export const { route, load, path, A } = new Yvee(import.meta, {
  pushState: false,
});

@route("/")
@route("/-yvee/")
class index extends doc {
  head() {
    this.title = "Yvee Utilities";
    this.css = [main];
  }
  body(): Promise<Dom> | Dom {
    return (
      <Body>
        <div>wow</div>
      </Body>
    );
  }
}

export default await load();
