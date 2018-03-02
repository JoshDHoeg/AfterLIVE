import React from 'react';

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loading: true}
  }


  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 100);
  }

  render(){
    const {loading} = this.state;

    if(loading){
      return(
        <div className="loader">
          <div className="load">
            <div className="circle" id="circle-1" />
            <div className="circle" id="circle-2" />
            <div className="circle" id="circle-3" />
            <div className="circle" id="circle-4" />
            <div className="circle" id="circle-5" />
          </div>
        </div>
      );
    }
    return(
      <div className="loader loaded"/>
    );
  }
}

export default Loader;
