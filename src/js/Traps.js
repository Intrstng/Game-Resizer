import { canvas, c } from './Canvas';
import { platforms } from '../index';
import { player } from '../index';
import { createImage } from './CreateImage';
import { Platform,
  OneStep,
  Fan,
  JumpToggleActive,
  JumpToggleDisabled,
  PlatformOne,
  PlatformTwo,
  PlatformThree,
  DeadSignal,
} from './Platform';
import { platformImgSrc300,
  heroIdleR,
  heroIdleL,
  heroRunR,
  heroRunL,
  heroJumpR,
  heroJumpL,
  heroFallR,
  heroFallL,
  heroDeath,
  backgroundImg,
  platformSolid,
  platformOneStep,
  platformOneStepExplosion,
  platformJump,
  platformJumpDisabled,
  platformOne,
  platformTwo,
  platformThree,
  platformOneDisabled,
  platformTwoDisabled,
  platformThreeDisabled,
  saw,
  fan,
  spike,
  deadSignalZone,
  deadSignalZoneHover,
  flamethrowerLeft,
  flamethrowerRight,
  flamethrowerUp,
  flamethrowerDown,
      } from './Assets';


class PlatformSpikes extends Platform {
  constructor(posX, posY, image) {
    super(posX, posY, image);
    this.type = 'spikes';
  }
  collision() {
  // Player - platform collision (player is above the spike platform)
    if (player.position.y + player.height <= this.position.y &&
      player.position.y + player.height + player.velocity.y >= this.position.y && // без && player.position.y + player.height + player.velocity.y >= platform.position.y персонаж перестает двигаться когда над платформой
      // Player - platform collision (player on the platform - inside of left and right platform boundaries)
      player.position.x + player.width >= this.position.x + player.width / 3 && // + player.width / 3 - поправка чтобы персонаж погибал касаясь самого края платформы (без этого он еще погибал не доходя трети ширины спрайта героя)
      player.position.x <= this.position.x + this.width - player.width / 3) { 
      player.die();
    }
    // Player - platform collision (player is under the platform)
    if (player.position.y <= this.position.y + this.height &&
      player.position.y + player.height + player.velocity.y >= this.position.y &&
      player.position.x >= this.position.x - player.width / 2 && // можно сделать 1.75
      player.position.x + player.width <= this.position.x + this.width + player.width / 2) {
        player.die();
    }
  }
}

class Saw extends PlatformSpikes {
  constructor(posX, posY, image) {
    super(posX, posY, image);
    this.type = 'saw';
    this.frequency = 23;
  }
}

// class Bullet {
//   constructor(flamethrowerPos_X, flamethrowerPos_Y, flamethrowerWidth, flamethrowerHeight, flamethrowerType, image) {
//     this.position = {
//       x: null,
//       y: null //canvas.height / 2
//     }
//     this.velocity = {
//       x: null,  // 0
//       y: null   // 1
//     }
//     this.width = 15 //image.width;
//     this.height = 15 //image.height;
//     this.bulletSpeed = 1;
//     // Bullet position x/y axes
//     switch(flamethrowerType) {
//       case 'flamethrowerLeft': this.position.x = flamethrowerPos_X;
//         break;
//       case 'flamethrowerRight': this.position.x = flamethrowerPos_X + flamethrowerWidth;
//         break;
//       case 'flamethrowerUp':
//       case 'flamethrowerDown': this.position.x = flamethrowerPos_X + flamethrowerWidth / 2;
//         break;
//     }
//     switch(flamethrowerType) {
//       case 'flamethrowerLeft':
//       case 'flamethrowerRight': this.position.y = flamethrowerPos_Y + flamethrowerHeight / 2;
//         break;
//       case 'flamethrowerUp': this.position.y = flamethrowerPos_Y;
//         break;
//       case 'flamethrowerDown': this.position.y = flamethrowerPos_X + flamethrowerHeight;
//         break;
//     }
//     // Bullet velocity x/y axes
//     switch(flamethrowerType) {
//       case 'flamethrowerLeft': this.velocity.x = -this.bulletSpeed;
//         break;
//       case 'flamethrowerRight': this.velocity.x = this.bulletSpeed;
//         break;
//       case 'flamethrowerUp':
//       case 'flamethrowerDown': this.velocity.x = 0;
//         break;
//     }
//     switch(flamethrowerType) {
//       case 'flamethrowerLeft':
//       case 'flamethrowerRight': this.velocity.y = 0;
//         break;
//       case 'flamethrowerUp': this.velocity.y = -this.bulletSpeed;
//         break;
//       case 'flamethrowerDown': this.velocity.y = this.bulletSpeed;
//         break;
//     }
//     this.frames = 0;
//     this.frequency = 28;
//     this.sprites = {
//       idle: this.image,
//     }
//     this.currentSprite = this.sprites.idle;
//     this.type = 'bullet';
//   }

// draw() {
//   // c.clearRect(this.position.x, this.position.y, this.width, this.height);
//   console.log('Shoot!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
//   c.fillStyle = 'black';
//   c.fillRect(this.position.x, this.position.y, this.width, this.height);
//   //c.drawImage(this.currentSprite, 36 * this.frames, 0, 36, 36, this.position.x, this.position.y, this.width, this.height) // 48, 0, 48, 48 - player sprite crop (x, y, w, h) // 36 размер кадра в спрайте
// }
// update() {
//   this.frames++;
//   if (this.frames > this.frequency) this.frames = 0;
//   this.position.x += this.velocity.x;
//   console.log(this.position.x)
//   //this.draw();
// }
// }

// let bullet;

// class Flamethrower extends PlatformSpikes {
  
//   constructor(posX, posY, image) {
//     super(posX, posY, image);
//     this.type = 'flamethrower';
//     this.frequency = 79;
//     this.bullets = [];
//   }
//   shoot() {
//     //this.update();
//     setInterval(() => this.bullets.push(new Bullet(this.left, this.right, this.width, this.height, this.type, saw)), 1000);
//     //this.bullets.forEach((bullet) => bullet.update());
//   }
// }


class Flamethrower {
  constructor(posX, posY, image, platforms, bulletController) {
    this.type = 'flamethrower';
    this.position = {
      x: posX,
      y: posY,
    }
    this.bulletFlight = { // speed and direction
      x: 0,
      y: 0,
    }
    this.width = 36;
    this.height = 36;
    this.bulletSpeed = 2;
    this.caliber = 15; // Bullet size
    this.delay = 140;
    this.bulletController = bulletController; 
    this.frames = 1;
                                            this.frequency = 79;
    this.sprites = {
      idle: image,
    }
    this.currentSprite = this.sprites.idle;
  }
  draw() {
    // c.strokeStyle = "yellow";
    // c.strokeRect(this.position.x, this.position.y, this.width, this.height);
    // c.fillStyle = "black";
    // c.fillRect(this.position.x, this.position.y, this.width, this.height);
    
    this.frames++;
    if (this.frames > this.frequency) this.frames = 0;
    c.drawImage(this.currentSprite, 36 * this.frames, 0, 36, 36, this.position.x, this.position.y, this.width, this.height);
    
    this.shoot();
    this.bulletController.draw();
  }
  shoot() {
    const delay = this.delay;
    let bullet_X, bullet_Y, speedBulletAndDirection;
    //Bullet position x/y axes
    switch(this.type) {
      case 'flamethrowerLeft': bullet_X = this.position.x - this.caliber / 2; // bullet_X = this.position.x - this.caliber;
        break;
      case 'flamethrowerRight': bullet_X = this.position.x + this.width - this.caliber / 2; // bullet_X = this.position.x + this.width;
        break;
      case 'flamethrowerUp':
      case 'flamethrowerDown': bullet_X = this.position.x + this.width / 2 - this.caliber / 2;
        break;
    }
    switch(this.type) {
      case 'flamethrowerLeft':
      case 'flamethrowerRight': bullet_Y = this.position.y + this.height / 2; // bullet_Y = this.position.y + this.height / 2 - this.caliber / 2;
        break;
      case 'flamethrowerUp': bullet_Y = this.position.y - this.caliber + this.caliber; // bullet_Y = this.position.y - this.caliber;
        break;
      case 'flamethrowerDown': bullet_Y = this.position.y + this.height; // bullet_Y = this.position.y + this.height;
        break;
    }
    // Bullet velocity x/y axes
    switch(this.type) {
      case 'flamethrowerLeft': this.bulletFlight.x = this.bulletSpeed;
        break;
      case 'flamethrowerRight': this.bulletFlight.x = -this.bulletSpeed;
        break;
      case 'flamethrowerUp':
      case 'flamethrowerDown': this.bulletFlight.x = 0;
        break;
    }
    switch(this.type) {
      case 'flamethrowerLeft':
      case 'flamethrowerRight': this.bulletFlight.y = 0;
        break;
      case 'flamethrowerUp': this.bulletFlight.y = this.bulletSpeed;
        break;
      case 'flamethrowerDown': this.bulletFlight.y = -this.bulletSpeed;
        break;
    }
    this.bulletController.shoot(bullet_X, bullet_Y, delay, this.bulletFlight.x, this.bulletFlight.y, this.caliber);
  }
  collision() {
    // Player - platform collision (player is above the spike platform)
      if (player.position.y + player.height <= this.position.y &&
        player.position.y + player.height + player.velocity.y >= this.position.y && // без && player.position.y + player.height + player.velocity.y >= platform.position.y персонаж перестает двигаться когда над платформой
        // Player - platform collision (player on the platform - inside of left and right platform boundaries)
        player.position.x + player.width >= this.position.x + player.width / 3 && // + player.width / 3 - поправка чтобы персонаж погибал касаясь самого края платформы (без этого он еще погибал не доходя трети ширины спрайта героя)
        player.position.x <= this.position.x + this.width - player.width / 3) { 
        player.die();
      }
      // Player - platform collision (player is under the platform)
      if (player.position.y <= this.position.y + this.height &&
        player.position.y + player.height + player.velocity.y >= this.position.y &&
        player.position.x >= this.position.x - player.width / 2 && // можно сделать 1.75
        player.position.x + player.width <= this.position.x + this.width + player.width / 2) {
          player.die();
      }
    }
  update() {
    console.log('Fire!');
  }
}


class FlamethrowerLeft extends Flamethrower {
  constructor(posX, posY, image, platforms, bulletController) {
    super(posX, posY, image, platforms, bulletController);
    this.type = 'flamethrowerLeft';
  }
}

class FlamethrowerRight extends Flamethrower {
  constructor(posX, posY, image, platforms, bulletController) {
    super(posX, posY, image, platforms, bulletController);
    this.type = 'flamethrowerRight';
  }
}

class FlamethrowerUp extends Flamethrower {
  constructor(posX, posY, image, platforms, bulletController) {
    super(posX, posY, image, platforms, bulletController);
    this.type = 'flamethrowerUp';
  }
}

class FlamethrowerDown extends Flamethrower {
  constructor(posX, posY, image, platforms, bulletController) {
    super(posX, posY, image, platforms, bulletController);
    this.type = 'flamethrowerDown';
  }
}

class BulletController {
  bullets = [];
  timerTillNextBullet = 0;

  shoot(posX, posY, delay, flight_X, flight_Y, caliber) {
    if (this.timerTillNextBullet <= 0) {
      this.bullets.push(new Bullet(posX, posY, flight_X, flight_Y, caliber));
      this.timerTillNextBullet = delay;
    }
    this.timerTillNextBullet--;
  }

  draw() {
    this.bullets.forEach((bullet) => {
      if (this.isBulletOffScreen(bullet)) {
        const index = this.bullets.indexOf(bullet);
        this.bullets.splice(index, 1);
      }
      bullet.draw();
    });
  }

  collideWith(sprite) {
    return this.bullets.some((bullet) => {
      if (bullet.collideWith(sprite)) {
        this.bullets.splice(this.bullets.indexOf(bullet), 1);
        return true;
      }
      return false;
    });
  }

  isBulletOffScreen(bullet) {
    return bullet.y <= -bullet.height;
  }
}



class Bullet {
  constructor(posX, posY, flight_X, flight_Y, caliber) {
    this.position = {
      x: posX,
      y: posY,
    }
    this.flight_X = flight_X;
    this.flight_Y = flight_Y;
    this.width = caliber;
    this.height = caliber;
    this.frames = 1;
                                            this.frequency = 23;
    this.sprites = {
      idle: createImage(saw, 36, 36),
    }
    this.currentSprite = this.sprites.idle;
  }

  draw() {
    this.position.x -= this.flight_X;
    this.position.y -= this.flight_Y;
    this.frames++;
    if (this.frames > this.frequency) this.frames = 0;
    c.drawImage(this.currentSprite, 36 * this.frames, 0, 36, 36, this.position.x, this.position.y, this.width, this.height);
  }

  collideWith(sprite) {
    if (
      this.x < sprite.x + sprite.width &&
      this.x + this.width > sprite.x &&
      this.y < sprite.y + sprite.height &&
      this.y + this.height > sprite.y
    ) {
      sprite.takeDamage();
      return true;
    }
    return false;
  }
}






export {
  PlatformSpikes,
  Saw,
  FlamethrowerLeft,
  FlamethrowerRight,
  FlamethrowerUp,
  FlamethrowerDown,
  BulletController,
}


















// import { canvas, c } from './Canvas';

// import { Platform,
//   OneStep,
//   Fan,
//   JumpToggleActive,
//   JumpToggleDisabled,
//   PlatformOne,
//   PlatformTwo,
//   PlatformThree,
//   DeadSignal,
// } from './Platform';
// import { platformImgSrc300,
//   heroIdleR,
//   heroIdleL,
//   heroRunR,
//   heroRunL,
//   heroJumpR,
//   heroJumpL,
//   heroFallR,
//   heroFallL,
//   heroDeath,
//   backgroundImg,
//   platformSolid,
//   platformOneStep,
//   platformOneStepExplosion,
//   platformJump,
//   platformJumpDisabled,
//   platformOne,
//   platformTwo,
//   platformThree,
//   platformOneDisabled,
//   platformTwoDisabled,
//   platformThreeDisabled,
//   saw,
//   fan,
//   spike,
//   deadSignalZone,
//   deadSignalZoneHover,
//   flamethrowerLeft,
//   flamethrowerRight,
//   // flamethrowerUp,
//   // flamethrowerDown,
//    flamethrowerVertical,

//       } from './Assets';


// class PlatformSpikes extends Platform {
//   constructor(posX, posY, image) {
//     super(posX, posY, image);
//     this.type = 'spikes';
//   }
//   collision() {
//   // Player - platform collision (player is above the spike platform)
//     if (player.position.y + player.height <= this.position.y &&
//       player.position.y + player.height + player.velocity.y >= this.position.y && // без && player.position.y + player.height + player.velocity.y >= platform.position.y персонаж перестает двигаться когда над платформой
//       // Player - platform collision (player on the platform - inside of left and right platform boundaries)
//       player.position.x + player.width >= this.position.x + player.width / 3 && // + player.width / 3 - поправка чтобы персонаж погибал касаясь самого края платформы (без этого он еще погибал не доходя трети ширины спрайта героя)
//       player.position.x <= this.position.x + this.width - player.width / 3) { 
//       player.die();
//     }
//     // Player - platform collision (player is under the platform)
//     if (player.position.y <= this.position.y + this.height &&
//       player.position.y + player.height + player.velocity.y >= this.position.y &&
//       player.position.x >= this.position.x - player.width / 2 && // можно сделать 1.75
//       player.position.x + player.width <= this.position.x + this.width + player.width / 2) {
//         player.die();
//     }
//   }
// }

// class Saw extends PlatformSpikes {
//   constructor(posX, posY, image) {
//     super(posX, posY, image);
//     this.type = 'saw';
//     this.frequency = 23;
//   }
// }

// class Bullet {
//   constructor(flamethrowerPos_X, flamethrowerPos_Y, flamethrowerWidth, flamethrowerHeight, flamethrowerType, image) {
//     this.position = {
//       x: null,
//       y: null //canvas.height / 2
//     }
//     this.velocity = {
//       x: null,  // 0
//       y: null   // 1
//     }
//     this.width = 15 //image.width;
//     this.height = 15 //image.height;
//     this.bulletSpeed = 1;
//     // Bullet position x/y axes
//     switch(flamethrowerType) {
//       case 'flamethrowerLeft': this.position.x = flamethrowerPos_X;
//         break;
//       case 'flamethrowerRight': this.position.x = flamethrowerPos_X + flamethrowerWidth;
//         break;
//       case 'flamethrowerUp':
//       case 'flamethrowerDown': this.position.x = flamethrowerPos_X + flamethrowerWidth / 2;
//         break;
//     }
//     switch(flamethrowerType) {
//       case 'flamethrowerLeft':
//       case 'flamethrowerRight': this.position.y = flamethrowerPos_Y + flamethrowerHeight / 2;
//         break;
//       case 'flamethrowerUp': this.position.y = flamethrowerPos_Y;
//         break;
//       case 'flamethrowerDown': this.position.y = flamethrowerPos_X + flamethrowerHeight;
//         break;
//     }
//     // Bullet velocity x/y axes
//     switch(flamethrowerType) {
//       case 'flamethrowerLeft': this.velocity.x = -this.bulletSpeed;
//         break;
//       case 'flamethrowerRight': this.velocity.x = this.bulletSpeed;
//         break;
//       case 'flamethrowerUp':
//       case 'flamethrowerDown': this.velocity.x = 0;
//         break;
//     }
//     switch(flamethrowerType) {
//       case 'flamethrowerLeft':
//       case 'flamethrowerRight': this.velocity.y = 0;
//         break;
//       case 'flamethrowerUp': this.velocity.y = -this.bulletSpeed;
//         break;
//       case 'flamethrowerDown': this.velocity.y = this.bulletSpeed;
//         break;
//     }
//     this.frames = 0;
//     this.frequency = 28;
//     this.sprites = {
//       idle: this.image,
//     }
//     this.currentSprite = this.sprites.idle;
//     this.type = 'bullet';
//   }

// draw() {
//   // c.clearRect(this.position.x, this.position.y, this.width, this.height);
//   console.log('Shoot!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
//   c.fillStyle = 'black';
//   c.fillRect(this.position.x, this.position.y, this.width, this.height);
//   //c.drawImage(this.currentSprite, 36 * this.frames, 0, 36, 36, this.position.x, this.position.y, this.width, this.height) // 48, 0, 48, 48 - player sprite crop (x, y, w, h) // 36 размер кадра в спрайте
// }
// update() {
//   this.frames++;
//   if (this.frames > this.frequency) this.frames = 0;
//   this.position.x += this.velocity.x;
//   console.log(this.position.x)
//   //this.draw();
// }
// }

// let bullet;

// class Flamethrower extends PlatformSpikes {
  
//   constructor(posX, posY, image) {
//     super(posX, posY, image);
//     this.type = 'flamethrower';
//     this.frequency = 79;
//     this.bullets = [];
//   }
//   shoot() {
//     //this.update();
//     setInterval(() => this.bullets.push(new Bullet(this.left, this.right, this.width, this.height, this.type, saw)), 1000);
//     //this.bullets.forEach((bullet) => bullet.update());
//   }
// }


// class FlamethrowerLeft extends Flamethrower {
//   constructor(posX, posY, image) {
//     super(posX, posY, image);
//     this.type = 'flamethrowerLeft';
//   }
// }

// class FlamethrowerRight extends Flamethrower {
//   constructor(posX, posY, image) {
//     super(posX, posY, image);
//     this.type = 'flamethrowerRight';
//   }
// }

// class FlamethrowerVertical extends Flamethrower {
//   constructor(posX, posY, image) {
//     super(posX, posY, image);
//     this.type = 'flamethrowerVertical';
//   }
// }

// class FlamethrowerUp extends Flamethrower {
//   constructor(posX, posY, image) {
//     super(posX, posY, image);
//     this.type = 'flamethrowerUp';
//   }
// }

// class FlamethrowerDown extends Flamethrower {
//   constructor(posX, posY, image) {
//     super(posX, posY, image);
//     this.type = 'flamethrowerDown';
//   }
// }

// export {
//   PlatformSpikes,
//   Saw,
//   FlamethrowerLeft,
//   FlamethrowerRight,
//   FlamethrowerVertical,
// }
