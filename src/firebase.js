
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "fir-project-f0d2f.firebaseapp.com",
  projectId: "fir-project-f0d2f",
  storageBucket: "fir-project-f0d2f.appspot.com",
  messagingSenderId: "261064302584",
  appId: "1:261064302584:web:321bf9b5b6557b0e88800d",
  measurementId: "G-EH7E50S29D",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export default auth;
