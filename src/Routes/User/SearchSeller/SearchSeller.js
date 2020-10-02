import React, { Component } from 'react';
import SellerSearchItem from './SellerSearchItem/SellerSearchItem';
import './SearchSeller.css';
import axios from '../../../API/baseURL/baseURL';
import noSellerDataImg from '../../../assets/noSellerData.png';
import searchLoaderSRC from '../../../assets/searchLoader.gif';

class SearchSeller extends Component {

  state = {
    userID : null,
    data : null,
    loading : null,
    isEmpty : null
  }

  submitHandler = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.setState({loading : true,isEmpty : null});
    axios.get(`/api/products/productSellerUsername/${this.state.userID}`)
      .then(res => {
        this.setState({loading : false});
        console.log(res.data);
        if(res.data.length === 0){
          this.setState({isEmpty : true});
        }
        else{
          this.setState({data : res.data});
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {

    let results = (
      null
    )
    if(this.state.data && !this.state.isEmpty){
    results = (
        <div className='sellerSearchResults'>
          {
            this.state.data.map(item => {
              return <SellerSearchItem item={item}/>
              // <SellerSearchItem/>
            })
          }
        </div>
      )
    }
    if(this.state.loading){
      results = (
        <img src={searchLoaderSRC} alt='loading...' style={{width : '50%'}}/>
      )
    }
    if(this.state.isEmpty){
      results = (
        <img src={noSellerDataImg} alt='noDetailsAvailable' style={{width : '50%'}}/>
      )
    }

    return (
      <div className='searchModule'>
        <h5>Seller Search</h5>
        <p>
          See how your product is doing! <br></br>
          Search to see the current stock of various products sold by various seller! 
        </p>

        <form onSubmit={this.submitHandler}>
          <div className='formDivision'>
            <div style={{fontWeight : '500'}}>Enter Seller ID :</div>
            <div>
              <input 
                placeholder='Enter SellerID' 
                type='email' 
                value={this.state.userID} 
                onChange={(e)=>{this.setState({userID : e.target.value})}}
                className='sellerID'
              />
            </div>
          </div>
          <button className="btn btn-primary" type='submit'>Search</button>
        </form>

        <div>
          {results}
        </div>

      </div>
    );
  }
}

export default SearchSeller;