const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 200 );
camera.lookAt( 0, 0, 0 );
const scene = new THREE.Scene();

const loader = new THREE.TextureLoader();
// const bgTexture = loader.load("https://www.pinterest.com/pin/1058697824873564596/");

// Load an image file into a custom material
var imgMaterial = new THREE.MeshLambertMaterial({
    map: loader.load("https://c8.alamy.com/comp/2F37FNE/usa-a-scene-from-the-cwarner-bros-new-film-tom-jerry-the-movie-2021-plot-adaption-of-the-classic-hanna-barbera-property-which-reveals-how-tom-and-jerry-first-meet-and-form-their-rivalry-ref-lmk106-j6940-020321-supplied-by-lmkmedia-editorial-only-landmark-media-is-not-the-copyright-owner-of-these-film-or-tv-stills-but-provides-a-service-only-for-recognised-media-outlets-pictures@lmkmediacom-2F37FNE.jpg")
  });

// create a plane geometry for the image with a width of 10
// and a height that preserves the image's aspect ratio
var imgGeometry = new THREE.PlaneGeometry(window.innerWidth/3, window.innerHeight/3);

// combine our image geometry and material into a mesh
var mesh = new THREE.Mesh(imgGeometry, imgMaterial);

// set the position of the image mesh in the x,y,z dimensions
mesh.position.set(0,0,-0.5);

// add the image to the scene
scene.add(mesh);

let lightIntensity = 1.5;

// Add a point light with #fff color, .7 intensity, and 0 distance
var light = new THREE.PointLight( 0xffffff, lightIntensity , 0 );

// Specify the light's position
light.position.set(1, 1, 100 );

// Add the light to the scene
scene.add(light)

 
const listener = new THREE.AudioListener();
camera.add(listener);

// load a sound and set it as the Audio object's buffer
const audioLoader = new THREE.AudioLoader();

//Audio object is the source of the sound & listener is the listener of the sound that is attached to the camera
const bgsound = new THREE.Audio(listener);
    audioLoader.load( 'https://www.fesliyanstudios.com/play-mp3/7646', function( buffer ) {     //Sending sound file to buffer function
        bgsound.setBuffer( buffer );                                     //buffer is like a storage place
        bgsound.setLoop( true );
        bgsound.setVolume( 1 );
        bgsound.play();
    });
    scene.add(audioLoader);

    

const material = new THREE.LineBasicMaterial({
  color: "#a8c3bc",
});

//Making array of random values of x
const xValues = [];
for (let n = 0; n<200; n++) {
    let x= getRandomInt(-200,200);
    xValues.push(x);
}

//Making array of random values of y
const yValues = [];
for (let n = 0; n<200; n++) {
    let y= getRandomInt(-200,200);
    yValues.push(y);
}

//Random number generator
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//points array to store vertices of line segments
const points = [];


function animate(){
    requestAnimationFrame(animate);
    for (let m = 0; m < 1000; m++) {                     //it will make 500 visible rain drops at one time
        let x = xValues[m];                             //ith random number from xValues array
        let y = yValues[m];                             //ith random number from yValues array
        let incr = getRandomInt(0.5, 4)                 //getting random number to increment in y1
        points.push(new THREE.Vector3(x, y+incr, 0));   // so that rain drop will be of variable size
        points.push(new THREE.Vector3(x, y, 0));
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.LineSegments(geometry, material);
    scene.add(line);                                    //adding line into the scene
    let posi= getRandomInt(-50,50);                     
    let posi1=getRandomInt(-80,80);
    
    line.position.set(posi1,posi,0);                    //setting random x and y positions for rain drop
    renderer.render( scene, camera );

    points.length = 0;                                  //setting points array to 0 to delete all the 500 rain drops vertices generated through for loop
    scene.remove(line);                                 //removing all 500 rain drops from the scene
}
animate();
