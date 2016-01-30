import React from 'react';
import Todo from './Todo';
import SingleFormInput from './SingleFormInput';

export default React.createClass({
	addTodo: function(e) {
		let input = e.target[0]
		let text = input.value

		text = text.trim()
		input.focus()
		if (text) {
			this.state.model.add(text)
			this.forceUpdate()
		}
		input.value = ""
	},
	doneTodo: function(todo) {
		return (e) => {
			if (todo.done)
				this.state.model.undo(todo.id)
			else
				this.state.model.done(todo.id)
			this.forceUpdate()
		}
	},
	delTodo: function(todo) { 
		return (e) => {
			this.state.model.del(todo.id)
			this.forceUpdate()
		}
	},
	editTodo: function(todo, newContent) {
		this.state.model.update(todo.id, newContent)
		this.state.model.setEditingState(todo.id, false);
		this.forceUpdate()
	},
	doubleClickTodo: function (todo) {
		return (e) => {
			this.state.model.setEditingState(todo.id, true);
			this.forceUpdate()
		}
	},

	getInitialState: function() {
		return ({model: this.props.model})
	},
	setFocus: function(input) {
		if (input) {
			input.focus()
		}
	},
	render: function() {
		let todos = this.state.model.data.map((todo) => {
			return (
				<Todo
					onDoneHandler={this.doneTodo}
					onDeleteHandler={this.delTodo} 
					onDoubleClickHandler={this.doubleClickTodo}
					onEditHandler={this.editTodo}
					editing={todo.editing}
					key={todo.id}>
				{todo}</Todo>
			)
		})
		return (
			<div>
				<SingleFormInput
					onMountInput={this.setFocus}
					placeholder="Type a thing todo..." 
					valueButton="Add"
					submitHandler={this.addTodo}
				/>
				{todos}
			</div>
		)
	}
})

