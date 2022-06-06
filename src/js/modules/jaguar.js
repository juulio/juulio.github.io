import { Vector3, Mesh} from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import jaguarModel from '../../public/models/jaguar.gltf';

/**
 * Render Jaguar using OBJ model
 * @returns THREE.Mesh jaguar
 */
export default class Jaguar {
	constructor(x, y, z){
        this.pos = new Vector3(x, y, z);
		this.jaguarObject;

		this.modelLoader = new GLTFLoader ();

		this.modelLoader.load( jaguarModel, 
			function ( gltf ) {
				this.jaguarObject =  gltf.scene;
			
			}, 
			function ( xhr ) {
				console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
			},
			function ( error ) {
				// console.error( error );
			}
		);

		return this.jaguarObject;
	}
}