import { SweetSS, ps, f, v } from "sweetss";
import { $ } from "@sweetss/qt";

const { sweet, cx, dom, save } = new SweetSS({
  __filename,
  exportMap: false,
});

export default sweet;

/*
-------------------------

-------------------------
*/

/*
  -------------------------
  ROOT
  -------------------------
  */
cx.root = [
  $.FLEX.column.CENTER.start.gap2,
  $.WIDTH.pr100,
  $.HEIGHT.screen,
  $.OVERFLOW.hidden,
  $.MIN.HEIGHT.screen,
  $.MAX.HEIGHT.screen,
  $.MIN.WIDTH[30],
  $.POSITION.relative,
];

cx.hero = [
  //
  $.PADDING[1].TOP[3],
];
cx.search = [
  //
  $.RADIUS[2],
  $.WIDTH.pr100.SMD[40],
  $.PADDING.value([1, 2]),
  ps.child("input")(
    //
    $.RADIUS[1.5],
    $.PADDING[1],
    $.BORDER.none,
    $.WIDTH.pr100,
    ps.focus()(
      //
      $.OUTLINE.none,
    ),
  ),
];

/*
-------------------------

-------------------------
*/
