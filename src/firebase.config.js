// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCBPeZ_4b8dMKOo0PfPx9goRl7LcsrOkuA",
  authDomain: "house-marketplace-app-82c93.firebaseapp.com",
  projectId: "house-marketplace-app-82c93",
  storageBucket: "house-marketplace-app-82c93.appspot.com",
  messagingSenderId: "1023444492151",
  appId: "1:1023444492151:web:f57b09aa07bdd6ffa7cb72",
  measurementId: "G-3B7KD57RKP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore()
const analytics = getAnalytics(app);