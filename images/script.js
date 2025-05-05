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
    const projectile = this.game.getProjectile()
    if (projectile) projectile.start(this.x + this.width * 0.5, this.y)
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
  draw(context) {
    if (!this.free) {
      context.fillRect(this.x, this.y, this.width, this.height)
    }
  }
  update() {
    if (!this.free) {
      this.y -= this.speed
      if (this.y < -this.height) this.reset()
    }
  }
  start(x, y) {
    this.x = x - this.width * 0.5
    this.y = y
    this.free = false
  }
  reset() {
    this.free = true
  }
}

class Enemy {
  constructor(game, positionX, positionY) {
    this.game = game
    this.width = this.game.enemySize
    this.height = this.game.enemySize
    this.x = 0
    this.y = 0
    this.positionX = positionX
    this.positionY = positionY
    this.markedForDeletion = false
  }
  draw(context) {
    context.strokeRect(this.x, this.y. this.width, this.height)

  }
  update(x, y) {
    this.x = x + this.positionX
    this.y = y + this.positionY
    this.game.projectilesPool.forEach(projectile => {
      if (!projectile.free && this.game.checkCollision(this.projectile)) {
        this.markedForDeletion = true
        projectile.reset()
      }
    })
  }
}

class Wave {
  constructor(game) {
    this.game = game
    this.width = this.game.columns * this.game.enemySize
    this.height = this.game.rows * this.game.enemySize
    this.x = 0
    this.y = -this.height
    this.speedX = 3
    this.speedY = 0
    this.enemies = []
  
  }
  render(context) {
    if (this.y < 0) this.y += 5
    this.speedY = 0
    if (this.x < 0 || this.x > this.game.width - this.width) {
      this.speedX *= -1
      this.speedY = this.game.enemySize
    }
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
    this.projectilesPool = []
    this.numberOfProjectiles = 10
    this.createProjectiles()
    this.enemySize = 60

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
    this.projectilesPool.forEach(projectile => {
      projectile.update()
      projectile.draw(context)
    })
  }
  createProjectiles() {
    for (let i = 0; i < this.numberOfProjectiles; i++) {
      this.projectilesPool.push(new Projectile())
    }
  }
  getProjectile() {
    for (let i = 0; i < this.projectilesPool.length; i++) {
      if (this.projectilesPool[i].free) return this.projectilesPool[i]
    }
  }
  checkCollision(a, b) {
    return (
      a.x < b.x + b.width &&
      a.x + a.width > b.x &&
      a.y < b.y + b.height &&
      a.y + a.height > b.y
    )
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