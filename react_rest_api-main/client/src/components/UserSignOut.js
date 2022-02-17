import React, {useContext } from 'react';
import { Navigate } from 'react-router-dom';

const SignOut = () => {
    // context.actions.signOut();
    return (
        <Navigate to="/" />
      );
}

export default SignOut;