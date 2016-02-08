import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import SingleFormInput from '../components/SingleFormInput'
import * as actions from '../actions'

const App = props => {
	const form = <SingleFormInput
		onSubmit={ e => { props.actions.editContent(props.todos[0], e.value) } }
		buttonValue="add"
		focus={props.todos[0].focus}
	/>
	return	<div>
	 		<h1>{props.todos[0].content}</h1>
			{form}
		</div>
}

const mapStateToProps = (state) => {
	return { todos: state }
}

const mapDispatchToProps = (dispatch) => {
	return { actions: bindActionCreators(actions, dispatch) }
}

export default connect (mapStateToProps, mapDispatchToProps) (App)
