import React, { Component } from 'react';
import './Order.css';
import OrderItem from './OrderItem/OrderItem';

class Order extends Component {

  state = {
    prodId : null,
    prodQuantity : null,
  }

  componentDidMount(){
    console.log(this.props.details);
    let prodIdArray = this.props.details.cart.split(';');
    let prodQtyArray = this.props.details.cartProdQty.split(';');
    this.setState({prodId : prodIdArray , prodQuantity : prodQtyArray});
  }

  render() {

    let data= (
      <h6>Loading...</h6>
    )
    if(this.state.prodId){
      data = (
        this.state.prodId.map((item,index) => {
          if(index !== (this.state.prodId.length-1))
          return <OrderItem id={item} qty={this.state.prodQuantity[index]}/>
        })
      )
    }

    let totalAmt = this.props.details.billingAmt + 50;

    return (
      <div className='order'>
        <h6 className='orderDate'>ORDER DATE : {this.props.details.createdDate}</h6>
        {data}
        <h6 className='amtPaid'>AMOUNT PAID : Rs. {totalAmt}</h6>
      </div>
    );
  }
}

export default Order;