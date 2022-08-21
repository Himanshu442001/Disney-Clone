// New way of authentication in firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAsh-AtUIlhqfRz4CFp2S2vPOKteZjsxuk",
  authDomain: "clones-8460e.firebaseapp.com",
  projectId: "clones-8460e",
  storageBucket: "clones-8460e.appspot.com",
  messagingSenderId: "155040847174",
  appId: "1:155040847174:web:b37d181fd0a8bfb958c147",
  measurementId: "G-B7HQ03JQ6G"
 
};
  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();


export{auth, provider, storage};
export default db;

