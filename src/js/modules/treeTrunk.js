import { DoubleSide, Mesh, MeshBasicMaterial, BufferGeometry, CylinderBufferGeometry, RepeatWrapping, TextureLoader, Vector3, BufferGeometry } from "three";
import brownTexture from '../../public/images/textures/brownTexture.png';

/**
 * Renders Tree trunk Cylinder Geometry
 * @returns THREE.Mesh Tree Trunk
 */
export default class TreeTrunk {
    constructor(x, y, z, radiusTop, radiusBottom) {
        this.pos = new Vector3(x, y, z);

        this.treeTrunkBoxGeometry = new BufferGeometry;
        this.treeTrunkGeometry = new CylinderBufferGeometry( this.radiusTop, this.radiusBottom, 20, 32 );
        this.sandTexture = new TextureLoader().load(brownTexture);
        this.sandTexture.wrapS = this.sandTexture.wrapT = RepeatWrapping;
        // this.sandTexture.repeat.set(8, 8);
        this.sandMaterial = new MeshBasicMaterial({
            map: this.sandTexture,
            side: DoubleSide
        });
    
        this.treeTrunkMesh = new Mesh( this.treeTrunkGeometry, this.sandMaterial );
        this.treeTrunkMesh.position.set(this.pos.x, this.pos.y, this.pos.z);
        // this.floorMesh.rotation.x = Math.PI / 2;
    
        return this.treeTrunkMesh;
    }
}