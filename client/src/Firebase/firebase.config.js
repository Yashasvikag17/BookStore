// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHRQxtzBALzNSsmjhBWhZzUFAVygAxPvQ",
  authDomain: "book-system-1da6c.firebaseapp.com",
  projectId: "book-system-1da6c",
  storageBucket: "book-system-1da6c.appspot.com",
  messagingSenderId: "534465458973",
  appId: "1:534465458973:web:0c80da4aa6c509603f27f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;