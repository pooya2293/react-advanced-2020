import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
	const [firstName,setFirstName] = useState('salam')
	const [email,setEmail] = useState('')
	const handleSubmit = (e)=>{
		e.preventDefault();
		console.log('helloWorld')
	}
  return (
  	<>
  		<article>
  			<form action="" className="form" onSubmit={handleSubmit}>
  				<div className="form-control">
  					<label htmlFor="firstName">Name :</label>
  					<input type="text" id='firstName' name='firstName' value={firstName} />
  				</div>
  				<div className="form-control">
  					<label htmlFor="email">Email :</label>
  					<input type="text" id='email' name='email' />
  				</div>
  				<button type="submit">add</button>		
  			</form>
  		</article>
  	</>
  )
};

export default ControlledInputs;
