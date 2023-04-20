var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
camera.position.z = 4.5;
camera.position.x = -1.2;
camera.position.y = 2;

camera.rotation.set(0, -0.5, 0);

scene.add(camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);

const light = new THREE.DirectionalLight(0x00ffff, 1);
light.position.set(-1, 2, 4);
scene.add(light);

//Se crea el arreglo de tamaño de los objetos

Sphere = [];
Material = [];
// Tamaño esfera Inicial
var Sx=0.5;
var Sy=0.5;
var Sz=3;
var R=1;


//Creacion color y material de los objetos
color = [{color:0xD3D3D3}];
var geometry = new THREE.SphereGeometry([R, R, R] [1, 1, 1]);
Material.push(new THREE.MeshStandardMaterial(color[0]));
//Creacion del arreglo cube donde se aplican los arreglos de geometria y material al objeto 
Sphere[0] = new THREE.Mesh(geometry, Material[0]);

var Rx=45*(Math.PI/180);
var Ry=45*(Math.PI/180);
var Rz=45*(Math.PI/180);

var Tx=0.5;
var Ty=0.5;
var Tz=3;

Escala(Sx, Sy, Sz);
Rotacion(Rx, Ry, Rz);
Traslacion(Tx, Ty, Tz);

//que añade la esfera a la escena
scene.add(Sphere[0]);

const size = 150;
const divisions = 160;
const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);

const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();