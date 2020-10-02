import React from 'react';
import './Category.css';

const Category = (props) => {
  
  let className = 'category '

  if(props.type === 'Home_&_Living'){
    className += 'shift_right';
  }
  else if(props.type === 'Travel_Bags'){
    className += 'shift_left';
  }

  return (
    <div className={className}>
      <h6>{props.type}</h6>
    </div>
  );
}

export default Category;