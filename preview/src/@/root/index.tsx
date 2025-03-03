import { frag, dom } from "yvee";
import Nav from "./nav";
import Main from "./main";
import Foot from "./footer";
import * as i from "./css";

export default (
  a: attr & {
    nav?: attr & { isM: boolean };
    main?: attr;
    foot?: attr;
  },
  ...D: ctx[]
) => {
  const { nav, main, foot } = a;
  //
  return (
    <>
      <Nav {...nav} />
      <Main {...main}>
        <div class={[i.ctx]}>{...D}</div>
        <Foot {...foot} />
      </Main>
    </>
  );
};
