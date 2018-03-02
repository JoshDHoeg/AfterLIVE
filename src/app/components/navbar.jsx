import React from 'react';
import logo from './../../assets/images/brand/logo-white.svg';

class Navbar extends React.Component {
  constructor(props) {
      super(props);
    }

    render(){
        return (
          <div id="navbar">
            <a className="navbar-brand" href="/">
              <img src={logo} height="24px;"/>
            </a>
          </div>
        );
    }
}

export default Navbar;
