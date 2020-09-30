import React, { Component } from 'react';
import './SearchSeller.css';

class SearchSeller extends Component {

  state = {
    userID : null,
    data : true,
  }

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
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