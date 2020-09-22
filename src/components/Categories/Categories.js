import React from 'react';
import {NavLink} from 'react-router-dom';
import Category from './Category/Category';
import './Categories.css';

const Caterories = (props) => {

  let categories = ['men','women','kids','home&living','travel_bags'];

  let items = categories.map(category => {
   return(
     <NavLink to={`/${category}`}>
      <Category type={category}/>
     </NavLink>
   )   
  });

  return (
    <div className='categories'> 
    <h3>We've made Shopping easier</h3>
    <h6>
      Choose from the various categories available<br></br>
      Anything related to fashion...we've got u covered!<br></br>
    </h6>
    <div className='display_categories'>
      {items}
    </div>
    </div>
  );
}

export default Caterories;