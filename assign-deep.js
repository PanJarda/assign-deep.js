/**
 * assignDeep
 * 
 * same as Object.assign, except deep merging nested objects
 * 
 * (c) JP 2020
 */
( function( global, factory ) {
	"use strict";
	if ( typeof module === "object" && typeof module.exports === "object" ) {
		module.exports = factory( global, true );
	} else {
		factory( global );
	}
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	"use strict";

	var assignDeep = ( function() {

		function copyvalue( key ) {
			if ( this.of.hasOwnProperty( key ) ) {
				if ( typeof this.of[ key ] === "object" ) {
					assignDeep( this.to[ key ], this.of[ key ] );
				} else {
					this.to[ key ] = this.of[ key ];
				}
			}
		}
		
		function mergeto( source ) {
			if ( !source )
				return;
			
			var keys = Object.keys( source );
			
			keys.forEach( copyvalue, { of: source, to: this } );
		}
		
		function assignDeep( target ) {
			if ( !target )
				throw new TypeError( "Cannot convert undefined or null" + 
					" to object" );
			
			var sources = Array.prototype.slice.call( arguments, 1 );
			
			sources.forEach( mergeto, target );
			
			return target;
		};

		return assignDeep;
	})();

	if ( !noGlobal ) {
		window.assignDeep = assignDeep;
	}

	return assignDeep;
});