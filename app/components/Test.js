import React from 'react';

var Test = React.createClass({
	render: function() {
		var x = "NOP";
		var e = this.props.children[0];
		var done = function(x) {return (x) ? "[x]" : "[ ]"};
		if (e) { x = e.content + " " + done(e.done) }
		return (<code>{x}</code>)
	}
})

export default Test
