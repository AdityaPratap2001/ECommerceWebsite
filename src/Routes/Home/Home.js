import React, {Component} from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Carousel from '../../components/Carousel/Carousel';

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
      </div>
    );
  }
}

export default Home;
