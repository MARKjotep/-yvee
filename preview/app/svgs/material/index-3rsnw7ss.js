import{d as p,e as f}from"../../index-pgbt96md.js";import{f as h,g as d,h as y,i as a,j as S,k as _,l as $,m as k}from"../../index-etpejt5s.js";import{H as o,I as v,J as e,L as c,M as u}from"../../index-mftdqck2.js";var I=(s,...i)=>{return e("div",{class:[$]},e(B,null),e(E,null))},w=o.O.items(f).sort(),B=()=>{return e("div",{class:[y]},e("div",{class:[d]},e(C,null)),e(D,null))},C=()=>{return e("div",{class:[k]},e("span",null,w.length.toLocaleString()),e("span",null,"SVG icons"))},r=v(""),D=()=>{let s=u();return e("div",{class:[_]},e(p,null),e("input",{name:"search",class:[S],placeholder:"Search",on:{keyup(t){if(/^[a-zA-Z0-9]$/.test(t.key)||t.key==="Backspace"||t.key==="Delete")r.value=s.$?.value},ready(){if(r.value){let t=c(this);t.value=r.value,t.focus}}},ref:s}))},X=(s)=>{if(s.startsWith("webkit"))s="-"+s;return s.replace(/([a-z])([A-Z])/g,"$1 $2").toLowerCase()},E=()=>{return e("div",{class:[h],on:{watch(){let i=c(this);return[(t)=>{let l=t.toLowerCase();i.children.forEach((n)=>{let g=n.children[1].inner;if(l.split(" ").every((x)=>{return g.split(" ").some((A)=>{return A.includes(x)})}))n.remove(a);else n.add(a)})},r,!0]}}},w.map(([i,t])=>{return e("div",null,e("div",null,e(t,null)),e("div",null,X(i)))}))};export{I as default};
