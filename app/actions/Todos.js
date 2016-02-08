import * as TODOS from '../constants/Todos'
import { createSubActions } from 'redux-subactions'

const create = createSubActions("TODOS")

// Actions generators

export const setFocus = todo => {
	return create ({type: TODOS.SET_FOCUS, todo})
}

export const add = text => {
	return create ({ type: TODOS.ADD, text })
}

export const del = todo => {
	return create ({ type: TODOS.DELETE, todo })
}

export const edit = (todo, newTodo) => {
	newTodo.id = todo.id
	return create ({ type: TODOS.EDIT, todo, newTodo })
}


export const editContent = (todo, text) => {
	return create ([
		{ type: TODOS.EDIT, todo, newTodo: { ...todo, content: text } }
	])
}

export const doIt = todo => {
	const do_undo =  (
  		!todo.isDone ? 
  			{ type: TODOS.DO, todo, newTodo: { ...todo, done: true } }
			: { type: TODOS.UNDO, todo, newTodo: { ...todo, done: false } }
	)
	if (todo.editing)
		create ([do_undo, setFocus(todo)])
	else
		create (do_undo)
}

export const setEditing = todo => {
	return create ([
		{
 			type: TODOS.EDITING_STATE,
			todo,
			newTodo: { ...todo, editing: true }
		},
		setFocus (todo)
	])
}

export const setEdited = (todo, text) => {
	return create ([
		{ type: TODOS.EDITED_STATE, todo, newTodo: { ...todo, editing: false } },
		editContent (todo, text)
	])
}

