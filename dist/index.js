"use strict";var u=function(r,t){return function(){return t||r((t={exports:{}}).exports,t),t.exports}};var h=u(function(Qe,E){
var fr=require('@stdlib/array-base-assert-is-complex-floating-point-data-type/dist'),pr=require('@stdlib/assert-is-number/dist').isPrimitive;function yr(r){return pr(r)?[r,0]:r}function dr(r){return fr(r)?yr:null}E.exports=dr
});var b=u(function(ze,S){
function qr(r,t){return a;function a(i){return r(i,t)}}S.exports=qr
});var T=u(function($e,I){
var gr=require('@stdlib/proxy-ctor/dist'),wr=typeof gr=="function";I.exports=wr
});var A=u(function(He,D){
function mr(){return{strict:!1}}D.exports=mr
});var k=u(function(Je,x){
var Er=require('@stdlib/assert-is-plain-object/dist'),hr=require('@stdlib/assert-has-own-property/dist'),Sr=require('@stdlib/assert-is-boolean/dist').isPrimitive,R=require('@stdlib/error-tools-fmtprodmsg/dist');function br(r,t){return Er(t)?hr(t,"strict")&&(r.strict=t.strict,!Sr(r.strict))?new TypeError(R('null2o',"strict",r.strict)):null:new TypeError(R('null2V',t));}x.exports=br
});var C=u(function(Ke,N){
var l=require('@stdlib/assert-is-number/dist').isPrimitive,Ir=require('@stdlib/assert-is-integer/dist').isPrimitive,v=require('@stdlib/assert-is-complex-like/dist'),Tr=require('@stdlib/array-base-assert-is-real-floating-point-data-type/dist'),Dr=require('@stdlib/array-base-assert-is-unsigned-integer-data-type/dist'),Ar=require('@stdlib/array-base-assert-is-signed-integer-data-type/dist'),P=require('@stdlib/array-base-assert-is-safe-data-type-cast/dist'),_=require('@stdlib/array-min-dtype/dist'),Rr=require('@stdlib/array-base-min-signed-integer-dtype/dist'),y=require('@stdlib/complex-dtype/dist'),o=require('@stdlib/error-tools-fmtprodmsg/dist');function xr(){return null}function kr(r,t){return l(r)?null:v(r)?new TypeError(o('nullEw',y(r),t)):new TypeError(o('nullEw',typeof r,t));}function Pr(r,t){return l(r)||v(r)?null:new TypeError(o('nullEw',typeof r,t));}function _r(r,t){var a;return l(r)?Ir(r)?(a=Rr(r),P(a,t)?null:new TypeError(o('nullEw',a,t))):new TypeError(o('nullEw',_(r),t)):v(r)?new TypeError(o('nullEw',y(r),t)):new TypeError(o('nullEw',typeof r,t));}function Nr(r,t){var a;return l(r)?(a=_(r),P(a,t)?null:new TypeError(o('nullEw',a,t))):v(r)?new TypeError(o('nullEw',y(r),t)):new TypeError(o('nullEw',typeof r,t));}function Cr(r){return r==="generic"||r===""?xr:Tr(r)?kr:Dr(r)?Nr:Ar(r)?_r:Pr}N.exports=Cr
});var U=u(function(Xe,V){
function Vr(r,t){return a;function a(i,n){var s,e;switch(e=n,e.length){case 0:s=new i;break;case 1:s=new i(e[0]);break;case 2:s=new i(e[0],e[1]);break;case 3:s=new i(e[0],e[1],e[2]);break;case 4:s=new i(e[0],e[1],e[2],e[3]);break;case 5:s=new i(e[0],e[1],e[2],e[3],e[4]);break;case 6:s=new i(e[0],e[1],e[2],e[3],e[4],e[5]);break;case 7:s=new i(e[0],e[1],e[2],e[3],e[4],e[5],e[6]);break;case 8:s=new i(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]);break;case 9:s=new i(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]);break;case 10:s=new i(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9]);break;default:s=i.apply(null,e)}return r(s,t)}}V.exports=Vr
});var L=u(function(Ye,F){
var Ur=/^-?[0-9]+$/;F.exports=Ur
});var d=u(function(Ze,O){
var Fr=require('@stdlib/assert-is-string/dist').isPrimitive,Lr=L();function Or(r){return Fr(r)&&Lr.test(r)}O.exports=Or
});var q=u(function(rt,G){
var Gr=require('@stdlib/ndarray-base-normalize-index/dist'),Br=require('@stdlib/error-tools-fmtprodmsg/dist');function jr(r,t,a){var i,n;if(i=parseInt(r,10),n=Gr(i,t-1),n===-1){if(a)throw new RangeError(Br("invalid operation. Slice exceeds array bounds."));return i}return n}G.exports=jr
});var j=u(function(et,B){
var Mr=q();function Wr(r,t,a){return a.getter(r,Mr(t,r.length,a.strict))}B.exports=Wr
});var W=u(function(tt,M){
var Qr=require('@stdlib/assert-is-function/dist');function zr(r,t,a,i){var n=r[t];if(Qr(n))return n===r.constructor?i.ctor:s;return n;function s(){var e,c;for(e=[],c=0;c<arguments.length;c++)e.push(arguments[c]);return n.apply(this===a?r:this,e)}}M.exports=zr
});var g=u(function(it,Q){
var $r=require('@stdlib/string-base-replace/dist');function Hr(r){return $r(r,/^invalid argument/,"invalid operation")}Q.exports=Hr
});var $=u(function(at,z){
var Jr=/:/;z.exports=Jr
});var w=u(function(nt,J){
var Kr=require('@stdlib/string-base-trim/dist'),H=require('@stdlib/slice-base-seq2slice/dist'),Xr=require('@stdlib/slice-base-str2slice/dist'),Yr=require('@stdlib/string-base-starts-with/dist'),f=require('@stdlib/error-tools-fmtprodmsg/dist'),Zr=$();function re(r){return r[0]==="S"&&Yr(r,"Slice(",0)&&r[r.length-1]===")"}function ee(r){return Zr.test(r)}function te(r,t){var a=Xr(t);if(a===null)throw new Error(f('nullEn',r));return a}function ie(r,t,a,i){var n=H(t,a,!0);if(n.code){if(n.code==="ERR_SLICE_INVALID_INCREMENT")throw new Error(f('nullEq',r));if(n.code==="ERR_SLICE_INVALID_SUBSEQUENCE")throw new Error(f('nullEn',r));if(n.code==="ERR_SLICE_OUT_OF_BOUNDS"){if(i)throw new RangeError(f("invalid operation. Slice exceeds array bounds."));n=H(t,a,!1)}}return n}function ae(r,t,a){var i=Kr(t);return re(i)?te(t,i):ee(i)?ie(t,i,r.length,a):null}J.exports=ae
});var X=u(function(st,K){
var ne=require('@stdlib/array-base-fancy-slice/dist'),se=g(),ue=w();function oe(r,t,a,i){var n=ue(r,t,i.strict);if(n!==null)try{return i.postGetSlice(ne(r,n,i.strict))}catch(s){throw new s.constructor(se(s.message))}}K.exports=oe
});var Z=u(function(ut,Y){
var ce=require('@stdlib/assert-is-string/dist').isPrimitive,le=require('@stdlib/assert-has-property/dist'),ve=d(),fe=j(),pe=W(),ye=X();function de(r){return t;function t(a,i,n){return ve(i)?fe(a,i,r):le(a,i)||!ce(i)?pe(a,i,n,r):ye(a,i,n,r)}}Y.exports=de
});var er=u(function(ot,rr){
var qe=q();function ge(r,t,a,i){var n,s;if(n=i.validator(a,i.dtype),n)throw n;return i.preSetElement?s=i.preSetElement(a):s=a,i.setter(r,qe(t,r.length,i.strict),s),!0}rr.exports=ge
});var ir=u(function(ct,tr){
function we(r,t,a){return r[t]=a,!0}tr.exports=we
});var nr=u(function(lt,ar){
var me=require('@stdlib/assert-is-collection/dist'),Ee=require('@stdlib/array-base-fancy-slice-assign/dist'),he=require('@stdlib/array-from-scalar/dist'),Se=w(),be=g();function Ie(r,t,a,i,n){var s,e,c;if(e=Se(r,t,n.strict),e===null)return!1;if(me(a))c=a;else{if(s=n.validator(a,n.dtype),s)throw s;c=he(a,n.dtype)}try{return Ee(c,i,e,n.strict),!0}catch(m){throw new m.constructor(be(m.message))}}ar.exports=Ie
});var or=u(function(vt,ur){
var Te=require('@stdlib/assert-is-string/dist').isPrimitive,De=require('@stdlib/assert-has-property/dist'),Ae=d(),Re=er(),sr=ir(),xe=nr();function ke(r){return t;function t(a,i,n,s){var e;return Ae(i)?Re(a,i,n,r):De(i)||!Te(i)?sr(a,i,n,r):(e=xe(a,i,n,s,r),e||sr(a,i,n,r))}}ur.exports=ke
});var vr=u(function(ft,lr){
var Pe=require('@stdlib/assert-is-array-like/dist'),cr=require('@stdlib/proxy-ctor/dist'),_e=require('@stdlib/array-base-arraylike2object/dist'),Ne=require('@stdlib/error-tools-fmtprodmsg/dist'),Ce=h(),Ve=b(),Ue=T(),Fe=A(),Le=k(),Oe=C(),Ge=U(),Be=Z(),je=or();function p(r){var t,a,i,n,s;if(!Pe(r))throw new TypeError(Ne('null38',r));if(Ue){if(t=Fe(),arguments.length>1&&(a=Le(t,arguments[1]),a))throw a;return i=_e(r),n=i.dtype||"",s={ref:r,dtype:n,getter:i.accessors[0],setter:i.accessors[1],preSetElement:Ce(n),postGetSlice:Ve(p,t),strict:t.strict,validator:Oe(n),array2fancy:p,ctor:new cr(r.constructor||Array,{construct:Ge(p,t)})},new cr(r,{get:Be(s),set:je(s)})}return console.warn("WARNING: Proxy objects are not supported in the current environment. Some `FancyArray` functionality may not be available."),r}lr.exports=p
});var Me=vr();module.exports=Me;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
