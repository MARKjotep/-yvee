import { SweetSS, ps, fileName, Var, f, med } from "sweetss";
import { $ } from "@sweetss/qt";
import SVGS from "../../svgs/css/i";
import { _bgc } from "../../@/vars";

const { cx, kf, save, sweet } = new SweetSS({
  __filename,
  sweetSS: [SVGS],
  prefix: "s",
});

export default sweet;

cx.svg = [
  //
  $.MAX.WIDTH[110],
  $.WIDTH.pr100,
  $.FLEX.column.grow(1),
];

cx.hero = [
  //
  $.HEIGHT[15],
  $.WIDTH.pr100,
  $.FLEX.column.CENTER.center.gap2,
  $.RADIUS[2],
  $.PADDING.INLINE[3],
];

cx.hero_top = [
  //
  $.FONT.SIZE[5],
  $.FLEX.gap1.CENTER.end,
];

cx.hero_desc = [
  //
  $.MAX.WIDTH[60],
];

cx.LOGO = [
  //
  $.HEIGHT[5],
  $.WIDTH[5],
  $.COLOR.AUTODARK.khaki,
];

cx.svgs = [
  //
  $.FLEX.column.CENTER.start.grow(1),
  $.WIDTH.pr100,
  $.HEIGHT.pr100,
];

cx.LIST = [
  //
  $.FLEX.CENTER.start.gap2,
  $.LIST.none,
  $.WIDTH.pr100,
  $.ZIndex[1],
  $.PADDING.LEFT[2],
  $.POSITION.sticky,
  $.TOP[5].LG[0],
  $.HEIGHT[10],
  $.BG.color(_bgc),
  $.noSelect,
  $.ZIndex[2],
  ps.desc(".slctd")(
    //
    $.COLOR.AUTODARK.antiquewhite,
    $.FONT.bold,
    $.POSITION.relative,

    ps.before()(
      //
      $.POSITION.absolute,
      $.HEIGHT[0.5],
      $.WIDTH.pr(80),
      $.BOTTOM[-1.25],
      $.BG.COLOR.AUTODARK.turquoise,
      $.RADIUS[4],
    ),
  ),
  ps.desc("a")(
    //
    $.TEXT.DECOR.none,
    $.COLOR.AUTOLIGHT.darkslategray,
    $.FONT.SIZE[1.6],
    $.FLEX.CENTER.center,
    {
      webkitTapHighlightColor: "transparent",
    },
  ),
];

cx.pin = [
  //
  $.ANIMATION.SET(kf).bounce,
];

cx.MAIN = [
  //

  $.WIDTH.pr100,
  $.HEIGHT.auto,
  $.FLEX.column.grow(1),
];

/*
-------------------------
Main CLSS
-------------------------
*/

/*
-------------------------
-------------------------
*/

save({
  dir: ["./src/SVG", "./app/SVG"],
  mapDir: __dirname,
  minify: true,
});
