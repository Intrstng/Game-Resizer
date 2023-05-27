import { logoutImg } from './Assets';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { app, analytics, auth } from './Firebase';
import { mySPA } from './SPA';

export const logInApp = (function () {
  function View() {
    let appContainer = null,
        errorMsgFeild = null,
        logoutBtn = null,
        loginContainer = null;

    this.init = function (app) {
      appContainer = app;
      this.showLoginForm();
      errorMsgFeild = app.querySelector('#errorLoginMessage');
      logoutBtn = app.querySelector('#btnLogout');
      loginContainer = app.querySelector('#login');
    };

    this.showLoginForm = function () {
      appContainer.innerHTML = `
      <div id="login" class="login">
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
                <div id="errorLoginMessage" class="errorlabel">Enter the data</div>
              </div>
                <button id="btnLogin" type="button" class="button buttonBlue">Log in</button>
                  <button id="btnRegister" type="button" class="button buttonBlue" name="register">Sign up</button>
        </form>
      </div>
        <button id="btnLogout" type="button" class="logout-btn logout-btn_hover" style="display: none;"><img src="${logoutImg}" alt="logout"></button>`;
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
      alert('Sign-out successful.');
      logoutBtn.style.display = 'none';
      loginContainer.style.display = 'block';
    };

    this.hideForm = function () {
      logoutBtn.style.display = 'block';
      loginContainer.style.display = 'none';
    };

    this.logoutError = function (err) {
      console.log('An error happened.');
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
        myView.hideForm();
        mySPA.init('root', 'content');     
      })
      .catch((error) => {
        myView.loginError(error.code);
      });
    };

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
        myView.showForm();
      }).catch((error) => {
        // An error happened.
        myView.logoutError(error);
      });		  	
    };
  }

  function Controller() {
    let myModel = null,
        appContainer = null,
        form = null;

    this.init = function (app, model) {
      myModel = model;
      appContainer = app;

      this.addEventListeners();
    };

    this.addEventListeners = function() {
      appContainer.addEventListener('click', function (e) {
        form = appContainer.querySelector('#login-form');
        // loginBtn = appContainer.querySelector('#btnLogin');
        // registerBtn = appContainer.querySelector('#btnRegister');

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

        if (e.target && e.target.id === 'btnLogout') {
          e.preventDefault();
          e.stopPropagation();
          myModel.logout();
        }

      });
    };
  }

  return {
    init: function (elem) {
      const myView = new View();
      const myModel = new Model();
      const myController = new Controller();

      myView.init(document.getElementById(elem));
      myModel.init(myView);
      myController.init(document.getElementById(elem), myModel);
    },
  };
})();