import React from 'react';

export default React.createClass({
	render: function() {
		var todo = this.props.children
		var isDone = function(x) {return (x) ? "[x]" : "[ ]"}
		var x = ""

		if (todo) { x = todo.content + " " + isDone(todo.done) }

		return (<p><code style={this.props.style}>{x}</code></p>)
	}
})
