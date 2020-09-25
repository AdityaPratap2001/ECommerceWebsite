import React from 'react';
import './Error.css';
import src from '../../../assets/error3.png';
import {NavLink} from 'react-router-dom';

const Error = (props) =>{
  return (
    <div className='error'>
      <img src={src} alt='error'/>
      <h5>The username and the password does not match!</h5>
      <button onClick={()=>{props.reload()}}>Try again</button>
    </div>
  );
}

export default Error;