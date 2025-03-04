import { SweetSS, ps, fileName, Var, v, med } from "sweetss";
import { $ } from "@sweetss/qt";

const { cx, kf, save, sweet } = new SweetSS({
  __filename,
  sweetSS: [],
  prefix: "l",
});

export default sweet;

cx.library = [
  //
  $.MAX.WIDTH[90],
  $.WIDTH.pr100,
  $.FLEX.column.CENTER.start,
];

cx.hero = [
  //
  $.HEIGHT[20],
  $.WIDTH.pr100,
  $.FLEX.column.CENTER.center.gap2,
  $.RADIUS[2],
  $.PADDING.INLINE[3],
];

cx.hero_top = [
  //
  $.FONT.SIZE[5],
  $.FLEX.gap1.CENTER.end,
];
cx.hero_desc = [
  //
  $.MAX.WIDTH[60],
];

cx.svLOGO = [
  //
  $.HEIGHT[5],
  $.WIDTH[5],
  $.COLOR.AUTODARK.lightblue,
];

save({
  dir: ["./src/LIBRARY", "./app/LIBRARY"],
  mapDir: __dirname,
  minify: true,
});
