/*global require, dat*/

require.config({
  deps : ['vendor/Events', 'vendor/lodash','vendor/dat.gui.min']
});

require(
  [
    'lib/ParticleSystem',
    'lib/Display',
    'lib/Vector',
    'gui'
  ],
  function(ParticleSystem, Display, Vector, GUI){
    "use strict";

    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    window.addEventListener('resize', resize); resize();

    let display = new Display(document.getElementById('canvas'));
    display.init();
    let particleSystem = new ParticleSystem().init(display);
    display.start();

    let gui = new GUI(particleSystem, display);

    particleSystem.addEmitter(new Vector(360,230),Vector.fromAngle(0,2));
    particleSystem.addField(new Vector(700,230), -140);

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

  }
);

