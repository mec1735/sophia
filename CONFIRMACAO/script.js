const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

let w, h;
let flakes = [];

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

function createFlakes() {
  flakes = [];
  for (let i = 0; i < 120; i++) {
    flakes.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 3 + 1,
      d: Math.random() + 0.5
    });
  }
}
createFlakes();

function draw() {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "rgba(255,255,255,0.9)";
  ctx.beginPath();
  for (let f of flakes) {
    ctx.moveTo(f.x, f.y);
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
  }
  ctx.fill();
  update();
}

let angle = 0;
function update() {
  angle += 0.01;
  for (let f of flakes) {
    f.y += Math.pow(f.d, 2) + 1;
    f.x += Math.sin(angle) * 0.5;

    if (f.y > h) {
      f.y = -5;
      f.x = Math.random() * w;
    }
  }
}

setInterval(draw, 30);

function enviado() {
  document.getElementById("msg").style.display = "block";
}
