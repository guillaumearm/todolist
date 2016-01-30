import React from 'react';
import SingleFormInput from './SingleFormInput';

//
// Todo is a pure stateless component :
// - No states
// - No side effects
// - No mutations
// - No problems
//

const Todo = props => {
	let todo = props.children
	let done = (todo.done ? "[x]" : "[ ]")
	let entry = {};

	if (props.editing) {
		entry = (
			<SingleFormInput {...props}
							submitHandler={props.onEditHandler(todo)}
							changeHandler={props.onChangeHandler(todo)}
							noButton={true}
							value={todo.content}
			/>
		)
	}
	else {
		entry = (
			<code onDoubleClick={props.onDoubleClickHandler(todo)}>
				{todo.content}
			</code>
		)
	}

	return (
		<div>
			{entry}
			<button onClick={props.onDoneHandler(todo)}>{done}</button>
			<button onClick={props.onDeleteHandler(todo)}>DELETE</button>
		</div>
	)
};

export default Todo;
