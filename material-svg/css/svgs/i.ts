import { SweetSS, ps, f, v, med } from "sweetss";
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
cx.svgs = [
  //
  $.FLEX.grow(1).wrap.gap2.START.center.WRAPPED.start,
  $.WIDTH.pr100,
  $.HEIGHT.auto,
  $.OVERFLOW.Y.scroll,
  $.PADDING[2],
  ps.child("div")(
    //
    $.FLEX.column.CENTER.start.gap(1),
    $.WIDTH[10].SMD[12],
    $.HEIGHT[10].SMD[12],

    ps.child("div")(
      //
      $.FLEX.gap1,
      ps.nthChild(1)(
        $.HEIGHT[10],
        $.WIDTH.pr100,
        $.FLEX.START.center,
        ps.child("svg")(
          //
          $.HEIGHT[3].SMD[5],
          $.WIDTH[3].SMD[5],
        ),
      ),
      //
      ps.nthChild(2)(
        //
        $.FLEX.wrap.START.center,
        $.TEXT.ALIGN.center,
        $.FONT.SIZE[1.1].SMD[1.2],
        $.OPACITY[0.7],
        $.HEIGHT.pr100,
        $.WIDTH.pr100,
        $.noSelect,
      ),
    ),
  ),
  //

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
      backgroundColor: med("#262626", { dark: "white" }),
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

cx.svnone = [
  //
  {
    display: "none!important",
  },
  $.BG.COLOR.random,
];

/*
-------------------------

-------------------------
*/
