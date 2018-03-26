import React, { Component } from 'react';


import './customers.css';




class Customers extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      user: []
    }

   // this.handleClick = this.handleClick.bind(this);
  }


  componentDidMount(){
    fetch('/user/all')
      .then(res => res.json())
      .then(customers => this.setState({customers}, () => console.log('Customers fetched.. ', customers)));
  }
  
  render() {
    return (
      <div className="Customers">
        <form id="login_form" method="POST" action="/user" >
        <p className="login-message" /> This is a Log-in Screen

        <p />        
        username  <input id="username" type ='text' value={this.state.userinput}/> 
        <p />
        Password <input id="userpassword" type ='password' value={this.state.userinput} />

        <p />
        <button  className='Log_in'> <b /> Log in </button> 
        </form>
      </div>
    );
  }
}


export default Customers;

