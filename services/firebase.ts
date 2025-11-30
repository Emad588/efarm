import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKQbNYB_ny4Bji0GliWrBZlHoCD_Xu74A",
  authDomain: "efarm-1a4c7.firebaseapp.com",
  projectId: "efarm-1a4c7",
  storageBucket: "efarm-1a4c7.firebasestorage.app",
  messagingSenderId: "353347205786",
  appId: "1:353347205786:web:47e4ee0e20578e7d98bd23",
  measurementId: "G-PJCQ52W83P"
};

// Initialize Firebase
let app;
let auth;
let googleProvider;
let analytics;

try {
  app = initializeApp(firebaseConfig);
  console.log("Firebase App Initialized successfully");

  // Initialize Auth
  // We check if app is initialized before calling getAuth to avoid "Component auth has not been registered" errors
  if (app) {
    auth = getAuth(app);
    googleProvider = new GoogleAuthProvider();
  }

  // Initialize Analytics (conditionally to prevent errors in some environments)
  if (typeof window !== 'undefined') {
    try {
      analytics = getAnalytics(app);
    } catch (e) {
      console.warn("Firebase Analytics could not be initialized", e);
    }
  }

} catch (error) {
  console.error("Critical Error Initializing Firebase:", error);
}

export { auth, googleProvider };

export const signInWithGoogle = async () => {
  if (!auth) {
    throw new Error("Firebase Auth is not initialized. Check your configuration.");
  }
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Google Sign In Error:", error);
    throw error;
  }
};