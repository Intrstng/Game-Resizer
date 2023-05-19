import blockHit_MP3 from '../../../assets/sounds/effects/mp3/block_hit.mp3';
import blockHit_OGG from '../../../assets/sounds/effects/ogg/block_hit.ogg';
import bottomHit_MP3 from '../../../assets/sounds/effects/mp3/bottom_hit.mp3';
import bottomHit_OGG from '../../../assets/sounds/effects/ogg/bottom_hit.ogg';
import choose_MP3 from '../../../assets/sounds/effects/mp3/choose.mp3';
import choose_OGG from '../../../assets/sounds/effects/ogg/choose.ogg';
import explosionBlock_MP3 from '../../../assets/sounds/effects/mp3/explosion_block.mp3';
import explosionBlock_OGG from '../../../assets/sounds/effects/ogg/explosion_block.ogg';
import fallingInDepth_MP3 from '../../../assets/sounds/effects/mp3/falling_in_depth.mp3';
import fallingInDepth_OGG from '../../../assets/sounds/effects/ogg/falling_in_depth.ogg';
import fallingInDepth2_MP3 from '../../../assets/sounds/effects/mp3/falling_in_depth_2.mp3';
import fallingInDepth2_OGG from '../../../assets/sounds/effects/ogg/falling_in_depth_2.ogg';
import fire_MP3 from '../../../assets/sounds/effects/mp3/fire.mp3';
import fire_OGG from '../../../assets/sounds/effects/ogg/fire.ogg';
import heroDeath_MP3 from '../../../assets/sounds/effects/mp3/hero_death.mp3';
import heroDeath_OGG from '../../../assets/sounds/effects/ogg/hero_death.ogg';
import jump_MP3 from '../../../assets/sounds/effects/mp3/jump.mp3';
import jump_OGG from '../../../assets/sounds/effects/ogg/jump.ogg';
import jumpOnSpaceToggledPlatform_MP3 from '../../../assets/sounds/effects/mp3/jump_on_space_toggled_platform.mp3';
import jumpOnSpaceToggledPlatform_OGG from '../../../assets/sounds/effects/ogg/jump_on_space_toggled_platform.ogg';
import nextLevel_MP3 from '../../../assets/sounds/effects/mp3/next_level.mp3';
import nextLevel_OGG from '../../../assets/sounds/effects/ogg/next_level.ogg';
import ok_MP3 from '../../../assets/sounds/effects/mp3/ok.mp3';
import ok_OGG from '../../../assets/sounds/effects/ogg/ok.ogg';
import select_MP3 from '../../../assets/sounds/effects/mp3/select.mp3';
import select_OGG from '../../../assets/sounds/effects/ogg/select.ogg';
import teleport_MP3 from '../../../assets/sounds/effects/mp3/teleport.mp3';
import teleport_OGG from '../../../assets/sounds/effects/ogg/teleport.ogg';
import toggle_MP3 from '../../../assets/sounds/effects/mp3/toggle.mp3';
import toggle_OGG from '../../../assets/sounds/effects/ogg/toggle.ogg';
import toggleDisabled_MP3 from '../../../assets/sounds/effects/mp3/toggle_disabled.mp3';
import toggleDisabled_OGG from '../../../assets/sounds/effects/ogg/toggle_disabled.ogg';
import error_MP3 from '../../../assets/sounds/effects/mp3/error.mp3';
import error_OGG from '../../../assets/sounds/effects/ogg/error.ogg';

const audio = {
  isCanPlay: new Audio(),
  blockHit: {
    src_MP3: new Audio(blockHit_MP3),
    src_OGG: new Audio(blockHit_OGG),
    volume: 1,
  },
  bottomHit: {
    src_MP3: new Audio(bottomHit_MP3),
    src_OGG: new Audio(bottomHit_OGG),
    volume: 1,
  },
  choose: {
    src_MP3: new Audio(choose_MP3),
    src_OGG: new Audio(choose_OGG),
    volume: 1,
  },
  explosionBlock: {
    src_MP3: new Audio(explosionBlock_MP3),
    src_OGG: new Audio(explosionBlock_OGG),
    volume: 1,
  },
  fallingInDepth: {
    src_MP3: new Audio(fallingInDepth_MP3),
    src_OGG: new Audio(fallingInDepth_OGG),
    volume: 1,
  },
  fallingInDepth2: {
    src_MP3: new Audio(fallingInDepth2_MP3),
    src_OGG: new Audio(fallingInDepth2_OGG),
    volume: 1,
  },
  fire: {
    src_MP3: new Audio(fire_MP3),
    src_OGG: new Audio(fire_OGG),
    volume: 1,
  },
  heroDeath: {
    src_MP3: new Audio(heroDeath_MP3),
    src_OGG: new Audio(heroDeath_OGG),
    volume: 1,
  },
  jump: {
    src_MP3: new Audio(jump_MP3),
    src_OGG: new Audio(jump_OGG),
    volume: 1,
  },
  jumpOnSpaceToggledPlatform: {
    src_MP3: new Audio(jumpOnSpaceToggledPlatform_MP3),
    src_OGG: new Audio(jumpOnSpaceToggledPlatform_OGG),
    volume: 0.5,
  },
  nextLevel: {
    src_MP3: new Audio(nextLevel_MP3),
    src_OGG: new Audio(nextLevel_OGG),
    volume: 1,
  },
  ok: {
    src_MP3: new Audio(ok_MP3),
    src_OGG: new Audio(ok_OGG),
    volume: 1,
  },
  select: {
    src_MP3: new Audio(select_MP3),
    src_OGG: new Audio(select_OGG),
    volume: 1,
  },
  teleport: {
    src_MP3: new Audio(teleport_MP3),
    src_OGG: new Audio(teleport_OGG),
    volume: 1,
  },
  toggle: {
    src_MP3: new Audio(toggle_MP3),
    src_OGG: new Audio(toggle_OGG),
    volume: 1,
  },
  toggleDisabled: {
    src_MP3: new Audio(toggleDisabled_MP3),
    src_OGG: new Audio(toggleDisabled_OGG),
    volume: 1,
  },
  error: {
    src_MP3: new Audio(error_MP3),
    src_OGG: new Audio(error_OGG),
    volume: 1,
}
}

let source = null;
 // Choose supported source and preload
;(function() {
  if (audio.isCanPlay.canPlayType('audio/mpeg') === 'probably') {
    source = 'src_MP3';
    } else {
      source = 'src_OGG';
    }
  for (let sound in audio) {
    if (sound != 'isCanPlay') {
      let { src_MP3: mp3, src_OGG: ogg } = audio[sound];
        mp3.play();
        mp3.pause();
        ogg.play();
        ogg.pause();
      }
    }
})();
let counter = 0
function gameSoundEffects(item) {
  item[source].currentTime = 0;
  item[source].volume = item.volume;
  item[source].play();
}


// function gameSoundEffects(item) {
//   if (audio.isCanPlay.canPlayType('audio/ogg') === 'probably') {
//     item.src_OGG.currentTime = 0;
//     item.src_OGG.play();
//   } else {
//     item.src_MP3.currentTime = 0;
//     item.src_MP3.play();
//   }
// }


 
// function gameSoundEffects(item) {
//   if (audio.sound.canPlayType("audio/mpeg")=="probably") {
//     audio.sound.src= item.src_MP3;
//   } else {
//     audio.sound.src= item.src_OGG;
//   }
//   audio.sound.currentTime = 0;
//   audio.sound.play();
// }


// function gameSoundEffects(item) {
//   item.currentTime = 0;
//   item.play();
// }

// For music
// let isPlayed = false;
// function gameSoundEffects(item) {
//   if(!isPlayed)
//   item.currentTime = 0;
//   item.play();
//   isPlayed = true;
// }










export { audio, gameSoundEffects }