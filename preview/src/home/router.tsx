import { $, $$, frag, dom, doc, Router, Dom, __ } from "yvee";
import { FamilyHome } from "@yvee/material-svg";
import * as i from "./css";

// Edit and push link history based on the position of the argument from the link --
// But how??
export const { load, route, Main, path, A } = new Router();

@route("/")
class KKK extends doc {
  body() {
    return <div>boy</div>;
  }
}

@route("/svg")
class SVGS extends doc {
  import = import("../svgindx");
}

export default () => {
  return (
    <div class={[i.selection]}>
      <Links />
      <Main />
    </div>
  );
};

const asa: Record<string, any> = {
  "/": <FamilyHome />,
  "/svg": "SVG",
};

const Links = () => {
  const pt = path.value;
  const _e: events = {
    watch() {
      const _E = $(this);
      return [
        (pt) => {
          //
          _E.children.forEach((fc) => {
            const HFC = fc.attr.get("href");
            if (HFC && HFC === pt) {
              fc.add(i.slctd);
            } else {
              fc.remove(i.slctd);
            }
          });
        },
        path,
      ];
    },
  };

  return (
    <div class={[i.links]} on={_e}>
      {__.O.items(asa).map(([k, v]) => {
        return (
          <A href={k} class={[pt === k ? i.slctd : undefined]}>
            {v}
          </A>
        );
      })}
    </div>
  );
};
