import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyBuR4pogvgGwhqy5vPr1XRVkFvvChpmVfI",
    authDomain: "vistrit-robinhood.firebaseapp.com",
    projectId: "vistrit-robinhood",
    storageBucket: "vistrit-robinhood.appspot.com",
    messagingSenderId: "851776656757",
    appId: "1:851776656757:web:2f4d0243248119b2bfaf3c",
    measurementId: "G-PGSXENXSDK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

  export { db };