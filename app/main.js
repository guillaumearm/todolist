// Styles
import './css/base.css'

// React
import React from 'react';
import {render} from 'react-dom';

// Models
import TodoModel from './models/TodoModel';

// App
import App from './App'

/*
var p1 = new Promise((resolve, reject) => {
	console.log("Promise started.")
	setTimeout(() => {console.log("timeout") ; resolve("ok")}, 2000)
});

p1.then(val => {
	console.log(val);
}).catch(() => {
	console.log("Error.");
});
*/

import fetch from "isomorphic-fetch"

fetch(new Request('/api/todos'))
	.then(response => {
		if (response.status == 200)
			return response.json();
		else
			throw new Error("Bad response from the server.")
	})
	.then(todos => {
		console.log(todos);
	})
	.catch((e) => {
		console.log(e)
	});

render(
	<App model={new TodoModel()}></App>
	,document.querySelector("#todoAppContent")
);
