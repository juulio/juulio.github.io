/*
 * Julio Del Valle
 * 3d Mosque
 * THREE.js
 */
'use strict';

import * as THREE from '../../../js/vendor/three.module.js';

export default class Skybox {
    
    /**
     * Renders a Skybox
     * @param {Number} boxSize
     */
    constructor(boxSize){
        this.boxSize = boxSize;
    }

    get getSkybox(){
        return this.skybox;
    }

    urls = [ "./assets/skybox/mars_back.png", "./assets/skybox/mars_front.png", "./assets/skybox/mars_top.png", "./assets/skybox/mars_bottom.png", "./assets/skybox/mars_right.png", "./assets/skybox/mars_left.png"];
    
    cubeMaterials = [
        // Do not modify the images order
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load(this.urls[0]), side: THREE.DoubleSide } ),
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load(this.urls[1]), side: THREE.DoubleSide } ),
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load(this.urls[2]), side: THREE.DoubleSide } ),
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load(this.urls[3]), side: THREE.DoubleSide } ),
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load(this.urls[4]), side: THREE.DoubleSide } ),
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load(this.urls[5]), side: THREE.DoubleSide } ),
    ];

    skybox = new THREE.Mesh(
        new THREE.BoxGeometry( this.boxSize, this.boxSize, this.boxSize),
        this.cubeMaterials
    );
};