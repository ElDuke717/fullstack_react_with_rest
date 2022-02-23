//import React, {useContext } from 'react';
import { Redirect } from 'react-router-dom';

const SignOut = () => {
    // context.actions.signOut();
    return (
        <Redirect to="/" />
      );
}

export default SignOut;