import React from 'react';

class Footer extends React.Component {
  constructor(props) {
      super(props);
    }

    render(){
        return (
          <section id="footer">
            <img src="../../assets/images/bg.png" />
            <div className="footer-content container-fluid">
              <div className="row socials">
                <div className="social col-sm-2 offset-sm-3">
                  <a href="#"><img src="../../assets/images/icons/play.png" /></a>
                </div>
                <div className="social col-sm-2">
                  <a href="#"><img src="../../assets/images/icons/play.png" /></a>
                </div>
                <div className="social col-sm-2">
                  <a href="#"><img src="./../../assets/images/icons/play.png" /></a>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default Footer;
