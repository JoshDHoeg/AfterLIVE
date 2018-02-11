import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
      super(props);
    }

    render(){
        return (
          <nav className="navbar navbar-dark navbar-inverse bg-dark" data-spy="affix" data-offset-top="197">
            <a className="navbar-brand" href="#">
              <img src="./images/logo.png" width="30" height="30" className="d-inline-block align-top" alt="" />
              After Live
            </a>
          </nav>
        );
    }
}

export default Navbar;
