import { PropTypes } from 'react'
import { flip, inject } from 'Fjs'

export const initialState = {
	id: 		0,
	content: 	"This is a todo skeleton",
	done:		false,
	editing: 	false,
	focus:		false
}

export const initWithSkel = flip (inject) (initialState)

export const propTypes = PropTypes.shape({
	id:		PropTypes.number.isRequired,
	content:	PropTypes.string.isRequired,
	done:		PropTypes.bool.isRequired,
	editing:	PropTypes.bool.isRequired,
	focus:		PropTypes.bool.isRequired
})
