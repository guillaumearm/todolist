import { combineReducers } from 'redux'
import { ADD_TODO, DELETE_TODO, EDIT_TODO, DO_TODO, UNDO_TODO, EDITING_STATE_TODO } from '../constants/ActionTypes'

const initialState = [{
	id: 1,
	content: "Ok, first todo with redux.",
	done: false,
	editing: false
}]

const todos = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:

		default:
			return state
	}
}

export default todos
