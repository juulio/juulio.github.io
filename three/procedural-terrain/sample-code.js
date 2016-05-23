<!DOCTYPE HTML>
<html lang="en">
	<head>
		<title>three.js - ribbons - webgl</title>
		<meta charset="utf-8">
		<style type="text/css">
			body {
				background-color: #000000;
				margin: 0px;
				overflow: hidden;
                font-family:Monospace;
                font-size:13px;
                text-align:center;
                font-weight: bold;
				text-align:center;
			}

			a {
				color:#0078ff;
			}

            #info {
				color:#fff;
                position: absolute;
                top: 0px; width: 100%;
                padding: 5px;
				z-index:100;

            }


		</style>
	</head>
	<body>

        <div id="info">
			<a href="http://github.com/mrdoob/three.js" target="_blank">three.js</a> - webgl ribbons example
		</div>

		<script type="text/javascript" src="../build/ThreeExtrasRibbon.js"></script>
		<script type="text/javascript" src="js/Stats.js"></script>

		<script type="text/javascript">

			if ( ! THREE.Detector.webgl ) THREE.Detector.addGetWebGLMessage();

			var container, stats;
			var camera, scene, renderer, ribbon, geometry, geometry2, materials = [], ribbons = [],
				parameters, i, i2, h, color, x, y, z, z2, s, n, n2, nribbons, grid;

			var mouseX = 0, mouseY = 0;

			var windowHalfX = window.innerWidth / 2;
			var windowHalfY = window.innerHeight / 2;

			var postprocessing = {

				enabled  : true

			};

			init();
			setInterval( loop, 1000 / 60 );

			function init() {

				container = document.createElement( 'div' );
				document.body.appendChild( container );

				camera = new THREE.Camera( 70, window.innerWidth / window.innerHeight, 1, 3000 );
				camera.position.z = 1200;

				scene = new THREE.Scene();
				scene.fog = new THREE.FogExp2( 0x000000, 0.0016 );

				renderer = new THREE.WebGLRenderer();
				renderer.setSize( window.innerWidth, window.innerHeight );
				container.appendChild( renderer.domElement );

				renderer.setClearColor( scene.fog.color, 1 );

				geometry = new THREE.Geometry();
				geometry2 = new THREE.Geometry();

				n = 1000;
				n2 = 2 * n;

				for ( i = -n; i < n; i++ ) {

					i2 = i + n;

					x = i * 1.175;
					y = ( i2 % 2 ) * 5;

					if ( i2 % 2 )  {

						z = 10 * Math.sin( i2 * 0.3 ) * Math.cos( i2 * 0.1 );

					}

					vector = new THREE.Vector3( x, y, z );
					geometry.vertices.push( new THREE.Vertex( vector ) );


					vector = new THREE.Vector3( x, y, z );
					geometry2.vertices.push( new THREE.Vertex( vector ) );

					h = i2%2 ? 1 : 0.15;
					if( i2%4 <= 2 ) h -= 0.15;

					color = new THREE.Color( 0xffffff );
					color.setHSV( 0.1 , 0, h );
					geometry.colors.push( color );
					geometry2.colors.push( color );

				}

				var material_base = new THREE.MeshBasicMaterial( { color:0xffffff, vertex_colors:true } );

				renderer.initMaterial( material_base, scene.lights, scene.fog );

				xgrid = 34;
				ygrid = 15;
				nribbons = xgrid * ygrid;

				c = 0;
				for ( i = 0; i < xgrid; i++ )
				for ( j = 0; j < ygrid; j++ ) {

					materials[c] = new THREE.MeshBasicMaterial( { color:0xffffff, vertex_colors:true } );
					materials[c].program = material_base.program;
					materials[c].uniforms = Uniforms.clone( THREE.ShaderLib[ 'basic' ].uniforms );

					ribbon = new THREE.Ribbon( i % 2 ? geometry : geometry2, materials[c] );
					ribbon.rotation.x = 1.57;
					ribbon.rotation.y = 1.57;
					ribbon.rotation.z = -3.14;

					x = 40 * ( i - xgrid/2 );
					y = 40 * ( j - ygrid/2 );
					z = 0;
					ribbon.position.set( x, y, z );

					materials[c].color.setHSV( i/xgrid, 0.3 +  0.7*j/ygrid, 1 );

					ribbon.doubleSided = true;
					ribbon.autoUpdateMatrix = false;
					ribbon.updateMatrix();

					ribbons.push( ribbon );
					scene.addObject( ribbon );

					c++;

				}

				scene.autoUpdateMatrix = false;

				initPostprocessing();
				renderer.autoClear = false;

				stats = new Stats();
				stats.domElement.style.position = 'absolute';
				stats.domElement.style.top = '0px';
				container.appendChild( stats.domElement );

				document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				document.addEventListener( 'touchstart', onDocumentTouchStart, false );
				document.addEventListener( 'touchmove', onDocumentTouchMove, false );

			}

			function onDocumentMouseMove( event ) {

				mouseX = event.clientX - windowHalfX;
				mouseY = event.clientY - windowHalfY;

			}

			function onDocumentTouchStart( event ) {

				if ( event.touches.length == 1 ) {

					event.preventDefault();

					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					mouseY = event.touches[ 0 ].pageY - windowHalfY;

				}
			}

			function onDocumentTouchMove( event ) {

				if ( event.touches.length == 1 ) {

					event.preventDefault();

					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					mouseY = event.touches[ 0 ].pageY - windowHalfY;

				}

			}

			function initPostprocessing() {

				postprocessing.scene = new THREE.Scene();

				postprocessing.camera = new THREE.Camera();
				postprocessing.camera.projectionMatrix = THREE.Matrix4.makeOrtho( window.innerWidth / - 2, window.innerWidth / 2,  window.innerHeight / 2, window.innerHeight / - 2, -10000, 10000 );
				postprocessing.camera.position.z = 100;

				var pars = { min_filter: THREE.LinearFilter, mag_filter: THREE.LinearFilter };
                postprocessing.rtTexture1 = new THREE.RenderTarget( window.innerWidth, window.innerHeight, pars );
                postprocessing.rtTexture2 = new THREE.RenderTarget( 512, 512, pars );
                postprocessing.rtTexture3 = new THREE.RenderTarget( 512, 512, pars );

				var screen_shader = ShaderUtils.lib["screen"];
				var screen_uniforms = Uniforms.clone( screen_shader.uniforms );

				screen_uniforms["tDiffuse"].texture = postprocessing.rtTexture1;
				screen_uniforms["opacity"].value = 1.0;

                postprocessing.materialScreen = new THREE.MeshShaderMaterial( {

                    uniforms: screen_uniforms,
                    vertex_shader: screen_shader.vertex_shader,
                    fragment_shader: screen_shader.fragment_shader,
					blending: THREE.AdditiveBlending

                } );


				var convolution_shader = ShaderUtils.lib["convolution"];
				var convolution_uniforms = Uniforms.clone( convolution_shader.uniforms );

				postprocessing.blurx = new THREE.Vector2( 0.001953125, 0.0 ),
				postprocessing.blury = new THREE.Vector2( 0.0, 0.001953125 );

				convolution_uniforms["tDiffuse"].texture = postprocessing.rtTexture1;
				convolution_uniforms["uImageIncrement"].value = postprocessing.blurx;
				convolution_uniforms["cKernel"].value = ShaderUtils.buildKernel( 4.0 );

                postprocessing.materialConvolution = new THREE.MeshShaderMaterial( {

                    uniforms: convolution_uniforms,
                    vertex_shader:   "#define KERNEL_SIZE 25.0\n" + convolution_shader.vertex_shader,
                    fragment_shader: "#define KERNEL_SIZE 25\n"   + convolution_shader.fragment_shader

                } );


				postprocessing.quad = new THREE.Mesh( new Plane( window.innerWidth, window.innerHeight ), postprocessing.materialConvolution );
				postprocessing.quad.position.z = -500;
				postprocessing.scene.addObject( postprocessing.quad );

			}

			function loop() {

				var time = new Date().getTime() * 0.00005;

				camera.position.x += ( mouseX - camera.position.x ) * 0.036;
				camera.position.y += ( - (mouseY) - camera.position.y ) * 0.036;

				for ( i = -n; i < n; i++ ) {

					i2 = i + n;

					z  =  10 * Math.sin( i2 * 0.1 + time*30 );
					z2 =  20 * Math.cos( Math.sin( i2 * 0.1 + time * 20 ) );

					geometry.vertices[i2].position.z = z;
					geometry2.vertices[i2].position.z = z2;

				}

				geometry.__dirtyVertices = true;
				geometry2.__dirtyVertices = true;


				for( i = 0; i < nribbons; i++ ) {

					h = ( 360 * ( i/nribbons + time ) % 360 ) / 360;
					materials[i].color.setHSV( h, 0.5+0.5*(i%20/20), 1 );

				}

				//renderer.render( scene, camera );

				if ( postprocessing.enabled ) {

					renderer.clear();

					// Render scene into texture

					renderer.render( scene, camera, postprocessing.rtTexture1 );

					// Render quad with blured scene into texture (convolution pass 1)

					postprocessing.quad.materials = [ postprocessing.materialConvolution ];

					postprocessing.materialConvolution.uniforms.tDiffuse.texture = postprocessing.rtTexture1;
					postprocessing.materialConvolution.uniforms.uImageIncrement.value = postprocessing.blurx;

					renderer.render( postprocessing.scene, postprocessing.camera, postprocessing.rtTexture2 );

					// Render quad with blured scene into texture (convolution pass 2)

					postprocessing.materialConvolution.uniforms.tDiffuse.texture = postprocessing.rtTexture2;
					postprocessing.materialConvolution.uniforms.uImageIncrement.value = postprocessing.blury;

					renderer.render( postprocessing.scene, postprocessing.camera, postprocessing.rtTexture3 );

					// Render original scene with superimposed blur to texture

					postprocessing.quad.materials = [ postprocessing.materialScreen ];

					postprocessing.materialScreen.uniforms.tDiffuse.texture = postprocessing.rtTexture3;
					postprocessing.materialScreen.uniforms.opacity.value = 1.2;

					renderer.render( postprocessing.scene, postprocessing.camera, postprocessing.rtTexture1, false );

					// Render to screen

					postprocessing.materialScreen.uniforms.tDiffuse.texture = postprocessing.rtTexture1;
					renderer.render( postprocessing.scene, postprocessing.camera );

				} else {

					renderer.clear();
					renderer.render( scene, camera );

				}

				stats.update();
			}


		</script>
	</body>
</html>
