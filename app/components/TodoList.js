import React from 'react';
import Todo from './Todo'
import SingleFormInput from './SingleFormInput'

export default React.createClass({
	onChangeHandler: function(e) {
		 this.setState({value: e.target.value});
	},
	onSubmitHandler: function(text) {
		this.state.model.add(text)
		this.setState({});
		console.log("ICI")
		return ""
	},
	getInitialState: function() {
		return ({model: this.props.model})
	},
	render: function() {
		console.log("rendering todolist")
		var todos = this.state.model.data.map(function(todo){
			return (
				<Todo key={todo.id}>{todo}</Todo>
			)
		})
		return (
			<div>
				<SingleFormInput onSubmitHandler={this.onSubmitHandler}></SingleFormInput>
				{todos}
			</div>
		)
	}
})
