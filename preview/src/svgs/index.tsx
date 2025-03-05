import { $, $$, doc, frag, dom, Router, __ } from "yvee";
import Material from "./material/router";
import Box from "./box/router";
import * as i from "../SVG/css";
import { Pin } from "@yvee/box-svg";

export const { route, Main, load, A, path } = new Router({
  classes: [i.MAIN],
});

[
  //
  Material,
  Box,
].forEach((r) => r(route));
//

@route("/")
class main extends doc {
  head() {}
  body() {
    return (
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        eligendi eveniet ratione rem! Dignissimos doloremque dolores dicta neque
        amet modi repellendus harum, laborum minus aperiam quam? Architecto
        repellat itaque aspernatur?
      </div>
    );
  }
}

export default (a: attr, ...D: ctx[]) => {
  const _e: events = {
    watch() {
      const _E = $(this);
      let lasty = 0;
      const it = __.O.keys(XX);
      return [
        (pt) => {
          const ind = it.indexOf(pt);
          _E.a.fade();
          if (ind >= lasty) {
            _E.a.slide.left();
          } else {
            _E.a.slide.right();
          }
          lasty = ind;
        },
        path,
      ];
    },
  };
  return (
    <div class={[i.svgs]}>
      <Links />
      <Main />
    </div>
  );
};

const XX: Record<string, any> = {
  "/": <Pin class={[i.pin]} />,
  "/material": "Material",
  "/box": "Box",
};

const X2: Record<string, { a?: string; c: any }> = {
  "/": {
    a: "home",
    c: <Pin class={[i.pin]} />,
  },
  "/material": {
    a: "material",
    c: "Material",
  },
  "/box": {
    a: "box",
    c: "Box",
  },
};

const Links = (a: attr, ...D: ctx[]) => {
  return (
    <ul class={[i.LIST]}>
      {__.O.items(X2).map(([k, v]) => {
        const { a, c } = v;
        const isSLC = SLCTD(path.value, k, i.slctd);

        return (
          <li>
            <A
              href={k}
              class={[isSLC]}
              on={WatchPath(i.slctd)}
              draggable="false"
              aria-label={a}
            >
              {c}
            </A>
          </li>
        );
      })}
    </ul>
  );
};

const SLCTD = (pt: string, href: string, rt: string) => {
  return pt === href ? rt : undefined;
};

const WatchPath = (cls: string): events => {
  return {
    watch(e) {
      const _E = $(this);
      return [
        (pt) => {
          const atr = _E.attr.get("href");
          if (atr && atr === pt) {
            _E.add(cls);
          } else {
            _E.remove(cls);
          }
        },
        path,
      ];
    },
  };
};
