import React, { Component } from 'react';
import Spinner from '../../components/Spinner/Spinner';
import Navbar from '../../components/Navbar/Navbar';
import './Login.css';
import LoginForm from './LoginForm';

class Login extends Component {

  state = {
    loading : false
  }

  onSubmit = (details) =>{
    console.log(details);
    this.setState({loading : true});
  }

  render() {
      
    if(this.state.loading){
      return(
        <div>
          <Navbar/>
          <div className='backdrop'>
            <div className='login_box'>
              <Spinner/>
            </div>
          </div>
        </div>
      )
    }
    return(
      <div>
        <LoginForm submitHandler={this.onSubmit}/>
      </div>
    )
  }
}

export default Login;
