import React from 'react';
import SingleFormInput from './SingleFormInput'

export default React.createClass({
	getInitialState: function() {
		return ({content: this.props.children.content})
	},
	onChangeHandler: function(e) {
		this.setState({content: e.target.value})
	},
	editTodo: function(text) {
		this.setState({content: text})
		this.props.onEditHandler(this.props.children, text)
		return ""
	},
	render: function() {
		var todo = this.props.children
		var done = (todo.done ? "[x]" : "[ ]")

		var x = {}
		
		if (this.props.editing) {
			x = (
				<SingleFormInput
					autoFocus={true}
					value={this.state.content}
					noButton={true}
					onSubmitHandler={this.editTodo} />
			)
		}
		else {
			x = (<code onDoubleClick={this.props.onDoubleClickHandler(todo)}>{todo.content}</code>)
		}
		
		return (
			<div>
				{x}
				<button onClick={this.props.onDoneHandler(todo)}>{done}</button>
				<button onClick={this.props.onDeleteHandler(todo)}>DELETE</button>
			</div>
		)
	}
})
