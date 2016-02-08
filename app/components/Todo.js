import { PropTypes }, React from 'react'
import SingleFormInput from './SingleFormInput'

const Todo = props => {
	const todo = props.children
	const done = (todo.done ? "[x]" : "[ ]")
	const entry = {}

	if (props.editing){
		entry = 
			<SingleFormInput
				onSubmit={ e => { props.actions.setEdited(todo, e.value) } }
				onChange={ e => { props.actions.edit(todo, e.value) } }
				noButton={true}
				value={todo.content}
				focus={todo.focus}
			/>
		)
	}
	else {
		entry = (
			<code onDoubleClick={ e => { props.actions.setEditing(todo) } }>
				{todo.content}
			</code>
		)
	}

	return (
		<div>
			{entry}
			<button onClick={ e => { props.actions.doIt(todo) } }>{done}</button>
			<button onClick={ e => { props.actions.del(todo) } }>DELETE</button>
		</div>
	)
}

Todo.propTypes = {
	editing:	PropTypes.bool,

	children:	PropTypes.shape({
		id:		PropTypes.number.isRequired,
		content:	PropTypes.string.isRequired,
		done:		PropTypes.bool.isRequired,
		editing:	PropTypes.bool.isRequired,
		focus:		PropTypes.bool.isRequired
	}),

	actions:	PropTypes.shape({
		doIt:		PropTypes.func.isRequired,
		edit:		PropTypes.func.isRequired,
		del:		PropTypes.func.isRequired,
		setEditing:	PropTypes.func.isRequired,
		setEdited:	PropTypes.func.isRequired
	})
}

export default Todo
