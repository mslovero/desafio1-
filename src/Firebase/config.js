// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC13XdyFFBU5xAQ2uVzjy_05t9jIIGeYRs",
  authDomain: "peperinahome-46c7a.firebaseapp.com",
  projectId: "peperinahome-46c7a",
  storageBucket: "peperinahome-46c7a.appspot.com",
  messagingSenderId: "183273959661",
  appId: "1:183273959661:web:54e6c02a80a453b52a9ce4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export default function getFirestoreApp () {
    return app
}