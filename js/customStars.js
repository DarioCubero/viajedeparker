particlesJS("stars", {
    "particles": {
      "number": {
        "value": 90, //90
        "density": {
          "enable": true,
          "value_area": 315 //315
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
        "value": 0.5,
        "random": true, //true
        "anim": {
          "enable": true, //true
          "speed": 0.5, //0.1
          "opacity_min": 0.2, //0.2
          "sync": false
        }
      },
      "size": {
        "value": 2,//SIZE
        "random": true, //true
        "anim": {
          "enable": true, //true
          "speed": 1, //1
          "size_min": 0.5, //0.5
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,//false
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.1, //0.3
        "direction": "none",
        "random": true,
        "straight": true,
        "out_mode": "out",
        "bounce": true,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,//false
          "mode": "grab"
        },
        "onclick": {
          "enable": false, //false
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
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
  });
  
  
  /* ---- stats.js config ---- */
  
 