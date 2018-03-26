import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import ApolloClient from 'apollo-client-preset';
//import { Router } from 'next';

const client = new ApolloClient();

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      username: '',
      userpassword: '',
    }

   // this.handleClick = this.handleClick.bind(this);
  }

  handleClick(props){
    let userinput = document.getElementById("username");
    let userpassword = document.getElementById("userpassword");
    alert(userinput.value);
    alert(userpassword.value);

    //missing a way to make a call to the backend with graphql

    //Router.redirect('/');
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Fraktal Solutions</h1>
        </header>
        
        <form id="login_form" method="GET" action="/userLogin" onSubmit={this.handleClick.bind(this)}>
        <p class="login-message" /> This is a Log-in Screen

        <p />        
        username  <input id="username" type ='text' value={this.state.userinput}/> 
        <p />
        Password <input id="userpassword" type ='password' value={this.state.userinput} />

        <p />
        <button  class='Log_in'> <b /> Log in </button> 
        </form>
      </div>
    );
  }
}


export default App;

