// Libs
import { update } 			from 'Fjs'
import { reduceByActions }	from '../lib/redux-utils'

// Skeleton and init function
import { initialState, initWithSkel as init } from '../constants/TodoSkel'

// Reducers based on actions
import ActionReducers from './Todos'

// Main todo reducer
const todos = (state = [initialState], action) =>
	reduceByActions (ActionReducers) (state.map(init), action)

export default todos
