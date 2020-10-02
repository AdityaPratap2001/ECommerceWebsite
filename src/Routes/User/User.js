import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import {NavLink, Redirect} from 'react-router-dom';
import loadSrc from '../../assets/loader2.gif';
import './User.css';
import ProductForm from './ProductForm/ProductForm';
import SearchSeller from './SearchSeller/SearchSeller'; 
import ServerService from '../../API/ServerService';

class User extends Component {

  state = {
    details : false,
    userName : 'Username',
    redirect : null,
  }

  componentDidMount(){
    let userId = localStorage.getItem('username');
    // axios.get(`/user/${userId}`)
    ServerService.fetchDetailsByUserID(userId)
      .then(res => {
        console.log(res);
        this.setState({details : res.data});
        this.setState({userName : this.state.details.firstName});
      })
      .catch(err => {
        console.log(err);
      })
    
    if(userId === null){
      this.setState({redirect : '/'});
    }
  }

  submit = (details) => {
    const prodDetails = {
      name : details.title,
      price : Number(details.price),
      stock : Number(details.stock),
      seller : details.sellerBrand,
      category : details.category,
      subCategory : details.subcategory,
      fit : details.fit,
      material : details.material,
      prodType : details.type,
      sellerUsername : details.sellerID
    }
    console.log(prodDetails);

    // let userId = localStorage.getItem('username');
    ServerService.pushProduct(prodDetails)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err)
      })
  }

  logOut = (e) => {
    localStorage.clear();
    window.location.reload();
  }

  render() {

    if(this.state.redirect){
      return <Redirect to={this.state.redirect}/>
    }

    let data = (
      <div className='wishLoader'>
        <img src={loadSrc} alt='Loader'/>
      </div>
    )
    let data2 = data;

    if(this.state.details){
      let wishItems = this.state.details.wishlist.split(';');
      let wishNum = wishItems.length - 1;
      let cartItems = this.state.details.cart.split(';');
      let cartNum = cartItems.length - 1;

      data = (
        <div className='userDetailsDisplay'>
          <div>
            <div>First-Name : </div>
            <div className='details'>{this.state.details.firstName}</div>
          </div>
          <div>
            <div>Last-Name : </div>
            <div className='details'>{this.state.details.lastName}</div>
          </div>
          <div>
            <div>Gender : </div>
            <div className='details gender'>{this.state.details.gender}</div>
          </div>
          <div>
            <div>Registered Email :</div>
            <div className='details'>{this.state.details.username}</div>
          </div>
          <div>
            <div>Items in Wishlist :</div>
            <div className='details'>{wishNum}</div>
          </div>
          <div>
            <div>Items in Cart :</div>
            <div className='details'>{cartNum}</div>
          </div>
        </div>
      )
      data2 = (
        <div className='productForm'>
          <div class="accordion" id="accordionExample">
            <div class="card">
              <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                  <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Click to sell your Product!
                  </button>
                </h2>
              </div>

              <div id="collapseOne" class="collapse collapseForm" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body">
                  <ProductForm submitHandler={this.submit}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
    }

    return (
      <div>
        <Navbar/>
        <div className='wishlistContainer'>
          
          <div className='accountBlock'>
            
            <div className='user'>
              <i class="fas fa-2x fa-user-circle"></i>
              <div className='helloUser'>
                <h6 className='hello'>Hello,</h6>
                <h6 className='username'>{this.state.userName}</h6>
              </div>
            </div>
            
            <div className='accountLinks'>
              <NavLink to='/user'>
                <i class="fas fa-user-cog"></i>
                Profile Details
              </NavLink>
              <NavLink to='/wishlist'>
                <i class="fas fa-heart"></i>
                My Wishlist
              </NavLink>
              <NavLink to='/cart'>
                <i class="fas fa-shopping-cart"></i>
                My Cart
              </NavLink>
            </div>

            <div className='logoutBtn'>
              <button type="button" onClick={this.logOut} class="btn btn-dark logoutButton">
                Logout
              </button>
            </div>

          </div>

          <div className='rightDisplay'>
            
            <div>
              <h5 className='myWishlist'>Profile Details</h5>
              {data}
            </div>
            
            <div className='sellYourOwn'>
              <h5>Sell your own Products</h5>
              {data2}
            </div>

          </div>
         
          <div className='searchForSeller'>
            <SearchSeller/>
          </div>
          

        </div>
      </div>
    );
  }
}

export default User;