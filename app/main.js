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

/*
render(
	<TodoList model={new TodoModel()}></TodoList>,
	document.querySelector("#todoAppContent")
);
*/

/*
render(
	<Todo
		editing={true}
		content="lol"
	    onDoneHandler={todo => e => console.log("done")}	
	    onEditHandler={todo => e => console.log("edit")}	
	    onDeleteHandler={todo => e => console.log("delete")}	
		onDoubleClickHandler={todo => e => console.log("clicked")} buttonValue="Add">Render</Todo>
	,document.querySelector("#todoAppContent")
)
*/
