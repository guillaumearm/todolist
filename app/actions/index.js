import * as types from '../constants/ActionTypes'
import { createSubAction } from 'redux-subactions'

let create = createSubAction("TODOS")

// Actions generators

export const setFocus = todo => {
	return create ({type: types.SET_FOCUS, todo})
}

export const add = text => {
	return create ({ type: types.ADD, text })
}

export const del = todo => {
	return create ({ type: types.DELETE, todo })
}

export const edit = (todo, newTodo) => {
	newTodo.id = todo.id
	return create ({ type: types.EDIT, todo, newTodo })
}


export const editContent = (todo, text) => {
	return create ([
		{ type: types.EDIT, todo, newTodo: { ...todo, content: text } }
	])
}

export const doIt = todo => {
	const do_undo =  (
  		!todo.isDone ? 
  			{ type: types.DO, todo, newTodo: { ...todo, done: true } }
			: { type: types.UNDO, todo, newTodo: { ...todo, done: false } }
	)
	if (todo.editing)
		create ([do_undo, setFocus(todo)])
	else
		create (do_undo)
}

export const setEditing = todo => {
	return create ([
		{
 			type: types.EDITING_STATE,
			todo,
			newTodo: { ...todo, editing: true }
		},
		setFocus (todo)
	])
}

export const setEdited = (todo, text) => {
	return create ([
		{ type: types.EDITED_STATE, todo, newTodo: { ...todo, editing: false } },
		editContent (todo, text)
	])
}

