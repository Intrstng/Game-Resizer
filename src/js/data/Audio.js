// import blockHit_MP3 from '/assets/sounds/effects/mp3/block_hit.mp3';
// import blockHit_OGG from '/assets/sounds/effects/ogg/block_hit.ogg';
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

import track_1_MP3 from '../../../assets/sounds/music/mp3/track_1.mp3';
import track_1_OGG from '../../../assets/sounds/music/ogg/track_1.ogg';
import track_2_MP3 from '../../../assets/sounds/music/mp3/track_2.mp3';
import track_2_OGG from '../../../assets/sounds/music/ogg/track_2.ogg';
import track_3_MP3 from '../../../assets/sounds/music/mp3/track_3.mp3';
import track_3_OGG from '../../../assets/sounds/music/ogg/track_3.ogg';
import track_4_MP3 from '../../../assets/sounds/music/mp3/track_4.mp3';
import track_4_OGG from '../../../assets/sounds/music/ogg/track_4.ogg';

import { createImage, randomNumber } from '../Utils';

let volumeEffects = 1;
let volumeMusic = 0.8;




const audio = {
  isCanPlay: new Audio(),
  blockHit: {
    src_MP3: new Audio(blockHit_MP3),
    src_OGG: new Audio(blockHit_OGG),
    volume: volumeEffects,
  },
  bottomHit: {
    src_MP3: new Audio(bottomHit_MP3),
    src_OGG: new Audio(bottomHit_OGG),
    volume: volumeEffects,
  },
  choose: {
    src_MP3: new Audio(choose_MP3),
    src_OGG: new Audio(choose_OGG),
    volume: volumeEffects,
  },
  explosionBlock: {
    src_MP3: new Audio(explosionBlock_MP3),
    src_OGG: new Audio(explosionBlock_OGG),
    volume: volumeEffects,
  },
  fallingInDepth: {
    src_MP3: new Audio(fallingInDepth_MP3),
    src_OGG: new Audio(fallingInDepth_OGG),
    volume: volumeEffects,
  },
  fallingInDepth2: {
    src_MP3: new Audio(fallingInDepth2_MP3),
    src_OGG: new Audio(fallingInDepth2_OGG),
    volume: volumeEffects,
  },
  fire: {
    src_MP3: new Audio(fire_MP3),
    src_OGG: new Audio(fire_OGG),
    volume: volumeEffects,
  },
  heroDeath: {
    src_MP3: new Audio(heroDeath_MP3),
    src_OGG: new Audio(heroDeath_OGG),
    volume: volumeEffects,
  },
  jump: {
    src_MP3: new Audio(jump_MP3),
    src_OGG: new Audio(jump_OGG),
    volume: volumeEffects,
  },
  jumpOnSpaceToggledPlatform: {
    src_MP3: new Audio(jumpOnSpaceToggledPlatform_MP3),
    src_OGG: new Audio(jumpOnSpaceToggledPlatform_OGG),
    volume: volumeEffects / 2,
  },
  nextLevel: {
    src_MP3: new Audio(nextLevel_MP3),
    src_OGG: new Audio(nextLevel_OGG),
    volume: volumeEffects,
  },
  ok: {
    src_MP3: new Audio(ok_MP3),
    src_OGG: new Audio(ok_OGG),
    volume: volumeEffects,
  },
  select: {
    src_MP3: new Audio(select_MP3),
    src_OGG: new Audio(select_OGG),
    volume: volumeEffects,
  },
  teleport: {
    src_MP3: new Audio(teleport_MP3),
    src_OGG: new Audio(teleport_OGG),
    volume: volumeEffects,
  },
  toggle: {
    src_MP3: new Audio(toggle_MP3),
    src_OGG: new Audio(toggle_OGG),
    volume: volumeEffects,
  },
  toggleDisabled: {
    src_MP3: new Audio(toggleDisabled_MP3),
    src_OGG: new Audio(toggleDisabled_OGG),
    volume: volumeEffects,
  },
  error: {
    src_MP3: new Audio(error_MP3),
    src_OGG: new Audio(error_OGG),
    volume: volumeEffects,
  },

  track_1: {
    src_MP3: new Audio(track_1_MP3),
    src_OGG: new Audio(track_1_OGG),
    volume: volumeMusic,
  },
  track_2: {
    src_MP3: new Audio(track_2_MP3),
    src_OGG: new Audio(track_2_OGG),
    volume: volumeMusic,
  },
  track_3: {
    src_MP3: new Audio(track_3_MP3),
    src_OGG: new Audio(track_3_OGG),
    volume: volumeMusic,
  },
  track_4: {
    src_MP3: new Audio(track_4_MP3),
    src_OGG: new Audio(track_4_OGG),
    volume: volumeMusic,
  },
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

function gameSoundEffects(item) {
  item[source].currentTime = 0;
  item[source].volume = item.volume;
  item[source].play();
}

function getRandomTrack(playlist) {
  let tracksList = [];
  let track;
  for (let sound in playlist) {
    sound.includes('track') && tracksList.push(playlist[sound]);
  }
  track = tracksList[randomNumber(0, tracksList.length - 1)][source];
  track.currentTime = 0;
  track.volume = volumeMusic;
  return track;
}

const playNextTrack = (currentTrack, playlist) => {
  let tracksList = [];
  let currentTrackNumber = null;
  for (let sound in playlist) {
    sound.includes('track') && tracksList.push(playlist[sound]);
  }
  tracksList.forEach((track, index) => {
    track[source] === currentTrack && (currentTrackNumber = index);
  });
  currentTrackNumber < (tracksList.length - 1) ? currentTrackNumber++ : currentTrackNumber = 0;
              tracksList[currentTrackNumber][source].currentTime = 0;
              tracksList[currentTrackNumber][source].volume = volumeMusic;
  tracksList[currentTrackNumber][source].play();
  tracksList[currentTrackNumber][source].onended = function() {
    playNextTrack(tracksList[currentTrackNumber][source], audio);
  }
}

// item[source].currentTime = 0;
// item[source].volume = item.volume;







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










export { audio, gameSoundEffects, getRandomTrack, playNextTrack, volumeEffects, volumeMusic }