// Styles
import './css/base.css'

// React
import React from 'react'
import { render } from 'react-dom'

// Redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// App
import App from './containers/App'

// Reducers
import rootReducer from './reducers'

// initialState
import { initialState } from './constants/TodoSkel'

render (
	<Provider store={createStore(rootReducer, [initialState])}>
		<App />
	</Provider>
	, document.getElementById('todoAppContent')
)
