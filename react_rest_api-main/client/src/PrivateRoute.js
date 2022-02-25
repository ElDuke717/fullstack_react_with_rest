import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Consumer } from './Context';

// PrivateRoute component is a high-order component for protecting routes.
// Component is destructed and renamed, all other props passed are passed via the ...rest variable
export default ({ component: Component, ...rest }) => {
  return (
    <Consumer>
      {context => (
        <Route
          {...rest}
          // if the user is authenticated, render the components passed in as a prop via PrivateRoute in the Switch
          render={props =>context.authenticatedUser ? (
            <Component {...props} />
          ) : (
            // if the user is not authenticated, redirect to the signin page
            console.log('redirect to signin'),
            <Redirect to='/signin' />
          )
          }
        />
      )}
    </Consumer>
  );
};