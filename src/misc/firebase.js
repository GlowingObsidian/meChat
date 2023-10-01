// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDTd9WPkF6WueAtYDjx4Hv8Ho4OJU1Uirw',
  authDomain: 'mechat-6e913.firebaseapp.com',
  databaseURL:
    'https://mechat-6e913-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'mechat-6e913',
  storageBucket: 'mechat-6e913.appspot.com',
  messagingSenderId: '928879238352',
  appId: '1:928879238352:web:69afa9d20f17aab364d2d5',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
