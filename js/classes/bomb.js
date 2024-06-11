class Bomb {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
    this.radius = 0;
    this.color = "";
    this.opacity = 1;
    this.active = false;

    gsap.to(this, {
      radius: 30
    });
  }

  draw() {
    c.save();
    c.globalAlpha = this.opacity; // Corrigido ".opacity" para "this.opacity"
    c.beginPath();
    c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.restore();
  }

  update() {
    this.draw();
    this.position.x += this.velocity.x; // Corrigido "+ this.velocity.x" para "+= this.velocity.x"
    this.position.y += this.velocity.y; // Corrigido "+ this.velocity.y" para "+= this.velocity.y"

    if (
      this.position.x + this.radius + this.velocity.x > canvas.width ||
      this.position.x - this.radius + this.velocity.x < 0 // Corrigido "this.position.x this.radius" para "this.position.x - this.radius"
    ) {
      this.velocity.x = -this.velocity.x; // Corrigido "this.velocity.x=this.velocity.x;" para "this.velocity.x = -this.velocity.x;"
    }

    if (
      this.position.y + this.radius + this.velocity.y > canvas.height ||
      this.position.y - this.radius + this.velocity.y < 0 // Corrigido "this.position.y - this.radius" para "this.position.y - this.radius"
    ) {
      this.velocity.y = -this.velocity.y;
    }
  }

  explode() {
    audio.bomb.play();
    this.active = true;
    this.velocity.x = 0;
    this.velocity.y = 0;

    gsap.to(this, {
      radius: 100,
      color: "red"
    });

    gsap.to(this, {
      // Corrigido "{delay:0,1," para "{delay: 0.1,"
      delay: 0.1,
      opacity: 0,
      duration: 0.15 // Corrigido "duraction" para "duration"
    });
  }
}

class PowerUp {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
    this.radius = 15;
  }

  draw() {
    c.beginPath();
    c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);
    c.closePath();
    c.fillStyle = "yellow"; // Corrigido "yelow" para "yellow"
    c.fill();
  }

  update() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.draw();
  }
}
