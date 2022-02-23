import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

export default class UserSignIn extends Component  {
  
  state = {
    username: '',
    password: '',
    errors: [],
  }
 
  render() { 
    const {
      emailAddress,
      password,
      //errors,
    } = this.state
  
  
  return (
    <div id="root">
        <div className="form--centered">
        <h2>Sign In</h2>        
        <Form 
            // cancel={this.cancel}
            // errors={'errors'}
            // submit={this.submit}
            submitButtonText="Sign In"
            elements={() => (
              <React.Fragment>
                <label>Email Address</label>
                <input 
                  label="Email address" 
                  id="username" 
                  name="username" 
                  type="text"
                  value={emailAddress} 
                  onChange={this.change} 
                  placeholder="Email address" />
                <label>Password</label>
                <input 
                  id="password" 
                  name="password"
                  type="password"
                  value={password} 
                  onChange={this.change} 
                  placeholder="Password" />                
              </React.Fragment>
        )} />
          <p>
            Don't have a user account? <Link to="/signup">Click here</Link> to sign up!
          </p>
        </div>
    </div>     
   

    );
  }
}
