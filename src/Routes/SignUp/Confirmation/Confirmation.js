import React from 'react';
import './Confirmation.css';
import src from '../../../assets/confirmed.png';

const Confirmation = (props) =>{
  return (
    <div className='confirm'>
      <img src={src} alt='email-sent'/>
      <h5>We've sent you an confirmation link!</h5>
    </div>
  );
}

export default Confirmation;
