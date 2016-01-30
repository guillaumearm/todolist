// Styles
import './css/base.css'

// React
import React from 'react';
import {render} from 'react-dom';

// Models
import TodoModel from './models/TodoModel';

// App
import App from './App'

render(
	<App model={new TodoModel()}></App>
	,document.querySelector("#todoAppContent")
);
