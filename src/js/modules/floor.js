import { DoubleSide, Mesh, MeshBasicMaterial, PlaneBufferGeometry, RepeatWrapping, TextureLoader, Vector3 } from "three";
import sand512 from '../../public/images/textures/sand-512.jpg'

/**
 * Renders Plane Mesh floor 
 * @returns THREE.Mesh Floor
 */
export default class Floor {
    constructor(position, width, height) {
        this.pos = position;
        this.planeGeometry = new PlaneBufferGeometry( width, height );

        this.sandTexture = new TextureLoader().load(sand512);
        this.sandTexture.wrapS = this.sandTexture.wrapT = RepeatWrapping;
    
        this.sandMaterial = new MeshBasicMaterial({
            map: this.sandTexture,
            side: DoubleSide
        });
    
        this.floorMesh = new Mesh( this.planeGeometry, this.sandMaterial );
        this.floorMesh.rotation.x = Math.PI / 2;
    
        return this.floorMesh;
    }
}