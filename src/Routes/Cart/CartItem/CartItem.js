import React, { Component } from 'react';
import axios from '../../../API/baseURL/baseURL';
import srlCartImg from '../../../assets/sampleProduct.png';
import '../Cart.css';
import { NavLink } from 'react-router-dom';

class CartItem extends Component {

  state = {
    prodId : null,
    qty : null,
    data : null,
    inMyWishlist : null
  }

  componentDidMount(){
    let arr = this.props.item.split('-');
    let id = arr[0];
    let quantity = arr[1];
    // console.log(id +  ' + ' + quantity);
    this.setState({prodId : id,qty : quantity});
    // console.log(this.state); 
    axios.get(`/api/products/productId/${arr[0]}`)
      .then(res => {
        console.log(res);
        this.setState({data : res.data[0]});
      })
      .catch(err => {
        console.log(err);
      })

    let userId = localStorage.getItem('username');
    let productData = {
      username : userId,
      productId : id
    }
    console.log(productData);
    axios.post(`/doesProductExist`,productData)
    .then(res => {
      console.log(res.data);
      if(res.data){
        this.setState({inMyWishlist : true});
      }
      else{
        this.setState({inMyWishlist: false});
      }
    })
    .catch(err => {
      console.log('error');
    })

  }

  removeFromCart = () => {
    let arr = this.props.item.split('-');
    let id = arr[0];
    let userId = localStorage.getItem('username');
    let productData = {
      username : userId,
      productId : id,
      productAmt : '3'
    }
    console.log(productData);
    axios.post(`/removeFromCart`,productData)
      .then(res => {
        console.log(res);
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      })

  }

  moveToWishlist = (e) => {
    let arr = this.props.item.split('-');
    let id = arr[0];
    let userId = localStorage.getItem('username');
    let productData = {
      username : userId,
      productId : id,
      productAmt : '3'
    }
    
    axios.post(`/cartToWishlist`,productData)
      .then(res => {
        console.log(res);
        window.location.reload();
        alert('Moved to wishlist!');
      })
      .catch(err => {
        console.log(err);
      })

  }

  render() {

    let data3 = (
      <button onClick={this.moveToWishlist} type="button" className="btn btn-danger">Move to Wishlist</button>
    )
    if(this.state.inMyWishlist){
      data3 = null
    }

    var weekDate = new Date();
    weekDate.setDate(weekDate.getDate() + 7);
    weekDate = weekDate.toDateString();
    // console.log(weekDate);

    let data = (
      <div className='cartItem'>
        Loading...
      </div>
    )
    if(this.state.data){
      data = (
        <div className='cartItem'>

          <NavLink to={`/product/id/${this.state.data.id}`}>
            <div className='cartImgCont'>
              <img src={srlCartImg} alt='cartProductImg'/>
              {/* <img src={`data:image/jpeg;base64,${this.state.data.picByte}`} />  */}
            </div>

            <div className='cartItemProp'>
                  <h6 className='cartProdSeller'>{this.state.data.seller}</h6>
                  <h5 className='cartProdName'>{this.state.data.name}</h5>
                  <h5 className='cartProdPrice'>Rs. {this.state.data.price}</h5>
                  <h6>Quantity : {this.state.qty}</h6>
                  {/* <h6 className='cartProdMat'>Material : {this.state.data.material}</h6>  
                  <h6 className='cartProdFit'>Fit : {this.state.data.fit}</h6> */}
              {/* {this.state.data.id}  */}
                  {data3}
            </div>
          </NavLink>

          <div className='cartItemDelete'>
            <h6 style={{marginBottom:'0px'}}>Delivery by : {weekDate}</h6>
            <h6>7 day replacement policy</h6>
            <i className="fas fa-trash-alt" onClick={this.removeFromCart}></i>
          </div>

      </div>
      )
    }

    return (
      <div>
        {data}
      </div>
    );
  }
}

export default CartItem;