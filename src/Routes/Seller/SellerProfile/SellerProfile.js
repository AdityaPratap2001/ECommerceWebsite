import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import logoSrc from '../../../assets/logo.png';
import './SellerProfile.css';
import ServerService from '../../../API/ServerService';
import loadSrc from '../../../assets/loader2.gif';
import ProfileDetails from '../../User/ProfileDetails/ProfileDetails';
import ChangePassword from '../../User/ChangePassword/ChangePassword';
import ProductForm from '../ProductForm/ProductForm';


class SellerProfile extends Component {

  state = {
    details : null,
    username : null,
  }

  submit = (newPass) => {
    let userId = localStorage.getItem('username');
    let newPassDetails = {
      username : userId,
      password : newPass.old_password,
      newPassword : newPass.password,
      newConfirmPassword : newPass.confirm_password
    }
    console.log(newPassDetails);

    ServerService.changePassword(newPassDetails)
      .then(res => {
        console.log(res);
        if(res.status === 200){
          alert('password changed successfully!');
        }
      })
      .catch(err => {
        alert('You entered wrong password!');
      })
  }

  submitProduct = (details) => {
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

  componentDidMount(){
    let userId = localStorage.getItem('username');

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
      this.setState({redirect : '/Seller'});
    }
  }

  render() {

    let data = (
      <div className='wishLoader'>
        <img src={loadSrc} alt='Loader'/>
      </div>
    )
    let data2 = data;
    let data3 = null;
    
    if(this.state.details){
      data = (
        <ProfileDetails detail={this.state.details} showExtra={false}/>
      )

      data2 = (
        <div className='productForm'>
          <div class="accordion" id="accordionExample">
            <div class="card">
              <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                  <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Click to change your password!
                  </button>
                </h2>
              </div>

              <div id="collapseOne" class="collapse collapseForm" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body">
                  <ChangePassword submitHandler={this.submit}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      )

      data3 = (
    
        <div className='productForm'>
          <div class="accordion" id="accordionExample">
            <div class="card">
              <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                {/* <h5>Sell your product</h5> */}
                  <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                    Click to sell your Product!
                  </button>
                </h2>
              </div>
  
                <div id="collapseTwo" class="collapse collapseForm" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div class="card-body">
                    <ProductForm submitHandler={this.submitProduct}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
      )
    }

    return (
      <div>

        <nav>
          <div className="Navbar sellerNav navbar navbar-expand-lg navbar-light bg-light" style={{ boxShadow : '0px 3px 9px #c6c6cc'}}>            
            <div className="navbar-brand">
                <img src={logoSrc} alt='logo'/>
            </div>
            <div style={{position: 'absolute',right : '5%'}}>
              <NavLink to='/Seller/user'>
                <i class="fas fa-user"></i>
              </NavLink>
            </div>
          </div>
        </nav>

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
              <h5>Secure your account</h5>
              {data2}
            </div>

          </div>
         
          <div className='searchForSeller'>
            <h5 style={{margin:'24px'}}>Sell your product</h5>
            {data3}
          </div>
          

        </div>

      </div>
    );
  }
}

export default SellerProfile;