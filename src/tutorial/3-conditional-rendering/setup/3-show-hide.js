import React, { useState, useEffect } from 'react';

const ShowHide = () => {
	const[show,setShow] = useState(false);
  return (
  	<>
  		<button className='btn' onClick={()=>setShow(!show)}>
  			toggle compo
  		</button>
  		{show && <Component1 />}

  	</>
  )

};

const Component1 = () => {
	const [size,setSize] = useState(window.innerWidth);
	const checkSize = ()=>{
		setSize(window.innerWidth);
	}
	useEffect(()=>{
		window.addEventListener('resize',checkSize);
		return()=>{
			window.removeEventListener('resize',checkSize)
		};
	},[])
	return (
		<div style={{marginTop:"35px"
		}}>
			<h2>hello I am component</h2>
			<h4>size:{size}</h4>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Ex, voluptatem fugit a id facilis qui saepe facere.</p>
		</div>
	)
}

export default ShowHide;
