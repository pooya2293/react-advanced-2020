import React from 'react';

const Product = ({ name,image,price }) => {
  return (
  	<article className='product'>
  		<img src={image.url} alt={name} /> {/* getting big fat error becues in url api one an item do'nt have image url and url is undefind too  */}
    	<h4>{name}</h4>
    	<p>${price}</p>
    </article>
    )
};

export default Product;
