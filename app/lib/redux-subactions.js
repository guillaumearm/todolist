import { __, foldl } from 'Fjs'

export const reduceByActions = reducers => (state, action) => {
 	if (reducers[action.type]) {
	 	if (action.subActions && action.subActions[0]) {
			 return foldl ((acc, x) => {
			  	if (reducers[action.type] && reducers[action.type][x])
			 		return reduceByActions (reducers[action.type]) (acc, x) 
				else
			 		return reduceByActions (reducers) (acc, x) 
			 }) (state) (action.subActions)
		}
		else {
		 	console.log("else here")
			return reducers[action.type](state, action)
		}

		return (
			action.subActions && action.subActions[0] ?
			 reduceByActions (reducers[action.type]) (state, action.subActions)
			 : reducers[action.type](state, action)
		)
	}
	else 
		return state
}

export const createSubAction = type => subAction => 
{
	return { type, subActions: [subAction] }
}
