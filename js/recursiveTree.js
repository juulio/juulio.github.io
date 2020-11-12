	/** Algoritmo https://rosettacode.org/wiki/Fractal_tree#JavaScript
	 *
	 * ✓ 1. Hacer que funciones estáticamente
	 * ✓ 2. hacer una función "renderBranch", que va a dibujar/animar el tronco y cada rama
	 * ✓ 3. hacer una función "renderTree"', que llama a renderBranch un montón de veces y le da parámetros, ojalá con objetos
	 * ✓ 4. Hacer que funcione recursivamente
	 * 5. Arreglar ángulo a la función del trunk para que se comporte "igual" que los branches. El tronco debería ser capaz de crecer en cualquier dirección
	 * 6. Agregar tweens
	 * 7. hacer un JSON, que contenga los parámetros que construyen el árbol
	 * 8. hacer un generador/randomizador de ese JSON, para que cada pageLoad se haga uno diferente.
	 * 9. aplicar shaderMaterials y hacer un despiche animado entre tronco, ramas,  hojas y flores
	 */

	import * as THREE from '../js/vendor/three.module.js';
	import {
		OrbitControls
	} from '../js/vendor/OrbitControls.js';

	import {
		renderer,
		getCamera,
		getAmbientLight,
		getGridHelper,
		getAxesHelper
	} from '../js/scene.js';


	export default function recursiveTree(configuration) {
		const {
			camConf,
			materialConf,
			treeConfig
		} = configuration;

		//=====Properties=====

		//Miscellanous 
		let camera;
		let scene;
		let controls;
		let stats;

		//Materials
		let woodMaterial;
		let invisibleMaterial;
		let greenMaterial;

		//Gemoetries
		let geometries;

		//Meshes
		let tree;


		//=====Method definitions=====
		/**
		 * Creates the three materials used in the tree
		 */
		const createMaterials = () => {
			woodMaterial = new THREE.MeshBasicMaterial({
				color: materialConf.woodColor
			});
			invisibleMaterial = new THREE.MeshBasicMaterial({
				transparent: true,
				wireframe: true,
				opacity: 0
			});
			greenMaterial = new THREE.MeshBasicMaterial({
				transparent: true,
				color: materialConf.leafColor,
				opacity: materialConf.leafOpacity
			});
		}

		/**
		 * Generates geometries used in the tree
		 */
		const generateGeometries = () => {
			const {
				limit,
				radius,
				height,
				fractalRatio
			} = treeConfig;

			geometries = {
				branchGeometries: [],
				boxGeometries: [],
				leafGeometry: new THREE.SphereGeometry(0.1, 32, 32),
			};
			let top = (limit === 1) ? 3 : limit * 2; //If the limit is set to one things go wrong. This fixes it setting it to three... Lazy fix.
			for (let i = 0; i < top; i++) {
				let [r, h] = [radius, height].map((param) => (param * Math.pow(fractalRatio, i))); //Get new parameters for each iteration
				geometries.branchGeometries.push(new THREE.CylinderBufferGeometry(r, r, h));
				geometries.boxGeometries.push(new THREE.BoxBufferGeometry(r * 2, h, r * 2));
			}

		}



		/**
		 * Initializes camera,scene,controls and stats
		 */
		const initializeMisc = () => {
			camera = getCamera(...Object.values(camConf.properties));
			scene = new THREE.Scene();
			controls = new OrbitControls(camera, renderer.domElement);
		};



		/**
		 * Handles window resize events
		 */
		const onWindowResize = () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();

			renderer.setSize(window.innerWidth, window.innerHeight);
		}

		/**
		 * Set up and show Javascript Performance Monitor
		 */
		const showStats = () => {
			stats = new Stats();
			stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
			document.body.appendChild(stats.dom);
		};

		/**
		 * Creates the three mesh
		 */
		const recursiveRender = () => {
			let startTimestamp = Date.now(); //Timepstamp to meausre rendering time
			tree = renderTree({
				...treeConfig,
				origin: new THREE.Vector3(...treeConfig.origin)
			});
			console.log(`Rendering the tree took: ${(Date.now()-startTimestamp)/1000} seconds. Using a level limit of:${treeConfig.limit}`); //Log rendering time in seconds.
			scene.add(tree);
		}

		/**
		 * Render Branch
		 * @param {THREE.Vector3( x, y, z)} origin
		 * @param {Number} radius
		 * @param {Number} height
		 * @param {Radian} angle
		 * @param {THREE.MeshBasicMaterial} material
		 * @param {Number} level
		 * @param {Number} limit
		 * @param {Number} animationTime miliseconds
		 * CylinderBufferGeometry(radiusTop : Float, radiusBottom : Float, height : Float)
		 */
		const renderTree = (properties) => {
			let {
				origin,
				radius,
				height,
				angleX,
				angleZ,
				fractalRatio,
				level,
				limit
			} = properties;
			//Reuse geometries, don't use geometry constructors here.

			let branchParentMesh = new THREE.Mesh(geometries.boxGeometries[level], invisibleMaterial),
				branchMesh = new THREE.Mesh(geometries.branchGeometries[level], woodMaterial),
				leafMesh = new THREE.Mesh(geometries.leafGeometry, greenMaterial);

			leafMesh.position.set(origin.x, height, origin.z);

			branchMesh.position.set(origin.x, height / 2, origin.z);

			branchParentMesh.add(branchMesh);
			branchParentMesh.scale.y = 0;
			branchParentMesh.position.set(origin.x, origin.y, origin.z);

			if (level > 0) {
				branchParentMesh.rotation.set(angleX, 0, angleZ);
			}

			let tween = new TWEEN.Tween(branchParentMesh.scale)
				.to({
					y: 1
				}, 2000)
				.onComplete(
					function () {
						if (level > limit) {
							branchParentMesh.add(leafMesh);
							let randValue = THREE.Math.randFloat(-0.1, 0.1),
								// leafTweenFront = new TWEEN.Tween(leafMesh.position).to({ x : leafMesh.position.x + randValue }).repeat( Infinity ).start(),
								leafTweenFront = new TWEEN.Tween(leafMesh.position).to({
									x: leafMesh.position.x + randValue
								}),
								leafTweenBack = new TWEEN.Tween(leafMesh.position).to({
									x: leafMesh.position.x - randValue
								});

							leafTweenFront.chain(leafTweenBack);
							leafTweenBack.chain(leafTweenFront);
							leafTweenFront.start();

						}
					}
				);
			tween.start();

			if (level <= limit) {
				level++;
				origin = new THREE.Vector3(origin.x, height, origin.z);
				radius *= fractalRatio;
				height *= fractalRatio;

				angleX *= fractalRatio;
				angleZ *= fractalRatio;
				// animationTime *= 2;
				// fractalRatio *= fractalRatio;

				const newProperties = {
					origin: origin,
					radius: radius,
					height: height,
					angleX: angleX,
					angleZ: angleZ,
					fractalRatio: fractalRatio,
					level: level,
					limit: limit
				}

				branchParentMesh.add(renderTree(newProperties));
				branchParentMesh.add(renderTree({...newProperties,angleX:-angleX}));
				branchParentMesh.add(renderTree({...newProperties,angleZ:-angleZ}));
				branchParentMesh.add(renderTree({...newProperties,angleZ:-angleZ,angleX:-angleX}));
			}

			return branchParentMesh;
		}

		/**
		 * Sets basic 3D Scene Elements
		 */
		const initScene = () => {
			/**
			 * Render grid and XYZ Axis Helpers
			 */
			scene.add(getGridHelper(50, 5, '#000000'));

			//The X axis is red. The Y axis is green. The Z axis is blue.
			scene.add(getAxesHelper(50));
			// scene.add( getAmbientLight(0x404040) );

			camera.position.set(...camConf.initial.position);
			camera.lookAt(...camConf.initial.lookAt);
			document.body.appendChild(renderer.domElement);

			showStats();

			window.addEventListener('resize', onWindowResize, false);
		}

		/**
		 * Updates objects on each frame
		 */
		const animate = () => {
			requestAnimationFrame(animate);

			stats.begin();

			TWEEN.update();

			renderer.render(scene, camera);

			stats.end();
		}

		//=====Initialization=====
		initializeMisc();
		createMaterials();
		generateGeometries();
		recursiveRender();


		//=====Object Creation=====

		return ({
			start: () => {
				initScene();
				animate();
			}
		});


	}

