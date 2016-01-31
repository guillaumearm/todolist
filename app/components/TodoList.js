import React from 'react';
import Todo from './Todo';
import SingleFormInput from './SingleFormInput';

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

export default TodoList;
