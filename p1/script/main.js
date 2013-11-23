WIDTH = window.innerWidth; // Ancho de pantalla
HEIGHT = window.innerHeight; // Alto de pantalla

// Lienzo u objeto encargado del renderizado
var lienzo = new THREE.WebGLRenderer({antialias: true});

// Establecemos las dimensiones del lienzo
lienzo.setSize(
	WIDTH,
	HEIGHT
);

// Añadimos el lienzo a la página
document.body.appendChild(lienzo.domElement);

// Creamos la escena
var escena = new THREE.Scene;


// Creamos un poligono
var geometriaCubo = new THREE.CubeGeometry(
	100, // Dimensiones en eje X
	140, // Dimensiones en eje Y
	100 // Dimensiones en eje Z
);

// Creamos una apariencia (de lila claro)
var aparienciaLila = new THREE.MeshLambertMaterial({
	color: 0x9999FF // Color hexadecimal
});

// Generamos el polígino y le aplicamos la apariencia
var cubo = new THREE.Mesh(geometriaCubo, aparienciaLila);

// Añadimos el cubo a la escena
escena.add(cubo);


// Generamos la cámara
var camara = new THREE.PerspectiveCamera(
	45,
	(WIDTH / HEIGHT),
	0.1,
	10000
);

// Situamos la cámara
camara.position.y = 160;
camara.position.z = 400;

// Centramos la vista en el cubo
camara.lookAt(cubo.position);

// Añadimos la cámara a la escena
escena.add(camara);

// Creamos una par de focos de luz
var luz1 = new THREE.PointLight(0xff0044); // Rojizo
luz1.position.set(
	120, // Posición en eje X
	260, // Posición en eje Y
	100	 // Posición en eje Z
);

var luz2 = new THREE.PointLight(0x4499ff); // Azulado
luz2.position.set(
	-100, // Posición en eje X
	100, // Posición en eje Y
	200	 // Posición en eje Z
);

// Añadimos las luces
escena.add(luz1);
escena.add(luz2);

x=0;
function renderizar(){
	// Rotamos el cubo
	cubo.rotation.y += Math.PI * 0.5 / 180;
	cubo.rotation.z += Math.PI * Math.cos(x++ / 50) / 180;
	// Renderizamos la escena
	lienzo.render(escena, camara);
	// Volvemos a renderizar
	requestAnimationFrame(renderizar);
}

// Empezamos a renderizar
renderizar();



