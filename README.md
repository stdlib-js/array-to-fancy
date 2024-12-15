<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# array2fancy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Convert an array to an object supporting fancy indexing.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

An array supporting **fancy indexing** is an array which supports slicing via indexing expressions for both retrieval and assignment.

```javascript
import array2fancy from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-to-fancy@deno/mod.js';

// Create a plain array:
var x = [ 1, 2, 3, 4, 5, 6, 7, 8 ];

// Turn the plain array into a "fancy" array:
var y = array2fancy( x );

// Select the first 3 elements:
var v = y[ ':3' ];
// returns [ 1, 2, 3 ]

// Select every other element, starting from the second element:
v = y[ '1::2' ];
// returns [ 2, 4, 6, 8 ]

// Select every other element, in reverse order, starting with the least element:
v = y[ '::-2' ];
// returns [ 8, 6, 4, 2 ]

// Set all elements to the same value:
y[ ':' ] = 9;

// Create a shallow copy by selecting all elements:
v = y[ ':' ];
// returns [ 9, 9, 9, 9, 9, 9, 9, 9 ]
```

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import array2fancy from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-to-fancy@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { factory, idx } from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-to-fancy@deno/mod.js';
```

#### array2fancy( x\[, options] )

Converts an array to an object supporting fancy indexing.

```javascript
import Slice from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-ctor@deno/mod.js';

var x = [ 1, 2, 3, 4 ];

var y = array2fancy( x );
// returns <Array>

// Normal element access:
var v = y[ 0 ];
// returns 1

v = y[ 1 ];
// returns 2

// Using negative integers:
v = y[ -1 ];
// returns 4

v = y[ -2 ];
// returns 3

// Using subsequence expressions:
v = y[ '1::2' ];
// returns [ 2, 4 ]

// Using Slice objects:
v = y[ new Slice( 1, null, 2 ) ];
// returns [ 2, 4 ]

// Assignment:
y[ '1:3' ] = 5;
v = y[ ':' ];
// returns [ 1, 5, 5, 4 ]
```

The function supports the following options:

-   **cache**: cache for resolving array index objects. Must have a `get` method which accepts a single argument: a string identifier associated with an array index.

    If an array index associated with a provided identifier exists, the `get` method should return an object having the following properties:

    -   **data**: the underlying index array.
    -   **type**: the index type. Must be either `'mask'`, `'bool'`, or `'int'`.
    -   **dtype**: the [data type][@stdlib/array/dtypes] of the underlying array.

    If an array index is not associated with a provided identifier, the `get` method should return `null`.

    Default: [`ArrayIndex`][@stdlib/array/index].

-   **strict**: boolean indicating whether to enforce strict bounds checking. Default: `false`.

By default, the function returns a fancy array which does **not** enforce strict bounds checking. For example,

```javascript
var y = array2fancy( [ 1, 2, 3, 4 ] );

var v = y[ 10 ];
// returns undefined
```

To enforce strict bounds checking, set the `strict` option to `true`.

<!-- run throws: true -->

```javascript
var y = array2fancy( [ 1, 2, 3, 4 ], {
    'strict': true
});

var v = y[ 10 ];
// throws <RangeError>
```

#### array2fancy.factory( \[options] )

Returns a function for converting an array to an object supporting fancy indexing.

```javascript
var fcn = array2fancy.factory();

var x = [ 1, 2, 3, 4 ];

var y = fcn( x );
// returns <Array>

var v = y[ ':' ];
// returns [ 1, 2, 3, 4 ]
```

The function supports the following options:

-   **cache**: default cache for resolving array index objects. Must have a `get` method which accepts a single argument: a string identifier associated with an array index.

    If an array index associated with a provided identifier exists, the `get` method should return an object having the following properties:

    -   **data**: the underlying index array.
    -   **type**: the index type. Must be either `'mask'`, `'bool'`, or `'int'`.
    -   **dtype**: the [data type][@stdlib/array/dtypes] of the underlying array.

    If an array index is not associated with a provided identifier, the `get` method should return `null`.

    Default: [`ArrayIndex`][@stdlib/array/index].

-   **strict**: boolean indicating whether to enforce strict bounds checking by default. Default: `false`.

By default, the function returns a function which, by default, does **not** enforce strict bounds checking. For example,

```javascript
var fcn = array2fancy.factory();

var y = fcn( [ 1, 2, 3, 4 ] );

var v = y[ 10 ];
// returns undefined
```

To enforce strict bounds checking by default, set the `strict` option to `true`.

<!-- run throws: true -->

```javascript
var fcn = array2fancy.factory({
    'strict': true
});
var y = fcn( [ 1, 2, 3, 4 ] );

var v = y[ 10 ];
// throws <RangeError>
```

The returned function supports the same options as above. When the returned function is provided option values, those values override the factory method defaults.

#### array2fancy.idx( x\[, options] )

Wraps a provided array as an array index object.

```javascript
var x = [ 1, 2, 3, 4 ];

var idx = array2fancy.idx( x );
// returns <ArrayIndex>
```

For documentation and usage, see [`ArrayIndex`][@stdlib/array/index].

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

* * *

<section class="notes">

## Notes

-   A fancy array shares the **same** data as the provided input array. Hence, any mutations to the returned array will affect the underlying input array and vice versa.
-   For operations returning a new array (e.g., when slicing or invoking an instance method), a fancy array returns a new fancy array having the same configuration as specified by `options`.
-   A fancy array supports indexing using positive and negative integers (both numeric literals and strings), [`Slice`][@stdlib/slice/ctor] instances, [subsequence expressions][@stdlib/slice/seq2slice], and [index arrays][@stdlib/array/index] (boolean, mask, and integer).
-   A fancy array supports all properties and methods of the input array, and, thus, a fancy array can be consumed by any API which supports array-like objects.
-   Indexing expressions provide a convenient and powerful means for creating and operating on array views; however, their use does entail a performance cost. Indexing expressions are best suited for interactive use (e.g., in the [REPL][@stdlib/repl]) and scripting. For performance critical applications, prefer equivalent functional APIs supporting array-like objects.
-   In older JavaScript environments which do **not** support [`Proxy`][@stdlib/proxy/ctor] objects, the use of indexing expressions is **not** supported.

### Bounds Checking

By default, fancy arrays do **not** enforce strict bounds checking across index expressions. The motivation for the default fancy array behavior stems from a desire to maintain parity with plain arrays; namely, the returning of `undefined` when accessing a single non-existent property.

Accordingly, when `strict` is `false`, one may observe the following behaviors:

<!-- run throws: true -->

```javascript
var x = array2fancy( [ 1, 2, 3, 4 ], {
    'strict': false
});

// Access a non-existent property:
var v = x[ 'foo' ];
// returns undefined

// Access an out-of-bounds index:
v = x[ 10 ];
// returns undefined

v = x[ -10 ];
// returns undefined

// Access an out-of-bounds slice:
v = x[ '10:' ];
// returns []

// Access one or more out-of-bounds indices:
var i = array2fancy.idx( [ 10, 20 ] );
v = x[ i ];
// throws <RangeError>
```

When `strict` is `true`, fancy arrays normalize index behavior and consistently enforce strict bounds checking.

<!-- run throws: true -->

```javascript
var x = array2fancy( [ 1, 2, 3, 4 ], {
    'strict': true
});

// Access a non-existent property:
var v = x[ 'foo' ];
// returns undefined

// Access an out-of-bounds index:
v = x[ 10 ];
// throws <RangeError>

v = x[ -10 ];
// throws <RangeError>

// Access an out-of-bounds slice:
v = x[ '10:' ];
// throws <RangeError>

// Access one or more out-of-bounds indices:
var i = array2fancy.idx( [ 10, 20 ] );
v = x[ i ];
// throws <RangeError>
```

### Broadcasting

Fancy arrays support **broadcasting** in which assigned scalars and single-element arrays are repeated (without additional memory allocation) to match the length of a target array instance.

```javascript
var y = array2fancy( [ 1, 2, 3, 4 ] );

// Broadcast a scalar:
y[ ':' ] = 5;
var v = y[ ':' ];
// returns [ 5, 5, 5, 5 ]

// Broadcast a single-element array:
y[ ':' ] = [ 6 ];
v = y[ ':' ];
// returns [ 6, 6, 6, 6 ]
```

Fancy array broadcasting follows the [same rules][@stdlib/ndarray/base/broadcast-shapes] as for [ndarrays][@stdlib/ndarray/ctor]. Consequently, when assigning arrays to slices, the array on the right-hand-side must be broadcast-compatible with number of elements in the slice. For example, each assignment expression in the following example follows broadcast rules and is thus valid.

```javascript
var y = array2fancy( [ 1, 2, 3, 4 ] );

y[ ':' ] = [ 5, 6, 7, 8 ];
var v = y[ ':' ];
// returns [ 5, 6, 7, 8 ]

y[ '1::2' ] = [ 9, 10 ];
v = y[ ':' ];
// returns [ 5, 9, 7, 10 ]

y[ '1::2' ] = [ 11 ];
v = y[ ':' ];
// returns [ 5, 11, 7, 11 ]

y[ '1::2' ] = 12;
v = y[ ':' ];
// returns [ 5, 12, 7, 12 ]

// Out-of-bounds slices (i.e., slices with zero elements):
y[ '10:20' ] = [ 13 ];
v = y[ ':' ];
// returns [ 5, 12, 7, 12 ]

y[ '10:20' ] = 13;
v = y[ ':' ];
// returns [ 5, 12, 7, 12 ]

y[ '10:20' ] = [];
v = y[ ':' ];
// returns [ 5, 12, 7, 12 ]
```

However, the following assignment expressions are not valid.

<!-- run throws: true -->

```javascript
var y = array2fancy( [ 1, 2, 3, 4 ] );

y[ ':' ] = [ 5, 6 ];
// throws <Error>

// Out-of-bounds slice (i.e., a slice with zero elements):
y[ '10:20' ] = [ 8, 9, 10, 11 ];
// throws <Error>
```

In order to broadcast a nested array element as one would a scalar, one must wrap the element in a single-element array.

```javascript
var y = array2fancy( [ [ 1, 2 ], [ 3, 4 ] ] );

// Assign individual array elements:
y[ ':' ] = [ 5, 6 ];
var v = y[ ':' ];
// returns [ 5, 6 ]

y = array2fancy( [ [ 1, 2 ], [ 3, 4 ] ] );

// Broadcast a nested array:
y[ ':' ] = [ [ 5, 6 ] ];
v = y[ ':' ];
// returns [ [ 5, 6 ], [ 5, 6 ] ]
```

### Casting

Fancy arrays support [(mostly) safe casts][@stdlib/array/mostly-safe-casts] (i.e., any cast which can be performed without overflow or loss of precision, with the exception of floating-point arrays which are also allowed to downcast from higher precision to lower precision).

```javascript
import Uint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@deno/mod.js';
import Int32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-int32@deno/mod.js';

var x = new Int32Array( [ 1, 2, 3, 4 ] );
var y = array2fancy( x );

// 8-bit unsigned integer values can be safely cast to 32-bit signed integer values:
y[ ':' ] = new Uint8Array( [ 5, 6, 7, 8 ] );
```

When attempting to perform an unsafe cast, fancy arrays will raise an exception.

<!-- run throws: true -->

```javascript
import Uint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@deno/mod.js';

var x = new Uint8Array( [ 1, 2, 3, 4 ] );
var y = array2fancy( x );

// Attempt to assign a non-integer value:
y[ ':' ] = 3.14;
// throws <TypeError>

// Attempt to assign a negative value:
y[ ':' ] = -3;
// throws <TypeError>
```

When assigning a real-valued scalar to a complex number array (e.g., [`Complex128Array`][@stdlib/array/complex128] or [`Complex64Array`][@stdlib/array/complex64]), a fancy array will cast the real-valued scalar to a complex number argument having an imaginary component equal to zero.

```javascript
import Complex128Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@deno/mod.js';
import real from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-real@deno/mod.js';
import imag from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-imag@deno/mod.js';

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var y = array2fancy( x );

// Retrieve the first element:
var v = y[ 0 ];
// returns <Complex128>

var re = real( v );
// returns 1.0

var im = imag( v );
// returns 2.0

// Assign a real-valued scalar to the first element:
y[ 0 ] = 9.0;

v = y[ 0 ];
// returns <Complex128>

re = real( v );
// returns 9.0

im = imag( v );
// returns 0.0
```

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import Uint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@deno/mod.js';
import Int32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-int32@deno/mod.js';
import BooleanArray from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-bool@deno/mod.js';
import array2fancy from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-to-fancy@deno/mod.js';

var x = [ 1, 2, 3, 4, 5, 6 ];
var y = array2fancy( x );
// returns <Array>

// Slice retrieval:
var z = y[ '1::2' ];
// returns [ 2, 4, 6 ]

z = y[ '-2::-2' ];
// returns [ 5, 3, 1 ]

z = y[ '1:4' ];
// returns [ 2, 3, 4 ]

// Slice assignment:
y[ '4:1:-1' ] = 10;
z = y[ ':' ];
// returns [ 1, 2, 10, 10, 10, 6 ]

y[ '2:5' ] = [ -10, -9, -8 ];
z = y[ ':' ];
// returns [ 1, 2, -10, -9, -8, 6 ]

// Array index retrieval:
var idx = array2fancy.idx;

var i = idx( [ 1, 3, 4 ] ); // integer index array
z = y[ i ];
// returns [ 2, -9, -8 ]

i = idx( [ true, false, false, true, true, true ] ); // boolean array
z = y[ i ];
// returns [ 1, -9, -8, 6 ]

i = idx( new BooleanArray( [ true, false, false, true, true, true ] ) ); // boolean array
z = y[ i ];
// returns [ 1, -9, -8, 6 ]

i = idx( new Uint8Array( [ 0, 0, 1, 0, 0, 1 ] ) ); // mask array
z = y[ i ];
// returns [ 1, 2, -9, -8 ]

i = idx( new Int32Array( [ 0, 0, 1, 1, 2, 2 ] ) ); // integer index array
z = y[ i ];
// returns [ 1, 1, 2, 2, -10, -10 ]

// Array index assignment:
x = [ 1, 2, 3, 4, 5, 6 ];
y = array2fancy( x );

i = idx( [ true, false, true, false, true, false ] ); // boolean array
y[ i ] = 5;
z = y[ ':' ];
// returns [ 5, 2, 5, 4, 5, 6 ]

i = idx( new BooleanArray( [ true, false, true, false, true, false ] ) ); // boolean array
y[ i ] = 7;
z = y[ ':' ];
// returns [ 7, 2, 7, 4, 7, 6 ]

i = idx( new Uint8Array( [ 1, 1, 1, 0, 0, 0 ] ) ); // mask array
y[ i ] = 8;
z = y[ ':' ];
// returns [ 7, 2, 7, 8, 8, 8 ]

i = idx( new Int32Array( [ 5, 3, 2 ] ) ); // integer index array
y[ i ] = [ 9, 10, 11 ];
z = y[ ':' ];
// returns [ 7, 2, 11, 10, 8, 9 ]

i = idx( [ 0, 1 ] ); // integer index array
y[ i ] = -1;
z = y[ ':' ];
// returns [ -1, -1, 11, 10, 8, 9 ]
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array-slice`][@stdlib/array/slice]</span><span class="delimiter">: </span><span class="description">return a shallow copy of a portion of an array.</span>
-   <span class="package-name">[`@stdlib/ndarray-fancy`][@stdlib/ndarray/fancy]</span><span class="delimiter">: </span><span class="description">fancy multidimensional array constructor.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-to-fancy.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-to-fancy

[test-image]: https://github.com/stdlib-js/array-to-fancy/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/array-to-fancy/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-to-fancy/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-to-fancy?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-to-fancy.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-to-fancy/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-to-fancy/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-to-fancy/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-to-fancy/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-to-fancy/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-to-fancy/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-to-fancy/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-to-fancy/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-to-fancy/main/LICENSE

[@stdlib/repl]: https://github.com/stdlib-js/repl/tree/deno

[@stdlib/proxy/ctor]: https://github.com/stdlib-js/proxy-ctor/tree/deno

[@stdlib/slice/ctor]: https://github.com/stdlib-js/slice-ctor/tree/deno

[@stdlib/slice/seq2slice]: https://github.com/stdlib-js/slice-seq2slice/tree/deno

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor/tree/deno

[@stdlib/ndarray/base/broadcast-shapes]: https://github.com/stdlib-js/ndarray-base-broadcast-shapes/tree/deno

[@stdlib/array/mostly-safe-casts]: https://github.com/stdlib-js/array-mostly-safe-casts/tree/deno

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128/tree/deno

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64/tree/deno

[@stdlib/array/index]: https://github.com/stdlib-js/array-index/tree/deno

[@stdlib/array/dtypes]: https://github.com/stdlib-js/array-dtypes/tree/deno

<!-- <related-links> -->

[@stdlib/array/slice]: https://github.com/stdlib-js/array-slice/tree/deno

[@stdlib/ndarray/fancy]: https://github.com/stdlib-js/ndarray-fancy/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
