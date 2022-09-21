// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHSQUbHfNaw_pUwqzl7_g886GbOXbtXPk",
  authDomain: "luciana-react2022.firebaseapp.com",
  projectId: "luciana-react2022",
  storageBucket: "luciana-react2022.appspot.com",
  messagingSenderId: "286188253645",
  appId: "1:286188253645:web:a40e768b83d94373d35484"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);