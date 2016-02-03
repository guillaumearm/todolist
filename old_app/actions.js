export const addTodo = app => e => {
	let input = e.target[0]
	let text = input.value.trim()

	input.focus()
	app.state.lastId = null
	if (text) {
		app.state.model.add(text)
		app.forceUpdate()
	}
	input.value = ""
};

export const doneTodo = app => todo => {
	return (e) => {
		app.state.lastId = todo.id
		if (todo.done)
			app.state.model.undo(todo.id)
		else
			app.state.model.done(todo.id)
		app.forceUpdate()
	}
};

export const delTodo = app => todo => {
	return (e) => {
		app.state.model.del(todo.id)
		app.forceUpdate()
	}
};

export const editTodo = app => todo => e => {
	let input = e.target[0]

	app.state.lastId = null
	app.state.model.update(todo.id, input.value)
	app.state.model.setEditingState(todo.id, false)
	app.forceUpdate()
};

export const changeTodo = app => todo => e => {
	app.state.lastId = todo.id
	app.state.model.update(todo.id, e.target.value)
	app.forceUpdate()
};

export const doubleClickTodo = app => todo => {
	return (e) => {
		app.state.lastId = todo.id
		app.state.model.setEditingState(todo.id, true)
		app.forceUpdate()
	}
};

export const setFocus = app => todo => input => {
	if (input && app.state.lastId == todo.id)
	{
		input.focus()
		input.value = input.value
	}
};
