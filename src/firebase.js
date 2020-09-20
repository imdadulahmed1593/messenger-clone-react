import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWGJPqIOY68q43xGpChiqAyOKoQPIYAo4",
  authDomain: "messenger-clone-react-e8df9.firebaseapp.com",
  databaseURL: "https://messenger-clone-react-e8df9.firebaseio.com",
  projectId: "messenger-clone-react-e8df9",
  storageBucket: "messenger-clone-react-e8df9.appspot.com",
  messagingSenderId: "624935471599",
  appId: "1:624935471599:web:5c4a1b5ffdc672570ace1a",
  measurementId: "G-RF197J38D0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
