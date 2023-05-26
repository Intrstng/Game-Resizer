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
        backgroundImg,
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
        mKeyImg,
        errorImg,
        birdFlyingImg,
        logoImg_1,
        logoImg_2,
} from './Assets';
import { getLocalStorage } from '../index';

export const mySPA = (function() {

  function View() {
    let myContainerBtns = null;
    let myContainerShow = null;

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
                <p class="controls__text">Press Left and Right arrows to control character movement.<br>Press press Up arrow to jump.</p>
                  <img class="controls__img-key" src="${spaceImg}" alt="space key">
                    <p class="controls__text">Press Space to toggle the active and inactive state of the platform <span>One / Two / Three</span></p>
                      <img class="controls__img-letter" src="${mKeyImg}" alt="m key">
                        <p class="controls__text">Press <span>M</span> to return to the menu</p>
                          <img class="controls__img-letter" src="${fKeyImg}" alt="m key">
                            <p class="controls__text">Press <span>F</span> to open the game in full screen</p>      
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
        return `
          <section class="${className} level">
            <h2 class="level__title">Select level:</h2>
            <div class="level__list">
              <button class="level__item level__item_hover level__item_active level__item_disabled">1</button>
              <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>2</button>
              <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>3</button>
              <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>4</button>
              <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>5</button>
              <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>6</button>
              <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>7</button>
              <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>8</button>
              <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>9</button>
              <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>10</button>
              <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>11</button>
              <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>12</button>
              <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>13</button>
              <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>14</button>
              <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>15</button>
              <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>16</button>
              <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>17</button>
            </div>
          </section>
        `;
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

    const router = {
      main: HomeComponent,
      howtoplay: HowToPlayComponent,
      settings: SettingsComponent,
      description: DescriptionComponent,
      game: StartComponent,
      default: HomeComponent,
      error: ErrorComponent
    };

    this.init = function(container_btns, container_show) {
      myContainerBtns = container_btns;
      myContainerShow = container_show;
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
  };

  function Model () {
      let myView = null;

      this.init = function(view) {
        myView = view;
      }

      this.updateState = function(hashPageName) {
        myView.renderContent(hashPageName);
      }
  }

  function Controller () {
      let myContainer = null;
      let myModel = null;

      this.init = function(container, model) {
        myContainer = container;
        myModel = model;
        window.addEventListener('hashchange', this.updateState);
        this.updateState();
      }

      this.updateState = function() {
        const hashPageName = location.hash.slice(1).toLowerCase();
        myModel.updateState(hashPageName);
      }
  };

  /* Init */
  return {
      init: function(container_btns, container_show) {
        this.initBuildHtml();
        this.main();
        const view = new View();
        const model = new Model();
        const controller = new Controller();

        view.init(document.getElementById(container_btns), document.getElementById(container_show));
        model.init(view);
        controller.init(document.getElementById(container_btns), model); // можно передавать только model
      },

      main: function() {
      },

      initBuildHtml: function() {
        const app = document.createElement('div');
        app.id = 'game-app';
        app.className = 'game-app';
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
        document.body.prepend(app);
      }
  };
}());





// import {
//   platformImgSrc300,
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
//   win,
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
//   flamethrowerUp,
//   flamethrowerDown,
//   fireballUp,
//   fireballDown,
//   fireballLeft,
//   fireballRight,
//   brick_1,
//   brick_2,
//   finish,
//   arrows,
//   spaceImg,
//   cloud_1,
//   cloud_2,
//   cloud_3,
//   cloud_4,
//   fKeyImg,
//   mKeyImg,
//   errorImg,
//   birdFlyingImg,
//   logoImg_1,
//   logoImg_2,
// } from './Assets';
// import { volumeEffects } from './data/Audio';
// import { volumeMusic } from './data/Audio';

// export const mySPA = (function() {

// function View() {
// let myContainerBtns = null;
// let myContainerShow = null;

// const HomeComponent = {
// id: 'main',
// title: 'Greeting',
// render: (className = 'content__text') => {
//   return `
//   <section class="${className} greeting">
//     <h2 class="greeting__text">
//     Welcome to the wonderful world of Platform world! The young adventurer Virtual Boy sets off on a journey, help him overcome all the dangers and obstacles on his way...</p>
//   </section>`
// }
// };

// const HowToPlayComponent = {
// id: 'howtoplay',
// title: 'How to play',
// render: (className = 'container') => {
//   return `
//     <section class="${className} controls">
//       <h2 class="controls__title">Controls:</h2>
//       <div class="controls__container">
//         <img class="controls__img-key" src="${arrows}" alt="control arrows">
//           <p class="controls__text">Press Left and Right arrows to control character movement.<br>Press press Up arrow to jump.</p>
//             <img class="controls__img-key" src="${spaceImg}" alt="space key">
//               <p class="controls__text">Press Space to toggle the active and inactive state of the platform <span>One / Two / Three</span></p>
//                 <img class="controls__img-letter" src="${mKeyImg}" alt="m key">
//                   <p class="controls__text">Press <span>M</span> to return to the menu</p>
//                     <img class="controls__img-letter" src="${fKeyImg}" alt="m key">
//                       <p class="controls__text">Press <span>F</span> to open the game in full screen</p>      
//       </div>
//     </section>
//   `;
// }
// };

// const SettingsComponent = {
// id: 'settings',
// title: 'Settings',
// render: (className = 'container') => {
//   return `
//     <section class="${className} settings">
//       <h2 class="settings__title">Audio settings:</h2>
//         <div class="settings__slider-box">
//           <label for="volume-sounds">Sound effects</label>
//           <input type="range" id="volume-snd" class="settings__slider settings__slider_hover" name="volume-sounds"
//             min="0.1" max="1" value="0.8" step="0.1">   
//               <label for="volume-music">Music</label>
//               <input type="range" id="volume-msc" class="settings__slider settings__slider_hover" name="volume-music" 
//                 min="0.1" max="1" value="0.7" step="0.1">
//         </div>
//     </section>
//   `;
// }
// };

// const DescriptionComponent = {
// id: 'description',
// title: 'Description',
// render: (className = 'container') => {
//   return `
//     <section class="${className} description">
//       <h2 class="description__title">Tutorial:</h2>
//         <div class="description__content">
//           <p>Jump on platforms avoiding spikes and circular saws as you gradually move towards the finish line.</p>
//           <p><span>Platforms One / Two / Three</span> can be active or inactive (switch their state with the <span>Space</span> key).</p>
//           <p>The <span>Jump-Toggle-Switch</span> platform also changes its state every time the character jumps. Being on platforms <span>One / Two / Three</span>, be careful, you need to catch the right moment of switching during the jump.</p>
//           <p><span>One-Step platform</span> - allows only a single presence of a character. After leaving this platform by the character or his collision with it, it is destroyed.<p/>
//           <p>When encountering <span>dragons</span>, be careful, their fireballs are deadly.</p>
//           <p>You can also encounter <span>Signal-Suppressor-Zones</span> in which the character cannot control the switching of states of <span>One / Two / Three</span> platforms.<p/>
//           <p>Are you ready to take on the challenge?</p>
//         </div>
//     </section>
//   `;
// }
// };

// const StartComponent = {
// id: 'game',
// title: 'Start game',
// render: (className = "container") => {
//   return `
//     <section class="${className} level">
//       <h2 class="level__title">Select level:</h2>
//       <div class="level__list">
//         <button class="level__item level__item_hover level__item_active level__item_disabled">1</button>
//         <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>2</button>
//         <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>3</button>
//         <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>4</button>
//         <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>5</button>
//         <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>6</button>
//         <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>7</button>
//         <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>8</button>
//         <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>9</button>
//         <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>10</button>
//         <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>11</button>
//         <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>12</button>
//         <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>13</button>
//         <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>14</button>
//         <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>15</button>
//         <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>16</button>
//         <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>17</button>
//       </div>
//     </section>
//   `;
// }
// };

// const ErrorComponent = {
// id: 'error',
// title: '404',
// render: (className = 'container') => {
//   return `
//     <section class="${className} error">
//       <img class="error__img" src="${errorImg}" alt="error 404">
//       <p class="error__msg">Page not found (<span>404</span> error), please try to return to the <a href="#main">main page</a>.</p>
//     </section>
//   `;
// }
// };

// const router = {
// main: HomeComponent,
// howtoplay: HowToPlayComponent,
// settings: SettingsComponent,
// description: DescriptionComponent,
// game: StartComponent,
// default: HomeComponent,
// error: ErrorComponent
// };

// this.init = function(container_btns, container_show) {
// myContainerBtns = container_btns;
// myContainerShow = container_show;
// }

// this.updateButtons = function(currentPage) {
// const menuLinks = myContainerBtns.querySelectorAll('.nav__link');
// const state = `#${currentPage}`;

// for (let link of menuLinks) {
//   state === link.getAttribute('href') ? link.classList.add('active') : link.classList.remove('active');
//   this.addVolumeHandlers(link);
// }
// }

// this.addVolumeHandlers = function(link) {
// if (link.id === 'settings-btn') {
//   this.setVolumeRangeHandlers();
// }
// }

// this.setVolumeRangeHandlers = function() {
// const main = document.getElementById('content');
// const volumeRangeSound = main.querySelector('#volume-snd');
// const volumeRangeMusic = main.querySelector('#volume-msc');
// if (volumeRangeSound || volumeRangeMusic) {
//   volumeRangeSound.addEventListener('change', () => {
//     volumeEffects = volumeRangeSound.value;
//   });
//   volumeRangeMusic.addEventListener('change', () => {
//     volumeMusic = volumeRangeMusic.value;
//   });
// }
// }
// this.renderContent = function(hashPageName) {
// let routeName = 'default';

// if (hashPageName.length > 0) {
//   routeName = hashPageName in router ? hashPageName : 'error';
// }

// window.document.title = router[routeName].title;
// myContainerShow.innerHTML = router[routeName].render(`${routeName}-page`);
// this.updateButtons(router[routeName].id);
// }
// };

// function Model () {
// let myView = null;

// this.init = function(view) {
//   myView = view;
// }

// this.updateState = function(hashPageName) {
//   myView.renderContent(hashPageName);
// }
// }

// function Controller () {
// let myContainer = null;
// let myModel = null;

// this.init = function(container, model) {
//   myContainer = container;
//   myModel = model;
//   window.addEventListener('hashchange', this.updateState);
//   this.updateState();
// }

// this.updateState = function() {
//   const hashPageName = location.hash.slice(1).toLowerCase();
//   myModel.updateState(hashPageName);
// }
// };

// /* Init */
// return {
// init: function(container_btns, container_show) {
//   this.initBuildHtml();
//   this.main();
//   const view = new View();
//   const model = new Model();
//   const controller = new Controller();

//   view.init(document.getElementById(container_btns), document.getElementById(container_show));
//   model.init(view);
//   controller.init(document.getElementById(container_btns), model); // можно передавать только model
// },

// main: function() {
// },

// initBuildHtml: function() {
//   const app = document.createElement('div');
//   app.id = 'game-app';
//   app.className = 'game-app';
//   app.innerHTML = `
//   <header class="header">
//     <img class="cloud-1" src="${cloud_1}" alt="cloud first">
//     <img class="cloud-2" src="${cloud_2}" alt="cloud second">
//     <img class="cloud-3" src="${cloud_3}" alt="cloud third">
//     <img class="cloud-4" src="${cloud_4}" alt="cloud fourth">
//       <div class="header__wrapper">
//         <img class="header__logo" src="${logoImg_1}" alt="logo">
//           <div class="header__logo-box">
//             <img class="header__logo-2" src="${logoImg_2}" alt="logo small">
//               <p class="header__title">Platform traveller</p>
//           </div>
//             <div class="bird-container">
//               <img class="bird" src="${birdFlyingImg}" alt="bird">
//             </div>
//                 <nav id="root" class="header__nav nav">
//                   <ul class="nav__list">
//                     <li class="nav__item">
//                       <a href="#howtoplay" class="nav__link">How to play</a>
//                     </li>
//                       <li class="nav__item">
//                         <a href="#settings" id="settings-btn" class="nav__link">Settings</a>
//                       </li>
//                         <li class="nav__item">
//                           <a href="#description" class="nav__link">Description</a>
//                         </li>
//                           <li class="nav__item">
//                             <a href="#game" id="select-lvl" class="nav__btn nav__btn_hover nav__link">Select level</a>
//                           </li>
//                     </ul>
//                 </nav>
//       </div>
//   </header>
//     <main id="content" class="content">
//     </main>`;
//   document.body.prepend(app);
// }
// };
// }());