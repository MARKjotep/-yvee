var Ye=Object.create;var{getPrototypeOf:Ze,defineProperty:B,getOwnPropertyNames:Je}=Object;var Fe=Object.prototype.hasOwnProperty;var Bt=(e,t,s)=>{s=e!=null?Ye(Ze(e)):{};let i=t||!e||!e.__esModule?B(s,"default",{value:e,enumerable:!0}):s;for(let r of Je(e))if(!Fe.call(i,r))B(i,r,{get:()=>e[r],enumerable:!0});return i};var Gt=(e,t)=>{for(var s in t)B(e,s,{get:t[s],enumerable:!0,configurable:!0,set:(i)=>t[s]=()=>i})};var Kt=function(e,t,s,i){var r=arguments.length,a=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,s):i,n;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")a=Reflect.decorate(e,t,s,i);else for(var h=e.length-1;h>=0;h--)if(n=e[h])a=(r<3?n(a):r>3?n(t,s,a):n(t,s))||a;return r>3&&a&&Object.defineProperty(t,s,a),a};var Xt=((e)=>typeof require!=="undefined"?require:typeof Proxy!=="undefined"?new Proxy(e,{get:(t,s)=>(typeof require!=="undefined"?require:t)[s]}):e)(function(e){if(typeof require!=="undefined")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var Ve=Object.defineProperty,Be=(e,t)=>{for(var s in t)Ve(e,s,{get:t[s],enumerable:!0,configurable:!0,set:(i)=>t[s]=()=>i})},Ge=function(e,t,s,i){var r=arguments.length,a=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,s):i,n;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")a=Reflect.decorate(e,t,s,i);else for(var h=e.length-1;h>=0;h--)if(n=e[h])a=(r<3?n(a):r>3?n(t,s,a):n(t,s))||a;return r>3&&a&&Object.defineProperty(t,s,a),a},Ke=(e,t)=>{if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)},ge={};Be(ge,{isWindow:()=>H,isUndefined:()=>we,isStr:()=>re,isPromise:()=>Qe,isPlainObject:()=>se,isObj:()=>y,isNumber:()=>R,isNum:()=>me,isNull:()=>D,isNotWindow:()=>S,isInt:()=>ve,isFN:()=>L,isDict:()=>te,isClassOrId:()=>et,isBool:()=>ie,isAsync:()=>Xe,isArraybuff:()=>Ue,isArr:()=>f});var L=(e)=>typeof e==="function",Xe=(e)=>e.constructor.name==="AsyncFunction",Qe=(e)=>!!e&&typeof e.then==="function",R=(e)=>{return!isNaN(parseFloat(e))&&isFinite(e)},te=(e)=>{return typeof e==="object"&&e!==null&&!Array.isArray(e)},se=(e)=>{return typeof e==="object"&&e!==null&&Object.getPrototypeOf(e)===Object.prototype},Ue=(e)=>{return e instanceof Uint8Array||e instanceof ArrayBuffer||typeof e==="string"},et=(e)=>{return e.startsWith(".")||e.startsWith("#")},ie=(e)=>typeof e==="boolean",re=(e)=>typeof e==="string",f=(e)=>Array.isArray(e),y=(e)=>typeof e==="object",me=(e)=>typeof e==="number",D=(e)=>e===null,we=(e)=>typeof e==="undefined",ve=(e)=>{return Number.isInteger(Number(e))},H=typeof window!=="undefined",S=typeof window==="undefined";function ye(e,t){d(t).forEach(([s,i])=>{ot(e,s,{value:i,writable:!1,configurable:!1,enumerable:!0})})}class I{static set p(e){if(Array.isArray(e))console.log(...e);else console.log(e)}}class b{_c=0;_id="";constructor(e){if(this._c=0,this._id=e??g(5),e?.includes("-")){let[t,s]=[e.split("-").slice(0,-1).join("-"),e.split("-").slice(-1)[0]];this._id=t,this._c=R(s)?parseInt(s):0}}get id(){return this._id+"-"+this._c}get mid(){return this._id+"-"+ ++this._c}}var Ut=new RegExp(/(\d+)(\d*)/,"m"),tt=(e)=>Array.from({length:e},(t,s)=>s),st="ABCDEFGHIJKLMNOPQRSTUVWXYZ",it="abcdefghijklmnopqrstuvwxyz",rt=tt(10).join(""),k=(e)=>JSON.stringify(e),at=(e)=>{return JSON.parse(e)},X=(e)=>{if(e.startsWith("webkit"))e="-"+e;return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()},g=(e)=>{let t=st+it;return Array.from({length:e},(s,i)=>t+(i?rt:"")).reduce((s,i)=>{return s+=i.charAt(Math.floor(Math.random()*i.length))},"")};class u extends Map{obj(e){e&&d(e).forEach(([t,s])=>this.set(t,s))}map(e){e.forEach((t,s)=>{if(t instanceof u)this.set(s,t);else if(f(t)){if(this.lacks(s))this.set(s,[]);this.get(s).push(...t)}else if(y(t))this.ass(s,t);else this.set(s,t)})}ass(e,t){if(!this.has(e))this.set(e,{});m(this.get(e),t)}lacks(e){return!this.has(e)}init(e,t){return this.has(e)?this.get(e):this.set(e,t).get(e)}}var{values:_,keys:C,entries:d}=Object,{hasOwn:nt,freeze:ht,defineProperty:ot,assign:m}=Object,w=(e)=>{return Object.keys(e).length},be=(e,t)=>{if(!t.has(e))t.set(e,new u);return t.get(e)},z=(e,t)=>{if(!t.has(e))t.set(e,[]);return t.get(e)},Ee=(e,t)=>{let s={added:{},removed:{},modified:{}},i=C(e),r=C(t);for(let a of r){let n=e[a],h=t[a];if(!(a in e))s.added[a]=h;else if(f(n)&&f(h)){if(k(n)!==k(h))s.modified[a]={old:n,new:h}}else if(y(n)&&y(h)&&!D(n)&&!D(h)){let o=Ee(n,h);if(w(o.added)||w(o.removed)||w(o.modified))s.modified[a]={old:n,new:h}}else if(n!==h)s.modified[a]={old:n,new:h}}for(let a of i)if(!(a in t))s.removed[a]=e[a];return s};function lt(e,t){if(e.size!==t.size)return!1;for(let s of e)if(!t.has(s))return!1;return!0}var ut=(e)=>{return _(e).some((t)=>{return w(t)})};function ct(e){let t;return class extends e{constructor(...s){if(t)return t;super(...s);ht(this),t=this}}}var E=(e,t)=>{return{name:e,content:t}},ft=(e,t)=>{return{property:e,content:t}},dt=(e,t)=>{return{"http-equiv":e,content:t}};class ke{metas=[];constructor(e){e&&this.metas.push(E("description",e))}author(e){return this.meta=E("author",e),this}charset(e){return this.meta={charset:e},this}keywords(...e){return this.meta=E("keywords",e.join(", ")),this}viewport(e){let t=d(e).map(([s,i])=>[X(s),String(i)].join("="));return this.meta=E("viewport",t.join(", ")),this}httpEquiv(e){return d(e).forEach(([t,s])=>{this.meta=dt(X(t),String(s))}),this}robots(...e){return this.meta=E("robots",e.join(", ")),this}themeColor(e){return this.meta=E("theme-color",e),this}openGraph(e){return d(e).forEach(([t,s])=>{this.meta=ft("og:"+t,String(s))}),this}twitter(e){return d(e).forEach(([t,s])=>{this.meta=E("twitter:"+t,String(s))}),this}and(e){return this}set meta(e){this.metas.push(e)}}class Se{title;description;base;meta;link;script;css}var pt=["charset","name","property","http-equiv"],ue=(e,t)=>{t.forEach((s)=>{for(let i of pt)if(i in s){let r=s[i];e[`${i}_${i==="charset"?"":r}`]=s}})},gt=(e,t)=>{t.forEach((s)=>{if("href"in s){let i=s.href;e[`${i}`]=s}})};class J{_head;idm;constructor(e){this._head=new u(e)}set head(e){d(e).forEach(([t,s])=>{if(t==="title"||t==="base"){if(s!==void 0)this._head.set(t,s);return}if(s instanceof ke)return ue(this._head.init("meta",{}),s.metas);if(!f(s))return;switch(t){case"meta":return ue(this._head.init("meta",{}),s);case"link":return gt(this._head.init("link",{}),s);case"script":if(s.length){this._head.init(t,[]);let i=s.map((r)=>{if(!r.yid&&this.idm)r.yid="sc"+this.idm.mid;return r});this._head.get(t).push(...i)}return}})}get head(){return this._head}set id(e){this.idm=new b(e)}}var ce=(e)=>{return d(e).reduce((t,[s,i])=>{return t.push(ie(i)&&i?s:`${s}="${i}"`),t},[""]).join(" ")},mt=(e)=>{if(!e)return"";return[...e].reduce((t,[s,i])=>{if(s==="meta"||s==="link")i=_(i);if(re(i))return t.push(`<${s}>${i}</${s}>`),t;if(!f(i))return t;let r=i.map((a)=>{if(s==="script"){let n={...a};if("yid"in n)return"";let h="";if("importmap"in n)n.type="importmap",h=JSON.stringify(n.importmap),delete n.importmap;else if("body"in n)h=n.body,delete n.body;return`<${s}${ce(n)}>${h}</${s}>`}return`<${s}${ce(a)}>`});return t.push(...r),t},[]).join("")};class _e{lang="en";htmlHead=new u;head;constructor(){this.head=(e={})=>{let t=new J(this.htmlHead);t.head=e,this.htmlHead=t.head}}}var wt=(e)=>{if(S)return;return new Promise((t,s)=>{let i=document.createElement("link");if(e.rel!=="stylesheet")e.rel="stylesheet",e.as="style";d(e).forEach(([r,a])=>{i.setAttribute(r,a)}),i.onload=()=>t(i),i.onerror=()=>s(new Error("Failed to load CSS")),document.head.appendChild(i)})},vt=(e)=>{return new Promise((t,s)=>{let i=document.createElement("script"),r="";if("importmap"in e)e.type="importmap",r=JSON.stringify(e.importmap),delete e.importmap;else if("body"in e)r=e.body,delete e.body;if(r)i.innerHTML=r;d(e).forEach(([a,n])=>{i.setAttribute(a,n)}),i.onload=()=>t(i),i.onerror=()=>s(new Error("Failed to load Script")),document.head.appendChild(i)})};var yt=(e,t=!1)=>{if(R(e))return[+e,ve(e)?"int":"float"];if(t&&/\.\w+$/.test(e))return[e,"file"];if(e==="/")return[e,"-"];if(e.length===36&&e.match(/\-/g)?.length===4)return[e,"uuid"];return[e,"string"]},$e=(e)=>{let t=e.startsWith("/")?e:"/"+e,s=t.match(/(?<=\/)[^/].*?(?=\/|$)/g)??["/"],[i,r]=s.reduce(([a,n],h)=>{if(h.includes("<")){let o=h.match(/(?<=<)[^/].*?(?=>|$)/g);if(o?.length){let[l,c]=o[0].split(":");if(l&&c)a.push(l),n.push(c)}}else a.push(h===">"?"/":h);return[a,n]},[[],[]]);if(t.endsWith("/")&&t.length>1)i.push("/");return{parsed:i,args:r}};class Ae{storage=new u;cache(e,t){if(this.storage.lacks(e))this.storage.set(e,t());return this.storage.get(e)}}var bt=["int","float","file","uuid","string"],Et=new Ae;class q{_storage=new u;set(e){let{parsed:t,path:s}=e,i=k(t);if(!this._storage.get(i))this._storage.set(i,e);else throw`path: ${s} already used.`}get(e){let{parsed:t}=Et.cache(e,()=>$e(e)),s={},i=this._storage.get(k(t));if(!i&&e!=="/")for(let r of this._storage.keys()){let a=[],n=at(r);if(t.length===n.length){let h=n.map((l,c)=>{let v=yt(t[c],t.length-1===c);if(l===v[0])return v[0];if(bt.includes(v[1]))return a.push(v[0]),v[1];return l}),o=k(h);if(this._storage.has(o)){i=this._storage.get(o),i?.args.forEach((l,c)=>{s[l]=a[c]});break}}}return[i,s]}}class ae{path="";parsed=[];args=[];constructor(e){ye(this,{path:e,...$e(e)})}}class kt{static rand(e=6,t){if(t)return Math.floor(Math.random()*(t-e+1)+e);return Math.floor(Math.random()*e)+1-1}static fill(e,t=null){return Array(e).fill(t)}static new({dom:e,id:t,inner:s}){let i=document.createElement(e);if(t)i.id=t;if(s)i.innerHTML=s;return i}static randFrom(e){if(Array.isArray(e)){let t=e.length,s=this.rand(0,t-1);return e[s]}else if(typeof e=="object"){let t=C(e),s=t.length,i=this.rand(0,s-1);return t[i]}}static makeID=g;static class(e,t){let s=t;if(e?.class)s.push(...f(e.class)?e.class:[e.class]);e.class=t}static get O(){return{vals:_,keys:C,items:d,has:nt,ass:m,len:(e={})=>C(e).length}}static get is(){return ge}static get return(){return je}}class je{static array(e){return f(e)?e:[e]}}class xe{value;constructor(e){this.value=e}get str(){return String(this.value).toString()=="null"?null:String(this.value).toString()}get int(){if(R(this.value))return parseInt(this.value);else return null}get float(){if(R(this.value))return parseFloat(this.value);else return null}get bool(){if(this.value==="true")return!0;else if(this.value=="false")return!1;else return null}get json(){if(this.value)return JSON.parse(this.value);return null}}class Le{key;func;storage;constructor(e,t="local"){if(typeof e=="object"){let[s,i]=d(e)[0];this.key=s,this.func=i}else this.key=e,this.func=null;this.storage=t=="local"?localStorage:sessionStorage}get as(){return new xe(this.storage.getItem(this.key))}get value(){return this.storage.getItem(this.key)}get save(){if(this.func)this.set=this.func();return}set set(e){if(typeof e=="object")this.storage.setItem(this.key,JSON.stringify(e));else this.storage.setItem(this.key,String(e))}get remove(){this.storage.removeItem(this.key);return}}var fe={get:(e)=>new Le(e)};class M extends ae{id;cls;constructor(e,t,s){super(e);this.id=t,this.cls=s}}class Q extends ae{id;cls;constructor(e,t,s){super(e);this.id=t,this.cls=s}}class Oe extends _e{base;storage=new q;errorStorage=new q;wssStorage=new q;route;error;wss;constructor(e){super();this.base=e,this.route=(t)=>{return(s)=>{if(this.storage.set(new M(t,g(5),s)),this.base)this.storage.set(new M(this.base+t,g(5),s));return s}},this.wss=(t)=>{return(s)=>{if(this.wssStorage.set(new Q(t,g(5),s)),this.base)this.wssStorage.set(new Q(this.base+t,g(5),s));return s}},this.error=(...t)=>{return(s)=>{if(t.length)t.forEach((i)=>{this.errorStorage.set(new M(i.toString(),g(5),s))});else this.errorStorage.set(new M("404",g(5),s));return s}}}async getPath(e){return this.storage.get(e)}async loadError(e){return this.errorStorage.get(e.toString())}async loadWSS(e){return this.wssStorage.get(e)}}var P=new u,W=(e)=>{if(S)return;let t=P.get(e);if(t?.isConnected)return t;P.delete(e);let s=document.getElementById(e);if(!s)return;return P.set(e,s),s};function St(){let e=[];return P.forEach((t,s)=>{if(!t.isConnected)e.push(s),P.delete(s)}),e}function Me(e,t,{id:s="state",init:i}={}){let r=[],a=()=>t.map((h)=>h.value),n=()=>{e(...a())};if(t.forEach((h)=>{r.push(h.hook(n)(s))}),i)n();return()=>{r.forEach((h)=>h())}}var _t=(e)=>{e.forEach((t)=>t())},$t=(e,t)=>{for(let[s,i]of e){let r=W(s);if(!r){e.delete(s);continue}i.forEach((a)=>{a.call(r,t)})}};class N extends EventTarget{options;hooks=new u;states=new u;_value;listening=!1;end;constructor(e,t){super();this.options=t,this._value=e}get value(){return this._value}set value(e){if(D(e)||we(e))return;if(se(this._value)||f(this._value)){let t=Ee(this._value,e);if(!ut(t))return}else if(this._value instanceof Set){if(!lt(this._value,e))return}else if(this._value===e)return;this._value=e,this.dispatchEvent(new CustomEvent("updated",{detail:this._value}))}get listen(){let e=(t)=>{if(_t(this.hooks),$t(this.states,t.detail),!this.states.size&&!this.hooks.size)this.end?.()};if(!this.listening)this.addEventListener("updated",e,this.options),this.listening=!0;return()=>{this.listening&&this.removeEventListener("updated",e,this.options),this.end=void 0,this.listening=!1}}call(e,t){return(s)=>{if(be(s,this.states).set(t,e),!S&&!this.listening)this.end=this.listen;return()=>{if(this.states.has(s))this.states.get(s)?.delete(t)}}}hook(e){return(t)=>{if(this.hooks.set(t,e),!S&&!this.listening)this.end=this.listen;return()=>{if(this.hooks.has(t))this.hooks.delete(t)}}}}function A(e){return new N(e)}var Y=(e)=>{if(f(e))return e.filter((t)=>t!==void 0).join(" ");else if(y(e)){if(te(e))return k(e)}else if(L(e))return Y(e());else if(e!==void 0&&e!==null)return ie(e)?e?"":"false":String(e);return""};function At(e,t){switch(t??e){case"style":return function(s){this.style.setProperty(e,s)};default:return function(s){this.setAttribute(e,s)}}}class Ce{attr;constructor(e={}){this.attr=e}get(e,t=this.attr,s){let i=(r,a)=>{if(f(a))e.attr_push(r,Y(a));else if(a instanceof N){let n=s?`${s}_${r}`:r;e.states.push(a.call(At(r,s),n)),i(r,a.value)}else if(y(a)){if(te(a)&&!s)this.get(e,a,r)}else e.attr_push(r,Y(a),s)};d(t).forEach(([r,a])=>{if(r==="ref"){if(a instanceof oe)e.events.obj({element(){a.element=this}})}else if(["on"].includes(r))y(t.on)&&e.events.obj(t.on);else i(r,a)})}}class ne{xid;IDM;map=new u;states=[];events=new u;OZ;constructor(e,t=new b,s){this.xid=e,this.IDM=t,this.OZ=s??new he}attr_push(e,t,s){let i=s??e;if(!this.map.has(i))this.map.set(i,[]);let r=s?`${X(e)}:${t};`:t;this.map.get(i).push(r)}get attr(){let e=[""];return this.map.forEach((t,s)=>{let i=t.join("");e.push(i?`${s}="${i}"`:s)}),e.join(" ")}set id(e){if(!this.map.has("id"))this.map.set("id",[e])}get id(){return this.map.get("id")?.join("")}}var jt=(e,t,s)=>{return e.addEventListener(t,s),()=>{e.removeEventListener(t,s)}},O={};class he{events=new u;states=new u;winStates=new u;windowEvents=new u;resetST=new u;resetEV=new u;constructor(){}get keys(){return[...new Set([...this.states.keys(),...this.events.keys()])]}set(e){let{id:t,events:s,states:i}=e;if(t){if(s.size)this.events.set(t,s);if(i.length)this.states.set(t,i)}return this}push(e){return e.events.forEach((t,s)=>{t.forEach((i,r)=>{be(s,this.events).set(r,i)})}),e.states.forEach((t,s)=>{z(s,this.states).push(...t)}),this}get stage(){return this.events.forEach((e,t)=>{this.events.delete(t);let s=W(t);if(!s){this.events.delete(t);return}e.forEach((i,r)=>{switch(r){case"ready":case"element":i.apply(s,[s]);break;case"resize":case"beforeunload":case"popstate":case"winscroll":case"winload":case"winfocus":case"winblur":let a=r.replace(/^win/,"");this.windowEvents.init(a,new u).set(t,i);break;case"watch":let[n,h,o]=i.apply(s,[s]),l=f(h)?h:[h],c=()=>l.map((V)=>V.value),v=()=>n(...c());if(o)v();l.forEach((V)=>z(t,this.resetST).push(V.call(v,t+"_watch")(t)));break;default:z(t,this.resetEV).push(jt(s,r,i))}})}),this.processWindowEvents,this.states.forEach((e,t)=>{this.states.delete(t),e.forEach((s)=>{z(t,this.resetST).push(s(t))})}),this}get processWindowEvents(){let e=(t,s)=>{let i=0,r=!1,a=(h)=>{if(i=window.scrollY,!r)window.requestAnimationFrame(()=>{s.forEach((o,l)=>{let c=W(l);if(c)o.call(c,h);else this.windowEvents.get(t)?.delete(l)}),r=!1}),r=!0},n=(h)=>{s.forEach((o,l)=>{let c=W(l);if(c)o.call(c,h);else this.windowEvents.get(t)?.delete(l)})};return window.addEventListener(t,t==="scroll"?a:n),()=>{window.removeEventListener(t,t==="scroll"?a:n)}};return this.windowEvents.forEach((t,s)=>{if(t.size){if(!O[s])O[s]=e(s,t)}else if(O[s])O[s](),delete O[s]}),this}reset(e){return e.forEach((t)=>{this.windowEvents.forEach((s,i)=>{if(s.has(t))s.delete(t)}),this.resetEV.get(t)?.forEach((s)=>{s()}),this.resetST.get(t)?.forEach((s)=>{s()}),this.resetST.delete(t),this.resetEV.delete(t)}),this}RPS(e){if(e){let t=St();this.reset(t);let s=e.keys;if(s.length)this.reset(s).push(e).stage}return this}}var j=new he,xt=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],Lt=(e)=>xt.includes(e);function Ot(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}var Z=(e,t)=>{if(f(e))return e.map((s)=>Z(s,t)).join("");else if(e instanceof T){let s=e.__(t.IDM),{ctx:i,oz:r}=s;return t.OZ.push(r),i}else if(y(e))return k(e);else if(L(e))return Z(e(),t);else if(e!==void 0&&e!==null)return Ot(e);return""},Pe=(e,t)=>{let s=new b(e),i=new ne(s.id,s);return{ctx:Z(t,i),catt:i}};function Mt(e){let t=this.id;if(t){let{ctx:s,catt:i}=Pe(t,e);if(this.innerHTML!==s)this.innerHTML=s,j.RPS(i.OZ)}}var U=(e,t,s,i=[])=>{if(f(e))e.forEach((r)=>{U(r,e.length,s,i)});else if(e instanceof N)if(t>1)U(F("div",{},e),t,s,i);else{let r=e.value,a=r instanceof T?"dom":"ctx",{ctx:n,catt:h}=Pe(s.xid+"-0",r);s.xid=h.xid,i.push(n),s.OZ.push(h.OZ),s.states.push(e.call(Mt,a))}else i.push(Z(e,s))};class Re{tag;ctx;closing;constructor(e,t){this.tag=e,this.ctx=t;let s=Lt(e);this.closing=s?"":`</${e}>`}process(e,t=this.ctx,s=[]){return t.forEach((i)=>{U(i,t.length,e,s)}),s.join("")}get(e){let t=this.process(e);if(e.events.size||e.states.length)e.id=e.xid;return`<${this.tag}${e.attr}>${t}${this.closing}`}}class T{tag;constructor(e,t={},...s){this.tag=e,ye(this,{attr:new Ce(t),ctx:new Re(e,s)})}__(e=new b){let t=e.mid,s=new ne(t,e);return this.attr.get(s),{ctx:this.ctx.get(s),oz:s.OZ.set(s),id:s.id}}}function F(e,t={},...s){if(L(e))return e(t??{},...s);return new T(e,t??{},s)}var es=(e,...t)=>t;class He{e;opt;constructor(e){this.e=e,this.opt={duration:500,easing:"ease-in-out",fill:"forwards"}}animate(e,t={}){return this.e.animate(e,t)}get slide(){let e=({x:t=0,y:s=0},i={})=>{m(this.opt,i);let r=[[t,s],[0,0]].map(([a,n])=>({transform:`translateX(${a}rem) translateY(${n}rem)`}));return this.e.animate(r,this.opt),this};return{left:(t={})=>{return e({x:-2},t)},right:(t={})=>{return e({x:2},t)},up:(t={})=>{return e({y:2},t)},down:(t={})=>{return e({y:-2},t)}}}fade(e={}){m(this.opt,e);let t=[0,1].map((s)=>({opacity:s}));return this.e.animate(t,this.opt),this}shake(e="Y",t={}){m(this.opt,t);let s=[0,5,-5,5,0].map((i)=>({transform:`translate${e}(${i}px)`}));return this.e.animate(s,this.opt),this}color(e=[],t={}){m(this.opt,t);let s=Array.isArray(e)?e.map((i)=>({color:i})):{color:e};return this.e.animate(s,this.opt),this}bg(e=[],t={}){m(this.opt,t);let s=Array.isArray(e)?e.map((i)=>({backgroundColor:i})):{backgroundColor:e};return this.e.animate(s,this.opt),this}bounce(e=1,t={}){m(this.opt,t);let s=[0.5,e,1].map((i)=>({transform:`scale(${i})`}));return this.e.animate(s),this}}class Ie{e;query;constructor(e,t){this.e=e,this.query=t}get a(){return new He(this)}get all(){if(this.query){let e=document.querySelectorAll(this.query);if(e.length)return Array.from(e).map((t)=>t)}return[]}get attr(){let e=this.e;return{has:(t)=>{return e.hasAttribute(t)},get:(t)=>{return e.getAttribute(t)},del:(t)=>{return e.removeAttribute(t),this},set:(t)=>{for(let s in t){let i=t[s];if(t[s]!==void 0)e.setAttribute(s,Y(i))}return this}}}get children(){return Array.from(this.e.children).map((e)=>p(e))}get click(){return this.e.click(),this}get delete(){return this.e.remove(),this}get disabled(){return this.e.disabled??!1}get focus(){return this.e.focus(),this}get href(){return this.e?.href??""}get id(){return this.e.id}get inner(){return this.e.innerHTML}get offsetParent(){let e=this.e.offsetParent;if(e)return new x(e);return}get parent(){let e=this.e.parentElement;if(e)return new x(e);return}get path(){return this.e?.pathname??""}get rect(){return this.e.getBoundingClientRect()}get remove_element(){return this.e.remove(),this}get style(){let e=this.e.style,t=this;return{set:(s,i=0)=>{let r=e,a=()=>{d(s).forEach(([n,h])=>{if(n in r){if(r[n]!==h)r[n]=h}else if(h!==null)e.setProperty(n,String(h))})};if(L(i))t.on("transitionend",i);if(me(i))setTimeout(a,i);else a();return t},get:(s)=>{return e.getPropertyValue(s.toString())},del:(...s)=>{s.forEach((i)=>{e.removeProperty(i.toString())})}}}get submit(){let e=this.e;if("submit"in e)return e.submit();return!1}get tag(){return this.e.tagName.toLowerCase()}get value(){return this.e.value??""}get unload(){return()=>{this.e.remove()}}set append(e){let{ctx:t,oz:s}=G(e,K(this.id));this.e.insertAdjacentHTML("beforeend",t),j.RPS(s)}set appendfirst(e){let{ctx:t,oz:s}=G(e,K(this.id));this.e.insertAdjacentHTML("afterbegin",t),j.RPS(s)}set inner(e){let{ctx:t,oz:s}=G(e,K(this.id));this.e.innerHTML=t,j.RPS(s)}set disabled(e){let t=this.e;if("disabled"in t)t.disabled=e}set id(e){this.e.id=e}set value(e){let t=this.e;t.value=e}}var G=(e,t)=>{if(e instanceof T)return e.__(new b(t));return{ctx:e,oz:void 0}},K=(e)=>e?`${e}-0`:e;class x extends Ie{constructor(e,t){super(e,t)}add(...e){return this.e.classList.add(...e.map((t)=>t.replace(/[^\w-]/,""))),this}remove(...e){return this.e.classList.remove(...e.map((t)=>t.replace(/[^\w-]/,""))),this}toggle(e,t){let s=typeof e!="string"?e.apply(this):e,i=this.e.classList;return s.split(" ").forEach((r)=>{i.toggle(r,t)}),this}has(e){return this.e.contains(e)}insert(e){return{HTML:(...t)=>{return t.forEach((s)=>{this.e.insertAdjacentHTML(e,s)}),this},element:(...t)=>{return t.forEach((s)=>{this.e.insertAdjacentElement(e,s)}),this},text:function(...t){return t.forEach((s)=>{this.e.insertAdjacentText(e,s)}),this}}}is(e){let t=this.e.classList.value.split(" "),s=this.e.tagName.toLocaleLowerCase(),i=!0,r=!0;if(e.dom)r=e.dom==s?!0:!1;if(e.class)if(Array.isArray(e.class))e.class.forEach((a)=>{i=i?t.includes(a):!1});else i=i?t.includes(e.class):!1;return i&&r}on(e,t,s=!1){let i=!1;if(e.indexOf("touch")>-1)i=!0;return this.e.addEventListener(e,t,{capture:s,passive:i}),this}remove_on(e,t,s=!1){return this.e.removeEventListener(e,t,s),this}timed(e,t=250){return setTimeout(()=>e(this),t),this}animate(e,t,s){let i={duration:300,easing:"ease",fill:"forwards"};if(L(t))s=t;else m(i,t);let r=this.e.animate(e,i);if(s)r.finished.then(s);return this}}function p(e){if(re(e)){let t=document.querySelector(e);if(t)return new x(t,e);return}else return new x(e)}class oe{state=new N(void 0);constructor(){}get element(){return this.state.value?.e}set element(e){this.state.value=new x(e)}get $(){return this.state.value}}var ts=()=>{return new oe};class Ne extends Se{path;args;id;status;lang;import;_data={};constructor(e,t={},s,i=200){super();this.path=e,this.args=t,this.id=s,this.status=i}async loader(){if(this.import)try{let e=await this.import;if(e.default)this.import=await e.default({...this.args,...this.data});else this.import=void 0}catch(e){I.p=e,this.import=void 0}if(this.body){let e=await this.body();return f(e)?e:[e]}if(this.import){let e=this.import;return f(e)?e:[e]}return[]}getHeadAttr(e={},...t){let s=new J;if(w(e))s.head=e;s.id=this.id;let i=s.head;return t.forEach((r)=>{i.map(r)}),Ct(s,this),i}set data(e){m(this._data,e)}get data(){return this._data}}class Te extends Ne{head(){this.title=`error ${this.status}`}body(){return F("div",{},this.path+" not found...")}}function Ct(e,t){let{link:s,script:i,meta:r,title:a,base:n,description:h,css:o}=t;if(e.head={title:a,base:n,meta:r,link:s,script:i},h)e.head={meta:[{name:"description",content:h}]};if(o){let l=(f(o)?o:[o]).map((c)=>({rel:`${S?"preload ":""}stylesheet`,href:c,as:"style"}));if(e.head.lacks("link"));e.head={link:[...l]}}}function Pt(e){let t=[];if(e?.length){let{href:s,target:i}=e[0],r=p("base");if(r)r.attr.set({href:s,target:i});else{let a=p(document.createElement("base"));a.attr.set({href:s,target:i}),document.head.append(a.e)}}else{let s=p("base")?.unload;s&&t.push(s)}return t}var de=new u;async function Rt(e,t={},s=!1){let i=le.value,r={};if(p("link")?.all.forEach((a)=>{let n=p(a),h=n.attr.get("href");if(h){let o=n.attr.get("rt");if(s){let l=de.get(i);if(l){if(!l.has(h))r[h]=n.unload}else r[h]=n.unload}else if(o){if(o===e)r[h]=n.unload}}}),t&&w(t))for(let a of _(t)){let n=a.href;if(!(n in r))try{if(!s){a.rt=e;let h=de.init(i,new Set);if(!h.has(n))h.add(n)}await wt(a)}catch(h){I.p=h}else delete r[n]}return _(r)}var Ht=["charset","name","property","http-equiv"];function It(e){let t={};if(p("meta")?.all.forEach((s)=>{let i=s.attributes;for(let r of Ht)if(r in i){let a=i[r].value;t[`${r}_${r==="charset"?"":a}`]=s}}),e)d(e).forEach(([s,i])=>{if(s in t)p(t[s]).attr.set(i),delete t[s];else{let r=p(document.createElement("meta"));r.attr.set(i),document.head.append(r.e)}});return _(t).map((s)=>p(s).unload)}var pe=new u;async function Nt(e,t,s=!1){let i=le.value,r={};if(p("script[yid]")?.all.forEach((a)=>{let n=p(a),h=n.attr.get("yid");if(h){let o=n.attr.get("rt");if(s){let l=pe.get(i);if(l){if(!l.has(h))r[h]=n.unload}else r[h]=n.unload}else if(o){if(o===e)r[h]=n.unload}}}),t){for(let a of t)if("yid"in a)if(a.yid in r)delete r[a.yid];else try{if(!s){a.rt=e;let n=a.yid,h=pe.init(i,new Set);if(!h.has(n))h.add(n)}await vt(a)}catch(n){I.p=n}}return _(r)}async function Tt(e,t,s=!1){let i=[];if(S)return[];let r=e.get("title")??"",{pushState:a}=this.config;if(a&&this.isYRA){let n=this.path.value;ze(n,r)}if(s)document.documentElement.lang=t,document.title=r,i.push(...Pt(e.get("base"))),i.push(...It(e.get("meta")));return i.push(...await Rt(this.id,e.get("link"),s)),i.push(...await Nt(this.id,e.get("script"),s)),i}function ze(e,t){let s=window.location.pathname;if(e&&s!==e)history.pushState({},t??"",e)}class qe{lang;head="";constructor(e,t){if(this.lang=e,t)this.head=mt(t)}body(e,t,s){return[`<!DOCTYPE html><html lang="${this.lang}">`,`<head>${this.head}</head>`,`<body id="${t??g(5)}"${s?" "+s:""}>${e}</body>`,"</html>"].join("")}}class zt{path;args;isConnected=A(!1);data={};constructor(e,t={}){this.path=e,this.args=t}open(e){}message(e){}close(e){}error(e){}get connect(){if(this.ws&&this.ws.readyState<=1)return this;return this.ws=new WebSocket(this.path),this.ws.onopen=async(e)=>{this.isConnected.value=!0,await this.open.call(this,e)},this.ws.onmessage=async(e)=>{await this.message.call(this,e)},this.ws.onclose=async(e)=>{this.isConnected.value=!1,await this.close.call(this,e)},this.ws.onerror=async(e)=>{this.isConnected.value=this.ws.readyState<=1,await this.error.call(this,e)},this}get reconnect(){if(this.state>=2)this.connect;return this}get disconnect(){if(this.state<=1)this.ws.close();return this}get state(){return this.ws?.readyState??3}set send(e){this.ws.send(e)}}var $=new u;class We{yra;constructor(e){this.yra=e}async load(e){if(!$.has(e)){let[s,i]=await this.yra.loadWSS(e);if(!s)return;let{cls:r,path:a,id:n}=s,h=new r(a,i).connect;return $.set(e,h),h}let t=$.get(e);return t.reconnect,t}unload(e){if($.has(e)){let t=$.get(e);if(!t)return;t.disconnect,$.delete(e)}}}function qt(e,t,s,i){let r={...e.on??{},click(a){a.preventDefault(),i.value=s.value,s.value=p(this).path}};return delete e.on,F("a",{...e,on:{...r}},...t)}function Wt(e,t,s){let{classes:i}=e.config,{on:r,...a}=t,n={...t.on??{},...s&&{popstate(h){let o=h.target;e.path.value=o.location.pathname},element(h){e.mainElement=this}}};return F("div",{...a,...i&&{class:i},on:n},e.root)}class De extends Oe{config;isYRA;unload=!1;hook;root=A([]);socket;id=g(4);path=A("");lastPath=A("");mainElement;A;Main;load;constructor(e={},t=!1,s={}){super(e.base);if(this.config=e,this.isYRA=t,this.socket=new We(this),e.id)this.id=e.id;this.A=(i,...r)=>{if(this.base)i.href=this.base+i.href;return qt(i,r,this.path,this.lastPath)},this.Main=(i)=>{if(w(s))if(!i.on)i.on=s;else m(i.on,s);return Wt(this,i,t)},this.load=async(i,r={})=>{if(this.hook)this.hook();if(i){if(!this.path.value)this.path.value=i,this.lastPath.value=i;await this.render(this.path.value,404,r),this.hooker()}return this}}hooker(){let e={},t={},s=this.path.value;if(this.hook)this.hook();this.hook=Me(async(i)=>{if(t[s]=window.scrollY,e[s]=this.mainElement?.scrollTop??0,(await this.render(i,404)).done){let r=t[i]??0;if(r)window.scrollTo({top:r,behavior:"instant"});let a=e[i]??0;if(a)this.mainElement?.scrollTo({top:a,behavior:"instant"});s=i}},[this.path],{id:"router"})}async class(e,t,s=!1){let[i,r]=await this.getPath(e);if(i&&!s){let{cls:a,path:n,id:h}=i;return new a(n,r,h)}else return Dt.call(this,e,t)}async fetch(e){if(e)try{if(e.fetch){let t=await e.fetch();if(se(t)&&w(t))e.data=t}}catch(t){I.p=t}}async processHead(e,t={}){return e?await this.processClassHead(e,t):await this.processDefaultHead(t)}async processClassHead(e,t){if(e.head)await e.head();return e.getHeadAttr(t,this.htmlHead)}async processDefaultHead(e){let t=new J;if(w(e))t.head=e;return t.head.map(this.htmlHead),t.head}async render(e,t=404,s={},i={},r=!0,a=!1){let n=await this.class(e,t??Jt(),a);n.data=s,await this.fetch(n);let h=await this.processHead(n,i);if(!n)return{lang:this.lang,heads:h,done:!1};let o=[];if(this.unload)o=await n.loader();let l=[];if(r)l=await Tt.call(this,h,n?.lang||this.lang,this.unload);if(!this.unload)l.forEach((c)=>c()),o=await n.loader();if(this.unload)l.forEach((c)=>c());if(o.length)this.root.value=o;else await this.render(e,t,s,i,r,!0);return{heads:h,lang:n.lang??this.lang,done:!0}}}async function Dt(e,t){let[s,i]=await this.loadError(t??0);if(s){let{cls:r,id:a}=s;return new r(e,i,a,t)}else{let r=new Te(e,i,g(5));return r.title=`error ${t}`,r}}var le=A("");class Yt extends De{ImportMeta;config;unload=!0;constructor(e,t={},s={}){super(t,!0,s);this.ImportMeta=e,this.config=t,this.path=le,this.head({meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1.0"}]}),this.load=async(i,r={})=>{if(H)i=i||Ft();if(this.hook)this.hook();if(i)this.path.value=i;if(H&&i)this.render(i,404,r).then(()=>{if(i&&this.config.pushState)ze(i,document.title);Zt.call(this,this.Main({})),this.hooker()});return this}}async html({path:e,data:t={},status:s=200,attr:i=""}){let r={script:[{type:"module",src:this.ImportMeta.file}]};Vt(r,e,s),this.path.value=e;let{lang:a,heads:n}=await this.render(e,s,t,r,!1),{ctx:h}=this.Main({}).__(new b(this.id));return new qe(a,n).body(h,this.id,i)}}function Zt(e){let t=document.body.id,{oz:s,id:i}=e.__(new b(t));if(this.id=i||this.id,!s)return;j.push(s),requestAnimationFrame(()=>{j.stage})}function Jt(){if(H)return parseInt(p('meta[name="error-code"]')?.attr.get("content")??"404");return 404}function Ft(){if(H)return p('meta[name="yvee"]')?.attr.get("content")??"/";return"/"}var Vt=(e,t,s)=>{let i=[];if(s)switch(s){case 404:i.push({name:"error-code",content:s.toString()});break;default:break}i.push({name:"yvee",content:t}),e.meta=i},ss=(e)=>{return(t)=>{e(t)}},is=(e)=>{return(t)=>{e(t)}};class ee{state;body;click;constructor({toggle:e=[],initialState:t=!1}={}){this.state=A(t);let s=this.state;this.click=function(){s.value=!s.value},this.loader(e)}loader(e){if(typeof window==="undefined")return;let t=fe.get("LOCAL_SCHEME"),s=this.isDark,i=t.as.bool,r=fe.get({IS_DARK:()=>this.state.value});if(i!=null&&i!==s)this.state.value=!i,r.save,t.set=s;if(r.as.bool!==null)this.state.value=r.as.bool;let a=this.toggle,n=document.documentElement.classList;if(a(n,this.state.value,e),Me(async(h)=>{a(n,h,e),r.save},[this.state],{id:"colorScheme"}),this.isMatchMediaSupported)window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(h)=>{let o=(h.matches?"dark":"light")==="dark";this.state.value=o,t.set=o})}get isMatchMediaSupported(){return window.matchMedia&&typeof window.matchMedia==="function"}get isDark(){return window.matchMedia("(prefers-color-scheme: dark)").matches}toggle(e,t,s){if(t)e.add(...s);else e.remove(...s)}}ee=Ge([ct,Ke("design:paramtypes",[Object])],ee);var rs=(e,t)=>{return`${e.replace(/\/+$/,"")}/${t.replace(/^\.\/+/,"")}`};
export{Bt as C,Gt as D,Kt as E,Xt as F,ke as G,kt as H,A as I,F as J,es as K,p as L,ts as M,Ne as N,De as O,Yt as P,ss as Q,is as R,rs as S};
