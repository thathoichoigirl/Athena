import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDOIbbtcPC7LN6YKkrJH_1pqnVxY5G9bbA',
  authDomain: 'the-dojo-site-72a7e.firebaseapp.com',
  projectId: 'the-dojo-site-72a7e',
  storageBucket: 'the-dojo-site-72a7e.appspot.com',
  messagingSenderId: '853991379154',
  appId: '1:853991379154:web:4094fe1218da5eec5add0b',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
