import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './SelectedCategory.css';
import Navbar from '../../components/Navbar/Navbar';

class SelectedCategory extends Component {

  state = {
    category : this.props.match.params.id,
    subcategory : this.props.match.params.id2
  }

  render() {
    // console.log(this.props.match.params.id);
    console.log(this.state);
    let navContent = (
      <div className='breadcrumbnav'>
        <NavLink className='link' exact to='/' activeStyle={{textDecoration:'underline'}}>
          Home
        </NavLink>
         > 
         <NavLink className='link' exact to={`/category/${this.state.category}`} activeStyle={{textDecoration:'underline'}}>
          {this.state.category} 
         </NavLink>
      </div>
    )
    if(this.state.subcategory){
      navContent = (
        <div className='breadcrumbnav'>
        <NavLink className='link' exact to='/' activeStyle={{textDecoration:'underline'}}>
          Home
        </NavLink>
         > 
         <NavLink className='link' exact to={`/category/${this.state.category}`} activeStyle={{textDecoration:'underline'}}>
          {this.state.category} 
         </NavLink>
         >
         <NavLink className='link' exact to={`/category/${this.state.subcategory}`} activeStyle={{textDecoration:'underline'}}>
          {this.state.subcategory} 
         </NavLink>
      </div>
      )
    }
    
    return (
      <div>
        <Navbar/>
        <div className='selected'>

          {navContent}


        </div>
      </div>
    );
  }
}

export default SelectedCategory;
