import * as types from '../constants/ActionTypes'
import { createSubAction } from 'redux-subactions'

let create = createSubAction("TODOS")

// Actions generators
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

export const doTodo = todo => {
	return create (
  		!todo.isDone ? 
  			{ type: types.DO_TODO, todo, newTodo: { ...todo, done: true } }
			: { type: types.UNDO_TODO, todo, newTodo: { ...todo, done: false } }
	)
}

export const setEditingTodo = todo => {
	return create ({ type: types.EDITING_STATE, todo, newTodo: { ...todo, editing: true } })
}

export const setEditedTodo = todo => {
	return create ({ type: types.EDITED_STATE, todo, newTodo: { ...todo, editing: false } })
}
