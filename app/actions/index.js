import * as types from '../constants/ActionTypes'
import { createSubAction } from 'redux-subactions'

let create = createSubAction("TODOS")

// Actions generators

export const setFocus = todo => {
	return create ({type: types.SET_FOCUS, todo})
}

export const addTodo = text => {
	return create ({ type: types.ADD_TODO, text })
}

export const delTodo = todo => {
	return create ({ type: types.DELETE_TODO, todo })
}

export const editTodo = (todo, newTodo) => {
	newTodo.id = todo.id
	return create ({ type: types.EDIT_TODO, todo, newTodo })
}


export const editTodoContent = (todo, text) => {
	return create ([
		{ type: types.EDIT_TODO, todo, newTodo: { ...todo, content: text } }
	])
}

export const doTodo = todo => {
	const do_undo =  (
  		!todo.isDone ? 
  			{ type: types.DO_TODO, todo, newTodo: { ...todo, done: true } }
			: { type: types.UNDO_TODO, todo, newTodo: { ...todo, done: false } }
	)
	if (todo.editing)
		create ([do_undo, setFocus(todo)])
	else
		create (do_undo)
}

export const setEditingTodo = todo => {
	return create ([
		{
 			type: types.EDITING_STATE,
			todo,
			newTodo: { ...todo, editing: true }
		},
		setFocus (todo)
	])
}

export const setEditedTodo = todo => {
	return create ({ type: types.EDITED_STATE, todo, newTodo: { ...todo, editing: false } })
}

