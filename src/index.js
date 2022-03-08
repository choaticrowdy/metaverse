import keyInput from "./KeyInput.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//Step 1: creating an object in metaverse

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

/* const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );

//scene needs to added 
scene.add( cube );
//still not able to see the cube because of camera position.
camera.position.z = 5;

// to add animation to the cube 
function animate() {
    cube.rotation.x +=0.01;
    cube.rotation.y +=0.01;
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate(); */


//Step 2: adding directional light to the objects in metaverse

/* const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );

//add light 
const light = new THREE.AmbientLight(0x404040);
const dLight = new THREE.DirectionalLight(0xffffff, 0.5);

light.add(dLight);
scene.add(light);

//scene needs to added
scene.add( cube );
//still not able to see the cube because of camera position.
camera.position.z = 5;

// you can't see anything after saving, because there is no light in the metaverse, let's create some light
function animate() {
    cube.rotation.x +=0.01;
    cube.rotation.y +=0.01;
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate(); */



//Step 3: adding ground in the metaverse

const light = new THREE.AmbientLight(0x404040);
const dLight = new THREE.DirectionalLight(0xffffff, 0.5);
//add light 
light.add(dLight);
scene.add(light);

const geometry = new THREE.BoxGeometry(50, 0.1, 50);
// const material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
const material = new THREE.MeshPhongMaterial( { color: 0xffffff } );
const ground = new THREE.Mesh( geometry, material );

scene.add( ground );
// camera.position.z = 6;
camera.position.set(5,15,15);

/* function animate() {
    requestAnimationFrame(animate);
    camera.lookAt(ground.position); // after adding this view of the ground changes.
    renderer.render(scene, camera);
}
animate(); */ 
// can't see anything because camera position is not accurate. go and adjust the camera position to see the ground.
// As seeing ground in green is bit weird, hence please change the color to white.
// i need to slightly higher ground position to make it better angle to view, hence we can set the camera view


//Step 4: create building blocks on the ground 

const boxGeometry = new THREE.BoxGeometry(2, 2, 2);
// const boxMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff } );
const boxMaterial = new THREE.MeshPhongMaterial( { color: 0x00ff00 } ); //change it's color back to green
const box = new THREE.Mesh(boxGeometry, boxMaterial );
box.position.set(-2,0,8);

scene.add(box);


/* function animate() {
    requestAnimationFrame(animate);
    camera.lookAt(ground.position); // after adding this view of the ground changes.
    renderer.render(scene, camera);
}
animate(); */

//These buildings are we are going to sell it as NFT's on metaverse.

// we can set the box position 

//Step 5: utlizing camera movement around the building 

function animate() {
    requestAnimationFrame(animate);
    if(keyInput.isPressed(38)){
        camera.position.y += 0.05;
        camera.position.x += 0.05;
    }
    if(keyInput.isPressed(40)){
        camera.position.y -= 0.05;
        camera.position.x -= 0.05;
    }
    camera.lookAt(ground.position); // after adding this view of the ground changes.
    renderer.render(scene, camera);
}
animate(); 