export const reduceByActions = funcs => (state, action) =>
	funcs[action.type] ? funcs[action.type](state, action) : state
