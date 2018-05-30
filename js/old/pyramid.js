class Pyramid {
	constructor(levels, position){
		this.levels = levels;
		this.position = position;
	}

	/**
     * Render Pyramid
     */
    render () {
        let pyramidLevelPosition, levelSize, pyramidLevel;

    	let pyramid = new THREE.Group();

    	generative_graphics.pyramid = pyramid;
        generative_graphics.pyramidLevels = this.levels;

		let pyramidTexture = this.generateTexture('./assets/textures/stone.png');

        for(let i=1;i<this.levels;i++){
            // pyramidLevelPosition = new THREE.Vector3(110, i*4, -10);
            pyramidLevelPosition = new THREE.Vector3(this.position.x, this.position.y+i*4, this.position.z);
            levelSize = new THREE.Vector3(5*i, 1, 5*i);

            pyramidLevel = this.renderPyramidLevel(pyramidLevelPosition, levelSize, pyramidTexture);
            pyramid.add(pyramidLevel);
        }

        return pyramid;
	}

	generateTexture(textureImageFile) {
        let texture =  new THREE.TextureLoader().load(textureImageFile);
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set( 12, 1 );

        return texture;
	}

	renderPyramidLevel(position, size, texture) {
        let geometry = new THREE.BoxGeometry( size.x, size.y, size.z);

        let material = new THREE.MeshBasicMaterial( { map: texture, transparent : true, opacity: 0.9 } );
        let cube = new THREE.Mesh( geometry, material );
        cube.position.set(position.x, position.y, position.z);
        return cube;
    }

	getRandomArbitrary(min, max) {
	    return Math.random() * (max - min) + min;
	}

	update(){
		// rotate current level
	}
}