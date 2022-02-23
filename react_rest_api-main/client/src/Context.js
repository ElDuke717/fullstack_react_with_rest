import React, { Component } from 'react';
// Data helper class from Data.js
import Data from './Data';

export const Context = React.createContext(); 

export class Provider extends Component {

  state = {
    // default state of authenticated user is set to null, for establishing the name in the header
    authenticatedUser: null
  };

  constructor() {
    super();
    //initialize a new instance of the Data class inside the constructor
    this.data = new Data();
    console.log(this.data)
  }

  render() {
    // authenticated user is pulled out of state
    const { authenticatedUser } = this.state;
    
    //value is an object that contains a data property set to the data.
    const value = {
      // authenticatedUser's state is added to value, which  is passed to the context provider.
      authenticatedUser,
      data: this.data,
      // actions are functions that are passed down to the children components through value as part of the context.
      actions: {
        signIn: this.signIn,
       }
    };
    return (
      //Context.Provider provides the data that needs to be consumed by the consuming components or children.
      //Provider class is a higher order component that returns a Provider component that provides the application state and
      //actions or event handlers that need to be shared between components via the value prop.
      <Context.Provider value={value}>
        {this.props.children}
      </Context.Provider>  
    );
  }

  // Sign-in is reflected in the header component by changing the authenticatedUser state.
  signIn = async (emailAddress, password) => {
    const user = await this.data.getUser(emailAddress, password);
    if (user !== null) {
      this.setState(() => {
        return {
          authenticatedUser: user,
        };
      });
    }
    return user;
  }

  signOut = () => {

  }
}

export const Consumer = Context.Consumer;

/**
 * A higher-order component that wraps the provided component in a Context Consumer component.
 * @param {class} Component - A React component.
 * @returns {function} A higher-order component.
 */
//It automatically subscribes or connects the component passed to it to all actions and context changes. 
export default function withContext(Component) {
  return function ContextComponent(props) {
    return (
      <Context.Consumer>
        {context => <Component {...props} context={context} />}
      </Context.Consumer>
    );
  }
}
