import React from 'react';
import Todo from './Todo';
import SingleFormInput from './SingleFormInput';

import TodoModel from '../models/TodoModel'

//
// TodoList is a pure stateless component :
// - No states
// - No side effects
// - No mutations
// - No problems
//

const TodoList = props => {
	let todos = props.model.data.map(todo => {
		return (
			<Todo
				onChangeHandler={props.changeTodo}
				onDoneHandler={props.doneTodo}
				onDeleteHandler={props.delTodo}
				onDoubleClickHandler={props.doubleClickTodo}
				onEditHandler={props.editTodo}
				onMountInput={props.setFocus(todo)}
				editing={todo.editing}
				key={todo.id}
			>{todo}</Todo>
		)
	})
	return (
		<div>
			<h2>{props.children}</h2>
			<SingleFormInput
				onMountInput={props.setFocus({})}
				submitHandler={props.addTodo}
				placeholder="Type a thing todo..."
				buttonValue="Add"
			/>
			{todos}
		</div>
	)
};


TodoList.propTypes = {
	children:				React.PropTypes.string,

	model:					React.PropTypes.instanceOf(TodoModel).isRequired,
	changeTodo:				React.PropTypes.func.isRequired,
	doneTodo:				React.PropTypes.func.isRequired,
	delTodo:				React.PropTypes.func.isRequired,
	doubleClickTodo:		React.PropTypes.func.isRequired,
	editTodo:				React.PropTypes.func.isRequired,
	addTodo:				React.PropTypes.func.isRequired,
	setFocus:				React.PropTypes.func.isRequired
};


export default TodoList;
