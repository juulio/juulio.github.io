/*
 * Julio Del Valle
 * 3d Mosque
 * THREE.js
 */

'use strict';

import * as THREE from '../../../js/vendor/three.module.js';

export default class Minaret {

/**
 * Renders a Minaret
 * @class Minaret
 * @constructor
 * @namespace MOSQUE
 * @param {THREE.Vector3} position
 * @param {Number} height
 * @param {Number} scale
 * THREE.CylinderGeometry(radiusTop, radiusBottom, height, radiusSegments)
 */
    constructor(position, height){
        var minaretGroup = new THREE.Group();  
        var cone;
        var arabicTexture =  new THREE.TextureLoader().load('./assets/textures/arabic08.jpg');
        var material = new THREE.MeshBasicMaterial( { map: arabicTexture } );
        var minaretGeometry = new THREE.CylinderGeometry( 1, 1, height, 32 );

        /**
         * Render the booths on minarets
         */
        function renderBooth(position, radius){
            var stoneTexture =  new THREE.TextureLoader().load('./assets/textures/arabic08.jpg');
            var material = new THREE.MeshBasicMaterial( { map: stoneTexture } );
            var boothGeometry = new THREE.CylinderGeometry( radius, radius, 5, 5 );
            var booth = new THREE.Mesh(boothGeometry, material);
            booth.position.set(position.x, position.y, position.z);
            minaretGroup.add(booth);
        }

        /**
         * Render the cone on top of the minaret
         * ConeGeometry(radius, height, radialSegments, heightSegments)
         */
        function renderCone(position){
            var geometry = new THREE.ConeGeometry( 3, 6, 32 );
            var material = new THREE.MeshBasicMaterial( {color: 0xeecbad, wireframe: true} );
            cone = new THREE.Mesh( geometry, material );
            cone.name = "Cone";
            cone.position.set(position.x, position.y+25, position.z);
            minaretGroup.add( cone );
        }

        var minaret = new THREE.Mesh(minaretGeometry, material);
        minaret.position.set(position.x, position.y, position.z);
        minaretGroup.add(minaret);

        renderBooth(position, 1.5);
        renderBooth(new THREE.Vector3(position.x, position.y+12, position.z), 1.5);
        renderBooth(new THREE.  Vector3(position.x, position.y+20, position.z), 2.7);

        renderCone(position);
    }

    get minaretGroup (){
        return this.minaretGroup;
    }
};