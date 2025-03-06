// @bun
import{readdirSync as tt,rmSync as it,statSync as nt,unlinkSync as rt,watch as ot}from"fs";import st from"path";import{mkdirSync as a,writeFileSync as Li,existsSync as v}from"fs";var q=(t)=>typeof t==="function";var N=(t)=>{return!isNaN(parseFloat(t))&&isFinite(t)};var B=(t)=>Array.isArray(t),L=(t)=>typeof t==="object";var R=(t)=>{return Number.isInteger(Number(t))};class ${static set p(t){if(Array.isArray(t))console.log(...t);else console.log(t)}}class w{_c=0;_id="";constructor(t){if(this._c=0,this._id=t??G(5),t?.includes("-")){let[i,n]=[t.split("-").slice(0,-1).join("-"),t.split("-").slice(-1)[0]];this._id=i,this._c=N(n)?parseInt(n):0}}get id(){return this._id+"-"+this._c}get mid(){return this._id+"-"+ ++this._c}}var Dt=new RegExp(/(\d+)(\d*)/,"m"),m=(t)=>Array.from({length:t},(i,n)=>n),d="ABCDEFGHIJKLMNOPQRSTUVWXYZ",P="abcdefghijklmnopqrstuvwxyz",K=m(10).join("");var F=(t)=>JSON.stringify(t),X=(t)=>{return JSON.parse(t)},W=(t)=>{if(t.startsWith("webkit"))t="-"+t;return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()},G=(t)=>{let i=d+P;return Array.from({length:t},(n,r)=>i+(r?K:"")).reduce((n,r)=>{return n+=r.charAt(Math.floor(Math.random()*r.length))},"")};class g extends Map{obj(t){t&&s(t).forEach(([i,n])=>this.set(i,n))}map(t){t.forEach((i,n)=>{if(i instanceof g)this.set(n,i);else if(B(i)){if(this.lacks(n))this.set(n,[]);this.get(n).push(...i)}else if(L(i))this.ass(n,i);else this.set(n,i)})}ass(t,i){if(!this.has(t))this.set(t,{});I(this.get(t),i)}lacks(t){return!this.has(t)}init(t,i){return this.has(t)?this.get(t):this.set(t,i).get(t)}}var{entries:s,fromEntries:Z,hasOwn:A}=Object;var I=Object.assign;var T=(t,i)=>{return{name:t,content:i}},_=(t,i)=>{return{property:t,content:i}},V=(t,i)=>{return{"http-equiv":t,content:i}};class Q{metas=[];constructor(t){t&&this.metas.push(T("description",t))}author(t){return this.meta=T("author",t),this}charset(t){return this.meta={charset:t},this}keywords(...t){return this.meta=T("keywords",t.join(", ")),this}viewport(t){let i=s(t).map(([n,r])=>[W(n),String(r)].join("="));return this.meta=T("viewport",i.join(", ")),this}httpEquiv(t){return s(t).forEach(([i,n])=>{this.meta=V(W(i),String(n))}),this}robots(...t){return this.meta=T("robots",t.join(", ")),this}themeColor(t){return this.meta=T("theme-color",t),this}openGraph(t){return s(t).forEach(([i,n])=>{this.meta=_("og:"+i,String(n))}),this}twitter(t){return s(t).forEach(([i,n])=>{this.meta=T("twitter:"+i,String(n))}),this}and(t){return this}set meta(t){this.metas.push(t)}}var c=["charset","name","property","http-equiv"],C=(t,i)=>{i.forEach((n)=>{for(let r of c)if(r in n){let o=n[r];t[`${r}_${r==="charset"?"":o}`]=n}})},j=(t,i)=>{i.forEach((n)=>{if("href"in n){let r=n.href;t[`${r}`]=n}})};class S{_head;idm;constructor(t){this._head=new g(t)}set head(t){s(t).forEach(([i,n])=>{if(i==="title"||i==="base"){if(n!==void 0)this._head.set(i,n);return}if(n instanceof Q)return C(this._head.init("meta",{}),n.metas);if(!B(n))return;switch(i){case"meta":return C(this._head.init("meta",{}),n);case"link":return j(this._head.init("link",{}),n);case"script":if(n.length){this._head.init(i,[]);let r=n.map((o)=>{if(!o.yid&&this.idm)o.yid="sc"+this.idm.mid;return o});this._head.get(i).push(...r)}return}})}get head(){return this._head}set id(t){this.idm=new w(t)}}class p{lang="en";htmlHead=new g;head;constructor(){this.head=(t={})=>{let i=new S(this.htmlHead);i.head=t,this.htmlHead=i.head}}}var O=(t,i=!1)=>{if(N(t))return[+t,R(t)?"int":"float"];if(i&&/\.\w+$/.test(t))return[t,"file"];if(t==="/")return[t,"-"];if(t.length===36&&t.match(/\-/g)?.length===4)return[t,"uuid"];return[t,"string"]},U=(t)=>{let i=t.startsWith("/")?t:"/"+t,n=i.match(/(?<=\/)[^/].*?(?=\/|$)/g)??["/"],[r,o]=n.reduce(([f,x],h)=>{if(h.includes("<")){let J=h.match(/(?<=<)[^/].*?(?=>|$)/g);if(J?.length){let[D,u]=J[0].split(":");if(D&&u)f.push(D),x.push(u)}}else f.push(h===">"?"/":h);return[f,x]},[[],[]]);if(i.endsWith("/")&&i.length>1)r.push("/");return{parsed:r,args:o}};class M{storage=new g;cache(t,i){if(this.storage.lacks(t))this.storage.set(t,i());return this.storage.get(t)}}var e=["int","float","file","uuid","string"],k=new M;class l{_storage=new g;set(t){let{parsed:i,path:n}=t,r=F(i);if(!this._storage.get(r))this._storage.set(r,t);else throw`path: ${n} already used.`}get(t){let{parsed:i}=k.cache(t,()=>U(t)),n={},r=this._storage.get(F(i));if(!r&&t!=="/")for(let o of this._storage.keys()){let f=[],x=X(o);if(i.length===x.length){let h=x.map((u,E)=>{let b=O(i[E],i.length-1===E);if(u===b[0])return b[0];if(e.includes(b[1]))return f.push(b[0]),b[1];return u}),J=F(h);if(this._storage.has(J)){r=this._storage.get(J),r?.args.forEach((u,E)=>{n[u]=f[E]});break}}}return[r,n]}}var Y=(t)=>{if(v(t))return!0;return a(t,{recursive:!0}),!0};class y{dir;out;files;external;drop;target;define;exclude=[];hashAsset;plugins=[];successFN;clearing=!1;constructor({files:t,target:i="browser",define:n={},hashAsset:r,external:o=[],drop:f=[],plugins:x=[],out:h="./app",dir:J="./src",base:D="",successFN:u}){this.out=h+D,this.dir=J+D,this.files=t.map((E)=>(this.dir+"/"+E).replaceAll("//","/")),this.hashAsset=r==null?!0:r,this.external=o,this.drop=f,this.plugins=x,Y(this.out),this.target=i,this.successFN=u,this.define=n}clear(t={exclude:[]}){t.exclude.length&&this.exclude.push(...t.exclude),this.clearing=!0;let i=(n)=>{let r=tt(n);if(r.length==0){it(n,{recursive:!0});return}r.forEach((o)=>{if(o.startsWith(".")||o.endsWith(".html")||this.exclude.includes(o))return;let f=st.join(n,o);if(nt(f).isDirectory())i(f);else rt(f)})};return i(this.out),this}async build(){let t=`[dir]/[name]${this.hashAsset?"-[hash]":""}.[ext]`;if(this.files.length)try{let i=await Bun.build({entrypoints:this.files,outdir:this.out,splitting:!0,minify:{identifiers:!0,whitespace:!0,syntax:!0},target:this.target??"browser",naming:{chunk:"[dir]/[name]-[hash].[ext]",entry:"[dir]/[name].[ext]",asset:t},define:{...ft(this.define)},loader:{".css":"file"},external:this.external,drop:this.drop,plugins:this.plugins});if(i.success){let n=new Date().toLocaleTimeString();$.p=`builder @ ${n}`;try{await this.successFN?.()}catch(r){$.p=r}}else $.p=i.logs}catch(i){$.p=i}return this}async watch(t){let i=ot(this.dir,{recursive:!0},async(n,r)=>{if(r&&r.endsWith("tsx")){this.clearing&&this.clear();try{await this.build()}catch(o){console.error(o)}}t?.(n,r)});process.on("SIGINT",()=>{console.log(`
watcher closed...`),i.close(),process.exit(0)})}}var ft=(t)=>{return Z(s(t).map(([i,n])=>{let r=n;if(q(n))r=n();return[i,F(r)]}))};export{y as default};
