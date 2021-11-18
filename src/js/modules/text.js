import { FontLoader, Group, Mesh, Vector3 } from 'three';
import gotham_black_regular from '../../public/fonts/gotham_black_regular.json';

export default class theText {
    /**
     * Loads the JSON font for the text geometry
     */
    constructor(x, y, z) {
        this.origin = new Vector3(x, y, z);
        this.letterMesh = new Mesh();
        this.groupTextMesh = new Group();
        this.letterPosition = 0;
        this.loader = new FontLoader;
        this.font = this.loader.parse(gotham_black_regular);
    }

    render3dText(theText) {
        for(let i=0;i<theText.length;i++){
            textGeometry = new THREE.TextGeometry( theText[i], {
                font: font,
                size: 1,
                height: 0.25,
                curveSegments: 20
            });

            textGeometry.center();

            // letterMesh = new THREE.Mesh( textGeometry, new THREE.MeshBasicMaterial({wireframe: true, color : 0xFF0000}) );
            // letterMesh = new THREE.Mesh( textGeometry, new THREE.MeshNormalMaterial());
            // letterMesh = new THREE.Mesh( textGeometry, shaderMaterial);
            letterMesh = new Mesh( textGeometry, new MeshNormalMaterial());
            letterMesh.position.x = i;

            textMesh.add( letterMesh)
        }

        textMesh.position.x = -2.4;
        textMesh.position.z = -5;
        // textMesh.position.z = 2;

        if(isMobile){
            textMesh.position.y = 3.5;
        }

    }
}