import React, { useState } from 'react';

const UseStateBasics = () => {


 const [text,setText]= useState('salam');

 const handelClick = ()=> {
 	(text === 'salam')?
  	setText ('mahla'):setText ('salam')
 }
 
 return (
  <React.Fragment>
  	<h3>{text}</h3>
  	<button  onClick={handelClick} className='btn'>
  	change text
  	</button>
  </React.Fragment>
  );


};

export default UseStateBasics;
