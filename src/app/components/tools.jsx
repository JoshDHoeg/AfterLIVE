import React from 'react';

class Tools extends React.Component {
  constructor(props) {
      super(props);
    }

    render(){
        return (

          <section id="tools">
            <div className="container">
              <div className="row title">
                <div className="col-sm-4 offset-sm-4">
                  <h2>THE ARSENAL</h2>
                  <div className="break" />
                </div>
              </div>
            </div>
            <div id="tools_wrapper">
              <div id="tools_container">
                <div className="box"><div><img src="./images/tools/oculus.png" /></div></div>
                <div className="box"><div><img src="./images/tools/unity.png" /></div></div>
                <div className="box"><div><img src="./images/tools/daydream.png" /></div></div>
                <div className="box"><div><img src="./images/tools/facebook.png" /></div></div>
                <div className="box"><div><img src="./images/tools/gear.png" /></div></div>
                <div className="box"><div><img src="./images/tools/insta360.png" /></div></div>
                <div className="box"><div><img src="./images/tools/theta.png" /></div></div>
                <div className="box"><div><img src="./images/tools/orah.png" /></div></div>
                <div className="box"><div><img src="./images/tools/vive.png" /></div></div>
              </div>
            </div>
          </section>

        );
    }
}

export default Tools;
