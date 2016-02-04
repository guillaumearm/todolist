import * as types from '../constants/ActionTypes'

// Actions generators
export const addTodo = content => {
	return { type: types.ADD_TODO, content }
}

export const delTodo = id => {
	return { type: types.DELETE_TODO, id }
}

export const editTodo = (id, content) => {
	return { type: types.EDIT_TODO, id, content }
}

export const doTodo = (id, isDone) => {
	return !isDone ? {type: types.DO_TODO, id} : {type: types.UNDO_TODO, id}
}

export const setEditingTodo = (id) => {
	return { type: types.EDITING_STATE, id, editing: true }
}

export const setEditedTodo = (id) => {
	return { type: types.EDITING_STATE, id, editing: false }
}
