import { platforms, initStart } from '../index';
import { gameSoundEffects } from './data/Audio';

function createImage(src, width, height) {
  const image = new Image();
  image.onload = () => {
    image.loaded = true;
  }
  image.loaded = false;
  image.src = src;
  image.width = width;
  image.height = height;
  return image;
}

function randomNumber(min = 0, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function fireSoundInterval(delay) {
  timerShoot_1 = setTimeout(function soundFire() {
    timerShoot_2 = setTimeout(soundFire, delay);
    gameSoundEffects(audio.fire);
  }, delay); 
}

function flamethrowerShootSoundIntervalInit() {
  if (initStart) {
    let flamethrowerShootDelay = null;
    platforms.forEach(platform => {
      ( platform.type === 'flamethrowerLeft' ||
        platform.type === 'flamethrowerRight' ||
        platform.type === 'flamethrowerUp' ||
        platform.type === 'flamethrowerDown') && (flamethrowerShootDelay = platform.delay);
    })
    if (platforms.some(platform => {
      return (platform.type === 'flamethrowerLeft' ||
      platform.type === 'flamethrowerRight' ||
      platform.type === 'flamethrowerUp' ||
      platform.type === 'flamethrowerDown')})) {
        fireSoundInterval(flamethrowerShootDelay * 8);
    }
  }
 }

 function fullScreen(e, element) {
  if (e.code === 'KeyF') {
    if(element.requestFullscreen) {
      element.requestFullscreen();
    } else if(element.webkitrequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if(element.mozRequestFullscreen) {
      element.mozRequestFullScreen();
    }
  }
}

function setLocalStorage(item_1, item_2) {
  if (('localStorage' in window) && (window.localStorage !== null)) {
    let soundSettings = {
      soundEffects: item_1,
      musicEffects: item_2,
    }
  localStorage.setItem('settings', JSON.stringify(soundSettings));
  }
}

function getLocalStorage(key, value) {
  return (localStorage.length !== 0) ?
    JSON.parse(localStorage.getItem(key))[value] : 0.8;
}

function changeMuteIcon() {
  const muteIcon = document.getElementById('mute-btn');
  muteIcon.classList.toggle('mute_off');
  muteIcon.classList.toggle('mute_on');
}

export { createImage, randomNumber, flamethrowerShootSoundIntervalInit, fullScreen, setLocalStorage, getLocalStorage, changeMuteIcon };