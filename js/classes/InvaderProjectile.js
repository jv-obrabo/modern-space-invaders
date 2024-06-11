class invaderProjectile {
  constructor({ positiion, velocity }) {
    this.positiion = positiion;
    this.velocity = velocity;
    this.width = 3;
    this.height = 10;
  }

  draw() {
    c.fillStyle = "white";
    c.fillRect(this.positiion.x, this.positiion.y, this.width, this.height);
  }

  update() {
    this.draw();
    this.positiion.x += this.velocity.x;
    this.positiion.y += this.velocity.y;
  }
}
