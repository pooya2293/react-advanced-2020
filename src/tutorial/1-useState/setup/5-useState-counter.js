import React, { useState } from 'react';

const UseStateCounter = () => {
	const [number,setNumber] =useState(0)
	const reset = ()=>{
		setNumber(0);
	}
	const complexIncrease = ()=>{
		setTimeout(()=>{
			// setNumber (number + 1)
			setNumber((prevState)=>{
				return prevState + 1
			})
		},2000)
	}
  return (
  	<>
  		<section style={{ margin:'90px 0' }}>
  			<h3>The Counter</h3>
  			<h4>{number}</h4>
  			<button className='btn' onClick={()=>
  				setNumber(number - 1)
  			}>
  				-
  			</button>
  			<button className='btn' onClick={reset}>
  				Reset
  			</button>
  			<button className='btn'onClick={()=>
  				setNumber(number + 1)
  			}>
  				+
  			</button>
  		</section>

  		<section style={{ margin:'90px 0' }}>
  			<h3>The Complex Counter</h3>
  			<h4>{number}</h4>
  			<button className='btn'onClick={complexIncrease}>
  				+
  			</button>
  		</section>
  	</>
  )
};

export default UseStateCounter;
