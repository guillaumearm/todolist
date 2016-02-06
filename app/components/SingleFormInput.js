import React, {PropTypes} from 'react'
import "./SingleFormInput.css"

const SingleFormInput = props => {
	return (
	 	<form className="SingleFormInput-wrapper"
			autoComplete="off"
			onSubmit={ e => { e.preventDefault() ; props.onSubmit(e) } }
		>
			<input type="text"
				placeholder={ props.placeholder }
				onChange={ props.onChange }
				value={ props.value }
			/>
			{props.noButton ? "" : (<button>{props.buttonValue}</button>)}
		</form>
	)
}

SingleFormInput.propTypes = {
	onSubmit:	PropTypes.func.isRequired,
	onChange:	PropTypes.func.isRequired,
	value:		PropTypes.string,
	placeholder:	PropTypes.string
}

export default SingleFormInput
