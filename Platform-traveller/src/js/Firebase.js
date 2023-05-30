import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCJcFPDHK_OR1wHZuJH79VCPO0NWdLJaUY",
  authDomain: "platform-traveller.firebaseapp.com",
  projectId: "platform-traveller",
  storageBucket: "platform-traveller.appspot.com",
  messagingSenderId: "531732691588",
  appId: "1:531732691588:web:9772eb1de30516e1ede0d1",
  measurementId: "G-ZN6EW32BEQ"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export { app, analytics, auth }