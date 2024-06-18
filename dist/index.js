"use strict";var u=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var A=u(function(Bt,I){
var xr=require('@stdlib/array-base-assert-is-complex-floating-point-data-type/dist'),Rr=require('@stdlib/assert-is-number/dist').isPrimitive;function Dr(r){return Rr(r)?[r,0]:r}function kr(r){return xr(r)?Dr:null}I.exports=kr
});var x=u(function(Ft,T){
function _r(r,a){return i;function i(t){return r(t,a)}}T.exports=_r
});var D=u(function(Lt,R){
var Pr=require('@stdlib/proxy-ctor/dist'),Nr=typeof Pr=="function";R.exports=Nr
});var _=u(function(Mt,k){
var Vr=require('@stdlib/array-index/dist');function Ur(){return{cache:Vr,strict:!1}}k.exports=Ur
});var V=u(function(jt,N){
var Cr=require('@stdlib/assert-is-plain-object/dist'),P=require('@stdlib/assert-has-own-property/dist'),Or=require('@stdlib/assert-is-boolean/dist').isPrimitive,Gr=require('@stdlib/assert-is-method-in/dist'),d=require('@stdlib/error-tools-fmtprodmsg/dist');function Br(r,a){return Cr(a)?P(a,"strict")&&(r.strict=a.strict,!Or(r.strict))?new TypeError(d('1rX2o',"strict",r.strict)):P(a,"cache")&&(r.cache=a.cache,!Gr(r.cache,"get"))?new TypeError(d('1rXFb',"cache","get",r.cache)):null:new TypeError(d('1rX2V',a));}N.exports=Br
});var G=u(function(zt,O){
var l=require('@stdlib/assert-is-number/dist').isPrimitive,Fr=require('@stdlib/assert-is-integer/dist').isPrimitive,Lr=require('@stdlib/assert-is-boolean/dist').isPrimitive,f=require('@stdlib/assert-is-complex-like/dist'),Mr=require('@stdlib/array-base-assert-is-real-floating-point-data-type/dist'),jr=require('@stdlib/array-base-assert-is-unsigned-integer-data-type/dist'),zr=require('@stdlib/array-base-assert-is-signed-integer-data-type/dist'),Wr=require('@stdlib/array-base-assert-is-boolean-data-type/dist'),U=require('@stdlib/array-base-assert-is-safe-data-type-cast/dist'),C=require('@stdlib/array-min-dtype/dist'),Qr=require('@stdlib/array-base-min-signed-integer-dtype/dist'),q=require('@stdlib/complex-dtype/dist'),c=require('@stdlib/error-tools-fmtprodmsg/dist');function Xr(){return null}function Yr(r,a){return Lr(r)?null:new TypeError(c('1rXEw',typeof r,a));}function $r(r,a){return l(r)?null:f(r)?new TypeError(c('1rXEw',q(r),a)):new TypeError(c('1rXEw',typeof r,a));}function Hr(r,a){return l(r)||f(r)?null:new TypeError(c('1rXEw',typeof r,a));}function Jr(r,a){var i;return l(r)?Fr(r)?(i=Qr(r),U(i,a)?null:new TypeError(c('1rXEw',i,a))):new TypeError(c('1rXEw',C(r),a)):f(r)?new TypeError(c('1rXEw',q(r),a)):new TypeError(c('1rXEw',typeof r,a));}function Kr(r,a){var i;return l(r)?(i=C(r),U(i,a)?null:new TypeError(c('1rXEw',i,a))):f(r)?new TypeError(c('1rXEw',q(r),a)):new TypeError(c('1rXEw',typeof r,a));}function Zr(r){return r==="generic"||r===""?Xr:Mr(r)?$r:jr(r)?Kr:zr(r)?Jr:Wr(r)?Yr:Hr}O.exports=Zr
});var F=u(function(Wt,B){
function re(r,a){return i;function i(t,n){var s,e;switch(e=n,e.length){case 0:s=new t;break;case 1:s=new t(e[0]);break;case 2:s=new t(e[0],e[1]);break;case 3:s=new t(e[0],e[1],e[2]);break;case 4:s=new t(e[0],e[1],e[2],e[3]);break;case 5:s=new t(e[0],e[1],e[2],e[3],e[4]);break;case 6:s=new t(e[0],e[1],e[2],e[3],e[4],e[5]);break;case 7:s=new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6]);break;case 8:s=new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]);break;case 9:s=new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]);break;case 10:s=new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9]);break;default:s=t.apply(null,e)}return r(s,a)}}B.exports=re
});var M=u(function(Qt,L){
var ee=/^-?[0-9]+$/;L.exports=ee
});var g=u(function(Xt,j){
var te=require('@stdlib/assert-is-string/dist').isPrimitive,ie=M();function ae(r){return te(r)&&ie.test(r)}j.exports=ae
});var W=u(function(Yt,z){
var ne=/\s*ArrayIndex<[^>]+>\s*/;z.exports=ne
});var m=u(function($t,Q){
var se=require('@stdlib/assert-is-string/dist').isPrimitive,ue=W();function oe(r){return se(r)&&ue.test(r)}Q.exports=oe
});var h=u(function(Ht,X){
var ce=require('@stdlib/string-base-trim/dist'),ve=require('@stdlib/error-tools-fmtprodmsg/dist');function le(r){return r.substring(11,r.length-1)}function fe(r,a){var i=a.get(le(ce(r)));if(i===null)throw new Error(ve('1rXFa',r));return i}X.exports=fe
});var $=u(function(Jt,Y){
var pe=require('@stdlib/array-take/dist'),ye=require('@stdlib/array-mskfilter/dist'),de=require('@stdlib/array-mskreject/dist'),qe=require('@stdlib/error-tools-fmtprodmsg/dist'),ge=h();function me(r,a,i){var t=ge(a,i.cache);if(t.type==="int")return i.postGetArray(pe(r,t.data));if(t.type==="bool")return i.postGetArray(ye(r,t.data));if(t.type==="mask")return i.postGetArray(de(r,t.data));throw new Error(qe('1rXFZ',t.type))}Y.exports=me
});var w=u(function(Kt,H){
var he=require('@stdlib/ndarray-base-normalize-index/dist'),we=require('@stdlib/error-tools-fmtprodmsg/dist');function Ee(r,a,i){var t,n;if(t=parseInt(r,10),n=he(t,a-1),n===-1){if(i)throw new RangeError(we('1rXFY'));return t}return n}H.exports=Ee
});var K=u(function(Zt,J){
var be=w();function Se(r,a,i){return i.getter(r,be(a,r.length,i.strict))}J.exports=Se
});var rr=u(function(ri,Z){
var Ie=require('@stdlib/assert-is-function/dist');function Ae(r,a,i,t){var n=r[a];if(Ie(n))return n===r.constructor?t.ctor:s;return n;function s(){var e,o;for(e=[],o=0;o<arguments.length;o++)e.push(arguments[o]);return n.apply(this===i?r:this,e)}}Z.exports=Ae
});var p=u(function(ei,er){
var Te=require('@stdlib/string-base-replace/dist');function xe(r){return Te(r,/^invalid arguments?/,"invalid operation")}er.exports=xe
});var ir=u(function(ti,tr){
var Re=/:/;tr.exports=Re
});var E=u(function(ii,nr){
var De=require('@stdlib/string-base-trim/dist'),ar=require('@stdlib/slice-base-seq2slice/dist'),ke=require('@stdlib/slice-base-str2slice/dist'),_e=require('@stdlib/string-base-starts-with/dist'),y=require('@stdlib/error-tools-fmtprodmsg/dist'),Pe=ir();function Ne(r){return r[0]==="S"&&_e(r,"Slice(",0)&&r[r.length-1]===")"}function Ve(r){return Pe.test(r)}function Ue(r,a){var i=ke(a);if(i===null)throw new Error(y('1rXEn',r));return i}function Ce(r,a,i,t){var n=ar(a,i,!0);if(n.code){if(n.code==="ERR_SLICE_INVALID_INCREMENT")throw new Error(y('1rXEq',r));if(n.code==="ERR_SLICE_INVALID_SUBSEQUENCE")throw new Error(y('1rXEn',r));if(n.code==="ERR_SLICE_OUT_OF_BOUNDS"){if(t)throw new RangeError(y('1rXFU'));n=ar(a,i,!1)}}return n}function Oe(r,a,i){var t=De(a);return Ne(t)?Ue(a,t):Ve(t)?Ce(a,t,r.length,i):null}nr.exports=Oe
});var ur=u(function(ai,sr){
var Ge=require('@stdlib/array-base-fancy-slice/dist'),Be=p(),Fe=E();function Le(r,a,i){var t=Fe(r,a,i.strict);if(t!==null)try{return i.postGetArray(Ge(r,t,i.strict))}catch(n){throw new n.constructor(Be(n.message))}}sr.exports=Le
});var cr=u(function(ni,or){
var Me=require('@stdlib/assert-is-string/dist').isPrimitive,je=require('@stdlib/assert-has-property/dist'),ze=g(),We=m(),Qe=$(),Xe=K(),Ye=rr(),$e=ur();function He(r){return a;function a(i,t,n){return ze(t)?Xe(i,t,r):je(i,t)||!Me(t)?Ye(i,t,n,r):We(t)?Qe(i,t,r):$e(i,t,r)}}or.exports=He
});var lr=u(function(si,vr){
var Je=require('@stdlib/assert-is-collection/dist'),Ke=require('@stdlib/array-from-scalar/dist'),Ze=require('@stdlib/array-put/dist'),rt=require('@stdlib/error-tools-fmtprodmsg/dist'),et=h(),tt=p();function it(r,a,i,t){var n,s,e;if(n=et(a,t.cache),Je(i))e=i;else{if(s=t.validator(i,t.dtype),s)throw s;t.preSetElement?e=t.preSetElement(i):e=i,e=Ke(e,t.dtype)}if(n.type==="int"){try{Ze(r,n.data,e)}catch(o){throw new o.constructor(tt(o.message))}return!0}if(n.type==="bool"||n.type==="mask")return!1;throw new Error(rt('1rXFZ',n.type))}vr.exports=it
});var pr=u(function(ui,fr){
var at=w();function nt(r,a,i,t){var n,s;if(n=t.validator(i,t.dtype),n)throw n;return t.preSetElement?s=t.preSetElement(i):s=i,t.setter(r,at(a,r.length,t.strict),s),!0}fr.exports=nt
});var dr=u(function(oi,yr){
function st(r,a,i){return r[a]=i,!0}yr.exports=st
});var gr=u(function(ci,qr){
var ut=require('@stdlib/assert-is-collection/dist'),ot=require('@stdlib/array-base-fancy-slice-assign/dist'),ct=require('@stdlib/array-from-scalar/dist'),vt=E(),lt=p();function ft(r,a,i,t,n){var s,e,o;if(e=vt(r,a,n.strict),e===null)return!1;if(ut(i))o=i;else{if(s=n.validator(i,n.dtype),s)throw s;o=ct(i,n.dtype)}try{ot(o,t,e,n.strict)}catch(v){throw new v.constructor(lt(v.message))}return!0}qr.exports=ft
});var wr=u(function(vi,hr){
var pt=require('@stdlib/assert-is-string/dist').isPrimitive,yt=require('@stdlib/assert-has-property/dist'),dt=g(),qt=m(),gt=lr(),mt=pr(),mr=dr(),ht=gr();function wt(r){return a;function a(i,t,n,s){var e;return dt(t)?mt(i,t,n,r):yt(t)||!pt(t)?mr(i,t,n,r):qt(t)?gt(i,t,n,r):(e=ht(i,t,n,s,r),e||mr(i,t,n,r))}}hr.exports=wt
});var b=u(function(li,Sr){
var Et=require('@stdlib/assert-is-array-like/dist'),Er=require('@stdlib/proxy-ctor/dist'),bt=require('@stdlib/array-base-arraylike2object/dist'),St=require('@stdlib/object-assign/dist'),It=require('@stdlib/error-tools-fmtprodmsg/dist'),At=A(),Tt=x(),xt=D(),Rt=_(),br=V(),Dt=G(),kt=F(),_t=cr(),Pt=wr();function Nt(){var r,a;if(r=Rt(),arguments.length&&(a=br(r,arguments[0]),a))throw a;return i;function i(t){var n,s,e,o,v;if(!Et(t))throw new TypeError(It('1rX38',t));if(xt){if(n=St({},r),arguments.length>1&&(s=br(n,arguments[1]),s))throw s;return e=bt(t),o=e.dtype||"",v={ref:t,dtype:o,getter:e.accessors[0],setter:e.accessors[1],preSetElement:At(o),postGetArray:Tt(i,n),cache:n.cache,strict:n.strict,validator:Dt(o),array2fancy:i,ctor:new Er(t.constructor||Array,{construct:kt(i,n)})},new Er(t,{get:_t(v),set:Pt(v)})}return console.warn("WARNING: Proxy objects are not supported in the current environment. Some `FancyArray` functionality may not be available."),t}}Sr.exports=Nt
});var Ar=u(function(fi,Ir){
var Vt=b(),Ut=Vt();Ir.exports=Ut
});var Tr=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),Ct=require('@stdlib/array-index/dist'),S=Ar(),Ot=b();Tr(S,"factory",Ot);Tr(S,"idx",Ct);module.exports=S;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
