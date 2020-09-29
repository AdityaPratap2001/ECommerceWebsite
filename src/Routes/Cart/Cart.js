import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import loadSrc from '../../assets/loader2.gif';
import axios from 'axios';
import CartItem from './CartItem/CartItem';
import './Cart.css';

class Cart extends Component {

  state = {
    list : null,
    isEmpty : null,
  }

  componentDidMount(){
    let userId = localStorage.getItem('username');
    axios.get(`http://91d7ddfbae13.ngrok.io/myCart/${userId}`)
      .then(res => {
        console.log(res);
        if(res.data.length === 1){
          this.setState({isEmpty : true})
        }
        else{
          this.setState({list : res.data});
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {

    if(this.state.list){
      var cartItems = (
        <div>
          {
            this.state.list.map((cartItem,index) => {
              if(index !== (this.state.list.length-1) ){
                return <CartItem item={cartItem}/>
              }
              else{
                return null;
              }
            })
          }
        </div>
      )
    }

    let data = (
      <div className='wishLoader'>
        <img src={loadSrc} alt='Loader'/>
      </div>
    )
    if(this.state.list){
      data = (
        <div className='cart'>
          
          <div className='cartItems'>
            <h5 className='myCart'>My Cart</h5>
            {cartItems}
          </div>
          
          <div className='cartValue'>
            Value
          </div>
        
        </div>
      )
    }

    return (
      <div>
        <Navbar/>
        <div className='cart_container'>

          {data}

        </div>
      </div>
    );
  }
}

export default Cart;