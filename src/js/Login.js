import { logoutImg } from './Assets';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { app, analytics, auth } from './Firebase';
import { mySPA } from './SPA';
import { cloud_1,
         cloud_2,
         cloud_3,
         cloud_4
        } from './Assets';
import { audio, source } from './data/Audio';

export const logInApp = (function () {
  function View() {
    let appContainer = null,
        errorMsgFeild = null,
        logoutBtn = null,
        muteBtn = null,
        firstShow = null,
        loginContainer = null,
        content = null;

    this.init = function (app, state) {
      appContainer = app;
      firstShow = state;
      this.showLoginForm();
      muteBtn = document.querySelector('#mute-btn');
      errorMsgFeild = app.querySelector('#errorLoginMessage');
      logoutBtn = document.querySelector('#btnLogout');
      loginContainer = app.querySelector('#login');
    };

    this.showLoginForm = function () {
      const erorrMsg = firstShow ? 'Enter the data' : 'Sign-out successful.';
      content = `<div id="login" class="login">
                  <img class="cloud-1" src="${cloud_1}" alt="cloud first">
                    <img class="cloud-2" src="${cloud_2}" alt="cloud second">
                      <img class="cloud-3" src="${cloud_3}" alt="cloud third">
                        <img class="cloud-4" src="${cloud_4}" alt="cloud fourth">
                          <form id="login-form">
                            <div class="group">
                              <label for="email">Email</label>
                              <input id="email" class="input-login" name="email" type="email" autocomplete="on">
                            </div>
                              <div class="group">
                                <label for="password">Password</label>
                                <input id="password" class="input-login" name="password" type="password" autocomplete="off">
                              </div>
                                <div id="loginMessage" class="group">
                                  <div id="errorLoginMessage" class="errorlabel">${erorrMsg}</div>
                                </div>
                                  <button id="btnLogin" type="button" class="button buttonBlue">Log in</button>
                                    <button id="btnRegister" type="button" class="button buttonBlue" name="register">Sign up</bsutton>
                          </form>
                  </div>`;

      appContainer.innerHTML = content;
      const btnLogoutHtml = `<button id="btnLogout" type="button" class="logout-btn logout-btn_hover" style="display: none;"><img id="btnLogoutImg" src="${logoutImg}" alt="logout"></button>`;
      appContainer.insertAdjacentHTML('beforeBegin', btnLogoutHtml);

      const btnMuteHtml = `<div id="mute-btn" class="mute mute_off mute_hover" style="display: none"></div>`;
      appContainer.insertAdjacentHTML('beforeBegin', btnMuteHtml);    
    };

    this.loginSuccess = function (msg) {
      errorMsgFeild.style.color = 'rgb(153, 153, 153)';
      errorMsgFeild.textContent = `${msg}, login successfull!`;
    };

    this.loginError = function (error) {
      errorMsgFeild.style.color = 'rgb(255, 0, 0)';
      errorMsgFeild.textContent = `Login unsuccessfull: ${error}`;
    };

    this.registerSuccess = function (msg) {
      errorMsgFeild.style.color = 'rgb(153, 153, 153)';
      errorMsgFeild.textContent = `${msg}, registration successfull! Please login.`;
    };

    this.registerError = function (error) {
      errorMsgFeild.style.color = 'rgb(255, 0, 0)';
      errorMsgFeild.textContent = `Registration unsuccessfull: ${error}`;
    };

    this.showForm = function () {
      logoutBtn.style.display = 'none';
      loginContainer.style.display = 'block';
      muteBtn.style.display = 'none';
    };

    this.hideForm = function () {
      logoutBtn.style.display = 'block';
      loginContainer.style.display = 'none';
      muteBtn.style.display = 'block';
    };

    this.logoutError = function (err) {
      console.log('An error happened.');
    }

    this.updateUserMsg = function () {
      errorMsgFeild.style.color = 'rgb(153, 153, 153)';
      errorMsgFeild.textContent = `Complete data entry...`;
    }
  }

  function Model() {
    let myView = null;

    this.init = function (view) {
      myView = view;
    };

    this.login = function (email, pass) {
      // Login
      signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user.email.split('@').slice(0, 1)[0];
        myView.loginSuccess(user);
        setTimeout(() => {
          myView.hideForm();
          mySPA.init('app', 'root', 'content');
        }, 750);  
      })
      .catch((error) => {
        myView.loginError(error.code);
      });
    };

    this.stopAudioBeforeLeave = function () {
      for (let sound in audio) {
        if (audio?.[sound]?.[source]
          && (sound === 'track_1' ||
              sound === 'track_2' ||
              sound === 'track_3' ||
              sound === 'track_4')) {
          audio[sound][source].pause();
        }
      }
    }

    this.register = function (email, pass) {
      // For new registration
      createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user.email.split('@').slice(0, 1)[0];
        myView.registerSuccess(user);
      })
      .catch((error) => {
        myView.registerError(error.code);
      });
    };

    this.logout = function () {
      signOut(auth).then(() => {
        // Sign-out successful.
        logInApp.init('app', false);
        myView.showForm();
        this.stopAudioBeforeLeave();
      }).catch((error) => {
        // An error happened.
        myView.logoutError(error);
      });		  	
    };

    this.updateUserMsg = function () {
      myView.updateUserMsg();
    };
  }

  function Controller() {
    let myModel = null,
        appContainer = null,
        firstShow = null,
        form = null;

    this.init = function (app, model, firstStart) {
      myModel = model;
      appContainer = app;
      firstShow = firstStart;
      this.addEventListeners();
    };

    this.addEventListeners = function() {
        appContainer.addEventListener('click', function(e) {
          form = appContainer.querySelector('#login-form');

          if (e.target && e.target.id === 'btnLogin') {
            e.preventDefault();
            e.stopPropagation();
            myModel.login(
              appContainer.querySelector('#email').value,
              appContainer.querySelector('#password').value
            );
          }

          if (e.target && e.target.id === 'btnRegister') {
            e.preventDefault();
            e.stopPropagation();
            myModel.register(
              appContainer.querySelector('#email').value,
              appContainer.querySelector('#password').value
            );
          }
        });

        appContainer.addEventListener('input', function(e) {
          if (e.target && e.target.id === 'email' ||
              e.target && e.target.id === 'password') {
            myModel.updateUserMsg();
          }
        });

      if (firstShow) {
        document.addEventListener('click', function(e) {
          if (e.target && e.target.id === 'btnLogoutImg') {
            e.preventDefault();
            e.stopPropagation();
            let isLeave = confirm('Do you really want to leave the page? Loss of progress is possible.'); // в идеале переместить во View (если бы confirm можно было стилизовать и изменять его содержимое)
            if (isLeave) {
              myModel.logout();
            }
          }
        });
      };
    }
  }

  return {
    init: function (elem, state) { // state - is a first start flag - when login popup is showing for the first time (used for: not to add handler to logoutBtn during second login popup show, and to show logout message)
      const myView = new View();
      const myModel = new Model();
      const myController = new Controller();

      myView.init(document.getElementById(elem), state);
      myModel.init(myView);
      myController.init(document.getElementById(elem), myModel, state);
    },
  };
})();