import { SweetSS } from "sweetss";
import { $ } from "@sweetss/qt";

const { cx, dom, save, sweet } = new SweetSS({
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

/*
-------------------------

-------------------------
*/
save({
  mapDir: __dirname,
});
