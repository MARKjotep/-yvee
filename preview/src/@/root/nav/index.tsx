import { $, $$, frag, dom, __ } from "yvee";
import * as i from "./css";
import { A, path } from "../../..";
import { CategoryAlt, Health } from "@yvee/box-svg";
import { Yvee } from "../../svg";

const aces = {
  "/": {
    t: "Yvee",
    s: <Yvee />,
  },
  "/svg": {
    t: "SVG",
    s: <Health />,
  },
  "/library": {
    t: "Library",
    s: <CategoryAlt />,
  },
};

export default (a: attr & { isM?: boolean }, ...D: ctx[]) => {
  //
  const { isM, ..._a } = a;

  __.class(_a, [i.navy]);

  const PT = path.value;

  return (
    <nav {..._a}>
      <ul class={[i.list]}>
        {__.O.items(aces).map(([k, v]) => {
          let isc = undefined;
          if (k !== "/") {
            isc = PT.includes(k) ? i.slctd : undefined;
          } else {
            isc = PT.endsWith(k) ? i.slctd : undefined;
          }
          return (
            <li>
              <A href={k} draggable="false" class={[i.lia, isc]}>
                <span>{v.s}</span>
                <span>{v.t}</span>
              </A>
            </li>
          );
        })}
        <li>
          <Marky is={isM} />
        </li>
      </ul>
    </nav>
  );
};

const Marky = ({ is = false }) => {
  return (
    <a
      href="https://github.com/MARKjotep"
      draggable="false"
      class={[i.lia, i.marky]}
    >
      <span>{/* <logo.Github /> */}</span>
      <span>MARKjotep</span>
    </a>
  );
};
