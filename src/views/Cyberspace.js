import { Group, LinearFilter, Mesh } from 'three';
import { BasicMaterial } from '@alienkitty/alien.js/three';

import { WorldController } from '../controllers/world/WorldController.js';

export class Cyberspace extends Group {
    constructor() {
        super();

        this.visible = false;

        this.width = 100;
        this.height = 100;
    }

    async initMesh() {
        const { quad, loadTexture } = WorldController;

        const map = await loadTexture('assets/images/cyberspace.png');
        map.minFilter = LinearFilter;
        map.generateMipmaps = false;

        const material = new BasicMaterial({ map });

        const mesh = new Mesh(quad, material);
        mesh.frustumCulled = false;
        mesh.scale.set(this.width, this.height, 1);
        this.add(mesh);

        this.mesh = mesh;
    }

    // Event handlers

    onHover = (/* { type } */) => {
        /* console.log('onHover', type);
        if (type === 'over') {
        } else {
        } */
    };

    onClick = () => {
        // open('https://alien.js.org/');
        location.href = 'mailto:hello@alienkitty.com';
    };

    // Public methods

    resize = (width, height) => {
        this.position.x = (width - this.width) / 2;
        this.position.y = -((height - this.height) / 2 - 65);
    };

    update = () => {
    };

    animateIn = () => {
        this.visible = true;
    };

    ready = () => this.initMesh();
}
