import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
	const [firstName,setFirstName] = useState('')
	const [email,setEmail] = useState('')
	// people array for adding from form to it 
	const [people,setPeople] = useState([])

	const handleSubmit = (e)=>{
		e.preventDefault();
		// if inputs were complected
		if(firstName && email) {
			const person = {firstName,email}
			setPeople(()=>{
				return [person]
			})
			setFirstName('');
			setEmail('');
		}else{
			console.log('empty')
		}
	}
  return (
  	<>
  		<article>
  			<form action="" className="form" onSubmit={handleSubmit}>
  				<div className="form-control">
  					<label htmlFor="firstName">Name :</label>
  					<input type="text" id='firstName' name='firstName' value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
  				</div>
  				<div className="form-control">
  					<label htmlFor="email">Email :</label>
  					<input type="text" id='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
  				</div>
  				<button type="submit">add</button>		
  			</form>
  		</article>
  	</>
  )
};

export default ControlledInputs;
