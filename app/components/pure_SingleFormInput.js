import React from 'react';
import ReactDOM from 'react-dom'
import "./SingleFormInput.css"

let getValueEvent = e => e.target[0].value

export const SingleFormInput = props => {
	return (
		<form	 className="SingleFormInput-wrapper"
				 autoComplete="off"
				 onSubmit={e => {
				 	e.preventDefault()
					props.submitHandler(getValueEvent(e))
					e.target[0].value = ""
				}}
		>
			<input	 type="text"
					 placeholder={props.placeholder}
					 onChange={props.changeHandler}
					 value={props.value}
			
			/>
			{props.noButton ? "" : (<button>{props.valueButton}</button>)}
		</form>
	)
};
