import React from 'react';
import play from './../../assets/images/icons/play.svg';
import GalleryItem from '../components/galleryItem.jsx';



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

                  <GalleryItem title="Shambala Music Festival 2017 Aftermovie" url="https://www.youtube.com/embed/MCl-3mAClVg"/>

                </div>
                <div className="col-md-12 col-lg-5 demo" id="demo-2">

                  <GalleryItem title="International Snow Sculpture Festival - Westword" url="https://www.youtube.com/embed/SfjiLn7Jq-c"/>

                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-lg-5 demo" id="demo-3">

                  <GalleryItem title="VIRTUAL TOUR University of Denver Daniels College od Business" url="https://ocurus.com/tour/Nzk0" />

                </div>
                <div className="col-md-12 col-lg-7 demo" id="demo-4">

                  <GalleryItem title="Decadence 2017 Borgore Aftermovie" url="https://www.youtube.com/embed/frfZRsoCyew"/>

                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-lg-7 demo" id="demo-5">

                  <GalleryItem title="Peoples Fair Denver Aftermovie" url="https://www.youtube.com/embed/QFo6ixyAPQ8"/>

                </div>
                <div className="col-md-12 col-lg-5 demo" id="demo-6">

                  <GalleryItem title="Um... Special Affects Recap" url="https://www.youtube.com/embed/7NwsuDU2SfE"/>

                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-lg-5 demo" id="demo-7">

                  <GalleryItem title="Innovation Space University of Denver" url="https://ocurus.com/tour/Nzk1"/>

                </div>
                <div className="col-md-12 col-lg-7 demo" id="demo-8">

                  <GalleryItem title="Dancefestopia BoomBox Cartel Demo" url="https://www.youtube.com/embed/QFKlTMSsvlM"/>

                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-lg-7 demo" id="demo-9">

                  <GalleryItem title="Dancetopia Deadeats Recap" url="https://www.youtube.com/embed/Z7mfAsAgnZI"/>

                </div>
                <div className="col-md-12 col-lg-5 demo" id="demo-10">

                  <GalleryItem title="Shambala Medasin Recap" url="https://www.youtube.com/embed/8835B4Yig18"/>

                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default Gallery;
