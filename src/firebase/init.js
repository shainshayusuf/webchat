import firebase from 'firebase'
import firestore from 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyB0s43knyXhiV97bbgQiZ3xpAySIVP4zUc",
    authDomain: "chat-app-1d872.firebaseapp.com",
    databaseURL: "https://chat-app-1d872.firebaseio.com",
    projectId: "chat-app-1d872",
    storageBucket: "chat-app-1d872.appspot.com",
    messagingSenderId: "1019615383396",
    appId: "1:1019615383396:web:ee0576f87eb727fa0f3471"
  };
  // Initialize Firebase
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();