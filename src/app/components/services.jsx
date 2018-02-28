import React from 'react';
import livestream from './../../assets/images/icons/livestream.svg';
import action from './../../assets/images/icons/action.svg';
import tour from './../../assets/images/icons/tour.svg';
import edit from './../../assets/images/icons/edit.svg';
import audio from './../../assets/images/icons/audio.svg';

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
                  <p>Professional 360/Virtual Reality Live Stream, directly to Youtube and Facebook.</p>
                </div>
                <div className="col-sm-12 col-md-4 service">
                  <img src={action} width="64px" />
                  <h3>Live Action VR</h3>
                  <div className="break" />
                  <p>Virtual Reality experience shot and edited by exxperienced 360° videographers with Steroscopic 8K cameras.</p>
                </div>
                <div className="col-sm-12 col-md-4 service">
                  <img src={tour} width="64px" />
                  <h3>VR Virtual Tours</h3>
                  <div className="break" />
                  <p>Google street View Ceritifed Virtual Tour Builders, Or bespoke virtual tours embedded directly into your site.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-4 offset-md-2 service">
                  <img src={edit} width="64px" />
                  <h3>VR Edits</h3>
                  <div className="break" />
                  <p>360 video edited and compiled for your regular 2D Content.</p>
                </div>
                <div className="col-sm-12 col-md-4 service">
                  <img src={audio} width="64px" />
                  <h3>Spatialized Audio</h3>
                  <div className="break" />
                  <p>State of the art capture of all 360 degress of sound</p>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default Services;
