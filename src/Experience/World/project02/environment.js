import * as THREE from 'three';
import Experience from '../../Experience.js';

export default class scene02 {
    constructor() {
        this.Experience = new Experience()
        this.scene = this.Experience.scene

        this.cubeGeometry = new THREE.BoxGeometry(0.4, 0.4, 0.4)
        this.cubeMaterial = new THREE.MeshBasicMaterial({
            transparent: true,
            color: 0x00ff00
        })

        this.projectGroup = new THREE.Group()
        this.cube01 = new THREE.Mesh(
            this.cubeGeometry,
            new THREE.MeshBasicMaterial({ color: 0xff0000 })
        )
        this.projectGroup.add(this.cube01)

        this.cube02 = new THREE.Mesh(
            this.cubeGeometry,
            new THREE.MeshBasicMaterial({ color: 0xff0000 })
        )
        this.projectGroup.add(this.cube02)

        this.scene.add(this.projectGroup)
        this.projectGroup.visible = false

    }

    update() {
        console.log('scene02 update');
    }
}