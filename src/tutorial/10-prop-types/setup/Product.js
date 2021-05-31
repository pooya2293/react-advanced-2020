import React from 'react';

const Product = ({ name,image,price }) => {
	console.log(name,image,price) //sofa set undefined undefined //means object that have name sofa set didnt have image and price
  return (
  	<article className='product'>
  		<h4>single item</h4>
  		{/*<img src={image.url} alt={name} /> 
    	<h4>{name}</h4>
    	<p>${price}</p>*/}
    </article>
    )
};

export default Product;
