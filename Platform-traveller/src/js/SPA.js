import {
        arrows,
        spaceImg,
        cloud_1,
        cloud_2,
        cloud_3,
        cloud_4,
        fKeyImg,
        escKeyImg,
        errorImg,
        birdFlyingImg,
        logoImg_1,
        logoImg_2,
        levelIcon_1,
        levelIcon_2,
        levelIcon_3,
        levelIcon_4,
        levelIcon_5,
        levelIcon_6,
        levelIcon_7,
        levelIcon_8,
        levelIcon_9,
        levelIcon_10,
        levelIcon_11,
        levelIcon_12,
        levelIcon_13,
        levelIcon_14,
        levelIcon_15,
        levelIcon_16,
        levelIcon_17
      } from './Assets';
import { getLocalStorage } from './Utils';
import { audio, source, getRandomTrack, playNextTrack } from './Audio';
import { requestLevelMap } from './Levels';
import {
        setLevelMap,
        createPlayer,
        init,
        animate,
        changeIsLeaveGameState,
        blankGameplayBetweenGames
      } from '../index';
import { parseCollisions } from './Collision';
import { HomeComponent } from './components/AppHome';
import { HowToPlayComponent } from './components/AppHowToPlay';
import { SettingsComponent } from './components/AppSettings';
import { DescriptionComponent } from './components/AppDescription';
import { StartComponent } from './components/AppStart';
import { ErrorComponent } from './components/AppError';
import { CanvasComponent } from './components/AppCanvas';

export const mySPA = (function() {
  function View() {
    let myContainerMain = null,
        myContainerBtns = null,
        myContainerShow = null,
        muteBtn = null,
        menuBtn = null,
        headerBlock = null;

    const router = {
      main: HomeComponent,
      howtoplay: HowToPlayComponent,
      settings: SettingsComponent,
      description: DescriptionComponent,
      game: StartComponent,
      default: HomeComponent,
      error: ErrorComponent,
      canvas: CanvasComponent,
    };

    this.init = function(container_main, container_btns, container_show) {
      myContainerMain = container_main;
      myContainerBtns = container_btns;
      myContainerShow = container_show;
      muteBtn = document.querySelector('#mute-btn');
      menuBtn = document.querySelector('#menu-btn');  // or btnMenuImg
      headerBlock = container_main.querySelector('.header');
    }

    this.updateButtons = function(currentPage) {
      const menuLinks = myContainerBtns.querySelectorAll('.nav__link');
      const state = `#${currentPage}`;

      for (let link of menuLinks) {
        state === link.getAttribute('href') ? link.classList.add('active') : link.classList.remove('active');
      }
    }

    this.renderContent = function(hashPageName) {
      let routeName = 'default';

      if (hashPageName.length > 0) {
        routeName = hashPageName in router ? hashPageName : 'error';
      }

      window.document.title = router[routeName].title;
      myContainerShow.innerHTML = router[routeName].render(`${routeName}-page`);
      this.updateButtons(router[routeName].id);
    }

    this.changeMuteIcon = function() {
      muteBtn.classList.toggle('mute_off');
      muteBtn.classList.toggle('mute_on');
    }

    this.hideMenu = function() {
      headerBlock.style.display = 'none';
      menuBtn.style.display = 'block';
      document.body.classList.add('game-bgnd');
    }

    this.backToMenu = function() {
      myContainerShow.querySelector('#canvas').style.display = 'none';
      headerBlock.style.display = 'block';
      menuBtn.style.display = 'none';
      document.body.classList.remove('game-bgnd');
    }
  }

  function Model () {
    let myView = null,
        track = null,
        isInitMusicPlay = false,
        soundSettings = {};

    this.init = function(view) {
      myView = view;
    }

    this.updateState = function(hashPageName) {
      myView.renderContent(hashPageName);
    }

    this.playSound = function() {
      if (!isInitMusicPlay) {
        track = getRandomTrack(audio);
        track.pause();
        track.play();
      }
      isInitMusicPlay = true;
      this.playNextTrack(track);
    }

    this.playNextTrack = function(src) {
      src.onended = function() {
        playNextTrack(src, audio);
      }
    }

    this.muteSound = function() {
      for (let sound in audio) {
        if (audio?.[sound]?.[source]) {
          audio[sound][source].muted === false ?
          audio[sound][source].muted = true :
          audio[sound][source].muted = false;
        }
      }
      myView.changeMuteIcon();
    }

    this.setLocalStorage = function (key, value) {
      if (('localStorage' in window) && (window.localStorage !== null)) {
        soundSettings[key] = value;
        localStorage.setItem('settings', JSON.stringify(soundSettings));
      }
    }

    this.setSoundsVolume = function(value) {
      for (let sound in audio) {
        if (audio?.[sound]?.[source]
          && (sound != 'track_1' &&
              sound != 'track_2' &&
              sound != 'track_3' &&
              sound != 'track_4')) {
          audio[sound][source].volume = value;
        }
      }
      this.setLocalStorage('soundEffects', value);
    }

    this.setMusicVolume = function(value) {
      for (let sound in audio) {
        if (audio?.[sound]?.[source]
          && (sound === 'track_1' ||
              sound === 'track_2' ||
              sound === 'track_3' ||
              sound === 'track_4')) {
          audio[sound][source].volume = value;
        }
      }
      this.setLocalStorage('musicEffects', value);
    }

    this.stopSoundsBeforeLeave = function () {
      for (let sound in audio) {
        if (audio?.[sound]?.[source]
          && (sound !== 'track_1' &&
              sound !== 'track_2' &&
              sound !== 'track_3' &&
              sound !== 'track_4')) {
          audio[sound][source].pause();
        }
      }
    }

    this.startGame = function(level) {
      myView.hideMenu();
      changeIsLeaveGameState(false);
      blankGameplayBetweenGames();
      requestLevelMap(`../Platform-traveller/src/js/json/levelMap_${level}.json`, setLevelMap, parseCollisions, createPlayer, init, animate, level);
    }

    this.backToMenu = function() {
      this.stopSoundsBeforeLeave();
      // stopFireSoundInterval();
      changeIsLeaveGameState(true);
      myView.backToMenu();
    }
  }

    function Controller () {
    let myContainerNav = null,
        myContainerMain = null,
        myModel = null;

    this.init = function(container_1, container_2, model) {
      myContainerNav = container_1;
      myContainerMain = container_2;
      myModel = model;
      window.addEventListener('hashchange', this.updateState);
      this.updateState();
      this.addEventListeners();
    }

    this.updateState = function() {
      const hashPageName = location.hash.slice(1).toLowerCase();
      myModel.updateState(hashPageName);
    }

    this.addEventListeners = function() {
      myContainerNav.addEventListener('click', function (e) {
        if (e.target && e.target.id === 'select-lvl') {
          myModel.playSound();
        }
      });

      myContainerMain.addEventListener('change', function (e) {
        if (e.target && e.target.id === 'volume-snd') { // sound effects volume
          myModel.setSoundsVolume(e.target.value);
        }
        if (e.target && e.target.id === 'volume-msc') { // music volume
          myModel.setMusicVolume(e.target.value);
        }
      });

      document.addEventListener('click', function (e) {
        if (e.target && e.target.classList.contains('level__img')) { // select level
          myModel.startGame(e.target.dataset.stage);
        }
      });

      document.addEventListener('click', function (e) {
        if (e.target && e.target.id === 'mute-btn') {
          myModel.muteSound();
        }

        if (e.target && e.target.id === 'btnMenuImg') {
          e.preventDefault();
          e.stopPropagation();
          myModel.backToMenu();
        }
      });
    }
  }

  /* Init */
  return {
    init: function(container_main, container_btns, container_show) {
      this.initBuildHtml(container_main);
      this.main();
      const view = new View();
      const model = new Model();
      const controller = new Controller();

      view.init(document.getElementById(container_main), document.getElementById(container_btns), document.getElementById(container_show)); // главный контейнер с app, контейнер с <nav> и контейнер с <main>
      model.init(view);
      controller.init(document.getElementById(container_btns), document.getElementById(container_show), model); //  контейнер с <nav>, контейнер с <main> и модель (можно сюда еще передать mySPA, audio, source)
    },

    main: function() {
      console.log('Game "Platform traveller" initialized...');
    },

    initBuildHtml: function(elem) {
      const app = document.getElementById(elem);
      app.className = 'app';
      app.innerHTML = `
      <header class="header">
        <img class="cloud-1" src="${cloud_1}" alt="cloud first">
        <img class="cloud-2" src="${cloud_2}" alt="cloud second">
        <img class="cloud-3" src="${cloud_3}" alt="cloud third">
        <img class="cloud-4" src="${cloud_4}" alt="cloud fourth">
          <div class="header__wrapper">
            <img class="header__logo" src="${logoImg_1}" alt="logo">
              <div class="header__logo-box">
                <img class="header__logo-2" src="${logoImg_2}" alt="logo small">
                  <p class="header__title">Platform traveller</p>
              </div>
                <div class="bird-container">
                  <img class="bird" src="${birdFlyingImg}" alt="bird">
                </div>
                    <nav id="root" class="header__nav nav">
                      <ul class="nav__list">
                        <li class="nav__item">
                          <a href="#howtoplay" class="nav__link">How to play</a>
                        </li>
                          <li class="nav__item">
                            <a href="#settings" id="settings-btn" class="nav__link">Settings</a>
                          </li>
                            <li class="nav__item">
                              <a href="#description" class="nav__link">Description</a>
                            </li>
                              <li class="nav__item">
                                <a href="#game" id="select-lvl" class="nav__btn nav__btn_hover nav__link">Select level</a>
                              </li>
                        </ul>
                    </nav>
          </div>
      </header>
        <main id="content" class="content">
        </main>`; 
    }
  }
}());