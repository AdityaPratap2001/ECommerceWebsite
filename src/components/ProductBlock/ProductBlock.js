import React from 'react';
import './ProductBlock.css';
import src from '../../assets/product.png';

const ProductBlock = (props) => {
  return (
    <div className='product'>
      <img className='product_img' src={src} alt='productImg'/>
      <h4><b>Seller</b></h4>
      <h6>Product title</h6>
      <h6><b>Rs. 359</b></h6>
    </div>
  );
}

export default ProductBlock;