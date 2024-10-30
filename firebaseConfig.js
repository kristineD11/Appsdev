// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMCxzoGkcYxtue5EpV3JkGHrckzd0hzVk",
  authDomain: "fir-integration-ee139.firebaseapp.com",
  projectId: "fir-integration-ee139",
  storageBucket: "fir-integration-ee139.appspot.com",
  messagingSenderId: "318104264534",
  appId: "1:318104264534:web:6820a006634497318300f7",
  measurementId: "G-6G1HNZD632"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
