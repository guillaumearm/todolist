import React, {Component} from 'react';
import Todo from './Todo';
import SingleFormInput from './SingleFormInput';

export default class TodoList extends Component
{
	state = {model: this.props.model};

	addTodo = e => {
		let input = e.target[0]
		let text = input.value.trim()

		input.focus()
		if (text) {
			this.state.model.add(text)
			this.forceUpdate()
		}
		input.value = ""
	};

	doneTodo = todo => {
		return (e) => {
			if (todo.done)
				this.state.model.undo(todo.id)
			else
				this.state.model.done(todo.id)
			this.forceUpdate()
		}
	};

	delTodo = todo => {
		return (e) => {
			this.state.model.del(todo.id)
			this.forceUpdate()
		}
	};

	editTodo = todo => e => {
		let input = e.target[0]

		this.state.model.update(todo.id, input.value)
		this.state.model.setEditingState(todo.id, false)
		this.forceUpdate()
	};

	changeTodo = todo => e => {
		this.state.model.update(todo.id, e.target.value)
		this.forceUpdate()
	};

	doubleClickTodo = todo => {
		return (e) => {
			this.state.model.setEditingState(todo.id, true)
			this.forceUpdate()
		}
	};

	setFocus = input => {
		if (input)
		{
			input.focus()
			input.value = input.value
		}
	};

	render() {
		let todos = this.state.model.data.map(todo => {
			return (
				<Todo
					onChangeHandler={this.changeTodo}
					onDoneHandler={this.doneTodo}
					onDeleteHandler={this.delTodo}
					onDoubleClickHandler={this.doubleClickTodo}
					onEditHandler={this.editTodo}

					onMountInput={this.setFocus}
					editing={todo.editing}
					key={todo.id}
				>{todo}</Todo>
			)
		})
		return (
			<div>
				<SingleFormInput
					onMountInput={this.setFocus}
					submitHandler={this.addTodo}
					placeholder="Type a thing todo..."
					buttonValue="Add"
				/>
				{todos}
			</div>
		)
	}
}

