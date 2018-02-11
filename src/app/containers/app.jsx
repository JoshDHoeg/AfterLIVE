import React from 'react';
import { render } from 'react-dom';
import Particle from '../components/particle.jsx';
import Footer from '../components/footer.jsx';
import Services from '../components/services.jsx';
import Gallery from '../components/gallery.jsx';
import Tools from '../components/tools.jsx';
import Ethos from '../components/ethos.jsx';
import Intro from '../components/intro.jsx';
import Modal from '../components/modal.jsx';

class App extends React.Component {
  constructor(props) {
      super(props);
    }
//html render for the legislator list
    render() {
      return (
        <div className="content-wrapper">
          <Intro />
          <Ethos />
          <Tools />
          <Gallery />
          <Services />
          <Particle />
          <Footer />
          <Modal />
        </div>
      );
    }
  }

export default App;
