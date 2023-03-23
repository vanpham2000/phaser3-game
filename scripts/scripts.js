var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 200 }
      }
  },
  scene: {
      preload: preload,
      create: create
  }
};

var game = new Phaser.Game(config);

function preload ()
{
  // this.load.setBaseURL('http://labs.phaser.io');
  this.load.image('car', 'assets/car.png');

  // this.load.image('red', 'assets/particles/red.png');
}

function create ()
{
  var imageSprite = this.add.image(400, 400, 'car');
  imageSprite.setScale(0.278, 0.283);
  
}