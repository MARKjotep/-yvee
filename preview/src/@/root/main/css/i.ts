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

cx.main = [
  //
  $.FLEX.column.CENTER.start.grow(1),
  $.WIDTH.pr100,
  $.HEIGHT.pr100,
  $.MIN.HEIGHT.screen,
  $.BORDER.bRandom,
];

/*
-------------------------

-------------------------
*/
save({
  mapDir: __dirname,
});
