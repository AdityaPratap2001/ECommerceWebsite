import React, { Component } from 'react';
import './SearchSeller.css';
import axios from 'axios';

class SearchSeller extends Component {

  state = {
    userID : null,
    data : null,
  }

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios.get(`http://91d7ddfbae13.ngrok.io/api/products/productSellerUsername/${this.state.userID}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {

    let results = (
      null
    )
    if(this.state.data){
      results = (
        <h5>Results...</h5>
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