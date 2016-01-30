// Styles
import './css/base.css'

// React
import React from 'react';

// Components
import TodoList from './components/TodoList';


export default class App extends React.Component
{
	state = {model: this.props.model};

	render = () => {
		return (
			<TodoList model={this.state.model}></TodoList>
		)
	};
}

