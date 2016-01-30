import React from 'react';
import ReactDOM from 'react-dom'
import "./SingleFormInput.css"

const SingleFormInput = props => {
	return (
		<form	 className="SingleFormInput-wrapper"
				 autoComplete="off"
				 onSubmit={e => {
				 	e.preventDefault()
					props.submitHandler(e)
				}}
		>
			<input	 type="text"
					 placeholder={props.placeholder}
					 onChange={props.changeHandler}
					 value={props.value}
					 ref={props.onMountInput}
			/>
			{props.noButton ? "" : (<button>{props.valueButton}</button>)}
		</form>
	)
};

export default SingleFormInput;

