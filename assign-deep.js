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
		module.exports = factory( global );
	} else {
		factory( global, true );
	}
} )( typeof window !== "undefined" ? window : this, function( window, global ) {
	"use strict";

	var assignDeep = ( function() {

		function copyValue( key ) {
			if ( !this.from.hasOwnProperty( key ) )
				return;
			
			if ( typeof this.from[ key ] === "object" )
				return assignDeep( this.to[ key ], this.from[ key ] );
			
			this.to[ key ] = this.from[ key ];
		}
		
		function mergeTo( source ) {
			if ( !source )
				return;
			
			var keys = Object.keys( source );
			
			keys.forEach( copyValue, { from: source, to: this } );
		}
		
		function assignDeep( target ) {
			if ( !target )
				throw new TypeError(
					"Cannot convert undefined or null to object" );
			
			var sources = Array.prototype.slice.call( arguments, 1 );
			
			sources.forEach( mergeTo, target );
			
			return target;
		};

		return assignDeep;
	})();

	if ( !global )
		window.assignDeep = assignDeep;

	return assignDeep;
});