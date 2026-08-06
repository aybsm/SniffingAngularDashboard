import{$ as mr,$a as ve,$b as Ct,A as sr,Aa as br,Ac as Rr,B as Ie,Ba as Me,Bc as Z,C as pt,Ca as vr,Cb as Mr,Cc as Or,Da as Fe,Db as Fr,E as cr,Ea as _t,Eb as Le,Ec as Nr,F as gt,Fa as xe,Ga as Re,Ha as yr,Ia as _r,J as ur,Ja as Dr,Ka as Er,Kb as G,L as bt,La as wr,Lb as F,M as dr,Ma as Ar,N as lr,Na as Cr,O as vt,Oa as z,Pb as Pe,Q as Te,Qb as de,R as D,Sa as Oe,Ta as Ir,U as m,Ua as Dt,V as L,X as g,Xa as Tr,Y as h,Z as c,Za as Ne,_ as sn,_a as un,_b as le,a as ht,aa as We,ba as fr,bb as Sr,c as Ae,e as U,f as tr,fb as K,ga as H,gb as P,ha as b,hb as V,ib as Et,ka as Se,kb as wt,l as q,la as M,m as nr,ma as ge,nb as At,oc as It,p as O,pa as Ke,q as rr,qb as dn,ra as hr,sa as pr,sb as Ze,sc as xr,t as ir,ta as yt,v as or,wa as j,x as Ce,xa as cn,ya as gr,z as ar,za as be}from"./chunk-TE3EXO4G.js";import{a as S}from"./chunk-7CGTOI24.js";var Lr=null;function ie(){return Lr}function ln(t){Lr??=t}var Ye=class{},me=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:()=>c(Pr),providedIn:"platform"})}return t})();var Pr=(()=>{class t extends me{_location;_history;_doc=c(b);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return ie().getBaseHref(this._doc)}onPopState(e){let n=ie().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=ie().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,i){this._history.pushState(e,n,i)}replaceState(e,n,i){this._history.replaceState(e,n,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function Tt(t,r){return t?r?t.endsWith("/")?r.startsWith("/")?t+r.slice(1):t+r:r.startsWith("/")?t+r:`${t}/${r}`:t:r}function kr(t){let r=t.search(/#|\?|$/);return t[r-1]==="/"?t.slice(0,r-1)+t.slice(r):t}function Q(t){return t&&t[0]!=="?"?`?${t}`:t}var ke=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:()=>c(Eo),providedIn:"root"})}return t})(),mn=new g(""),Eo=(()=>{class t extends ke{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??c(b).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Tt(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+Q(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${n}${i}`:n}pushState(e,n,i,o){let a=this.prepareExternalUrl(i+Q(o));this._platformLocation.pushState(e,n,a)}replaceState(e,n,i,o){let a=this.prepareExternalUrl(i+Q(o));this._platformLocation.replaceState(e,n,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(h(me),h(mn,8))};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ur=(()=>{class t{_subject=new U;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=Co(kr(Br(n))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+Q(n))}normalize(e){return t.stripTrailingSlash(Ao(this._basePath,Br(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",i=null){this._locationStrategy.pushState(i,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Q(n)),i)}replaceState(e,n="",i=null){this._locationStrategy.replaceState(i,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Q(n)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(i=>i(e,n))}subscribe(e,n,i){return this._subject.subscribe({next:e,error:n??void 0,complete:i??void 0})}static normalizeQueryParams=Q;static joinWithSlash=Tt;static stripTrailingSlash=kr;static \u0275fac=function(n){return new(n||t)(h(ke))};static \u0275prov=m({token:t,factory:()=>wo(),providedIn:"root"})}return t})();function wo(){return new Ur(h(ke))}function Ao(t,r){if(!t||!r.startsWith(t))return r;let e=r.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:r}function Br(t){return t.replace(/\/index\.html$/,"")}function Co(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var Io=(()=>{class t extends ke{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let n=this._platformLocation.hash??"#";return n.length>0?n.substring(1):n}prepareExternalUrl(e){let n=Tt(this._baseHref,e);return n.length>0?"#"+n:n}pushState(e,n,i,o){let a=this.prepareExternalUrl(i+Q(o))||this._platformLocation.pathname;this._platformLocation.pushState(e,n,a)}replaceState(e,n,i,o){let a=this.prepareExternalUrl(i+Q(o))||this._platformLocation.pathname;this._platformLocation.replaceState(e,n,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(h(me),h(mn,8))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();var Lt=(function(t){return t[t.Decimal=0]="Decimal",t[t.Percent=1]="Percent",t[t.Currency=2]="Currency",t[t.Scientific=3]="Scientific",t})(Lt||{});var k=(function(t){return t[t.Format=0]="Format",t[t.Standalone=1]="Standalone",t})(k||{}),E=(function(t){return t[t.Narrow=0]="Narrow",t[t.Abbreviated=1]="Abbreviated",t[t.Wide=2]="Wide",t[t.Short=3]="Short",t})(E||{}),$=(function(t){return t[t.Short=0]="Short",t[t.Medium=1]="Medium",t[t.Long=2]="Long",t[t.Full=3]="Full",t})($||{}),N={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function Hr(t){return G(t)[F.LocaleId]}function Vr(t,r,e){let n=G(t),i=[n[F.DayPeriodsFormat],n[F.DayPeriodsStandalone]],o=X(i,r);return X(o,e)}function Gr(t,r,e){let n=G(t),i=[n[F.DaysFormat],n[F.DaysStandalone]],o=X(i,r);return X(o,e)}function Wr(t,r,e){let n=G(t),i=[n[F.MonthsFormat],n[F.MonthsStandalone]],o=X(i,r);return X(o,e)}function Kr(t,r){let n=G(t)[F.Eras];return X(n,r)}function Xe(t,r){let e=G(t);return X(e[F.DateFormat],r)}function Je(t,r){let e=G(t);return X(e[F.TimeFormat],r)}function qe(t,r){let n=G(t)[F.DateTimeFormat];return X(n,r)}function Y(t,r){let e=G(t),n=e[F.NumberSymbols][r];if(typeof n>"u"){if(r===N.CurrencyDecimal)return e[F.NumberSymbols][N.Decimal];if(r===N.CurrencyGroup)return e[F.NumberSymbols][N.Group]}return n}function vn(t,r){return G(t)[F.NumberFormats][r]}function Zr(t){if(!t[F.ExtraData])throw new D(2303,!1)}function Yr(t){let r=G(t);return Zr(r),(r[F.ExtraData][2]||[]).map(n=>typeof n=="string"?fn(n):[fn(n[0]),fn(n[1])])}function Xr(t,r,e){let n=G(t);Zr(n);let i=[n[F.ExtraData][0],n[F.ExtraData][1]],o=X(i,r)||[];return X(o,e)||[]}function X(t,r){for(let e=r;e>-1;e--)if(typeof t[e]<"u")return t[e];throw new D(2304,!1)}function fn(t){let[r,e]=t.split(":");return{hours:+r,minutes:+e}}var To=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,St={},So=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,Mo=256;function Jr(t,r,e,n){let i=Uo(t);Fo(r),r=oe(e,r)||r;let a=[],s;for(;r;)if(s=So.exec(r),s){a=a.concat(s.slice(1));let l=a.pop();if(!l)break;r=l}else{a.push(r);break}let u=i.getTimezoneOffset();n&&(u=Qr(n,u),i=Bo(i,n));let d="";return a.forEach(l=>{let f=Po(l);d+=f?f(i,e,u):l==="''"?"'":l.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),d}function Fo(t){if(t.length>Mo)throw new D(2300,!1)}function Ot(t,r,e){let n=new Date(0);return n.setFullYear(t,r,e),n.setHours(0,0,0),n}function oe(t,r){let e=Hr(t);if(St[e]??={},St[e][r])return St[e][r];let n="";switch(r){case"shortDate":n=Xe(t,$.Short);break;case"mediumDate":n=Xe(t,$.Medium);break;case"longDate":n=Xe(t,$.Long);break;case"fullDate":n=Xe(t,$.Full);break;case"shortTime":n=Je(t,$.Short);break;case"mediumTime":n=Je(t,$.Medium);break;case"longTime":n=Je(t,$.Long);break;case"fullTime":n=Je(t,$.Full);break;case"short":let i=oe(t,"shortTime"),o=oe(t,"shortDate");n=Mt(qe(t,$.Short),[i,o]);break;case"medium":let a=oe(t,"mediumTime"),s=oe(t,"mediumDate");n=Mt(qe(t,$.Medium),[a,s]);break;case"long":let u=oe(t,"longTime"),d=oe(t,"longDate");n=Mt(qe(t,$.Long),[u,d]);break;case"full":let l=oe(t,"fullTime"),f=oe(t,"fullDate");n=Mt(qe(t,$.Full),[l,f]);break}return n&&(St[e][r]=n),n}function Mt(t,r){return r&&(t=t.replace(/\{([^}]+)}/g,function(e,n){return r!=null&&n in r?r[n]:e})),t}function ee(t,r,e="-",n,i){let o="";(t<0||i&&t<=0)&&(i?t=-t+1:(t=-t,o=e));let a=String(t);for(;a.length<r;)a="0"+a;return n&&(a=a.slice(a.length-r)),o+a}function xo(t,r){return ee(t,3).substring(0,r)}function x(t,r,e=0,n=!1,i=!1){return function(o,a){let s=Ro(t,o);if((e>0||s>-e)&&(s+=e),t===3)s===0&&e===-12&&(s=12);else if(t===6)return xo(s,r);let u=Y(a,N.MinusSign);return ee(s,r,u,n,i)}}function Ro(t,r){switch(t){case 0:return r.getFullYear();case 1:return r.getMonth();case 2:return r.getDate();case 3:return r.getHours();case 4:return r.getMinutes();case 5:return r.getSeconds();case 6:return r.getMilliseconds();case 7:return r.getDay();default:throw new D(2301,!1)}}function w(t,r,e=k.Format,n=!1){return function(i,o){return Oo(i,o,t,r,e,n)}}function Oo(t,r,e,n,i,o){switch(e){case 2:return Wr(r,i,n)[t.getMonth()];case 1:return Gr(r,i,n)[t.getDay()];case 0:let a=t.getHours(),s=t.getMinutes();if(o){let d=Yr(r),l=Xr(r,i,n),f=d.findIndex(v=>{if(Array.isArray(v)){let[_,C]=v,R=a>=_.hours&&s>=_.minutes,p=a<C.hours||a===C.hours&&s<C.minutes;if(_.hours<C.hours){if(R&&p)return!0}else if(R||p)return!0}else if(v.hours===a&&v.minutes===s)return!0;return!1});if(f!==-1)return l[f]}return Vr(r,i,n)[a<12?0:1];case 3:return Kr(r,n)[t.getFullYear()<=0?0:1];default:let u=e;throw new D(2302,!1)}}function Ft(t){return function(r,e,n){let i=-1*n,o=Y(e,N.MinusSign),a=i>0?Math.floor(i/60):Math.ceil(i/60);switch(t){case 0:return(i>=0?"+":"")+ee(a,2,o)+ee(Math.abs(i%60),2,o);case 1:return"GMT"+(i>=0?"+":"")+ee(a,1,o);case 2:return"GMT"+(i>=0?"+":"")+ee(a,2,o)+":"+ee(Math.abs(i%60),2,o);case 3:return n===0?"Z":(i>=0?"+":"")+ee(a,2,o)+":"+ee(Math.abs(i%60),2,o);default:throw new D(2310,!1)}}}var No=0,Rt=4;function Lo(t){let r=Ot(t,No,1).getDay();return Ot(t,0,1+(r<=Rt?Rt:Rt+7)-r)}function qr(t){let r=t.getDay(),e=r===0?-3:Rt-r;return Ot(t.getFullYear(),t.getMonth(),t.getDate()+e)}function hn(t,r=!1){return function(e,n){let i;if(r){let o=new Date(e.getFullYear(),e.getMonth(),1).getDay()-1,a=e.getDate();i=1+Math.floor((a+o)/7)}else{let o=qr(e),a=Lo(o.getFullYear()),s=o.getTime()-a.getTime();i=1+Math.round(s/6048e5)}return ee(i,t,Y(n,N.MinusSign))}}function xt(t,r=!1){return function(e,n){let o=qr(e).getFullYear();return ee(o,t,Y(n,N.MinusSign),r)}}var pn={};function Po(t){if(pn[t])return pn[t];let r;switch(t){case"G":case"GG":case"GGG":r=w(3,E.Abbreviated);break;case"GGGG":r=w(3,E.Wide);break;case"GGGGG":r=w(3,E.Narrow);break;case"y":r=x(0,1,0,!1,!0);break;case"yy":r=x(0,2,0,!0,!0);break;case"yyy":r=x(0,3,0,!1,!0);break;case"yyyy":r=x(0,4,0,!1,!0);break;case"Y":r=xt(1);break;case"YY":r=xt(2,!0);break;case"YYY":r=xt(3);break;case"YYYY":r=xt(4);break;case"M":case"L":r=x(1,1,1);break;case"MM":case"LL":r=x(1,2,1);break;case"MMM":r=w(2,E.Abbreviated);break;case"MMMM":r=w(2,E.Wide);break;case"MMMMM":r=w(2,E.Narrow);break;case"LLL":r=w(2,E.Abbreviated,k.Standalone);break;case"LLLL":r=w(2,E.Wide,k.Standalone);break;case"LLLLL":r=w(2,E.Narrow,k.Standalone);break;case"w":r=hn(1);break;case"ww":r=hn(2);break;case"W":r=hn(1,!0);break;case"d":r=x(2,1);break;case"dd":r=x(2,2);break;case"c":case"cc":r=x(7,1);break;case"ccc":r=w(1,E.Abbreviated,k.Standalone);break;case"cccc":r=w(1,E.Wide,k.Standalone);break;case"ccccc":r=w(1,E.Narrow,k.Standalone);break;case"cccccc":r=w(1,E.Short,k.Standalone);break;case"E":case"EE":case"EEE":r=w(1,E.Abbreviated);break;case"EEEE":r=w(1,E.Wide);break;case"EEEEE":r=w(1,E.Narrow);break;case"EEEEEE":r=w(1,E.Short);break;case"a":case"aa":case"aaa":r=w(0,E.Abbreviated);break;case"aaaa":r=w(0,E.Wide);break;case"aaaaa":r=w(0,E.Narrow);break;case"b":case"bb":case"bbb":r=w(0,E.Abbreviated,k.Standalone,!0);break;case"bbbb":r=w(0,E.Wide,k.Standalone,!0);break;case"bbbbb":r=w(0,E.Narrow,k.Standalone,!0);break;case"B":case"BB":case"BBB":r=w(0,E.Abbreviated,k.Format,!0);break;case"BBBB":r=w(0,E.Wide,k.Format,!0);break;case"BBBBB":r=w(0,E.Narrow,k.Format,!0);break;case"h":r=x(3,1,-12);break;case"hh":r=x(3,2,-12);break;case"H":r=x(3,1);break;case"HH":r=x(3,2);break;case"m":r=x(4,1);break;case"mm":r=x(4,2);break;case"s":r=x(5,1);break;case"ss":r=x(5,2);break;case"S":r=x(6,1);break;case"SS":r=x(6,2);break;case"SSS":r=x(6,3);break;case"Z":case"ZZ":case"ZZZ":r=Ft(0);break;case"ZZZZZ":r=Ft(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":r=Ft(1);break;case"OOOO":case"ZZZZ":case"zzzz":r=Ft(2);break;default:return null}return pn[t]=r,r}function Qr(t,r){t=t.replace(/:/g,"");let e=Date.parse("Jan 01, 1970 00:00:00 "+t)/6e4;return isNaN(e)?r:e}function ko(t,r){return t=new Date(t.getTime()),t.setMinutes(t.getMinutes()+r),t}function Bo(t,r,e){let i=t.getTimezoneOffset(),o=Qr(r,i);return ko(t,-1*(o-i))}function Uo(t){if(jr(t))return t;if(typeof t=="number"&&!isNaN(t))return new Date(t);if(typeof t=="string"){if(t=t.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(t)){let[i,o=1,a=1]=t.split("-").map(s=>+s);return Ot(i,o-1,a)}let e=parseFloat(t);if(!isNaN(t-e))return new Date(e);let n;if(n=t.match(To))return jo(n)}let r=new Date(t);if(!jr(r))throw new D(2311,!1);return r}function jo(t){let r=new Date(0),e=0,n=0,i=t[8]?r.setUTCFullYear:r.setFullYear,o=t[8]?r.setUTCHours:r.setHours;t[9]&&(e=Number(t[9]+t[10]),n=Number(t[9]+t[11])),i.call(r,Number(t[1]),Number(t[2])-1,Number(t[3]));let a=Number(t[4]||0)-e,s=Number(t[5]||0)-n,u=Number(t[6]||0),d=Math.floor(parseFloat("0."+(t[7]||0))*1e3);return o.call(r,a,s,u,d),r}function jr(t){return t instanceof Date&&!isNaN(t.valueOf())}var zo=/^(\d+)?\.((\d+)(-(\d+))?)?$/,zr=22,Nt=".",Qe="0",$o=";",Ho=",",gn="#";var Vo="%";function ei(t,r,e,n,i,o,a=!1){let s="",u=!1;if(!isFinite(t))s=Y(e,N.Infinity);else{let d=Wo(t);a&&(d=Go(d));let l=r.minInt,f=r.minFrac,v=r.maxFrac;if(o){let T=o.match(zo);if(T===null)throw new D(2306,!1);let W=T[1],I=T[3],ue=T[5];W!=null&&(l=bn(W)),I!=null&&(f=bn(I)),ue!=null?v=bn(ue):I!=null&&f>v&&(v=f);let re=100;if(l>re||f>re||v>re)throw new D(2306,!1)}Ko(d,f,v);let _=d.digits,C=d.integerLen,R=d.exponent,p=[];for(u=_.every(T=>!T);C<l;C++)_.unshift(0);for(;C<0;C++)_.unshift(0);C>0?p=_.splice(C,_.length):(p=_,_=[0]);let y=[];for(_.length>=r.lgSize&&y.unshift(_.splice(-r.lgSize,_.length).join(""));_.length>r.gSize;)y.unshift(_.splice(-r.gSize,_.length).join(""));_.length&&y.unshift(_.join("")),s=y.join(Y(e,n)),p.length&&(s+=Y(e,i)+p.join("")),R&&(s+=Y(e,N.Exponential)+"+"+R)}return t<0&&!u?s=r.negPre+s+r.negSuf:s=r.posPre+s+r.posSuf,s}function ti(t,r,e){let n=vn(r,Lt.Percent),i=ri(n,Y(r,N.MinusSign));return ei(t,i,r,N.Group,N.Decimal,e,!0).replace(new RegExp(Vo,"g"),Y(r,N.PercentSign))}function ni(t,r,e){let n=vn(r,Lt.Decimal),i=ri(n,Y(r,N.MinusSign));return ei(t,i,r,N.Group,N.Decimal,e)}function ri(t,r="-"){let e={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},n=t.split($o),i=n[0],o=n[1],a=i.indexOf(Nt)!==-1?i.split(Nt):[i.substring(0,i.lastIndexOf(Qe)+1),i.substring(i.lastIndexOf(Qe)+1)],s=a[0],u=a[1]||"";e.posPre=s.substring(0,s.indexOf(gn));for(let l=0;l<u.length;l++){let f=u.charAt(l);f===Qe?e.minFrac=e.maxFrac=l+1:f===gn?e.maxFrac=l+1:e.posSuf+=f}let d=s.split(Ho);if(e.gSize=d[1]?d[1].length:0,e.lgSize=d[2]||d[1]?(d[2]||d[1]).length:0,o){let l=i.length-e.posPre.length-e.posSuf.length,f=o.indexOf(gn);e.negPre=o.substring(0,f).replace(/'/g,""),e.negSuf=o.slice(f+l).replace(/'/g,"")}else e.negPre=r+e.posPre,e.negSuf=e.posSuf;return e}function Go(t){if(t.digits[0]===0)return t;let r=t.digits.length-t.integerLen;return t.exponent?t.exponent+=2:(r===0?t.digits.push(0,0):r===1&&t.digits.push(0),t.integerLen+=2),t}function Wo(t){let r=Math.abs(t)+"",e=0,n,i,o,a,s;for((i=r.indexOf(Nt))>-1&&(r=r.replace(Nt,"")),(o=r.search(/e/i))>0?(i<0&&(i=o),i+=+r.slice(o+1),r=r.substring(0,o)):i<0&&(i=r.length),o=0;r.charAt(o)===Qe;o++);if(o===(s=r.length))n=[0],i=1;else{for(s--;r.charAt(s)===Qe;)s--;for(i-=o,n=[],a=0;o<=s;o++,a++)n[a]=Number(r.charAt(o))}return i>zr&&(n=n.splice(0,zr-1),e=i-1,i=1),{digits:n,exponent:e,integerLen:i}}function Ko(t,r,e){if(r>e)throw new D(2307,!1);let n=t.digits,i=n.length-t.integerLen,o=Math.min(Math.max(r,i),e),a=o+t.integerLen,s=n[a];if(a>0){n.splice(Math.max(t.integerLen,a));for(let f=a;f<n.length;f++)n[f]=0}else{i=Math.max(0,i),t.integerLen=1,n.length=Math.max(1,a=o+1),n[0]=0;for(let f=1;f<a;f++)n[f]=0}if(s>=5)if(a-1<0){for(let f=0;f>a;f--)n.unshift(0),t.integerLen++;n.unshift(1),t.integerLen++}else n[a-1]++;for(;i<Math.max(0,o);i++)n.push(0);let u=o!==0,d=r+t.integerLen,l=n.reduceRight(function(f,v,_,C){return v=v+f,C[_]=v<10?v:v-10,u&&(C[_]===0&&_>=d?C.pop():u=!1),v>=10?1:0},0);l&&(n.unshift(l),t.integerLen++)}function bn(t){let r=parseInt(t);if(isNaN(r))throw new D(2305,!1);return r}var Zo=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=c(H);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,i):!1,get:(e,n,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,i)}})}static \u0275fac=function(n){return new(n||t)(ve(Sr))};static \u0275dir=V({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[yt]})}return t})();function yn(t,r){return new D(2100,!1)}var Yo="mediumDate",ii=new g(""),oi=new g(""),Xo=(()=>{class t{locale;defaultTimezone;defaultOptions;constructor(e,n,i){this.locale=e,this.defaultTimezone=n,this.defaultOptions=i}transform(e,n,i,o){if(e==null||e===""||e!==e)return null;try{let a=n??this.defaultOptions?.dateFormat??Yo,s=i??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return Jr(e,a,o||this.locale,s)}catch(a){throw yn(t,a.message)}}static \u0275fac=function(n){return new(n||t)(ve(It,16),ve(ii,24),ve(oi,24))};static \u0275pipe=Et({name:"date",type:t,pure:!0})}return t})();var Jo=(()=>{class t{_locale;constructor(e){this._locale=e}transform(e,n,i){if(!ai(e))return null;i||=this._locale;try{let o=si(e);return ni(o,i,n)}catch(o){throw yn(t,o.message)}}static \u0275fac=function(n){return new(n||t)(ve(It,16))};static \u0275pipe=Et({name:"number",type:t,pure:!0})}return t})(),qo=(()=>{class t{_locale;constructor(e){this._locale=e}transform(e,n,i){if(!ai(e))return null;i||=this._locale;try{let o=si(e);return ti(o,i,n)}catch(o){throw yn(t,o.message)}}static \u0275fac=function(n){return new(n||t)(ve(It,16))};static \u0275pipe=Et({name:"percent",type:t,pure:!0})}return t})();function ai(t){return!(t==null||t===""||t!==t)}function si(t){if(typeof t=="string"&&!isNaN(Number(t)-parseFloat(t)))return Number(t);if(typeof t!="number")throw new D(2309,!1);return t}var ci=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=P({type:t});static \u0275inj=L({})}return t})();function et(t,r){r=encodeURIComponent(r);for(let e of t.split(";")){let n=e.indexOf("="),[i,o]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(i.trim()===r)return decodeURIComponent(o)}return null}var ye=class{};var _n="browser";function ui(t){return t===_n}var tt=class{_doc;constructor(r){this._doc=r}manager},Pt=(()=>{class t extends tt{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,i,o){return e.addEventListener(n,i,o),()=>this.removeEventListener(e,n,i,o)}removeEventListener(e,n,i,o){return e.removeEventListener(n,i,o)}static \u0275fac=function(n){return new(n||t)(h(b))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})(),Ut=new g(""),An=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(a=>{a.manager=this});let i=e.filter(a=>!(a instanceof Pt));this._plugins=i.slice().reverse();let o=e.find(a=>a instanceof Pt);o&&this._plugins.push(o)}addEventListener(e,n,i,o){return this._findPluginFor(n).addEventListener(e,n,i,o)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(o=>o.supports(e)),!n)throw new D(5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||t)(h(Ut),h(M))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})(),Dn="ng-app-id";function di(t){for(let r of t)r.remove()}function li(t,r){let e=r.createElement("style");return e.textContent=t,e}function ta(t,r,e,n){let i=t.head?.querySelectorAll(`style[${Dn}="${r}"],link[${Dn}="${r}"]`);if(i)for(let o of i)o.removeAttribute(Dn),o instanceof HTMLLinkElement?n.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function wn(t,r){let e=r.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var Cn=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,n,i,o={}){this.doc=e,this.appId=n,this.nonce=i,ta(e,n,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,n){for(let i of e)this.addUsage(i,this.inline,li);n?.forEach(i=>this.addUsage(i,this.external,wn))}removeStyles(e,n){for(let i of e)this.removeUsage(i,this.inline);n?.forEach(i=>this.removeUsage(i,this.external))}addUsage(e,n,i){let o=n.get(e);o?o.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,i(e,this.doc)))})}removeUsage(e,n){let i=n.get(e);i&&(i.usage--,i.usage<=0&&(di(i.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])di(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[n,{elements:i}]of this.inline)i.push(this.addElement(e,li(n,this.doc)));for(let[n,{elements:i}]of this.external)i.push(this.addElement(e,wn(n,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),e.appendChild(n)}static \u0275fac=function(n){return new(n||t)(h(b),h(be),h(Fe,8),h(Me))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})(),En={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},In=/%COMP%/g;var fi="%COMP%",na=`_nghost-${fi}`,ra=`_ngcontent-${fi}`,ia=!0,oa=new g("",{factory:()=>ia});function aa(t){return ra.replace(In,t)}function sa(t){return na.replace(In,t)}function hi(t,r){return r.map(e=>e.replace(In,t))}var Tn=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,n,i,o,a,s,u=null,d=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=i,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=u,this.tracingService=d,this.defaultRenderer=new nt(e,a,s,this.tracingService)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;let i=this.getOrCreateRenderer(e,n);return i instanceof Bt?i.applyToHost(e):i instanceof rt&&i.applyStyles(),i}getOrCreateRenderer(e,n){let i=this.rendererByCompId,o=i.get(n.id);if(!o){let a=this.doc,s=this.ngZone,u=this.eventManager,d=this.sharedStylesHost,l=this.removeStylesOnCompDestroy,f=this.tracingService;switch(n.encapsulation){case _t.Emulated:o=new Bt(u,d,n,this.appId,l,a,s,f);break;case _t.ShadowDom:return new kt(u,e,n,a,s,this.nonce,f,d);case _t.ExperimentalIsolatedShadowDom:return new kt(u,e,n,a,s,this.nonce,f);default:o=new rt(u,d,n,l,a,s,f);break}i.set(n.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||t)(h(An),h(Cn),h(be),h(oa),h(b),h(M),h(Fe),h(Dt,8))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})(),nt=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(r,e,n,i){this.eventManager=r,this.doc=e,this.ngZone=n,this.tracingService=i}destroy(){}destroyNode=null;createElement(r,e){return e?this.doc.createElementNS(En[e]||e,r):this.doc.createElement(r)}createComment(r){return this.doc.createComment(r)}createText(r){return this.doc.createTextNode(r)}appendChild(r,e){(mi(r)?r.content:r).appendChild(e)}insertBefore(r,e,n){r&&(mi(r)?r.content:r).insertBefore(e,n)}removeChild(r,e){e.remove()}selectRootElement(r,e){let n=typeof r=="string"?this.doc.querySelector(r):r;if(!n)throw new D(-5104,!1);return e||(n.textContent=""),n}parentNode(r){return r.parentNode}nextSibling(r){return r.nextSibling}setAttribute(r,e,n,i){if(i){e=i+":"+e;let o=En[i];o?r.setAttributeNS(o,e,n):r.setAttribute(e,n)}else r.setAttribute(e,n)}removeAttribute(r,e,n){if(n){let i=En[n];i?r.removeAttributeNS(i,e):r.removeAttribute(`${n}:${e}`)}else r.removeAttribute(e)}addClass(r,e){r.classList.add(e)}removeClass(r,e){r.classList.remove(e)}setStyle(r,e,n,i){i&(Oe.DashCase|Oe.Important)?r.style.setProperty(e,n,i&Oe.Important?"important":""):r.style[e]=n}removeStyle(r,e,n){n&Oe.DashCase?r.style.removeProperty(e):r.style[e]=""}setProperty(r,e,n){r!=null&&(r[e]=n)}setValue(r,e){r.nodeValue=e}listen(r,e,n,i){if(typeof r=="string"&&(r=ie().getGlobalEventTarget(this.doc,r),!r))throw new D(5102,!1);let o=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(r,e,o)),this.eventManager.addEventListener(r,e,o,i)}decoratePreventDefault(r){return e=>{if(e==="__ngUnwrap__")return r;r(e)===!1&&e.preventDefault()}}};function mi(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var kt=class extends nt{hostEl;sharedStylesHost;shadowRoot;constructor(r,e,n,i,o,a,s,u){super(r,i,o,s),this.hostEl=e,this.sharedStylesHost=u,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=n.styles;d=hi(n.id,d);for(let f of d){let v=document.createElement("style");a&&v.setAttribute("nonce",a),v.textContent=f,this.shadowRoot.appendChild(v)}let l=n.getExternalStyles?.();if(l)for(let f of l){let v=wn(f,i);a&&v.setAttribute("nonce",a),this.shadowRoot.appendChild(v)}}nodeOrShadowRoot(r){return r===this.hostEl?this.shadowRoot:r}appendChild(r,e){return super.appendChild(this.nodeOrShadowRoot(r),e)}insertBefore(r,e,n){return super.insertBefore(this.nodeOrShadowRoot(r),e,n)}removeChild(r,e){return super.removeChild(null,e)}parentNode(r){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},rt=class extends nt{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(r,e,n,i,o,a,s,u){super(r,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=i;let d=n.styles;this.styles=u?hi(u,d):d,this.styleUrls=n.getExternalStyles?.(u)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Ir.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Bt=class extends rt{contentAttr;hostAttr;constructor(r,e,n,i,o,a,s,u){let d=i+"-"+n.id;super(r,e,n,o,a,s,u,d),this.contentAttr=aa(d),this.hostAttr=sa(d)}applyToHost(r){this.applyStyles(),this.setAttribute(r,this.hostAttr,"")}createElement(r,e){let n=super.createElement(r,e);return super.setAttribute(n,this.contentAttr,""),n}};var jt=class t extends Ye{supportsDOMEvents=!0;static makeCurrent(){ln(new t)}onAndCancel(r,e,n,i){return r.addEventListener(e,n,i),()=>{r.removeEventListener(e,n,i)}}dispatchEvent(r,e){r.dispatchEvent(e)}remove(r){r.remove()}createElement(r,e){return e=e||this.getDefaultDocument(),e.createElement(r)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(r){return r.nodeType===Node.ELEMENT_NODE}isShadowRoot(r){return r instanceof DocumentFragment}getGlobalEventTarget(r,e){return e==="window"?window:e==="document"?r:e==="body"?r.body:null}getBaseHref(r){let e=ua();return e==null?null:da(e)}resetBaseElement(){it=null}getUserAgent(){return window.navigator.userAgent}getCookie(r){return et(document.cookie,r)}},it=null;function ua(){return it=it||document.head.querySelector("base"),it?it.getAttribute("href"):null}function da(t){return new URL(t,document.baseURI).pathname}var la=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})(),pi=["alt","control","meta","shift"],ma={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},fa={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},gi=(()=>{class t extends tt{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,i,o){let a=t.parseEventName(n),s=t.eventCallback(a.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>ie().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let n=e.toLowerCase().split("."),i=n.shift();if(n.length===0||!(i==="keydown"||i==="keyup"))return null;let o=t._normalizeKey(n.pop()),a="",s=n.indexOf("code");if(s>-1&&(n.splice(s,1),a="code."),pi.forEach(d=>{let l=n.indexOf(d);l>-1&&(n.splice(l,1),a+=d+".")}),a+=o,n.length!=0||o.length===0)return null;let u={};return u.domEventName=i,u.fullKey=a,u}static matchEventFullKeyCode(e,n){let i=ma[e.key]||e.key,o="";return n.indexOf("code.")>-1&&(i=e.code,o="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),pi.forEach(a=>{if(a!==i){let s=fa[a];s(e)&&(o+=a+".")}}),o+=i,o===n)}static eventCallback(e,n,i){return o=>{t.matchEventFullKeyCode(o,e)&&i.runGuarded(()=>n(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||t)(h(b))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();async function ha(t,r,e){let n=S({rootComponent:t},pa(r,e));return Rr(n)}function pa(t,r){return{platformRef:r?.platformRef,appProviders:[..._a,...t?.providers??[]],platformProviders:ya}}function ga(){jt.makeCurrent()}function ba(){return new ge}function va(){return gr(document),document}var ya=[{provide:Me,useValue:_n},{provide:br,useValue:ga,multi:!0},{provide:b,useFactory:va}];var _a=[{provide:mr,useValue:"root"},{provide:ge,useFactory:ba},{provide:Ut,useClass:Pt,multi:!0},{provide:Ut,useClass:gi,multi:!0},Tn,Cn,An,{provide:Ne,useExisting:Tn},{provide:ye,useClass:la},[]];var fe=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(r){r?typeof r=="string"?this.lazyInit=()=>{this.headers=new Map,r.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let i=e.slice(0,n),o=e.slice(n+1).trim();this.addHeaderEntry(i,o)}})}:typeof Headers<"u"&&r instanceof Headers?(this.headers=new Map,r.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(r).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(r){return this.init(),this.headers.has(r.toLowerCase())}get(r){this.init();let e=this.headers.get(r.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(r){return this.init(),this.headers.get(r.toLowerCase())||null}append(r,e){return this.clone({name:r,value:e,op:"a"})}set(r,e){return this.clone({name:r,value:e,op:"s"})}delete(r,e){return this.clone({name:r,value:e,op:"d"})}maybeSetNormalizedName(r,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,r)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(r=>this.applyUpdate(r)),this.lazyUpdate=null))}copyFrom(r){r.init(),Array.from(r.headers.keys()).forEach(e=>{this.headers.set(e,r.headers.get(e)),this.normalizedNames.set(e,r.normalizedNames.get(e))})}clone(r){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([r]),e}applyUpdate(r){let e=r.name.toLowerCase();switch(r.op){case"a":case"s":let n=r.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(r.name,e);let i=(r.op==="a"?this.headers.get(e):void 0)||[];i.push(...n),this.headers.set(e,i);break;case"d":let o=r.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(r,e){let n=r.toLowerCase();this.maybeSetNormalizedName(r,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(r,e){let n=(Array.isArray(e)?e:[e]).map(o=>o.toString()),i=r.toLowerCase();this.headers.set(i,n),this.maybeSetNormalizedName(r,i)}forEach(r){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>r(this.normalizedNames.get(e),this.headers.get(e)))}};var $t=class{map=new Map;set(r,e){return this.map.set(r,e),this}get(r){return this.map.has(r)||this.map.set(r,r.defaultValue()),this.map.get(r)}delete(r){return this.map.delete(r),this}has(r){return this.map.has(r)}keys(){return this.map.keys()}},Ht=class{encodeKey(r){return bi(r)}encodeValue(r){return bi(r)}decodeKey(r){return decodeURIComponent(r)}decodeValue(r){return decodeURIComponent(r)}};function Da(t,r){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(i=>{let o=i.indexOf("="),[a,s]=o==-1?[r.decodeKey(i),""]:[r.decodeKey(i.slice(0,o)),r.decodeValue(i.slice(o+1))],u=e.get(a)||[];u.push(s),e.set(a,u)}),e}var Ea=/%(\d[a-f0-9])/gi,wa={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function bi(t){return encodeURIComponent(t).replace(Ea,(r,e)=>wa[e]??r)}function zt(t){return`${t}`}var ae=class t{map;encoder;updates=null;cloneFrom=null;constructor(r={}){if(this.encoder=r.encoder||new Ht,r.fromString){if(r.fromObject)throw new D(2805,!1);this.map=Da(r.fromString,this.encoder)}else r.fromObject?(this.map=new Map,Object.keys(r.fromObject).forEach(e=>{let n=r.fromObject[e],i=Array.isArray(n)?n.map(zt):[zt(n)];this.map.set(e,i)})):this.map=null}has(r){return this.init(),this.map.has(r)}get(r){this.init();let e=this.map.get(r);return e?e[0]:null}getAll(r){return this.init(),this.map.get(r)||null}keys(){return this.init(),Array.from(this.map.keys())}append(r,e){return this.clone({param:r,value:e,op:"a"})}appendAll(r){let e=[];return Object.keys(r).forEach(n=>{let i=r[n];Array.isArray(i)?i.forEach(o=>{e.push({param:n,value:o,op:"a"})}):e.push({param:n,value:i,op:"a"})}),this.clone(e)}set(r,e){return this.clone({param:r,value:e,op:"s"})}delete(r,e){return this.clone({param:r,value:e,op:"d"})}toString(){return this.init(),this.keys().map(r=>{let e=this.encoder.encodeKey(r);return this.map.get(r).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(r=>r!=="").join("&")}clone(r){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(r),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(r=>this.map.set(r,this.cloneFrom.map.get(r))),this.updates.forEach(r=>{switch(r.op){case"a":case"s":let e=(r.op==="a"?this.map.get(r.param):void 0)||[];e.push(zt(r.value)),this.map.set(r.param,e);break;case"d":if(r.value!==void 0){let n=this.map.get(r.param)||[],i=n.indexOf(zt(r.value));i!==-1&&n.splice(i,1),n.length>0?this.map.set(r.param,n):this.map.delete(r.param)}else{this.map.delete(r.param);break}}}),this.cloneFrom=this.updates=null)}};function Aa(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function vi(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function yi(t){return typeof Blob<"u"&&t instanceof Blob}function _i(t){return typeof FormData<"u"&&t instanceof FormData}function Ca(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var Di="Content-Type",Ei="Accept",wi="text/plain",Ai="application/json",Ia=`${Ai}, ${wi}, */*`,Be=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(r,e,n,i){this.url=e,this.method=r.toUpperCase();let o;if(Aa(this.method)||i?(this.body=n!==void 0?n:null,o=i):o=n,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new D(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new fe,this.context??=new $t,!this.params)this.params=new ae,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),u=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+u+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||vi(this.body)||yi(this.body)||_i(this.body)||Ca(this.body)?this.body:this.body instanceof ae?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||_i(this.body)?null:yi(this.body)?this.body.type||null:vi(this.body)?null:typeof this.body=="string"?wi:this.body instanceof ae?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Ai:null}clone(r={}){let e=r.method||this.method,n=r.url||this.url,i=r.responseType||this.responseType,o=r.keepalive??this.keepalive,a=r.priority||this.priority,s=r.cache||this.cache,u=r.mode||this.mode,d=r.redirect||this.redirect,l=r.credentials||this.credentials,f=r.referrer??this.referrer,v=r.integrity||this.integrity,_=r.referrerPolicy||this.referrerPolicy,C=r.transferCache??this.transferCache,R=r.timeout??this.timeout,p=r.body!==void 0?r.body:this.body,y=r.withCredentials??this.withCredentials,T=r.reportProgress??this.reportProgress,W=r.headers||this.headers,I=r.params||this.params,ue=r.context??this.context;return r.setHeaders!==void 0&&(W=Object.keys(r.setHeaders).reduce((re,pe)=>re.set(pe,r.setHeaders[pe]),W)),r.setParams&&(I=Object.keys(r.setParams).reduce((re,pe)=>re.set(pe,r.setParams[pe]),I)),new t(e,n,p,{params:I,headers:W,context:ue,reportProgress:T,responseType:i,withCredentials:y,transferCache:C,keepalive:o,cache:s,priority:a,timeout:R,mode:u,redirect:d,credentials:l,referrer:f,integrity:v,referrerPolicy:_})}},_e=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(_e||{}),je=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(r,e=200,n="OK"){this.headers=r.headers||new fe,this.status=r.status!==void 0?r.status:e,this.statusText=r.statusText||n,this.url=r.url||null,this.redirected=r.redirected,this.responseType=r.responseType,this.ok=this.status>=200&&this.status<300}},Vt=class t extends je{constructor(r={}){super(r)}type=_e.ResponseHeader;clone(r={}){return new t({headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0})}},ot=class t extends je{body;constructor(r={}){super(r),this.body=r.body!==void 0?r.body:null}type=_e.Response;clone(r={}){return new t({body:r.body!==void 0?r.body:this.body,headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0,redirected:r.redirected??this.redirected,responseType:r.responseType??this.responseType})}},Ue=class extends je{name="HttpErrorResponse";message;error;ok=!1;constructor(r){super(r,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${r.url||"(unknown url)"}`:this.message=`Http failure response for ${r.url||"(unknown url)"}: ${r.status} ${r.statusText}`,this.error=r.error||null}},Ta=200,Sa=204;var Ma=new g("");var Fa=/^\)\]\}',?\n/;var Mn=(()=>{class t{xhrFactory;tracingService=c(Dt,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new D(-2800,!1);let n=this.xhrFactory;return q(null).pipe(lr(()=>new Ae(o=>{let a=n.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((p,y)=>a.setRequestHeader(p,y.join(","))),e.headers.has(Ei)||a.setRequestHeader(Ei,Ia),!e.headers.has(Di)){let p=e.detectContentTypeHeader();p!==null&&a.setRequestHeader(Di,p)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let p=e.responseType.toLowerCase();a.responseType=p!=="json"?p:"text"}let s=e.serializeBody(),u=null,d=()=>{if(u!==null)return u;let p=a.statusText||"OK",y=new fe(a.getAllResponseHeaders()),T=a.responseURL||e.url;return u=new Vt({headers:y,status:a.status,statusText:p,url:T}),u},l=this.maybePropagateTrace(()=>{let{headers:p,status:y,statusText:T,url:W}=d(),I=null;y!==Sa&&(I=typeof a.response>"u"?a.responseText:a.response),y===0&&(y=I?Ta:0);let ue=y>=200&&y<300;if(e.responseType==="json"&&typeof I=="string"){let re=I;I=I.replace(Fa,"");try{I=I!==""?JSON.parse(I):null}catch(pe){I=re,ue&&(ue=!1,I={error:pe,text:I})}}ue?(o.next(new ot({body:I,headers:p,status:y,statusText:T,url:W||void 0})),o.complete()):o.error(new Ue({error:I,headers:p,status:y,statusText:T,url:W||void 0}))}),f=this.maybePropagateTrace(p=>{let{url:y}=d(),T=new Ue({error:p,status:a.status||0,statusText:a.statusText||"Unknown Error",url:y||void 0});o.error(T)}),v=f;e.timeout&&(v=this.maybePropagateTrace(p=>{let{url:y}=d(),T=new Ue({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:y||void 0});o.error(T)}));let _=!1,C=this.maybePropagateTrace(p=>{_||(o.next(d()),_=!0);let y={type:_e.DownloadProgress,loaded:p.loaded};p.lengthComputable&&(y.total=p.total),e.responseType==="text"&&a.responseText&&(y.partialText=a.responseText),o.next(y)}),R=this.maybePropagateTrace(p=>{let y={type:_e.UploadProgress,loaded:p.loaded};p.lengthComputable&&(y.total=p.total),o.next(y)});return a.addEventListener("load",l),a.addEventListener("error",f),a.addEventListener("timeout",v),a.addEventListener("abort",f),e.reportProgress&&(a.addEventListener("progress",C),s!==null&&a.upload&&a.upload.addEventListener("progress",R)),a.send(s),o.next({type:_e.Sent}),()=>{a.removeEventListener("error",f),a.removeEventListener("abort",f),a.removeEventListener("load",l),a.removeEventListener("timeout",v),e.reportProgress&&(a.removeEventListener("progress",C),s!==null&&a.upload&&a.upload.removeEventListener("progress",R)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(n){return new(n||t)(h(ye))};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),xa=new g("",{factory:()=>!0}),Ra="XSRF-TOKEN",Oa=new g("",{factory:()=>Ra}),Na="X-XSRF-TOKEN",La=new g("",{factory:()=>Na}),Pa=(()=>{class t{cookieName=c(Oa);doc=c(b);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=et(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ci=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:function(n){let i=null;return n?i=new(n||t):i=h(Pa),i},providedIn:"root"})}return t})();function Ii(t,r){if(!c(xa)||t.method==="GET"||t.method==="HEAD")return r(t);try{let i=c(me).href,{origin:o}=new URL(i),{origin:a}=new URL(t.url,o);if(o!==a)return r(t)}catch{return r(t)}let e=c(Ci).getToken(),n=c(La);return e!=null&&!t.headers.has(n)&&(t=t.clone({headers:t.headers.set(n,e)})),r(t)}function ka(t,r){return r(t)}function Ba(t,r,e){return(n,i)=>fr(e,()=>r(n,o=>t(o,i)))}var Fn=new g("",{factory:()=>[Ii]}),Ti=new g(""),Si=new g("",{factory:()=>!0});var xn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:function(n){let i=null;return n?i=new(n||t):i=h(Mn),i},providedIn:"root"})}return t})();var Gt=(()=>{class t{backend;injector;chain=null;pendingTasks=c(hr);contributeToStability=c(Si);constructor(e,n){this.backend=e,this.injector=n}handle(e){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(Fn),...this.injector.get(Ti,[])]));this.chain=n.reduceRight((i,o)=>Ba(i,o,this.injector),ka)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,i=>this.backend.handle(i)).pipe(gt(n))}else return this.chain(e,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||t)(h(xn),h(We))};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Rn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:function(n){let i=null;return n?i=new(n||t):i=h(Gt),i},providedIn:"root"})}return t})();function Sn(t,r){return{body:r,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var Wt=(()=>{class t{handler;constructor(e){this.handler=e}request(e,n,i={}){let o;if(e instanceof Be)o=e;else{let u;i.headers instanceof fe?u=i.headers:u=new fe(i.headers);let d;i.params&&(i.params instanceof ae?d=i.params:d=new ae({fromObject:i.params})),o=new Be(e,n,i.body!==void 0?i.body:null,{headers:u,context:i.context,params:d,reportProgress:i.reportProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,credentials:i.credentials,referrer:i.referrer,referrerPolicy:i.referrerPolicy,integrity:i.integrity,timeout:i.timeout})}let a=q(o).pipe(sr(u=>this.handler.handle(u)));if(e instanceof Be||i.observe==="events")return a;let s=a.pipe(Ce(u=>u instanceof ot));switch(i.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(O(u=>{if(u.body!==null&&!(u.body instanceof ArrayBuffer))throw new D(2806,!1);return u.body}));case"blob":return s.pipe(O(u=>{if(u.body!==null&&!(u.body instanceof Blob))throw new D(2807,!1);return u.body}));case"text":return s.pipe(O(u=>{if(u.body!==null&&typeof u.body!="string")throw new D(2808,!1);return u.body}));default:return s.pipe(O(u=>u.body))}case"response":return s;default:throw new D(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new ae().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,i={}){return this.request("PATCH",e,Sn(i,n))}post(e,n,i={}){return this.request("POST",e,Sn(i,n))}put(e,n,i={}){return this.request("PUT",e,Sn(i,n))}static \u0275fac=function(n){return new(n||t)(h(Rn))};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var On=(function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t})(On||{});function Ua(t,r){return{\u0275kind:t,\u0275providers:r}}function ja(...t){let r=[Wt,Gt,{provide:Rn,useExisting:Gt},{provide:xn,useFactory:()=>c(Ma,{optional:!0})??c(Mn)},{provide:Fn,useValue:Ii,multi:!0}];for(let e of t)r.push(...e.\u0275providers);return sn(r)}function za(t){return Ua(On.Interceptors,t.map(r=>({provide:Fn,useValue:r,multi:!0})))}var kd=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(n){return new(n||t)(h(b))};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var at=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:function(n){let i=null;return n?i=new(n||t):i=h(Ha),i},providedIn:"root"})}return t})(),Ha=(()=>{class t extends at{_doc;constructor(e){super(),this._doc=e}sanitize(e,n){if(n==null)return null;switch(e){case z.NONE:return n;case z.HTML:return Re(n,"HTML")?xe(n):Cr(this._doc,String(n)).toString();case z.STYLE:return Re(n,"Style")?xe(n):n;case z.SCRIPT:if(Re(n,"Script"))return xe(n);throw new D(5200,!1);case z.URL:return Re(n,"URL")?xe(n):Ar(String(n));case z.RESOURCE_URL:if(Re(n,"ResourceURL"))return xe(n);throw new D(5201,!1);default:throw new D(5202,!1)}}bypassSecurityTrustHtml(e){return yr(e)}bypassSecurityTrustStyle(e){return _r(e)}bypassSecurityTrustScript(e){return Dr(e)}bypassSecurityTrustUrl(e){return Er(e)}bypassSecurityTrustResourceUrl(e){return wr(e)}static \u0275fac=function(n){return new(n||t)(h(b))};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function st(t){return t.buttons===0||t.detail===0}function ct(t){let r=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!r&&r.identifier===-1&&(r.radiusX==null||r.radiusX===1)&&(r.radiusY==null||r.radiusY===1)}var Nn;function Mi(){if(Nn==null){let t=typeof document<"u"?document.head:null;Nn=!!(t&&(t.createShadowRoot||t.attachShadow))}return Nn}function Ln(t){if(Mi()){let r=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&r instanceof ShadowRoot)return r}return null}function Pn(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}function te(t){return t.composedPath?t.composedPath()[0]:t.target}var kn;try{kn=typeof Intl<"u"&&Intl.v8BreakIterator}catch{kn=!1}var B=(()=>{class t{_platformId=c(Me);isBrowser=this._platformId?ui(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||kn)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ut;function Fi(){if(ut==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>ut=!0}))}finally{ut=ut||!1}return ut}function ze(t){return Fi()?t:!!t.capture}function Bn(t,r=0){return xi(t)?Number(t):arguments.length===2?r:0}function xi(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function ne(t){return t instanceof j?t.nativeElement:t}var Ri=new g("cdk-input-modality-detector-options"),Oi={ignoreKeys:[18,17,224,91,16]},Ni=650,Un={passive:!0,capture:!0},Li=(()=>{class t{_platform=c(B);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new tr(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(n=>n===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=te(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Ni||(this._modality.next(st(e)?"keyboard":"mouse"),this._mostRecentTarget=te(e))};_onTouchstart=e=>{if(ct(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=te(e)};constructor(){let e=c(M),n=c(b),i=c(Ri,{optional:!0});if(this._options=S(S({},Oi),i),this.modalityDetected=this._modality.pipe(bt(1)),this.modalityChanged=this.modalityDetected.pipe(cr()),this._platform.isBrowser){let o=c(Ne).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(n,"keydown",this._onKeydown,Un),o.listen(n,"mousedown",this._onMousedown,Un),o.listen(n,"touchstart",this._onTouchstart,Un)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),dt=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(dt||{}),Pi=new g("cdk-focus-monitor-default-options"),Kt=ze({passive:!0,capture:!0}),Zt=(()=>{class t{_ngZone=c(M);_platform=c(B);_inputModalityDetector=c(Li);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=c(b);_stopInputModalityDetector=new U;constructor(){let e=c(Pi,{optional:!0});this._detectionMode=e?.detectionMode||dt.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let n=te(e);for(let i=n;i;i=i.parentElement)e.type==="focus"?this._onFocus(e,i):this._onBlur(e,i)};monitor(e,n=!1){let i=ne(e);if(!this._platform.isBrowser||i.nodeType!==1)return q();let o=Ln(i)||this._document,a=this._elementInfo.get(i);if(a)return n&&(a.checkChildren=!0),a.subject;let s={checkChildren:n,subject:new U,rootNode:o};return this._elementInfo.set(i,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let n=ne(e),i=this._elementInfo.get(n);i&&(i.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(i))}focusVia(e,n,i){let o=ne(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,u])=>this._originChanged(s,n,u)):(this._setOrigin(n),typeof o.focus=="function"&&o.focus(i))}ngOnDestroy(){this._elementInfo.forEach((e,n)=>this.stopMonitoring(n))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===dt.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,n){e.classList.toggle("cdk-focused",!!n),e.classList.toggle("cdk-touch-focused",n==="touch"),e.classList.toggle("cdk-keyboard-focused",n==="keyboard"),e.classList.toggle("cdk-mouse-focused",n==="mouse"),e.classList.toggle("cdk-program-focused",n==="program")}_setOrigin(e,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&n,this._detectionMode===dt.IMMEDIATE){clearTimeout(this._originTimeoutId);let i=this._originFromTouchInteraction?Ni:1;this._originTimeoutId=setTimeout(()=>this._origin=null,i)}})}_onFocus(e,n){let i=this._elementInfo.get(n),o=te(e);!i||!i.checkChildren&&n!==o||this._originChanged(n,this._getFocusOrigin(o),i)}_onBlur(e,n){let i=this._elementInfo.get(n);!i||i.checkChildren&&e.relatedTarget instanceof Node&&n.contains(e.relatedTarget)||(this._setClasses(n),this._emitOrigin(i,null))}_emitOrigin(e,n){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(n))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let n=e.rootNode,i=this._rootNodeFocusListenerCount.get(n)||0;i||this._ngZone.runOutsideAngular(()=>{n.addEventListener("focus",this._rootNodeFocusAndBlurListener,Kt),n.addEventListener("blur",this._rootNodeFocusAndBlurListener,Kt)}),this._rootNodeFocusListenerCount.set(n,i+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(vt(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let n=e.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let i=this._rootNodeFocusListenerCount.get(n);i>1?this._rootNodeFocusListenerCount.set(n,i-1):(n.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Kt),n.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Kt),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,n,i){this._setClasses(e,n),this._emitOrigin(i,n),this._lastFocusOrigin=n}_getClosestElementsInfo(e){let n=[];return this._elementInfo.forEach((i,o)=>{(o===e||i.checkChildren&&o.contains(e))&&n.push([o,i])}),n}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:n,mostRecentModality:i}=this._inputModalityDetector;if(i!=="mouse"||!n||n===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(n))return!0}return!1}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ga=(()=>{class t{_elementRef=c(j);_focusMonitor=c(Zt);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new Se;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(n=>{this._focusOrigin=n,this.cdkFocusChange.emit(n)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=V({type:t,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return t})();var Yt=new WeakMap,se=(()=>{class t{_appRef;_injector=c(H);_environmentInjector=c(We);load(e){let n=this._appRef=this._appRef||this._injector.get(dn),i=Yt.get(n);i||(i={loaders:new Set,refs:[]},Yt.set(n,i),n.onDestroy(()=>{Yt.get(n)?.refs.forEach(o=>o.destroy()),Yt.delete(n)})),i.loaders.has(e)||(i.loaders.add(e),i.refs.push(Nr(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Jt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=K({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(n,i){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return t})(),Xt;function Wa(){if(Xt===void 0&&(Xt=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(Xt=t.trustedTypes.createPolicy("angular#components",{createHTML:r=>r}))}return Xt}function De(t){return Wa()?.createHTML(t)||t}function ki(t,r,e){let n=e.sanitize(z.HTML,r);t.innerHTML=De(n||"")}function jn(t){return Array.isArray(t)?t:[t]}var Bi=new Set,Ee,qt=(()=>{class t{_platform=c(B);_nonce=c(Fe,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Za}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Ka(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Ka(t,r){if(!Bi.has(t))try{Ee||(Ee=document.createElement("style"),r&&Ee.setAttribute("nonce",r),Ee.setAttribute("type","text/css"),document.head.appendChild(Ee)),Ee.sheet&&(Ee.sheet.insertRule(`@media ${t} {body{ }}`,0),Bi.add(t))}catch(e){console.error(e)}}function Za(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var zn=(()=>{class t{_mediaMatcher=c(qt);_zone=c(M);_queries=new Map;_destroySubject=new U;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Ui(jn(e)).some(i=>this._registerQuery(i).mql.matches)}observe(e){let i=Ui(jn(e)).map(a=>this._registerQuery(a).observable),o=rr(i);return o=ir(o.pipe(pt(1)),o.pipe(bt(1),Ie(0))),o.pipe(O(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:u,query:d})=>{s.matches=s.matches||u,s.breakpoints[d]=u}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let n=this._mediaMatcher.matchMedia(e),o={observable:new Ae(a=>{let s=u=>this._zone.run(()=>a.next(u));return n.addListener(s),()=>{n.removeListener(s)}}).pipe(dr(n),O(({matches:a})=>({query:e,matches:a})),vt(this._destroySubject)),mql:n};return this._queries.set(e,o),o}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Ui(t){return t.map(r=>r.split(",")).reduce((r,e)=>r.concat(e)).map(r=>r.trim())}function Ya(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let r=0;r<t.addedNodes.length;r++)if(!(t.addedNodes[r]instanceof Comment))return!1;for(let r=0;r<t.removedNodes.length;r++)if(!(t.removedNodes[r]instanceof Comment))return!1;return!0}return!1}var ji=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),zi=(()=>{class t{_mutationObserverFactory=c(ji);_observedElements=new Map;_ngZone=c(M);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,n)=>this._cleanupObserver(n))}observe(e){let n=ne(e);return new Ae(i=>{let a=this._observeElement(n).pipe(O(s=>s.filter(u=>!Ya(u))),Ce(s=>!!s.length)).subscribe(s=>{this._ngZone.run(()=>{i.next(s)})});return()=>{a.unsubscribe(),this._unobserveElement(n)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let n=new U,i=this._mutationObserverFactory.create(o=>n.next(o));i&&i.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:i,stream:n,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:n,stream:i}=this._observedElements.get(e);n&&n.disconnect(),i.complete(),this._observedElements.delete(e)}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Bl=(()=>{class t{_contentObserver=c(zi);_elementRef=c(j);event=new Se;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=Bn(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(Ie(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=V({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",Z],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),$i=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=P({type:t});static \u0275inj=L({providers:[ji]})}return t})();var Wi=(()=>{class t{_platform=c(B);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return Ja(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let n=Xa(os(e));if(n&&(Hi(n)===-1||!this.isVisible(n)))return!1;let i=e.nodeName.toLowerCase(),o=Hi(e);return e.hasAttribute("contenteditable")?o!==-1:i==="iframe"||i==="object"||this._platform.WEBKIT&&this._platform.IOS&&!rs(e)?!1:i==="audio"?e.hasAttribute("controls")?o!==-1:!1:i==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,n){return is(e)&&!this.isDisabled(e)&&(n?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Xa(t){try{return t.frameElement}catch{return null}}function Ja(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function qa(t){let r=t.nodeName.toLowerCase();return r==="input"||r==="select"||r==="button"||r==="textarea"}function Qa(t){return ts(t)&&t.type=="hidden"}function es(t){return ns(t)&&t.hasAttribute("href")}function ts(t){return t.nodeName.toLowerCase()=="input"}function ns(t){return t.nodeName.toLowerCase()=="a"}function Ki(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let r=t.getAttribute("tabindex");return!!(r&&!isNaN(parseInt(r,10)))}function Hi(t){if(!Ki(t))return null;let r=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(r)?-1:r}function rs(t){let r=t.nodeName.toLowerCase(),e=r==="input"&&t.type;return e==="text"||e==="password"||r==="select"||r==="textarea"}function is(t){return Qa(t)?!1:qa(t)||es(t)||t.hasAttribute("contenteditable")||Ki(t)}function os(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var Qt=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(r){this._enabled=r,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(r,this._startAnchor),this._toggleAnchorTabIndex(r,this._endAnchor))}_enabled=!0;constructor(r,e,n,i,o=!1,a){this._element=r,this._checker=e,this._ngZone=n,this._document=i,this._injector=a,o||this.attachAnchors()}destroy(){let r=this._startAnchor,e=this._endAnchor;r&&(r.removeEventListener("focus",this.startAnchorListener),r.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(r){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(r)))})}focusFirstTabbableElementWhenReady(r){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(r)))})}focusLastTabbableElementWhenReady(r){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(r)))})}_getRegionBoundary(r){let e=this._element.querySelectorAll(`[cdk-focus-region-${r}], [cdkFocusRegion${r}], [cdk-focus-${r}]`);return r=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(r){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let n=this._getFirstTabbableElement(e);return n?.focus(r),!!n}return e.focus(r),!0}return this.focusFirstTabbableElement(r)}focusFirstTabbableElement(r){let e=this._getRegionBoundary("start");return e&&e.focus(r),!!e}focusLastTabbableElement(r){let e=this._getRegionBoundary("end");return e&&e.focus(r),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(r){if(this._checker.isFocusable(r)&&this._checker.isTabbable(r))return r;let e=r.children;for(let n=0;n<e.length;n++){let i=e[n].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[n]):null;if(i)return i}return null}_getLastTabbableElement(r){if(this._checker.isFocusable(r)&&this._checker.isTabbable(r))return r;let e=r.children;for(let n=e.length-1;n>=0;n--){let i=e[n].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[n]):null;if(i)return i}return null}_createAnchor(){let r=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,r),r.classList.add("cdk-visually-hidden"),r.classList.add("cdk-focus-trap-anchor"),r.setAttribute("aria-hidden","true"),r}_toggleAnchorTabIndex(r,e){r?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(r){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(r,this._startAnchor),this._toggleAnchorTabIndex(r,this._endAnchor))}_executeOnStable(r){this._injector?Tr(r,{injector:this._injector}):setTimeout(r)}},Zi=(()=>{class t{_checker=c(Wi);_ngZone=c(M);_document=c(b);_injector=c(H);constructor(){c(se).load(Jt)}create(e,n=!1){return new Qt(e,this._checker,this._ngZone,this._document,n,this._injector)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),as=(()=>{class t{_elementRef=c(j);_focusTrapFactory=c(Zi);focusTrap=void 0;_previouslyFocusedElement=null;get enabled(){return this.focusTrap?.enabled||!1}set enabled(e){this.focusTrap&&(this.focusTrap.enabled=e)}autoCapture=!1;constructor(){c(B).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(e){let n=e.autoCapture;n&&!n.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=Pn(),this.focusTrap?.focusInitialElementWhenReady()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=V({type:t,selectors:[["","cdkTrapFocus",""]],inputs:{enabled:[2,"cdkTrapFocus","enabled",Z],autoCapture:[2,"cdkTrapFocusAutoCapture","autoCapture",Z]},exportAs:["cdkTrapFocus"],features:[yt]})}return t})(),Yi=new g("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),Xi=new g("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),ss=0,cs=(()=>{class t{_ngZone=c(M);_defaultOptions=c(Xi,{optional:!0});_liveElement;_document=c(b);_sanitizer=c(at);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=c(Yi,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...n){let i=this._defaultOptions,o,a;return n.length===1&&typeof n[0]=="number"?a=n[0]:[o,a]=n,this.clear(),clearTimeout(this._previousTimeout),o||(o=i&&i.politeness?i.politeness:"polite"),a==null&&i&&(a=i.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:ki(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",n=this._document.getElementsByClassName(e),i=this._document.createElement("div");for(let o=0;o<n.length;o++)n[o].remove();return i.classList.add(e),i.classList.add("cdk-visually-hidden"),i.setAttribute("aria-atomic","true"),i.setAttribute("aria-live","polite"),i.id=`cdk-live-announcer-${ss++}`,this._document.body.appendChild(i),i}_exposeAnnouncerToModals(e){let n=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let i=0;i<n.length;i++){let o=n[i],a=o.getAttribute("aria-owns");a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var he=(function(t){return t[t.NONE=0]="NONE",t[t.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",t[t.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",t})(he||{}),Vi="cdk-high-contrast-black-on-white",Gi="cdk-high-contrast-white-on-black",$n="cdk-high-contrast-active",Ji=(()=>{class t{_platform=c(B);_hasCheckedHighContrastMode=!1;_document=c(b);_breakpointSubscription;constructor(){this._breakpointSubscription=c(zn).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return he.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let n=this._document.defaultView||window,i=n&&n.getComputedStyle?n.getComputedStyle(e):null,o=(i&&i.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return he.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return he.BLACK_ON_WHITE}return he.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove($n,Vi,Gi),this._hasCheckedHighContrastMode=!0;let n=this.getHighContrastMode();n===he.BLACK_ON_WHITE?e.add($n,Vi):n===he.WHITE_ON_BLACK&&e.add($n,Gi)}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),us=(()=>{class t{constructor(){c(Ji)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(n){return new(n||t)};static \u0275mod=P({type:t});static \u0275inj=L({imports:[$i]})}return t})();var ds=200,en=class{_letterKeyStream=new U;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new U;selectedItem=this._selectedItem;constructor(r,e){let n=typeof e?.debounceInterval=="number"?e.debounceInterval:ds;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(r),this._setupKeyHandler(n)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(r){this._selectedItemIndex=r}setItems(r){this._items=r}handleKey(r){let e=r.keyCode;r.key&&r.key.length===1?this._letterKeyStream.next(r.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(r){this._letterKeyStream.pipe(Te(e=>this._pressedLetters.push(e)),Ie(r),Ce(()=>this._pressedLetters.length>0),O(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let n=1;n<this._items.length+1;n++){let i=(this._selectedItemIndex+n)%this._items.length,o=this._items[i];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function qi(t,...r){return r.length?r.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var $e=class{_items;_activeItemIndex=Ke(-1);_activeItem=Ke(null);_wrap=!1;_typeaheadSubscription=ht.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=r=>r.disabled;constructor(r,e){this._items=r,r instanceof cn?this._itemChangesSubscription=r.changes.subscribe(n=>this._itemsChanged(n.toArray())):At(r)&&(this._effectRef=pr(()=>this._itemsChanged(r()),{injector:e}))}tabOut=new U;change=new U;skipPredicate(r){return this._skipPredicateFn=r,this}withWrap(r=!0){return this._wrap=r,this}withVerticalOrientation(r=!0){return this._vertical=r,this}withHorizontalOrientation(r){return this._horizontal=r,this}withAllowedModifierKeys(r){return this._allowedModifierKeys=r,this}withTypeAhead(r=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new en(e,{debounceInterval:typeof r=="number"?r:void 0,skipPredicate:n=>this._skipPredicateFn(n)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(n=>{this.setActiveItem(n)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(r=!0){return this._homeAndEnd=r,this}withPageUpDown(r=!0,e=10){return this._pageUpAndDown={enabled:r,delta:e},this}setActiveItem(r){let e=this._activeItem();this.updateActiveItem(r),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(r){let e=r.keyCode,i=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!r[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&i){this.setNextItemActive();break}else return;case 38:if(this._vertical&&i){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&i){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&i){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&i){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&i){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(i||qi(r,"shiftKey"))&&this._typeahead?.handleKey(r);return}this._typeahead?.reset(),r.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(r){let e=this._getItemsArray(),n=typeof r=="number"?r:e.indexOf(r),i=e[n];this._activeItem.set(i??null),this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(r){this._wrap?this._setActiveInWrapMode(r):this._setActiveInDefaultMode(r)}_setActiveInWrapMode(r){let e=this._getItemsArray();for(let n=1;n<=e.length;n++){let i=(this._activeItemIndex()+r*n+e.length)%e.length,o=e[i];if(!this._skipPredicateFn(o)){this.setActiveItem(i);return}}}_setActiveInDefaultMode(r){this._setActiveItemByIndex(this._activeItemIndex()+r,r)}_setActiveItemByIndex(r,e){let n=this._getItemsArray();if(n[r]){for(;this._skipPredicateFn(n[r]);)if(r+=e,!n[r])return;this.setActiveItem(r)}}_getItemsArray(){return At(this._items)?this._items():this._items instanceof cn?this._items.toArray():this._items}_itemsChanged(r){this._typeahead?.setItems(r);let e=this._activeItem();if(e){let n=r.indexOf(e);n>-1&&n!==this._activeItemIndex()&&(this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n))}}};var Hn=class extends $e{setActiveItem(r){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(r),this.activeItem&&this.activeItem.setActiveStyles()}};var Vn=class extends $e{_origin="program";setFocusOrigin(r){return this._origin=r,this}setActiveItem(r){super.setActiveItem(r),this.activeItem&&this.activeItem.focus(this._origin)}};var Gn={},Wn=class t{_appId=c(be);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(r,e=!1){return this._appId!=="ng"&&(r+=this._appId),Gn.hasOwnProperty(r)||(Gn[r]=0),`${r}${e?t._infix+"-":""}${Gn[r]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})};var eo=" ";function ls(t,r,e){let n=nn(t,r);e=e.trim(),!n.some(i=>i.trim()===e)&&(n.push(e),t.setAttribute(r,n.join(eo)))}function ms(t,r,e){let n=nn(t,r);e=e.trim();let i=n.filter(o=>o!==e);i.length?t.setAttribute(r,i.join(eo)):t.removeAttribute(r)}function nn(t,r){return t.getAttribute(r)?.match(/\S+/g)??[]}var to="cdk-describedby-message",tn="cdk-describedby-host",Zn=0,Pm=(()=>{class t{_platform=c(B);_document=c(b);_messageRegistry=new Map;_messagesContainer=null;_id=`${Zn++}`;constructor(){c(se).load(Jt),this._id=c(be)+"-"+Zn++}describe(e,n,i){if(!this._canBeDescribed(e,n))return;let o=Kn(n,i);typeof n!="string"?(Qi(n,this._id),this._messageRegistry.set(o,{messageElement:n,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(n,i),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,n,i){if(!n||!this._isElementNode(e))return;let o=Kn(n,i);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof n=="string"){let a=this._messageRegistry.get(o);a&&a.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${tn}="${this._id}"]`);for(let n=0;n<e.length;n++)this._removeCdkDescribedByReferenceIds(e[n]),e[n].removeAttribute(tn);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,n){let i=this._document.createElement("div");Qi(i,this._id),i.textContent=e,n&&i.setAttribute("role",n),this._createMessagesContainer(),this._messagesContainer.appendChild(i),this._messageRegistry.set(Kn(e,n),{messageElement:i,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",n=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<n.length;o++)n[o].remove();let i=this._document.createElement("div");i.style.visibility="hidden",i.classList.add(e),i.classList.add("cdk-visually-hidden"),this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._messagesContainer=i}_removeCdkDescribedByReferenceIds(e){let n=nn(e,"aria-describedby").filter(i=>i.indexOf(to)!=0);e.setAttribute("aria-describedby",n.join(" "))}_addMessageReference(e,n){let i=this._messageRegistry.get(n);ls(e,"aria-describedby",i.messageElement.id),e.setAttribute(tn,this._id),i.referenceCount++}_removeMessageReference(e,n){let i=this._messageRegistry.get(n);i.referenceCount--,ms(e,"aria-describedby",i.messageElement.id),e.removeAttribute(tn)}_isElementDescribedByMessage(e,n){let i=nn(e,"aria-describedby"),o=this._messageRegistry.get(n),a=o&&o.messageElement.id;return!!a&&i.indexOf(a)!=-1}_canBeDescribed(e,n){if(!this._isElementNode(e))return!1;if(n&&typeof n=="object")return!0;let i=n==null?"":`${n}`.trim(),o=e.getAttribute("aria-label");return i?!o||o.trim()!==i:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Kn(t,r){return typeof t=="string"?`${r||""}/${t}`:t}function Qi(t,r){t.id||(t.id=`${to}-${r}-${Zn++}`)}var lt=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(lt||{}),rn,we;function Vm(){if(we==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return we=!1,we;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)we=!0;else{let t=Element.prototype.scrollTo;t?we=!/\{\s*\[native code\]\s*\}/.test(t.toString()):we=!1}}return we}function Gm(){if(typeof document!="object"||!document)return lt.NORMAL;if(rn==null){let t=document.createElement("div"),r=t.style;t.dir="rtl",r.width="1px",r.overflow="auto",r.visibility="hidden",r.pointerEvents="none",r.position="absolute";let e=document.createElement("div"),n=e.style;n.width="2px",n.height="1px",t.appendChild(e),document.body.appendChild(t),rn=lt.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,rn=t.scrollLeft===0?lt.NEGATED:lt.INVERTED),t.remove()}return rn}function Km(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var He,no=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Ym(){if(He)return He;if(typeof document!="object"||!document)return He=new Set(no),He;let t=document.createElement("input");return He=new Set(no.filter(r=>(t.setAttribute("type",r),t.type===r))),He}var ef={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var fs=new g("MATERIAL_ANIMATIONS"),ro=null;function hs(){return c(fs,{optional:!0})?.animationsDisabled||c(vr,{optional:!0})==="NoopAnimations"?"di-disabled":(ro??=c(qt).matchMedia("(prefers-reduced-motion)").matches,ro?"reduced-motion":"enabled")}function Ve(){return hs()!=="enabled"}function sf(t){return t==null?"":typeof t=="string"?t:`${t}px`}function uf(t){return t!=null&&`${t}`!="false"}function df(t,r=/\s+/){let e=[];if(t!=null){let n=Array.isArray(t)?t:`${t}`.split(r);for(let i of n){let o=`${i}`.trim();o&&e.push(o)}}return e}var J=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(J||{}),Yn=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=J.HIDDEN;constructor(r,e,n,i=!1){this._renderer=r,this.element=e,this.config=n,this._animationForciblyDisabledThroughCss=i}fadeOut(){this._renderer.fadeOutRipple(this)}},io=ze({passive:!0,capture:!0}),Xn=class{_events=new Map;addHandler(r,e,n,i){let o=this._events.get(e);if(o){let a=o.get(n);a?a.add(i):o.set(n,new Set([i]))}else this._events.set(e,new Map([[n,new Set([i])]])),r.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,io)})}removeHandler(r,e,n){let i=this._events.get(r);if(!i)return;let o=i.get(e);o&&(o.delete(n),o.size===0&&i.delete(e),i.size===0&&(this._events.delete(r),document.removeEventListener(r,this._delegateEventHandler,io)))}_delegateEventHandler=r=>{let e=te(r);e&&this._events.get(r.type)?.forEach((n,i)=>{(i===e||i.contains(e))&&n.forEach(o=>o.handleEvent(r))})}},mt={enterDuration:225,exitDuration:150},ps=800,oo=ze({passive:!0,capture:!0}),ao=["mousedown","touchstart"],so=["mouseup","mouseleave","touchend","touchcancel"],gs=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=K({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(n,i){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return t})(),ft=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Xn;constructor(r,e,n,i,o){this._target=r,this._ngZone=e,this._platform=i,i.isBrowser&&(this._containerElement=ne(n)),o&&o.get(se).load(gs)}fadeInRipple(r,e,n={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=S(S({},mt),n.animation);n.centered&&(r=i.left+i.width/2,e=i.top+i.height/2);let a=n.radius||bs(r,e,i),s=r-i.left,u=e-i.top,d=o.enterDuration,l=document.createElement("div");l.classList.add("mat-ripple-element"),l.style.left=`${s-a}px`,l.style.top=`${u-a}px`,l.style.height=`${a*2}px`,l.style.width=`${a*2}px`,n.color!=null&&(l.style.backgroundColor=n.color),l.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(l);let f=window.getComputedStyle(l),v=f.transitionProperty,_=f.transitionDuration,C=v==="none"||_==="0s"||_==="0s, 0s"||i.width===0&&i.height===0,R=new Yn(this,l,n,C);l.style.transform="scale3d(1, 1, 1)",R.state=J.FADING_IN,n.persistent||(this._mostRecentTransientRipple=R);let p=null;return!C&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let y=()=>{p&&(p.fallbackTimer=null),clearTimeout(W),this._finishRippleTransition(R)},T=()=>this._destroyRipple(R),W=setTimeout(T,d+100);l.addEventListener("transitionend",y),l.addEventListener("transitioncancel",T),p={onTransitionEnd:y,onTransitionCancel:T,fallbackTimer:W}}),this._activeRipples.set(R,p),(C||!d)&&this._finishRippleTransition(R),R}fadeOutRipple(r){if(r.state===J.FADING_OUT||r.state===J.HIDDEN)return;let e=r.element,n=S(S({},mt),r.config.animation);e.style.transitionDuration=`${n.exitDuration}ms`,e.style.opacity="0",r.state=J.FADING_OUT,(r._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(r)}fadeOutAll(){this._getActiveRipples().forEach(r=>r.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(r=>{r.config.persistent||r.fadeOut()})}setupTriggerEvents(r){let e=ne(r);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,ao.forEach(n=>{t._eventManager.addHandler(this._ngZone,n,e,this)}))}handleEvent(r){r.type==="mousedown"?this._onMousedown(r):r.type==="touchstart"?this._onTouchStart(r):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{so.forEach(e=>{this._triggerElement.addEventListener(e,this,oo)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(r){r.state===J.FADING_IN?this._startFadeOutTransition(r):r.state===J.FADING_OUT&&this._destroyRipple(r)}_startFadeOutTransition(r){let e=r===this._mostRecentTransientRipple,{persistent:n}=r.config;r.state=J.VISIBLE,!n&&(!e||!this._isPointerDown)&&r.fadeOut()}_destroyRipple(r){let e=this._activeRipples.get(r)??null;this._activeRipples.delete(r),this._activeRipples.size||(this._containerRect=null),r===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),r.state=J.HIDDEN,e!==null&&(r.element.removeEventListener("transitionend",e.onTransitionEnd),r.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),r.element.remove()}_onMousedown(r){let e=st(r),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+ps;!this._target.rippleDisabled&&!e&&!n&&(this._isPointerDown=!0,this.fadeInRipple(r.clientX,r.clientY,this._target.rippleConfig))}_onTouchStart(r){if(!this._target.rippleDisabled&&!ct(r)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=r.changedTouches;if(e)for(let n=0;n<e.length;n++)this.fadeInRipple(e[n].clientX,e[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(r=>{let e=r.state===J.VISIBLE||r.config.terminateOnPointerUp&&r.state===J.FADING_IN;!r.config.persistent&&e&&r.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let r=this._triggerElement;r&&(ao.forEach(e=>t._eventManager.removeHandler(e,r,this)),this._pointerUpEventsRegistered&&(so.forEach(e=>r.removeEventListener(e,this,oo)),this._pointerUpEventsRegistered=!1))}};function bs(t,r,e){let n=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),i=Math.max(Math.abs(r-e.top),Math.abs(r-e.bottom));return Math.sqrt(n*n+i*i)}var Jn=new g("mat-ripple-global-options"),Af=(()=>{class t{_elementRef=c(j);_animationsDisabled=Ve();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=c(M),n=c(B),i=c(Jn,{optional:!0}),o=c(H);this._globalOptions=i||{},this._rippleRenderer=new ft(this,e,this._elementRef,n,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:S(S(S({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,n=0,i){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,n,S(S({},this.rippleConfig),i)):this._rippleRenderer.fadeInRipple(0,0,S(S({},this.rippleConfig),e))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=V({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(n,i){n&2&&le("mat-ripple-unbounded",i.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var vs={capture:!0},ys=["focus","mousedown","mouseenter","touchstart"],qn="mat-ripple-loader-uninitialized",Qn="mat-ripple-loader-class-name",co="mat-ripple-loader-centered",on="mat-ripple-loader-disabled",uo=(()=>{class t{_document=c(b);_animationsDisabled=Ve();_globalRippleOptions=c(Jn,{optional:!0});_platform=c(B);_ngZone=c(M);_injector=c(H);_eventCleanups;_hosts=new Map;constructor(){let e=c(Ne).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>ys.map(n=>e.listen(this._document,n,this._onInteraction,vs)))}ngOnDestroy(){let e=this._hosts.keys();for(let n of e)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(e,n){e.setAttribute(qn,this._globalRippleOptions?.namespace??""),(n.className||!e.hasAttribute(Qn))&&e.setAttribute(Qn,n.className||""),n.centered&&e.setAttribute(co,""),n.disabled&&e.setAttribute(on,"")}setDisabled(e,n){let i=this._hosts.get(e);i?(i.target.rippleDisabled=n,!n&&!i.hasSetUpEvents&&(i.hasSetUpEvents=!0,i.renderer.setupTriggerEvents(e))):n?e.setAttribute(on,""):e.removeAttribute(on)}_onInteraction=e=>{let n=te(e);if(n instanceof HTMLElement){let i=n.closest(`[${qn}="${this._globalRippleOptions?.namespace??""}"]`);i&&this._createRipple(i)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let n=this._document.createElement("span");n.classList.add("mat-ripple",e.getAttribute(Qn)),e.append(n);let i=this._globalRippleOptions,o=this._animationsDisabled?0:i?.animation?.enterDuration??mt.enterDuration,a=this._animationsDisabled?0:i?.animation?.exitDuration??mt.exitDuration,s={rippleDisabled:this._animationsDisabled||i?.disabled||e.hasAttribute(on),rippleConfig:{centered:e.hasAttribute(co),terminateOnPointerUp:i?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},u=new ft(s,this._ngZone,n,this._platform,this._injector),d=!s.rippleDisabled;d&&u.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:u,hasSetUpEvents:d}),e.removeAttribute(qn)}destroyRipple(e){let n=this._hosts.get(e);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var lo=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=K({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(n,i){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var _s=["mat-icon-button",""],Ds=["*"],Es=new g("MAT_BUTTON_CONFIG");function mo(t){return t==null?void 0:Or(t)}var er=(()=>{class t{_elementRef=c(j);_ngZone=c(M);_animationsDisabled=Ve();_config=c(Es,{optional:!0});_focusMonitor=c(Zt);_cleanupClick;_renderer=c(un);_rippleLoader=c(uo);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){c(se).load(lo);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",n){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=V({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(n,i){n&2&&(Ze("disabled",i._getDisabledAttribute())("aria-disabled",i._getAriaDisabled())("tabindex",i._getTabIndex()),Ct(i.color?"mat-"+i.color:""),le("mat-mdc-button-disabled",i.disabled)("mat-mdc-button-disabled-interactive",i.disabledInteractive)("mat-unthemed",!i.color)("_mat-animation-noopable",i._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",Z],disabled:[2,"disabled","disabled",Z],ariaDisabled:[2,"aria-disabled","ariaDisabled",Z],disabledInteractive:[2,"disabledInteractive","disabledInteractive",Z],tabIndex:[2,"tabIndex","tabIndex",mo],_tabindex:[2,"tabindex","_tabindex",mo]}})}return t})(),ws=(()=>{class t extends er{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=K({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[wt],attrs:_s,ngContentSelectors:Ds,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,i){n&1&&(Pe(),Le(0,"span",0),de(1),Le(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var As=new g("cdk-dir-doc",{providedIn:"root",factory:()=>c(b)}),Cs=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function fo(t){let r=t?.toLowerCase()||"";return r==="auto"&&typeof navigator<"u"&&navigator?.language?Cs.test(navigator.language)?"rtl":"ltr":r==="rtl"?"rtl":"ltr"}var Is=(()=>{class t{get value(){return this.valueSignal()}valueSignal=Ke("ltr");change=new Se;constructor(){let e=c(As,{optional:!0});if(e){let n=e.body?e.body.dir:null,i=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(fo(n||i||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ge=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=P({type:t});static \u0275inj=L({})}return t})();var ho=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=P({type:t});static \u0275inj=L({imports:[Ge]})}return t})();var Ts=["matButton",""],Ss=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],Ms=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var po=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),rh=(()=>{class t extends er{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=Fs(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let n=this._elementRef.nativeElement.classList,i=this._appearance?po.get(this._appearance):null,o=po.get(e);i&&n.remove(...i),n.add(...o),this._appearance=e}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=K({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[wt],attrs:Ts,ngContentSelectors:Ms,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,i){n&1&&(Pe(Ss),Le(0,"span",0),de(1),Mr(2,"span",1),de(3,1),Fr(),de(4,2),Le(5,"span",2)(6,"span",3)),n&2&&le("mdc-button__ripple",!i._isFab)("mdc-fab__ripple",i._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function Fs(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var ih=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=P({type:t});static \u0275inj=L({imports:[ho,Ge]})}return t})();function go(t){return Error(`Unable to find icon with the name "${t}"`)}function xs(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function bo(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function vo(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var ce=class{url;svgText;options;svgElement=null;constructor(r,e,n){this.url=r,this.svgText=e,this.options=n}},_o=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,n,i,o){this._httpClient=e,this._sanitizer=n,this._errorHandler=o,this._document=i}addSvgIcon(e,n,i){return this.addSvgIconInNamespace("",e,n,i)}addSvgIconLiteral(e,n,i){return this.addSvgIconLiteralInNamespace("",e,n,i)}addSvgIconInNamespace(e,n,i,o){return this._addSvgIconConfig(e,n,new ce(i,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,n,i,o){let a=this._sanitizer.sanitize(z.HTML,i);if(!a)throw vo(i);let s=De(a);return this._addSvgIconConfig(e,n,new ce("",s,o))}addSvgIconSet(e,n){return this.addSvgIconSetInNamespace("",e,n)}addSvgIconSetLiteral(e,n){return this.addSvgIconSetLiteralInNamespace("",e,n)}addSvgIconSetInNamespace(e,n,i){return this._addSvgIconSetConfig(e,new ce(n,null,i))}addSvgIconSetLiteralInNamespace(e,n,i){let o=this._sanitizer.sanitize(z.HTML,n);if(!o)throw vo(n);let a=De(o);return this._addSvgIconSetConfig(e,new ce("",a,i))}registerFontClassAlias(e,n=e){return this._fontCssClassesByAlias.set(e,n),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let n=this._sanitizer.sanitize(z.RESOURCE_URL,e);if(!n)throw bo(e);let i=this._cachedIconsByUrl.get(n);return i?q(an(i)):this._loadSvgIconFromConfig(new ce(e,null)).pipe(Te(o=>this._cachedIconsByUrl.set(n,o)),O(o=>an(o)))}getNamedSvgIcon(e,n=""){let i=yo(n,e),o=this._svgIconConfigs.get(i);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(n,e),o)return this._svgIconConfigs.set(i,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(n);return a?this._getSvgFromIconSetConfigs(e,a):nr(go(i))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?q(an(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(O(n=>an(n)))}_getSvgFromIconSetConfigs(e,n){let i=this._extractIconWithNameFromAnySet(e,n);if(i)return q(i);let o=n.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(ar(s=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(z.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(d)),q(null)})));return or(o).pipe(O(()=>{let a=this._extractIconWithNameFromAnySet(e,n);if(!a)throw go(e);return a}))}_extractIconWithNameFromAnySet(e,n){for(let i=n.length-1;i>=0;i--){let o=n[i];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(Te(n=>e.svgText=n),O(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?q(null):this._fetchIcon(e).pipe(Te(n=>e.svgText=n))}_extractSvgIconFromSet(e,n,i){let o=e.querySelector(`[id="${n}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,i);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),i);let s=this._svgElementFromString(De("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,i)}_svgElementFromString(e){let n=this._document.createElement("DIV");n.innerHTML=e;let i=n.querySelector("svg");if(!i)throw Error("<svg> tag not found");return i}_toSvgElement(e){let n=this._svgElementFromString(De("<svg></svg>")),i=e.attributes;for(let o=0;o<i.length;o++){let{name:a,value:s}=i[o];a!=="id"&&n.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&n.appendChild(e.childNodes[o].cloneNode(!0));return n}_setSvgAttributes(e,n){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),n&&n.viewBox&&e.setAttribute("viewBox",n.viewBox),e}_fetchIcon(e){let{url:n,options:i}=e,o=i?.withCredentials??!1;if(!this._httpClient)throw xs();if(n==null)throw Error(`Cannot fetch icon from URL "${n}".`);let a=this._sanitizer.sanitize(z.RESOURCE_URL,n);if(!a)throw bo(n);let s=this._inProgressUrlFetches.get(a);if(s)return s;let u=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(O(d=>De(d)),gt(()=>this._inProgressUrlFetches.delete(a)),ur());return this._inProgressUrlFetches.set(a,u),u}_addSvgIconConfig(e,n,i){return this._svgIconConfigs.set(yo(e,n),i),this}_addSvgIconSetConfig(e,n){let i=this._iconSetConfigs.get(e);return i?i.push(n):this._iconSetConfigs.set(e,[n]),this}_svgElementFromConfig(e){if(!e.svgElement){let n=this._svgElementFromString(e.svgText);this._setSvgAttributes(n,e.options),e.svgElement=n}return e.svgElement}_getIconConfigFromResolvers(e,n){for(let i=0;i<this._resolvers.length;i++){let o=this._resolvers[i](n,e);if(o)return Rs(o)?new ce(o.url,null,o.options):new ce(o,null)}}static \u0275fac=function(n){return new(n||t)(h(Wt,8),h(at),h(b,8),h(ge))};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function an(t){return t.cloneNode(!0)}function yo(t,r){return t+":"+r}function Rs(t){return!!(t.url&&t.options)}var Os=["*"],Ns=new g("MAT_ICON_DEFAULT_OPTIONS"),Ls=new g("mat-icon-location",{providedIn:"root",factory:()=>{let t=c(b),r=t?t.location:null;return{getPathname:()=>r?r.pathname+r.search:""}}}),Do=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Ps=Do.map(t=>`[${t}]`).join(", "),ks=/^url\(['"]?#(.*?)['"]?\)$/,Ah=(()=>{class t{_elementRef=c(j);_iconRegistry=c(_o);_location=c(Ls);_errorHandler=c(ge);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let n=this._cleanupFontValue(e);n!==this._fontSet&&(this._fontSet=n,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let n=this._cleanupFontValue(e);n!==this._fontIcon&&(this._fontIcon=n,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=ht.EMPTY;constructor(){let e=c(new xr("aria-hidden"),{optional:!0}),n=c(Ns,{optional:!0});n&&(n.color&&(this.color=this._defaultColor=n.color),n.fontSet&&(this.fontSet=n.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let n=e.split(":");switch(n.length){case 1:return["",n[0]];case 2:return n;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let n=this._location.getPathname();n!==this._previousPath&&(this._previousPath=n,this._prependPathToReferences(n))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let n=this._location.getPathname();this._previousPath=n,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(n),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,n=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();n--;){let i=e.childNodes[n];(i.nodeType!==1||i.nodeName.toLowerCase()==="svg")&&i.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,n=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(i=>i.length>0);this._previousFontSetClass.forEach(i=>e.classList.remove(i)),n.forEach(i=>e.classList.add(i)),this._previousFontSetClass=n,this.fontIcon!==this._previousFontIconClass&&!n.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let n=this._elementsWithExternalReferences;n&&n.forEach((i,o)=>{i.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let n=e.querySelectorAll(Ps),i=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<n.length;o++)Do.forEach(a=>{let s=n[o],u=s.getAttribute(a),d=u?u.match(ks):null;if(d){let l=i.get(s);l||(l=[],i.set(s,l)),l.push({name:a,value:d[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[n,i]=this._splitIconName(e);n&&(this._svgNamespace=n),i&&(this._svgName=i),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(i,n).pipe(pt(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${n}:${i}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=K({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(n,i){n&2&&(Ze("data-mat-icon-type",i._usingFontIcon()?"font":"svg")("data-mat-icon-name",i._svgName||i.fontIcon)("data-mat-icon-namespace",i._svgNamespace||i.fontSet)("fontIcon",i._usingFontIcon()?i.fontIcon:null),Ct(i.color?"mat-"+i.color:""),le("mat-icon-inline",i.inline)("mat-icon-no-color",i.color!=="primary"&&i.color!=="accent"&&i.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",Z],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:Os,decls:1,vars:0,template:function(n,i){n&1&&(Pe(),de(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),Ch=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=P({type:t});static \u0275inj=L({imports:[Ge]})}return t})();export{ie as a,ke as b,Ur as c,Io as d,Zo as e,Xo as f,Jo as g,qo as h,ci as i,ui as j,Tn as k,ha as l,ae as m,Wt as n,ja as o,za as p,kd as q,B as r,jn as s,qt as t,zn as u,ef as v,hs as w,Ve as x,Pn as y,te as z,Bn as A,ne as B,Zt as C,Ga as D,se as E,Jt as F,Bl as G,$i as H,Wi as I,Zi as J,as as K,cs as L,us as M,qi as N,Hn as O,Vn as P,Wn as Q,ls as R,ms as S,Pm as T,lt as U,Vm as V,Gm as W,Km as X,Ym as Y,sf as Z,uf as _,df as $,ft as aa,Jn as ba,Af as ca,lo as da,Is as ea,Ge as fa,ho as ga,uo as ha,ws as ia,rh as ja,ih as ka,Ah as la,Ch as ma};
