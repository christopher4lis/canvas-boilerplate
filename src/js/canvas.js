import utils from './utils';
import { randomColor } from './utils';
import { randomIntFromRange } from './utils';

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
};


const colors = ['#2185C5',
                '#7ECEFD',
                '#FFF6E5',
                '#FF7F66'
              ];



// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
})

addEventListener('resize', () => {

  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();

})

// Ball class for constructing balls on the screen.
class Ball {

  constructor(x, y, dy, radius, color) {

    this.x = x;
    this.y = y;
    this.dy = dy;
    this.radius = radius;
    this.color = color;

  }

  draw() {

    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }

  update() {

    if (this.y + this.radius > canvas.height) {

      this.dy = -this.dy;
      
    }else{

      this.y += this.dy;

    }

    this.y += 1;
    this.draw();
    
  }
}

// Implementation
let ballArray = [];

function init() {

  let x = randomIntFromRange(0, (canvas.width));
  let y = randomIntFromRange(0, (canvas.height));
  let dy = randomIntFromRange(0, 4);
  let rad = randomIntFromRange(10, 50);
  let color = randomColor(colors);


  for (let i = 0; i < 400; i++) {

    ballArray.push(new Ball(x, y, dy, rad, color));

  }
}



// Animation Loop
function animate() {

  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  // c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y);

  ballArray.forEach(Ball => {

   Ball.update();

  })
}

init();
animate();
