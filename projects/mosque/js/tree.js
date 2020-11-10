/*
 * Julio Del Valle
 * 3d Mosque
 * THREE.js
 */

'use strict';

import * as THREE from '../../../js/vendor/three.module.js';

export default class Tree {

    /**
     * Renders a new Tree
     * @param {THREE.Vector3} position
     * @param {Number} height
     * @param {Number} scale
     */
    constructor(position, height, scale){
        let treeGroup = new THREE.Group();  

        // Tree Trunk
        let cylinderGeometry = new THREE.CylinderGeometry( 0.35, 0.35, height, 32 );
        let cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0xA0522D} );
        let trunk = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        trunk.position.set(position.x, position.y+2, position.z);
        treeGroup.add(trunk);

        let sphereMaterial1 = new THREE.MeshBasicMaterial( {color: 0x006400} );
        let sphereMaterial2 = new THREE.MeshBasicMaterial( {color: 0x32A956} );
        let sphereMaterial3 = new THREE.MeshBasicMaterial( {color: 0x47AA12} );

        let sphereGeometry1 = new THREE.SphereGeometry( 2*scale, 32, 32 );
        let sphereGeometry2 = new THREE.SphereGeometry( 1.3*scale, 32, 32 );
        let sphereGeometry3 = new THREE.SphereGeometry( 1.5*scale, 32, 32 );

        let sphere1 = new THREE.Mesh( sphereGeometry1, sphereMaterial1 );
        // sphere1.position.set(position.x-1.2, position.y+4, position.z);
        sphere1.position.set(position.x-1.2, height*0.45, position.z);
        treeGroup.add(sphere1);

        let sphere2 = new THREE.Mesh( sphereGeometry2, sphereMaterial2 );
        sphere2.position.set(position.x+1.7, height*0.5, position.z-0.4);
        treeGroup.add(sphere2);

        let sphere3 = new THREE.Mesh( sphereGeometry3, sphereMaterial3 );
        sphere3.position.set(position.x+0.2, height*0.6  , position.z-0.4);
        treeGroup.add(sphere3);
    }

    get treeGroup() {
        return this.treeGroup;
    }
}