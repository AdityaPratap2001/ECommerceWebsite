import React, {Component} from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Carousel from '../../components/Carousel/Carousel';
import Categories from '../../components/Categories/Categories';
import FeaturedSection from '../../components/FeaturedSection/FeaturedSection';
import BankOffers from '../../components/BankOffers/BankOffers';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';

class Home extends Component {

  state = {
    // isLoggedIn : false,
    searchTerm : null,
    products : null
  }

  componentDidMount(){

    axios.get('http://9241293ba585.ngrok.io/api/products/allProducts')
          .then(response => {
            console.log(response);
            this.setState({products : response.data});
            console.log('items fetched state changed!');
            // console.log(this.state);
          })
          .catch(error =>{
            console.log(error)
          })
    console.log(this.state);

    // let token = localStorage.getItem('token');
    // if(token !== null){
    //   this.setState({isLoggedIn : true});
    //   // console.log(token);
    //   console.log('token exists!');
    //   console.log(this.state);
    // }
    // else{
    //   console.log("token doesn't exist!");
    // }
  }

  render() {

    // if(this.state.products){
      return (
        <div>
          {/* <Navbar logStatus={this.state.isLoggedIn}/> */}
          <Navbar/>
          <Carousel/>
          <Categories/>
          <FeaturedSection
            products={this.state.products} 
            sectionTitle='Featured Products' 
            subHead1='Choose from our best products'
            subHead2='These products are worth adding to your cart!'
          />
          <FeaturedSection
            products={this.state.products}
            sectionTitle='Personalized for You' 
            subHead1='Choose from our best products'
            subHead2='These products are worth adding to your cart!'
          />
          <BankOffers/>
          <Newsletter/>
          <Footer/>
        </div>
      );
    // }
    // return <h4>Loading...</h4>
  
  }
}

export default Home;
