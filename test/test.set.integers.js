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
var Uint32Array = require( '@stdlib/array-uint32' );
var Int8Array = require( '@stdlib/array-int8' );
var Int32Array = require( '@stdlib/array-int32' );
var Float64Array = require( '@stdlib/array-float64' );
var Complex64Array = require( '@stdlib/array-complex64' );
var Complex128Array = require( '@stdlib/array-complex128' );
var BooleanArray = require( '@stdlib/array-bool' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );
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

tape( 'the function returns an array-like object supporting individual element assignment (generic, positive integer indices)', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	expected = [ 2, 4, 6, 8 ];

	for ( i = 0; i < x.length; i++ ) {
		y[ i ] *= 2;
		t.strictEqual( y[ i ], x[ i ], 'returns expected value' );
		t.strictEqual( y[ i ], expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an array-like object supporting individual element assignment (int32, positive integer indices)', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Int32Array( [ 2, 4, 6, 8 ] );

	for ( i = 0; i < x.length; i++ ) {
		y[ i ] *= 2;
		t.strictEqual( y[ i ], x[ i ], 'returns expected value' );
		t.strictEqual( y[ i ], expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an array-like object supporting individual element assignment (bool, positive integer indices)', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = new BooleanArray( [ 0, 1, 0, 1 ] );
	y = array2fancy( x );

	expected = new BooleanArray( [ 1, 1, 1, 1 ] );

	for ( i = 0; i < x.length; i++ ) {
		y[ i ] = true;
		t.strictEqual( y[ i ], x.get( i ), 'returns expected value' );
		t.strictEqual( y[ i ], expected.get( i ), 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an array-like object supporting individual element assignment (complex128, positive integer indices)', function test( t ) {
	var expected;
	var x;
	var y;
	var v;
	var i;
	var j;

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	expected = new Complex128Array( [ 9, 10, 11, 12, 13, 14, 15, 16 ] );

	for ( i = 0; i < x.length; i++ ) {
		j = 2 * i;
		v = new Complex128( j+9, j+10 );
		y[ i ] = v;
	}
	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns an array-like object supporting floating-point downcasting (complex64, positive integer indices)', function test( t ) {
	var expected;
	var x;
	var y;
	var v;
	var i;
	var j;

	x = new Complex64Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	expected = new Complex64Array( [ 9, 10, 11, 12, 13, 14, 15, 16 ] );

	for ( i = 0; i < x.length; i++ ) {
		j = 2 * i;
		v = new Complex128( j+9, j+10 );
		y[ i ] = v;
	}
	t.strictEqual( isSameComplex64Array( y, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns an array-like object supporting floating-point upcasting (complex128, positive integer indices)', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	expected = new Complex128Array( [ 9, 0, 10, 0, 11, 0, 12, 0 ] );

	for ( i = 0; i < x.length; i++ ) {
		y[ i ] = i + 9;
	}
	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns an array-like object supporting individual element assignment (generic, negative integer indices)', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var i;
	var j;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	expected = [ 2, 4, 6, 8 ];

	for ( i = 0; i < x.length; i++ ) {
		j = i - x.length;
		y[ j ] *= 2;
		t.strictEqual( y[ j ], x[ i ], 'returns expected value' );
		t.strictEqual( y[ j ], expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an array-like object supporting individual element assignment (int32, negative integer indices)', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var i;
	var j;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	expected = new Int32Array( [ 2, 4, 6, 8 ] );

	for ( i = 0; i < x.length; i++ ) {
		j = i - x.length;
		y[ j ] *= 2;
		t.strictEqual( y[ j ], x[ i ], 'returns expected value' );
		t.strictEqual( y[ j ], expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an array-like object supporting individual element assignment (bool, negative integer indices)', function test( t ) {
	var expected;
	var x;
	var y;
	var i;
	var j;

	x = new BooleanArray( [ 0, 1, 0, 1 ] );
	y = array2fancy( x );

	expected = new BooleanArray( [ 1, 1, 1, 1 ] );

	for ( i = 0; i < x.length; i++ ) {
		j = i - x.length;
		y[ j ] = true;
		t.strictEqual( y[ j ], x.get( i ), 'returns expected value' );
		t.strictEqual( y[ j ], expected.get( i ), 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an array-like object supporting individual element assignment (complex128, negative integer indices)', function test( t ) {
	var expected;
	var x;
	var y;
	var v;
	var i;
	var j;

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	expected = new Complex128Array( [ 9, 10, 11, 12, 13, 14, 15, 16 ] );

	for ( i = 0; i < x.length; i++ ) {
		j = 2 * i;
		v = new Complex128( j+9, j+10 );
		y[ i-x.length ] = v;
	}
	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns an array-like object supporting floating-point downcasting (complex64, negative integer indices)', function test( t ) {
	var expected;
	var x;
	var y;
	var v;
	var i;
	var j;

	x = new Complex64Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	expected = new Complex64Array( [ 9, 10, 11, 12, 13, 14, 15, 16 ] );

	for ( i = 0; i < x.length; i++ ) {
		j = 2 * i;
		v = new Complex128( j+9, j+10 );
		y[ i-x.length ] = v;
	}
	t.strictEqual( isSameComplex64Array( y, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns an array-like object supporting floating-point upcasting (complex128, negative integer indices)', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	y = array2fancy( x );

	expected = new Complex128Array( [ 9, 0, 10, 0, 11, 0, 12, 0 ] );

	for ( i = 0; i < x.length; i++ ) {
		y[ i-x.length ] = i + 9;
	}
	t.strictEqual( isSameComplex128Array( y, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'by default, the function returns an array-like object which performs normal property assignment when provided an integer index which is out-of-bounds (generic, positive integer indices)', function test( t ) {
	var idx;
	var x;
	var y;
	var i;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	for ( i = 0; i < 10; i++ ) {
		idx = x.length + i;
		y[ idx ] = i;
		t.strictEqual( y[ idx ], i, 'returns expected value' );
	}
	t.end();
});

tape( 'by default, the function returns an array-like object which performs normal property assignment when provided an integer index which is out-of-bounds (int32, positive integer indices)', function test( t ) {
	var idx;
	var x;
	var y;
	var i;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	for ( i = 0; i < 10; i++ ) {
		idx = x.length + i;
		y[ idx ] = i;

		// Normal behavior for typed arrays is to NOT support out-of-bounds assignment:
		t.strictEqual( y[ idx ], void 0, 'returns expected value' );
	}
	t.end();
});

tape( 'by default, the function returns an array-like object which performs normal property assignment when provided an integer index which is out-of-bounds (generic, negative integer indices)', function test( t ) {
	var idx;
	var x;
	var y;
	var i;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	for ( i = 0; i < 10; i++ ) {
		idx = -( i + x.length + 1 );
		y[ idx ] = i;
		t.strictEqual( y[ idx ], i, 'returns expected value' );
	}
	t.end();
});

tape( 'by default, the function returns an array-like object which performs normal property assignment when provided an integer index which is out-of-bounds (int32, negative integer indices)', function test( t ) {
	var idx;
	var x;
	var y;
	var i;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	for ( i = 0; i < 10; i++ ) {
		idx = -( i + x.length + 1 );
		y[ idx ] = i;

		// Normal behavior for typed arrays is to NOT support out-of-bounds assignment:
		t.strictEqual( y[ idx ], void 0, 'returns expected value' );
	}
	t.end();
});

tape( 'when `strict` is `false`, the function returns an array-like object which performs normal property assignment when provided an integer index which is out-of-bounds (generic, positive integer indices)', function test( t ) {
	var idx;
	var x;
	var y;
	var i;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x, {
		'strict': false
	});

	for ( i = 0; i < 10; i++ ) {
		idx = x.length + i;
		y[ idx ] = i;
		t.strictEqual( y[ idx ], i, 'returns expected value' );
	}
	t.end();
});

tape( 'when `strict` is `false`, the function returns an array-like object which performs normal property assignment when provided an integer index which is out-of-bounds (int32, positive integer indices)', function test( t ) {
	var idx;
	var x;
	var y;
	var i;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x, {
		'strict': false
	});

	for ( i = 0; i < 10; i++ ) {
		idx = x.length + i;
		y[ idx ] = i;

		// Normal behavior for typed arrays is to NOT support out-of-bounds assignment:
		t.strictEqual( y[ idx ], void 0, 'returns expected value' );
	}
	t.end();
});

tape( 'when `strict` is `false`, the function returns an array-like object which performs normal property assignment when provided an integer index which is out-of-bounds (generic, negative integer indices)', function test( t ) {
	var idx;
	var x;
	var y;
	var i;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x, {
		'strict': false
	});

	for ( i = 0; i < 10; i++ ) {
		idx = -( i + x.length + 1 );
		y[ idx ] = i;
		t.strictEqual( y[ idx ], i, 'returns expected value' );
	}
	t.end();
});

tape( 'when `strict` is `false`, the function returns an array-like object which performs normal property assignment when provided an integer index which is out-of-bounds (int32, negative integer indices)', function test( t ) {
	var idx;
	var x;
	var y;
	var i;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x, {
		'strict': false
	});

	for ( i = 0; i < 10; i++ ) {
		idx = -( i + x.length + 1 );
		y[ idx ] = i;

		// Normal behavior for typed arrays is to NOT support out-of-bounds assignment:
		t.strictEqual( y[ idx ], void 0, 'returns expected value' );
	}
	t.end();
});

tape( 'when `strict` is `true`, the function returns an array-like object which throws an error when provided an integer index which is out-of-bounds (generic, positive integer indices)', opts, function test( t ) {
	var idx;
	var x;
	var y;
	var i;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x, {
		'strict': true
	});

	for ( i = 0; i < 10; i++ ) {
		idx = x.length + i;
		t.throws( badValue( idx ), RangeError, 'throws an error when provided ' + idx );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			y[ value ] = 0;
		};
	}
});

tape( 'when `strict` is `true`, the function returns an array-like object which throws an error when provided an integer index which is out-of-bounds (int32, positive integer indices)', opts, function test( t ) {
	var idx;
	var x;
	var y;
	var i;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x, {
		'strict': true
	});

	for ( i = 0; i < 10; i++ ) {
		idx = x.length + i;
		t.throws( badValue( idx ), RangeError, 'throws an error when provided ' + idx );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			y[ value ] = 0;
		};
	}
});

tape( 'when `strict` is `true`, the function returns an array-like object which throws an error when provided an integer index which is out-of-bounds (generic, negative integer indices)', opts, function test( t ) {
	var idx;
	var x;
	var y;
	var i;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x, {
		'strict': true
	});

	for ( i = 0; i < 10; i++ ) {
		idx = -( i + x.length + 1 );
		t.throws( badValue( idx ), RangeError, 'throws an error when provided ' + idx );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			y[ value ] = 0;
		};
	}
});

tape( 'when `strict` is `true`, the function returns an array-like object which throws an error when provided an integer index which is out-of-bounds (int32, negative integer indices)', opts, function test( t ) {
	var idx;
	var x;
	var y;
	var i;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x, {
		'strict': true
	});

	for ( i = 0; i < 10; i++ ) {
		idx = -( i + x.length + 1 );
		t.throws( badValue( idx ), RangeError, 'throws an error when provided ' + idx );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			y[ value ] = 0;
		};
	}
});

tape( 'the function returns an array-like object which throws an error when attempting to perform an unsafe cast (float64)', function test( t ) {
	var values;
	var x;
	var y;
	var i;

	x = new Float64Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	values = [
		new Complex128( 5, 6 ),
		'5',
		true,
		false
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			y[ 0 ] = value;
		};
	}
});

tape( 'the function returns an array-like object which throws an error when attempting to perform an unsafe cast (int32)', function test( t ) {
	var values;
	var x;
	var y;
	var i;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	values = [
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
	t.end();

	function badValue( value ) {
		return function badValue() {
			y[ 0 ] = value;
		};
	}
});

tape( 'the function returns an array-like object which throws an error when attempting to perform an unsafe cast (int8)', function test( t ) {
	var values;
	var x;
	var y;
	var i;

	x = new Int8Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	values = [
		99999,
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
	t.end();

	function badValue( value ) {
		return function badValue() {
			y[ 0 ] = value;
		};
	}
});

tape( 'the function returns an array-like object which throws an error when attempting to perform an unsafe cast (uint32)', function test( t ) {
	var values;
	var x;
	var y;
	var i;

	x = new Uint32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	values = [
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
	t.end();

	function badValue( value ) {
		return function badValue() {
			y[ 0 ] = value;
		};
	}
});

tape( 'the function returns an array-like object which throws an error when attempting to perform an unsafe cast (bool)', function test( t ) {
	var values;
	var x;
	var y;
	var i;

	x = new BooleanArray( [ 0, 1, 0, 1 ] );
	y = array2fancy( x );

	values = [
		3.14,
		-3.14,
		new Complex128( 5, 6 ),
		'5',
		null,
		1
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			y[ 0 ] = value;
		};
	}
});
