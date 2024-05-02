import Experience from "../../Experience";
import * as THREE from "three";

const AMOUNT_OF_PARTICLES = 40
export default class Volcano {
    constructor(position) {
        this.Experience = new Experience()
        this.resources = this.Experience.resources
        this.scene = this.Experience.scene
        this.volcanoPosition = position
        this.time = this.Experience.time

        this.eruptionStartingPosition = new THREE.Vector3(this.volcanoPosition.x, this.volcanoPosition.y, this.volcanoPosition.z)
        // Setup
        this.debug = this.Experience.debug

        this.setVolcano()
    }

    setVolcano() {
        this.volcanoTexture = this.resources.items.volcanicTexture
        this.volcanoTexture.wrapT = THREE.RepeatWrapping;
        this.volcanoTexture.wrapS = THREE.RepeatWrapping;
        this.volcanoTexture.repeat.set( 3, 3 );
        this.material = this.resources.items.volcanoModel.children[0].material
        this.material.map = this.volcanoTexture 
        this.volcano = this.resources.items.volcanoModel
        this.volcano.children[0].receiveShadow = true // the volcanoMesh receives the shadow. Must be the mesh.
        this.volcano.children[0].castShadow = true 
        this.volcano.scale.set(0.06, 0.26, 0.1)
        this.volcano.position.set(this.volcanoPosition.x, this.volcanoPosition.y, this.volcanoPosition.z)
    }
}