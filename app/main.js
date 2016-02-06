// Styles
import './css/base.css'

// React
import React from 'react'
import { render } from 'react-dom'

// Redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './reducers'

import { addTodo, editTodo, doTodo, setEditingTodo, setEditedTodo } from './actions'

let test = [
	{id: 1, content: "Hello World"},
	{id: 2, content: "YOLO"},
	{id: 42, content: "FT", additionalContent: "FT IS FORTY-TWO"}
]

let SubActionsTest = () => {
	return {
		type: "TODOS",
		subActions: [
			addTodo("FIRST TODO"),
		 	{type: "TODOS", subActions: [addTodo("IT WORS"), addTodo("IT'S OK")]},
			addTodo("LAST TODO")
		]
	}
}

let x = test
x = rootReducer(x, SubActionsTest())
x = rootReducer(x, editTodo({id: 42}, {content: "OK OK OK"}))

console.log(x)

// App
//import App from './containers/App'

/*
render (
	<Provider store={createStore(rootReducer)}>
		<App />
	</Provider>
	, document.getElementById('todoAppContent')
)
*/



// Store
//import configureStore from './store/configureStore'

//const store = configureStore()

/*
const test1 = (state = {data1:"default1"}, action) => 
	action.type == "yolo1"
	?
		{data: action.type}
	:
		state

const test2 = (state = {data2:"default2"}, action) =>
	action.type == "yolo2"
	?
		{data: action.type}
	:
		state

const rootReducer = combineReducers({
	test1,
	test2
});


const store = createStore(rootReducer)
store.dispatch({type: "yolo2"})

console.log(store.getState())
*/

