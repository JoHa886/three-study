import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createMeshGroup } from './components/meshGroup.js';
import { createScene } from './components/scene.js';
import { createLights } from './components/lights.js';

import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;
let loop;

class World {
    // 1. Create an instance of the World app
    constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        loop = new Loop(camera, scene, renderer);

        

        container.append(renderer.domElement);

        const controls = createControls(camera, renderer.domElement);

        // const cube = createCube();
        const meshGroup = createMeshGroup();
        const { ambientLight, mainLight } = createLights();

        // loop.updatables.push(cube);
        loop.updatables.push(controls,meshGroup);

        // scene.add(ambientLight, mainLight, cube);
        scene.add(ambientLight, mainLight, meshGroup);


        const resizer = new Resizer(container, camera, renderer);
        // resizer.onResize = () => {
        //     this.render();
        //   };

    }

    // 2. Render the scene
    render() {
        // draw a single frame
        renderer.render(scene, camera);
    }
    start() {
        loop.start();
    }

    stop() {
        loop.stop();
    }
}

export { World };