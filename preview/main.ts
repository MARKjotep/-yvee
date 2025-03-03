import { Rossa, response } from "rossa";
import App from "./app";

const { route, serve, folders, error, index } = new Rossa();

folders("home");
folders("journal");
folders("projects");
folders("marky", "marky/dev", "marky/static");
folders("error", "static", "static/img", "static/ico");

@route("/")
class indx extends response {
  async get() {
    //
    return await App.html({
      path: "/",
    });
  }
}
@route("/<string:tab>")
class inSTR extends response {
  async get() {
    //
    return await App.html({
      path: this.path,
    });
  }
}

index({
  path: "/svg",
  name: "svg",
});

// serve();
