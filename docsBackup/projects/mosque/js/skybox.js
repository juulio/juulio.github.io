/*
 * Julio Del Valle
 * 3d Mosque
 * THREE.js
 */

/** @namespace Namespace for MOSQUE classes and functions. */
MOSQUE = MOSQUE || {};

/**
 * Renders a Skybox
 * @class Skybox
 * @constructor
 * @namespace MOSQUE
 */
MOSQUE.Skybox = function(boxSize){
    let urls = [ "./assets/skybox/mars_back.png", "./assets/skybox/mars_front.png", "./assets/skybox/mars_top.png", "./assets/skybox/mars_bottom.png", "./assets/skybox/mars_right.png", "./assets/skybox/mars_left.png"];
    let cubeMaterials = [
        // Do not modify the images order
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load(urls[0]), side: THREE.DoubleSide } ),
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load(urls[1]), side: THREE.DoubleSide } ),
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load(urls[2]), side: THREE.DoubleSide } ),
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load(urls[3]), side: THREE.DoubleSide } ),
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load(urls[4]), side: THREE.DoubleSide } ),
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load(urls[5]), side: THREE.DoubleSide } ),
    ];

    let skybox = new THREE.Mesh(
        new THREE.BoxGeometry( boxSize, boxSize, boxSize),
        cubeMaterials
    );

    return skybox;
};