import React from 'react';

export default React.createClass({
	getInitialState: function() {
		return ({value: ""})
	},
	onSubmitHandler: function(e) {
		e.preventDefault();
		this.setState({value: this.props.onSubmitHandler(this.state.value)});
	},
	onChangeHandler: function(e) {
		this.setState({value: e.target.value})
	},
	render: function() {
		console.log("rendering single form")
		return (
			<form onSubmit={this.onSubmitHandler}>
				<input onChange={this.onChangeHandler} name="singleFormInputText" type="text" value={this.state.value}/>
				<button>Add</button>				
			</form>
		)
	}
})
