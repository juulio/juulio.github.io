import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import jaguarModel from '../../public/models/jaguar.gltf';

/**
 * Render Jaguar using OBJ model
 * @returns THREE.Mesh jaguar
 */
export default class Jaguar {
	constructor(posistion){
        this.pos = posistion;
		this.jaguarObject;

		this.modelLoader = new GLTFLoader ();

		this.modelLoader.load(
			jaguarModel, 
			function ( gltf ) {
				return gltf.scene;
			}, 
			function ( xhr ) {
				console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
			},
			function ( error ) {
				console.error( error );
			}
		);

		return this.jaguarObject;
	}
}