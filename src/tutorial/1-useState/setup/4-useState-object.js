import React, { useState } from 'react';

const UseStateObject = () => {
	const [info , setInfo] = useState({
		fName:'memo',
		lName: 'lambu',
		message: 'random message',
	})

	// hard and lonly form of useState
	const [fName , setFName] = useState('nemo')
	const [lName , setLName] = useState('mambu')
	const [message , setMessage] = useState('random message')

	const changeMessage = () =>{
		// setInfo ({...info , message: 'hello'})
		setMessage('hello')
	}
  return (
  	<>
  		<h3>{fName}</h3>
  		<h3>{lName}</h3>
  		<h3>{message}</h3>
  		<button className='btn' onClick={changeMessage}>
  			change message
  		</button>
  	</>
  );
};

export default UseStateObject;
