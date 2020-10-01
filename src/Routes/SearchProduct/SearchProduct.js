import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './SearchProduct.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import SearchSidebar from '../../components/SearchSidebar/SearchSidebar';
import axios from 'axios';

class SearchProduct extends Component {

  state = {
    searchTerm : this.props.match.params.searchTerm,
    gender : this.props.match.params.gender,
    products : null,
  }

  componentDidMount(){
    console.log(this.state);
    if(this.state.gender){
      axios.get(`http://e76f6bed94d6.ngrok.io/api/products/productCategory/productType/${this.state.gender}/${this.state.searchTerm}`)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        })
    }
    else{
      axios.get(`http://e76f6bed94d6.ngrok.io/api/products/productType/${this.state.searchTerm}`)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        })
    }
  }

  render() {

    console.log(this.state);

    return (
      <div>
        <Navbar/>
        <div className='selected_page'>

          <div className='display_category searchCont'>
            <div className='sidebar'>
              <SearchSidebar term={this.state.searchTerm}/>
            </div>
            
            <div className='products_display'>
              <h5>{`Items related to your search : '${this.state.searchTerm}'`}</h5>
              <h5>{this.state.searchTerm}</h5>
              <h5>{this.state.gender}</h5>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default SearchProduct;