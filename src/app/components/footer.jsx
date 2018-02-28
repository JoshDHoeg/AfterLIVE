import React from 'react';
import facebook from './../../assets/images/icons/facebook.svg';
import instagram from './../../assets/images/icons/instagram.svg';
import youtube from './../../assets/images/icons/youtube.svg';
import bg from './../../assets/images/bg.svg';

class Footer extends React.Component {
  constructor(props) {
      super(props);
    }

    render(){
        return (
          <section id="footer">
            <img src={bg} />
            <div className="footer-content container-fluid">
              <div className="row">
                <p className=" socials">
                  <a href="#"><img src={facebook} /></a>
                  <a href="#"><img src={instagram} /></a>
                  <a href="#"><img src={youtube} /></a>
                </p>
              </div>
              <div className="row text-center copyright">
                <p>Copyright &#169; MTS, LLC 2016.  All Rights Reserved. </p>
              </div>
            </div>
          </section>
        );
    }
}

export default Footer;
