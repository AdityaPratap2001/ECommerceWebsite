import React, { Component } from 'react';
import './ProductDetails.css';
import Navbar from '../../components/Navbar/Navbar';
import Product_Loader from './Product_Loader/Product_Loader';
import axios from '../../API/baseURL/baseURL';
import producdImgSrc from '../../assets/sampleProduct.png'; 
import { Redirect } from 'react-router-dom';

class ProductDetails extends Component {

  state = {
    productId : this.props.match.params.id,
    productDetails : null,
    redirect : null,
    wishlisted : null,
    addedToCart : null,
    quantity : 1,
  }

  componentDidMount(){
    axios.get(`/api/products/productId/${this.state.productId}`)
      .then(response => {
        console.log(response.data[0]);
        this.setState({productDetails : response.data[0]});
      })
      .catch(error =>{
        console.log(error)
      })

    let userId = localStorage.getItem('username');
    let productData = {
      username : userId,
      productId : this.state.productId
    }
    console.log(productData);
    axios.post(`/doesProductExist`,productData)
      .then(res => {
        console.log(res.data);
        if(res.data){
          this.setState({wishlisted : true});
        }
      })
      .catch(err => {
        console.log('error');
      })

    axios.post(`/doesProductExistInCart`,productData)
      .then(res => {
        if(res.data){
          this.setState({addedToCart : true});
        }
      })

  }

  addToWishlist = () => {
    // console.log('Wishlisted!');
    let token = localStorage.getItem('token');
    if(token === null){
      this.setState({redirect : '/userLogin'})
    }
    else{
      
      let userId = localStorage.getItem('username');
      let productData = {
        username : userId,
        productId : this.state.productId
      }
      console.log(productData);
      axios.post(`/addToWishlist`,productData)
        .then(response => {
          console.log(response);
          this.setState({wishlisted : true});
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
  addToCart = () => {
    console.log('Add to cart!');
    let token = localStorage.getItem('token');
    if(token === null){
      this.setState({redirect : '/userLogin'})
    }
    else{
      
      let userId = localStorage.getItem('username');
      let productData = {
        username : userId,
        productId : this.state.productId,
        productAmt : this.state.quantity
      }
      console.log(productData);
      axios.post(`/addToCart`,productData)
        .then(response => {
          console.log(response);
          this.setState({addedToCart : true});
        })
        .catch(error => {
          console.log(error);
        })
    }
  }

  removeItemFromWishlist = () => {
    console.log('will remove from wishlist!');
    let token = localStorage.getItem('token');
    if(token === null){
      this.setState({redirect : '/userLogin'})
    }
    else{
      
      let userId = localStorage.getItem('username');
      let productData = {
        username : userId,
        productId : this.state.productId
      }
      console.log(productData);
      axios.post(`/removeFromWishlist`,productData)
        .then(response => {
          console.log(response);
          this.setState({wishlisted : false});
        })
        .catch(error => {
          console.log(error);
        })
    }
  }

  removeFromCart = () => {
    console.log('will delete item from cart!');
    let token = localStorage.getItem('token');
    if(token === null){
      this.setState({redirect : '/userLogin'})
    }
    else{
      
      let userId = localStorage.getItem('username');
      let productData = {
        username : userId,
        productId : this.state.productId,
        productAmt : this.state.quantity
      }
      console.log(productData);
      axios.post(`/removeFromCart`,productData)
        .then(response => {
          console.log(response);
          this.setState({addedToCart : false});
        })
        .catch(error => {
          console.log(error);
        })
    }
  }

  qtyChange = (e) => {
    this.setState({quantity : e.target.value});
  }

  render() {

    if(this.state.redirect){
      return <Redirect to={this.state.redirect}/>
    }
    
    let wishIcon = (
      <div className='heart inacttive' onClick={this.addToWishlist}>
        <i className="fas fa-heart"/>
      </div>
    )
    let wishlistButton = (
      <button type="button" onClick={this.addToWishlist} class="btn btn-outline-danger">Add to Wishlist</button>
    )

    if(this.state.wishlisted){
      wishlistButton = (
        <button type="button" onClick={this.removeItemFromWishlist} class="btn btn-outline-danger activeBtnn">Remove from Wishlist</button>
      )
      wishIcon = (
        <div className='heart acttive' onClick={this.removeItemFromWishlist}>
          <i className="fas fa-heart"/>
        </div>
      )

    }

    let cartButton = (
      <button type="button" onClick={this.addToCart} class="btn btn-outline-danger">Add to Cart</button>
    )
    if(this.state.addedToCart){
      cartButton = (
        <button type="button" onClick={this.removeFromCart} class="btn btn-outline-danger activeBtnn">Remove from Cart</button>   
      )
    }

    let data = (
      <div>
        <Product_Loader/>
      </div>
    )
    if(this.state.productDetails){
      data = (
        <div className='productDetails'>
          
          <div className='productDetailsLeft'> 
            
            <div className='imgCont'>
              <img className='img-fluid' src={producdImgSrc} alt='product_Img'/>
              {/* <img src={`data:image/jpeg;base64,${this.state.productDetails.picByte}`} /> */}
              {wishIcon}
            </div>
          </div>

          <div className='productDetailsRight'>
            <h6 className='seller'>{this.state.productDetails.seller}</h6>
            <h5 className='title'>{this.state.productDetails.name}</h5>
            <h6 className='specialPrice'>Special price ends in 2 days!</h6>
            <h5 className='price'>Rs.{this.state.productDetails.price}</h5>
            <h5 className='offers'>Available Offers</h5>
            <i className="tag fas fa-tag"></i>
              <h5 className='specialOffer'>Special Price Get extra 5% off (price inclusive of discount)</h5><br></br>
            <i className="tag fas fa-tag"></i>
              <h5 className='specialOffer'>Bank Offers 5% off* with Axis Bank Buzz CRedit Card</h5>
            
            <div className='Quantity'>
              <h6 className='quantity'>Quantity :</h6>
              <select className='selectQnt' onChange={this.qtyChange}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>
            </div>
        
            
            <div className='productsButton'>
              {/* <button type="button" onClick={this.addToWishlist} class="btn btn-outline-danger">Wishlist</button> */}
              {/* <button type="button" onClick={this.addToCart} class="btn btn-outline-danger">Add to Cart</button> */}
              {wishlistButton}
              {cartButton}
            </div>
            
            <h5 className='prodHead'>Product Details</h5>
            <div style={{display : 'flex'}}>
              <div className='tableLabel'>
                <h6 className='tableLabels'>Type</h6>
                <h6 className='tableLabels'>Fit</h6>
                <h6 className='tableLabels'>Fabric</h6>
                <h6 className='tableLabels'>Sales Package</h6>
              </div>
              <div className='tableLabelData'>
                <h6 className='tableLabeldata'>{this.state.productDetails.prodType}</h6>
                <h6 className='tableLabeldata'>{this.state.productDetails.fit}</h6>
                <h6 className='tableLabeldata'>{this.state.productDetails.material}</h6>
                <h6 className='tableLabeldata'>Pack of 1</h6>
              </div>
            </div>

          </div>
        </div>
      )
    }

    return (
      <div>
        <Navbar/>
        <div className='displayProduct'>
          {data}
        </div>
      </div>
    );
  }
}

export default ProductDetails;