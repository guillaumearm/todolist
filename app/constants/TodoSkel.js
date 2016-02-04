import { update } from 'Fjs'

export const initialState = {
	id: 		0,
	content: 	"This is a todo skeleton",
	done:		false,
	editing: 	false
}

export const initWithSkel = update (initialState)
