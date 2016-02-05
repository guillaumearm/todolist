import * as types from '../constants/ActionTypes'
import { inject } from 'Fjs'

// Actions generators
export const addTodo = text => {
	return { type: types.ADD_TODO, text }
}

export const delTodo = todo => {
	return { type: types.DELETE_TODO, todo }
}

export const editTodo = (todo, newTodo) => {
	return { type: types.EDIT_TODO, todo, newTodo }
}

export const doTodo = (todo) => {
	return !todo.isDone ? 
  		{type: types.DO_TODO, todo, newTodo: inject (todo) ({done: true})} :
		{type: types.UNDO_TODO, todo, newTodo: inject (todo) ({done: false})}
}

export const setEditingTodo = todo => {
	return { type: types.EDITING_STATE, todo, newTodo: inject (todo) ({editing: true}) }
}

export const setEditedTodo = todo => {
	return { type: types.EDITED_STATE, todo, newTodo: inject (todo) ({editing:false})}
}
