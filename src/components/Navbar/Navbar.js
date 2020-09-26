import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import ConditinalRender from './ConditionalRender'; 
import logoSrc from '../../assets/logo.png';
import './Navbar.css';
import SearchBar from './SearchBar';

class Navbar extends Component {

  state = {
    isLoggedIn : false,
    searchTerm : null
  }

  componentDidMount(){
    this.setState({isLoggedIn : this.props.logStatus})
  }

  searchSubmit = (term) => {
    this.setState({searchTerm : term})
    console.log(this.state.searchTerm);
  }

  render() {

    return(
      <div className="Navbar navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-brand">
          <NavLink to='/'>
            <img src={logoSrc} alt='logo'/>
          </NavLink>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="NavLink navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to='/category/Men' activeStyle={{textDecoration:'underline',color:'black'}}>
                <h4>MEN</h4>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/category/Women' activeStyle={{textDecoration:'underline',color:'black'}}>
                <h4>WOMEN</h4>  
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/category/Kids' activeStyle={{textDecoration:'underline',color:'black'}}>
                <h4>KIDS</h4>  
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/category/Home_&_Living' activeStyle={{textDecoration:'underline',color:'black'}}>
                <h4>HOME & LIVING</h4>  
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/category/Travel_Bags' activeStyle={{textDecoration:'underline',color:'black'}}>
                <h4>TRAVEL BAGS</h4>  
              </NavLink>
            </li>
          </ul>
          <div className='SearchContainer'>
            <SearchBar search={this.searchSubmit}/>
          </div>
          <div className='conditional'>
            <ConditinalRender isLoggedIn={this.state.isLoggedIn}/>
          </div>
          {/* <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> */}
        </div>
      </div>
    )

    // return (
    //   <div className='Navbar'>
        // <div>
        //   <NavLink to='/'>
        //     <img src={logoSrc} alt='logo'/>
        //   </NavLink>
        // </div>
    //     <div className='NavLink'>
            // <NavLink to='/category/Men' activeStyle={{textDecoration:'underline',color:'black'}}>
            //   <h4>MEN</h4>  
            // </NavLink>
    //         <NavLink to='/category/Women' activeStyle={{textDecoration:'underline',color:'black'}}>
    //           <h4>WOMEN</h4>
    //         </NavLink>
    //         <NavLink to='/category/Kids' activeStyle={{textDecoration:'underline',color:'black'}}>
    //           <h4>KIDS</h4>
    //         </NavLink>
    //         <NavLink to='/category/Home&Living' activeStyle={{textDecoration:'underline',color:'black'}}>
    //           <h4>HOME & LIVING</h4>
    //         </NavLink>
    //         <NavLink to='/category/Travel_Bags' activeStyle={{textDecoration:'underline',color:'black'}}>
    //           <h4>TRAVEL BAGS</h4>
    //         </NavLink>
    //     </div>
        // <div className='SearchContainer'>
        //   <SearchBar search={this.searchSubmit}/>
        // </div>
    //     <ConditinalRender isLoggedIn={this.state.isLoggedIn}/>
    //   </div>
    // )
  }
}

export default Navbar;