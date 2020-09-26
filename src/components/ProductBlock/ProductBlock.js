import React from 'react';
import './ProductBlock.css';
import src from '../../assets/product.png';

const ProductBlock = (props) => {
  return (
    <div className='product'>
      <img className='product_img' src={src} alt='productImg'/>
      <h4><b>{props.item.seller}</b></h4>
      <h6>{props.item.name}</h6>
      <h6><b>Rs. {props.item.price}</b></h6>
    </div>
  );
}

export default ProductBlock;