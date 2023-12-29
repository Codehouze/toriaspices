// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'dotenv/config'
import {
    getAuth,
    GoogleAuthProvider,
  
  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const {REACT_APP_AUTH_DOMAIN,REACT_APP_PROJECT_ID,REACT_APP_STORAGE_BUCKET,REACT_APP_MESSAGING_SENDER_ID,REACT_APP_APP_ID,REACT_APP_MEASUREMENT_ID}= process.env
const firebaseConfig = {
  apiKey: process.env.APIKey,
  authDomain: REACT_APP_AUTH_DOMAIN,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
  appId: REACT_APP_APP_ID,
  measurementId: REACT_APP_MEASUREMENT_ID
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
  const googleProvider = new GoogleAuthProvider();


  export { auth, googleProvider}