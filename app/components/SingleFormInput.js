import React from 'react';
import "./SingleFormInput.css"

//
// SingleFormInput is a pure stateless component :
// - No states
// - No side effects
// - No mutations
// - No problems
//

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
			{props.noButton ? "" : (<button>{props.buttonValue}</button>)}
		</form>
	)
};

export default SingleFormInput;

