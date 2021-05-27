import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
	const refContainer = useRef(null);

	const handleSubmit = (e)=>{
		e.preventDefault()
		console.log(refContainer.current.value)//show any value u type in input
	}

  return (
  	<>
  		<form action="" className="form" onSubmit={handleSubmit} >
  			<div>
  				<input type="text" ref={refContainer} />
  				<button type='submit'>submit</button>
  			</div>
  		</form>
  	</>
  )
};

export default UseRefBasics;
