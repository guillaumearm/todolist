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

render (
	<Provider store={createStore(rootReducer)}>
		<App />
	</Provider>
	, document.getElementById('todoAppContent')
)
