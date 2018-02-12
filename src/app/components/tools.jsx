import React from 'react';
import oculus from './../../assets/images/tools/oculus.png';
import unity from './../../assets/images/tools/unity.png';
import daydream from './../../assets/images/tools/daydream.png';
import facebook from './../../assets/images/tools/facebook.png';
import gear from './../../assets/images/tools/gear.png';
import insta360 from './../../assets/images/tools/insta360.png';
import theta from './../../assets/images/tools/theta.png';
import orah from './../../assets/images/tools/orah.png';
import vive from './../../assets/images/tools/vive.png';

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
                <div className="box"><img src={oculus} /></div>
                <div className="box"><img src={unity} /></div>
                <div className="box"><img src={daydream} /></div>
                <div className="box"><img src={facebook} /></div>
                <div className="box"><img src={gear} /></div>
                <div className="box"><img src={insta360} /></div>
                <div className="box"><img src={theta} /></div>
                <div className="box"><img src={orah} /></div>
                <div className="box"><img src={vive} /></div>
              </div>
            </div>
          </section>

        );
    }
}

export default Tools;
