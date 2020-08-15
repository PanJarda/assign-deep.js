/**
 * assignDeep
 * 
 * same as Object.assign, except deep merging nested objects
 * 
 * (c) JP 2020
 * 
 * Example:
 * 
 *   assignDeep( target, source1, source2, ..., sourceN );
 * 
 */
( function( global, factory ) {
	"use strict";
	
	if ( typeof module === "object" && typeof module.exports === "object" ) {
		module.exports = factory( global, true );
	} else {
		factory( global );
	}
} )( typeof window !== "undefined" ? window : this, function( window, global ) {
	"use strict";

	function copyValue( key ) {
		if ( !this.from.hasOwnProperty( key ) )
			return;
		
		if ( typeof this.from[ key ] === "object" ) {
			if (!( key in this.to )) {
				this.to[ key ] = {};
			}

			return assignDeep( this.to[ key ], this.from[ key ] );
		}
		
		this.to[ key ] = this.from[ key ];
	}
	
	function mergeTo( source ) {
		if ( !source )
			return;
		
		var keys = Object.keys( source );
		
		keys.forEach( copyValue, { from: source, to: this } );
	}

	function assignDeep( target, source1, source2, sourceN ) {
		if ( !target )
			return "Cannot convert undefined or null to object";
		
		var sources = Array.prototype.slice.call( arguments, 1 );
		
		sources.forEach( mergeTo, target );

		return false;
	}
	
	if ( !global )
		window.assignDeep = assignDeep;

	return assignDeep;
});
