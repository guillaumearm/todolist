import React from 'react';
import ReactDOM from 'react-dom';

import TodoModel from './models/TodoModel';
import Test from './components/Test'

import './css/base.css'

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
