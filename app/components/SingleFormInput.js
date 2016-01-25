import React from 'react';
import ReactDOM from 'react-dom'

export default React.createClass({
	getInitialState: function() {
		return ({value: this.props.value})
	},
	onSubmitHandler: function(e) {
		e.preventDefault();
		this.refocus();
		this.setState({value: this.props.onSubmitHandler(this.state.value)});
	},
	onChangeHandler: function(e) {
		this.setState({value: e.target.value})
	},
	refocus: function() {
		if (this._input && this.props.autoFocus) {
			this._input.focus()
			this._input.value = ''
		}
	},
	componentDidMount: function() {
		this.refocus();
		this.setState({value: this.props.value})
	},
	render: function() {
		var f = (c) => this._input = c
		return (
			<form style={this.props.style} autoComplete="off" onSubmit={this.onSubmitHandler}>
				<input 
					ref={f}
					placeholder={this.props.placeholder}
					onChange={this.onChangeHandler}
					type="text"
					value={this.state.value}
				/>
				{this.props.noButton ? "" : (<button>Add</button>)}
			</form>
		)
	}
})
