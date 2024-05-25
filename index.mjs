// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-index@v0.2.1-esm/index.mjs";export{default as idx}from"https://cdn.jsdelivr.net/gh/stdlib-js/array-index@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/proxy-ctor@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/object-assign@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-complex-floating-point-data-type@v0.2.1-esm/index.mjs";import{isPrimitive as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-method-in@v0.2.1-esm/index.mjs";import{isPrimitive as f}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.2.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-complex-like@v0.2.1-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-real-floating-point-data-type@v0.2.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-unsigned-integer-data-type@v0.2.1-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-signed-integer-data-type@v0.2.1-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-safe-data-type-cast@v0.3.1-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/array-min-dtype@v0.2.1-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-min-signed-integer-dtype@v0.2.1-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-dtype@v0.2.1-esm/index.mjs";import{isPrimitive as x}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.1-esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-property@v0.2.1-esm/index.mjs";import k from"https://cdn.jsdelivr.net/gh/stdlib-js/array-take@v0.1.1-esm/index.mjs";import X from"https://cdn.jsdelivr.net/gh/stdlib-js/array-mskfilter@v0.1.1-esm/index.mjs";import T from"https://cdn.jsdelivr.net/gh/stdlib-js/array-mskreject@v0.1.1-esm/index.mjs";import I from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-trim@v0.2.1-esm/index.mjs";import S from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-normalize-index@v0.2.1-esm/index.mjs";import A from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import R from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-fancy-slice@v0.3.1-esm/index.mjs";import _ from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-replace@v0.2.1-esm/index.mjs";import N from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-seq2slice@v0.2.1-esm/index.mjs";import U from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-str2slice@v0.2.1-esm/index.mjs";import G from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-starts-with@v0.2.1-esm/index.mjs";import C from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.1-esm/index.mjs";import L from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-fancy-slice-assign@v0.2.1-esm/index.mjs";import V from"https://cdn.jsdelivr.net/gh/stdlib-js/array-from-scalar@v0.2.1-esm/index.mjs";function O(r){return d(r)?[r,0]:r}function P(r,t){return function(e){return r(e,t)}}var D="function"==typeof s;function F(r,t){return m(t)?c(t,"strict")&&(r.strict=t.strict,!l(r.strict))?new TypeError(o("1rX2o","strict",r.strict)):c(t,"cache")&&(r.cache=t.cache,!p(r.cache,"get"))?new TypeError(o("invalid option. `%s` option is missing a `%s` method. Option: `%s`.","cache","get",r.cache)):null:new TypeError(o("1rX2V",t))}function q(){return null}function z(r,t){return d(r)?null:h(r)?new TypeError(o("1rXEw",w(r),t)):new TypeError(o("1rXEw",typeof r,t))}function B(r,t){return d(r)||h(r)?null:new TypeError(o("1rXEw",typeof r,t))}function M(r,t){var e;return d(r)?f(r)?(e=b(r),y(e,t)?null:new TypeError(o("1rXEw",e,t))):new TypeError(o("1rXEw",g(r),t)):h(r)?new TypeError(o("1rXEw",w(r),t)):new TypeError(o("1rXEw",typeof r,t))}function Q(r,t){var e;return d(r)?(e=g(r),y(e,t)?null:new TypeError(o("1rXEw",e,t))):h(r)?new TypeError(o("1rXEw",w(r),t)):new TypeError(o("1rXEw",typeof r,t))}function W(r){return"generic"===r||""===r?q:j(r)?z:u(r)?Q:v(r)?M:B}function $(r,t){return function(e,s){var n,i;switch((i=s).length){case 0:n=new e;break;case 1:n=new e(i[0]);break;case 2:n=new e(i[0],i[1]);break;case 3:n=new e(i[0],i[1],i[2]);break;case 4:n=new e(i[0],i[1],i[2],i[3]);break;case 5:n=new e(i[0],i[1],i[2],i[3],i[4]);break;case 6:n=new e(i[0],i[1],i[2],i[3],i[4],i[5]);break;case 7:n=new e(i[0],i[1],i[2],i[3],i[4],i[5],i[6]);break;case 8:n=new e(i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7]);break;case 9:n=new e(i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7],i[8]);break;case 10:n=new e(i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7],i[8],i[9]);break;default:n=e.apply(null,i)}return r(n,t)}}var H=/^-?[0-9]+$/;function J(r){return x(r)&&H.test(r)}var K=/\s*ArrayIndex<[^>]+>\s*/;function Y(r,t,e){var s=function(r,t){var e,s=t.get((e=I(r)).substring(11,e.length-1));if(null===s)throw new Error(o("invalid operation. Unable to resolve array index. Value: `%s`.",r));return s}(t,e.cache);if("int"===s.type)return e.postGetArray(k(r,s.data));if("bool"===s.type)return e.postGetArray(X(r,s.data));if("mask"===s.type)return e.postGetArray(T(r,s.data));throw new Error(o("invalid operation. Unrecognized array index type. Value: `%s`.",s.type))}function Z(r,t,e){var s,n;if(s=parseInt(r,10),-1===(n=S(s,t-1))){if(e)throw new RangeError(o("invalid operation. Index exceeds array bounds."));return s}return n}function rr(r){return _(r,/^invalid arguments?/,"invalid operation")}var tr=/:/;function er(r,t,e){var s=I(t);return function(r){return"S"===r[0]&&G(r,"Slice(",0)&&")"===r[r.length-1]}(s)?function(r,t){var e=U(t);if(null===e)throw new Error(o("1rXEn",r));return e}(t,s):function(r){return tr.test(r)}(s)?function(r,t,e,s){var n=N(t,e,!0);if(n.code){if("ERR_SLICE_INVALID_INCREMENT"===n.code)throw new Error(o("1rXEq",r));if("ERR_SLICE_INVALID_SUBSEQUENCE"===n.code)throw new Error(o("1rXEn",r));if("ERR_SLICE_OUT_OF_BOUNDS"===n.code){if(s)throw new RangeError(o("1rXFU"));n=N(t,e,!1)}}return n}(t,s,r.length,e):null}function sr(r){return function(t,e,s){if(J(e))return function(r,t,e){return e.getter(r,Z(t,r.length,e.strict))}(t,e,r);if(E(t,e)||!x(e))return function(r,t,e,s){var n=r[t];return A(n)?n===r.constructor?s.ctor:function(){var t,s;for(t=[],s=0;s<arguments.length;s++)t.push(arguments[s]);return n.apply(this===e?r:this,t)}:n}(t,e,s,r);if(n=e,x(n)&&K.test(n))return Y(t,e,r);var n;return function(r,t,e){var s=er(r,t,e.strict);if(null!==s)try{return e.postGetArray(R(r,s,e.strict))}catch(r){throw new r.constructor(rr(r.message))}}(t,e,r)}}function nr(r,t,e){return r[t]=e,!0}function ir(r){return function(t,e,s,n){var i;if(J(e))return function(r,t,e,s){var n,i;if(n=s.validator(e,s.dtype))throw n;return i=s.preSetElement?s.preSetElement(e):e,s.setter(r,Z(t,r.length,s.strict),i),!0}(t,e,s,r);if(E(e)||!x(e))return nr(t,e,s);if(i=function(r,t,e,s,n){var i,o,a;if(null===(o=er(r,t,n.strict)))return!1;if(C(e))a=e;else{if(i=n.validator(e,n.dtype))throw i;a=V(e,n.dtype)}try{return L(a,s,o,n.strict),!0}catch(i){throw new i.constructor(rr(i.message))}}(t,e,s,n,r),i)return i;return nr(t,e,s)}}function or(){var r,d;if(r={cache:t,strict:!1},arguments.length&&(d=F(r,arguments[0])))throw d;return function t(d){var m,c,l,p,f;if(!e(d))throw new TypeError(o("1rX38",d));if(D){if(m=i({},r),arguments.length>1&&(c=F(m,arguments[1])))throw c;return f={ref:d,dtype:p=(l=n(d)).dtype||"",getter:l.accessors[0],setter:l.accessors[1],preSetElement:(h=p,a(h)?O:null),postGetArray:P(t,m),cache:m.cache,strict:m.strict,validator:W(p),array2fancy:t,ctor:new s(d.constructor||Array,{construct:$(t,m)})},new s(d,{get:sr(f),set:ir(f)})}var h;return console.warn("WARNING: Proxy objects are not supported in the current environment. Some `FancyArray` functionality may not be available."),d}}var ar=or();r(ar,"factory",or),r(ar,"idx",t);export{ar as default,or as factory};
//# sourceMappingURL=index.mjs.map
