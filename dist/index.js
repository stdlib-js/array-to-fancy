"use strict";var u=function(r,t){return function(){return t||r((t={exports:{}}).exports,t),t.exports}};var h=u(function(Le,E){
var or=require('@stdlib/array-base-assert-is-complex-floating-point-data-type/dist'),cr=require('@stdlib/assert-is-number/dist').isPrimitive;function lr(r){return cr(r)?[r,0]:r}function vr(r){return or(r)?lr:null}E.exports=vr
});var S=u(function(Oe,b){
var fr=require('@stdlib/proxy-ctor/dist'),pr=typeof fr=="function";b.exports=pr
});var T=u(function(We,I){
function gr(){return{strict:!1}}I.exports=gr
});var x=u(function(Be,R){
var yr=require('@stdlib/assert-is-plain-object/dist'),dr=require('@stdlib/assert-has-own-property/dist'),qr=require('@stdlib/assert-is-boolean/dist').isPrimitive,D=require('@stdlib/error-tools-fmtprodmsg/dist');function mr(r,t){return yr(t)?dr(t,"strict")&&(r.strict=t.strict,!qr(r.strict))?new TypeError(D('null2o',"strict",r.strict)):null:new TypeError(D('null2V',t));}R.exports=mr
});var _=u(function(je,P){
var f=require('@stdlib/assert-is-number/dist').isPrimitive,wr=require('@stdlib/assert-is-integer/dist').isPrimitive,p=require('@stdlib/assert-is-complex-like/dist'),Er=require('@stdlib/array-base-assert-is-real-floating-point-data-type/dist'),hr=require('@stdlib/array-base-assert-is-unsigned-integer-data-type/dist'),br=require('@stdlib/array-base-assert-is-signed-integer-data-type/dist'),A=require('@stdlib/array-base-assert-is-safe-data-type-cast/dist'),k=require('@stdlib/array-min-dtype/dist'),Sr=require('@stdlib/array-base-min-signed-integer-dtype/dist'),y=require('@stdlib/complex-dtype/dist'),c=require('@stdlib/error-tools-fmtprodmsg/dist');function Ir(){return null}function Tr(r,t){return f(r)?null:p(r)?new TypeError(c('nullEw',y(r),t)):new TypeError(c('nullEw',typeof r,t));}function Dr(r,t){return f(r)||p(r)?null:new TypeError(c('nullEw',typeof r,t));}function Rr(r,t){var i;return f(r)?wr(r)?(i=Sr(r),A(i,t)?null:new TypeError(c('nullEw',i,t))):new TypeError(c('nullEw',k(r),t)):p(r)?new TypeError(c('nullEw',y(r),t)):new TypeError(c('nullEw',typeof r,t));}function xr(r,t){var i;return f(r)?(i=k(r),A(i,t)?null:new TypeError(c('nullEw',i,t))):p(r)?new TypeError(c('nullEw',y(r),t)):new TypeError(c('nullEw',typeof r,t));}function Ar(r){return r==="generic"||r===""?Ir:Er(r)?Tr:hr(r)?xr:br(r)?Rr:Dr}P.exports=Ar
});var C=u(function(Ge,N){
var kr=/^-?[0-9]+$/;N.exports=kr
});var d=u(function(Me,V){
var Pr=require('@stdlib/assert-is-string/dist').isPrimitive,_r=C();function Nr(r){return Pr(r)&&_r.test(r)}V.exports=Nr
});var q=u(function(Qe,U){
var Cr=require('@stdlib/ndarray-base-normalize-index/dist'),Vr=require('@stdlib/error-tools-fmtprodmsg/dist');function Ur(r,t,i){var n,a;if(n=parseInt(r,10),a=Cr(n,t-1),a===-1){if(i)throw new RangeError(Vr("invalid operation. Slice exceeds array bounds."));return n}return a}U.exports=Ur
});var L=u(function(ze,F){
var Fr=q();function Lr(r,t,i){return i.getter(r,Fr(t,r.length,i.strict))}F.exports=Lr
});var W=u(function($e,O){
var Or=require('@stdlib/assert-is-function/dist');function Wr(r,t,i,n){var a=r[t];if(Or(a))return a===r.constructor?l:o;return a;function o(){var s,e;for(s=[],e=0;e<arguments.length;e++)s.push(arguments[e]);return a.apply(this===i?r:this,s)}function l(){var s,e,v;for(e=[],v=0;v<arguments.length;v++)e.push(arguments[v]);switch(e.length){case 0:s=new a;break;case 1:s=new a(e[0]);break;case 2:s=new a(e[0],e[1]);break;case 3:s=new a(e[0],e[1],e[2]);break;case 4:s=new a(e[0],e[1],e[2],e[3]);break;case 5:s=new a(e[0],e[1],e[2],e[3],e[4]);break;case 6:s=new a(e[0],e[1],e[2],e[3],e[4],e[5]);break;case 7:s=new a(e[0],e[1],e[2],e[3],e[4],e[5],e[6]);break;case 8:s=new a(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]);break;case 9:s=new a(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]);break;case 10:s=new a(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9]);break;default:s=a.apply(null,e)}return n.array2fancy(s)}}O.exports=Wr
});var m=u(function(He,B){
var Br=require('@stdlib/string-base-replace/dist');function jr(r){return Br(r,/^invalid argument/,"invalid operation")}B.exports=jr
});var G=u(function(Je,j){
var Gr=/:/;j.exports=Gr
});var w=u(function(Ke,Q){
var Mr=require('@stdlib/string-base-trim/dist'),M=require('@stdlib/slice-base-seq2slice/dist'),Qr=require('@stdlib/slice-base-str2slice/dist'),zr=require('@stdlib/string-base-starts-with/dist'),g=require('@stdlib/error-tools-fmtprodmsg/dist'),$r=G();function Hr(r){return r[0]==="S"&&zr(r,"Slice(",0)&&r[r.length-1]===")"}function Jr(r){return $r.test(r)}function Kr(r,t){var i=Qr(t);if(i===null)throw new Error(g('nullEn',r));return i}function Xr(r,t,i,n){var a=M(t,i,!0);if(a.code){if(a.code==="ERR_SLICE_INVALID_INCREMENT")throw new Error(g('nullEq',r));if(a.code==="ERR_SLICE_INVALID_SUBSEQUENCE")throw new Error(g('nullEn',r));if(a.code==="ERR_SLICE_OUT_OF_BOUNDS"){if(n)throw new RangeError(g("invalid operation. Slice exceeds array bounds."));a=M(t,i,!1)}}return a}function Yr(r,t,i){var n=Mr(t);return Hr(n)?Kr(t,n):Jr(n)?Xr(t,n,r.length,i):null}Q.exports=Yr
});var $=u(function(Xe,z){
var Zr=require('@stdlib/array-base-fancy-slice/dist'),re=m(),ee=w();function te(r,t,i,n){var a=ee(r,t,n);if(a!==null)try{return Zr(i,a,n)}catch(o){throw new o.constructor(re(o.message))}}z.exports=te
});var J=u(function(Ye,H){
var ae=require('@stdlib/assert-is-string/dist').isPrimitive,ie=require('@stdlib/assert-has-property/dist'),ne=d(),se=L(),ue=W(),oe=$();function ce(r){return t;function t(i,n,a){return ne(n)?se(i,n,r):ie(i,n)||!ae(n)?ue(i,n,a,r):oe(i,n,a,r.strict)}}H.exports=ce
});var X=u(function(Ze,K){
var le=q();function ve(r,t,i,n){var a,o;if(a=n.validator(i,n.dtype),a)throw a;return n.valueWrapper?o=n.valueWrapper(i):o=i,n.setter(r,le(t,r.length,n.strict),o),!0}K.exports=ve
});var Z=u(function(rt,Y){
function fe(r,t,i){return r[t]=i,!0}Y.exports=fe
});var er=u(function(et,rr){
var pe=require('@stdlib/assert-is-collection/dist'),ge=require('@stdlib/array-base-fancy-slice-assign/dist'),ye=require('@stdlib/array-from-scalar/dist'),de=w(),qe=m();function me(r,t,i,n,a){var o,l,s;if(l=de(r,t,a.strict),l===null)return!1;if(pe(i))s=i;else{if(o=a.validator(i,a.dtype),o)throw o;s=ye(i,a.dtype)}try{return ge(s,n,l,a.strict),!0}catch(e){throw new e.constructor(qe(e.message))}}rr.exports=me
});var ir=u(function(tt,ar){
var we=require('@stdlib/assert-is-string/dist').isPrimitive,Ee=require('@stdlib/assert-has-property/dist'),he=d(),be=X(),tr=Z(),Se=er();function Ie(r){return t;function t(i,n,a,o){var l;return he(n)?be(i,n,a,r):Ee(n)||!we(n)?tr(i,n,a,r):(l=Se(i,n,a,o,r),l||tr(i,n,a,r))}}ar.exports=Ie
});var ur=u(function(at,sr){
var Te=require('@stdlib/assert-is-array-like/dist'),De=require('@stdlib/proxy-ctor/dist'),Re=require('@stdlib/array-base-arraylike2object/dist'),xe=require('@stdlib/error-tools-fmtprodmsg/dist'),Ae=h(),ke=S(),Pe=T(),_e=x(),Ne=_(),Ce=J(),Ve=ir();function nr(r){var t,i,n,a,o;if(!Te(r))throw new TypeError(xe('null38',r));if(ke){if(t=Pe(),arguments.length>1&&(i=_e(t,arguments[1]),i))throw i;return n=Re(r),a=n.dtype||"",o={ref:r,dtype:a,getter:n.accessors[0],setter:n.accessors[1],valueWrapper:Ae(a),strict:t.strict,validator:Ne(a),array2fancy:nr},new De(r,{get:Ce(o),set:Ve(o)})}return console.warn("WARNING: Proxy objects are not supported in the current environment. Some `FancyArray` functionality may not be available."),r}sr.exports=nr
});var Ue=ur();module.exports=Ue;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
