import { MeshBasicMaterial, TextureLoader, DoubleSide, Mesh, BoxBufferGeometry} from 'three';

import mars_back from '../../public/images/skybox/mars_back.png'
import mars_front from '../../public/images/skybox/mars_front.png'
import mars_right from '../../public/images/skybox/mars_right.png'
import mars_top from '../../public/images/skybox/mars_top.png'
import mars_bottom from '../../public/images/skybox/mars_bottom.png'
import mars_left from '../../public/images/skybox/mars_left.png'

/**
 * Render Skybox
 * The urls array order should match the cubeMaterials
 * Do not modify the images order
 * @returns THREE.Mesh Skybox
 */
const renderSkybox = () => {
	let urls = [mars_back, mars_front, mars_top, mars_bottom, mars_right, mars_left];
	let cubeMaterials = [
		new MeshBasicMaterial( {map: new TextureLoader().load(urls[0]), side: DoubleSide } ),
		new MeshBasicMaterial( {map: new TextureLoader().load(urls[1]), side: DoubleSide } ),
		new MeshBasicMaterial( {map: new TextureLoader().load(urls[2]), side: DoubleSide } ),
		new MeshBasicMaterial( {map: new TextureLoader().load(urls[3]), side: DoubleSide } ),
		new MeshBasicMaterial( {map: new TextureLoader().load(urls[4]), side: DoubleSide } ),
		new MeshBasicMaterial( {map: new TextureLoader().load(urls[5]), side: DoubleSide } ),
	];

	let skybox = new Mesh(
		new BoxBufferGeometry( 2000, 2000, 2000),
		cubeMaterials
	);

	return skybox;
}

export default renderSkybox;