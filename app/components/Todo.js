import React, { PropTypes } from 'react'
import { propTypes as actionsTypes } from '../constants/Todos'
import { propTypes as stateTypes } from '../constants/TodoSkel'
import SingleFormInput from './SingleFormInput'

const Todo = props => {
	const todo = props.children
	const done = (todo.done ? "[x]" : "[ ]")
	let entry = {}

	if (todo.editing){
		entry = (
			<SingleFormInput
				onSubmit={ e => { props.actions.setEdited(todo, e.value) } }
				onChange={ e => { props.actions.editContent(todo, e.value) } }
				noButton={true}
				value={todo.content}
				focus={todo.focus}
			/>)
	}
	else {
		entry = (
			<code onDoubleClick={ e => { props.actions.setEditing(todo) } }>
				{todo.content}
			</code>
		)
	}

	return (
		<div>
			{entry}
			<button onClick={ e => { props.actions.doIt(todo) } }>{done}</button>
			<button onClick={ e => { props.actions.del(todo) } }>DELETE</button>
		</div>
	)
}

Todo.propTypes = {
	children:	stateTypes.isRequired,
	actions:	actionsTypes.isRequired
}

export default Todo
