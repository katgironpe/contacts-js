import * as firebase from 'firebase/app';
// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';

// Firebase config
let config = {
  apiKey: "AIzaSyB2N3_biz5P3wz7CFrPjyfvETC6_5nP5q8",
  authDomain: "contacts-js-17026.firebaseapp.com",
  databaseURL: "https://contacts-js-17026.firebaseio.com",
  projectId: "contacts-js-17026",
  storageBucket: "contacts-js-17026.appspot.com",
  messagingSenderId: "41072061162"
};

firebase.initializeApp(config);
