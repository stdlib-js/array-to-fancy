"use strict";var u=function(r,i){return function(){return i||r((i={exports:{}}).exports,i),i.exports}};var A=u(function(Mt,I){
var xr=require('@stdlib/array-base-assert-is-complex-floating-point-data-type/dist'),kr=require('@stdlib/assert-is-number/dist').isPrimitive;function _r(r){return kr(r)?[r,0]:r}function Pr(r){return xr(r)?_r:null}I.exports=Pr
});var D=u(function(jt,T){
function Nr(r,i){return a;function a(e){return r(e,i)}}T.exports=Nr
});var x=u(function(zt,R){
var Vr=require('@stdlib/proxy-ctor/dist'),Cr=typeof Vr=="function";R.exports=Cr
});var _=u(function(Wt,k){
var Ur=require('@stdlib/array-index/dist');function Or(){return{cache:Ur,strict:!1}}k.exports=Or
});var V=u(function(Qt,N){
var Gr=require('@stdlib/assert-is-plain-object/dist'),P=require('@stdlib/assert-has-own-property/dist'),Br=require('@stdlib/assert-is-boolean/dist').isPrimitive,Fr=require('@stdlib/assert-is-method-in/dist'),d=require('@stdlib/error-tools-fmtprodmsg/dist');function Lr(r,i){return Gr(i)?P(i,"strict")&&(r.strict=i.strict,!Br(r.strict))?new TypeError(d('1rX2o',"strict",r.strict)):P(i,"cache")&&(r.cache=i.cache,!Fr(r.cache,"get"))?new TypeError(d('1rXFb',"cache","get",r.cache)):null:new TypeError(d('1rX2V',i));}N.exports=Lr
});var G=u(function(Xt,O){
var l=require('@stdlib/assert-is-number/dist').isPrimitive,Mr=require('@stdlib/assert-is-integer/dist').isPrimitive,jr=require('@stdlib/assert-is-boolean/dist').isPrimitive,f=require('@stdlib/assert-is-complex-like/dist'),zr=require('@stdlib/array-base-assert-is-real-floating-point-data-type/dist'),Wr=require('@stdlib/array-base-assert-is-unsigned-integer-data-type/dist'),Qr=require('@stdlib/array-base-assert-is-signed-integer-data-type/dist'),Xr=require('@stdlib/array-base-assert-is-boolean-data-type/dist'),C=require('@stdlib/array-base-assert-is-safe-data-type-cast/dist'),U=require('@stdlib/array-min-dtype/dist'),Yr=require('@stdlib/array-base-min-signed-integer-dtype/dist'),q=require('@stdlib/complex-dtype/dist'),c=require('@stdlib/error-tools-fmtprodmsg/dist');function $r(){return null}function Hr(r,i){return jr(r)?null:new TypeError(c('1rXEw',typeof r,i));}function Jr(r,i){return l(r)?null:f(r)?new TypeError(c('1rXEw',q(r),i)):new TypeError(c('1rXEw',typeof r,i));}function Kr(r,i){return l(r)||f(r)?null:new TypeError(c('1rXEw',typeof r,i));}function Zr(r,i){var a;return l(r)?Mr(r)?(a=Yr(r),C(a,i)?null:new TypeError(c('1rXEw',a,i))):new TypeError(c('1rXEw',U(r),i)):f(r)?new TypeError(c('1rXEw',q(r),i)):new TypeError(c('1rXEw',typeof r,i));}function re(r,i){var a;return l(r)?(a=U(r),C(a,i)?null:new TypeError(c('1rXEw',a,i))):f(r)?new TypeError(c('1rXEw',q(r),i)):new TypeError(c('1rXEw',typeof r,i));}function ee(r){return r==="generic"||r===""?$r:zr(r)?Jr:Wr(r)?re:Qr(r)?Zr:Xr(r)?Hr:Kr}O.exports=ee
});var F=u(function(Yt,B){
function te(r,i){return a;function a(e,n){var s,t;switch(t=n,t.length){case 0:s=new e;break;case 1:s=new e(t[0]);break;case 2:s=new e(t[0],t[1]);break;case 3:s=new e(t[0],t[1],t[2]);break;case 4:s=new e(t[0],t[1],t[2],t[3]);break;case 5:s=new e(t[0],t[1],t[2],t[3],t[4]);break;case 6:s=new e(t[0],t[1],t[2],t[3],t[4],t[5]);break;case 7:s=new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6]);break;case 8:s=new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7]);break;case 9:s=new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]);break;case 10:s=new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9]);break;default:s=e.apply(null,t)}return r(s,i)}}B.exports=te
});var M=u(function($t,L){
var ae=/^-?[0-9]+$/;L.exports=ae
});var g=u(function(Ht,j){
var ie=require('@stdlib/assert-is-string/dist').isPrimitive,ne=M();function se(r){return ie(r)&&ne.test(r)}j.exports=se
});var W=u(function(Jt,z){
var ue=/\s*ArrayIndex<[^>]+>\s*/;z.exports=ue
});var m=u(function(Kt,Q){
var oe=require('@stdlib/assert-is-string/dist').isPrimitive,ce=W();function ve(r){return oe(r)&&ce.test(r)}Q.exports=ve
});var h=u(function(Zt,X){
var le=require('@stdlib/string-base-trim/dist'),fe=require('@stdlib/error-tools-fmtprodmsg/dist');function pe(r){return r.substring(11,r.length-1)}function ye(r,i){var a=i.get(pe(le(r)));if(a===null)throw new Error(fe('1rXFa',r));return a}X.exports=ye
});var $=u(function(ra,Y){
var de=require('@stdlib/array-take/dist'),qe=require('@stdlib/array-mskfilter/dist'),ge=require('@stdlib/array-mskreject/dist'),me=require('@stdlib/error-tools-fmtprodmsg/dist'),he=h();function we(r,i,a){var e=he(i,a.cache);if(e.type==="int")return a.postGetArray(de(r,e.data));if(e.type==="bool")return a.postGetArray(qe(r,e.data));if(e.type==="mask")return a.postGetArray(ge(r,e.data));throw new Error(me('1rXFZ',e.type))}Y.exports=we
});var w=u(function(ea,H){
var Ee=require('@stdlib/ndarray-base-normalize-index/dist'),be=require('@stdlib/error-tools-fmtprodmsg/dist');function Se(r,i,a){var e,n;if(e=parseInt(r,10),n=Ee(e,i-1),n===-1){if(a)throw new RangeError(be('1rXFY'));return e}return n}H.exports=Se
});var K=u(function(ta,J){
var Ie=w();function Ae(r,i,a){return a.getter(r,Ie(i,r.length,a.strict))}J.exports=Ae
});var rr=u(function(aa,Z){
var Te=require('@stdlib/assert-is-function/dist');function De(r,i,a,e){var n=r[i];if(Te(n))return n===r.constructor?e.ctor:s;return n;function s(){var t,o;for(t=[],o=0;o<arguments.length;o++)t.push(arguments[o]);return n.apply(this===a?r:this,t)}}Z.exports=De
});var p=u(function(ia,er){
var Re=require('@stdlib/string-base-replace/dist');function xe(r){return Re(r,/^invalid arguments?/,"invalid operation")}er.exports=xe
});var ar=u(function(na,tr){
var ke=/:/;tr.exports=ke
});var E=u(function(sa,nr){
var _e=require('@stdlib/string-base-trim/dist'),ir=require('@stdlib/slice-base-seq2slice/dist'),Pe=require('@stdlib/slice-base-str2slice/dist'),Ne=require('@stdlib/string-base-starts-with/dist'),y=require('@stdlib/error-tools-fmtprodmsg/dist'),Ve=ar();function Ce(r){return r[0]==="S"&&Ne(r,"Slice(",0)&&r[r.length-1]===")"}function Ue(r){return Ve.test(r)}function Oe(r,i){var a=Pe(i);if(a===null)throw new Error(y('1rXEn',r));return a}function Ge(r,i,a,e){var n=ir(i,a,!0);if(n.code){if(n.code==="ERR_SLICE_INVALID_INCREMENT")throw new Error(y('1rXEq',r));if(n.code==="ERR_SLICE_INVALID_SUBSEQUENCE")throw new Error(y('1rXEn',r));if(n.code==="ERR_SLICE_OUT_OF_BOUNDS"){if(e)throw new RangeError(y('1rXFU'));n=ir(i,a,!1)}}return n}function Be(r,i,a){var e=_e(i);return Ce(e)?Oe(i,e):Ue(e)?Ge(i,e,r.length,a):null}nr.exports=Be
});var ur=u(function(ua,sr){
var Fe=require('@stdlib/array-base-fancy-slice/dist'),Le=p(),Me=E();function je(r,i,a){var e=Me(r,i,a.strict);if(e!==null)try{return a.postGetArray(Fe(r,e,a.strict))}catch(n){throw new n.constructor(Le(n.message))}}sr.exports=je
});var cr=u(function(oa,or){
var ze=require('@stdlib/assert-is-string/dist').isPrimitive,We=require('@stdlib/assert-has-property/dist'),Qe=g(),Xe=m(),Ye=$(),$e=K(),He=rr(),Je=ur();function Ke(r){return i;function i(a,e,n){return Qe(e)?$e(a,e,r):We(a,e)||!ze(e)?He(a,e,n,r):Xe(e)?Ye(a,e,r):Je(a,e,r)}}or.exports=Ke
});var pr=u(function(ca,fr){
var Ze=require('@stdlib/array-base-assert-is-mostly-safe-data-type-cast/dist'),rt=require('@stdlib/assert-is-collection/dist'),et=require('@stdlib/array-from-scalar/dist'),tt=require('@stdlib/array-dtype/dist'),at=require('@stdlib/array-put/dist'),vr=require('@stdlib/array-base-where/dist').assign,lr=require('@stdlib/error-tools-fmtprodmsg/dist'),it=h(),nt=p();function st(r,i,a,e){var n,s,t,o;if(n=it(i,e.cache),rt(a))o=a,t=tt(a)||"generic";else{if(s=e.validator(a,e.dtype),s)throw s;e.preSetElement?o=e.preSetElement(a):o=a,o=et(o,e.dtype),t=e.dtype}if(n.type==="int"){try{at(r,n.data,o)}catch(v){throw new v.constructor(nt(v.message))}return!0}if(!Ze(t,e.dtype))throw new TypeError(lr('1rXEw',t,e.dtype));if(n.type==="bool")return vr(n.data,o,r,r,1,0),!0;if(n.type==="mask")return vr(n.data,r,o,r,1,0),!0;throw new Error(lr('1rXFZ',n.type))}fr.exports=st
});var dr=u(function(va,yr){
var ut=w();function ot(r,i,a,e){var n,s;if(n=e.validator(a,e.dtype),n)throw n;return e.preSetElement?s=e.preSetElement(a):s=a,e.setter(r,ut(i,r.length,e.strict),s),!0}yr.exports=ot
});var gr=u(function(la,qr){
function ct(r,i,a){return r[i]=a,!0}qr.exports=ct
});var hr=u(function(fa,mr){
var vt=require('@stdlib/assert-is-collection/dist'),lt=require('@stdlib/array-base-fancy-slice-assign/dist'),ft=require('@stdlib/array-from-scalar/dist'),pt=E(),yt=p();function dt(r,i,a,e,n){var s,t,o;if(t=pt(r,i,n.strict),t===null)return!1;if(vt(a))o=a;else{if(s=n.validator(a,n.dtype),s)throw s;o=ft(a,n.dtype)}try{lt(o,e,t,n.strict)}catch(v){throw new v.constructor(yt(v.message))}return!0}mr.exports=dt
});var br=u(function(pa,Er){
var qt=require('@stdlib/assert-is-string/dist').isPrimitive,gt=require('@stdlib/assert-has-property/dist'),mt=g(),ht=m(),wt=pr(),Et=dr(),wr=gr(),bt=hr();function St(r){return i;function i(a,e,n,s){var t;return mt(e)?Et(a,e,n,r):gt(e)||!qt(e)?wr(a,e,n,r):ht(e)?wt(a,e,n,r):(t=bt(a,e,n,s,r),t||wr(a,e,n,r))}}Er.exports=St
});var b=u(function(ya,Ar){
var It=require('@stdlib/assert-is-array-like/dist'),Sr=require('@stdlib/proxy-ctor/dist'),At=require('@stdlib/array-base-arraylike2object/dist'),Tt=require('@stdlib/object-assign/dist'),Dt=require('@stdlib/error-tools-fmtprodmsg/dist'),Rt=A(),xt=D(),kt=x(),_t=_(),Ir=V(),Pt=G(),Nt=F(),Vt=cr(),Ct=br();function Ut(){var r,i;if(r=_t(),arguments.length&&(i=Ir(r,arguments[0]),i))throw i;return a;function a(e){var n,s,t,o,v;if(!It(e))throw new TypeError(Dt('1rX38',e));if(kt){if(n=Tt({},r),arguments.length>1&&(s=Ir(n,arguments[1]),s))throw s;return t=At(e),o=t.dtype||"",v={ref:e,dtype:o,getter:t.accessors[0],setter:t.accessors[1],preSetElement:Rt(o),postGetArray:xt(a,n),cache:n.cache,strict:n.strict,validator:Pt(o),array2fancy:a,ctor:new Sr(e.constructor||Array,{construct:Nt(a,n)})},new Sr(e,{get:Vt(v),set:Ct(v)})}return console.warn("WARNING: Proxy objects are not supported in the current environment. Some `FancyArray` functionality may not be available."),e}}Ar.exports=Ut
});var Dr=u(function(da,Tr){
var Ot=b(),Gt=Ot();Tr.exports=Gt
});var Rr=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),Bt=require('@stdlib/array-index/dist'),S=Dr(),Ft=b();Rr(S,"factory",Ft);Rr(S,"idx",Bt);module.exports=S;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
