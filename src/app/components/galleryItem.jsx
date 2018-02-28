import React from 'react';
import play from './../../assets/images/icons/play.svg';



class GalleryItem extends React.Component {
  constructor(props) {
      super(props);
      this.state={ open: false};
      this.onOpenModal = this.onOpenModal.bind(this);
      this.onCloseModal = this.onCloseModal.bind(this);
    }

    onOpenModal () {
      console.log(this.state.open + " :open");
      this.setState({ open: true });
      console.log(this.state.open + " :open");
    }

    onCloseModal () {
      this.setState({ open: false });
      console.log(this.state.open);
    }


    componentDidUpdate(prevProps, prevState) {
      if (this.state.open) {
          console.log(this.state.open);
      }
      if (!this.state.open) {
          console.log(this.state.open);
      }
    }

    render(){


      if(this.state.open){
        return (
          <a data-toggle="modal" data-target="#gallery-modal" onClick={this.onCloseModal}>
            <span className="play-button_wrapper" role="button" data-target="#carouselIndicators" data-slide-to="0">
              <div className="demo-text">
                <h1>{this.props.title}</h1>
                <img className="play-button" src={play} />
              </div>
            </span>
            <div className="gallery-modal">
              <div className="gallery-modal-inner">
                <iframe id="iframe-1" width="800" height="450" src={this.props.url} frameBorder="0" allow="autoPlay; encrypted-media" allowFullScreen />
              </div>
            </div>
          </a>
        );
      }
      return(
        <a data-toggle="modal" data-target="#gallery-modal" onClick={this.onOpenModal}>
          <span className="play-button_wrapper" role="button" data-target="#carouselIndicators" data-slide-to="0">
            <div className="demo-text">
              <h1>{this.props.title}</h1>
              <img className="play-button" src={play} />
            </div>
          </span>

        </a>
      );
    }
}

export default GalleryItem;
