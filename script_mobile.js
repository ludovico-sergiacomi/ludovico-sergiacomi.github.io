var mouse = []
const body = document.body
document.body.onmousemove = ()=>{mouseHandler(event)}

var x = 0;
var y = 0;

function mouseHandler(event){
    mouse[0] = event.clientX + window.scrollX;
    mouse[1] = event.clientY + window.scrollY;
    // console.log(mouse)
    let star = document.createElement('span')
    star.classList.add('mousestar')
    star.style.top = String(mouse[1]) + 'px'
    star.style.left = String(mouse[0]) + 'px'
    star.innerHTML = '*'
    star.onanimationend = () => {document.body.removeChild(star)}
    document.body.appendChild(star)

    x = mouse[0];
    y = mouse[1];
    
}

try{
const modeSwitch = document.querySelector('.modeBar')
const modeButton = document.querySelector('.modeButton')
modeSwitch.addEventListener('click', modeHandler)
var mode = 'moon'



function modeHandler(e){
    if(mode == 'moon'){
        modeButton.style.left = '100%'
        modeButton.style.transform = 'translate(-100%, 0)'
        mode = 'sun'
        
    }

    else {
        modeButton.style.left = '0%'
        modeButton.style.transform = 'translate(0, 0)'
        mode = 'moon'
    }

}
}
catch(err){ 
    console.log(err)
}


const WIDTH = 150;
const HEIGHT =150;

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true});
renderer.setSize(WIDTH, HEIGHT);
// renderer.setClearColor(0x020321, 0.5);
document.getElementById("canvy").appendChild(renderer.domElement);

const scene = new THREE.Scene();

// scene.background = new THREE.Color().setHex( 0x1B0A40 );

const camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);
camera.position.z = 50;
scene.add(camera);

// const light = new THREE.PointLight(0xffffff);
// light.position.set(-10, 15, 50);
// scene.add(light);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
directionalLight.position.z = 3
scene.add(directionalLight)

let k = 15;
const boxGeometry = new THREE.TorusKnotGeometry(10, 4, 100, 16);
// const basicMaterial = new THREE.MeshBasicMaterial({ color: 0xe66eb2 });
const basicMaterial = new THREE.MeshLambertMaterial({ color: 0xe66eb2 });
// const basicMaterial = new THREE.MeshPhongMaterial({ color: 0xe66eb2 });



const cube = new THREE.Mesh(boxGeometry, basicMaterial);
scene.add(cube);
// cube.rotation.y = 1;


// var x = 0;
// var y = 0;
// function updateDisplay(e){
//   x = e.pageX;
//   y = e.pageY;
// }

// document.body.addEventListener("mousemove", updateDisplay);
   


function render() {
    // cube.rotation.x += 0.02;
    // cube.rotation.y += 0.02;
    cube.rotation.y = 1- x*2/window.innerWidth;
    cube.rotation.x = 1- y*2/window.innerHeight;
    cube.rotation.z += 0.005;
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}
render();



function aStarIsBorn(){
    
    let star = document.createElement("span");
    star.classList.add("star");
    star.innerHTML = '*';
    star.style.left = String(Math.round(Math.random()*95)) + "%";
    star.style.top = String(Math.round(Math.random()*95)) + "%";
    document.body.appendChild(star)
    star.addEventListener("animationend", ()=>{
        // console.log("animation end");
        document.body.removeChild(star);
    })
}


setInterval( aStarIsBorn, 1000);






var projects = [
    'ARBITRAGE',
    'WEB DEVELOPMENT!',
    'BOUNCING BALLS',


    'PRIME NUMBERS',
    'WORDS',
    'ARDUINO',

    'GRAPHICS',
    'COMING SOON',
    'BLOCKCHAIN',
    
    '3D MODELING',
    'PHOTOGRAPHY',
    'OIL PASTELS',
]

var titles = [
    "JavaScript", "Python", "Miscellanea", "Art"
]

const titleBtn = document.querySelector(".middle-btn");
titleBtn.innerHTML = titles[0];

titleBtn.addEventListener("click", ()=>{triggerAnimation()});

// document.querySelector("#forward").addEventListener("click", ()=>{triggerAnimation(0)})
// document.querySelector("#backward").addEventListener("click", ()=>{triggerAnimation(-2)})

const projectBoard = document.querySelector(".project-board") ;



for(let i=0; i<projects.length; i++){
    let circle = document.createElement("div")
    circle.classList.add("project-circle");
    projectBoard.appendChild(circle);
    let info = document.createElement("span")
    info.classList.add("info-span")
    info.innerHTML = projects[i];
    circle.appendChild(info);
}


const projectCircles = document.querySelectorAll(".project-circle")
for(let i =0; i<projectCircles.length; i++){
    projectCircles[i].addEventListener("click", ()=>{focusHandler(i)})
}


const spans = document.querySelectorAll(".info-span");
var j=0;
function triggerAnimation(){
    
    
    let width = 8.5;
    titleBtn.innerHTML = titles[j];
    // projectBoard.style.left = "calc(" + (j*width*-1).toString() + "px -0.5rem)";
    projectBoard.style.left = (3*j*width*-1).toString() + "rem";
    // projectBoard.style.transform = "translateX(1rem)";
    j++;
    j = j%4;
    
}



function focusHandler(self){
   
    for(let i=0; i<projectCircles.length; i++){
        if(i == self){
            projectCircles[i].classList.add("project-circle-active");
            projectDescription(i);

        }
        else{
            projectCircles[i].classList.remove("project-circle-active");
        }
    }
}

const notebook = document.querySelector(".notebook");
function projectDescription(self){
    notebook.innerHTML = descriptions[self] 
}

var descriptions = [
    '<h2> LOREM IPSUM 1</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper, quam non condimentum feugiat, massa arcu lobortis erat, eu mollis mi sapien non sem. Aliquam erat volutpat. Phasellus ac tempus ex. Duis vestibulum pharetra tortor, et feugiat est viverra a. Morbi nec rhoncus est. Fusce sagittis metus sit amet ultrices ultricies. Sed fringilla id enim id efficitur. Sed faucibus odio nisl, ac sodales dui pulvinar sed. Integer bibendum tincidunt magna nec dignissim. Quisque consequat arcu tellus, eu tempus sem semper ac. Morbi at vestibulum massa.</p>',
    '<h2> LOREM IPSUM 2</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper, quam non condimentum feugiat, massa arcu lobortis erat, eu mollis mi sapien non sem. Aliquam erat volutpat. Phasellus ac tempus ex. Duis vestibulum pharetra tortor, et feugiat est viverra a. Morbi nec rhoncus est. Fusce sagittis metus sit amet ultrices ultricies. Sed fringilla id enim id efficitur. Sed faucibus odio nisl, ac sodales dui pulvinar sed. Integer bibendum tincidunt magna nec dignissim. Quisque consequat arcu tellus, eu tempus sem semper ac. Morbi at vestibulum massa.</p>',
    '<h2> LOREM IPSUM 3</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper, quam non condimentum feugiat, massa arcu lobortis erat, eu mollis mi sapien non sem. Aliquam erat volutpat. Phasellus ac tempus ex. Duis vestibulum pharetra tortor, et feugiat est viverra a. Morbi nec rhoncus est. Fusce sagittis metus sit amet ultrices ultricies. Sed fringilla id enim id efficitur. Sed faucibus odio nisl, ac sodales dui pulvinar sed. Integer bibendum tincidunt magna nec dignissim. Quisque consequat arcu tellus, eu tempus sem semper ac. Morbi at vestibulum massa.</p>',
    '<h2> LOREM IPSUM 4</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper, quam non condimentum feugiat, massa arcu lobortis erat, eu mollis mi sapien non sem. Aliquam erat volutpat. Phasellus ac tempus ex. Duis vestibulum pharetra tortor, et feugiat est viverra a. Morbi nec rhoncus est. Fusce sagittis metus sit amet ultrices ultricies. Sed fringilla id enim id efficitur. Sed faucibus odio nisl, ac sodales dui pulvinar sed. Integer bibendum tincidunt magna nec dignissim. Quisque consequat arcu tellus, eu tempus sem semper ac. Morbi at vestibulum massa.</p>',
    '<h2> LOREM IPSUM 5</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper, quam non condimentum feugiat, massa arcu lobortis erat, eu mollis mi sapien non sem. Aliquam erat volutpat. Phasellus ac tempus ex. Duis vestibulum pharetra tortor, et feugiat est viverra a. Morbi nec rhoncus est. Fusce sagittis metus sit amet ultrices ultricies. Sed fringilla id enim id efficitur. Sed faucibus odio nisl, ac sodales dui pulvinar sed. Integer bibendum tincidunt magna nec dignissim. Quisque consequat arcu tellus, eu tempus sem semper ac. Morbi at vestibulum massa.</p>',
    '<h2> LOREM IPSUM 6</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper, quam non condimentum feugiat, massa arcu lobortis erat, eu mollis mi sapien non sem. Aliquam erat volutpat. Phasellus ac tempus ex. Duis vestibulum pharetra tortor, et feugiat est viverra a. Morbi nec rhoncus est. Fusce sagittis metus sit amet ultrices ultricies. Sed fringilla id enim id efficitur. Sed faucibus odio nisl, ac sodales dui pulvinar sed. Integer bibendum tincidunt magna nec dignissim. Quisque consequat arcu tellus, eu tempus sem semper ac. Morbi at vestibulum massa.</p>',
    '<h2> LOREM IPSUM 7</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper, quam non condimentum feugiat, massa arcu lobortis erat, eu mollis mi sapien non sem. Aliquam erat volutpat. Phasellus ac tempus ex. Duis vestibulum pharetra tortor, et feugiat est viverra a. Morbi nec rhoncus est. Fusce sagittis metus sit amet ultrices ultricies. Sed fringilla id enim id efficitur. Sed faucibus odio nisl, ac sodales dui pulvinar sed. Integer bibendum tincidunt magna nec dignissim. Quisque consequat arcu tellus, eu tempus sem semper ac. Morbi at vestibulum massa.</p>',
    '<h2> LOREM IPSUM 8</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper, quam non condimentum feugiat, massa arcu lobortis erat, eu mollis mi sapien non sem. Aliquam erat volutpat. Phasellus ac tempus ex. Duis vestibulum pharetra tortor, et feugiat est viverra a. Morbi nec rhoncus est. Fusce sagittis metus sit amet ultrices ultricies. Sed fringilla id enim id efficitur. Sed faucibus odio nisl, ac sodales dui pulvinar sed. Integer bibendum tincidunt magna nec dignissim. Quisque consequat arcu tellus, eu tempus sem semper ac. Morbi at vestibulum massa.</p>',
    '<h2> LOREM IPSUM 9</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper, quam non condimentum feugiat, massa arcu lobortis erat, eu mollis mi sapien non sem. Aliquam erat volutpat. Phasellus ac tempus ex. Duis vestibulum pharetra tortor, et feugiat est viverra a. Morbi nec rhoncus est. Fusce sagittis metus sit amet ultrices ultricies. Sed fringilla id enim id efficitur. Sed faucibus odio nisl, ac sodales dui pulvinar sed. Integer bibendum tincidunt magna nec dignissim. Quisque consequat arcu tellus, eu tempus sem semper ac. Morbi at vestibulum massa.</p>',
    '<h2> LOREM IPSUM 10</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper, quam non condimentum feugiat, massa arcu lobortis erat, eu mollis mi sapien non sem. Aliquam erat volutpat. Phasellus ac tempus ex. Duis vestibulum pharetra tortor, et feugiat est viverra a. Morbi nec rhoncus est. Fusce sagittis metus sit amet ultrices ultricies. Sed fringilla id enim id efficitur. Sed faucibus odio nisl, ac sodales dui pulvinar sed. Integer bibendum tincidunt magna nec dignissim. Quisque consequat arcu tellus, eu tempus sem semper ac. Morbi at vestibulum massa.</p>',
    '<h2> LOREM IPSUM 11</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper, quam non condimentum feugiat, massa arcu lobortis erat, eu mollis mi sapien non sem. Aliquam erat volutpat. Phasellus ac tempus ex. Duis vestibulum pharetra tortor, et feugiat est viverra a. Morbi nec rhoncus est. Fusce sagittis metus sit amet ultrices ultricies. Sed fringilla id enim id efficitur. Sed faucibus odio nisl, ac sodales dui pulvinar sed. Integer bibendum tincidunt magna nec dignissim. Quisque consequat arcu tellus, eu tempus sem semper ac. Morbi at vestibulum massa.</p>',
    '<h2> LOREM IPSUM 12</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper, quam non condimentum feugiat, massa arcu lobortis erat, eu mollis mi sapien non sem. Aliquam erat volutpat. Phasellus ac tempus ex. Duis vestibulum pharetra tortor, et feugiat est viverra a. Morbi nec rhoncus est. Fusce sagittis metus sit amet ultrices ultricies. Sed fringilla id enim id efficitur. Sed faucibus odio nisl, ac sodales dui pulvinar sed. Integer bibendum tincidunt magna nec dignissim. Quisque consequat arcu tellus, eu tempus sem semper ac. Morbi at vestibulum massa.</p>',
]