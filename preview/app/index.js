import{b as F}from"./index-bq83hs2v.js";import{s as w}from"./index-n2hrt7mz.js";import{A as Z,u as V,v as O,w as I,y as X}from"./index-16ttnct0.js";import{C as f,E as o,F as p,G as _,H as a,J as t,K as Q,M as E,N as n,P as st,Q as l,R as tt,S as b}from"./index-mftdqck2.js";var L="./i.css";var M="./favicon.ico";var T="./static/site.webmanifest";var P=(r)=>{r({title:"Welcome!",meta:new _("Made with love by marky"),link:[{rel:"stylesheet",href:L,as:"style"},{rel:"icon",sizes:"32x32",type:"image/png",href:b("/",M)},{rel:"manifest",href:b("/",T)}]})};var y="n_actv";var u="n_lia",Y="n_list",U="n_marky",G="n_navy",D="n_slctd";var dt={"/":{t:"Yvee",s:t(F,null)},"/svg":{t:"SVG",s:t(O,null)},"/library":{t:"Library",s:t(I,null)}},S=(r,...e)=>{let{isM:i,on:g,...h}=r;a.class(h,[G]);let B=C.value,v=E(),d=!1,nt=0,at={...g??{},winscroll(m){let c=window.scrollY;if(c>50){if(!d)v.$?.add(y),d=!0}else if(d)v.$?.remove(y),d=!1;nt=c}};return t("nav",{...h,on:at,ref:v},t("ul",{class:[Y]},a.O.items(dt).map(([m,c])=>{let x=void 0;if(m!=="/")x=B.includes(m)?D:void 0;else x=B.endsWith(m)?D:void 0;return t("li",null,t(z,{href:m,draggable:"false",class:[u,x]},t("span",null,c.s),t("span",null,c.t)))}),t("li",null,t(_t,{is:i}))))},_t=({is:r=!1})=>{return t("a",{href:"https://github.com/MARKjotep",draggable:"false",class:[u,U]},t("span",null,t(Z,null)),t("span",null,"MARKjotep"))};var N="main";var j=(r,...e)=>{return a.class(r,[N]),t("main",{...r},...e)};var A="built",W="footer",q="hearty",R="hmarky";var J=(r,...e)=>{return a.class(r,[W]),t("footer",{...r},t("div",null),t("div",null),t("div",{class:[R]},t(X,{class:[q]}),t("span",null,"Marky")),t("div",{class:[A]},t(V,null),t("span",null,"Wed, 05 Mar 2025 23:15:36 GMT")))};var H="ctx";var s=(r,...e)=>{let{nav:i,main:g,foot:h}=r;return t(Q,null,t(S,{...i}),t(j,{...g},t("div",{class:[H]},...e),t(J,{...h})))};var K="./error/i.css";var rt=tt((r)=>{class e extends n{head(){let i=`error ${this.status}`;this.title=i,this.meta=new _(i),this.css=K}import=import("./error/index-ndym5a1z.js");async body(){return t(s,null,this.import)}}e=o([r()],e)});var et=l((r)=>{class e extends n{async head(){this.title="@yvee"}import=import("./HOME/index-apbykejh.js");body(){return t(s,null,this.import)}}e=o([r("/")],e)});var k="./SVG/i.css";var it=l((r)=>{class e extends n{async head(){this.title="SVG",this.css=[k],await w("/")}import=import("./SVG/index-3zd5bef2.js");body(){return t(s,null,this.import)}}e=o([r("/svg")],e);class i extends e{async head(){this.title="@yvee SVG",this.css=[k],await w("/"+this.args.tab)}}i=o([r("/svg/<string:tab>")],i)});var $="./LIBRARY/i.css";var ot=l((r)=>{class e extends n{async head(){this.title="Library",this.css=[$]}import=import("./LIBRARY/index-2hhtawb5.js");body(){return t(s,null,this.import)}}e=o([r("/library")],e);class i extends e{async head(){this.title="@yvee LIBRARY",this.css=[$]}}i=o([r("/library/<string:tab>")],i)});var{head:yt,error:ut,route:Dt,load:kt,path:C,A:z}=new st(import.meta,{pushState:!1,classes:["root"],prefix:"/-yvee"});P(yt);rt(ut);[et,it,ot].forEach((r)=>{r(Dt)});var re=await kt();export{Dt as route,C as path,kt as load,yt as head,ut as error,re as default,z as A};
export{re as a};
