import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

export default class UserSignIn extends Component  {
  
  state = {
    emailAddress: '',
    password: '',
    errors: [],
  }
 
  render() { 
    const {
      emailAddress,
      password,
      errors,
    } = this.state
  
  
  return (
    <div id="root">
        <div className="form--centered">
        <h2>Sign In</h2>        
        <Form 
            cancel={this.cancel}
            errors={errors}
            submit={this.submit}
            submitButtonText="Sign In"
            elements={() => (
              <React.Fragment>
                <input 
                  id="emailAddress" 
                  name="emailAddress" 
                  type="text"
                  value={emailAddress} 
                  onChange={this.change} 
                  placeholder="Email address" />
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

  change = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState(() => {
      return {
        [name]: value
      };
    });
  }

  submit = () => {
    // extract context from props passed by the provider
    const { context } = this.props;
    // unpack username and password from state
    const { emailAddress, password } = this.state;
    // call the signIn method from the context and pass email address and password into it as arguments
    context.actions.signIn(emailAddress, password)
      .then((user) => {
        if (user === null ) { 
          this.setState(() => {
            return { errors: ['Invalid username or password'] };
          });
        } else { 
          // is sign-in is successful, redirect to the home page
          this.props.history.push('/');
          console.log(`sign-in successful, ${user.firstName} ${user.lastName} is signed in!`);
        }
      })
      .catch((error) => {
        console.log(error);
        this.props.history.push('/error');
      });
  }

  cancel = () => {
    this.props.history.push('/');
  }
}
