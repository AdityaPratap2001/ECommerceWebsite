import React, {Component} from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Carousel from '../../components/Carousel/Carousel';
import Categories from '../../components/Categories/Categories';
import FeaturedSection from '../../components/FeaturedSection/FeaturedSection';

class Home extends Component {

  state = {
    isLoggedIn : false,
    searchTerm : null,
  }

  render() {
    return (
      <div>
        <Navbar/>
        <Carousel/>
        <Categories/>
        <FeaturedSection 
          sectionTitle='Featured Products' 
          subHead1='Choose from our best products'
          subHead2='These products are worth adding to your cart!'
        />
        <FeaturedSection
          sectionTitle='Personalized for You' 
          subHead1='Choose from our best products'
          subHead2='These products are worth adding to your cart!'
        />
      </div>
    );
  }
}

export default Home;
