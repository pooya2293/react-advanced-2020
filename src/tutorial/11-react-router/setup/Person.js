import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
	// #3
	const [name,setName] = useState('default name');
	const {id} = useParams();
	useEffect(()=>{
		const newPerson = data.find((person)=>person.id === parseInt(id));
		setName(newPerson.name);
	},[]);
  return (
    <div>
      <h2>{name}</h2>
      <Link to='/people' className="btn">back</Link>
    </div>

  );
};

export default Person;
