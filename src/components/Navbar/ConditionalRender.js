import React from 'react';
import LoggedIn from './LoggedIn/LoggedIn';
import LoggedOut from './LoggedOut/LoggedOut';

const ConditionalRender = (props) => {

  // let content = <LoggedOut/>

  if(props.isLoggedIn){
    return(<LoggedIn/>)
  }
  else{
    return(<LoggedOut/>)
  }
  
}

export default ConditionalRender;