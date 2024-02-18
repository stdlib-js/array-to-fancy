"use strict";var u=function(r,i){return function(){return i||r((i={exports:{}}).exports,i),i.exports}};var S=u(function(At,b){
var Ar=require('@stdlib/array-base-assert-is-complex-floating-point-data-type/dist'),xr=require('@stdlib/assert-is-number/dist').isPrimitive;function Tr(r){return xr(r)?[r,0]:r}function Rr(r){return Ar(r)?Tr:null}b.exports=Rr
});var A=u(function(xt,I){
function Dr(r,i){return a;function a(t){return r(t,i)}}I.exports=Dr
});var T=u(function(Tt,x){
var kr=require('@stdlib/proxy-ctor/dist'),_r=typeof kr=="function";x.exports=_r
});var D=u(function(Rt,R){
var Pr=require('@stdlib/array-index/dist');function Nr(){return{cache:Pr,strict:!1}}R.exports=Nr
});var P=u(function(Dt,_){
var Vr=require('@stdlib/assert-is-plain-object/dist'),k=require('@stdlib/assert-has-own-property/dist'),Ur=require('@stdlib/assert-is-boolean/dist').isPrimitive,Cr=require('@stdlib/assert-is-method-in/dist'),y=require('@stdlib/error-tools-fmtprodmsg/dist');function Or(r,i){return Vr(i)?k(i,"strict")&&(r.strict=i.strict,!Ur(r.strict))?new TypeError(y('1rX2o',"strict",r.strict)):k(i,"cache")&&(r.cache=i.cache,!Cr(r.cache,"get"))?new TypeError(y('1rXFb',"cache","get",r.cache)):null:new TypeError(y('1rX2V',i));}_.exports=Or
});var C=u(function(kt,U){
var l=require('@stdlib/assert-is-number/dist').isPrimitive,Gr=require('@stdlib/assert-is-integer/dist').isPrimitive,f=require('@stdlib/assert-is-complex-like/dist'),Fr=require('@stdlib/array-base-assert-is-real-floating-point-data-type/dist'),Lr=require('@stdlib/array-base-assert-is-unsigned-integer-data-type/dist'),jr=require('@stdlib/array-base-assert-is-signed-integer-data-type/dist'),N=require('@stdlib/array-base-assert-is-safe-data-type-cast/dist'),V=require('@stdlib/array-min-dtype/dist'),Br=require('@stdlib/array-base-min-signed-integer-dtype/dist'),d=require('@stdlib/complex-dtype/dist'),c=require('@stdlib/error-tools-fmtprodmsg/dist');function Mr(){return null}function Wr(r,i){return l(r)?null:f(r)?new TypeError(c('1rXEw',d(r),i)):new TypeError(c('1rXEw',typeof r,i));}function zr(r,i){return l(r)||f(r)?null:new TypeError(c('1rXEw',typeof r,i));}function Qr(r,i){var a;return l(r)?Gr(r)?(a=Br(r),N(a,i)?null:new TypeError(c('1rXEw',a,i))):new TypeError(c('1rXEw',V(r),i)):f(r)?new TypeError(c('1rXEw',d(r),i)):new TypeError(c('1rXEw',typeof r,i));}function Xr(r,i){var a;return l(r)?(a=V(r),N(a,i)?null:new TypeError(c('1rXEw',a,i))):f(r)?new TypeError(c('1rXEw',d(r),i)):new TypeError(c('1rXEw',typeof r,i));}function Yr(r){return r==="generic"||r===""?Mr:Fr(r)?Wr:Lr(r)?Xr:jr(r)?Qr:zr}U.exports=Yr
});var G=u(function(_t,O){
function $r(r,i){return a;function a(t,n){var s,e;switch(e=n,e.length){case 0:s=new t;break;case 1:s=new t(e[0]);break;case 2:s=new t(e[0],e[1]);break;case 3:s=new t(e[0],e[1],e[2]);break;case 4:s=new t(e[0],e[1],e[2],e[3]);break;case 5:s=new t(e[0],e[1],e[2],e[3],e[4]);break;case 6:s=new t(e[0],e[1],e[2],e[3],e[4],e[5]);break;case 7:s=new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6]);break;case 8:s=new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]);break;case 9:s=new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]);break;case 10:s=new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9]);break;default:s=t.apply(null,e)}return r(s,i)}}O.exports=$r
});var L=u(function(Pt,F){
var Hr=/^-?[0-9]+$/;F.exports=Hr
});var q=u(function(Nt,j){
var Jr=require('@stdlib/assert-is-string/dist').isPrimitive,Kr=L();function Zr(r){return Jr(r)&&Kr.test(r)}j.exports=Zr
});var M=u(function(Vt,B){
var re=/\s*ArrayIndex<[^>]+>\s*/;B.exports=re
});var z=u(function(Ut,W){
var ee=require('@stdlib/assert-is-string/dist').isPrimitive,te=M();function ie(r){return ee(r)&&te.test(r)}W.exports=ie
});var X=u(function(Ct,Q){
var ae=require('@stdlib/string-base-trim/dist'),ne=require('@stdlib/error-tools-fmtprodmsg/dist');function se(r){return r.substring(11,r.length-1)}function ue(r,i){var a=i.get(se(ae(r)));if(a===null)throw new Error(ne('1rXFa',r));return a}Q.exports=ue
});var $=u(function(Ot,Y){
var oe=require('@stdlib/array-take/dist'),ce=require('@stdlib/array-base-mskfilter/dist'),ve=require('@stdlib/array-base-mskreject/dist'),le=require('@stdlib/error-tools-fmtprodmsg/dist'),fe=X();function pe(r,i,a){var t=fe(i,a.cache);if(t.type==="int")return a.postGetArray(oe(r,t.data));if(t.type==="bool")return a.postGetArray(ce(r,t.data));if(t.type==="mask")return a.postGetArray(ve(r,t.data));throw new Error(le('1rXFZ',t.type))}Y.exports=pe
});var g=u(function(Gt,H){
var ye=require('@stdlib/ndarray-base-normalize-index/dist'),de=require('@stdlib/error-tools-fmtprodmsg/dist');function qe(r,i,a){var t,n;if(t=parseInt(r,10),n=ye(t,i-1),n===-1){if(a)throw new RangeError(de('1rXFY'));return t}return n}H.exports=qe
});var K=u(function(Ft,J){
var ge=g();function me(r,i,a){return a.getter(r,ge(i,r.length,a.strict))}J.exports=me
});var rr=u(function(Lt,Z){
var he=require('@stdlib/assert-is-function/dist');function we(r,i,a,t){var n=r[i];if(he(n))return n===r.constructor?t.ctor:s;return n;function s(){var e,o;for(e=[],o=0;o<arguments.length;o++)e.push(arguments[o]);return n.apply(this===a?r:this,e)}}Z.exports=we
});var m=u(function(jt,er){
var Ee=require('@stdlib/string-base-replace/dist');function be(r){return Ee(r,/^invalid argument/,"invalid operation")}er.exports=be
});var ir=u(function(Bt,tr){
var Se=/:/;tr.exports=Se
});var h=u(function(Mt,nr){
var Ie=require('@stdlib/string-base-trim/dist'),ar=require('@stdlib/slice-base-seq2slice/dist'),Ae=require('@stdlib/slice-base-str2slice/dist'),xe=require('@stdlib/string-base-starts-with/dist'),p=require('@stdlib/error-tools-fmtprodmsg/dist'),Te=ir();function Re(r){return r[0]==="S"&&xe(r,"Slice(",0)&&r[r.length-1]===")"}function De(r){return Te.test(r)}function ke(r,i){var a=Ae(i);if(a===null)throw new Error(p('1rXEn',r));return a}function _e(r,i,a,t){var n=ar(i,a,!0);if(n.code){if(n.code==="ERR_SLICE_INVALID_INCREMENT")throw new Error(p('1rXEq',r));if(n.code==="ERR_SLICE_INVALID_SUBSEQUENCE")throw new Error(p('1rXEn',r));if(n.code==="ERR_SLICE_OUT_OF_BOUNDS"){if(t)throw new RangeError(p('1rXFU'));n=ar(i,a,!1)}}return n}function Pe(r,i,a){var t=Ie(i);return Re(t)?ke(i,t):De(t)?_e(i,t,r.length,a):null}nr.exports=Pe
});var ur=u(function(Wt,sr){
var Ne=require('@stdlib/array-base-fancy-slice/dist'),Ve=m(),Ue=h();function Ce(r,i,a){var t=Ue(r,i,a.strict);if(t!==null)try{return a.postGetArray(Ne(r,t,a.strict))}catch(n){throw new n.constructor(Ve(n.message))}}sr.exports=Ce
});var cr=u(function(zt,or){
var Oe=require('@stdlib/assert-is-string/dist').isPrimitive,Ge=require('@stdlib/assert-has-property/dist'),Fe=q(),Le=z(),je=$(),Be=K(),Me=rr(),We=ur();function ze(r){return i;function i(a,t,n){return Fe(t)?Be(a,t,r):Ge(a,t)||!Oe(t)?Me(a,t,n,r):Le(t)?je(a,t,r):We(a,t,r)}}or.exports=ze
});var lr=u(function(Qt,vr){
var Qe=g();function Xe(r,i,a,t){var n,s;if(n=t.validator(a,t.dtype),n)throw n;return t.preSetElement?s=t.preSetElement(a):s=a,t.setter(r,Qe(i,r.length,t.strict),s),!0}vr.exports=Xe
});var pr=u(function(Xt,fr){
function Ye(r,i,a){return r[i]=a,!0}fr.exports=Ye
});var dr=u(function(Yt,yr){
var $e=require('@stdlib/assert-is-collection/dist'),He=require('@stdlib/array-base-fancy-slice-assign/dist'),Je=require('@stdlib/array-from-scalar/dist'),Ke=h(),Ze=m();function rt(r,i,a,t,n){var s,e,o;if(e=Ke(r,i,n.strict),e===null)return!1;if($e(a))o=a;else{if(s=n.validator(a,n.dtype),s)throw s;o=Je(a,n.dtype)}try{return He(o,t,e,n.strict),!0}catch(v){throw new v.constructor(Ze(v.message))}}yr.exports=rt
});var mr=u(function($t,gr){
var et=require('@stdlib/assert-is-string/dist').isPrimitive,tt=require('@stdlib/assert-has-property/dist'),it=q(),at=lr(),qr=pr(),nt=dr();function st(r){return i;function i(a,t,n,s){var e;return it(t)?at(a,t,n,r):tt(t)||!et(t)?qr(a,t,n,r):(e=nt(a,t,n,s,r),e||qr(a,t,n,r))}}gr.exports=st
});var w=u(function(Ht,Er){
var ut=require('@stdlib/assert-is-array-like/dist'),hr=require('@stdlib/proxy-ctor/dist'),ot=require('@stdlib/array-base-arraylike2object/dist'),ct=require('@stdlib/object-assign/dist'),vt=require('@stdlib/error-tools-fmtprodmsg/dist'),lt=S(),ft=A(),pt=T(),yt=D(),wr=P(),dt=C(),qt=G(),gt=cr(),mt=mr();function ht(){var r,i;if(r=yt(),arguments.length&&(i=wr(r,arguments[0]),i))throw i;return a;function a(t){var n,s,e,o,v;if(!ut(t))throw new TypeError(vt('1rX38',t));if(pt){if(n=ct({},r),arguments.length>1&&(s=wr(n,arguments[1]),s))throw s;return e=ot(t),o=e.dtype||"",v={ref:t,dtype:o,getter:e.accessors[0],setter:e.accessors[1],preSetElement:lt(o),postGetArray:ft(a,n),cache:n.cache,strict:n.strict,validator:dt(o),array2fancy:a,ctor:new hr(t.constructor||Array,{construct:qt(a,n)})},new hr(t,{get:gt(v),set:mt(v)})}return console.warn("WARNING: Proxy objects are not supported in the current environment. Some `FancyArray` functionality may not be available."),t}}Er.exports=ht
});var Sr=u(function(Jt,br){
var wt=w(),Et=wt();br.exports=Et
});var Ir=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),bt=require('@stdlib/array-index/dist'),E=Sr(),St=w();Ir(E,"factory",St);Ir(E,"idx",bt);module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
