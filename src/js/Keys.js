import { player } from '../index';
import { platforms } from '../index';
import { sawTrap, sawTrap2 } from '../index';
import { jump } from '../index';
import { audio, gameSoundEffects } from './data/Audio';



const keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  },
  up: {
    pressed: false
  },
  space: {
    pressed: false
  },
  lastPressed: 'right',
  jumpToggleActive: true,
  isJumped: false,
  spaceToggleCounter: 1, // Platform One type is active
  deadSignalZone: false,
};
                                                // let hiddenPlatformsArr = []
                                                
const keyDownHandler = (e) => {
  console.log(e.code)
  if (e.repeat == false) {
    switch (e.code) {
      case 'ArrowUp':
        keys.up.pressed = true;
        if (player.velocity.y <= 0 && player.velocity.y >= -3.5) { //(player.velocity.y === 0) или (player.velocity.y <= 0 && player.velocity.y >= -3.5)
          keys.jumpToggleActive ? keys.jumpToggleActive = false : keys.jumpToggleActive = true;
          gameSoundEffects(audio.jump);
        }
        if (player.velocity.y === 0 && keys.lastPressed === 'right') { // player.velocity.y === 0 - только один прыжок при нескольких нажатиях на UP
          player.velocity.y -= player.jumpHeight; // -20 is higher
          player.currentSprite = player.sprites.jump.right;
        } else if (player.velocity.y === 0 && keys.lastPressed === 'left') { // player.velocity.y === 0 - только один прыжок при нескольких нажатиях на UP
          player.velocity.y -= player.jumpHeight; // -20 is higher
          player.currentSprite = player.sprites.jump.left;
        }
        break;

      case 'Space': {
        keys.space.pressed = true;
        !keys.deadSignalZone && keys.spaceToggleCounter++;
      }
        break;

      case 'ArrowRight': {
        keys.right.pressed = true;
        keys.lastPressed = 'right';
        player.currentSprite = player.sprites.run.right;
      }
        break;
      case 'ArrowLeft': {
        keys.left.pressed = true;
        keys.lastPressed = 'left';
        player.currentSprite = player.sprites.run.left;
      }
        break;
    }
  }
}

const keyUpHandler = (e) => {
  if (e.repeat == false) {
    switch (e.code) {
      case 'ArrowUp': 
        // player.velocity.y = 0;
        keys.up.pressed = false;
        // keys.up.pressed = true;
        if (player.velocity.y !== 0 && keys.lastPressed === 'right') {
          player.currentSprite = player.sprites.fall.right;
        } else if (player.velocity.y !== 0 && keys.lastPressed === 'left') {
          player.currentSprite = player.sprites.fall.left;
        }
        break;
      // case 'ArrowDown': player.velocity.y = 0
      //   break;
      case 'ArrowRight': {
        keys.right.pressed = false;
        player.currentSprite = player.sprites.idle.right;
      }
        break;
      case 'ArrowLeft': {
        keys.left.pressed = false;
        player.currentSprite = player.sprites.idle.left;
      }
        break;
      case 'Space': {
        keys.space.pressed = false;
      }
        break;
    }
  }
}

export { keys, keyDownHandler, keyUpHandler };