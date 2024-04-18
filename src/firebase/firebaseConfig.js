import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import {initializeAppCheck, ReCaptchaEnterpriseProvider} from "firebase/app-check";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDN9YNRyO3Z1caewrJqdozzC99xKNcWLXc",
    authDomain: "roccarent-vshevtsov.firebaseapp.com",
    projectId: "roccarent-vshevtsov",
    storageBucket: "roccarent-vshevtsov.appspot.com",
    messagingSenderId: "101108249819",
    appId: "1:101108249819:web:8ebb5cc3b9d1106f2588fe",
    measurementId: "G-ZPG5D4L635"
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
