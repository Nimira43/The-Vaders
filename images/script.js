class Player {
  constructor() {

  }
  draw() {

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
  constructor() {

  }
  draw() {

  }
  update() {

  }
}

class Wave {
  constructor() {

  }
  render() {

  }
  create() {

  }
}

class Game {
  constructor(canvas) {
  
  }
  render() {

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