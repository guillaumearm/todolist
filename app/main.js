// Styles
import './css/base.css'

// React
import React from 'react';
import ReactDOM from 'react-dom';

// Models
import TodoModel from './models/TodoModel';

// Components
import TodoList from './components/TodoList';


var todoModel = new TodoModel();

ReactDOM.render(
	<TodoList model={todoModel}></TodoList>,
	document.querySelector("#todoAppContent")
);

