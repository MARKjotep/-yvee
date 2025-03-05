import { SweetSS, ps, fileName, Var, f, v, med } from "sweetss";
import { $ } from "@sweetss/qt";
import { _bgc, _clr } from "../../@/vars";

const { cx, kf, dom, save, sweet } = new SweetSS({
  __filename,
  sweetSS: [],
  exportMap: false,
  prefix: "s",
});

export default sweet;

cx.svcMAIN = [
  //
  $.FLEX.column.grow(1),
];

cx.info = [
  //
  $.POSITION.sticky,
  $.TOP[5].LG[1],
  $.MIN.HEIGHT[15],
  $.BG.color(_bgc),
  $.FLEX.START.end.gap2.column,
  $.PADDING[1],
  $.ZIndex[1],
  ps.after()(
    //
    $.POSITION.absolute,
    $.HEIGHT[3],
    $.transform({ translateY: 3 }),
    $.WIDTH.pr100,
    $.BOTTOM[0],
    $.LEFT[0],
    $.BG.IMAGE.linear("to bottom", _bgc, ["transparent", "80%"]),
  ),
];

cx.desc = [
  //
  $.FLEX.grow(1),
  $.PADDING.INLINE[1.5],
];

cx.title = [
  //
  $.FLEX.gap(1),
  $.FONT.SIZE[1.9],
];

cx.searchBox = [
  //
  $.FLEX.gap1,
  ps.child("svg")(
    //
    $.HEIGHT[3.5],
    $.WIDTH[3.5],
    $.transform({ rotateY: 180 }),
  ),
];

cx.search = [
  //

  $.HEIGHT[4],
  $.RADIUS[3],
  $.WIDTH[25],
  $.PADDING.INLINE[1],
  $.FONT.SIZE[1.6],
  ps.focus()(
    //
    $.OUTLINE.none,
  ),
];

cx.ctx = [
  //
  $.PADDING[1],
  $.PADDING.TOP[2],
  $.HEIGHT.pr100,
  $.FLEX.row.grow(1).START.start.gap(1),
  $.FLEX.wrap.WRAPPED.start,
  $.noSelect,
  ps.child("div")(
    //
    $.WIDTH[12],
    $.HEIGHT[12],
    $.MAX.WIDTH[12],
    $.OVERFLOW.hidden,
    $.FLEX.column.gap1,
    $.POSITION.relative,
    ps.child("div")(
      ps.nthChild(1)(
        //
        $.HEIGHT[6],

        $.FLEX.CENTER.center,
      ),
      ps.nthChild(2)(
        //
        $.FLEX.START.center.grow(1),
        $.TEXT.ALIGN.center,
        $.LINE[2],
        $.FONT.SIZE[1.1].SMD[1.2],
        $.OPACITY[0.7],
      ),
    ),
  ),
  ps.desc("svg")(
    //
    $.HEIGHT[4].SMD[5],
    $.WIDTH[4].SMD[5],
  ),
];

dom[`[type]`] = [
  ps.after()(
    $.POSITION.absolute,
    $.RIGHT[0],
    $.TOP[0],
    $.FONT.SIZE[0.8],
    $.RADIUS[3],
    $.BG.COLOR.royalblue,
    $.PADDING.value([0, 0.5]),
  ),
];

dom[`[type="solid"]`] = [
  ps.after()({
    content: f.attr("type"),
  }),
];

dom[`[type="logo"]`] = [
  ps.after()(
    {
      content: f.attr("type"),
    },
    $.BG.COLOR.orchid,
  ),
];

cx.noDisplay = [
  //
  $.BG.COLOR.random,
  {
    display: "none!important",
  },
];

/*
-------------------------
-------------------------
*/

save({
  mapDir: __dirname,
});
