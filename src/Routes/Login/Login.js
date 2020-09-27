import React, { Component } from 'react';
// import {Redirect,useHistory} from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';
import Navbar from '../../components/Navbar/Navbar';
import './Login.css';
import LoginForm from './LoginForm';
import Error from './Error/Error';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Login extends Component {

  state = {
    loading : false,
    error: false,
    redirect : null,
  }

  errorReload = () =>{
    this.setState({loading : false,error : false});
  }

  onSubmit = (details) =>{

    const userData = {
      username : details.email,
      password : details.password
    }
    // const userConfig = {
    //   headers: {
    //     'Content-type' : 'application/json',
    //   },
    //   data: {
    //     username : details.email,
    //     password : details.password
    //   }
    // }
    
    console.log('Userdata : ' +userData);

    const sendData = (userData) =>{
      axios.post('http://06e75fbe8e59.ngrok.io/login',userData)
        .then((response)=>{
          console.log(response);
          console.log(response.data.jwt);
          if(response.status === 200){
            if(response.data !== 'Not Verified!'){
              this.setState({loading : false});
              this.setState({redirect : '/'});
              localStorage.setItem('token',response.data.jwt);
              localStorage.setItem('username',userData.username);
            }
            else{
              this.setState({loading : false});
              this.setState({error : true})
            }
            // const history = useHistory();
            // history.push('/');

            // axios.post('http://06e75fbe8e59.ngrok.io/authenticate',userConfig)
            //   .then((res)=>{
            //     console.log('Authenticate :'+res)
            //   })
            //   .catch((err)=>{
            //     console.log(err);
            //   })
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
    
    if(this.state.redirect){
      return <Redirect to={this.state.redirect}/>
    }

    if(this.state.error){
      return(
        <div>
          <Navbar/>
          <div className='backdrop'>
            <div className='signup_box error_box'>
              <Error reload={this.errorReload} content="Username & password doesn't match"/>
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
