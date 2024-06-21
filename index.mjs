// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-index@v0.2.1-esm/index.mjs";export{default as idx}from"https://cdn.jsdelivr.net/gh/stdlib-js/array-index@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/proxy-ctor@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/object-assign@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-complex-floating-point-data-type@v0.2.1-esm/index.mjs";import{isPrimitive as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-method-in@v0.2.1-esm/index.mjs";import{isPrimitive as h}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.2.1-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-complex-like@v0.2.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-real-floating-point-data-type@v0.2.1-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-unsigned-integer-data-type@v0.2.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-signed-integer-data-type@v0.2.1-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-boolean-data-type@v0.0.1-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-safe-data-type-cast@v0.3.1-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/array-min-dtype@v0.2.1-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-min-signed-integer-dtype@v0.2.1-esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-dtype@v0.2.1-esm/index.mjs";import{isPrimitive as E}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.1-esm/index.mjs";import k from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-property@v0.2.1-esm/index.mjs";import X from"https://cdn.jsdelivr.net/gh/stdlib-js/array-take@v0.1.1-esm/index.mjs";import T from"https://cdn.jsdelivr.net/gh/stdlib-js/array-mskfilter@v0.1.1-esm/index.mjs";import S from"https://cdn.jsdelivr.net/gh/stdlib-js/array-mskreject@v0.1.1-esm/index.mjs";import I from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-trim@v0.2.1-esm/index.mjs";import A from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-normalize-index@esm/index.mjs";import _ from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import R from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-fancy-slice@v0.3.1-esm/index.mjs";import N from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-replace@v0.2.1-esm/index.mjs";import U from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-seq2slice@v0.2.1-esm/index.mjs";import G from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-str2slice@v0.2.1-esm/index.mjs";import V from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-starts-with@v0.2.1-esm/index.mjs";import C from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-mostly-safe-data-type-cast@v0.2.1-esm/index.mjs";import L from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-real-data-type@v0.2.1-esm/index.mjs";import O from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.1-esm/index.mjs";import P from"https://cdn.jsdelivr.net/gh/stdlib-js/array-from-scalar@v0.2.1-esm/index.mjs";import z from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@v0.2.1-esm/index.mjs";import D from"https://cdn.jsdelivr.net/gh/stdlib-js/array-put@v0.0.1-esm/index.mjs";import F from"https://cdn.jsdelivr.net/gh/stdlib-js/array-place@esm/index.mjs";import q from"https://cdn.jsdelivr.net/gh/stdlib-js/array-convert@v0.2.1-esm/index.mjs";import{assign as B}from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-where@v0.0.1-esm/index.mjs";import M from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import Q from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-fancy-slice-assign@esm/index.mjs";import W from"https://cdn.jsdelivr.net/gh/stdlib-js/array-from-scalar@esm/index.mjs";function $(r){return d(r)?[r,0]:r}function H(r){return a(r)?$:null}function J(r,t){return function(e){return r(e,t)}}var K="function"==typeof s;function Y(r,t){return m(t)?c(t,"strict")&&(r.strict=t.strict,!l(r.strict))?new TypeError(o("1rX2o","strict",r.strict)):c(t,"cache")&&(r.cache=t.cache,!p(r.cache,"get"))?new TypeError(o("invalid option. `%s` option is missing a `%s` method. Option: `%s`.","cache","get",r.cache)):null:new TypeError(o("1rX2V",t))}function Z(){return null}function rr(r,t){return l(r)?null:new TypeError(o("1rXEw",typeof r,t))}function tr(r,t){return d(r)?null:j(r)?new TypeError(o("1rXEw",x(r),t)):new TypeError(o("1rXEw",typeof r,t))}function er(r,t){return d(r)||j(r)?null:new TypeError(o("1rXEw",typeof r,t))}function sr(r,t){var e;return d(r)?h(r)?(e=w(r),g(e,t)?null:new TypeError(o("1rXEw",e,t))):new TypeError(o("1rXEw",b(r),t)):j(r)?new TypeError(o("1rXEw",x(r),t)):new TypeError(o("1rXEw",typeof r,t))}function nr(r,t){var e;return d(r)?(e=b(r),g(e,t)?null:new TypeError(o("1rXEw",e,t))):j(r)?new TypeError(o("1rXEw",x(r),t)):new TypeError(o("1rXEw",typeof r,t))}function ir(r){return"generic"===r||""===r?Z:f(r)?tr:v(r)?nr:u(r)?sr:y(r)?rr:er}function or(r,t){return function(e,s){var n,i;switch((i=s).length){case 0:n=new e;break;case 1:n=new e(i[0]);break;case 2:n=new e(i[0],i[1]);break;case 3:n=new e(i[0],i[1],i[2]);break;case 4:n=new e(i[0],i[1],i[2],i[3]);break;case 5:n=new e(i[0],i[1],i[2],i[3],i[4]);break;case 6:n=new e(i[0],i[1],i[2],i[3],i[4],i[5]);break;case 7:n=new e(i[0],i[1],i[2],i[3],i[4],i[5],i[6]);break;case 8:n=new e(i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7]);break;case 9:n=new e(i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7],i[8]);break;case 10:n=new e(i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7],i[8],i[9]);break;default:n=e.apply(null,i)}return r(n,t)}}var ar=/^-?[0-9]+$/;function dr(r){return E(r)&&ar.test(r)}var mr=/\s*ArrayIndex<[^>]+>\s*/;function cr(r){return E(r)&&mr.test(r)}function lr(r,t){var e,s=t.get((e=I(r)).substring(11,e.length-1));if(null===s)throw new Error(o("invalid operation. Unable to resolve array index. Value: `%s`.",r));return s}function pr(r,t,e){var s,n;if(s=parseInt(r,10),-1===(n=A(s,t-1))){if(e)throw new RangeError(o("invalid operation. Index exceeds array bounds."));return s}return n}function hr(r){return N(r,/^invalid arguments?/,"invalid operation")}var jr=/:/;function fr(r,t,e){var s=I(t);return function(r){return"S"===r[0]&&V(r,"Slice(",0)&&")"===r[r.length-1]}(s)?function(r,t){var e=G(t);if(null===e)throw new Error(o("1rXEn",r));return e}(t,s):function(r){return jr.test(r)}(s)?function(r,t,e,s){var n=U(t,e,!0);if(n.code){if("ERR_SLICE_INVALID_INCREMENT"===n.code)throw new Error(o("1rXEq",r));if("ERR_SLICE_INVALID_SUBSEQUENCE"===n.code)throw new Error(o("1rXEn",r));if("ERR_SLICE_OUT_OF_BOUNDS"===n.code){if(s)throw new RangeError(o("1rXFU"));n=U(t,e,!1)}}return n}(t,s,r.length,e):null}function vr(r){return function(t,e,s){if(dr(e))return function(r,t,e){return e.getter(r,pr(t,r.length,e.strict))}(t,e,r);if(k(t,e)||!E(e))return function(r,t,e,s){var n=r[t];return _(n)?n===r.constructor?s.ctor:function(){var t,s;for(t=[],s=0;s<arguments.length;s++)t.push(arguments[s]);return n.apply(this===e?r:this,t)}:n}(t,e,s,r);if(cr(e))return function(r,t,e){var s=lr(t,e.cache);if("int"===s.type)return e.postGetArray(X(r,s.data));if("bool"===s.type)return e.postGetArray(T(r,s.data));if("mask"===s.type)return e.postGetArray(S(r,s.data));throw new Error(o("invalid operation. Unrecognized array index type. Value: `%s`.",s.type))}(t,e,r);return function(r,t,e){var s=fr(r,t,e.strict);if(null!==s)try{return e.postGetArray(R(r,s,e.strict))}catch(r){throw new r.constructor(hr(r.message))}}(t,e,r)}}function ur(r,t,e){return r[t]=e,!0}function yr(r){return function(t,e,s,n){var i;if(dr(e))return function(r,t,e,s){var n,i;if(n=s.validator(e,s.dtype))throw n;return i=s.preSetElement?s.preSetElement(e):e,s.setter(r,pr(t,r.length,s.strict),i),!0}(t,e,s,r);if(k(e)||!E(e))return ur(t,e,s);if(cr(e))return function(r,t,e,s){var n,i,d,m,c;if(d=lr(t,s.cache),n=s.dtype||"generic",O(e))c=e;else{if(m=s.validator(e,n))throw m;c=s.preSetElement?s.preSetElement(e):e,c=P(c,n),i=n}if("int"===d.type){try{D(r,d.data,c)}catch(m){throw new m.constructor(hr(m.message))}return!0}if("bool"===d.type){try{F(r,d.data,c,{mode:"strict_broadcast"})}catch(m){throw new m.constructor(hr(m.message))}return!0}if(void 0===i&&(i=z(e)||"generic"),!C(i,n))throw new TypeError(o("1rXEw",i,n));if(a(n)&&L(i)&&(c=q(c,n)),"mask"===d.type){try{B(d.data,r,c,r,1,0)}catch(m){throw new m.constructor(hr(m.message))}return!0}throw new Error(o("invalid operation. Unrecognized array index type. Value: `%s`.",d.type))}(t,e,s,r);if(i=function(r,t,e,s,n){var i,o,a;if(null===(o=fr(r,t,n.strict)))return!1;if(M(e))a=e;else{if(i=n.validator(e,n.dtype))throw i;a=W(e,n.dtype||"generic")}try{Q(a,s,o,n.strict)}catch(i){throw new i.constructor(hr(i.message))}return!0}(t,e,s,n,r),i)return i;return ur(t,e,s)}}function gr(){var r,a;if(r={cache:t,strict:!1},arguments.length&&(a=Y(r,arguments[0])))throw a;return function t(a){var d,m,c,l,p;if(!e(a))throw new TypeError(o("1rX38",a));if(K){if(d=i({},r),arguments.length>1&&(m=Y(d,arguments[1])))throw m;return p={ref:a,dtype:l=(c=n(a)).dtype||"",getter:c.accessors[0],setter:c.accessors[1],preSetElement:H(l),postGetArray:J(t,d),cache:d.cache,strict:d.strict,validator:ir(l),array2fancy:t,ctor:new s(a.constructor||Array,{construct:or(t,d)})},new s(a,{get:vr(p),set:yr(p)})}return console.warn("WARNING: Proxy objects are not supported in the current environment. Some `FancyArray` functionality may not be available."),a}}var br=gr();r(br,"factory",gr),r(br,"idx",t);export{br as default,gr as factory};
//# sourceMappingURL=index.mjs.map
