"use strict";var s=function(r,i){return function(){return i||r((i={exports:{}}).exports,i),i.exports}};var h=s(function(Qe,E){
var fr=require('@stdlib/array-base-assert-is-complex-floating-point-data-type/dist'),pr=require('@stdlib/assert-is-number/dist').isPrimitive;function yr(r){return pr(r)?[r,0]:r}function dr(r){return fr(r)?yr:null}E.exports=dr
});var b=s(function(ze,S){
function qr(r,i){return t;function t(n){return r(n,i)}}S.exports=qr
});var T=s(function($e,I){
var gr=require('@stdlib/proxy-ctor/dist'),wr=typeof gr=="function";I.exports=wr
});var A=s(function(He,D){
function mr(){return{strict:!1}}D.exports=mr
});var k=s(function(Je,x){
var Er=require('@stdlib/assert-is-plain-object/dist'),hr=require('@stdlib/assert-has-own-property/dist'),Sr=require('@stdlib/assert-is-boolean/dist').isPrimitive,R=require('@stdlib/error-tools-fmtprodmsg/dist');function br(r,i){return Er(i)?hr(i,"strict")&&(r.strict=i.strict,!Sr(r.strict))?new TypeError(R('null2o',"strict",r.strict)):null:new TypeError(R('null2V',i));}x.exports=br
});var C=s(function(Ke,N){
var l=require('@stdlib/assert-is-number/dist').isPrimitive,Ir=require('@stdlib/assert-is-integer/dist').isPrimitive,v=require('@stdlib/assert-is-complex-like/dist'),Tr=require('@stdlib/array-base-assert-is-real-floating-point-data-type/dist'),Dr=require('@stdlib/array-base-assert-is-unsigned-integer-data-type/dist'),Ar=require('@stdlib/array-base-assert-is-signed-integer-data-type/dist'),P=require('@stdlib/array-base-assert-is-safe-data-type-cast/dist'),_=require('@stdlib/array-min-dtype/dist'),Rr=require('@stdlib/array-base-min-signed-integer-dtype/dist'),p=require('@stdlib/complex-dtype/dist'),o=require('@stdlib/error-tools-fmtprodmsg/dist');function xr(){return null}function kr(r,i){return l(r)?null:v(r)?new TypeError(o('nullEw',p(r),i)):new TypeError(o('nullEw',typeof r,i));}function Pr(r,i){return l(r)||v(r)?null:new TypeError(o('nullEw',typeof r,i));}function _r(r,i){var t;return l(r)?Ir(r)?(t=Rr(r),P(t,i)?null:new TypeError(o('nullEw',t,i))):new TypeError(o('nullEw',_(r),i)):v(r)?new TypeError(o('nullEw',p(r),i)):new TypeError(o('nullEw',typeof r,i));}function Nr(r,i){var t;return l(r)?(t=_(r),P(t,i)?null:new TypeError(o('nullEw',t,i))):v(r)?new TypeError(o('nullEw',p(r),i)):new TypeError(o('nullEw',typeof r,i));}function Cr(r){return r==="generic"||r===""?xr:Tr(r)?kr:Dr(r)?Nr:Ar(r)?_r:Pr}N.exports=Cr
});var U=s(function(Xe,V){
function Vr(r){return i;function i(t,n){var a,e;switch(e=n,e.length){case 0:a=new t;break;case 1:a=new t(e[0]);break;case 2:a=new t(e[0],e[1]);break;case 3:a=new t(e[0],e[1],e[2]);break;case 4:a=new t(e[0],e[1],e[2],e[3]);break;case 5:a=new t(e[0],e[1],e[2],e[3],e[4]);break;case 6:a=new t(e[0],e[1],e[2],e[3],e[4],e[5]);break;case 7:a=new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6]);break;case 8:a=new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]);break;case 9:a=new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]);break;case 10:a=new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9]);break;default:a=t.apply(null,e)}return r.array2fancy(a)}}V.exports=Vr
});var L=s(function(Ye,F){
var Ur=/^-?[0-9]+$/;F.exports=Ur
});var y=s(function(Ze,O){
var Fr=require('@stdlib/assert-is-string/dist').isPrimitive,Lr=L();function Or(r){return Fr(r)&&Lr.test(r)}O.exports=Or
});var d=s(function(rt,G){
var Gr=require('@stdlib/ndarray-base-normalize-index/dist'),Br=require('@stdlib/error-tools-fmtprodmsg/dist');function jr(r,i,t){var n,a;if(n=parseInt(r,10),a=Gr(n,i-1),a===-1){if(t)throw new RangeError(Br("invalid operation. Slice exceeds array bounds."));return n}return a}G.exports=jr
});var j=s(function(et,B){
var Mr=d();function Wr(r,i,t){return t.getter(r,Mr(i,r.length,t.strict))}B.exports=Wr
});var W=s(function(tt,M){
var Qr=require('@stdlib/assert-is-function/dist');function zr(r,i,t,n){var a=r[i];if(Qr(a))return a===r.constructor?n.ctor:e;return a;function e(){var u,c;for(u=[],c=0;c<arguments.length;c++)u.push(arguments[c]);return a.apply(this===t?r:this,u)}}M.exports=zr
});var q=s(function(it,Q){
var $r=require('@stdlib/string-base-replace/dist');function Hr(r){return $r(r,/^invalid argument/,"invalid operation")}Q.exports=Hr
});var $=s(function(at,z){
var Jr=/:/;z.exports=Jr
});var g=s(function(nt,J){
var Kr=require('@stdlib/string-base-trim/dist'),H=require('@stdlib/slice-base-seq2slice/dist'),Xr=require('@stdlib/slice-base-str2slice/dist'),Yr=require('@stdlib/string-base-starts-with/dist'),f=require('@stdlib/error-tools-fmtprodmsg/dist'),Zr=$();function re(r){return r[0]==="S"&&Yr(r,"Slice(",0)&&r[r.length-1]===")"}function ee(r){return Zr.test(r)}function te(r,i){var t=Xr(i);if(t===null)throw new Error(f('nullEn',r));return t}function ie(r,i,t,n){var a=H(i,t,!0);if(a.code){if(a.code==="ERR_SLICE_INVALID_INCREMENT")throw new Error(f('nullEq',r));if(a.code==="ERR_SLICE_INVALID_SUBSEQUENCE")throw new Error(f('nullEn',r));if(a.code==="ERR_SLICE_OUT_OF_BOUNDS"){if(n)throw new RangeError(f("invalid operation. Slice exceeds array bounds."));a=H(i,t,!1)}}return a}function ae(r,i,t){var n=Kr(i);return re(n)?te(i,n):ee(n)?ie(i,n,r.length,t):null}J.exports=ae
});var X=s(function(st,K){
var ne=require('@stdlib/array-base-fancy-slice/dist'),se=q(),ue=g();function oe(r,i,t,n){var a=ue(r,i,n.strict);if(a!==null)try{return n.postGetSlice(ne(r,a,n.strict))}catch(e){throw new e.constructor(se(e.message))}}K.exports=oe
});var Z=s(function(ut,Y){
var ce=require('@stdlib/assert-is-string/dist').isPrimitive,le=require('@stdlib/assert-has-property/dist'),ve=y(),fe=j(),pe=W(),ye=X();function de(r){return i;function i(t,n,a){return ve(n)?fe(t,n,r):le(t,n)||!ce(n)?pe(t,n,a,r):ye(t,n,a,r)}}Y.exports=de
});var er=s(function(ot,rr){
var qe=d();function ge(r,i,t,n){var a,e;if(a=n.validator(t,n.dtype),a)throw a;return n.preSetElement?e=n.preSetElement(t):e=t,n.setter(r,qe(i,r.length,n.strict),e),!0}rr.exports=ge
});var ir=s(function(ct,tr){
function we(r,i,t){return r[i]=t,!0}tr.exports=we
});var nr=s(function(lt,ar){
var me=require('@stdlib/assert-is-collection/dist'),Ee=require('@stdlib/array-base-fancy-slice-assign/dist'),he=require('@stdlib/array-from-scalar/dist'),Se=g(),be=q();function Ie(r,i,t,n,a){var e,u,c;if(u=Se(r,i,a.strict),u===null)return!1;if(me(t))c=t;else{if(e=a.validator(t,a.dtype),e)throw e;c=he(t,a.dtype)}try{return Ee(c,n,u,a.strict),!0}catch(m){throw new m.constructor(be(m.message))}}ar.exports=Ie
});var or=s(function(vt,ur){
var Te=require('@stdlib/assert-is-string/dist').isPrimitive,De=require('@stdlib/assert-has-property/dist'),Ae=y(),Re=er(),sr=ir(),xe=nr();function ke(r){return i;function i(t,n,a,e){var u;return Ae(n)?Re(t,n,a,r):De(n)||!Te(n)?sr(t,n,a,r):(u=xe(t,n,a,e,r),u||sr(t,n,a,r))}}ur.exports=ke
});var vr=s(function(ft,lr){
var Pe=require('@stdlib/assert-is-array-like/dist'),cr=require('@stdlib/proxy-ctor/dist'),_e=require('@stdlib/array-base-arraylike2object/dist'),Ne=require('@stdlib/error-tools-fmtprodmsg/dist'),Ce=h(),Ve=b(),Ue=T(),Fe=A(),Le=k(),Oe=C(),Ge=U(),Be=Z(),je=or();function w(r){var i,t,n,a,e;if(!Pe(r))throw new TypeError(Ne('null38',r));if(Ue){if(i=Fe(),arguments.length>1&&(t=Le(i,arguments[1]),t))throw t;return n=_e(r),a=n.dtype||"",e={ref:r,dtype:a,getter:n.accessors[0],setter:n.accessors[1],preSetElement:Ce(a),postGetSlice:Ve(w,i),strict:i.strict,validator:Oe(a),array2fancy:w,ctor:null},e.ctor=new cr(r.constructor||Array,{construct:Ge(e)}),new cr(r,{get:Be(e),set:je(e)})}return console.warn("WARNING: Proxy objects are not supported in the current environment. Some `FancyArray` functionality may not be available."),r}lr.exports=w
});var Me=vr();module.exports=Me;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
