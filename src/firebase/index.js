import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// firebase creds
const firebaseConfig = {
  apiKey: 'AIzaSyB0d9VLRrwucHukDTXCOM-pkgmMFNS9V4U',
  authDomain: 'auth-305c4.firebaseapp.com',
  databaseURL: 'https://auth-305c4.firebaseio.com/',
};

// Initialize Firebase
const firebaseObj = firebase.initializeApp(firebaseConfig);

export default firebaseObj;
