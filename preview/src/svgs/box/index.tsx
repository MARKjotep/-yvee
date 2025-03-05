import { $, $$, dom, __, useRef, State } from "yvee";
import * as i from "../css";
import { Search } from "@yvee/box-svg";
import * as Box from "@yvee/box-svg";

export default (a: attr, ...D: ctx[]) => {
  //

  return (
    <div class={[i.svcMAIN]}>
      <Info />
      <CTX />
    </div>
  );
};

const _MATS = __.O.items(Box).sort();

const Info = () => {
  return (
    <div class={[i.info]}>
      <div class={[i.desc]}>
        <Title />
      </div>
      <SearchBox />
    </div>
  );
};

const Title = () => {
  return (
    <div class={[i.title]}>
      <span>{_MATS.length.toLocaleString()}</span>
      <span>SVG icons</span>
    </div>
  );
};

const inValue = State("");

const SearchBox = () => {
  const SBOX_Ref = useRef();
  const _e: events = {
    keyup(e) {
      const allowedKeys = /^[a-zA-Z0-9]$/;

      if (
        allowedKeys.test(e.key) ||
        e.key === "Backspace" ||
        e.key === "Delete"
      ) {
        inValue.value = SBOX_Ref.$?.value;
      }
    },
    ready() {
      if (inValue.value) {
        const _E = $(this);
        _E.value = inValue.value;
        _E.focus;
      }
    },
  };
  return (
    <div class={[i.searchBox]}>
      <Search />
      <input
        name="search"
        class={[i.search]}
        placeholder="Search"
        on={_e}
        ref={SBOX_Ref}
      />
    </div>
  );
};

const reCamel = (_case: string) => {
  if (_case.startsWith("webkit")) {
    _case = "-" + _case;
  }
  return _case.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase();
};

const CTX = () => {
  const _e: events = {
    watch() {
      const _E = $(this);
      return [
        (str: string) => {
          let _str = str.toLowerCase();
          _E.children.forEach((c) => {
            const sname = c.children[1].inner;
            const HX = _str.split(" ").every((s2) => {
              return sname.split(" ").some((s) => {
                return s.includes(s2);
              });
            });
            if (HX) {
              c.remove(i.noDisplay);
            } else {
              c.add(i.noDisplay);
            }
          });
        },
        inValue,
        true,
      ];
    },
  };

  return (
    <div class={[i.ctx]} on={_e}>
      {_MATS.map(([k, V]) => {
        //
        const kk = reCamel(k).split("_");
        return (
          <div>
            <div>
              <V />
            </div>
            <div {...(kk[1] ? { type: kk[1] } : {})}>{kk[0]}</div>
          </div>
        );
      })}
    </div>
  );
};
