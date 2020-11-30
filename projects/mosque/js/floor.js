/*
 * Julio Del Valle
 * 3d Mosque
 * THREE.js
 */

'use strict';

import * as THREE from '../../../js/vendor/three.module.js';

export default class Floor {
    /**
     * Renders the Floor
     * @param {Number} width
     * @param {Number} height
     * @param {Number} widthSegments
     * @param {Number} heightSegments
     */
    constructor(width, height, widthSegments, heightSegments) {
        this.width = width;
        this.height = height;
        this.widthSegments = widthSegments;
        this.widthSegments = heightSegments;

        this.floor;
        // this.material;
        this.getMaterialReady() 
    }

    get getFloor(){
        return this.floor;
    }
    
    geometry = new THREE.PlaneGeometry( this.width, this.height, this.widthSegments, this.heightSegments);

    getMaterialReady() {
        this.geometry.rotateX( - Math.PI / 2 );

        for ( let i = 0, l = this.geometry.vertices.length; i < l; i ++ ) {
            let vertex = this.geometry.vertices[ i ];
            vertex.x += Math.random() * 20 - 1;
            vertex.y += Math.random() * 1;
            vertex.z += Math.random() * 15 - 10;
        }

        for ( let i = 0, l = this.geometry.faces.length; i < l; i ++ ) {
            let face = this.geometry.faces[ i ];
            face.vertexColors[ 0 ] = new THREE.Color().setRGB(1, 0.972, 0.862);
            face.vertexColors[ 1 ] = new THREE.Color().setRGB(0.713, 0.439, 0.227);
            face.vertexColors[ 2 ] = new THREE.Color().setRGB(0.580, 0.419, 0.298);
        }

        this.material = new THREE.MeshBasicMaterial( { vertexColors: THREE.VertexColors } );
        let material = new THREE.MeshBasicMaterial( { vertexColors: THREE.VertexColors } );

        this.floor = new THREE.Mesh( this.geometry, this.material );
        this.floor.position.setZ(40);
        this.floor.position.setX(-7);
        // this.material = new THREE.MeshBasicMaterial( { 
        //     color: 0xFF0000,
        //     side: THREE.DoubleSide
        // } );

        // this.floor = new THREE.Mesh(
        //     this.geometry,
        //     this.material
        // );
    }
};