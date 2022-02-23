import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Consumer } from './Context';

export default ({ component: Component, ...rest }) => {
  return (
    <Consumer>
      { context => (
        <Route
          {...rest}
          // if the user is authenticated, render the components passed in as a prop via PrivateRoute in the Switch
          render={props =>context.authenticatedUser ? (
            <Component {...props} />
          ) : (
            // if the user is not authenticated, redirect to the signin page
            <Redirect to='/signin' /> 
          )
          }
        />
      )}
    </Consumer>
  );
};