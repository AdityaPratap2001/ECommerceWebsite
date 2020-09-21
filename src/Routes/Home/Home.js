import React, {Component} from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';

class Home extends Component {

  state = {
    isLoggedIn : false,
    searchTerm : null,
  }

  render() {
    return (
      <div>
        <Navbar/>
      </div>
    );
  }
}

export default Home;
