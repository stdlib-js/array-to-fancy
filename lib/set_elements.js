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

var isMostlySafeCast = require( '@stdlib/array-base-assert-is-mostly-safe-data-type-cast' );
var isRealDataType = require( '@stdlib/array-base-assert-is-real-data-type' );
var isComplexDataType = require( '@stdlib/array-base-assert-is-complex-floating-point-data-type' );
var isCollection = require( '@stdlib/assert-is-collection' );
var scalar2array = require( '@stdlib/array-from-scalar' );
var dtype = require( '@stdlib/array-dtype' );
var put = require( '@stdlib/array-put' );
var place = require( '@stdlib/array-place' );
var convert = require( '@stdlib/array-convert' );
var where = require( '@stdlib/array-base-where' ).assign;
var format = require( '@stdlib/string-format' );
var prop2array = require( './prop2array.js' );
var errMessage = require( './error_message.js' );


// MAIN //

/**
* Replaces the elements specified by an array index.
*
* @private
* @param {Object} target - target object
* @param {string} property - index string
* @param {*} value - new value(s)
* @param {Object} ctx - context object
* @param {string} ctx.dtype - array data type
* @param {Object} ctx.cache - cache for resolving array index objects
* @param {Function} ctx.validator - function for validating new values
* @param {(Function|null)} ctx.preSetElement - function for normalizing new values (if necessary)
* @throws {Error} invalid array index
* @throws {RangeError} index exceeds array bounds
* @throws {Error} assigned value must be broadcast compatible with target array selection
* @throws {TypeError} assigned value cannot be safely cast to the target array data type
* @throws {TypeError} target array must have a supported data type
* @returns {boolean} boolean indicating whether assignment succeeded
*/
function setElements( target, property, value, ctx ) {
	var tdt;
	var vdt;
	var idx;
	var err;
	var v;

	idx = prop2array( property, ctx.cache );
	tdt = ctx.dtype || 'generic';
	if ( isCollection( value ) ) {
		// When handling collections, we delegate to implementation APIs (see below) to perform argument validation (e.g., ensuring a (mostly) safe cast, broadcast compatibility, etc), so we just reassign the value here:
		v = value;
	} else {
		// When provided a "scalar", we need to check whether the value can be safely cast to the target array data type:
		err = ctx.validator( value, tdt );
		if ( err ) {
			throw err;
		}
		if ( ctx.preSetElement ) {
			v = ctx.preSetElement( value );
		} else {
			v = value;
		}
		// As the scalar can be safely cast, convert the scalar to an array having the same data type as the target array to allow for broadcasting during assignment:
		v = scalar2array( v, tdt );
		vdt = tdt;
	}
	if ( idx.type === 'int' ) {
		try {
			put( target, idx.data, v ); // note: defer to `put` for ensuring a mostly safe cast
		} catch ( err ) {
			throw new err.constructor( errMessage( err.message ) );
		}
		return true;
	}
	if ( idx.type === 'bool' ) {
		try {
			place( target, idx.data, v, {
				'mode': 'strict_broadcast'
			});
		} catch ( err ) {
			throw new err.constructor( errMessage( err.message ) );
		}
		return true;
	}
	if ( vdt === void 0 ) {
		vdt = dtype( value ) || 'generic';
	}
	// Safe casts are always allowed and allow same kind casts (i.e., downcasts) only when the target array data type is floating-point...
	if ( !isMostlySafeCast( vdt, tdt ) ) {
		throw new TypeError( format( 'invalid operation. Assigned value cannot be safely cast to the target array data type. Data types: [%s, %s].', vdt, tdt ) );
	}
	// When performing a real-to-complex assignment, interpret the real-valued array as containing real components with implied imaginary components equal to zero and explicitly convert to a complex-valued array...
	if ( isComplexDataType( tdt ) && isRealDataType( vdt ) ) {
		v = convert( v, tdt );
	}
	if ( idx.type === 'mask' ) {
		// NOTE: we intentionally deviate from boolean array indexing here and interpret the mask as applying to both the target and values array, thus requiring that the assigned value array be broadcast compatible with the target array and NOT just the selected elements as in boolean array indexing
		try {
			where( idx.data, target, v, target, 1, 0 );
		} catch ( err ) {
			throw new err.constructor( errMessage( err.message ) );
		}
		return true;
	}
	throw new Error( format( 'invalid operation. Unrecognized array index type. Value: `%s`.', idx.type ) );
}


// EXPORTS //

module.exports = setElements;
