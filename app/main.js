import React from 'react';
import ReactDOM from 'react-dom';
import TodoModel from './models/TodoModel';

import './css/base.css'

document.cookie = JSON.stringify([]);
var todo = new TodoModel();
todo.add("Hello World.");
todo.add("Hello World 2.");
todo.add("Hello World 3.");
todo.done(0);
todo.done(1);

var Test = React.createClass({
	render: function() { 
		var x = "NOP";
		var e = this.props.children[0];
		var done = function(x) {return (x) ? "[x]" : "[ ]"};
		if (e) { x = e.content + " " + done(e.done) }
		return ( <h1>{x}</h1> )
	}
});

ReactDOM.render(
	<Test>{todo.data}</Test>,
	document.querySelector("#todoAppContent")
);
