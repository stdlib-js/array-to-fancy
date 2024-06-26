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
var Int32Array = require( '@stdlib/array-int32' );
var Uint8Array = require( '@stdlib/array-uint8' );
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

tape( 'the function returns an array-like object which throws an error when provided an invalid serialized slice (generic)', opts, function test( t ) {
	var values;
	var x;
	var y;
	var i;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	values = [
		'Slice(a,b,c)',
		'Slice(1.5)',
		'Slice(0,1,0)'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			y[ value ] = 0;
		};
	}
});

tape( 'the function returns an array-like object which throws an error when provided an invalid serialized slice (typed)', opts, function test( t ) {
	var values;
	var x;
	var y;
	var i;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	values = [
		'Slice(a,b,c)',
		'Slice(1.5)',
		'Slice(0,1,0)'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			y[ value ] = 0;
		};
	}
});

tape( 'the function returns an array-like object which throws an error when provided an invalid subsequence indexing expression (generic)', opts, function test( t ) {
	var values;
	var x;
	var y;
	var i;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	values = [
		'a:b:c',
		':1.5',
		'0:1:0',
		':::',
		'0:1:1:2'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			y[ value ] = 0;
		};
	}
});

tape( 'the function returns an array-like object which throws an error when provided an invalid subsequence indexing expression (typed)', opts, function test( t ) {
	var values;
	var x;
	var y;
	var i;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	values = [
		'a:b:c',
		':1.5',
		'0:1:0',
		':::',
		'0:1:1:2'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			y[ value ] = 0;
		};
	}
});

tape( 'the function returns an array-like object which throws an error when provided an invalid serialized array index (generic)', opts, function test( t ) {
	var values;
	var x;
	var y;
	var i;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	values = [
		'ArrayIndex<9999999>',
		'ArrayIndex<9999999999>'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			y[ value ] = 0;
		};
	}
});

tape( 'the function returns an array-like object which throws an error when provided an invalid serialized array index (typed)', opts, function test( t ) {
	var values;
	var x;
	var y;
	var i;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	values = [
		'ArrayIndex<9999999>',
		'ArrayIndex<9999999999>'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			y[ value ] = 0;
		};
	}
});

tape( 'the function returns an array-like object which throws an error when provided an unsupported array index (generic)', opts, function test( t ) {
	var values;
	var x;
	var y;
	var i;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x, {
		'cache': {
			'get': get
		}
	});

	values = [
		array2fancy.idx( [ 0, 1, 2, 3 ] ),
		array2fancy.idx( [ true, false, true, false ] ),
		array2fancy.idx( new Uint8Array( [ 0, 1, 0, 1 ] ) )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			y[ value ] = 0;
		};
	}

	function get() {
		return {
			'data': [],
			'type': 'beep',
			'dtype': 'generic'
		};
	}
});

tape( 'the function returns an array-like object which throws an error when provided an unsupported array index (typed)', opts, function test( t ) {
	var values;
	var x;
	var y;
	var i;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x, {
		'cache': {
			'get': get
		}
	});

	values = [
		array2fancy.idx( [ 0, 1, 2, 3 ] ),
		array2fancy.idx( [ true, false, true, false ] ),
		array2fancy.idx( new Uint8Array( [ 0, 1, 0, 1 ] ) )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			y[ value ] = 0;
		};
	}

	function get() {
		return {
			'data': [],
			'type': 'beep',
			'dtype': 'generic'
		};
	}
});
