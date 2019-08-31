import Scene from './Scene.js';
import {Lord} from './scene/Lord.js';


export class Director {

  static getInstance() {
    if (!Director.instance) {
      Director.instance = new Director();
    }
    return Director.instance;
  }

  constructor() {
    this.init();
  }

  init() {
    let scene = Scene.getInstance();
    this.scene = scene;
  }

  run() {
    let scene = this.scene;

    let lord = Lord.getInstance().getLord();

    scene.initControl(lord);
    scene.addGeometry(lord);

    scene.animate();
  }
}
