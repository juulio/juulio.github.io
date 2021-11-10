import { Vector2, Vector3, Mesh, SphereBufferGeometry, MeshBasicMaterial } from "three";

const VIEWPORT_WIDTH = window.innerWidth;
const VIEWPORT_HEIGHT = window.innerHeight;

export default class Particle {
    constructor(x, y, z) {
        this.pos = new Vector3(x, y, z);
        this.vel = new Vector2(this.getRandomInt(-1,1), this.getRandomInt(-2,0));
        this.acc = new Vector2(0, 0);
        this.lifespan = 1;
        this.radius = 4;
    }

    isDead() {
        return this.lifespan < 0;
    }

    /**
     * 
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

    run() {
        this.update();
        this.display();
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
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        // this.acc.set(0, 0);
        this.acc = new Vector2(0, 0);
        this.lifespan -= 0.03;
    }

    display() {
        const geometry = new SphereBufferGeometry( this.radius, 1, 1);
        const material = new MeshBasicMaterial({
            color: 0xffff00,
            opacity: this.lifespan,
            transparent: true,
        });
        const sphere = new Mesh( geometry, material );
        // scene.add( sphere );

        // stroke(255, this.lifespan);
        // strokeWeight(2);
        // fill(random(205, 255), random(100, 200), this.lifespan);
        // ellipse(this.pos.x, this.pos.y, this.radius * 2);
    }
}