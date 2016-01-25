import React from 'react';
import SingleFormInput from './SingleFormInput'
import Todo from './Todo'

export default React.createClass({
	addTodo: function(text = "") {
		text = text.trim()
		if (text) {
			this.state.model.add(text)
			this.forceUpdate()
		}
		return ""
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
		this.state.model.setEditedState(todo.id, false);
		this.forceUpdate()
	},
	doubleClickTodo: function (todo) {
		return (e) => {
			this.state.model.setEditedState(todo.id, true);
			this.forceUpdate()
		}
	},
	getInitialState: function() {
		return ({model: this.props.model})
	},
	render: function() {
		var todos = this.state.model.data.map((todo) => {
			return (
				<Todo
					onDoneHandler={this.doneTodo}
					onDeleteHandler={this.delTodo} 
					onDoubleClickHandler={this.doubleClickTodo}
					onEditHandler={this.editTodo}
					edited={todo.edited}
					key={todo.id}>
				{todo}</Todo>
			)
		})
		return (
			<div>
				<SingleFormInput autoFocus={true} placeholder="Type a thing todo..." onSubmitHandler={this.addTodo}/>
				{todos}
			</div>
		)
	}
})
