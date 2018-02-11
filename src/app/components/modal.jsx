import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div className="modal fade" id="gallery-modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div className="modal-content">
            <div id="carouselIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselIndicators" data-slide-to="0" className="active" />
                <li data-target="#carouselIndicators" data-slide-to="1" />
                <li data-target="#carouselIndicators" data-slide-to="2" />
                <li data-target="#carouselIndicators" data-slide-to="3" />
                <li data-target="#carouselIndicators" data-slide-to="4" />
                <li data-target="#carouselIndicators" data-slide-to="5" />
                <li data-target="#carouselIndicators" data-slide-to="6" />
                <li data-target="#carouselIndicators" data-slide-to="7" />
                <li data-target="#carouselIndicators" data-slide-to="8" />
                <li data-target="#carouselIndicators" data-slide-to="9" />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item" data-interval="false" id="shambhala-demo">
                  <iframe width="798" height="450" src="https://www.youtube.com/embed/MCl-3mAClVg" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
                </div>
                <div className="carousel-item" data-interval="false" id="snow-demo">
                  <iframe width="798" height="450" src="https://www.youtube.com/embed/SfjiLn7Jq-c" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
                </div>
                <div className="carousel-item" data-interval="false" id="daniels-demo">
                  <iframe width="798" height="450" src="https://ocurus.com/tour/Nzk0" frameBorder="0" allowFullScreen scrolling="no" />
                </div>
                <div className="carousel-item" data-interval="false" id="borgore-demo">
                  <iframe width="798" height="450" src="https://www.youtube.com/embed/frfZRsoCyew" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
                </div>
                <div className="carousel-item" data-interval="false" id="peoplesfair-demo">
                  <iframe width="798" height="450" src="https://www.youtube.com/embed/QFo6ixyAPQ8" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
                </div>
                <div className="carousel-item" data-interval="false" id="um-demo">
                  <iframe width="798" height="450" src="https://www.youtube.com/embed/7NwsuDU2SfE" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
                </div>
                <div className="carousel-item" data-interval="false" id="innovation-demo">
                  <iframe width="798" height="450" src="https://ocurus.com/tour/Nzk1" frameBorder="0" allowFullScreen scrolling="no" />
                </div>
                <div className="carousel-item active" data-interval="false" id="boombox-demo">
                  <iframe width="798" height="450" src="https://www.youtube.com/embed/QFKlTMSsvlM" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
                </div>
                <div className="carousel-item" data-interval="false" id="deadbeats-demo">
                  <iframe width="798" height="450" src="https://www.youtube.com/embed/Z7mfAsAgnZI" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
                </div>
                <div className="carousel-item" data-interval="false" id="medasin-demo">
                  <iframe width="798" height="450" src="https://www.youtube.com/embed/8835B4Yig18" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
                </div>
              </div>
            </div>
            <button className="btn close-btn" data-toggle="modal" data-target="#gallery-modal">close</button>
          </div>
        </div>
        <a className="gallery-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="gallery-control-next" href="#carouselIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Modal;
