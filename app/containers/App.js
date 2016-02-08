import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import TodoList from '../components/TodoList'
import * as TodosActions from '../actions/Todos'

const App = props => {
	return	<TodoList
			actions={props.actions}
			todos={props.todos}
		>Redux todolist</TodoList>
}

const mapStateToProps = (state) => {
	return { todos: state }
}

const mapDispatchToProps = (dispatch) => {
	return { actions: bindActionCreators(TodosActions, dispatch) }
}

export default connect (mapStateToProps, mapDispatchToProps) (App)
