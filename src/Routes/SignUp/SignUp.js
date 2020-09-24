import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './SignUp.css';
import Spinner from '../../components/Spinner/Spinner';
import Form from './Form';
import axios from 'axios';

class SignUp extends Component {

  state = {
    loading : false
  }

  onSubmit = (details) =>{

    const userData = {
      firstName : details.firstName,
      lastName : details.lastName,
      username : details.email,
      password : details.password,
      confirmPassword : details.password,
      gender : details.gender,
      roles : 'user'
    }
    console.log(userData);

    const sendData = (userData) =>{
      axios.post('http://9114a0b74727.ngrok.io/registeruser',userData)
        .then((response)=>{
          console.log(response);
          console.log(response.status);
          if(response.status === 200){
            this.setState({loading : false});
          }
        })
        .catch(error => {
          console.log(error);
        })
    }
    sendData(userData);

    this.setState({loading : true});
  }

  render() {

    if(this.state.loading){
      return(
        <div>
          <Navbar/>
          <div className='backdrop'>
            <div className='signup_box'>
              <Spinner/>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div>
        <Form submitHandler={this.onSubmit}/>
      </div>
    );
  }
}

export default SignUp;