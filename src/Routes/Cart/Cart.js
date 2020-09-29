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
  
  placeOrder = () => {
    alert('Order Placed!');
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

    // var weekDate = new Date();
    // var options = {weekday : 'long',month : 'long',day : 'numeric'};
    // weekDate.setDate(weekDate.getDate() + 7);
    // weekDate.toString(options);
    var weekDate = new Date();
    weekDate.setDate(weekDate.getDate() + 7);
    weekDate = weekDate.toDateString();

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
            <div className='cartValueHeader'>
              PRICE DETAILS
            </div>
            <div className='cartCharge'>
              <div>
                <div>Price ({this.state.list.length-1} items)</div>
                <div>Rs. {this.state.list[this.state.list.length - 1]}</div>
              </div>
              <div>
                <div>Delivery Charges</div>
                <div>Rs. 50</div>
              </div>
            </div>
            <div className='totalAmount'>
              <div>TOTAL AMOUNT</div>
              <div>Rs. {Number(this.state.list[this.state.list.length - 1])+50}</div>
            </div>
            <div className='deliveryBy'>
              <div>Delivery By :</div>
              {/* <div> Saturday, Oct 6</div> */}
              <div>{weekDate}</div>
            </div>
            {/* <div>  */}
            <button type="button" onClick={this.placeOrder} className="orderButton btn btn-dark">Place Order</button>
            {/* </div> */}
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