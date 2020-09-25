import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Routes/Home/Home';
import Signup from './Routes/SignUp/SignUp';
import Login from './Routes/Login/Login';
import './App.css';
import SelectedCategory from './Routes/SelectedCategory/SelectedCategory';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' exact component={Home}/>
        <Route path='/userSignup' exact component={Signup}/>
        <Route path='/userLogin' exact component={Login}/>
        <Route path='/category/:id' exact 
          render={props => (<SelectedCategory key={props.location.pathname} {...props}/>)}
        />
        <Route path='/category/:id/:id2' exact 
          render={props => (<SelectedCategory key={props.location.pathname} {...props}/>)}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
