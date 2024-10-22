import { Group } from 'three';

import { InputManager } from '../controllers/world/InputManager.js';
import { Cyberspace } from './Cyberspace.js';

export class SceneView extends Group {
    constructor() {
        super();

        this.initViews();
    }

    initViews() {
        this.cyberspace = new Cyberspace();
        this.add(this.cyberspace);
    }

    addListeners() {
        InputManager.add(this.cyberspace.mesh);
    }

    removeListeners() {
        InputManager.remove(this.cyberspace.mesh);
    }

    // Public methods

    resize = (width, height, dpr) => {
        this.cyberspace.resize(width, height, dpr);
    };

    update = (time, delta, frame) => {
        this.cyberspace.update(time, delta, frame);
    };

    animateIn = () => {
        this.addListeners();
        this.cyberspace.animateIn();
    };

    ready = () => this.cyberspace.ready();
}
