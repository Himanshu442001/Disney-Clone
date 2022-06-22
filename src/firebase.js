// New way of authentication in firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAUnmmEZ6bclBa4orArKqSACfbY4qZ0jxs",
  authDomain: "clone-series.firebaseapp.com",
  projectId: "clone-series",
  storageBucket: "clone-series.appspot.com",
  messagingSenderId: "576865272726",
  appId: "1:576865272726:web:26f04f3730b3b668d313b7"
};
  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();


export{auth, provider, storage};
export default db;

