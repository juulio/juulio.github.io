import * as THREE from 'three';
import Experience from '../../Experience';

export default class Ghost {
    constructor(position){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.time = this.experience.time

        this.pointLight  = new THREE.PointLight('#ff00ff', 2, 3)
        this.pointLight.castShadow = true
        this.pointLight.shadow.mapSize.width = 256
        this.pointLight.shadow.mapSize.height = 256
        this.pointLight.shadow.camera.far = 7
        this.pointLight.position.set(position)
        this.ghostConeMesh = new THREE.Mesh(
            new THREE.ConeGeometry(0.5, 1, 4),
            new THREE.MeshBasicMaterial({ color: '#ff00ff', transparent: true, opacity: 0.3})
        )
        this.pointLight.add(this.ghostConeMesh)

    }

    update(angleFactor, xFactor, zFactor){
        this.ghostAngle = this.time.elapsed * angleFactor
        this.pointLight.position.x = Math.cos(this.ghostAngle) * xFactor
        this.pointLight.position.z = Math.sin(this.ghostAngle) * zFactor
    }
}

//     const ghost4Angle = elapsedTime * 0.18
//     ghost4.position.x = Math.cos(ghost4Angle) * (4 + Math.sin(elapsedTime * 0.12))
//     ghost4.position.z = Math.sin(ghost4Angle) * (4 + Math.sin(elapsedTime * 0.5))