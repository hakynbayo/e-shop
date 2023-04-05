import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";




export const firebaseConfig = {
  apiKey: "AIzaSyDKixN6Irix1f1hAhJa4MzJRZ4sYlhK-uw",
  authDomain: "smooze-shop.firebaseapp.com",
  projectId: "smooze-shop",
  storageBucket: "smooze-shop.appspot.com",
  messagingSenderId: "1041637142049",
  appId: "1:1041637142049:web:989322e6338e5f51757d60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;