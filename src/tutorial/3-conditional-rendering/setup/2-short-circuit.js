import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
	const [text,setText] = useState('');
	const [isError,setIsError] = useState(false);
  	const firstValue = text || 'hello world';
  	const secondValue = text && 'hello world';

  return (
   	<>
   		<h2>short circuit</h2>
   		<h1>{firstValue}</h1>
      <h1>{text || 'john doe'}</h1>
      <button className='btn' onClick={() => setIsError(!isError)}>
        toggle Error
      </button>
      {isError && <h3>Error...</h3>}
   	</>
   )
};

export default ShortCircuit;
