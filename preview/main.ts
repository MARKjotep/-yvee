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

@route("/svg/<string:tab>")
class inSVG extends response {
  async get() {
    //
    return await App.html({
      path: this.path,
    });
  }
}

@error(404)
class er1 extends response {
  async get() {
    return await App.html({
      path: this.path,
      status: this.status,
    });
  }
}

index({
  path: "/svg/box",
});

// serve();
