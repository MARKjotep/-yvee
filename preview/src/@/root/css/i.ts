import { SweetSS, ps, v, f, $$ } from "sweetss";
import { $ } from "@sweetss/qt";
import Nav from "../nav/css/i";
import Foot from "../footer/css/i";
import Home from "../../../home/css/i";

import {
  _bgc,
  _clr,
  _scroll,
  _hovClr,
  _divs,
  tHome,
  tJour,
  tProj,
  tMarky,
} from "../../vars";

const { cx, dom, save, sweet } = new SweetSS({
  __filename,
  sweetSS: [Nav, Foot, Home],
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
  tHome,
  tJour,
  tProj,
  tMarky,
];

dom.html = [
  //
  $.FONT.SIZE.px(10),
  $.COLOR.color(_clr),
  $.SCROLL.smooth,
];

dom.body = [
  $.OVERFLOW.Y.auto.X.auto,
  $.FONT.google.SIZE[1.3],
  $.BG.color(_bgc),

  ps.scrollbar()(
    //
    $.WIDTH[1],
    $.HEIGHT[1],
  ),
  ps.scrollbarTrack()({
    backgroundColor: v.inherit,
  }),
  ps.scrollbarThumb()(
    {
      backgroundColor: _scroll,
      borderRadius: 2,
      backgroundClip: "content-box",
      border: "2.5px solid transparent",
    },
    ps.hover()({
      border: "1px solid transparent",
      cursor: v.grabbing,
    }),
  ),
  ps.scrollbarCorner()({
    backgroundColor: v.inherit,
  }),
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
ROOT
-------------------------
*/

cx.root = [
  //
  $.FLEX.columnReverse.SMD.column.LG.row,
  $.FLEX.CENTER.start.LG.START.start,
  $.WIDTH.pr100,
  $.MIN.HEIGHT.screen,
  $.MIN.WIDTH[30],
];

cx.main = [
  //
  $.FLEX.CENTER.start.grow(1),
  $.FLEX.column,
  $.WIDTH.pr100,
  $.HEIGHT.pr100,
  $.MIN.HEIGHT.LG.screen,
];

cx.ctx = [
  //
  $.FLEX.grow(1).column.CENTER.start,
  $.WIDTH.pr100,
];

/*
-------------------------

-------------------------
*/
save({
  dir: ["./src", "./app"],
  mapDir: __dirname,
  minify: true,
});
