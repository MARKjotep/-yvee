import { SweetSS, ps, Var, f, med } from "sweetss";
import { $ } from "@sweetss/qt";
import {
  _clr,
  _divs,
  _hovClr,
  tHome,
  tJour,
  tProj,
  tMarky,
} from "../../../vars";

const { cx, kf, save, sweet } = new SweetSS({
  __filename,
  exportMap: false,
  prefix: "n",
});

export default sweet;

const { before } = ps;

cx.navy = [
  $.POSITION.sticky,
  $.BOTTOM[0].SMD.auto,
  $.TOP.SMD[0],
  $.MIN.HEIGHT[7].LG.screen,
  $.WIDTH.pr100.LG.auto,
  $.FLEX.CENTER.start.LG.START.start,
  $.FLEX.LG.column,
  $.DISPLAY.flex.PRINT.none,
];

const _nClr = Var({ _nClr: _clr });
cx.list = [
  _nClr,
  $.FLEX.row.LG.column,
  $.FLEX.gap0.SM.gap(1),
  $.FLEX.CENTER.even.SMD.CENTER.start.LG.START.start,
  $.WIDTH.pr100.LG[10].XL[14],
  $.PADDING.SMD[1],
  $.LIST.none,
  $.noSelect,
  // //
  ps.child("li")(
    $.WIDTH.LG.pr100,
    $.RADIUS[3].LG[2],
    ps.nthChild(1)(_nClr.new(tHome)),
    ps.nthChild(2)(_nClr.new(tJour)),
    ps.nthChild(3)(_nClr.new(tProj)),
    ps.nthChild(4)(
      _nClr.new(tMarky),
      ps.has(".slctd")(
        tMarky.new(med("#b051df", { dark: "#DE9AFF" })),
        //
      ),
    ),
    ps.has(".slctd")(
      ps.desc("svg")($.COLOR.color(_nClr)),
      //
    ),
  ),
];

cx.lia = [
  //
  $.COLOR.color(_clr),
  $.FLEX.END.center.LG.CENTER.center.XL.END.start,
  $.FLEX.gap(1),
  $.FLEX.LG.column.XL.row,
  $.PADDING.value([1, 1.5]).LG.value([1.5, 1.5]),
  $.TEXT.DECOR.none,
  $.MIN.WIDTH[7].SM[8].LG.pr100,
  $.OPACITY[0.6],
  $.FONT.SIZE[1.1].SMD[1.2],
  {
    webkitTapHighlightColor: "transparent",
  },
  ps.desc("svg")(
    //
    $.HEIGHT[2.5].SM[2],
    $.WIDTH[2.5].SM[2],
  ),
  ps.child("span")(
    $.FLEX.CENTER.center,

    ps.nthChild(2)(
      //
      $.FLEX.JUSTIFY.center.XL.start,
      $.DISPLAY.none.SM.flex,
    ),
  ),
];

cx.slctd = [
  //
  $.COLOR.color(_clr),
  $.POSITION.relative,
  $.OPACITY[1],
  // $.FONT.bold,
  //
  before()(
    //
    $.HEIGHT.pr100,
    $.WIDTH.pr100,
    $.POSITION.absolute,
    $.TOP[0],
    $.LEFT[0],
    $.RADIUS[3].LG[2],
    $.ZIndex[-1],
    $.TRANSITION.DURATION[0.25],
    $.TRANSITION.PROPERTY.background,
    $.BG.COLOR.MIX.srgb(_divs, ["transparent", "40%"]),
  ),
];

const clrs: string[][] = [
  ["#359dfd", "#4971d4", "#8b7dfc", "#b153e0", "#b064fd", "#359dfd"],
  ["#84C4FF", "#84A6FF", "#AA9EFF", "#DE9AFF", "#D0A0FF", "#84C4FF"],
];
//
cx.marky = [
  $.FONT.bold,
  $.BG.IMAGE.linear("90deg", ...clrs[0]).DARK.linear("90deg", ...clrs[1]),
  $.animation(["moving", "8s", "linear", "infinite"]),
  $.BG.CLIP.text,
  $.BG.SIZE.value(["300%", "100%"]),
  $.OPACITY[1],
  {
    webkitBackgroundClip: "text",
    webkitTextFillColor: "transparent",
  },
  ps.desc("svg")(
    //
    $.COLOR.color(tMarky),
  ),
];

kf.moving = {
  "0%": [
    //
    $.BG.POSITION.XY("0%", "50%"),
  ],
  "100%": [
    //
    $.BG.POSITION.XY("300%", "50%"),
  ],
};

/*
-------------------------

-------------------------
*/
save({
  mapDir: __dirname,
});
