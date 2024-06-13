const scoreEl = document.querySelector("#scoreEl");
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

let player = new Player();
let projectiles = [];
let grids = [];
let invaderProjectiles = [];
let particles = [];
let bombs = [];
let powerUps = [];

let keys = {
  ArrowLeft: {
    pressed: false
  },
  ArrowRight: {
    pressed: false
  },
  space: {
    pressed: false
  }
};

let frames = 0;
let randomInterval = Math.floor(Math.random() * 500 + 500);

let gama = {
  over: false,
  active: true
};

let score = 0;

let spawnBuffer = 500;
let fps = 60;
let fpsInterval = 1000 / fps;

let msPrev = window.performance.now();

function init() {
  player = new Player();
  projectiles = [];
  grids = [];
  invaderProjectiles = [];
  particles = [];
  bombs = [];
  powerUps = [];

  keys = {
    ArrowLeft: {
      pressed: false
    },
    ArrowRight: {
      pressed: false
    },
    space: {
      pressed: false
    }
  };

  frames = 0;
  randomInterval = Math.floor(Math.random() * 500 + 500);

  gama = {
    over: false,
    active: true
  };

  score = 0;
  for (let i = 0; i < 100; i++) {
    particles.push(
      new particles({
        position: {
          x: Math.floor(Math.random() * canvas.width),
          y: Math.floor(Math.random() * canvas.height)
        },
        velocity: {
          x: 0,
          y: 0.3
        },
        radius: Math.random() * 2,
        color: "white"
      })
    );
  }
}

function endGame() {
  Audio.gameOver.play();

  setTimeout(() => {
    player.opacity = 0;
    gameOver = true;
  }, 0);

  setTimeout(() => {
    game.active = false;
    document.querySelector("restartScreen").style.display = "flex";
  }, 2000);

  createParticles({
    Object: player,
    color: "white",
    fades: true
  });
}

function animate( ) {
    if (!game.active) return;
    requestAnimationFrame(animate);

    const msNow =  window.performance.now();
    const elapsed = msNow - msPrev;

    if (elapsed > fpsInterval) {

        msPrev = msNow - (elapsed % fpsInterval);
        
       c.fillStyle = "black";    
       c.fillRect(0, 0, canvas.width, canvas.height);
        
     }
}