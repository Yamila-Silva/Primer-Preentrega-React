
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhymq7CsExX7FgxQHU3yP8Mg-VUjAL6Ww",
  authDomain: "mr-calcetin.firebaseapp.com",
  projectId: "mr-calcetin",
  storageBucket: "mr-calcetin.appspot.com",
  messagingSenderId: "967814412842",
  appId: "1:967814412842:web:2bd0acd5262d0d45402153"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)