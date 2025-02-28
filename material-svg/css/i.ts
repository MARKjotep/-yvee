import { $$, SweetSS, ps, f, v } from "sweetss";
import { $ } from "@sweetss/qt";
import { _bgc, _clr, _scroll, _hovClr, _divs } from "./vars";
import Root from "./root/i";
import SVG from "./svgs/i";

const { sweet, cx, dom, save } = new SweetSS({
  __filename,
  exportMap: false,
  sweetSS: [Root, SVG],
});

export default sweet;

/*
-------------------------

-------------------------
*/

dom[":root"] = [
  //
  _bgc,
  _clr,
  _scroll,
  _hovClr,
  _divs,
];

dom.html = [
  //
  $.FONT.SIZE.px(10),
  $.COLOR.color(_clr),
  $.SCROLL.smooth,
];

dom.body = [
  //
  $.OVERFLOW.hidden,
  $.FONT.google.SIZE[1.3],
  $.BG.color(_bgc),
  $.MAX.HEIGHT.screen,
];

dom["html, body"] = [
  //
  $.OVERSCROLL.XNone.YNone,
];

dom[`*`] = [
  //
  $.MARGIN[0],
  $.PADDING[0],
];

dom[`*, *:before, *:after`] = $.BOX.border;

/*
-------------------------

-------------------------
*/

save({
  dir: ["./preview"],
  minify: false,
});

console.log(`sweetss @ ${new Date().toLocaleTimeString()}`);
