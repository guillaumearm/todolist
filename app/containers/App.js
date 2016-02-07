import React from 'react'
import { connect } from 'react-redux'

const App = props => {
	return (<h1>{props.todos[0].content}</h1>)
}

const mapStateToProps = (state) => {
	return { todos: state }
}

const mapDispatchToProps = (dispatch) => {
	return { action: dispatch }
}

export default connect (mapStateToProps, mapDispatchToProps) (App)
