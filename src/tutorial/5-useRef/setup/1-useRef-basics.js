import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
	const refContainer = useRef(null);
	const divContainer = useRef(null);

	const handleSubmit = (e)=>{
		e.preventDefault()
		console.log(divContainer.current)//show <div>hello world</div>
	}

  return (
  	<>
  		<form action="" className="form" onSubmit={handleSubmit} >
  			<div>
  				<input type="text" ref={refContainer} />
  				<button type='submit'>submit</button>
  			</div>
  			<div ref={divContainer}>hello world</div>
  		</form>
  	</>
  )
};

export default UseRefBasics;
