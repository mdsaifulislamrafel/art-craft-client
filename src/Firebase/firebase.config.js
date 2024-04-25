// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAckpBhNf-V1d_SRiHK5clSHuKKf1XRHOg",
  authDomain: "art-craft-store.firebaseapp.com",
  projectId: "art-craft-store",
  storageBucket: "art-craft-store.appspot.com",
  messagingSenderId: "229333141741",
  appId: "1:229333141741:web:ae1578c4ad94372748e4e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);