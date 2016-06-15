webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	document.write("It works.");
	
	base = __webpack_require__( 1 );
	
	base.echo( 'sanma' );
	
	document.write("It works.");


/***/ },
/* 1 */
/***/ function(module, exports) {

	function base() {
	  console.log( 'constructer' );
	}
	
	base.prototype = {
	  echo : function( str ){
	    console.log( str + ' module!' );
	  }
	};
	
	module.exports = base;


/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZS9tYWluLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlL21vZHVsZXMvbW9kdWxlMS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC53cml0ZShcIkl0IHdvcmtzLlwiKTtcblxuYmFzZSA9IHJlcXVpcmUoICcuL21vZHVsZXMvbW9kdWxlMScgKTtcblxuYmFzZS5lY2hvKCAnc2FubWEnICk7XG5cbmRvY3VtZW50LndyaXRlKFwiSXQgd29ya3MuXCIpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3Jlc291cmNlL21haW4uanNcbiAqKiBtb2R1bGUgaWQgPSAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJmdW5jdGlvbiBiYXNlKCkge1xuICBjb25zb2xlLmxvZyggJ2NvbnN0cnVjdGVyJyApO1xufVxuXG5iYXNlLnByb3RvdHlwZSA9IHtcbiAgZWNobyA6IGZ1bmN0aW9uKCBzdHIgKXtcbiAgICBjb25zb2xlLmxvZyggc3RyICsgJyBtb2R1bGUhJyApO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2U7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vcmVzb3VyY2UvbW9kdWxlcy9tb2R1bGUxLmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==