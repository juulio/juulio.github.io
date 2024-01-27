import { Vector3, Mesh} from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import jaguarModel from '../../public/models/jaguar.gltf';
import blueyModel from '../../public/models/bluey/scene.gltf';
/**
 * Render Jaguar using OBJ model
 * @returns THREE.Mesh jaguar
 */
export default class Jaguar {
	constructor(posistion, scene){
        this.pos = posistion;
		this.jaguarObject;
		this.scene = scene;

		this.modelLoader = new GLTFLoader ();

		this.modelLoader.load(
			blueyModel, 
			function ( gltf ) {
				this.scene.add( gltf.scene );
				this.jaguarObject =  gltf.scene;
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