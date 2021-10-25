/*
 * Julio Del Valle
 * 3d Mosque
 * THREE.js
 */

/** @namespace Namespace for MOSQUE classes and functions. */
var MOSQUE = MOSQUE || {};

/**
 * Renders the Floor
 * @class Floor
 * @constructor
 * @namespace MOSQUE
 */
MOSQUE.Floor = function(){
     var geometry = new THREE.PlaneGeometry( 160, 80, 100, 100 );
        geometry.rotateX( - Math.PI / 2 );

        for ( var i = 0, l = geometry.vertices.length; i < l; i ++ ) {

            var vertex = geometry.vertices[ i ];
            vertex.x += Math.random() * 20 - 1;
            // vertex.y += Math.random() * 4;
            vertex.y += Math.random() * 1;
            vertex.z += Math.random() * 15 - 10;
        }

        for ( i = 0, l = geometry.faces.length; i < l; i ++ ) {

            var face = geometry.faces[ i ];
            // face.vertexColors[ 0 ] = new THREE.Color().setHSL( Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75 );
            // face.vertexColors[ 1 ] = new THREE.Color().setHSL( Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75 );
            // face.vertexColors[ 2 ] = new THREE.Color().setHSL( Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75 );
            face.vertexColors[ 0 ] = new THREE.Color().setRGB(1, 0.972, 0.862);
            face.vertexColors[ 1 ] = new THREE.Color().setRGB(0.713, 0.439, 0.227);
            face.vertexColors[ 2 ] = new THREE.Color().setRGB(0.580, 0.419, 0.298);

        }

        var material = new THREE.MeshBasicMaterial( { vertexColors: THREE.VertexColors } );

        var mesh = new THREE.Mesh( geometry, material );
        mesh.position.setZ(40);
        mesh.position.setX(-7);
        return mesh;
};