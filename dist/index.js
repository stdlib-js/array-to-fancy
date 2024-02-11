"use strict";var u=function(r,i){return function(){return i||r((i={exports:{}}).exports,i),i.exports}};var S=u(function(rt,E){
var qr=require('@stdlib/array-base-assert-is-complex-floating-point-data-type/dist'),gr=require('@stdlib/assert-is-number/dist').isPrimitive;function hr(r){return gr(r)?[r,0]:r}function mr(r){return qr(r)?hr:null}E.exports=mr
});var I=u(function(et,b){
function wr(r,i){return a;function a(t){return r(t,i)}}b.exports=wr
});var D=u(function(tt,T){
var Er=require('@stdlib/proxy-ctor/dist'),Sr=typeof Er=="function";T.exports=Sr
});var R=u(function(it,A){
var br=require('@stdlib/array-index/dist');function Ir(){return{cache:br,strict:!1}}A.exports=Ir
});var P=u(function(at,k){
var Tr=require('@stdlib/assert-is-plain-object/dist'),x=require('@stdlib/assert-has-own-property/dist'),Dr=require('@stdlib/assert-is-boolean/dist').isPrimitive,Ar=require('@stdlib/assert-is-method-in/dist'),y=require('@stdlib/error-tools-fmtprodmsg/dist');function Rr(r,i){return Tr(i)?x(i,"strict")&&(r.strict=i.strict,!Dr(r.strict))?new TypeError(y('1rX2o',"strict",r.strict)):x(i,"cache")&&(r.cache=i.cache,!Ar(r.cache,"get"))?new TypeError(y("invalid option. `%s` option is missing a `%s` method. Option: `%s`.","cache","get",r.cache)):null:new TypeError(y('1rX2V',i));}k.exports=Rr
});var O=u(function(nt,C){
var l=require('@stdlib/assert-is-number/dist').isPrimitive,xr=require('@stdlib/assert-is-integer/dist').isPrimitive,f=require('@stdlib/assert-is-complex-like/dist'),kr=require('@stdlib/array-base-assert-is-real-floating-point-data-type/dist'),Pr=require('@stdlib/array-base-assert-is-unsigned-integer-data-type/dist'),_r=require('@stdlib/array-base-assert-is-signed-integer-data-type/dist'),_=require('@stdlib/array-base-assert-is-safe-data-type-cast/dist'),N=require('@stdlib/array-min-dtype/dist'),Nr=require('@stdlib/array-base-min-signed-integer-dtype/dist'),d=require('@stdlib/complex-dtype/dist'),c=require('@stdlib/error-tools-fmtprodmsg/dist');function Cr(){return null}function Or(r,i){return l(r)?null:f(r)?new TypeError(c('1rXEw',d(r),i)):new TypeError(c('1rXEw',typeof r,i));}function Vr(r,i){return l(r)||f(r)?null:new TypeError(c('1rXEw',typeof r,i));}function Ur(r,i){var a;return l(r)?xr(r)?(a=Nr(r),_(a,i)?null:new TypeError(c('1rXEw',a,i))):new TypeError(c('1rXEw',N(r),i)):f(r)?new TypeError(c('1rXEw',d(r),i)):new TypeError(c('1rXEw',typeof r,i));}function Fr(r,i){var a;return l(r)?(a=N(r),_(a,i)?null:new TypeError(c('1rXEw',a,i))):f(r)?new TypeError(c('1rXEw',d(r),i)):new TypeError(c('1rXEw',typeof r,i));}function Lr(r){return r==="generic"||r===""?Cr:kr(r)?Or:Pr(r)?Fr:_r(r)?Ur:Vr}C.exports=Lr
});var U=u(function(st,V){
function Gr(r,i){return a;function a(t,n){var s,e;switch(e=n,e.length){case 0:s=new t;break;case 1:s=new t(e[0]);break;case 2:s=new t(e[0],e[1]);break;case 3:s=new t(e[0],e[1],e[2]);break;case 4:s=new t(e[0],e[1],e[2],e[3]);break;case 5:s=new t(e[0],e[1],e[2],e[3],e[4]);break;case 6:s=new t(e[0],e[1],e[2],e[3],e[4],e[5]);break;case 7:s=new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6]);break;case 8:s=new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]);break;case 9:s=new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]);break;case 10:s=new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9]);break;default:s=t.apply(null,e)}return r(s,i)}}V.exports=Gr
});var L=u(function(ut,F){
var Br=/^-?[0-9]+$/;F.exports=Br
});var q=u(function(ot,G){
var Mr=require('@stdlib/assert-is-string/dist').isPrimitive,jr=L();function Wr(r){return Mr(r)&&jr.test(r)}G.exports=Wr
});var g=u(function(ct,B){
var Qr=require('@stdlib/ndarray-base-normalize-index/dist'),zr=require('@stdlib/error-tools-fmtprodmsg/dist');function $r(r,i,a){var t,n;if(t=parseInt(r,10),n=Qr(t,i-1),n===-1){if(a)throw new RangeError(zr('1rXFU'));return t}return n}B.exports=$r
});var j=u(function(vt,M){
var Hr=g();function Jr(r,i,a){return a.getter(r,Hr(i,r.length,a.strict))}M.exports=Jr
});var Q=u(function(lt,W){
var Kr=require('@stdlib/assert-is-function/dist');function Xr(r,i,a,t){var n=r[i];if(Kr(n))return n===r.constructor?t.ctor:s;return n;function s(){var e,o;for(e=[],o=0;o<arguments.length;o++)e.push(arguments[o]);return n.apply(this===a?r:this,e)}}W.exports=Xr
});var h=u(function(ft,z){
var Yr=require('@stdlib/string-base-replace/dist');function Zr(r){return Yr(r,/^invalid argument/,"invalid operation")}z.exports=Zr
});var H=u(function(pt,$){
var re=/:/;$.exports=re
});var m=u(function(yt,K){
var ee=require('@stdlib/string-base-trim/dist'),J=require('@stdlib/slice-base-seq2slice/dist'),te=require('@stdlib/slice-base-str2slice/dist'),ie=require('@stdlib/string-base-starts-with/dist'),p=require('@stdlib/error-tools-fmtprodmsg/dist'),ae=H();function ne(r){return r[0]==="S"&&ie(r,"Slice(",0)&&r[r.length-1]===")"}function se(r){return ae.test(r)}function ue(r,i){var a=te(i);if(a===null)throw new Error(p('1rXEn',r));return a}function oe(r,i,a,t){var n=J(i,a,!0);if(n.code){if(n.code==="ERR_SLICE_INVALID_INCREMENT")throw new Error(p('1rXEq',r));if(n.code==="ERR_SLICE_INVALID_SUBSEQUENCE")throw new Error(p('1rXEn',r));if(n.code==="ERR_SLICE_OUT_OF_BOUNDS"){if(t)throw new RangeError(p('1rXFU'));n=J(i,a,!1)}}return n}function ce(r,i,a){var t=ee(i);return ne(t)?ue(i,t):se(t)?oe(i,t,r.length,a):null}K.exports=ce
});var Y=u(function(dt,X){
var ve=require('@stdlib/array-base-fancy-slice/dist'),le=h(),fe=m();function pe(r,i,a,t){var n=fe(r,i,t.strict);if(n!==null)try{return t.postGetSlice(ve(r,n,t.strict))}catch(s){throw new s.constructor(le(s.message))}}X.exports=pe
});var rr=u(function(qt,Z){
var ye=require('@stdlib/assert-is-string/dist').isPrimitive,de=require('@stdlib/assert-has-property/dist'),qe=q(),ge=j(),he=Q(),me=Y();function we(r){return i;function i(a,t,n){return qe(t)?ge(a,t,r):de(a,t)||!ye(t)?he(a,t,n,r):me(a,t,n,r)}}Z.exports=we
});var tr=u(function(gt,er){
var Ee=g();function Se(r,i,a,t){var n,s;if(n=t.validator(a,t.dtype),n)throw n;return t.preSetElement?s=t.preSetElement(a):s=a,t.setter(r,Ee(i,r.length,t.strict),s),!0}er.exports=Se
});var ar=u(function(ht,ir){
function be(r,i,a){return r[i]=a,!0}ir.exports=be
});var sr=u(function(mt,nr){
var Ie=require('@stdlib/assert-is-collection/dist'),Te=require('@stdlib/array-base-fancy-slice-assign/dist'),De=require('@stdlib/array-from-scalar/dist'),Ae=m(),Re=h();function xe(r,i,a,t,n){var s,e,o;if(e=Ae(r,i,n.strict),e===null)return!1;if(Ie(a))o=a;else{if(s=n.validator(a,n.dtype),s)throw s;o=De(a,n.dtype)}try{return Te(o,t,e,n.strict),!0}catch(v){throw new v.constructor(Re(v.message))}}nr.exports=xe
});var cr=u(function(wt,or){
var ke=require('@stdlib/assert-is-string/dist').isPrimitive,Pe=require('@stdlib/assert-has-property/dist'),_e=q(),Ne=tr(),ur=ar(),Ce=sr();function Oe(r){return i;function i(a,t,n,s){var e;return _e(t)?Ne(a,t,n,r):Pe(t)||!ke(t)?ur(a,t,n,r):(e=Ce(a,t,n,s,r),e||ur(a,t,n,r))}}or.exports=Oe
});var w=u(function(Et,fr){
var Ve=require('@stdlib/assert-is-array-like/dist'),vr=require('@stdlib/proxy-ctor/dist'),Ue=require('@stdlib/array-base-arraylike2object/dist'),Fe=require('@stdlib/object-assign/dist'),Le=require('@stdlib/error-tools-fmtprodmsg/dist'),Ge=S(),Be=I(),Me=D(),je=R(),lr=P(),We=O(),Qe=U(),ze=rr(),$e=cr();function He(){var r,i;if(r=je(),arguments.length&&(i=lr(r,arguments[0]),i))throw i;return a;function a(t){var n,s,e,o,v;if(!Ve(t))throw new TypeError(Le('1rX38',t));if(Me){if(n=Fe({},r),arguments.length>1&&(s=lr(n,arguments[1]),s))throw s;return e=Ue(t),o=e.dtype||"",v={ref:t,dtype:o,getter:e.accessors[0],setter:e.accessors[1],preSetElement:Ge(o),postGetSlice:Be(a,n),cache:n.cache,strict:n.strict,validator:We(o),array2fancy:a,ctor:new vr(t.constructor||Array,{construct:Qe(a,n)})},new vr(t,{get:ze(v),set:$e(v)})}return console.warn("WARNING: Proxy objects are not supported in the current environment. Some `FancyArray` functionality may not be available."),t}}fr.exports=He
});var yr=u(function(St,pr){
var Je=w(),Ke=Je();pr.exports=Ke
});var Xe=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),dr=yr(),Ye=w();Xe(dr,"factory",Ye);module.exports=dr;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
