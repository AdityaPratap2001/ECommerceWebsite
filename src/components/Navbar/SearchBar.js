import React, { Component } from 'react';
import './Navbar.css';

class SearchBar extends Component {
  state = {
    term: null
  }

  onInputChange = (event) =>{
    this.setState({term : event.target.value});
  }
  onFormSubmit = (event) =>{
    event.preventDefault();
    console.log(this.state.term);
    this.props.search(this.state.term);
  };

  render() {
    return (
      <form className='barbox' onSubmit={this.onFormSubmit}>
        <i className="fas fa-search"></i>
        <input 
          className='input_bar'
          type='text'
          value={this.state.term}
          onChange={this.onInputChange}
          placeholder='Search for products, brands & more'
        />
      </form>
    );
  }
}

export default SearchBar;