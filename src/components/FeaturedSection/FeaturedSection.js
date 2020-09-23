import React from 'react';
import ProductBlock from '../ProductBlock/ProductBlock';
import './FeaturedSection.css';

const FeaturedSection = (props) => {
  return (
    <div className='featured'>
      <h3>{props.sectionTitle}</h3>
      <h5>
        {props.subHead1}<br></br>
        {props.subHead2}<br></br>
      </h5>
      <div className='featured_block'>
        <ProductBlock/>
        <ProductBlock/>
        <ProductBlock/>
        <ProductBlock/>
        <ProductBlock/>
        <ProductBlock/>
        <ProductBlock/>
        <ProductBlock/>
      </div>
    </div>
  );
}

export default FeaturedSection;