import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
	const [isLoading,setIsLoading] = useState(true);
	const [isError,setIsError] = useState(false);
	const [user,setUser] = useState('default user')

	useEffect(()=>{
		fetch(url).then((resp)=>resp.json()).
		then((user)=> {
			const {login} = user;
			setUser(login)
			setIsLoading(false)
		}).
		catch((error) => console.log(error));
	},[]);

	if(isLoading) {
		return ( 
		<h2>Loading...</h2>
		);
	}

	if(isError) {
		return (
			<div>
				<h1>Error...</h1>
			</div>
		);
	}

  return <h2>{user}</h2> 
};

export default MultipleReturns;
