WIDTH = window.innerWidth;
HEIGHT = window.innerHeight;
var lienzo = new THREE.WebGLRenderer({antialias: true});

lienzo.setSize(WIDTH,HEIGHT);

document.body.appendChild(lienzo.domElement);
var escena = new THREE.Scene;

var geometriaCubo1 = new THREE.CubeGeometry(100,140,100);
var geometriaCubo2 = new THREE.CubeGeometry(100,140,100);

var aparienciaLila = new THREE.MeshLambertMaterial({color: 0x9999FF});

var cubo1 = new THREE.Mesh(geometriaCubo1, aparienciaLila);
var cubo2 = new THREE.Mesh(geometriaCubo2, aparienciaLila);

escena.add(cubo1);
escena.add(cubo2);

var camara = new THREE.PerspectiveCamera(45,(WIDTH / HEIGHT),0.1,10000);

camara.position.y = 160;
camara.position.z = 400;

camara.lookAt(cubo1.position);

cubo1.position.x = -100;
cubo2.position.x = 100;

escena.add(camara);

var luz1 = new THREE.PointLight(0xff0044);
luz1.position.set(120,260,100);

var luz2 = new THREE.PointLight(0x4499ff);
luz2.position.set(-100,100,200);

escena.add(luz1);
escena.add(luz2);

x=0;
init=true;
hover=true;
function renderizar(){
	if(!hover || init){
		init=false;
		requestAnimationFrame(renderizar);
		return false;
	}
	cubo1.rotation.y += Math.PI * 0.5 / 180;
	cubo1.rotation.z += Math.PI * Math.cos(x++ / 50) / 180;
	
	cubo2.rotation.y += Math.PI * Math.cos(x++ / 100) / 180;
	cubo2.rotation.z += Math.PI * 0.2 / 180;
	
	lienzo.render(escena, camara);
	requestAnimationFrame(renderizar);
}
renderizar();

addEventListener("mouseover",function(){hover=true;});
addEventListener("mouseout",function(){hover=false;});

