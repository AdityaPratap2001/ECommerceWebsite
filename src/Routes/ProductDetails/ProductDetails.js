import React, { Component } from 'react';
import './ProductDetails.css';
import Navbar from '../../components/Navbar/Navbar';
import Product_Loader from './Product_Loader/Product_Loader';
import axios from 'axios';
import producdImgSrc from '../../assets/sampleProduct.png'; 
import { Redirect } from 'react-router-dom';

class ProductDetails extends Component {

  state = {
    productId : this.props.match.params.id,
    productDetails : null,
    redirect : null
  }

  componentDidMount(){
    axios.get(`http://9241293ba585.ngrok.io/api/products/productId/${this.state.productId}`)
      .then(response => {
        console.log(response.data[0]);
        this.setState({productDetails : response.data[0]});
      })
      .catch(error =>{
        console.log(error)
      })
  }

  addToWishlist = () => {
    console.log('Wishlisted!');
    let token = localStorage.getItem('token');
    if(token === null){
      this.setState({redirect : '/userLogin'})
    }
    else{
      alert('Can work on it!');
    }
  }
  addToCart = () => {
    console.log('Add to cart!');
    let token = localStorage.getItem('token');
    if(token === null){
      this.setState({redirect : '/userLogin'})
    }
    else{
      alert('Can work on it!');
    }
  }

  render() {

    if(this.state.redirect){
      return <Redirect to={this.state.redirect}/>
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
              <div className='heart' onClick={this.addToWishlist}>
                <i className="fas fa-heart"/>
              </div>
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

            <div className='productsButton'>
              <button type="button" onClick={this.addToWishlist} class="btn btn-outline-danger">Wishlist</button>
              <button type="button" onClick={this.addToCart} class="btn btn-outline-danger">Add to Cart</button>
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
            

            {/* <h6 className='tableLabel'>Type</h6>
              <h6 className='productTableData one'>Data</h6><br></br>
            <h6 className='tableLabel'>Fit</h6>
              <h6 className='productTableData two'>Data</h6><br></br>
            <h6 className='tableLabel'>Fabric</h6>
              <h6 className='productTableData three'>Data</h6><br></br>
            <h6 className='tableLabel'>Sales Package</h6>
              <h6 className='productTableData four'>Data</h6><br></br> */}

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