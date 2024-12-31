// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-index@v0.3.0-esm/index.mjs";export{default as idx}from"https://cdn.jsdelivr.net/gh/stdlib-js/array-index@v0.3.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/proxy-ctor@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/object-assign@v0.2.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-complex-floating-point-data-type@v0.2.1-esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.2-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.2-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.2-esm/index.mjs";import{isPrimitive as p}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.2-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-method-in@v0.2.2-esm/index.mjs";import{isPrimitive as f}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.2.2-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-complex-like@v0.2.2-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-real-floating-point-data-type@v0.2.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-unsigned-integer-data-type@v0.2.1-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-signed-integer-data-type@v0.2.1-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-boolean-data-type@v0.0.1-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-safe-data-type-cast@v0.3.2-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/array-min-dtype@v0.3.0-esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-min-signed-integer-dtype@v0.2.2-esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-dtype@v0.2.2-esm/index.mjs";import{isPrimitive as k}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.2-esm/index.mjs";import X from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-property@v0.2.2-esm/index.mjs";import T from"https://cdn.jsdelivr.net/gh/stdlib-js/array-take@v0.1.2-esm/index.mjs";import S from"https://cdn.jsdelivr.net/gh/stdlib-js/array-mskfilter@v0.1.2-esm/index.mjs";import I from"https://cdn.jsdelivr.net/gh/stdlib-js/array-mskreject@v0.1.2-esm/index.mjs";import A from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-trim@v0.2.2-esm/index.mjs";import _ from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-normalize-index@v0.2.2-esm/index.mjs";import R from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import N from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-fancy-slice@v0.3.1-esm/index.mjs";import U from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-replace@v0.2.2-esm/index.mjs";import G from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-seq2slice@v0.2.2-esm/index.mjs";import V from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-str2slice@v0.2.2-esm/index.mjs";import C from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-starts-with@v0.2.2-esm/index.mjs";import L from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-mostly-safe-data-type-cast@v0.2.2-esm/index.mjs";import O from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-real-data-type@v0.2.1-esm/index.mjs";import P from"https://cdn.jsdelivr.net/gh/stdlib-js/array-from-scalar@v0.2.1-esm/index.mjs";import z from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@v0.3.0-esm/index.mjs";import D from"https://cdn.jsdelivr.net/gh/stdlib-js/array-put@v0.0.2-esm/index.mjs";import F from"https://cdn.jsdelivr.net/gh/stdlib-js/array-place@v0.1.1-esm/index.mjs";import q from"https://cdn.jsdelivr.net/gh/stdlib-js/array-convert@v0.2.1-esm/index.mjs";import{assign as B}from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-where@v0.0.2-esm/index.mjs";import M from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-fancy-slice-assign@v0.2.1-esm/index.mjs";function Q(r){return m(r)?[r,0]:r}function W(r){return d(r)?Q:null}function $(r,t){return function(e){return r(e,t)}}var H="function"==typeof n;function J(r,t){return c(t)?l(t,"strict")&&(r.strict=t.strict,!p(r.strict))?new TypeError(a("1rX2o","strict",r.strict)):l(t,"cache")&&(r.cache=t.cache,!h(r.cache,"get"))?new TypeError(a("invalid option. `%s` option is missing a `%s` method. Option: `%s`.","cache","get",r.cache)):null:new TypeError(a("1rX2V",t))}function K(){return null}function Y(r,t){return p(r)?null:new TypeError(a("1rXEw",typeof r,t))}function Z(r,t){return m(r)?null:j(r)?new TypeError(a("1rXEw",E(r),t)):new TypeError(a("1rXEw",typeof r,t))}function rr(r,t){return m(r)||j(r)?null:new TypeError(a("1rXEw",typeof r,t))}function tr(r,t){var e;return m(r)?f(r)?(e=x(r),b(e,t)?null:new TypeError(a("1rXEw",e,t))):new TypeError(a("1rXEw",w(r),t)):j(r)?new TypeError(a("1rXEw",E(r),t)):new TypeError(a("1rXEw",typeof r,t))}function er(r,t){var e;return m(r)?(e=w(r),b(e,t)?null:new TypeError(a("1rXEw",e,t))):j(r)?new TypeError(a("1rXEw",E(r),t)):new TypeError(a("1rXEw",typeof r,t))}function sr(r){return"generic"===r||""===r?K:v(r)?Z:u(r)?er:y(r)?tr:g(r)?Y:rr}function nr(r,t){return function(e,s){var n,i;switch((i=s).length){case 0:n=new e;break;case 1:n=new e(i[0]);break;case 2:n=new e(i[0],i[1]);break;case 3:n=new e(i[0],i[1],i[2]);break;case 4:n=new e(i[0],i[1],i[2],i[3]);break;case 5:n=new e(i[0],i[1],i[2],i[3],i[4]);break;case 6:n=new e(i[0],i[1],i[2],i[3],i[4],i[5]);break;case 7:n=new e(i[0],i[1],i[2],i[3],i[4],i[5],i[6]);break;case 8:n=new e(i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7]);break;case 9:n=new e(i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7],i[8]);break;case 10:n=new e(i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7],i[8],i[9]);break;default:n=e.apply(null,i)}return r(n,t)}}var ir=/^-?[0-9]+$/;function or(r){return k(r)&&ir.test(r)}var ar=/\s*ArrayIndex<[^>]+>\s*/;function dr(r){return k(r)&&ar.test(r)}function mr(r,t){var e,s=t.get((e=A(r)).substring(11,e.length-1));if(null===s)throw new Error(a("invalid operation. Unable to resolve array index. Value: `%s`.",r));return s}function cr(r,t,e){var s,n;if(s=parseInt(r,10),-1===(n=_(s,t-1))){if(e)throw new RangeError(a("invalid operation. Index exceeds array bounds."));return s}return n}function lr(r){return U(r,/^invalid arguments?/,"invalid operation")}var pr=/:/;function hr(r,t,e){var s=A(t);return function(r){return"S"===r[0]&&C(r,"Slice(",0)&&")"===r[r.length-1]}(s)?function(r,t){var e=V(t);if(null===e)throw new Error(a("1rXEn",r));return e}(t,s):function(r){return pr.test(r)}(s)?function(r,t,e,s){var n=G(t,e,!0);if(n.code){if("ERR_SLICE_INVALID_INCREMENT"===n.code)throw new Error(a("1rXEq",r));if("ERR_SLICE_INVALID_SUBSEQUENCE"===n.code)throw new Error(a("1rXEn",r));if("ERR_SLICE_OUT_OF_BOUNDS"===n.code){if(s)throw new RangeError(a("1rXFU"));n=G(t,e,!1)}}return n}(t,s,r.length,e):null}function fr(r){return function(t,e,s){if(or(e))return function(r,t,e){return e.getter(r,cr(t,r.length,e.strict))}(t,e,r);if(X(t,e)||!k(e))return function(r,t,e,s){var n=r[t];return R(n)?n===r.constructor?s.ctor:function(){var t,s;for(t=[],s=0;s<arguments.length;s++)t.push(arguments[s]);return n.apply(this===e?r:this,t)}:n}(t,e,s,r);if(dr(e))return function(r,t,e){var s=mr(t,e.cache);if("int"===s.type)return e.postGetArray(T(r,s.data));if("bool"===s.type)return e.postGetArray(S(r,s.data));if("mask"===s.type)return e.postGetArray(I(r,s.data));throw new Error(a("invalid operation. Unrecognized array index type. Value: `%s`.",s.type))}(t,e,r);return function(r,t,e){var s=hr(r,t,e.strict);if(null!==s)try{return e.postGetArray(N(r,s,e.strict))}catch(r){throw new r.constructor(lr(r.message))}}(t,e,r)}}function jr(r,t,e){return r[t]=e,!0}function vr(r){return function(t,s,n,i){var o;if(or(s))return function(r,t,e,s){var n,i;if(n=s.validator(e,s.dtype))throw n;return i=s.preSetElement?s.preSetElement(e):e,s.setter(r,cr(t,r.length,s.strict),i),!0}(t,s,n,r);if(X(t,s)||!k(s))return jr(t,s,n);if(dr(s))return function(r,t,s,n){var i,o,m,c,l;if(m=mr(t,n.cache),i=n.dtype||"generic",e(s))l=s;else{if(c=n.validator(s,i))throw c;l=n.preSetElement?n.preSetElement(s):s,l=P(l,i),o=i}if("int"===m.type){try{D(r,m.data,l)}catch(c){throw new c.constructor(lr(c.message))}return!0}if("bool"===m.type){try{F(r,m.data,l,{mode:"strict_broadcast"})}catch(c){throw new c.constructor(lr(c.message))}return!0}if(void 0===o&&(o=z(s)||"generic"),!L(o,i))throw new TypeError(a("1rXEw",o,i));if(d(i)&&O(o)&&(l=q(l,i)),"mask"===m.type){try{B(m.data,r,l,r,1,0)}catch(c){throw new c.constructor(lr(c.message))}return!0}throw new Error(a("invalid operation. Unrecognized array index type. Value: `%s`.",m.type))}(t,s,n,r);if(o=function(r,t,s,n,i){var o,a,d;if(null===(a=hr(r,t,i.strict)))return!1;if(e(s))d=s;else{if(o=i.validator(s,i.dtype))throw o;d=P(s,i.dtype||"generic")}try{M(d,n,a,i.strict)}catch(o){throw new o.constructor(lr(o.message))}return!0}(t,s,n,i,r),o)return o;return jr(t,s,n)}}function ur(){var r,d;if(r={cache:t,strict:!1},arguments.length&&(d=J(r,arguments[0])))throw d;return function t(d){var m,c,l,p,h;if(!s(d)&&!e(d))throw new TypeError(a("1rX38",d));if(H){if(m=o({},r),arguments.length>1&&(c=J(m,arguments[1])))throw c;return h={ref:d,dtype:p=(l=i(d)).dtype||"",getter:l.accessors[0],setter:l.accessors[1],preSetElement:W(p),postGetArray:$(t,m),cache:m.cache,strict:m.strict,validator:sr(p),array2fancy:t,ctor:new n(d.constructor||Array,{construct:nr(t,m)})},new n(d,{get:fr(h),set:vr(h)})}return console.warn("WARNING: Proxy objects are not supported in the current environment. Some `FancyArray` functionality may not be available."),d}}var yr=ur();r(yr,"factory",ur),r(yr,"idx",t);export{yr as default,ur as factory};
//# sourceMappingURL=index.mjs.map