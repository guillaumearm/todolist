import { inject, flip } from 'Fjs'

export const initialState = {
	id: 		0,
	content: 	"This is a todo skeleton",
	done:		false,
	editing: 	false,
	focus:		false
}

export const initWithSkel = flip (inject) (initialState)
