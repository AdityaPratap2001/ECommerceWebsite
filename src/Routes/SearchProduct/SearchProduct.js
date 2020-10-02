import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './SearchProduct.css';
import SearchSidebar from '../../components/SearchSidebar/SearchSidebar';
import axios from '../../API/baseURL/baseURL';
import ProductBlock from '../../components/ProductBlock/ProductBlock';
import searchLoaderSRC from '../../assets/searchLoader.gif';
import searchEmptySRC from '../../assets/searchEmpty.gif';

class SearchProduct extends Component {

  state = {
    searchTerm : this.props.match.params.searchTerm,
    gender : this.props.match.params.gender,
    products : null,
    noItems : null
  }

  componentDidMount(){
    console.log(this.state);
    if(this.state.gender){
      axios.get(`/api/products/productCategory/productType/${this.state.gender}/${this.state.searchTerm}`)
        .then(res => {
          console.log(res.data);
          if(res.data.length === 0){
            this.setState({noItems : true});
          }
          else{
            this.setState({products : res.data});
          }
        })
        .catch(err => {
          console.log(err);
        })
    }
    else{
      axios.get(`/api/products/productType/${this.state.searchTerm}`)
        .then(res => {
          console.log(res);
          if(res.data.length === 0){
            this.setState({noItems : true});
          }
          else{
            this.setState({products : res.data});
          }
        })
        .catch(err => {
          console.log(err);
        })
    }
  }

  render() {

    let data = (
      // <h2>Loading...</h2>
      <img src={searchLoaderSRC} className='searchLoadImg' alt='searchLoader'/>
    )
    if(this.state.products){
      data = (
        this.state.products.map(item => {
          return <ProductBlock item={item}/>
        })
      )
    }
    if(this.state.noItems){
      data = (
        <img src={searchEmptySRC} className='searchEmpty' alt='noItemsFound'/>
      )
    }

    return (
      <div>
        <Navbar/>
        <div className='selected_page'>

          <div className='display_category searchCont'>
            <div className='sidebar'>
              <SearchSidebar term={this.state.searchTerm}/>
            </div>
            
            <div className='products_display searchDisplayCont'>
              <h5>{`Items related to your search : "${this.state.searchTerm}"`}</h5>
              <div className='displayContainer searchLoad'>
                {data}
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default SearchProduct;