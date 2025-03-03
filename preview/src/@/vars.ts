import { Var, med } from "sweetss";
import { gray, blue } from "@sweetss/colors";

//
/*
-------------------------
Themes
-------------------------
*/
export const tHome = Var({ tHome: med("#2a87df", { dark: "#84C4FF" }) });
export const tJour = Var({ tJour: med("#d04475", { dark: "#eb94b3" }) });
export const tProj = Var({ tProj: med("#1b988b", { dark: "#2dc5b6" }) });
export const tMarky = Var({ tMarky: med("#6658d4", { dark: "#AA9EFF" }) });

export const _rootLinear = Var({
  _rootLinear: med("#EFE4DA", { dark: "#041e28" }),
});
export const _bgc = Var({
  _bgc: med("#e6e5e5", { dark: "#131b1f" }),
});

export const _clr = Var({
  _clr: gray[950](),
});

export const _divs = Var({
  _divs: gray[400](0.5),
});

export const _hovBG = Var({
  _hovBG: med("#4a4a4a", { dark: "#c8c8c869" }),
});

export const _hovClr = Var({
  _hovClr: med("#3f3f3f", { dark: "#ebebeb" }),
});

export const _scroll = Var({
  _scroll: med("#8d8d8d", { dark: "#5d5d5d" }),
});

export const _shad = Var({
  _shad: `0rem 0.14rem 0.28rem #11111137, 0rem 0.1rem 0.1rem #11111137`,
});
