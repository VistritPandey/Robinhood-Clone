import firebase from 'firebase'


const firebaseConfig = {
    // add your own config file
  };

  let firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export {db}
