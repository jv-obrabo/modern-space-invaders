const scoreEl = document.querySelector("#scoreEl");
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

let player;
let projectiles = [];
let grids = [];
let invaderProjectiles = [];
let particles = [];
let bombs = [];
let powerUps = [];

let keys = {
  ArrowLeft: { pressed: false },
  ArrowRight: { pressed: false },
  " ": { pressed: false }
};

let frames = 0;
let randomInterval = Math.floor(Math.random() * 500 + 500);

let game = {
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
    ArrowLeft: { pressed: false },
    ArrowRight: { pressed: false },
    " ": { pressed: false }
  };

  frames = 0;
  randomInterval = Math.floor(Math.random() * 500 + 500);

  game = {
    over: false,
    active: true
  };

  score = 0;

  for (let i = 0; i < 100; i++) {
    particles.push(
      new Particle({
        position: {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height
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
  // Simulei a criação de funções como `audio.gameOver`, `createParticles` e `createScorelabel`.
  // Certifique-se de que essas funções estão definidas corretamente no seu código.
  // Exemplo:
  // audio.gameOver.play();

  setTimeout(() => {
    // players.opacity = 0;  // Corrigi para player.opacity
    player.opacity = 0;
    game.over = true;
  }, 0);

  setTimeout(() => {
    game.active = false;
    document.querySelector("#restartScreen").style.display = "flex";
  }, 2000);

  // createParticles({
  //   object: player,
  //   color: "white",
  //   fades: true
  // });
}

function animate() {
  if (!game.active) return;
  requestAnimationFrame(animate);

  const msNow = window.performance.now();
  const elapsed = msNow - msPrev;

  if (elapsed < fpsInterval) return;

  msPrev = msNow - (elapsed % fpsInterval);

  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);

  // Lógica de animação e atualização dos elementos do jogo

  frames++;
}

document.querySelector("#startButton").addEventListener("click", () => {
  // audio.backgroudMusic.play();
  // audio.start.play();

  document.querySelector("#startScreen").style.display = "none";
  document.querySelector("#scoreContainer").style.display = "block";
  init();
  animate();
});

document.querySelector("#restartButton").addEventListener("click", () => {
  // audio.select.play();
  document.querySelector("#restartScreen").style.display = "none";
  init();
  animate();
});

addEventListener("keydown", (event) => {
  if (game.over) return;

  switch (event.key) {
    case "ArrowLeft":
      keys.ArrowLeft.pressed = true;
      break;
    case "ArrowRight":
      keys.ArrowRight.pressed = true;
      break;
    case " ":
      keys[" "].pressed = true;

      if (player.powerUp === "Metralhadora") return;
      // audio.shoot.play();
      projectiles.push(
        new Projectile({
          position: {
            x: player.position.x + player.width / 2,
            y: player.position.y
          },
          velocity: {
            x: 0,
            y: -10
          }
        })
      );
      break;
  }
});

addEventListener("keyup", (event) => {
  switch (event.key) {
    case "ArrowLeft":
      keys.ArrowLeft.pressed = false;
      break;
    case "ArrowRight":
      keys.ArrowRight.pressed = false;
      break;
    case " ":
      keys[" "].pressed = false;
      break;
  }
});
