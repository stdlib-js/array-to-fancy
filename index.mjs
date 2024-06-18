// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-index@v0.2.1-esm/index.mjs";export{default as idx}from"https://cdn.jsdelivr.net/gh/stdlib-js/array-index@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/proxy-ctor@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/object-assign@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-complex-floating-point-data-type@v0.2.1-esm/index.mjs";import{isPrimitive as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-method-in@v0.2.1-esm/index.mjs";import{isPrimitive as f}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.2.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-complex-like@v0.2.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-real-floating-point-data-type@v0.2.1-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-unsigned-integer-data-type@v0.2.1-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-signed-integer-data-type@v0.2.1-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-boolean-data-type@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-safe-data-type-cast@v0.3.1-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/array-min-dtype@v0.2.1-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-min-signed-integer-dtype@v0.2.1-esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-dtype@v0.2.1-esm/index.mjs";import{isPrimitive as E}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.1-esm/index.mjs";import k from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-property@v0.2.1-esm/index.mjs";import X from"https://cdn.jsdelivr.net/gh/stdlib-js/array-take@v0.1.1-esm/index.mjs";import T from"https://cdn.jsdelivr.net/gh/stdlib-js/array-mskfilter@v0.1.1-esm/index.mjs";import S from"https://cdn.jsdelivr.net/gh/stdlib-js/array-mskreject@v0.1.1-esm/index.mjs";import I from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-trim@v0.2.1-esm/index.mjs";import A from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-normalize-index@v0.2.1-esm/index.mjs";import R from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import _ from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-fancy-slice@v0.3.1-esm/index.mjs";import N from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-replace@v0.2.1-esm/index.mjs";import U from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-seq2slice@v0.2.1-esm/index.mjs";import G from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-str2slice@v0.2.1-esm/index.mjs";import V from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-starts-with@v0.2.1-esm/index.mjs";import C from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.1-esm/index.mjs";import L from"https://cdn.jsdelivr.net/gh/stdlib-js/array-from-scalar@v0.2.1-esm/index.mjs";import O from"https://cdn.jsdelivr.net/gh/stdlib-js/array-put@esm/index.mjs";import P from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-fancy-slice-assign@v0.2.1-esm/index.mjs";function z(r){return d(r)?[r,0]:r}function D(r,t){return function(e){return r(e,t)}}var F="function"==typeof s;function q(r,t){return m(t)?c(t,"strict")&&(r.strict=t.strict,!l(r.strict))?new TypeError(o("1rX2o","strict",r.strict)):c(t,"cache")&&(r.cache=t.cache,!p(r.cache,"get"))?new TypeError(o("invalid option. `%s` option is missing a `%s` method. Option: `%s`.","cache","get",r.cache)):null:new TypeError(o("1rX2V",t))}function B(){return null}function M(r,t){return l(r)?null:new TypeError(o("1rXEw",typeof r,t))}function Q(r,t){return d(r)?null:h(r)?new TypeError(o("1rXEw",x(r),t)):new TypeError(o("1rXEw",typeof r,t))}function W(r,t){return d(r)||h(r)?null:new TypeError(o("1rXEw",typeof r,t))}function $(r,t){var e;return d(r)?f(r)?(e=w(r),b(e,t)?null:new TypeError(o("1rXEw",e,t))):new TypeError(o("1rXEw",g(r),t)):h(r)?new TypeError(o("1rXEw",x(r),t)):new TypeError(o("1rXEw",typeof r,t))}function H(r,t){var e;return d(r)?(e=g(r),b(e,t)?null:new TypeError(o("1rXEw",e,t))):h(r)?new TypeError(o("1rXEw",x(r),t)):new TypeError(o("1rXEw",typeof r,t))}function J(r){return"generic"===r||""===r?B:u(r)?Q:j(r)?H:v(r)?$:y(r)?M:W}function K(r,t){return function(e,s){var n,i;switch((i=s).length){case 0:n=new e;break;case 1:n=new e(i[0]);break;case 2:n=new e(i[0],i[1]);break;case 3:n=new e(i[0],i[1],i[2]);break;case 4:n=new e(i[0],i[1],i[2],i[3]);break;case 5:n=new e(i[0],i[1],i[2],i[3],i[4]);break;case 6:n=new e(i[0],i[1],i[2],i[3],i[4],i[5]);break;case 7:n=new e(i[0],i[1],i[2],i[3],i[4],i[5],i[6]);break;case 8:n=new e(i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7]);break;case 9:n=new e(i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7],i[8]);break;case 10:n=new e(i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7],i[8],i[9]);break;default:n=e.apply(null,i)}return r(n,t)}}var Y=/^-?[0-9]+$/;function Z(r){return E(r)&&Y.test(r)}var rr=/\s*ArrayIndex<[^>]+>\s*/;function tr(r){return E(r)&&rr.test(r)}function er(r,t){var e,s=t.get((e=I(r)).substring(11,e.length-1));if(null===s)throw new Error(o("invalid operation. Unable to resolve array index. Value: `%s`.",r));return s}function sr(r,t,e){var s,n;if(s=parseInt(r,10),-1===(n=A(s,t-1))){if(e)throw new RangeError(o("invalid operation. Index exceeds array bounds."));return s}return n}function nr(r){return N(r,/^invalid arguments?/,"invalid operation")}var ir=/:/;function or(r,t,e){var s=I(t);return function(r){return"S"===r[0]&&V(r,"Slice(",0)&&")"===r[r.length-1]}(s)?function(r,t){var e=G(t);if(null===e)throw new Error(o("1rXEn",r));return e}(t,s):function(r){return ir.test(r)}(s)?function(r,t,e,s){var n=U(t,e,!0);if(n.code){if("ERR_SLICE_INVALID_INCREMENT"===n.code)throw new Error(o("1rXEq",r));if("ERR_SLICE_INVALID_SUBSEQUENCE"===n.code)throw new Error(o("1rXEn",r));if("ERR_SLICE_OUT_OF_BOUNDS"===n.code){if(s)throw new RangeError(o("1rXFU"));n=U(t,e,!1)}}return n}(t,s,r.length,e):null}function ar(r){return function(t,e,s){if(Z(e))return function(r,t,e){return e.getter(r,sr(t,r.length,e.strict))}(t,e,r);if(k(t,e)||!E(e))return function(r,t,e,s){var n=r[t];return R(n)?n===r.constructor?s.ctor:function(){var t,s;for(t=[],s=0;s<arguments.length;s++)t.push(arguments[s]);return n.apply(this===e?r:this,t)}:n}(t,e,s,r);if(tr(e))return function(r,t,e){var s=er(t,e.cache);if("int"===s.type)return e.postGetArray(X(r,s.data));if("bool"===s.type)return e.postGetArray(T(r,s.data));if("mask"===s.type)return e.postGetArray(S(r,s.data));throw new Error(o("invalid operation. Unrecognized array index type. Value: `%s`.",s.type))}(t,e,r);return function(r,t,e){var s=or(r,t,e.strict);if(null!==s)try{return e.postGetArray(_(r,s,e.strict))}catch(r){throw new r.constructor(nr(r.message))}}(t,e,r)}}function dr(r,t,e){return r[t]=e,!0}function mr(r){return function(t,e,s,n){var i;if(Z(e))return function(r,t,e,s){var n,i;if(n=s.validator(e,s.dtype))throw n;return i=s.preSetElement?s.preSetElement(e):e,s.setter(r,sr(t,r.length,s.strict),i),!0}(t,e,s,r);if(k(e)||!E(e))return dr(t,e,s);if(tr(e))return function(r,t,e,s){var n,i,a;if(n=er(t,s.cache),C(e))a=e;else{if(i=s.validator(e,s.dtype))throw i;a=s.preSetElement?s.preSetElement(e):e,a=L(a,s.dtype)}if("int"===n.type){try{O(r,n.data,a)}catch(i){throw new i.constructor(nr(i.message))}return!0}if("bool"===n.type)return!1;if("mask"===n.type)return!1;throw new Error(o("invalid operation. Unrecognized array index type. Value: `%s`.",n.type))}(t,e,s,r);if(i=function(r,t,e,s,n){var i,o,a;if(null===(o=or(r,t,n.strict)))return!1;if(C(e))a=e;else{if(i=n.validator(e,n.dtype))throw i;a=L(e,n.dtype)}try{P(a,s,o,n.strict)}catch(i){throw new i.constructor(nr(i.message))}return!0}(t,e,s,n,r),i)return i;return dr(t,e,s)}}function cr(){var r,d;if(r={cache:t,strict:!1},arguments.length&&(d=q(r,arguments[0])))throw d;return function t(d){var m,c,l,p,f;if(!e(d))throw new TypeError(o("1rX38",d));if(F){if(m=i({},r),arguments.length>1&&(c=q(m,arguments[1])))throw c;return f={ref:d,dtype:p=(l=n(d)).dtype||"",getter:l.accessors[0],setter:l.accessors[1],preSetElement:(h=p,a(h)?z:null),postGetArray:D(t,m),cache:m.cache,strict:m.strict,validator:J(p),array2fancy:t,ctor:new s(d.constructor||Array,{construct:K(t,m)})},new s(d,{get:ar(f),set:mr(f)})}var h;return console.warn("WARNING: Proxy objects are not supported in the current environment. Some `FancyArray` functionality may not be available."),d}}var lr=cr();r(lr,"factory",cr),r(lr,"idx",t);export{lr as default,cr as factory};
//# sourceMappingURL=index.mjs.map
