import React from 'react';
import livestream from './../../assets/images/icons/livestream.png';
import action from './../../assets/images/icons/action.png';
import tour from './../../assets/images/icons/tour.png';
import edit from './../../assets/images/icons/edit.png';
import audio from './../../assets/images/icons/audio.png';

class Services extends React.Component {
  constructor(props) {
      super(props);
    }

    render(){
        return (
          <section id="services">
            <div className="container">

              <div className="row title">
                <div className="col-sm-6 offset-sm-3">
                  <h2 className="text-center">Production Services</h2>
                  <div className="break" />
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12 col-md-4 service">
                  <img src={livestream} width="64px" />
                  <h3>Livestream VR</h3>
                  <div className="break" />
                  <p>Experienced 360° videographers with Steroscopic 8K cameras.</p>
                </div>
                <div className="col-sm-12 col-md-4 service">
                  <img src={action} width="64px" />
                  <h3>Live Action VR</h3>
                  <div className="break" />
                  <p>Experienced 360° videographers with Steroscopic 8K cameras.</p>
                </div>
                <div className="col-sm-12 col-md-4 service">
                  <img src={tour} width="64px" />
                  <h3>VR Virtual Tours</h3>
                  <div className="break" />
                  <p>Experienced 360° videographers with Steroscopic 8K cameras.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-4 offset-md-2 service">
                  <img src={edit} width="64px" />
                  <h3>VR Edits</h3>
                  <div className="break" />
                  <p>Experienced 360° videographers with Steroscopic 8K cameras.</p>
                </div>
                <div className="col-sm-12 col-md-4 service">
                  <img src={audio} width="64px" />
                  <h3>Spatialized Audio</h3>
                  <div className="break" />
                  <p>Experienced 360° videographers with Steroscopic 8K cameras.</p>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default Services;
