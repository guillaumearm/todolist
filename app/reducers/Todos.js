import { initWithSkel as init }		from '../constants/TodoSkel'
import { getNextId } 			from '../lib/utils'

import { 
	ADD_TODO, DELETE_TODO, EDIT_TODO,
	DO_TODO, UNDO_TODO,
	EDITING_STATE_TODO
} 					from '../constants/ActionTypes'

let reducers = {}

reducers.ADD_TODO = (state, action) => {
	let id		= getNextId(state)
	let content 	= action.text
	return [init ({id, content}), ...state]
}

reducers.DELETE_TODO = (state, action) => {
	return state.filter(e => e.id !== action.todo.id)
}

// [...]

export default reducers
