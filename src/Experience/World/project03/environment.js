import * as THREE from 'three';
import Experience from '../../Experience.js';

export default class scene03 {
    constructor(projectId) {
        this.projectId = projectId
        this.Experience = new Experience()
        this.scene = this.Experience.scene

        this.cubeGeometry = new THREE.BoxGeometry(0.4, 0.4, 0.4)
        this.cubeMaterial = new THREE.MeshBasicMaterial({
            transparent: true,
            color: 0x0000ff
        })

        this.projectGroup = new THREE.Group()
        this.projectGroup.name = projectId

        this.cube01 = new THREE.Mesh(
            this.cubeGeometry,
            new THREE.MeshBasicMaterial({ color: 0x0000ff })
        )
        this.projectGroup.add(this.cube01)

        this.cube02 = new THREE.Mesh(
            this.cubeGeometry,
            new THREE.MeshBasicMaterial({ color: 0x0000ff })
        )


        if(this.Experience.isMobile()) {
            this.cube01.position.x = -0.2
            this.cube02.position.x = -0.2
            this.cube02.position.y = 1
        }
        else {
            this.cube01.position.x = -1
            this.cube02.position.x = -1
            this.cube02.position.y = 1
        }

        this.projectGroup.add(this.cube02)
        this.scene.add(this.projectGroup)
        this.projectGroup.visible = false
    }

    update() {
        console.log('scene03 update');
    }
}