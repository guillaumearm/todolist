// Styles
import './css/base.css'

// React
import React from 'react';
import ReactDOM from 'react-dom';

// Models
import TodoModel from './models/TodoModel';

// Components
import Test from './components/Test'


/*
** Simulate some todos.
*/
document.cookie = JSON.stringify([]);
var todo = new TodoModel();
todo.add("Hello World.");
todo.add("Hello World 2.");
todo.add("Hello World 3.");
todo.done(0);
todo.done(1);

ReactDOM.render(
	<Test>{todo.data}</Test>,
	document.querySelector("#todoAppContent")
);
