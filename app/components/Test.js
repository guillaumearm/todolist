import React from 'react';

export default class Test extends React.Component {
	constructor(props) { super(props); }
	render() { 
		var x = "NOP";
		var e = this.props.children[0];
		var done = function(x) {return (x) ? "[x]" : "[ ]"};
		if (e) { x = e.content + " " + done(e.done) }
		return ( <h1>{x}</h1> )
	}
}

