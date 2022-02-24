import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.PureComponent {
    render() {
      const { context } = this.props;
      const authUser = context.authenticatedUser;
      return (
        <div id="root">
        <header>
            <div className="wrap header--flex">
                <h1 className="header--logo"><a href="/">Lifetime Learning Course Catalog</a></h1>
                {/* <img className="glasses" src="./glasses.png" alt="glasses" /> */}
                <nav>
                  {authUser ? 
                    <React.Fragment>
                        <span>Welcome, {authUser.firstName}!</span>
                        <Link to="/signout">Sign Out</Link>
                    </React.Fragment>
                  :
                  <React.Fragment>
                    <Link className="signup" to="/signup">Sign Up</Link>
                    <Link className="signin" to="/signin">Sign In</Link>
                </React.Fragment>
                }
                </nav>
            </div>
        </header>
        </div>
      );
    }
  };
