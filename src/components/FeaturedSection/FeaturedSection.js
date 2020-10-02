import React, { Component } from 'react';
import ProductBlock from '../ProductBlock/ProductBlock';
import './FeaturedSection.css';
import ServerService from '../../API/ServerService';


class FeaturedSection extends Component {

  state = {
    // items : null,
    userData : false,
    loggedIN : null,
    gender : null
  }

  componentDidMount(){
    
    if(this.props.personalized){
      
      let userID = localStorage.getItem('username');
      if(userID !== null){
        this.setState({loggedIN : true,userData : true});
        ServerService.fetchDetailsByUserID(userID)
          .then(res => {
            console.log(res);
            this.setState({gender : res.data.gender});
            console.log(this.state);
          })
          .catch(err => {
            console.log(err);
          })
        
      }
      else{
        this.setState({loggedIN : false})
      }
    }
    
  }

  render() {

    let data = (
      <h4>Loading...</h4>
    )
    const getRandomArbitrary = (min, max) =>{
      return Math.floor(Math.random() * (max - min) + min);
    }
    
  
    if(this.props.products){
      if(this.props.personalized && this.state.loggedIN){
        if(this.state.gender){
          let gender = null;
          if(this.state.gender === 'male'){
            gender = 'Men';
          }
          else{
            gender = 'Women';
          }
          let tempArr = [];
          let genderItems = this.props.products.map(product => {
                              if(product.category === gender && (product.id % 6 === 0)){
                                tempArr.push(product);
                              }
                            })
          let finalArr = tempArr.slice(0,8);
        
          data = (
            finalArr.map(item => <ProductBlock item={item}/>)
          )
        }
        else{
          data = (
            <h4>Wait for custom content...</h4>
          )
        }
      }
      else if(this.props.personalized && !this.state.loggedIN){
        
        let tempArr = [];
        let genderItems = this.props.products.map(product => {
                            if(product.id % getRandomArbitrary(14,19) === 0){
                              tempArr.push(product);
                            }
                          })
        let finalArr = tempArr.slice(0,8);
        genderItems = null;
          
        data = (
          finalArr.map(item => <ProductBlock item={item}/>)
        )
      }
    }



    if(this.props.products && !this.props.personalized){
  
      let tempArr = [];
      let genderItems = this.props.products.map(product => {
                          if(product.id % getRandomArbitrary(14,19) === 0){
                            tempArr.push(product);
                          }
                        })
      let finalArr = tempArr.slice(0,8);
      genderItems = null;
        
      data = (
        finalArr.map(item => <ProductBlock item={item}/>)
      )
    }
  

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