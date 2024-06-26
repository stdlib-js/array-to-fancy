/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var hasProxySupport = require( '@stdlib/assert-has-proxy-support' );
var isSameComplex128Array = require( '@stdlib/assert-is-same-complex128array' );
var isSameComplex64Array = require( '@stdlib/assert-is-same-complex64array' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var Float64Array = require( '@stdlib/array-float64' );
var Float32Array = require( '@stdlib/array-float32' );
var Int32Array = require( '@stdlib/array-int32' );
var Int8Array = require( '@stdlib/array-int8' );
var Uint32Array = require( '@stdlib/array-uint32' );
var Uint16Array = require( '@stdlib/array-uint16' );
var Uint8Array = require( '@stdlib/array-uint8' );
var Complex128Array = require( '@stdlib/array-complex128' );
var Complex64Array = require( '@stdlib/array-complex64' );
var toAccessorArray = require( '@stdlib/array-base-to-accessor-array' );
var array2fancy = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': !hasProxySupport()
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof array2fancy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an array-like object supporting mask array assignment (generic)', opts, function test( t ) {
	var expected;
	var idx;
	var x;
	var y;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ) );
	expected = [ 5, 6, 7, 8 ];
	y[ idx ] = [ 5, 6, 7, 8 ];

	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 1, 1 ] ) );
	expected = [ 5, 6, 3, 4 ];
	y[ idx ] = [ 5, 6, 0, 0 ];

	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 1, 0, 0, 1 ] ) );
	expected = [ 1, 5, 6, 4 ];
	y[ idx ] = [ 0, 5, 6, 0 ];

	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 1, 0, 1 ] ) );
	expected = [ 5, 2, 6, 4 ];
	y[ idx ] = [ 5, 0, 6, 0 ];

	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting mask array assignment ("unknown" dtype, accessor)', opts, function test( t ) {
	var expected;
	var idx;
	var x;
	var y;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( toAccessorArray( x ) );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ) );
	expected = [ 5, 6, 7, 8 ];
	y[ idx ] = [ 5, 6, 7, 8 ];

	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( toAccessorArray( x ) );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 1, 1 ] ) );
	expected = [ 5, 6, 3, 4 ];
	y[ idx ] = [ 5, 6, 0, 0 ];

	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( toAccessorArray( x ) );

	idx = array2fancy.idx( new Uint8Array( [ 1, 0, 0, 1 ] ) );
	expected = [ 1, 5, 6, 4 ];
	y[ idx ] = [ 0, 5, 6, 0 ];

	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( toAccessorArray( x ) );

	idx = array2fancy.idx( new Uint8Array( [ 0, 1, 0, 1 ] ) );
	expected = [ 5, 2, 6, 4 ];
	y[ idx ] = [ 5, 0, 6, 0 ];

	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting mask array assignment (int32)', opts, function test( t ) {
	var expected;
	var idx;
	var x;
	var y;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ) );
	expected = new Int32Array( [ 5, 6, 7, 8 ] );
	y[ idx ] = new Int32Array( [ 5, 6, 7, 8 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 1, 1 ] ) );
	expected = new Int32Array( [ 5, 6, 3, 4 ] );
	y[ idx ] = new Int32Array( [ 5, 6, 0, 0 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 1, 0, 0, 1 ] ) );
	expected = new Int32Array( [ 1, 5, 6, 4 ] );
	y[ idx ] = new Int32Array( [ 0, 5, 6, 0 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 1, 0, 1 ] ) );
	expected = new Int32Array( [ 5, 2, 6, 4 ] );
	y[ idx ] = new Int32Array( [ 5, 0, 6, 0 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting mask array assignment (uint32)', opts, function test( t ) {
	var expected;
	var idx;
	var x;
	var y;

	x = new Uint32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ) );
	expected = new Uint32Array( [ 5, 6, 7, 8 ] );
	y[ idx ] = new Uint32Array( [ 5, 6, 7, 8 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Uint32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 1, 1 ] ) );
	expected = new Uint32Array( [ 5, 6, 3, 4 ] );
	y[ idx ] = new Uint32Array( [ 5, 6, 0, 0 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Uint32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 1, 0, 0, 1 ] ) );
	expected = new Uint32Array( [ 1, 5, 6, 4 ] );
	y[ idx ] = new Uint32Array( [ 0, 5, 6, 0 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Uint32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 1, 0, 1 ] ) );
	expected = new Uint32Array( [ 5, 2, 6, 4 ] );
	y[ idx ] = new Uint32Array( [ 5, 0, 6, 0 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting mask array assignment (float64)', opts, function test( t ) {
	var expected;
	var idx;
	var x;
	var y;

	x = new Float64Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ) );
	expected = new Float64Array( [ 5, 6, 7, 8 ] );
	y[ idx ] = new Float64Array( [ 5, 6, 7, 8 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float64Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 1, 1 ] ) );
	expected = new Float64Array( [ 5, 6, 3, 4 ] );
	y[ idx ] = new Float64Array( [ 5, 6, 0, 0 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float64Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 1, 0, 0, 1 ] ) );
	expected = new Float64Array( [ 1, 5, 6, 4 ] );
	y[ idx ] = new Float64Array( [ 0, 5, 6, 0 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float64Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 1, 0, 1 ] ) );
	expected = new Float64Array( [ 5, 2, 6, 4 ] );
	y[ idx ] = new Float64Array( [ 5, 0, 6, 0 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting mask array assignment (complex128)', opts, function test( t ) {
	var expected;
	var idx;
	var x;
	var y;

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ) );
	expected = new Complex128Array( [ 9, 10, 11, 12, 13, 14, 15, 16 ] );
	y[ idx ] = new Complex128Array( [ 9, 10, 11, 12, 13, 14, 15, 16 ] );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 1, 1 ] ) );
	expected = new Complex128Array( [ 17, 18, 19, 20, 5, 6, 7, 8 ] );
	y[ idx ] = new Complex128Array( [ 17, 18, 19, 20, 0, 0, 0, 0 ] );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 1, 0, 0, 1 ] ) );
	expected = new Complex128Array( [ 1, 2, 17, 18, 19, 20, 7, 8 ] );
	y[ idx ] = new Complex128Array( [ 0, 0, 17, 18, 19, 20, 0, 0 ] );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 1, 0, 1 ] ) );
	expected = new Complex128Array( [ 17, 18, 3, 4, 19, 20, 7, 8 ] );
	y[ idx ] = new Complex128Array( [ 17, 18, 0, 0, 19, 20, 0, 0 ] );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting broadcasted mask array assignment (generic, array)', opts, function test( t ) {
	var expected;
	var idx;
	var x;
	var y;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ) );
	expected = [ 5, 5, 5, 5 ];
	y[ idx ] = [ 5 ];

	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 1, 1 ] ) );
	expected = [ 5, 5, 3, 4 ];
	y[ idx ] = [ 5 ];

	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 1, 0, 0, 1 ] ) );
	expected = [ 1, 5, 5, 4 ];
	y[ idx ] = [ 5 ];

	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 1, 0, 1 ] ) );
	expected = [ 5, 2, 5, 4 ];
	y[ idx ] = [ 5 ];

	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting broadcasted mask array assignment (generic, scalar)', opts, function test( t ) {
	var expected;
	var idx;
	var x;
	var y;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ) );
	expected = [ 5, 5, 5, 5 ];
	y[ idx ] = 5;

	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 1, 1 ] ) );
	expected = [ 5, 5, 3, 4 ];
	y[ idx ] = 5;

	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 1, 0, 0, 1 ] ) );
	expected = [ 1, 5, 5, 4 ];
	y[ idx ] = 5;

	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 1, 0, 1 ] ) );
	expected = [ 5, 2, 5, 4 ];
	y[ idx ] = 5;

	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting broadcasted mask array assignment (float64, array)', opts, function test( t ) {
	var expected;
	var idx;
	var x;
	var y;

	x = new Float64Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ) );
	expected = new Float64Array( [ 5, 5, 5, 5 ] );
	y[ idx ] = new Float64Array( [ 5 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float64Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 1, 1 ] ) );
	expected = new Float64Array( [ 5, 5, 3, 4 ] );
	y[ idx ] = new Float64Array( [ 5 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float64Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 1, 0, 0, 1 ] ) );
	expected = new Float64Array( [ 1, 5, 5, 4 ] );
	y[ idx ] = new Float64Array( [ 5 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float64Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 1, 0, 1 ] ) );
	expected = new Float64Array( [ 5, 2, 5, 4 ] );
	y[ idx ] = new Float64Array( [ 5 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting broadcasted mask array assignment (float64, scalar)', opts, function test( t ) {
	var expected;
	var idx;
	var x;
	var y;

	x = new Float64Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ) );
	expected = new Float64Array( [ 5, 5, 5, 5 ] );
	y[ idx ] = 5;

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float64Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 1, 1 ] ) );
	expected = new Float64Array( [ 5, 5, 3, 4 ] );
	y[ idx ] = 5;

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float64Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 1, 0, 0, 1 ] ) );
	expected = new Float64Array( [ 1, 5, 5, 4 ] );
	y[ idx ] = 5;

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float64Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 1, 0, 1 ] ) );
	expected = new Float64Array( [ 5, 2, 5, 4 ] );
	y[ idx ] = 5;

	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting broadcasted mask array assignment (int32, array)', opts, function test( t ) {
	var expected;
	var idx;
	var x;
	var y;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ) );
	expected = new Int32Array( [ 5, 5, 5, 5 ] );
	y[ idx ] = new Int32Array( [ 5 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 1, 1 ] ) );
	expected = new Int32Array( [ 5, 5, 3, 4 ] );
	y[ idx ] = new Int32Array( [ 5 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 1, 0, 0, 1 ] ) );
	expected = new Int32Array( [ 1, 5, 5, 4 ] );
	y[ idx ] = new Int32Array( [ 5 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 1, 0, 1 ] ) );
	expected = new Int32Array( [ 5, 2, 5, 4 ] );
	y[ idx ] = new Int32Array( [ 5 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( [ -1, -3 ] );
	expected = new Int32Array( [ 1, 5, 3, 5 ] );
	y[ idx ] = new Int32Array( [ 5 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting broadcasted mask array assignment (int32, scalar)', opts, function test( t ) {
	var expected;
	var idx;
	var x;
	var y;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ) );
	expected = new Int32Array( [ 5, 5, 5, 5 ] );
	y[ idx ] = 5;

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 1, 1 ] ) );
	expected = new Int32Array( [ 5, 5, 3, 4 ] );
	y[ idx ] = 5;

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 1, 0, 0, 1 ] ) );
	expected = new Int32Array( [ 1, 5, 5, 4 ] );
	y[ idx ] = 5;

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 1, 0, 1 ] ) );
	expected = new Int32Array( [ 5, 2, 5, 4 ] );
	y[ idx ] = 5;

	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting broadcasted mask array assignment (uint32, array)', opts, function test( t ) {
	var expected;
	var idx;
	var x;
	var y;

	x = new Uint32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ) );
	expected = new Uint32Array( [ 5, 5, 5, 5 ] );
	y[ idx ] = new Uint32Array( [ 5 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Uint32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 1, 1 ] ) );
	expected = new Uint32Array( [ 5, 5, 3, 4 ] );
	y[ idx ] = new Uint32Array( [ 5 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Uint32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 1, 0, 0, 1 ] ) );
	expected = new Uint32Array( [ 1, 5, 5, 4 ] );
	y[ idx ] = new Uint32Array( [ 5 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Uint32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 1, 0, 1 ] ) );
	expected = new Uint32Array( [ 5, 2, 5, 4 ] );
	y[ idx ] = new Uint32Array( [ 5 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting broadcasted mask array assignment (uint32, scalar)', opts, function test( t ) {
	var expected;
	var idx;
	var x;
	var y;

	x = new Uint32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ) );
	expected = new Uint32Array( [ 5, 5, 5, 5 ] );
	y[ idx ] = 5;

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Uint32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 1, 1 ] ) );
	expected = new Uint32Array( [ 5, 5, 3, 4 ] );
	y[ idx ] = 5;

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Uint32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 1, 0, 0, 1 ] ) );
	expected = new Uint32Array( [ 1, 5, 5, 4 ] );
	y[ idx ] = 5;

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Uint32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 1, 0, 1 ] ) );
	expected = new Uint32Array( [ 5, 2, 5, 4 ] );
	y[ idx ] = 5;

	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting broadcasted mask array assignment (complex128, array)', opts, function test( t ) {
	var expected;
	var idx;
	var x;
	var y;

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ) );
	expected = new Complex128Array( [ 9, 10, 9, 10, 9, 10, 9, 10 ] );
	y[ idx ] = new Complex128Array( [ 9, 10 ] );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 1, 1 ] ) );
	expected = new Complex128Array( [ 9, 10, 9, 10, 5, 6, 7, 8 ] );
	y[ idx ] = new Complex128Array( [ 9, 10 ] );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 1, 0, 0, 1 ] ) );
	expected = new Complex128Array( [ 1, 2, 9, 10, 9, 10, 7, 8 ] );
	y[ idx ] = new Complex128Array( [ 9, 10 ] );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 1, 0, 1 ] ) );
	expected = new Complex128Array( [ 9, 10, 3, 4, 9, 10, 7, 8 ] );
	y[ idx ] = new Complex128Array( [ 9, 10 ] );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting broadcasted mask array assignment (complex128, complex scalar)', opts, function test( t ) {
	var expected;
	var idx;
	var x;
	var y;

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ) );
	expected = new Complex128Array( [ 9, 10, 9, 10, 9, 10, 9, 10 ] );
	y[ idx ] = new Complex128( 9, 10 );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 1, 1 ] ) );
	expected = new Complex128Array( [ 9, 10, 9, 10, 5, 6, 7, 8 ] );
	y[ idx ] = new Complex128( 9, 10 );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 1, 0, 0, 1 ] ) );
	expected = new Complex128Array( [ 1, 2, 9, 10, 9, 10, 7, 8 ] );
	y[ idx ] = new Complex128( 9, 10 );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 1, 0, 1 ] ) );
	expected = new Complex128Array( [ 9, 10, 3, 4, 9, 10, 7, 8 ] );
	y[ idx ] = new Complex128( 9, 10 );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting broadcasted mask array assignment (complex128, real scalar)', opts, function test( t ) {
	var expected;
	var idx;
	var x;
	var y;

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ) );
	expected = new Complex128Array( [ 9, 0, 9, 0, 9, 0, 9, 0 ] );
	y[ idx ] = 9;

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 1, 1 ] ) );
	expected = new Complex128Array( [ 9, 0, 9, 0, 5, 6, 7, 8 ] );
	y[ idx ] = 9;

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 1, 0, 0, 1 ] ) );
	expected = new Complex128Array( [ 1, 2, 9, 0, 9, 0, 7, 8 ] );
	y[ idx ] = 9;

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 1, 0, 1 ] ) );
	expected = new Complex128Array( [ 9, 0, 3, 4, 9, 0, 7, 8 ] );
	y[ idx ] = 9;

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting casting (generic, float64)', opts, function test( t ) {
	var expected;
	var idx;
	var x;
	var y;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ) );
	expected = [ 5, 6, 7, 8 ];
	y[ idx ] = new Float64Array( [ 5, 6, 7, 8 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 1, 1 ] ) );
	expected = [ 5, 6, 3, 4 ];
	y[ idx ] = new Float64Array( [ 5, 6, 0, 0 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 1, 0, 0, 1 ] ) );
	expected = [ 1, 5, 6, 4 ];
	y[ idx ] = new Float64Array( [ 0, 5, 6, 0 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 1, 0, 1 ] ) );
	expected = [ 5, 2, 6, 4 ];
	y[ idx ] = new Float64Array( [ 5, 0, 6, 0 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting casting (float64, float32)', opts, function test( t ) {
	var expected;
	var idx;
	var x;
	var y;

	x = new Float64Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ) );
	expected = new Float64Array( [ 5, 6, 7, 8 ] );
	y[ idx ] = new Float32Array( [ 5, 6, 7, 8 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float64Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 1, 1 ] ) );
	expected = new Float64Array( [ 5, 6, 3, 4 ] );
	y[ idx ] = new Float32Array( [ 5, 6, 0, 0 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float64Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 1, 0, 0, 1 ] ) );
	expected = new Float64Array( [ 1, 5, 6, 4 ] );
	y[ idx ] = new Float32Array( [ 0, 5, 6, 0 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float64Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 1, 0, 1 ] ) );
	expected = new Float64Array( [ 5, 2, 6, 4 ] );
	y[ idx ] = new Float32Array( [ 5, 0, 6, 0 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting casting (int32, int8)', opts, function test( t ) {
	var expected;
	var idx;
	var x;
	var y;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ) );
	expected = new Int32Array( [ 5, 6, 7, 8 ] );
	y[ idx ] = new Int8Array( [ 5, 6, 7, 8 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 1, 1 ] ) );
	expected = new Int32Array( [ 5, 6, 3, 4 ] );
	y[ idx ] = new Int8Array( [ 5, 6, 0, 0 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 1, 0, 0, 1 ] ) );
	expected = new Int32Array( [ 1, 5, 6, 4 ] );
	y[ idx ] = new Int8Array( [ 0, 5, 6, 0 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 1, 0, 1 ] ) );
	expected = new Int32Array( [ 5, 2, 6, 4 ] );
	y[ idx ] = new Int8Array( [ 5, 0, 6, 0 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting casting (uint32, uint16)', opts, function test( t ) {
	var expected;
	var idx;
	var x;
	var y;

	x = new Uint32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ) );
	expected = new Uint32Array( [ 5, 6, 7, 8 ] );
	y[ idx ] = new Uint16Array( [ 5, 6, 7, 8 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Uint32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 1, 1 ] ) );
	expected = new Uint32Array( [ 5, 6, 3, 4 ] );
	y[ idx ] = new Uint16Array( [ 5, 6, 0, 0 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Uint32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 1, 0, 0, 1 ] ) );
	expected = new Uint32Array( [ 1, 5, 6, 4 ] );
	y[ idx ] = new Uint16Array( [ 0, 5, 6, 0 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Uint32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 1, 0, 1 ] ) );
	expected = new Uint32Array( [ 5, 2, 6, 4 ] );
	y[ idx ] = new Uint16Array( [ 5, 0, 6, 0 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting casting (complex128, complex64)', opts, function test( t ) {
	var expected;
	var idx;
	var x;
	var y;

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ) );
	expected = new Complex128Array( [ 9, 10, 11, 12, 13, 14, 15, 16 ] );
	y[ idx ] = new Complex64Array( [ 9, 10, 11, 12, 13, 14, 15, 16 ] );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 1, 1 ] ) );
	expected = new Complex128Array( [ 17, 18, 19, 20, 5, 6, 7, 8 ] );
	y[ idx ] = new Complex64Array( [ 17, 18, 19, 20, 0, 0, 0, 0 ] );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 1, 0, 0, 1 ] ) );
	expected = new Complex128Array( [ 1, 2, 17, 18, 19, 20, 7, 8 ] );
	y[ idx ] = new Complex64Array( [ 0, 0, 17, 18, 19, 20, 0, 0 ] );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 1, 0, 1 ] ) );
	expected = new Complex128Array( [ 17, 18, 3, 4, 19, 20, 7, 8 ] );
	y[ idx ] = new Complex64Array( [ 17, 18, 0, 0, 19, 20, 0, 0 ] );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting casting (complex128, float64)', opts, function test( t ) {
	var expected;
	var idx;
	var x;
	var y;

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ) );
	expected = new Complex128Array( [ 9, 0, 10, 0, 11, 0, 12, 0 ] );
	y[ idx ] = new Float64Array( [ 9, 10, 11, 12 ] );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 1, 1 ] ) );
	expected = new Complex128Array( [ 17, 0, 18, 0, 5, 6, 7, 8 ] );
	y[ idx ] = new Float64Array( [ 17, 18, 0, 0 ] );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 1, 0, 0, 1 ] ) );
	expected = new Complex128Array( [ 1, 2, 17, 0, 18, 0, 7, 8 ] );
	y[ idx ] = new Float64Array( [ 0, 17, 18, 0 ] );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 1, 0, 1 ] ) );
	expected = new Complex128Array( [ 17, 0, 3, 4, 18, 0, 7, 8 ] );
	y[ idx ] = new Float64Array( [ 17, 0, 18, 0 ] );

	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting downcasting of floating-point arrays (float32, float64)', opts, function test( t ) {
	var expected;
	var idx;
	var x;
	var y;

	x = new Float32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ) );
	expected = new Float32Array( [ 5, 6, 7, 8 ] );
	y[ idx ] = new Float64Array( [ 5, 6, 7, 8 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 1, 1 ] ) );
	expected = new Float32Array( [ 5, 6, 3, 4 ] );
	y[ idx ] = new Float64Array( [ 5, 6, 0, 0 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 1, 0, 0, 1 ] ) );
	expected = new Float32Array( [ 1, 5, 6, 4 ] );
	y[ idx ] = new Float64Array( [ 0, 5, 6, 0 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 1, 0, 1 ] ) );
	expected = new Float32Array( [ 5, 2, 6, 4 ] );
	y[ idx ] = new Float64Array( [ 5, 0, 6, 0 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object supporting downcasting of floating-point arrays (complex64, complex128)', opts, function test( t ) {
	var expected;
	var idx;
	var x;
	var y;

	x = new Complex64Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ) );
	expected = new Complex64Array( [ 9, 10, 11, 12, 13, 14, 15, 16 ] );
	y[ idx ] = new Complex128Array( [ 9, 10, 11, 12, 13, 14, 15, 16 ] );

	t.strictEqual( isSameComplex64Array( y, expected ), true, 'returns expected value' );

	x = new Complex64Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 1, 1 ] ) );
	expected = new Complex64Array( [ 17, 18, 19, 20, 5, 6, 7, 8 ] );
	y[ idx ] = new Complex128Array( [ 17, 18, 19, 20, 0, 0, 0, 0 ] );

	t.strictEqual( isSameComplex64Array( y, expected ), true, 'returns expected value' );

	x = new Complex64Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 1, 0, 0, 1 ] ) );
	expected = new Complex64Array( [ 1, 2, 17, 18, 19, 20, 7, 8 ] );
	y[ idx ] = new Complex128Array( [ 0, 0, 17, 18, 19, 20, 0, 0 ] );

	t.strictEqual( isSameComplex64Array( y, expected ), true, 'returns expected value' );

	x = new Complex64Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 1, 0, 1 ] ) );
	expected = new Complex64Array( [ 17, 18, 3, 4, 19, 20, 7, 8 ] );
	y[ idx ] = new Complex128Array( [ 17, 18, 0, 0, 19, 20, 0, 0 ] );

	t.strictEqual( isSameComplex64Array( y, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array-like object which throws an error when attempting to assign a broadcast-incompatible array (generic)', function test( t ) {
	var values;
	var idx;
	var x;
	var y;
	var i;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );
	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ), {
		'persist': true
	});

	values = [
		[],
		[ 5, 6 ],
		[ 5, 6, 7 ],
		[ 5, 6, 7, 8, 9 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}

	array2fancy.idx.free( idx );

	t.end();

	function badValue( value ) {
		return function badValue() {
			y[ idx ] = value;
		};
	}
});

tape( 'the function returns an array-like object which throws an error when attempting to assign a broadcast-incompatible array (int32)', function test( t ) {
	var values;
	var idx;
	var x;
	var y;
	var i;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );
	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ), {
		'persist': true
	});

	values = [
		new Int32Array( [] ),
		new Int32Array( [ 5, 6 ] ),
		new Int32Array( [ 5, 6, 7 ] ),
		new Int32Array( [ 5, 6, 7, 8, 9 ] )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}

	array2fancy.idx.free( idx );

	t.end();

	function badValue( value ) {
		return function badValue() {
			y[ idx ] = value;
		};
	}
});

tape( 'the function returns an array-like object which throws an error when attempting to perform an unsafe cast (float64)', function test( t ) {
	var values;
	var idx;
	var x;
	var y;
	var i;

	x = new Float64Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );
	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ), {
		'persist': true
	});

	values = [
		new Complex128Array( [ 5, 6 ] ),
		new Complex128( 5, 6 ),
		'5',
		true,
		false
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}

	array2fancy.idx.free( idx );

	t.end();

	function badValue( value ) {
		return function badValue() {
			y[ idx ] = value;
		};
	}
});

tape( 'the function returns an array-like object which throws an error when attempting to perform an unsafe cast (complex128)', function test( t ) {
	var values;
	var idx;
	var x;
	var y;
	var i;

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );
	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ), {
		'persist': true
	});

	values = [
		'5',
		true,
		false
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}

	array2fancy.idx.free( idx );

	t.end();

	function badValue( value ) {
		return function badValue() {
			y[ idx ] = value;
		};
	}
});

tape( 'the function returns an array-like object which throws an error when attempting to perform an unsafe cast (int32)', function test( t ) {
	var values;
	var idx;
	var x;
	var y;
	var i;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );
	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ), {
		'persist': true
	});

	values = [
		new Uint32Array( [ 1 ] ),
		new Uint32Array( [ 5, 6, 7, 8 ] ),
		new Float64Array( [ 1 ] ),
		new Float64Array( [ 5, 6, 7, 8 ] ),
		new Float32Array( [ 1 ] ),
		new Float32Array( [ 5, 6, 7, 8 ] ),
		new Complex128Array( [ 5, 6 ] ),
		3.14,
		-3.14,
		new Complex128( 5, 6 ),
		'5',
		true,
		false
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}

	array2fancy.idx.free( idx );

	t.end();

	function badValue( value ) {
		return function badValue() {
			y[ idx ] = value;
		};
	}
});

tape( 'the function returns an array-like object which throws an error when attempting to perform an unsafe cast (int8)', function test( t ) {
	var values;
	var idx;
	var x;
	var y;
	var i;

	x = new Int8Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );
	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ), {
		'persist': true
	});

	values = [
		new Int32Array( [ 1 ] ),
		new Int32Array( [ 5, 6, 7, 8 ] ),
		new Float64Array( [ 1 ] ),
		new Float64Array( [ 5, 6, 7, 8 ] ),
		new Float32Array( [ 1 ] ),
		new Float32Array( [ 5, 6, 7, 8 ] ),
		new Complex128Array( [ 5, 6 ] ),
		999999,
		3.14,
		-3.14,
		new Complex128( 5, 6 ),
		'5',
		true,
		false
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}

	array2fancy.idx.free( idx );

	t.end();

	function badValue( value ) {
		return function badValue() {
			y[ idx ] = value;
		};
	}
});

tape( 'the function returns an array-like object which throws an error when attempting to perform an unsafe cast (uint32)', function test( t ) {
	var values;
	var idx;
	var x;
	var y;
	var i;

	x = new Uint32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );
	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ), {
		'persist': true
	});

	values = [
		new Int32Array( [ 1 ] ),
		new Int32Array( [ 5, 6, 7, 8 ] ),
		new Float64Array( [ 1 ] ),
		new Float64Array( [ 5, 6, 7, 8 ] ),
		new Float32Array( [ 1 ] ),
		new Float32Array( [ 5, 6, 7, 8 ] ),
		new Complex128Array( [ 5, 6 ] ),
		-3,
		3.14,
		-3.14,
		new Complex128( 5, 6 ),
		'5',
		true,
		false
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}

	array2fancy.idx.free( idx );

	t.end();

	function badValue( value ) {
		return function badValue() {
			y[ idx ] = value;
		};
	}
});

tape( 'the function returns an array-like object which throws an error when unable to resolve an index array (generic)', opts, function test( t ) {
	var expected;
	var idx;
	var x;
	var y;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ), {
		'persist': false
	});
	expected = [ 5, 6, 7, 8 ];
	y[ idx ] = [ 5, 6, 7, 8 ];

	t.deepEqual( y, expected, 'returns expected value' );

	t.throws( badValue( idx ), Error, 'throws an error' );
	t.end();

	function badValue( value ) {
		return function badValue() {
			y[ value ] = [ 9, 10, 11, 12 ];
		};
	}
});

tape( 'the function returns an array-like object which throws an error when unable to resolve an index array (typed)', opts, function test( t ) {
	var expected;
	var idx;
	var x;
	var y;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ), {
		'persist': false
	});
	expected = new Int32Array( [ 5, 6, 7, 8 ] );
	y[ idx ] = new Int32Array( [ 5, 6, 7, 8 ] );

	t.deepEqual( y, expected, 'returns expected value' );

	t.throws( badValue( idx ), Error, 'throws an error' );
	t.end();

	function badValue( value ) {
		return function badValue() {
			y[ value ] = new Int32Array( [ 9, 10, 11, 12 ] );
		};
	}
});

tape( 'the function returns an array-like object which supports persisted index arrays (generic)', opts, function test( t ) {
	var expected;
	var idx;
	var x;
	var y;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ), {
		'persist': true
	});
	expected = [ 5, 6, 7, 8 ];

	y[ idx ] = [ 5, 6, 7, 8 ];
	t.deepEqual( y, expected, 'returns expected value' );

	expected = [ 9, 10, 11, 12 ];

	y[ idx ] = [ 9, 10, 11, 12 ];
	t.deepEqual( y, expected, 'returns expected value' );

	array2fancy.idx.free( idx );

	t.end();
});

tape( 'the function returns an array-like object which supports persisted index arrays (typed)', opts, function test( t ) {
	var expected;
	var idx;
	var x;
	var y;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	idx = array2fancy.idx( new Uint8Array( [ 0, 0, 0, 0 ] ), {
		'persist': true
	});
	expected = new Int32Array( [ 5, 6, 7, 8 ] );

	y[ idx ] = new Int32Array( [ 5, 6, 7, 8 ] );
	t.deepEqual( y, expected, 'returns expected value' );

	expected = new Int32Array( [ 9, 10, 11, 12 ] );

	y[ idx ] = new Int32Array( [ 9, 10, 11, 12 ] );
	t.deepEqual( y, expected, 'returns expected value' );

	array2fancy.idx.free( idx );

	t.end();
});
