import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import ConditinalRender from './ConditionalRender'; 
import logoSrc from '../../assets/logo2.png';
import './Navbar.css';
import SearchBar from './SearchBar';

class Navbar extends Component {

  state = {
    isLoggedIn : false,
    searchTerm : null
  }

  searchSubmit = (term) => {
    this.setState({searchTerm : term})
    console.log(this.state.searchTerm);
  }

  render() {
    return (
      <div className='Navbar'>
        <div>
          <NavLink to='/'>
            <img src={logoSrc} alt='logo'/>
          </NavLink>
        </div>
        <div className='NavLink'>
            <NavLink to='/men' activeStyle={{textDecoration:'underline',color:'black'}}>
              <h4>MEN</h4>  
            </NavLink>
            <NavLink to='/women' activeStyle={{textDecoration:'underline',color:'black'}}>
              <h4>WOMEN</h4>
            </NavLink>
            <NavLink to='/kids' activeStyle={{textDecoration:'underline',color:'black'}}>
              <h4>KIDS</h4>
            </NavLink>
            <NavLink to='/home&living' activeStyle={{textDecoration:'underline',color:'black'}}>
              <h4>HOME & LIVING</h4>
            </NavLink>
            <NavLink to='/travel_bags' activeStyle={{textDecoration:'underline',color:'black'}}>
              <h4>TRAVEL BAGS</h4>
            </NavLink>
        </div>
        <div className='SearchContainer'>
          <SearchBar search={this.searchSubmit}/>
        </div>
        <ConditinalRender isLoggedIn={this.state.isLoggedIn}/>
      </div>
    )
  }
}

export default Navbar;