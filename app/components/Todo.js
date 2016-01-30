import React from 'react';
import SingleFormInput from './SingleFormInput';

export default class Todo extends React.Component {
	state = {
		content: this.props.children.content
	};

	changeText = (e) => {
		this.setState({content: e.target.value})
	};

	editTodo = (e) => {
		let input = e.target[0]

		this.setState({content: input.value})
		this.props.onEditHandler(this.props.children, input.value)
		return ""
	};

	render() { 
		let todo = this.props.children
		let done = (todo.done ? "[x]" : "[ ]")

		let entry = {}
		
		if (this.props.editing) {
			entry = (
				<SingleFormInput
					value={this.state.content}
					noButton={true}
					submitHandler={this.editTodo}
					changeHandler={this.changeText}
				/>
			)
		}
		else {
			entry = (<code onDoubleClick={this.props.onDoubleClickHandler(todo)}>{todo.content}</code>)
		}
		
		return (
			<div>
				{entry}
				<button onClick={this.props.onDoneHandler(todo)}>{done}</button>
				<button onClick={this.props.onDeleteHandler(todo)}>DELETE</button>
			</div>
		)
	}
}

