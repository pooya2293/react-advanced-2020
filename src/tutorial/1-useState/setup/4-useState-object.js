import React, { useState } from 'react';

const UseStateObject = () => {
	const [info , setInfo] = useState({
		fName:'memo',
		lName: 'lambu',
		message: 'random message',
	})

	const changeMessage = () =>{
		setInfo ({...info , message: 'hello'})
	}
  return (
  	<>
  		<h3>{info.fName}</h3>
  		<h3>{info.lName}</h3>
  		<h3>{info.message}</h3>
  		<button className='btn' onClick={changeMessage}>
  			change message
  		</button>
  	</>
  );
};

export default UseStateObject;
