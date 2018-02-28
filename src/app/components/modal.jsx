import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="gallery-modal" onClick>
        <div className="gallery-modal-inner">
          Dude
        </div>
      </div>
    );
  }
}

export default Modal;
