import React from 'react';
import play from './../../assets/images/icons/play.png';

class Gallery extends React.Component {
  constructor(props) {
      super(props);
    }

    render(){
        return (
          <section id="gallery">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12 col-lg-7 demo" id="demo-1">
                  <a data-toggle="modal" data-target="#gallery-modal">
                    <span className="play-button_wrapper" role="button" data-target="#carouselIndicators" data-slide-to="0">
                    <div className="demo-text">
                      <h1>Shambala Music Festival 2017 Aftermovie</h1>

                        <img className="play-button" src={play} />

                    </div>
                    </span>
                  </a>
                </div>
                <div className="col-md-12 col-lg-5 demo" id="demo-2">
                  <a data-toggle="modal" data-target="#gallery-modal">
                    <span className="play-button_wrapper" role="button" data-target="#carouselIndicators" data-slide-to="1">
                    <div className="demo-text">
                      <h1>International Snow Sculpture Festival - Westword</h1>

                        <img className="play-button" src={play} />

                    </div>
                    </span>
                  </a>

                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-lg-5 demo" id="demo-3">
                  <a data-toggle="modal" data-target="#gallery-modal">
                    <span className="play-button_wrapper" role="button" data-target="#carouselIndicators" data-slide-to="2">
                    <div className="demo-text">
                      <h1>VIRTUAL TOUR University of Denver Daniels College od Business</h1>

                        <img className="play-button" src={play} />

                    </div>
                    </span>
                  </a>
                </div>
                <div className="col-md-12 col-lg-7 demo" id="demo-4">
                  <a data-toggle="modal" data-target="#gallery-modal">
                    <span className="play-button_wrapper" role="button" data-target="#carouselIndicators" data-slide-to="3">
                    <div className="demo-text">
                      <h1>Decadence 2017 Borgore Aftermovie</h1>

                        <img className="play-button" src={play} />

                    </div>
                    </span>
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-lg-7 demo" id="demo-5">
                  <a data-toggle="modal" data-target="#gallery-modal">
                    <span className="play-button_wrapper" role="button" data-target="#carouselIndicators" data-slide-to="4">
                    <div className="demo-text">
                      <h1>Peoples Fair Denver Aftermovie</h1>

                        <img className="play-button" src={play} />

                    </div>
                    </span>
                  </a>
                </div>
                <div className="col-md-12 col-lg-5 demo" id="demo-6">
                  <a data-toggle="modal" data-target="#gallery-modal">
                    <span className="play-button_wrapper" role="button" data-target="#carouselIndicators" data-slide-to="5">
                    <div className="demo-text">
                      <h1>Um... Special Affects Recap</h1>

                        <img className="play-button" src={play} />

                    </div>
                    </span>
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-lg-5 demo" id="demo-7">
                  <a data-toggle="modal" data-target="#gallery-modal">
                    <span className="play-button_wrapper" role="button" data-target="#carouselIndicators" data-slide-to="6">
                    <div className="demo-text">
                      <h1>Innovation Space University of Denver</h1>

                        <img className="play-button" src={play} />

                    </div>
                    </span>
                  </a>
                </div>
                <div className="col-md-12 col-lg-7 demo" id="demo-8">
                  <a data-toggle="modal" data-target="#gallery-modal">
                    <span className="play-button_wrapper" role="button" data-target="#carouselIndicators" data-slide-to="7">
                    <div className="demo-text">
                      <h1>Dancefestopia BoomBox Cartel Demo</h1>

                        <img className="play-button" src={play} />

                    </div>
                    </span>
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-lg-7 demo" id="demo-9">
                  <a data-toggle="modal" data-target="#gallery-modal">
                    <span className="play-button_wrapper" role="button" data-target="#carouselIndicators" data-slide-to="8">
                    <div className="demo-text">
                      <h1>Dancetopia Deadeats Recap</h1>

                        <img className="play-button" src={play} />

                    </div>
                    </span>
                  </a>
                </div>
                <div className="col-md-12 col-lg-5 demo" id="demo-10">
                  <a data-toggle="modal" data-target="#gallery-modal">
                    <span className="play-button_wrapper" role="button" data-target="#carouselIndicators" data-slide-to="9">
                    <div className="demo-text">
                      <h1>Shambala Medasin Recap</h1>

                        <img className="play-button" src={play} />

                    </div>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>

        );
    }
}

export default Gallery;
