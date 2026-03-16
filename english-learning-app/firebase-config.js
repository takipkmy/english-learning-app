import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAKab2fXfokH40Ha0LT0NbIQyGKDDrwB-M",
  authDomain: "english-learning-app-80ec1.firebaseapp.com",
  projectId: "english-learning-app-80ec1",
  storageBucket: "english-learning-app-80ec1.firebasestorage.app",
  messagingSenderId: "563335742469",
  appId: "1:563335742469:web:f4a9391c2fad4f3154c86c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const GEMINI_API_KEY = "AIzaSyAZQMhch2JxnmMJVd4dTV9s2mpHRfyJwj4";
