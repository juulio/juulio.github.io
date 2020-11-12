	import recursiveTree from "./recursiveTree.js";

	const configuration = {
		camConf: {
			properties: {
				fov: 75,
				aspect: window.innerWidth / window.innerHeight,
				near: 0.1,
				far: 1000
			},
			initial: {
				position: [0, 3, 3.5],
				lookAt: [0, 0, 0]
			}
		},
		materialConf: {
			woodColor: 0x8B4513,
			leafColor: 0x00FF13,
			leafOpacity: 0.6
		},
		treeConfig: {
			origin: [0, 0, 0],
			radius: 0.1,
			height: 1,
			fractalRatio: 0.8,
			angleX: Math.PI / 4,
			angleZ: Math.PI / 5,
			level: 0,
			limit: 3
		}
		

	}

	const arbolRecursivo = recursiveTree(configuration);

	arbolRecursivo.start();
