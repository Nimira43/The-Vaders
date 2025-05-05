class Player {
  constructor(game) {
    this.game = game
    this.width = 100
    this.height = 100
    this.x = this.game.width * 0.5 - this.width * 0.5
    this.y = this.game.height - this.height;
    this.speed = 10
  }
  draw(context) {
    context.fillRect(this.x, this.y, this.width, this.height)
  }
  update() {
    if (this.game.keys.indexOf('ArrowLeft') > -1) this.x -= this.speed
    if (this.game.keys.indexOf('ArrowRight') > -1) this.x += this.speed
    if (this.x < -this.width * 0.5) this.x = -this.width * 0.5
    else if (this.x > this.game.width - this.width * 0.5) this.x = this.game.width - this.width * 0.5
  }
  shoot() {
    
  }
}

class Projectile {
  constructor() {
    this.width = 8
    this.height = 40
    this.x = 0
    this.y = 0
    this.speed = 20
    this.free = true
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
    this.keys = []
    this.player = new Player(this)

    window.addEventListener('keydown', e => {
      if (this.keys.indexOf(e.key) === -1) this.keys.push(e.key)
      if (e.key === '1') this.player.shoot()
    })
    window.addEventListener('keyup', e => {
      const index = this.keys.indexOf(e.key)
      if (index > -1) this.keys.splice(index, 1)
    })

  }
  render(context) {
    this.player.draw(context)
    this.player.update()
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