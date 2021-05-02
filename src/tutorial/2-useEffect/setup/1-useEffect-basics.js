import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
	const [value,setValue] = useState(0);
	if (value > 1){
		useEffect(()=>{
		console.log('cal i')
		document.title = `New (${value})`
		})
	}
	console.log('render me')
	return (
		<>		
			<h2>{value}</h2>
			<button className='btn' onClick={()=> setValue(value + 1)}>+</button>
		</>
	)
};

export default UseEffectBasics;
