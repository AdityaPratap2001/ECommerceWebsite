import React from 'react';
import './SellerSearchItem.css';

const SellerSearchItem = ({item}) => {
  return (
    <div className='sellerSearchItem'>
      
      <div className='sellerSearchItemHeader'>Product ID : #{item.id}</div>
      
      <div className='sellerSearchItemBody'>
        <div className='sellerItemLeft'>
          <div className='dataFields'>
            <div className='dataLabel'>Seller : </div>
            <div className='dataAns'>{item.seller}</div>
          </div>
          <div className='dataFields'>
            <div className='dataLabel'>Title : </div>
            <div className='dataAns'>{item.name}</div>
          </div>
          <div className='dataFields'>
            <div className='dataLabel'>Product Type : </div>
            <div className='dataAns'>{item.prodType}</div>
          </div>
          <div className='dataFields'>
            <div className='dataLabel'>Price : </div>
            <div className='dataAns'>{item.price}</div>
          </div>
          <div className='dataFields'>
            <div className='dataLabel'>Material : </div>
            <div className='dataAns'>{item.material}</div>
          </div>
        </div>
        
        <div className='sellerItemRight'>
          <div className='dataFields'>
            <div className='dataLabel'>Category : </div>
            <div className='dataAns'>{item.category}</div>
          </div>
          <div className='dataFields'>
            <div className='dataLabel'>Sub-Category :</div>
            <div className='dataAns'>{item.subCategory}</div>
          </div>
          <div className='dataFields'>
            <div className='dataLabel'>Stock : </div>
            <div className='dataAns'>{item.stock}</div>
          </div>
          <div className='dataFields'>
            <div className='dataLabel'>Fit : </div>
            <div className='dataAns'>{item.fit}</div>
          </div>
        </div>

      </div>
    
    </div>
  );
}

export default SellerSearchItem;