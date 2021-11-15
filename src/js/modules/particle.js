import { Vector2, Vector3, Mesh, SphereBufferGeometry, MeshBasicMaterial, ShapeUtils } from "three";

const VIEWPORT_WIDTH = window.innerWidth;
const VIEWPORT_HEIGHT = window.innerHeight;

export default class Particle {
    constructor(x, y, z, radius) {
        this.pos = new Vector3(x, y, z);
        this.vel = new Vector3(this.getRandomArbitrary(-0.1, 0.1), 0.1, this.getRandomArbitrary(-0.01, 0.01));
        this.acc = new Vector3(0, -0.001, 0);
        this.lifespan = 1;
        this.radius = radius;
        const geometry = new SphereBufferGeometry( this.radius, 10, 10);
        const material = new MeshBasicMaterial({
            color: 0xff0000,
            opacity: this.lifespan,
            transparent: true
            // wireframe: true
        });
        this.particleMesh = new Mesh( geometry, material );

    }

    isDead() {
        return this.lifespan < 0;
    }

    /**
     * @param {THREE.Vec2} force 
     */
    applyForce(force) {
        this.acc.add(force);
    }

    /**
     * Returns a random int between two int values.
     * @param {int} min 
     * @param {int} max 
     * @returns int
     */
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }

    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }

    edges() {
        if(this.pos.y >= VIEWPORT_HEIGHT - this.radius) {
            this.pos.y = VIEWPORT_HEIGHT - r;
            this.vel.y *= -1;
        }
        if(this.pos.x >= VIEWPORT_WIDTH - this.radius) {
            this.pos.x = VIEWPORT_WIDTH - this.radius;
            this.vel.x *= -1;
        }
        else if(this.pos.x <= this.radius){
            this.pos.x = this.radius;
            this.vel *= -1;
        }
    }

    update() {
        // console.log(this.particleMesh.position);
        // console.log(this.vel);
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0, 0, 0);
        this.acc = new Vector3(0, 0, 0);
        this.lifespan -= 0.003;
        this.particleMesh.position.set(this.pos.x, this.pos.y, this.pos.z);
    }
}