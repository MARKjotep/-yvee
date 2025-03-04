import { $, $$, frag, dom, __ } from "yvee";
import * as i from "./css";
import { A, path } from "../../..";

import { RocketLaunch } from "@yvee/material-svg";
import { Marky as MK } from "./svg";

const aces = {
  "/": {
    t: "Yvee",
    s: <RocketLaunch />,
  },
  "/-yvee": {
    t: "Yvee2",
    s: <RocketLaunch />,
  },
};

export default (a: attr & { isM?: boolean }, ...D: ctx[]) => {
  //
  const { isM, ..._a } = a;

  __.class(_a, [i.navy]);

  return (
    <nav {..._a}>
      <ul class={[i.list]}>
        {__.O.items(aces).map(([k, v]) => {
          return (
            <li>
              <A href={k} draggable="false" class={[i.lia, i.slctd]}>
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
      <span>
        <MK />
      </span>
      <span>MARKjotep</span>
    </a>
  );
};
