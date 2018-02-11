import React from 'react';
import weddings from './../../assets/images/weddings.png';
import concert from './../../assets/images/concert.png';
import spaces from './../../assets/images/spaces.png';
import instapro from './../../assets/images/instapro.png';

class Intro extends React.Component {
  constructor(props) {
      super(props);
    }

    render(){
        return (
          <section id="intro" >
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src={weddings} alt="First slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block img-fluid" src={concert} alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block img-fluid" src={spaces} alt="Third slide" />
                </div>
              </div>
            </div>
            <div className="layer" id="l2">
              <div id="title">
                <h1 className="text-center">WE DO 360 VIDEO</h1>
              </div>
            </div>
            <div className="layer" id="l3">
              <div id="insta">
                <img src={instapro} />
              </div>
            </div>
          </section>
        );
    }
}

export default Intro;
