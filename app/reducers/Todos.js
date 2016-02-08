import { inject } from 'Fjs'

import { initWithSkel as init }		from '../constants/TodoSkel'
import { getNextId } 			from '../lib/utils'

export const ADD = (state, action) => {
	const id	= getNextId(state)
	const content 	= action.text
	return [init ({id, content}), ...state]
}

export const DELETE = (state, action) => {
	return state.filter(e => e.id !== action.todo.id)
}

export const EDIT = (state, action) => {
	return state.map(e => 
			e.id === action.todo.id ?
			  inject (action.newTodo) (e)
			: e
	)
}

export const DO = EDIT
export const UNDO = EDIT
export const EDITING_STATE = EDIT
export const EDITED_STATE = EDIT

export const SET_FOCUS = (state, action) => {
	const setFocus = inject ({focus: true})
	const unsetFocus = inject ({focus: false})

	return state.map(e =>
		action.todo && e.id == action.todo.id ?
		  setFocus(e)
		: unsetFocus(e)
	)
}
