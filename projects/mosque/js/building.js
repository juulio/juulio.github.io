/*
 * Julio Del Valle
 * 3d Mosque
 * THREE.js
 */

'use strict';

import * as THREE from '../../../js/vendor/three.module.js';

export default class Building {

    /**
     * Creates a Building object
     * Load textures, models and render the 3D building using the new Arch model (imported from Blender)
     * @param {THREE.Vector3} position
     * @param {Number} scale
     */
    constructor(position, scale) {
        this.position = position;
        this.scale = scale;

        let mosqueBuildingGroup = new THREE.Object3D();

        let i,
            arch,
            texture,
            texture2,
            manager = new THREE.LoadingManager();
    }

    get mosqueBuildingGroup (){
        return this.mosqueBuildingGroup;
    }
    
    build(){
        let buildingPosition = new THREE.Vector3(0, 0, 0);

        let mainBuilding = renderMainBuilding(buildingPosition);
        let outerArchs = renderOuterArchs();
    
        mosqueBuildingGroup.add(mainBuilding);
        mosqueBuildingGroup.add(outerArchs);
    }

    // // Texture manager
    // manager.onProgress = function ( item, loaded, total ) {
    // };

    // onProgress( xhr ) {
    //     if ( xhr.lengthComputable ) {
    //         let percentComplete = xhr.loaded / xhr.total * 100;
    //     }
    // }

    // onError( xhr ) {
    // };

    /**
     * Render outer archs
     */
    renderOuterArchs(){
        let outerArchsGroup = new THREE.Object3D();
        let archWidth = 12;
        texture = new THREE.Texture();

        // Load first texture
        loader = new THREE.ImageLoader( manager );
        loader.load( './assets/textures/stone.png', function ( image ) {
            texture.image = image;
            texture.needsUpdate = true;
        } );

        // Load external Arch models
        loader = new THREE.OBJLoader( manager );
        loader.load( './assets/models/blueArch/blue_arch.obj', function ( object ) {

            object.traverse( function ( child ) {
                if ( child instanceof THREE.Mesh ) {
                    child.material.map = texture;
                }
            } );

            object.rotation.y = -Math.PI / 2;
            
            for(i=-80;i<80;i+=archWidth){
                arch = object.clone();
                arch.position.x = i;
                // outerArchsGroup.add(arch);
            }

            object.position.z = 84;
            for(i=-80;i<80;i+=archWidth){
                arch = object.clone();
                arch.position.x = i;
                outerArchsGroup.add(arch);
            }

            object.rotation.y = 0;
            for(i=-40;i<40;i+=archWidth){
                arch = object.clone();
                arch.position.x = -89;
                arch.position.z = i+46;
                outerArchsGroup.add(arch);
            }

            for(i=-40;i<40;i+=archWidth){
                arch = object.clone();
                arch.position.x = 85;
                arch.position.z = i+46;
                outerArchsGroup.add(arch);
            }
        }, onProgress, onError );

        return outerArchsGroup;
    }

    /**
     * Render main building
     */
    renderMainBuilding (){
        let mainBuildingGroup = new THREE.Object3D();
        
        texture = new THREE.Texture();
        texture2 = new THREE.Texture();

        // Load first texture
        loader = new THREE.ImageLoader( manager );
        loader.load( './assets/textures/stone.png', function ( image ) {
            texture.image = image;
            texture.needsUpdate = true;
        } );

        // Load second texture
        loader = new THREE.ImageLoader( manager );
        loader.load( './assets/textures/disturb.jpg', function ( image ) {
            texture2.image = image;
            texture2.needsUpdate = true;
        } );

        // Load models
        loader = new THREE.OBJLoader( manager );
        loader.load( './assets/models/arc.obj', function ( object ) {

            object.traverse( function ( child ) {
                if ( child instanceof THREE.Mesh ) {
                    child.material.map = texture;
                }
            } );
            
            object.rotation.y = -Math.PI / 2;
            object.scale.set(8, 8, 8);

            // Render back side archs
            // Render left side archs
            for(i=position.x-20;i>position.x-60;i-=16){
                arch = object.clone();
                arch.position.x = position.x+i;
                arch.position.z = position.z-60;
                mainBuildingGroup.add( arch );
            }

            // Render right side archs
            for(i=position.x+20;i<position.x+66;i+=16){
                arch = object.clone();
                arch.position.x = i;
                arch.position.z = position.z-60;
                mainBuildingGroup.add( arch );
            }

            // Render big central arch
            arch = object.clone();
            arch.position.y = position.y+30;
            arch.position.z = position.z-62;
            arch.scale.set(10, 10, 10);
            mainBuildingGroup.add(arch);

            // Render left side archs
            let leftSideArch;
            for(i=position.z-44;i<position.z-8;i+=16){
                object.rotation.y = Math.PI;
                leftSideArch = object.clone();
                leftSideArch.position.x = -68;
                leftSideArch.position.z = i;
                mainBuildingGroup.add(leftSideArch);
            }

            // Render right side archs
            let righttSideArch;
            for(i=position.z-44;i<position.z-8;i+=16){
                object.rotation.y = 0;
                rightSideArch = object.clone();
                rightSideArch.position.x = 68;
                rightSideArch.position.z = i;
                mainBuildingGroup.add(rightSideArch);
            }

        }, onProgress, onError );

        // Render big central Archs
        let loader2 = new THREE.OBJLoader( manager );
        loader2.load( './assets/models/arc.obj', function ( object ) {

            object.traverse( function ( child ) {
                if ( child instanceof THREE.Mesh ) {
                    child.material.map = texture2;
                }
            } );

            object.position.z = position.z-62;
            object.rotation.y = -Math.PI / 2;
            object.scale.set(10, 10, 10);
            mainBuildingGroup.add( object );

        }, onProgress, onError );

        return mainBuildingGroup;
    }
};