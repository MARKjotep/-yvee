import { SweetSS } from "sweetss";
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
  $.FLEX.column.START.start,
  $.PADDING[2],
];

cx.built = [
  //
  $.FLEX.END.center.gap(1),
];

cx.hearty = [
  //
  $.ANIMATION.SET(kf).bounce,
  $.COLOR.AUTODARK.indianred,
];

/*
-------------------------

-------------------------
*/
save({
  mapDir: __dirname,
});
