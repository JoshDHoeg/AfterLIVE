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
                <div className="box"><div><img src={oculus} /></div></div>
                <div className="box"><div><img src={unity} /></div></div>
                <div className="box"><div><img src={daydream} /></div></div>
                <div className="box"><div><img src={facebook} /></div></div>
                <div className="box"><div><img src={gear} /></div></div>
                <div className="box"><div><img src={insta360} /></div></div>
                <div className="box"><div><img src={theta} /></div></div>
                <div className="box"><div><img src={orah} /></div></div>
                <div className="box"><div><img src={vive} /></div></div>
              </div>
            </div>
          </section>

        );
    }
}

export default Tools;
