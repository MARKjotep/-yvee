import { dom, frag, doc, $$, Router } from "yvee";
import App from "..";

const { A, path } = App;

//
export default async ({ ab }: { ab: string }) => {
  return (
    <div>
      <div>{ab ?? path.value} not found</div>
      <A href="/">home</A>
    </div>
  );
};
