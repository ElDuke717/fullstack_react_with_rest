import React, { Component } from 'react';
import Cookies from 'js-cookie';
// Data helper class from Data.js
import Data from './Data';

export const Context = React.createContext(); 

export class Provider extends Component {

  state = {
    authenticatedUser: Cookies.getJSON('authenticatedUser') || null
  };

  constructor() {
    super();
    //initialize a new instance of the Data class inside the constructor
    this.data = new Data();
  }

  render() {
    //value is an object that contains a data property set to the data.
    const value = { data: this.data,
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

  
  signIn = async () => {

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
