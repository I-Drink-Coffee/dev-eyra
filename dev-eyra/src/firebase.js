// Import the Firebase functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_LJvyGdgsnb0k0zapQzT4nC96S1JORGQ",
  authDomain: "dev-eyra.firebaseapp.com",
  projectId: "dev-eyra",
  storageBucket: "dev-eyra.appspot.com",
  messagingSenderId: "810407599898",
  appId: "1:810407599898:web:f1a69dce5884f09f5016a3",
  measurementId: "G-F4Z8T1CQQC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
