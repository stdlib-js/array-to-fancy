"use strict";var u=function(r,i){return function(){return i||r((i={exports:{}}).exports,i),i.exports}};var x=u(function(Xt,T){
var kr=require('@stdlib/array-base-assert-is-complex-floating-point-data-type/dist'),_r=require('@stdlib/assert-is-number/dist').isPrimitive;function Pr(r){return _r(r)?[r,0]:r}function Nr(r){return kr(r)?Pr:null}T.exports=Nr
});var R=u(function(Yt,D){
function Cr(r,i){return a;function a(t){return r(t,i)}}D.exports=Cr
});var _=u(function($t,k){
var Vr=require('@stdlib/proxy-ctor/dist'),Ur=typeof Vr=="function";k.exports=Ur
});var N=u(function(Ht,P){
var Or=require('@stdlib/array-index/dist');function Gr(){return{cache:Or,strict:!1}}P.exports=Gr
});var U=u(function(Jt,V){
var Br=require('@stdlib/assert-is-plain-object/dist'),C=require('@stdlib/assert-has-own-property/dist'),Fr=require('@stdlib/assert-is-boolean/dist').isPrimitive,Lr=require('@stdlib/assert-is-method-in/dist'),q=require('@stdlib/error-tools-fmtprodmsg/dist');function Mr(r,i){return Br(i)?C(i,"strict")&&(r.strict=i.strict,!Fr(r.strict))?new TypeError(q('1rX2o',"strict",r.strict)):C(i,"cache")&&(r.cache=i.cache,!Lr(r.cache,"get"))?new TypeError(q('1rXFb',"cache","get",r.cache)):null:new TypeError(q('1rX2V',i));}V.exports=Mr
});var F=u(function(Kt,B){
var f=require('@stdlib/assert-is-number/dist').isPrimitive,jr=require('@stdlib/assert-is-integer/dist').isPrimitive,zr=require('@stdlib/assert-is-boolean/dist').isPrimitive,p=require('@stdlib/assert-is-complex-like/dist'),Wr=require('@stdlib/array-base-assert-is-real-floating-point-data-type/dist'),Qr=require('@stdlib/array-base-assert-is-unsigned-integer-data-type/dist'),Xr=require('@stdlib/array-base-assert-is-signed-integer-data-type/dist'),Yr=require('@stdlib/array-base-assert-is-boolean-data-type/dist'),O=require('@stdlib/array-base-assert-is-safe-data-type-cast/dist'),G=require('@stdlib/array-min-dtype/dist'),$r=require('@stdlib/array-base-min-signed-integer-dtype/dist'),g=require('@stdlib/complex-dtype/dist'),v=require('@stdlib/error-tools-fmtprodmsg/dist');function Hr(){return null}function Jr(r,i){return zr(r)?null:new TypeError(v('1rXEw',typeof r,i));}function Kr(r,i){return f(r)?null:p(r)?new TypeError(v('1rXEw',g(r),i)):new TypeError(v('1rXEw',typeof r,i));}function Zr(r,i){return f(r)||p(r)?null:new TypeError(v('1rXEw',typeof r,i));}function re(r,i){var a;return f(r)?jr(r)?(a=$r(r),O(a,i)?null:new TypeError(v('1rXEw',a,i))):new TypeError(v('1rXEw',G(r),i)):p(r)?new TypeError(v('1rXEw',g(r),i)):new TypeError(v('1rXEw',typeof r,i));}function ee(r,i){var a;return f(r)?(a=G(r),O(a,i)?null:new TypeError(v('1rXEw',a,i))):p(r)?new TypeError(v('1rXEw',g(r),i)):new TypeError(v('1rXEw',typeof r,i));}function te(r){return r==="generic"||r===""?Hr:Wr(r)?Kr:Qr(r)?ee:Xr(r)?re:Yr(r)?Jr:Zr}B.exports=te
});var M=u(function(Zt,L){
function ae(r,i){return a;function a(t,n){var s,e;switch(e=n,e.length){case 0:s=new t;break;case 1:s=new t(e[0]);break;case 2:s=new t(e[0],e[1]);break;case 3:s=new t(e[0],e[1],e[2]);break;case 4:s=new t(e[0],e[1],e[2],e[3]);break;case 5:s=new t(e[0],e[1],e[2],e[3],e[4]);break;case 6:s=new t(e[0],e[1],e[2],e[3],e[4],e[5]);break;case 7:s=new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6]);break;case 8:s=new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]);break;case 9:s=new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]);break;case 10:s=new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9]);break;default:s=t.apply(null,e)}return r(s,i)}}L.exports=ae
});var z=u(function(ra,j){
var ie=/^-?[0-9]+$/;j.exports=ie
});var m=u(function(ea,W){
var ne=require('@stdlib/assert-is-string/dist').isPrimitive,se=z();function ue(r){return ne(r)&&se.test(r)}W.exports=ue
});var X=u(function(ta,Q){
var oe=/\s*ArrayIndex<[^>]+>\s*/;Q.exports=oe
});var h=u(function(aa,Y){
var ce=require('@stdlib/assert-is-string/dist').isPrimitive,ve=X();function le(r){return ce(r)&&ve.test(r)}Y.exports=le
});var w=u(function(ia,$){
var fe=require('@stdlib/string-base-trim/dist'),pe=require('@stdlib/error-tools-fmtprodmsg/dist');function ye(r){return r.substring(11,r.length-1)}function de(r,i){var a=i.get(ye(fe(r)));if(a===null)throw new Error(pe('1rXFa',r));return a}$.exports=de
});var J=u(function(na,H){
var qe=require('@stdlib/array-take/dist'),ge=require('@stdlib/array-mskfilter/dist'),me=require('@stdlib/array-mskreject/dist'),he=require('@stdlib/error-tools-fmtprodmsg/dist'),we=w();function Ee(r,i,a){var t=we(i,a.cache);if(t.type==="int")return a.postGetArray(qe(r,t.data));if(t.type==="bool")return a.postGetArray(ge(r,t.data));if(t.type==="mask")return a.postGetArray(me(r,t.data));throw new Error(he('1rXFZ',t.type))}H.exports=Ee
});var E=u(function(sa,K){
var be=require('@stdlib/ndarray-base-normalize-index/dist'),Se=require('@stdlib/error-tools-fmtprodmsg/dist');function Ie(r,i,a){var t,n;if(t=parseInt(r,10),n=be(t,i-1),n===-1){if(a)throw new RangeError(Se('1rXFY'));return t}return n}K.exports=Ie
});var rr=u(function(ua,Z){
var Ae=E();function Te(r,i,a){return a.getter(r,Ae(i,r.length,a.strict))}Z.exports=Te
});var tr=u(function(oa,er){
var xe=require('@stdlib/assert-is-function/dist');function De(r,i,a,t){var n=r[i];if(xe(n))return n===r.constructor?t.ctor:s;return n;function s(){var e,o;for(e=[],o=0;o<arguments.length;o++)e.push(arguments[o]);return n.apply(this===a?r:this,e)}}er.exports=De
});var y=u(function(ca,ar){
var Re=require('@stdlib/string-base-replace/dist');function ke(r){return Re(r,/^invalid arguments?/,"invalid operation")}ar.exports=ke
});var nr=u(function(va,ir){
var _e=/:/;ir.exports=_e
});var b=u(function(la,ur){
var Pe=require('@stdlib/string-base-trim/dist'),sr=require('@stdlib/slice-base-seq2slice/dist'),Ne=require('@stdlib/slice-base-str2slice/dist'),Ce=require('@stdlib/string-base-starts-with/dist'),d=require('@stdlib/error-tools-fmtprodmsg/dist'),Ve=nr();function Ue(r){return r[0]==="S"&&Ce(r,"Slice(",0)&&r[r.length-1]===")"}function Oe(r){return Ve.test(r)}function Ge(r,i){var a=Ne(i);if(a===null)throw new Error(d('1rXEn',r));return a}function Be(r,i,a,t){var n=sr(i,a,!0);if(n.code){if(n.code==="ERR_SLICE_INVALID_INCREMENT")throw new Error(d('1rXEq',r));if(n.code==="ERR_SLICE_INVALID_SUBSEQUENCE")throw new Error(d('1rXEn',r));if(n.code==="ERR_SLICE_OUT_OF_BOUNDS"){if(t)throw new RangeError(d('1rXFU'));n=sr(i,a,!1)}}return n}function Fe(r,i,a){var t=Pe(i);return Ue(t)?Ge(i,t):Oe(t)?Be(i,t,r.length,a):null}ur.exports=Fe
});var cr=u(function(fa,or){
var Le=require('@stdlib/array-base-fancy-slice/dist'),Me=y(),je=b();function ze(r,i,a){var t=je(r,i,a.strict);if(t!==null)try{return a.postGetArray(Le(r,t,a.strict))}catch(n){throw new n.constructor(Me(n.message))}}or.exports=ze
});var lr=u(function(pa,vr){
var We=require('@stdlib/assert-is-string/dist').isPrimitive,Qe=require('@stdlib/assert-has-property/dist'),Xe=m(),Ye=h(),$e=J(),He=rr(),Je=tr(),Ke=cr();function Ze(r){return i;function i(a,t,n){return Xe(t)?He(a,t,r):Qe(a,t)||!We(t)?Je(a,t,n,r):Ye(t)?$e(a,t,r):Ke(a,t,r)}}vr.exports=Ze
});var yr=u(function(ya,pr){
var rt=require('@stdlib/array-base-assert-is-mostly-safe-data-type-cast/dist'),et=require('@stdlib/array-base-assert-is-real-data-type/dist'),tt=require('@stdlib/array-base-assert-is-complex-floating-point-data-type/dist'),at=require('@stdlib/assert-is-collection/dist'),it=require('@stdlib/array-from-scalar/dist'),nt=require('@stdlib/array-dtype/dist'),st=require('@stdlib/array-put/dist'),ut=require('@stdlib/array-place/dist'),ot=require('@stdlib/array-convert/dist'),ct=require('@stdlib/array-base-where/dist').assign,fr=require('@stdlib/error-tools-fmtprodmsg/dist'),vt=w(),S=y();function lt(r,i,a,t){var n,s,e,o,c;if(e=vt(i,t.cache),n=t.dtype||"generic",at(a))c=a;else{if(o=t.validator(a,n),o)throw o;t.preSetElement?c=t.preSetElement(a):c=a,c=it(c,n),s=n}if(e.type==="int"){try{st(r,e.data,c)}catch(l){throw new l.constructor(S(l.message))}return!0}if(e.type==="bool"){try{ut(r,e.data,c,{mode:"strict_broadcast"})}catch(l){throw new l.constructor(S(l.message))}return!0}if(s===void 0&&(s=nt(a)||"generic"),!rt(s,n))throw new TypeError(fr('1rXEw',s,n));if(tt(n)&&et(s)&&(c=ot(c,n)),e.type==="mask"){try{ct(e.data,r,c,r,1,0)}catch(l){throw new l.constructor(S(l.message))}return!0}throw new Error(fr('1rXFZ',e.type))}pr.exports=lt
});var qr=u(function(da,dr){
var ft=E();function pt(r,i,a,t){var n,s;if(n=t.validator(a,t.dtype),n)throw n;return t.preSetElement?s=t.preSetElement(a):s=a,t.setter(r,ft(i,r.length,t.strict),s),!0}dr.exports=pt
});var mr=u(function(qa,gr){
function yt(r,i,a){return r[i]=a,!0}gr.exports=yt
});var wr=u(function(ga,hr){
var dt=require('@stdlib/assert-is-collection/dist'),qt=require('@stdlib/array-base-fancy-slice-assign/dist'),gt=require('@stdlib/array-from-scalar/dist'),mt=b(),ht=y();function wt(r,i,a,t,n){var s,e,o;if(e=mt(r,i,n.strict),e===null)return!1;if(dt(a))o=a;else{if(s=n.validator(a,n.dtype),s)throw s;o=gt(a,n.dtype||"generic")}try{qt(o,t,e,n.strict)}catch(c){throw new c.constructor(ht(c.message))}return!0}hr.exports=wt
});var Sr=u(function(ma,br){
var Et=require('@stdlib/assert-is-string/dist').isPrimitive,bt=require('@stdlib/assert-has-property/dist'),St=m(),It=h(),At=yr(),Tt=qr(),Er=mr(),xt=wr();function Dt(r){return i;function i(a,t,n,s){var e;return St(t)?Tt(a,t,n,r):bt(t)||!Et(t)?Er(a,t,n,r):It(t)?At(a,t,n,r):(e=xt(a,t,n,s,r),e||Er(a,t,n,r))}}br.exports=Dt
});var I=u(function(ha,Tr){
var Rt=require('@stdlib/assert-is-array-like/dist'),Ir=require('@stdlib/proxy-ctor/dist'),kt=require('@stdlib/array-base-arraylike2object/dist'),_t=require('@stdlib/object-assign/dist'),Pt=require('@stdlib/error-tools-fmtprodmsg/dist'),Nt=x(),Ct=R(),Vt=_(),Ut=N(),Ar=U(),Ot=F(),Gt=M(),Bt=lr(),Ft=Sr();function Lt(){var r,i;if(r=Ut(),arguments.length&&(i=Ar(r,arguments[0]),i))throw i;return a;function a(t){var n,s,e,o,c;if(!Rt(t))throw new TypeError(Pt('1rX38',t));if(Vt){if(n=_t({},r),arguments.length>1&&(s=Ar(n,arguments[1]),s))throw s;return e=kt(t),o=e.dtype||"",c={ref:t,dtype:o,getter:e.accessors[0],setter:e.accessors[1],preSetElement:Nt(o),postGetArray:Ct(a,n),cache:n.cache,strict:n.strict,validator:Ot(o),array2fancy:a,ctor:new Ir(t.constructor||Array,{construct:Gt(a,n)})},new Ir(t,{get:Bt(c),set:Ft(c)})}return console.warn("WARNING: Proxy objects are not supported in the current environment. Some `FancyArray` functionality may not be available."),t}}Tr.exports=Lt
});var Dr=u(function(wa,xr){
var Mt=I(),jt=Mt();xr.exports=jt
});var Rr=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),zt=require('@stdlib/array-index/dist'),A=Dr(),Wt=I();Rr(A,"factory",Wt);Rr(A,"idx",zt);module.exports=A;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
