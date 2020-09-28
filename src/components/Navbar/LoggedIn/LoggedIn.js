import React from 'react';
import {NavLink} from 'react-router-dom';

const Login = (props) => {
  return (
    <div className='conditional_render logged_in'>
      <NavLink to='/wishlist'>
        <i class="fas fa-heart"></i>
      </NavLink>
      <NavLink to='/cart'>
        <i class="fas fa-shopping-cart"></i>
      </NavLink>
      <NavLink to='/user'>
        <i class="fas fa-user"></i>
      </NavLink>
    </div>
  );
}

export default Login; 