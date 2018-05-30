/*
 * Julio Del Valle
 * THREE.js
 * 3d Scene - Ancient Ruins
 */

generative_graphics.scene03 = (function (gg) {

    'use strict';

	/**
     * Init Scene 03
     */
    let init = function() {
    	let scene03 = new THREE.Object3D();

		// create the Cube
		let cubeMaterial = new THREE.MeshPhongMaterial( {color: 0x000000} );

		let cube = new THREE.Mesh( new THREE.CubeGeometry( 20, 20, 20 ), cubeMaterial );
		// cube.position.y = 150;
		// add the object to the scene
		scene03.add( cube );

		let minaretHeight = 40,
			minaretRadius = 1;

		let minaretBackLeft = gg.main.renderMinaret(minaretRadius, minaretHeight, new THREE.Vector3(-90, minaretHeight*0.5, 93)),
			minaretBackRight = gg.main.renderMinaret(minaretRadius, minaretHeight, new THREE.Vector3(90, minaretHeight*0.5, 93)),
			minaretFrontLeft = gg.main.renderMinaret(minaretRadius, minaretHeight, new THREE.Vector3(-90, minaretHeight*0.5, -93)),
			minaretFrontRight = gg.main.renderMinaret(minaretRadius, minaretHeight, new THREE.Vector3(90, minaretHeight*0.5, -93));
		
		scene03.add(minaretBackLeft);
		scene03.add(minaretBackRight);
		scene03.add(minaretFrontLeft);
		scene03.add(minaretFrontRight);

		//SpotLight( color, intensity, distance, angle, penumbra, decay )
		let spotLightFront = new THREE.SpotLight( 0xffffff, 10, 50, 0.2 );
		spotLightFront.position.set( 0, 0, -50 );


		let spotLightBack = new THREE.SpotLight( 0xffffff, 7, 0, Math.PI, 1 );
		spotLightBack.position.set( 0, 0, 50 );

		let spotLightRight = new THREE.SpotLight( 0xffffff, 10, 50, 0.2 );
		spotLightRight.position.set( 50, 0, 0 );

		let spotLightLeft = new THREE.SpotLight( 0xffffff, 10, 50, 0.2 );
		spotLightLeft.position.set( -50, 0, 0 );

		// scene03.add( spotLightFront );
		// scene03.add( spotLightBack );
		// scene03.add( spotLightLeft );
		// scene03.add( spotLightRight );	

		var spotLightHelper = new THREE.SpotLightHelper( spotLightBack );
		scene03.add( spotLightHelper );

		// FogExp2( hex, density )
		scene03.fog = new THREE.FogExp2( 0xC0C0C0, 0.005);


		// Create the new Particle System
        let particlesQuantity = 1000;
        gg.main.ps01 = new ParticlesSystem(new THREE.Vector3(-90, 0, 90), '#FF0000', particlesQuantity);
		scene03.add(gg.main.ps01.particlesGroup);

		gg.main.setPs01(true);

		return scene03;

	};

	return {
		init : init
	};
}(generative_graphics));