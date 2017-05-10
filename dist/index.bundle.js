(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return webpackJsonp([0],{

/***/ 4:
/***/ (function(module, exports) {

function base() {
  console.log( 'constructer' );
}

base.prototype = {
  echo : function( str ){
    console.log( str + ' module!' );
  }
};

module.exports = base;


/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

document.write("It works.");

base = __webpack_require__( 4 );

base.echo( 'sanma 2.0' );

document.write("It works.");


/***/ })

},[7]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9tb2R1bGVzL21vZHVsZTEuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7O0FDVkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDVkE7O0FBRUE7O0FBRUE7O0FBRUEiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJmdW5jdGlvbiBiYXNlKCkge1xuICBjb25zb2xlLmxvZyggJ2NvbnN0cnVjdGVyJyApO1xufVxuXG5iYXNlLnByb3RvdHlwZSA9IHtcbiAgZWNobyA6IGZ1bmN0aW9uKCBzdHIgKXtcbiAgICBjb25zb2xlLmxvZyggc3RyICsgJyBtb2R1bGUhJyApO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9tb2R1bGVzL21vZHVsZTEuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZG9jdW1lbnQud3JpdGUoXCJJdCB3b3Jrcy5cIik7XG5cbmJhc2UgPSByZXF1aXJlKCAnLi9tb2R1bGVzL21vZHVsZTEnICk7XG5cbmJhc2UuZWNobyggJ3Nhbm1hIDIuMCcgKTtcblxuZG9jdW1lbnQud3JpdGUoXCJJdCB3b3Jrcy5cIik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9tYWluLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=