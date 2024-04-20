import Experience from '../../Experience.js'
import eruptionVertexShader from '../../../shaders/eruptionVertexShader.glsl';
import eruptionFragmentShader from '../../../shaders/eruptionFragmentShader.glsl';
import * as THREE from 'three'

export default class Floor
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Setup
        this.setGeometry()
        this.setMaterial()
        this.setMesh()
    }

    setGeometry()
    {
        this.geometry = new THREE.CircleGeometry(5, 64)
    }

    setMaterial()
    {
        this.shaderMaterial = new THREE.ShaderMaterial({
            vertexShader: eruptionVertexShader,
            fragmentShader: eruptionFragmentShader,
            uniforms: {
                uTime: { value: 0},
                uTexture: { value: this.resources.items.lavaTileTexture}
            },
            transparent: true,
            side: THREE.DoubleSide
        })
    }

    setMesh()
    {
        this.mesh = new THREE.Mesh(this.geometry, this.shaderMaterial)
        this.mesh.rotation.x = - Math.PI * 2.5
        this.mesh.receiveShadow = true
        this.scene.add(this.mesh)
    }

    // Update the shader material's time uniform
    update() {
        this.shaderMaterial.uniforms.uTime.value = this.experience.time.elapsed * 0.0001;
    }
}