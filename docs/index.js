import{b as z}from"./index-qcvx8n5y.js";import{s as $}from"./index-hn1wqhe4.js";import{A as O,u as A,v as Y,w as Z,y as Q}from"./index-95jjqff5.js";import{C as _,E as o,F as f,G as d,H as a,J as t,K,M as I,N as s,P as st,Q as l,R as rt}from"./index-bpjhmbd3.js";var M="./i.css";var P="./favicon.ico";var U="./static/site.webmanifest";var T=(r)=>{r({title:"Welcome!",meta:new d("Made with love by marky"),link:[{rel:"stylesheet",href:M,as:"style"},{rel:"icon",sizes:"32x32",type:"image/png",href:P},{rel:"manifest",href:U}]})};var y="n_actv";var D="n_lia",E="n_list",F="n_marky",G="n_navy",k="n_slctd";var _t={"/":{t:"Yvee",s:t(z,null)},"/svg":{t:"SVG",s:t(Y,null)},"/library":{t:"Library",s:t(Z,null)}},N=(r,...i)=>{let{isM:e,on:p,...h}=r;a.class(h,[G]);let L=C.value,g=I(),c=!1,at=0,lt={...p??{},winscroll(x){let m=window.scrollY;if(m>50){if(!c)g.$?.add(y),c=!0}else if(c)g.$?.remove(y),c=!1;at=m}};return t("nav",{...h,on:lt,ref:g},t("ul",{class:[E]},a.O.items(_t).map(([x,m])=>{let v=u+x,b=void 0;if(L===v)b=k;else if(v!==u+"/"&&L.startsWith(v))b=k;return t("li",null,t(S,{href:x,draggable:"false",class:[D,b]},t("span",null,m.s),t("span",null,m.t)))}),t("li",null,t(ft,{is:e}))))},ft=({is:r=!1})=>{return t("a",{href:"https://github.com/MARKjotep",draggable:"false",class:[D,F]},t("span",null,t(O,null)),t("span",null,"MARKjotep"))};var j="main";var q=(r,...i)=>{return a.class(r,[j]),t("main",{...r},...i)};var W="built",X="footer",V="hearty",J="hmarky";var R=(r,...i)=>{return a.class(r,[X]),t("footer",{...r},t("div",null),t("div",null),t("div",{class:[J]},t(Q,{class:[V]}),t("span",null,"Marky")),t("div",{class:[W]},t(A,null),t("span",null,"Thu, 06 Mar 2025 20:58:22 GMT")))};var H="ctx";var n=(r,...i)=>{let{nav:e,main:p,foot:h}=r;return t(K,null,t(N,{...e}),t(q,{...p},t("div",{class:[H]},...i),t(R,{...h})))};var tt="./error/i.css";var it=rt((r)=>{class i extends s{head(){let e=`error ${this.status}`;this.title=e,this.meta=new d(e),this.css=tt}import=import("./error/index-2gy8xy0f.js");async body(){return t(n,null,this.import)}}i=o([r()],i)});var et=l((r)=>{class i extends s{async head(){this.title="@yvee"}import=import("./HOME/index-c4mf2cg4.js");body(){return t(n,null,this.import)}}i=o([r("/")],i)});var w="./svg/i.css";var ot=l((r)=>{class i extends s{async head(){this.title="SVG",this.css=[w],await $("/")}import=import("./svg/index-4sj2fggn.js");body(){return t(n,null,this.import)}}i=o([r("/svg")],i);class e extends i{async head(){this.title="@yvee SVG",this.css=[w],await $("/"+this.args.tab)}}e=o([r("/svg/<string:tab>")],e)});var B="./LIBRARY/i.css";var nt=l((r)=>{class i extends s{async head(){this.title="Library",this.css=B}import=import("./LIBRARY/index-04pdf2j8.js");body(){return t(n,null,this.import)}}i=o([r("/library")],i);class e extends i{async head(){this.title="@yvee LIBRARY",this.css=[B]}}e=o([r("/library/<string:tab>")],e)});var{head:Dt,error:kt,route:ut,load:wt,path:C,A:S,base:u}=new st(import.meta,{pushState:!1,classes:["root"],base:"/-yvee"});T(Dt);it(kt);[et,ot,nt].forEach((r)=>{r(ut)});var ni=await wt();export{ut as route,C as path,wt as load,Dt as head,kt as error,ni as default,u as base,S as A};
export{ni as a};
