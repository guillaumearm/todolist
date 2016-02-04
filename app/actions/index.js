import * as types from '../constants/ActionTypes'

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
  		{type: types.DO_TODO, todo} :
		{type: types.UNDO_TODO, todo}
}

export const setEditingTodo = todo => {
	return { type: types.EDITING_STATE, todo }
}

export const setEditedTodo = id => {
	return { type: types.EDITED_STATE, todo}
}
