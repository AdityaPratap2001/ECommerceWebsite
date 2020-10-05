import React, { Component } from 'react';
import Spinner from '../../components/Spinner/Spinner';
import Navbar from '../../components/Navbar/Navbar';
import './Login.css';
import LoginForm from './LoginForm';
import Error from './Error/Error';
import { Redirect } from 'react-router-dom';
import ServerService from '../../API/ServerService';

class Login extends Component {

  state = {
    loading : false,
    error: false,
    notVerified : null,
    redirect : null,
  }

  errorReload = () =>{
    this.setState({loading : false,error : false,notVerified : false});
  }

  onSubmit = (details) =>{

    const userData = {
      username : details.email,
      password : details.password
    }
    
    // console.log('Userdata : ' +userData);

    const sendData = (userData) =>{

      ServerService.login(userData)
        .then((response)=>{
          console.log(response);
          console.log(response.data.jwt);
          if(response.status === 200){
            if(response.data !== 'Not Verified!'){

              localStorage.setItem('token',response.data.jwt);
              localStorage.setItem('username',userData.username);

              ServerService.fetchDetailsByUserID(userData.username)
                .then(res => {
                  console.log(res);
                  if(res.data.roles === 'Seller'){
                    this.setState({loading : false});
                    this.setState({redirect : '/Seller'});
                    localStorage.setItem('role','seller');
                    window.location.reload();
                  }
                  else{
                    this.setState({loading : false});
                    this.setState({redirect : '/'});
                    window.location.reload();
                  }
                })
                .catch(err => {
                  console.log(err);
                })
              
              
            }
            else{
              this.setState({notVerified : true});
              this.setState({loading : false});
            }
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
              <Error reload={this.errorReload} showExtraText={false} content="Username & password doesn't match"/>
            </div>
          </div>
        </div>
      )
    }

    if(this.state.notVerified){
      return(
        <div>
          <Navbar/>
          <div className='backdrop'>
            <div className='signup_box error_box'>
              <Error reload={this.errorReload} showExtraText={true} content="Your account has not yet been verified!"/>
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
