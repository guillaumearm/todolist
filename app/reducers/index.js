// Libs
import { reduceByActions }	from 'redux-subactions'

// Skeleton and init function
import { initialState, initWithSkel as init } from '../constants/TodoSkel'

// Todos reducers
import TODOS from './Todos'

const reducers = { TODOS }

// Main reducer
const rootReducer = (state = [initialState], action) =>
	action && action.type ?
	  reduceByActions (reducers) (state.map(init), action)
	: state

export default rootReducer
