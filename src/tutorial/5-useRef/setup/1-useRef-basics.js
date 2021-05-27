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

	useEffect(()=>{
		console.log(refContainer.current) //<input type="text">
		refContainer.current.focus();//when each render Add focus to curent ant it  does not need dependenciy useEffecte re-render
	})
  return (
  	<>
  		<form action="" className="form" onSubmit={handleSubmit} >
  			<div>
  				<input type="text" ref={refContainer} />
  				<button type='submit'>submit</button>
  			</div>
  		</form>
  		<div ref={divContainer}>hello world</div>
  	</>
  )
};

export default UseRefBasics;
