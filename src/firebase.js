import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAd9tZVIS2jS_YvZWDFsUZJDlj4y5gqEMQ",
  authDomain: "clone-75de9.firebaseapp.com",
  databaseURL: "https://clone-75de9.firebaseio.com",
  projectId: "clone-75de9",
  storageBucket: "clone-75de9.appspot.com",
  messagingSenderId: "340507741689",
  appId: "1:340507741689:web:8d72c30f76851ed8bf8128",
  measurementId: "G-63TFQ03GMB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
