import { initWithSkel as init }		from '../constants/TodoSkel'
import { getNextId } 			from '../lib/utils'
import { inject }			from 'Fjs'

import { 
	ADD_TODO, DELETE_TODO, EDIT_TODO,
	DO_TODO, UNDO_TODO,
	EDITING_STATE, EDITED_STATE
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

reducers.EDIT_TODO = (state, action) => {
	return state.map(e => 
			e.id === action.todo.id ?
				inject (action.newTodo) (e)
			: e
	)
}

reducers.DO_TODO = reducers.EDIT_TODO
reducers.UNDO_TODO = reducers.EDIT_TODO
reducers.EDITING_STATE = reducers.EDIT_TODO
reducers.EDITED_STATE = reducers.EDIT_TODO

export default reducers
