import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
const reducer = (state,action)=>{
  console.log(state,action) //{people: Array(0), isModalOpen: false, modalContent: ""} //{type: "TESTING"}
  return state; //if not use it get this error: TypeError: Cannot read property 'isModalOpen' of undefined 
};
const defaultState = {
	people: [],
	isModalOpen: false,
	modalContent: ''
}
const Index = () => {
	const [name,setName] = useState('')
	const [state,dispatch] = useReducer(reducer,defaultState)

	const handleSubmit = (e)=>{
		e.preventDefault()
		if(name){
      dispatch({ type:'TESTING' })
		}else{

		}
	}
  return (
  	<>
  		{state.isModalOpen && <Modal modalContent={state.modalContent} />}
  		<form onSubmit={handleSubmit} className='form'>
  			<div>
  				<input 
  				type="text" 
  				value={name} 
  				onChange={(e)=>setName(e.target.value)} />
  			</div>
  			<button type='submit'>add</button>
  		</form>
  		{state.people.map((person)=>{
  			return (
  				<div key={person.id}>
  					<h4>{person.name}</h4>
  				</div>
  			)
  		})}
  	</>
  );
};

export default Index;
