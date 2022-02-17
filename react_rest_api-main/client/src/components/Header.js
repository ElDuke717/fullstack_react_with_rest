import React from 'react';
//import { Link } from 'react-router-dom';

export default class Header extends React.PureComponent {
    render() {
    //   const { context } = this.props;
    //   const authUser = context.authenticatedUser;
      return (
        <div id="root">
        <header>
            <div className="wrap header--flex">
                <h1 className="header--logo"><a href="/">Lifetime Learning Course Catalog</a></h1>
                {/* <img className="glasses" src="./glasses.png" alt="glasses" /> */}
                <nav>
                    <ul className="header--signedout">
                        <li><a href="/signup">Sign Up</a></li>
                        <li><a href="/signin">Sign In</a></li>
                    </ul>
                </nav>
            </div>
        </header>
          </div>
      );
    }
  };
