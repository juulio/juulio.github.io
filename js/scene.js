import THREE from '../js/vendor/three.module.js';

/**
 * Init webGL renderer and HTML Canvas
 *	@param {Number} Width
 *	@param {Number} Height
 */
function getWebGLRenderer() {
	const renderer = new THREE.WebGLRenderer({antialias: true});
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setClearColor( 0xFFFFFF, 1 );
	renderer.setSize( window.innerWidth, window.innerHeight );
	return renderer;
}

const renderer = getWebGLRenderer();

/**
 * Init Perspective Camera
 * @param {Number} Field of view
 * @param {Number} Aspect
 * @param {Number} Near
 * @param {Number} Far
 * Example THREE.PerspectiveCamera(35,1,0.1,100);
 */
function getCamera(fov, aspect, near, far) {
	return new THREE.PerspectiveCamera(fov, aspect, near, far);
}

/**
 * @param {String} Hex color
 * 0x404040 = soft white light
 */
function getAmbientLight(color){
	return new THREE.AmbientLight( color );
}

/**
 * Render Grid Helper
 * @param {Number} size
 * @param {Number} divisions
 * @param {String} Hex color
 */
function getGridHelper(size, divisions, color){
	return new THREE.GridHelper(size, divisions, color);
}

/**
 * Render Axes Helper
 * @param {Number} size
 */
function getAxesHelper(size){
	return new THREE.AxesHelper( size );
}

export { 
	renderer,
	getCamera,
	getAmbientLight,
	getGridHelper,
	getAxesHelper
};