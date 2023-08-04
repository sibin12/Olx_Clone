// import firebase from 'firebase/compat/app';
// // require('firebase/auth')
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAuq_5WZY9c1O7mxjLrUmMZnAND7wG1J7I",
    authDomain: "olx-demo-b9f87.firebaseapp.com",
    projectId: "olx-demo-b9f87",
    storageBucket: "olx-demo-b9f87.appspot.com",
    messagingSenderId: "567502035357",
    appId: "1:567502035357:web:0debe37fa20f5a7cf6b774",
    measurementId: "G-RJPZGCP4BH"
  };

 export default firebase.initializeApp(firebaseConfig);