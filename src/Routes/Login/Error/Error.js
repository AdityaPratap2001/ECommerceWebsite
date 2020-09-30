import React from 'react';
import './Error.css';
import src from '../../../assets/error3.png';
// import {NavLink} from 'react-router-dom';

const Error = (props) =>{

  let data = (
    <h6>A verification link has been sent to your Email!</h6>
  )
  if(props.showButton){
    data = (
      <button onClick={()=>{props.reload()}}>Try again</button>
    )
  }
  return (
    <div className='error'>
      <img src={src} alt='error'/>
      <h5>{props.content}</h5>
      {data}
    </div>
  );
}

export default Error;