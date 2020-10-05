import React, { Component } from 'react';
import ProductBlock from '../ProductBlock/ProductBlock';
import './FeaturedSection.css';
import ServerService from '../../API/ServerService';
import axios from 'axios';


class FeaturedSection extends Component {

  state = {
    items : null,
    userData : false,
    loggedIN : null,
    gender : null
  }

  componentDidMount(){

    if(!this.props.personalized){
      console.log('FEATURED PRODUCTS!');
      axios.get('http://0d8c55b48a6d.ngrok.io/api/products/featuredProducts')
        .then(res => {
          console.log(res.data);
          this.setState({items : res.data});
        })
        .catch(err => {
          console.log(err);
        })
    }
    else{
      console.log('PERSONALIZED PRODUCTS!');
      let userID = localStorage.getItem('username');
      if(userID !== null){
        ServerService.fetchDetailsByUserID(userID)
          .then(res => {
            console.log(res);
            this.setState({gender : res.data.gender});
            console.log(this.state.gender);
          }).then(() => {
              if(this.state.gender === 'male'){
                axios.get(`http://0d8c55b48a6d.ngrok.io/api/products/personalisedProducts/Men`)
                  .then(res => {
                    console.log(res);
                    this.setState({items : res.data});
                  })
                  .catch(err => {
                    console.log(err);
                  })
              }
              else if(this.state.gender === 'female'){
                axios.get(`http://0d8c55b48a6d.ngrok.io/api/products/personalisedProducts/Women`)
                  .then(res => {
                    console.log(res);
                    this.setState({items : res.data});
                  })
                  .catch(err => {
                    console.log(err);
                  })
              }
            })
          // .catch(err => {
          //   console.log(err);
          // })
      }
      else{
        axios.get('http://0d8c55b48a6d.ngrok.io/api/products/featuredProducts')
        .then(res => {
          console.log(res);
          this.setState({items : res.data});
        })
        .catch(err => {
          console.log(err);
        })
      }

    }

    
    // if(this.state.gender){
      // if(this.state.gender === 'male'){
      //   axios.get(`http://0d8c55b48a6d.ngrok.io/api/products/personalisedProducts/Men`)
      //     .then(res => {
      //       console.log(res);
      //       this.setState({items : res.data});
      //     })
      //     .catch(err => {
      //       console.log(err);
      //     })
      // }
      // else if(this.state.gender === 'female'){
      //   axios.get(`http://0d8c55b48a6d.ngrok.io/api/products/personalisedProducts/Women`)
      //     .then(res => {
      //       console.log(res);
      //       this.setState({items : res.data});
      //     })
      //     .catch(err => {
      //       console.log(err);
      //     })
      // }
    // }


    // if(this.props.personalized){
      
    //   let userID = localStorage.getItem('username');
    //   if(userID !== null){
    //     this.setState({loggedIN : true,userData : true});
    //     ServerService.fetchDetailsByUserID(userID)
    //       .then(res => {
    //         console.log(res);
    //         this.setState({gender : res.data.gender});
    //         console.log(this.state);
    //       })
    //       .catch(err => {
    //         console.log(err);
    //       })
        
    //   }
    //   else{
    //     this.setState({loggedIN : false})
    //   }
    // }
    
  }

  render() {

    let data = (
      <h4>Loading...</h4>
    )
    if(this.state.items){
       data = this.state.items.map(item => {
                return <ProductBlock item={item}/>
              })
    }

    if(this.props.personalized&& this.state.items && this.state.gender){
      data = this.state.items.map(item => {
                return <ProductBlock item={item}/>
              })
    }
    // const getRandomArbitrary = (min, max) =>{
    //   return Math.floor(Math.random() * (max - min) + min);
    // }
    
  
    // if(this.props.products){
    //   if(this.props.personalized && this.state.loggedIN){
    //     if(this.state.gender){
    //       let gender = null;
    //       if(this.state.gender === 'male'){
    //         gender = 'Men';
    //       }
    //       else{
    //         gender = 'Women';
    //       }
    //       let tempArr = [];
    //       let genderItems = this.props.products.map(product => {
    //                           if(product.category === gender && (product.id % 6 === 0)){
    //                             tempArr.push(product);
    //                           }
    //                         })
    //       let finalArr = tempArr.slice(0,8);
        
    //       data = (
    //         finalArr.map(item => <ProductBlock item={item}/>)
    //       )
    //     }
    //     else{
    //       data = (
    //         <h4>Wait for custom content...</h4>
    //       )
    //     }
    //   }
    //   else if(this.props.personalized && !this.state.loggedIN){
        
    //     let tempArr = [];
    //     let genderItems = this.props.products.map(product => {
    //                         if(product.id % getRandomArbitrary(14,19) === 0){
    //                           tempArr.push(product);
    //                         }
    //                       })
    //     let finalArr = tempArr.slice(0,8);
    //     genderItems = null;
          
    //     data = (
    //       finalArr.map(item => <ProductBlock item={item}/>)
    //     )
    //   }
    // }



    // if(this.props.products && !this.props.personalized){
  
    //   let tempArr = [];
    //   let genderItems = this.props.products.map(product => {
    //                       if(product.id % getRandomArbitrary(14,19) === 0){
    //                         tempArr.push(product);
    //                       }
    //                     })
    //   let finalArr = tempArr.slice(0,8);
    //   genderItems = null;
        
    //   data = (
    //     finalArr.map(item => <ProductBlock item={item}/>)
    //   )
    // }
  

    return (
      <div className='featured'>
        <h3>{this.props.sectionTitle}</h3>
        <h5>
          {this.props.subHead1}<br></br>
          {this.props.subHead2}<br></br>
        </h5>
        
        <div className='featured_block'>
          { data }
        </div>
      </div>
    );
  }
}  

export default FeaturedSection;