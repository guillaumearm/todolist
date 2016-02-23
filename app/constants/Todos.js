import { PropTypes } from 'react'

// Actions types
export const ADD 						= 'ADD'
export const DELETE 				= 'DELETE'
export const EDIT 					= 'EDIT'
export const DO 						= 'DO'
export const UNDO 					= 'UNDO'
export const EDITING_STATE	= 'EDITING_STATE'
export const EDITED_STATE		= 'EDITED_STATE'
export const SET_FOCUS			= 'SET_FOCUS'

// Actions generators propTypes
export const propTypes			= PropTypes.shape({
	setFocus:				PropTypes.func.isRequired,
	add:						PropTypes.func.isRequired,
	del:						PropTypes.func.isRequired,
	edit:						PropTypes.func.isRequired,
	editContent:		PropTypes.func.isRequired,
	doIt:						PropTypes.func.isRequired,
	setEditing:			PropTypes.func.isRequired,
	setEdited:			PropTypes.func.isRequired,
})
