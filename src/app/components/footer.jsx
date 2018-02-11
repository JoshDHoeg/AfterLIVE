import React from 'react';
import icon from './../../assets/images/icons/play.png';
import bg from './../../assets/images/bg.png';

class Footer extends React.Component {
  constructor(props) {
      super(props);
    }

    render(){
        return (
          <section id="footer">
            <img src={bg} />
            <div className="footer-content container-fluid">
              <div className="row socials">
                <div className="social col-sm-2 offset-sm-3">
                  <a href="#"><img src={icon} /></a>
                </div>
                <div className="social col-sm-2">
                  <a href="#"><img src={icon} /></a>
                </div>
                <div className="social col-sm-2">
                  <a href="#"><img src={icon} /></a>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default Footer;
