import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyB7wcFvJlJ5WyKBNv4Vr7x6Sg6oAmn0nOE",
    authDomain: "word-game-dc92a.firebaseapp.com",
    databaseURL: "https://word-game-dc92a.firebaseio.com",
    projectId: "word-game-dc92a",
    storageBucket: "word-game-dc92a.appspot.com",
    messagingSenderId: "797300703837"
  };

  firebase.initializeApp(config);

  export default firebase;