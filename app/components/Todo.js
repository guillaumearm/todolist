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

Todo.propTypes = {
	onEditHandler:	 		React.PropTypes.func.isRequired,
	onChangeHandler: 		React.PropTypes.func.isRequired,
	onDoubleClickHandler:	React.PropTypes.func.isRequired,
	onDoneHandler: 			React.PropTypes.func.isRequired,
	onDeleteHandler:		React.PropTypes.func.isRequired,
	children: 				React.PropTypes.shape({
								id: 		React.PropTypes.number.isRequired,
								content:	React.PropTypes.string.isRequired,
								date:		React.PropTypes.string.isRequired,
								done:		React.PropTypes.bool.isRequired,
								editing:	React.PropTypes.bool.isRequired
							})
};

export default Todo;
