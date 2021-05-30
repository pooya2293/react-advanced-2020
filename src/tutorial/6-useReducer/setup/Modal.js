import React, { useEffect } from 'react';

const Modal = ({ modalContent,closeModal,people }) => {

	useEffect(() => {
		setTimeout(()=>{
			closeModal()
		}, 3000);
	},[people])
  return (
  	<div className='modal'>
  		<p>{modalContent}</p>
  	</div>
  )
};

export default Modal;
