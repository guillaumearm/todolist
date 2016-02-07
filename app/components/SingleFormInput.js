import React, {PropTypes} from 'react'
import "./SingleFormInput.css"


const SingleFormInput = props => {
	const focus = e => {
		if (props.focus && e)
		{
		 	e.focus()
			e.value = e.value
		}
	}

	return (
	 	<form className="SingleFormInput-wrapper"
			autoComplete="off"
			onSubmit={ e => { 
					e.preventDefault()
					e.target[0].focus()
					if (props.onSubmit)
						props.onSubmit(e)
				}
			}
		>
		 	<input type="text" ref={ focus }
				placeholder={ props.placeholder }
				onChange={ props.onChange }
				value={ props.value }
			/>
			{props.noButton ? "" : (<button>{props.buttonValue}</button>)}
		</form>
	)
}

SingleFormInput.propTypes = {
	onSubmit:	PropTypes.func,
	onChange:	PropTypes.func,
	focus:		PropTypes.bool,
	value:		PropTypes.string,
	placeholder:	PropTypes.string,
	buttonValue:	PropTypes.string,
	noButton:	PropTypes.bool
}

export default SingleFormInput
