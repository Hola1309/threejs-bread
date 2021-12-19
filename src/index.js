import * as THREE from './node_modules/three/build/three.module.js';
import { GLTFLoader } from  './node_modules/three/examples/jsm/loaders/GLTFLoader.js';


var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			
var loader = new GLTFLoader();
loader.load( 'model/scene.gltf', function ( gltf ) {
    scene.add( gltf.scene );
    renderer.render( scene, camera );
    var animate = function () {
        requestAnimationFrame( animate );

        gltf.scene.rotation.x += 0.01;
        gltf.scene.rotation.y += 0.01;

        renderer.render( scene, camera );
    };

    animate();
    console.log(123132);
});
			// scene.add( cube );

			camera.position.z = 5;