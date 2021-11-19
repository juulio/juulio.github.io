import { DoubleSide, Mesh, PlaneBufferGeometry, RepeatWrapping, ShaderMaterial, TextureLoader, Vector3 } from "three";
import { getRandomArbitrary, getRandomInt} from './utils'

import heightmapFragmentShader from '../../public/shaders/heightmapFragmentShader.glsl';
import heightmapVertexShader from '../../public/shaders/heightmapVertexShader.glsl';
import volcanoHeightmap from '../../public/images/textures/volcano-heightmap512x512.png'
import sand512 from '../../public/images/textures/sand-512.jpg'
import rock512 from '../../public/images/textures/rock-512.jpg'
import snow512 from '../../public/images/textures/snow-512.jpg'
import volcanic256 from '../../public/images/textures/volcanic-256.jpg'

const VIEWPORT_WIDTH = window.innerWidth;
const VIEWPORT_HEIGHT = window.innerHeight;

export default class Volcano {
    constructor(x, y, z, height, baseWidth, baseHeight, baseSegments) {
        this.pos = new Vector3(x, y, z);
        this.bumpScale = height; // magnitude of normal displacement

        // Mountain Textures
        // texture used to generate "bumpiness"
        const bumpTexture = new TextureLoader().load( volcanoHeightmap );
        bumpTexture.wrapS = bumpTexture.wrapT = RepeatWrapping; 
        
        const sandyTexture = new TextureLoader().load( sand512 );
        sandyTexture.wrapS = sandyTexture.wrapT = RepeatWrapping; 
        
        const rockyTexture = new TextureLoader().load( rock512 );
        rockyTexture.wrapS = rockyTexture.wrapT = RepeatWrapping; 
        
        const volcanicTexture = new TextureLoader().load( volcanic256 );
        volcanicTexture.wrapS = volcanicTexture.wrapT = RepeatWrapping;

        const snowyTexture = new TextureLoader().load( snow512 );
        snowyTexture.wrapS = snowyTexture.wrapT = RepeatWrapping; 

        // use "this." to create global object
        this.customUniforms = {
            bumpScale:	    	{ type: "f", value: this.bumpScale },
            bumpTexture:		{ type: "t", value: bumpTexture },
            sandyTexture:		{ type: "t", value: sandyTexture },
            rockyTexture:		{ type: "t", value: rockyTexture },
            volcanicTexture:	{ type: "t", value: volcanicTexture },
            snowyTexture:	{ type: "t", value: snowyTexture }
        };
        
        this.volcanicMaterial = new ShaderMaterial ( 
        {
            uniforms:       this.customUniforms,
            vertexShader:   heightmapVertexShader,
            fragmentShader: heightmapFragmentShader,
            side: DoubleSide
        });
            
        const planeGeo = new PlaneBufferGeometry(400, 400, 100, 100 );
        this.volcanoMesh = new Mesh( planeGeo, this.volcanicMaterial );
        this.volcanoMesh.rotation.x = -Math.PI / 2;
        this.volcanoMesh.rotation.x = -Math.PI / 2;
        this.volcanoMesh.position.x = this.pos.x;
        this.volcanoMesh.position.y = this.pos.y;
        this.volcanoMesh.position.z = this.pos.z;
        return this.volcanoMesh;
    }
}