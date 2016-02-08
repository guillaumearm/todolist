import { inject } from 'Fjs'

import { initWithSkel as init }		from '../constants/TodoSkel'
import { getNextId } 			from '../lib/utils'

import { 
	ADD, DELETE, EDIT,
	DO, UNDO,
	EDITING_STATE, EDITED_STATE
} 					from '../constants/ActionTypes'

let reducers = {}

reducers.ADD = (state, action) => {
	let id		= getNextId(state)
	let content 	= action.text
	return [init ({id, content}), ...state]
}

reducers.DELETE = (state, action) => {
	return state.filter(e => e.id !== action.todo.id)
}

reducers.EDIT = (state, action) => {
	return state.map(e => 
			e.id === action.todo.id ?
			  inject (action.newTodo) (e)
			: e
	)
}

reducers.DO = reducers.EDIT
reducers.UNDO = reducers.EDIT
reducers.EDITING_STATE = reducers.EDIT
reducers.EDITED_STATE = reducers.EDIT

reducers.SET_FOCUS = (state, action) => {
	const setFocus = inject ({focus: true})
	const unsetFocus = inject ({focus: false})

	return state.map(e =>
		action.todo && e.id == action.todo.id ?
		  setFocus(e)
		: unsetFocus(e)
	)
}

export default reducers
