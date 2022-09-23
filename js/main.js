let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let brikHeight = 40;
let margin = 10;
let brickWidth = 440;
let brikWidht = ((canvas.width / 5) -( margin / 6));
console.log(canvas.width);
marginRight = -10;


let bricks = [];

function creatBricks() {
 for (let row = 0; row < 3; row++) {
  bricks[row] = [];
  for (let col = 0; col < 5; col++) {
   bricks[row][col] = { x: `${col * brikWidht}`, y: `${row * brikHeight}`, visible: true };
  }
 }
}

function drawBricks() {
 for (let row = 0; row < 3; row++) {
  for (let col = 0; col < 5; col++) {
   if (bricks[row][col].visible) {
    ctx.beginPath();
    ctx.fillStyle = 'blue';
    ctx.rect(bricks[row][col].x, bricks[row][col].y, brikWidht - margin, brikHeight - margin);
    ctx.fill();
    ctx.closePath();
   }
  }
 }
}


creatBricks();
bricks[2][1].visible = false;

drawBricks()
