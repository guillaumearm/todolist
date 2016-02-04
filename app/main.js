// Styles
import './css/base.css'

// React
import React from 'react'
import { render } from 'react-dom'

// Redux
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import * as YOLO from './actions'

console.log(YOLO)

// App
//import App from './containers/App'

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

render(
	<h4>render</h4>
	, document.getElementById('todoAppContent')
)

