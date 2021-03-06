import React from 'react';
import Particles from 'react-particles-js';

class Particle extends React.Component {
  constructor(props) {
      super(props);
    }

    render(){
        return (
          <section className="cta-wrapper" id="particles-js">
            <div className="cta" id="zbwid-ecefc108" />
            <Particles
              params={
                {
                  "particles": {
                    "number": {
                      "value": 32,
                      "density": {
                        "enable": true,
                        "value_area": 800
                      }
                    },
                    "color": {
                      "value": "#ffffff"
                    },
                    "shape": {
                      "type": "circle",
                      "stroke": {
                        "width": 0,
                        "color": "#000000"
                      },
                      "polygon": {
                        "nb_sides": 5
                      },
                      "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                      }
                    },
                    "opacity": {
                      "value": 0.29987610382026364,
                      "random": false,
                      "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                      }
                    },
                    "size": {
                      "value": 3,
                      "random": true,
                      "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                      }
                    },
                    "line_linked": {
                      "enable": true,
                      "distance": 157.82952832645452,
                      "color": "#ffffff",
                      "opacity": 0.40246529723245905,
                      "width": 1
                    },
                    "move": {
                      "enable": true,
                      "speed": 5,
                      "direction": "none",
                      "random": false,
                      "straight": false,
                      "out_mode": "bounce",
                      "bounce": false,
                      "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                      }
                    }
                  },
                  "interactivity": {
                    "detect_on": "window",
                    "events": {
                      "onhover": {
                        "enable": true,
                        "mode": "repulse"
                      },
                      "onclick": {
                        "enable": true,
                        "mode": "bubble"
                      },
                      "resize": true
                    },
                    "modes": {
                      "grab": {
                        "distance": 400,
                        "line_linked": {
                          "opacity": 1
                        }
                      },
                      "bubble": {
                        "distance": 256,
                        "size": 40,
                        "duration": 2,
                        "opacity": 0.665903314087103,
                        "speed": 3
                      },
                      "repulse": {
                        "distance": 128,
                        "duration": 0.4
                      },
                      "push": {
                        "particles_nb": 4
                      },
                      "remove": {
                        "particles_nb": 2
                      }
                    }
                  },
                  "retina_detect": true
                }
              }
              />
            </section>
        );
    }
}

export default Particle;
