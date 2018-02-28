import React from 'react';
import oculus from './../../assets/images/tools/oculus.svg';
import unity from './../../assets/images/tools/unity.svg';
import daydream from './../../assets/images/tools/daydream.svg';
import facebook from './../../assets/images/tools/facebook.svg';
import gear from './../../assets/images/tools/gear.svg';
import insta360 from './../../assets/images/tools/insta360.svg';
import theta from './../../assets/images/tools/theta.svg';
import orah from './../../assets/images/tools/orah.svg';
import vive from './../../assets/images/tools/vive.svg';

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
