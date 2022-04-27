import Phaser from 'phaser';
import Preloader from '../Scenes/Preloader';
import Game from '../Scenes/Game';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 370,
  height: 200,
  parent: 'phaser-game',
  backgroundColor: '#282c34',
  pixelArt: true,
  roundPixels: true,
  antialiasGL: false,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  dom: {
    createContainer: false,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
  scene: [Preloader, Game],
};

export default new Phaser.Game(config);
