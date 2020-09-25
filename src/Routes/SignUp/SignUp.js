import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './SignUp.css';
import Spinner from '../../components/Spinner/Spinner';
import Confirmation from './Confirmation/Confirmation';
import Form from './Form';
import axios from 'axios';

class SignUp extends Component {

  state = {
    loading : false,
    statusOk : false
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
      axios.post('http://06e75fbe8e59.ngrok.io/registeruser',userData)
        .then((response)=>{
          console.log(response);
          console.log(response.status);
          if(response.status === 200){
            this.setState({loading : false});
            this.setState({statusOk : true});
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

    if(this.state.statusOk){
      return(
        <div>
          <Navbar/>
          <div className='backdrop'>
            <div className='signup_box confirmation_box'>
              <Confirmation/>
            </div>
          </div>
        </div>
      )
    }
    
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