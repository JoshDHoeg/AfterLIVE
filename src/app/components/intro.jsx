import React from 'react';

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
                  <img className="d-block w-100" src="./images/weddings.png" alt="First slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block img-fluid" src="./images/concert.png" alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block img-fluid" src="./images/spaces.png" alt="Third slide" />
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
                <img src="./images/instapro.png" />
              </div>
            </div>
          </section>
        );
    }
}

export default Intro;
