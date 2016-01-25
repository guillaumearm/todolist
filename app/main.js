// Styles
import './css/base.css'

// React
import React from 'react';
import ReactDOM from 'react-dom';

// Models
import TodoModel from './models/TodoModel';

// Components
import TodoList from './components/TodoList'


/*
** Simulate some todos.
*/
//document.cookie = JSON.stringify([]);
var todoModel = new TodoModel();
//todoModel.add("Hello world.");
//todoModel.add("Hello world 2.");
//todoModel.add("Hello world 3.");
//todoModel.done(2);
//todoModel.done(1);

ReactDOM.render(
	<TodoList model={todoModel}></TodoList>,
	document.querySelector("#todoAppContent")
);
