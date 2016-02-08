import {PropTypes}, React from 'react'
import Todo from './Todo'
import SingleFormInput from './SingleFormInput'

import { propTypes as actionTypes } from '../constants/Todos'
import { propTypes as stateTypes } from '../constants/TodoSkel'

const TodoList = props => {
	
}

TodoList.propTypes = {
	children:	PropTypes.string,
	actions:	actionTypes.isRequired,
	todos:		PropTypes.ArrayOf(stateTypes).isRequired
}

export default TodoList

