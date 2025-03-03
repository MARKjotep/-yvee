import { SweetSS, ps, v, f, $$ } from "sweetss";
import { $ } from "@sweetss/qt";

const { cx, kf, save, sweet } = new SweetSS({
  __filename,
  exportMap: false,
  sweetSS: [],
});

export default sweet;

cx.home = [
  //
  $.FLEX.column,
  $.PADDING.INLINE[2],
];

cx.hero = [
  //
  $.MIN.HEIGHT[20],
  $.FLEX.CENTER.center.column.gap2,

  ps.child("h1")(
    //
    $.FLEX.CENTER.center.gap(1),
    ps.child("svg")(
      //
      $.COLOR.AUTODARK.yellow,
      $.ANIMATION.SET(kf).bounce,
    ),
  ),
  ps.child("p")(
    //
    $.MAX.WIDTH[60],
    $.TEXT.INDENT[2.5],
  ),
];

cx.selection = [{}];

cx.links = [
  //
  $.FLEX.gap2.CENTER.center,
  $.FONT.SIZE[2],

  ps.child(".slctd")(
    //
    $.POSITION.relative,

    ps.before()(
      //
      $.HEIGHT[0.5],
      $.WIDTH.pr100,
      $.BOTTOM[0],
      $.BG.COLOR.AUTODARK.royalblue,
      $.POSITION.absolute,
      $.ZIndex[-1],
      $.RADIUS[5],
      $.transform({
        translateY: 0.5,
      }),
    ),
  ),
  ps.child("*")(
    //
    $.COLOR.ivory,
    $.TEXT.DECOR.none,
  ),
  ps.desc("svg")(
    //
    $.HEIGHT[3],
    $.WIDTH[3],
  ),
];

/*
-------------------------

-------------------------
*/
save({
  mapDir: __dirname,
});
