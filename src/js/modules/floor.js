import { DoubleSide, Mesh, MeshBasicMaterial, PlaneBufferGeometry, RepeatWrapping, TextureLoader, Vector3 } from "three";
import sand512 from '../../public/images/textures/sand-512.jpg'

/**
 * Renders Plane Mesh floor 
 * @returns THREE.Mesh Floor
 */
export default class Floor {
    constructor(x, y, z, width, height) {
        this.pos = new Vector3(x, y, z);
        this.planeGeometry = new PlaneBufferGeometry( 1200, 1200 );

        this. moonTexture = new TextureLoader().load(sand512);
        this.moonTexture.wrapS = this.moonTexture.wrapT = RepeatWrapping;
    
        this.moonMaterial = new MeshBasicMaterial({
            map: this.moonTexture,
            side: DoubleSide
        });
    
        this.floorMesh = new Mesh( this.planeGeometry, this.moonMaterial );
        this.floorMesh.rotation.x = Math.PI / 2;
    
        return this.floorMesh;
    }
}