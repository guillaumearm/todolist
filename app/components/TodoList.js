import React, { PropTypes } from 'react'
import Todo from './Todo'
import SingleFormInput from './SingleFormInput'

import { propTypes as actionTypes } from '../constants/Todos'
import { propTypes as stateTypes } from '../constants/TodoSkel'

const TodoList = props => {
	const todos = props.todos.map((todo, i) => { return (
		<Todo
			key={i}
			actions={props.actions}
			todo={todo}
		>{todo}</Todo>
	)})
	return (
		<div>
			<h2>{props.children}</h2>
			<SingleFormInput
				buttonValue="Add"
				placeholder="Type a thing todo..."
				onSubmit={ e => {
					const v = e.value.trim()
					if (v)
						props.actions.add(v)
					e.value = ""
					props.actions.setFocus()
				}}
			/>
			{todos}
		</div>
	)
}

TodoList.propTypes = {
	children:	PropTypes.string,
	actions:	actionTypes.isRequired,
	todos:		PropTypes.arrayOf(stateTypes).isRequired
}

export default TodoList

