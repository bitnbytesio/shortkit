'use strict';

(function ($, window, document, undefined) {

var virtual_key_codes = {

	"enter": 13,
	"A": 65,
	"a" : 97,
	"B": 66,
	"b" :98,
	"C": 67,
	"c" :99,
	"D": 68,
	"d": 100,
	"E": 69,
	"e" :101,
	"F": 70,
	"f":102,
	"G": 71,
	"g" :103,
	"H": 72,
	"h": 104,
	"I": 73,
	"i":105,
	"J": 74,
	"j" :106,
	"K": 75,
	"k" :107,
	"L": 76,
	"l": 108,
	"M": 77,
	"m" :109,
	"N": 78,
	"n": 110,
	"O": 79,
	"o":111,
	"P": 80,
	"p":112,
	"Q": 81,
	"q":113,
	"R": 82,
	"r":114,
	"S": 83,
	"s":115,
	"T": 84,
	"t":116,
	"U": 85,
	"u" :117,
	"V": 86,
	"v":118,
	"W": 87,
	"w":119,
	"X": 88,
	"x" :120,
	"Y": 89,
	"y":121,
	"Z": 90,
	"z":122,
	"backspace": 8,
	"tab": 9,
	"pause": 19,
	"esc": 27,
	"space": 32,
	"page_up": 33,
	"page_down": 34,
	"end": 35,
	"home": 36,
	"left_arrow": 37,
	"up_arrow": 38,
	"right_arrow": 39,
	"down_arrow": 40,
	"insert": 45,
	"delete" : 46,
	"0": 48,
	"1": 49,
	"2": 50,
	"3": 51,
	"4": 52,
	"5": 53,
	"6": 54,
	"7" :55,
	"8" : 56,
	"9" : 57,
	"num_*" : 106,
	"num_+" :107,
	"num_-": 109,
	"num_." : 110,
	"/" :111,
	";" : 186,
	"=": 187,
	",": 188,
	"-" :189,
	".": 190,
	"/": 191,
	"[" : 219,
	"]": 221


};


function shortKitMap(map, ctrl, alt, shift) {

	this.map = {};

	for (var index in map) {
		if (typeof virtual_key_codes[index] !== 'undefined') {
			var code = virtual_key_codes[index];
			this.map[code] = map[index];
		}
	}


	var instance = this;

	var is_ctrl = typeof ctrl === 'boolean' ? ctrl : false;

	var is_alt = typeof alt === 'boolean' ? alt : false;

	var is_shift = typeof shift === 'boolean' ? shift : false;


	$(window).keypress(function(e){

		e.preventDefault();

		var key = e.which;
		var ctrl = e.ctrlKey;
		var alt = e.altKey;
		var shift = e.shiftKey;

   		if(typeof instance.map[key] === 'function'  && ctrl == is_ctrl && alt == is_alt && shift == is_shift){
    		
    			instance.map[key]();
    		
    	} 

	});

}

$.shortkit = function (map, ctrl, alt, shift) {


	new shortKitMap(map, ctrl, alt, shift);

};


})(window.jQuery || window.Zepto, window, document);
