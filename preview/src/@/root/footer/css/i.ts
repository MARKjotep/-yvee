import { SweetSS, ps } from "sweetss";
import { $ } from "@sweetss/qt";

const { cx, kf, save, sweet } = new SweetSS({
  __filename,
  exportMap: false,
});

export default sweet;

/*
-------------------------

-------------------------
*/

cx.footer = [
  //
  $.DISPLAY.flex.PRINT.none,
  $.WIDTH.pr100,
  $.FLEX.column.START.start.gap1,
  $.PADDING[2],
];

cx.hmarky = [
  //
  $.FLEX.END.center.gap(1),
];

cx.hearty = [
  //
  $.ANIMATION.SET(kf).bounce,
  $.COLOR.AUTODARK.indianred,
];

cx.built = [
  //
  $.FLEX.gap1.END.center,
  ps.desc("svg")(
    //
    $.COLOR.AUTODARK.skyblue,
  ),
];

/*
-------------------------

-------------------------
*/
save({
  mapDir: __dirname,
});
