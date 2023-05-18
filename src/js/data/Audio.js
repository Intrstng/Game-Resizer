const audio = {
  isCanPlay: new Audio(),
  blockHit: {
    src_MP3: new Audio('./../../assets/sounds/effects/mp3/block_hit.mp3'),
    src_OGG: new Audio('./../../assets/sounds/effects/ogg/block_hit.ogg'),
    volume: 1,
  },
  bottomHit: {
    src_MP3: new Audio('./../../assets/sounds/effects/mp3/bottom_hit.mp3'),
    src_OGG: new Audio('./../../assets/sounds/effects/ogg/bottom_hit.ogg'),
    volume: 1,
  },
  choose: {
    src_MP3: new Audio('./../../assets/sounds/effects/mp3/choose.mp3'),
    src_OGG: new Audio('./../../assets/sounds/effects/ogg/choose.ogg'),
    volume: 1,
  },
  explosionBlock: {
    src_MP3: new Audio('./../../assets/sounds/effects/mp3/explosion_block.mp3'),
    src_OGG: new Audio('./../../assets/sounds/effects/ogg/explosion_block.ogg'),
    volume: 1,
  },
  fallingInDepth: {
    src_MP3: new Audio('./../../assets/sounds/effects/mp3/falling_in_depth.mp3'),
    src_OGG: new Audio('./../../assets/sounds/effects/ogg/falling_in_depth.ogg'),
    volume: 1,
  },
  fallingInDepth2: {
    src_MP3: new Audio('./../../assets/sounds/effects/mp3/falling_in_depth_2.mp3'),
    src_OGG: new Audio('./../../assets/sounds/effects/ogg/falling_in_depth_2.ogg'),
    volume: 1,
  },
  fire: {
    src_MP3: new Audio('./../../assets/sounds/effects/mp3/fire.mp3'),
    src_OGG: new Audio('./../../assets/sounds/effects/ogg/fire.ogg'),
    volume: 1,
  },
  heroDeath: {
    src_MP3: new Audio('./../../assets/sounds/effects/mp3/hero_death.mp3'),
    src_OGG: new Audio('./../../assets/sounds/effects/ogg/hero_death.ogg'),
    volume: 1,
  },
  jump: {
    src_MP3: new Audio('./../../assets/sounds/effects/mp3/jump.mp3'),
    src_OGG: new Audio('./../../assets/sounds/effects/ogg/jump.ogg'),
    volume: 1,
  },
  jumpOnSpaceToggledPlatform: {
    src_MP3: new Audio('./../../assets/sounds/effects/mp3/jump_on_space_toggled_platform.mp3'),
    src_OGG: new Audio('./../../assets/sounds/effects/ogg/jump_on_space_toggled_platform.ogg'),
    volume: 0.5,
  },
  nextLevel: {
    src_MP3: new Audio('./../../assets/sounds/effects/mp3/next_level.mp3'),
    src_OGG: new Audio('./../../assets/sounds/effects/ogg/next_level.ogg'),
    volume: 1,
  },
  ok: {
    src_MP3: new Audio('./../../assets/sounds/effects/mp3/ok.mp3'),
    src_OGG: new Audio('./../../assets/sounds/effects/ogg/ok.ogg'),
    volume: 1,
  },
  select: {
    src_MP3: new Audio('./../../assets/sounds/effects/mp3/select.mp3'),
    src_OGG: new Audio('./../../assets/sounds/effects/ogg/select.ogg'),
    volume: 1,
  },
  teleport: {
    src_MP3: new Audio('./../../assets/sounds/effects/mp3/teleport.mp3'),
    src_OGG: new Audio('./../../assets/sounds/effects/ogg/teleport.ogg'),
    volume: 1,
  },
  toggle: {
    src_MP3: new Audio('./../../assets/sounds/effects/mp3/toggle.mp3'),
    src_OGG: new Audio('./../../assets/sounds/effects/ogg/toggle.ogg'),
    volume: 1,
  },
  toggleDisabled: {
    src_MP3: new Audio('./../../assets/sounds/effects/mp3/toggle_disabled.mp3'),
    src_OGG: new Audio('./../../assets/sounds/effects/ogg/toggle_disabled.ogg'),
    volume: 1,
  },
  error: {
    src_MP3: new Audio('./../../assets/sounds/effects/mp3/error.mp3'),
    src_OGG: new Audio('./../../assets/sounds/effects/ogg/error.ogg'),
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