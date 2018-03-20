import React from 'react';
import logo from './../../assets/images/brand/logo-white.svg';


class Navbar extends React.Component {
  constructor(props) {
      super(props);
      this.state = { nav: 'close' };
      this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(){
      if(this.state.nav == 'animate'){
        this.setState({nav: 'close'});
      }else{
        this.setState({nav: 'animate'});
      }

    }

    render(){
        return (
          <div id="navbar" >
            <a className="navbar-brand" href="/">
              <img src={logo} height="24px;"/>
            </a>
            <div className="navbar-link" onClick={this.clickHandler}>
              <div className={this.state.nav} id="bar" />
            </div>
          </div>

        );
    }
}

export default Navbar;
