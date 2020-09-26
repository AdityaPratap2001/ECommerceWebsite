import React, { Component } from 'react';
import ProductBlock from '../ProductBlock/ProductBlock';
import './FeaturedSection.css';


class FeaturedSection extends Component {

  state = {
    items : this,
    dataloaded : false,
  }

  render() {

    let data = (
      <h4>Loading...</h4>
    )

    // if(this.props.products){
    //   data = (
    //     <h4>Content...</h4>
    //   )
    // }

    if(this.props.products){
      let display = this.props.products.slice(0,8);
      data = (
        display.map(item => <ProductBlock item={item}/>)
      )
    }
  
    console.log(this.props);
    // if(this.){
    //   data = (
    //     this.state.items.map((item) => {
    //       return <ProductBlock item={item}/>
    //     })
    //   )
    // }

    // let products = this.props.products;
    // console.log(products);

    return (
      <div className='featured'>
        <h3>{this.props.sectionTitle}</h3>
        <h5>
          {this.props.subHead1}<br></br>
          {this.props.subHead2}<br></br>
        </h5>
        <div className='featured_block'>
          { data }
      
          {/* <ProductBlock/>
          <ProductBlock/>
          <ProductBlock/>
          <ProductBlock/>
          <ProductBlock/>
          <ProductBlock/>
          <ProductBlock/>
          <ProductBlock/> */}
        </div>
      </div>
    );
  }
}  

export default FeaturedSection;