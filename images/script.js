class Player {
  constructor(game) {
    this.game = game
    this.width = 100
    this.height = 100
    this.x = this.game.width * 0.5 - this.width * 0.5
    this.y = this.game.height - this.height;
  }
  draw(context) {
    context.fillRect(this.x, this.y, this.width, this.height)
  }
  update() {

  }
  shoot() {
    
  }
}

class Projectile {
  constructor() {

  }
  draw() {

  }
  update() {

  }
  start() {

  }
  reset() {

  }
}

class Enemy {
  constructor(game) {

  }
  draw() {

  }
  update() {

  }
}

class Wave {
  constructor(game) {

  }
  render() {

  }
  create() {

  }
}

class Game {
  constructor(canvas) {
    this.canvas = canvas
    this.width = this.canvas.width
    this.height = this.canvas.height
    
  }
  render(context) {

  }
  createProjectiles() {

  }
  getProjectile() {

  }
  checkCollision() {

  }
}

window.addEventListener('load', function () {
  const canvas = this.document.getElementById('canvas1')
  const ctx = canvas.getContext('2d')
  canvas.width = 600
  canvas.height = 800
  ctx.fillStyle = 'white'
  ctx.strokeStyle = 'white'
  ctx.lineWidth = 5

  const game = new Game(canvas)
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    game.render(ctx)
    requestAnimationFrame(animate)
  }
  animate()
})