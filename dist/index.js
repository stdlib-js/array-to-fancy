"use strict";var u=function(r,i){return function(){return i||r((i={exports:{}}).exports,i),i.exports}};var b=u(function(It,E){
var Ir=require('@stdlib/array-base-assert-is-complex-floating-point-data-type/dist'),Ar=require('@stdlib/assert-is-number/dist').isPrimitive;function Tr(r){return Ar(r)?[r,0]:r}function xr(r){return Ir(r)?Tr:null}E.exports=xr
});var I=u(function(At,S){
function Rr(r,i){return a;function a(t){return r(t,i)}}S.exports=Rr
});var T=u(function(Tt,A){
var Dr=require('@stdlib/proxy-ctor/dist'),kr=typeof Dr=="function";A.exports=kr
});var R=u(function(xt,x){
var _r=require('@stdlib/array-index/dist');function Pr(){return{cache:_r,strict:!1}}x.exports=Pr
});var _=u(function(Rt,k){
var Nr=require('@stdlib/assert-is-plain-object/dist'),D=require('@stdlib/assert-has-own-property/dist'),Vr=require('@stdlib/assert-is-boolean/dist').isPrimitive,Ur=require('@stdlib/assert-is-method-in/dist'),y=require('@stdlib/error-tools-fmtprodmsg/dist');function Cr(r,i){return Nr(i)?D(i,"strict")&&(r.strict=i.strict,!Vr(r.strict))?new TypeError(y('1rX2o',"strict",r.strict)):D(i,"cache")&&(r.cache=i.cache,!Ur(r.cache,"get"))?new TypeError(y("invalid option. `%s` option is missing a `%s` method. Option: `%s`.","cache","get",r.cache)):null:new TypeError(y('1rX2V',i));}k.exports=Cr
});var U=u(function(Dt,V){
var l=require('@stdlib/assert-is-number/dist').isPrimitive,Or=require('@stdlib/assert-is-integer/dist').isPrimitive,f=require('@stdlib/assert-is-complex-like/dist'),Gr=require('@stdlib/array-base-assert-is-real-floating-point-data-type/dist'),Fr=require('@stdlib/array-base-assert-is-unsigned-integer-data-type/dist'),Lr=require('@stdlib/array-base-assert-is-signed-integer-data-type/dist'),P=require('@stdlib/array-base-assert-is-safe-data-type-cast/dist'),N=require('@stdlib/array-min-dtype/dist'),jr=require('@stdlib/array-base-min-signed-integer-dtype/dist'),d=require('@stdlib/complex-dtype/dist'),c=require('@stdlib/error-tools-fmtprodmsg/dist');function Br(){return null}function Mr(r,i){return l(r)?null:f(r)?new TypeError(c('1rXEw',d(r),i)):new TypeError(c('1rXEw',typeof r,i));}function Wr(r,i){return l(r)||f(r)?null:new TypeError(c('1rXEw',typeof r,i));}function zr(r,i){var a;return l(r)?Or(r)?(a=jr(r),P(a,i)?null:new TypeError(c('1rXEw',a,i))):new TypeError(c('1rXEw',N(r),i)):f(r)?new TypeError(c('1rXEw',d(r),i)):new TypeError(c('1rXEw',typeof r,i));}function Qr(r,i){var a;return l(r)?(a=N(r),P(a,i)?null:new TypeError(c('1rXEw',a,i))):f(r)?new TypeError(c('1rXEw',d(r),i)):new TypeError(c('1rXEw',typeof r,i));}function Xr(r){return r==="generic"||r===""?Br:Gr(r)?Mr:Fr(r)?Qr:Lr(r)?zr:Wr}V.exports=Xr
});var O=u(function(kt,C){
function Yr(r,i){return a;function a(t,n){var s,e;switch(e=n,e.length){case 0:s=new t;break;case 1:s=new t(e[0]);break;case 2:s=new t(e[0],e[1]);break;case 3:s=new t(e[0],e[1],e[2]);break;case 4:s=new t(e[0],e[1],e[2],e[3]);break;case 5:s=new t(e[0],e[1],e[2],e[3],e[4]);break;case 6:s=new t(e[0],e[1],e[2],e[3],e[4],e[5]);break;case 7:s=new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6]);break;case 8:s=new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]);break;case 9:s=new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]);break;case 10:s=new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9]);break;default:s=t.apply(null,e)}return r(s,i)}}C.exports=Yr
});var F=u(function(_t,G){
var $r=/^-?[0-9]+$/;G.exports=$r
});var q=u(function(Pt,L){
var Hr=require('@stdlib/assert-is-string/dist').isPrimitive,Jr=F();function Kr(r){return Hr(r)&&Jr.test(r)}L.exports=Kr
});var B=u(function(Nt,j){
var Zr=/\s*ArrayIndex<[^>]+>\s*/;j.exports=Zr
});var W=u(function(Vt,M){
var re=require('@stdlib/assert-is-string/dist').isPrimitive,ee=B();function te(r){return re(r)&&ee.test(r)}M.exports=te
});var Q=u(function(Ut,z){
var ie=require('@stdlib/string-base-trim/dist'),ae=require('@stdlib/error-tools-fmtprodmsg/dist');function ne(r){return r.substring(11,r.length-1)}function se(r,i){var a=i.get(ne(ie(r)));if(a===null)throw new Error(ae("invalid operation. Unable to resolve array index. Value: `%s`.",r));return a}z.exports=se
});var Y=u(function(Ct,X){
var ue=require('@stdlib/array-take/dist'),oe=require('@stdlib/array-base-mskfilter/dist'),ce=require('@stdlib/array-base-mskreject/dist'),ve=require('@stdlib/error-tools-fmtprodmsg/dist'),le=Q();function fe(r,i,a){var t=le(i,a.cache);if(t.type==="int")return a.postGetArray(ue(r,t.data));if(t.type==="bool")return a.postGetArray(oe(r,t.data));if(t.type==="mask")return a.postGetArray(ce(r,t.data));throw new Error(ve("invalid operation. Unrecognized array index type. Value: `%s`.",t.type))}X.exports=fe
});var g=u(function(Ot,$){
var pe=require('@stdlib/ndarray-base-normalize-index/dist'),ye=require('@stdlib/error-tools-fmtprodmsg/dist');function de(r,i,a){var t,n;if(t=parseInt(r,10),n=pe(t,i-1),n===-1){if(a)throw new RangeError(ye("invalid operation. Index exceeds array bounds."));return t}return n}$.exports=de
});var J=u(function(Gt,H){
var qe=g();function ge(r,i,a){return a.getter(r,qe(i,r.length,a.strict))}H.exports=ge
});var Z=u(function(Ft,K){
var me=require('@stdlib/assert-is-function/dist');function he(r,i,a,t){var n=r[i];if(me(n))return n===r.constructor?t.ctor:s;return n;function s(){var e,o;for(e=[],o=0;o<arguments.length;o++)e.push(arguments[o]);return n.apply(this===a?r:this,e)}}K.exports=he
});var m=u(function(Lt,rr){
var we=require('@stdlib/string-base-replace/dist');function Ee(r){return we(r,/^invalid argument/,"invalid operation")}rr.exports=Ee
});var tr=u(function(jt,er){
var be=/:/;er.exports=be
});var h=u(function(Bt,ar){
var Se=require('@stdlib/string-base-trim/dist'),ir=require('@stdlib/slice-base-seq2slice/dist'),Ie=require('@stdlib/slice-base-str2slice/dist'),Ae=require('@stdlib/string-base-starts-with/dist'),p=require('@stdlib/error-tools-fmtprodmsg/dist'),Te=tr();function xe(r){return r[0]==="S"&&Ae(r,"Slice(",0)&&r[r.length-1]===")"}function Re(r){return Te.test(r)}function De(r,i){var a=Ie(i);if(a===null)throw new Error(p('1rXEn',r));return a}function ke(r,i,a,t){var n=ir(i,a,!0);if(n.code){if(n.code==="ERR_SLICE_INVALID_INCREMENT")throw new Error(p('1rXEq',r));if(n.code==="ERR_SLICE_INVALID_SUBSEQUENCE")throw new Error(p('1rXEn',r));if(n.code==="ERR_SLICE_OUT_OF_BOUNDS"){if(t)throw new RangeError(p('1rXFU'));n=ir(i,a,!1)}}return n}function _e(r,i,a){var t=Se(i);return xe(t)?De(i,t):Re(t)?ke(i,t,r.length,a):null}ar.exports=_e
});var sr=u(function(Mt,nr){
var Pe=require('@stdlib/array-base-fancy-slice/dist'),Ne=m(),Ve=h();function Ue(r,i,a){var t=Ve(r,i,a.strict);if(t!==null)try{return a.postGetArray(Pe(r,t,a.strict))}catch(n){throw new n.constructor(Ne(n.message))}}nr.exports=Ue
});var or=u(function(Wt,ur){
var Ce=require('@stdlib/assert-is-string/dist').isPrimitive,Oe=require('@stdlib/assert-has-property/dist'),Ge=q(),Fe=W(),Le=Y(),je=J(),Be=Z(),Me=sr();function We(r){return i;function i(a,t,n){return Ge(t)?je(a,t,r):Oe(a,t)||!Ce(t)?Be(a,t,n,r):Fe(t)?Le(a,t,r):Me(a,t,r)}}ur.exports=We
});var vr=u(function(zt,cr){
var ze=g();function Qe(r,i,a,t){var n,s;if(n=t.validator(a,t.dtype),n)throw n;return t.preSetElement?s=t.preSetElement(a):s=a,t.setter(r,ze(i,r.length,t.strict),s),!0}cr.exports=Qe
});var fr=u(function(Qt,lr){
function Xe(r,i,a){return r[i]=a,!0}lr.exports=Xe
});var yr=u(function(Xt,pr){
var Ye=require('@stdlib/assert-is-collection/dist'),$e=require('@stdlib/array-base-fancy-slice-assign/dist'),He=require('@stdlib/array-from-scalar/dist'),Je=h(),Ke=m();function Ze(r,i,a,t,n){var s,e,o;if(e=Je(r,i,n.strict),e===null)return!1;if(Ye(a))o=a;else{if(s=n.validator(a,n.dtype),s)throw s;o=He(a,n.dtype)}try{return $e(o,t,e,n.strict),!0}catch(v){throw new v.constructor(Ke(v.message))}}pr.exports=Ze
});var gr=u(function(Yt,qr){
var rt=require('@stdlib/assert-is-string/dist').isPrimitive,et=require('@stdlib/assert-has-property/dist'),tt=q(),it=vr(),dr=fr(),at=yr();function nt(r){return i;function i(a,t,n,s){var e;return tt(t)?it(a,t,n,r):et(t)||!rt(t)?dr(a,t,n,r):(e=at(a,t,n,s,r),e||dr(a,t,n,r))}}qr.exports=nt
});var w=u(function($t,wr){
var st=require('@stdlib/assert-is-array-like/dist'),mr=require('@stdlib/proxy-ctor/dist'),ut=require('@stdlib/array-base-arraylike2object/dist'),ot=require('@stdlib/object-assign/dist'),ct=require('@stdlib/error-tools-fmtprodmsg/dist'),vt=b(),lt=I(),ft=T(),pt=R(),hr=_(),yt=U(),dt=O(),qt=or(),gt=gr();function mt(){var r,i;if(r=pt(),arguments.length&&(i=hr(r,arguments[0]),i))throw i;return a;function a(t){var n,s,e,o,v;if(!st(t))throw new TypeError(ct('1rX38',t));if(ft){if(n=ot({},r),arguments.length>1&&(s=hr(n,arguments[1]),s))throw s;return e=ut(t),o=e.dtype||"",v={ref:t,dtype:o,getter:e.accessors[0],setter:e.accessors[1],preSetElement:vt(o),postGetArray:lt(a,n),cache:n.cache,strict:n.strict,validator:yt(o),array2fancy:a,ctor:new mr(t.constructor||Array,{construct:dt(a,n)})},new mr(t,{get:qt(v),set:gt(v)})}return console.warn("WARNING: Proxy objects are not supported in the current environment. Some `FancyArray` functionality may not be available."),t}}wr.exports=mt
});var br=u(function(Ht,Er){
var ht=w(),wt=ht();Er.exports=wt
});var Et=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),Sr=br(),bt=w();Et(Sr,"factory",bt);module.exports=Sr;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
