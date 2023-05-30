import {
        platformImgSrc300,
        heroIdleR,
        heroIdleL,
        heroRunR,
        heroRunL,
        heroJumpR,
        heroJumpL,
        heroFallR,
        heroFallL,
        heroDeath,
        win,
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
        fireballUp,
        fireballDown,
        fireballLeft,
        fireballRight,
        brick_1,
        brick_2,
        finish,
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
        logoutImg,
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
import { audio, source, getRandomTrack, playNextTrack } from './data/Audio';
import { requestLevelMap } from './Levels';
import { setLevelMap, createPlayer, init, animate, changeIsLeaveGameState, blankGameplayBetweenGames } from '../index';
import { parseCollisitions } from './Collision';



                                    import { level } from '../index';

export const mySPA = (function() {
  function View() {
    let myContainerMain = null,
      myContainerBtns = null,
      myContainerShow = null,
      muteBtn = null,
      menuBtn = null,
      headerBlock = null,
      levelSelectHTML = null;

    const HomeComponent = {
      id: 'main',
      title: 'Greeting',
      render: (className = 'content__text') => {
        return `
        <section class="${className} greeting">
          <h2 class="greeting__text">
          Welcome to the wonderful world of Platform world! The young adventurer Virtual Boy sets off on a journey, help him overcome all the dangers and obstacles on his way...</p>
        </section>`
      }
    };

    const HowToPlayComponent = {
      id: 'howtoplay',
      title: 'How to play',
      render: (className = 'container') => {
        return `
          <section class="${className} controls">
            <h2 class="controls__title">Controls:</h2>
            <div class="controls__container">
              <img class="controls__img-key" src="${arrows}" alt="control arrows">
                <p class="controls__text">Press <span>Left</span> and <span>Right</span> arrows to control character movement.<br>Press <span>Up</span> arrow to jump.</p>
                  <img class="controls__img-key" src="${spaceImg}" alt="space key">
                    <p class="controls__text">Press <span>Space</span> to toggle the active and inactive state of the platform One / Two / Three.</p>
                      <img class="controls__img-letter" src="${fKeyImg}" alt="f key">
                        <p class="controls__text">Press <span>F</span> to open the game in full screen.</p>
                          <img class="controls__img-letter" src="${escKeyImg}" alt="escape key">
                            <p class="controls__text">To exit full screen mode, press the <span>Escape</span> button.</p>
            </div>
          </section>
        `;
      }
    };

    const SettingsComponent = {
      id: 'settings',
      title: 'Settings',
      render: (className = 'container') => {
        return `
          <section class="${className} settings">
            <h2 class="settings__title">Audio settings:</h2>
              <div class="settings__slider-box">
                <label for="volume-sounds">Sound effects</label>
                <input type="range" id="volume-snd" class="settings__slider settings__slider_hover" name="volume-sounds"
                  min="0" max="1" value="${getLocalStorage('settings', 'soundEffects')}" step="0.1">   
                    <label for="volume-music">Music</label>
                    <input type="range" id="volume-msc" class="settings__slider settings__slider_hover" name="volume-music" 
                      min="0" max="1" value="${getLocalStorage('settings', 'musicEffects')}" step="0.1">
              </div>
          </section>
        `;
      }
    };

    const DescriptionComponent = {
      id: 'description',
      title: 'Description',
      render: (className = 'container') => {
        return `
          <section class="${className} description">
            <h2 class="description__title">Tutorial:</h2>
              <div class="description__content">
                <p>Jump on platforms avoiding spikes and circular saws as you gradually move towards the finish line.</p>
                <p><span>Platforms One / Two / Three</span> can be active or inactive (switch their state with the <span>Space</span> key).</p>
                <p>The <span>Jump-Toggle-Switch</span> platform also changes its state every time the character jumps. Being on platforms <span>One / Two / Three</span>, be careful, you need to catch the right moment of switching during the jump.</p>
                <p><span>One-Step platform</span> - allows only a single presence of a character. After leaving this platform by the character or his collision with it, it is destroyed.<p/>
                <p>When encountering <span>dragons</span>, be careful, their fireballs are deadly.</p>
                <p>You can also encounter <span>Signal-Suppressor-Zones</span> in which the character cannot control the switching of states of <span>One / Two / Three</span> platforms.<p/>
                <p>Are you ready to take on the challenge?</p>
              </div>
          </section>
        `;
      }
    };

    const StartComponent = {
      id: 'game',
      title: 'Start game',
      render: (className = "container") => {
        levelSelectHTML = `
          <section class="${className} level">
            <h2 class="level__title">Select level:</h2>
            <div class="level__list">
              <a href="#canvas" class="level__item level__item_hover level__item_active level__item_disabled"><img class="level__img" src="${levelIcon_1}" alt="logout button" data-stage="1"></a>
              <a href="#canvas" class="level__item level__item_hover level__item_active level__item_disabled"><img class="level__img" src="${levelIcon_2}" alt="logout button" data-stage="2"></a>
              <a href="#canvas" class="level__item level__item_hover level__item_active level__item_disabled"><img class="level__img" src="${levelIcon_3}" alt="logout button" data-stage="3"></a>
              <a href="#canvas" class="level__item level__item_hover level__item_active level__item_disabled"><img class="level__img" src="${levelIcon_4}" alt="logout button" data-stage="4"></a>
              <a href="#canvas" class="level__item level__item_hover level__item_active level__item_disabled"><img class="level__img" src="${levelIcon_5}" alt="logout button" data-stage="5"></a>
              <a href="#canvas" class="level__item level__item_hover level__item_active level__item_disabled"><img class="level__img" src="${levelIcon_6}" alt="logout button" data-stage="6"></a>
              <a href="#canvas" class="level__item level__item_hover level__item_active level__item_disabled"><img class="level__img" src="${levelIcon_7}" alt="logout button" data-stage="7"></a>
              <a href="#canvas" class="level__item level__item_hover level__item_active level__item_disabled"><img class="level__img" src="${levelIcon_8}" alt="logout button" data-stage="8"></a>
              <a href="#canvas" class="level__item level__item_hover level__item_active level__item_disabled"><img class="level__img" src="${levelIcon_9}" alt="logout button" data-stage="9"></a>
              <a href="#canvas" class="level__item level__item_hover level__item_active level__item_disabled"><img class="level__img" src="${levelIcon_10}" alt="logout button" data-stage="10"></a>
              <a href="#canvas" class="level__item level__item_hover level__item_active level__item_disabled"><img class="level__img" src="${levelIcon_11}" alt="logout button" data-stage="11"></a>
              <a href="#canvas" class="level__item level__item_hover level__item_active level__item_disabled"><img class="level__img" src="${levelIcon_12}" alt="logout button" data-stage="12"></a>
              <a href="#canvas" class="level__item level__item_hover level__item_active level__item_disabled"><img class="level__img" src="${levelIcon_13}" alt="logout button" data-stage="13"></a>
              <a href="#canvas" class="level__item level__item_hover level__item_active level__item_disabled"><img class="level__img" src="${levelIcon_14}" alt="logout button" data-stage="14"></a>
              <a href="#canvas" class="level__item level__item_hover level__item_active level__item_disabled"><img class="level__img" src="${levelIcon_15}" alt="logout button" data-stage="15"></a>
              <a href="#canvas" class="level__item level__item_hover level__item_active level__item_disabled"><img class="level__img" src="${levelIcon_16}" alt="logout button" data-stage="16"></a>
              <a href="#canvas" class="level__item level__item_hover level__item_active level__item_disabled"><img class="level__img" src="${levelIcon_17}" alt="logout button" data-stage="17"></a>
            </div>
          </section>
        `;
        return levelSelectHTML;
      }
    };

    const ErrorComponent = {
      id: 'error',
      title: '404',
      render: (className = 'container') => {
        return `
          <section class="${className} error">
            <img class="error__img" src="${errorImg}" alt="error 404">
            <p class="error__msg">Page not found (<span>404</span> error), please try to return to the <a href="#main">main page</a>.</p>
          </section>
        `;
      }
    };

    const CanvasComponent = {
      id: 'canvas',
      title: 'Canvas',
      render: (className = 'container') => {
        return `
        <section class="${className} error">
          <canvas id="canvas" class="${className} width="1024" height="576"></canvas>
        </section>
        `;
      }
    };

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
  };

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
      console.log(value);
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
      console.log(value);
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
      requestLevelMap(`../src/js/json/levelMap_${level}.json`, setLevelMap, parseCollisitions, createPlayer, init, animate, level);
    }

    this.backToMenu = function() {
      this.stopSoundsBeforeLeave();
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
    };
  };

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
  };
}());