import React from 'react';

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loading: true}
  }


  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1000); // simulates an async action, and hides the spinner
  }

  render(){
    const {loading} = this.state;

    if(loading){
      return(
        <div className="loader">loading</div>
      );
    }
    return(null);
  }
}

export default Loader;
