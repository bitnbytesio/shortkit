# shortkit
Shortkit.js requires js to work.

**structure**

$.shortkit(map, ctrl, alt, shift)

```javascript

$.shortkit({
	't' : function () {
		alert('t is pressed with alt key down');
	},
	'l': function () {
	  alert('l is pressed with alt key down');
	}
}, false, true, false);

$.shortkit({
	'C' : function () {
		alert('c is pressed with shift key down');
	}
}, false, false, true);


```
