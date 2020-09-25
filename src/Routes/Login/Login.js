import React, { Component } from 'react';
// import {Redirect} from 'react-router-dom';
// import { useHistory } from "react-router-dom";
import Spinner from '../../components/Spinner/Spinner';
import Navbar from '../../components/Navbar/Navbar';
import './Login.css';
import LoginForm from './LoginForm';
import Error from './Error/Error';
import axios from 'axios';

class Login extends Component {

  state = {
    loading : false,
    error: false,
  }

  errorReload = () =>{
    this.setState({loading : false,error : false});
  }

  onSubmit = (details) =>{

    const userData = {
      username : details.email,
      password : details.password
    }
    // const config = {
    //   headers: {
    //     Authorization : 'Bearer' +  details.email
    //   }
    // }
    // const history = useHistory();
    console.log('Userdata : ' +userData);

    const sendData = (userData) =>{
      axios.post('http://06e75fbe8e59.ngrok.io/login',userData)
        .then((response)=>{
          console.log(response);
          if(response.status === 200){
            this.setState({loading : false});
            // history.push('/');
            // axios.post('http://06e75fbe8e59.ngrok.io/authenticate')
          }
        })
        .catch(error => {
          this.setState({error : true})
          console.log(error);
        })
    }
    sendData(userData);

    this.setState({loading : true});
  }

  render() {
    
    if(this.state.error){
      return(
        <div>
          <Navbar/>
          <div className='backdrop'>
            <div className='signup_box error_box'>
              <Error reload={this.errorReload}/>
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
