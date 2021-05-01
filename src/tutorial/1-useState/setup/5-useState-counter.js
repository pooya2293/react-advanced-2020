import React, { useState } from 'react';

const UseStateCounter = () => {
	const [number,setNumber] =useState(0)
	const reset = ()=>{
		setNumber(0);
	}
  return (
  	<>
  		<section style={{ margin:'90px 0' }}>
  			<h3>The Counter</h3>
  			<h4>{number}</h4>
  			<button className='btn' onClick={()=>
  				setNumber(number - 1)
  			}>
  				decrese
  			</button>
  			<button className='btn' onClick={reset}>
  				reset
  			</button>
  			<button className='btn'onClick={()=>
  				setNumber(number + 1)
  			}>
  				increase
  			</button>
  		</section>
  	</>
  )
};

export default UseStateCounter;
