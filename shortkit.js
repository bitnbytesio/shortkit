'use strict';

if ("undefined" === typeof jQuery)
    throw new Error("Shortkit.js requires jQuery to work");
    
(function ($, window, document, undefined) {

function shortKitMap(map, ctrl, alt, shift) {

	this.map = {};

	$.extend(this.map, map);

	var instance = this;

	var is_ctrl = typeof ctrl === 'boolean' ? ctrl : false;

	var is_alt = typeof alt === 'boolean' ? alt : false;

	var is_shift = typeof shift === 'boolean' ? shift : false;


	$(window).keypress(function(e){

		var key = e.key.toLowerCase();
		var ctrl = e.ctrlKey;
		var alt = e.altKey;
		var shift = e.shiftKey;

   		if(typeof instance.map[key] === 'function'  && ctrl == is_ctrl && alt == is_alt && shift == is_shift){
    		instance.map[key]();
            e.preventDefault();

        }

	});

}

$.shortkit = function (map, ctrl, alt, shift) {

	new shortKitMap(map, ctrl, alt, shift);

};


})(window.jQuery || window.Zepto, window, document);
