import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
	const [size,setSize]= useState(window.innerWidth);
	const checkSize = ()=>{
		setSize(window.innerWidth)
	}
	useEffect(()=>{
		window.addEventListener('resize',checkSize)
	})
  return (
  	<>
  		<h3>window size</h3>
  		<p>{size}</p>
  	</>
  );
};

export default UseEffectCleanup;
