import React from 'react';

var Test = React.createClass({
	render: function(){
		var x = "NOP";
		var e = this.props.children[0];
		var done = function(x) {return (x) ? "[X]" : "[ ]"};
		if (e) { x = e.content + " " + done(e.done) }
		return ( <h1>{x}</h1> )
	}
})

export default Test;
