import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA45uDsvZY6pur9Ht5wtuAa7J2QyvCzouA",
    authDomain: "coctailstore-bad62.firebaseapp.com",
    databaseURL: "https://coctailstore-bad62.firebaseio.com",
    projectId: "coctailstore-bad62",
    storageBucket: "coctailstore-bad62.appspot.com",
    messagingSenderId: "560649647149",
    appId: "1:560649647149:web:fea645d7232d353e11b4a4",
    measurementId: "G-64EJCQ5847"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();