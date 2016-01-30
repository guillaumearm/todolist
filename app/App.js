// Styles
import './css/base.css'

// React
import React from 'react';

// Components
import TodoList from './components/TodoList';

// Actions
import * as actions from './actions'

export default class App extends React.Component
{
	state = {model: this.props.model, lastId: null};

	render = () => {
		return (
			<TodoList 	model={this.state.model}
						doubleClickTodo={actions.doubleClickTodo(this)}
						changeTodo={actions.changeTodo(this)}
						editTodo={actions.editTodo(this)}
						delTodo={actions.delTodo(this)}
						doneTodo={actions.doneTodo(this)}
						addTodo={actions.addTodo(this)}
						setFocus={actions.setFocus(this)}
			>
				Stateless pure components
			</TodoList>
		)
	};
}
