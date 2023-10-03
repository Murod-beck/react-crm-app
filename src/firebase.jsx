import { initializeApp, getApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  databaseURL:
    "https://projectoscrm-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: import.meta.env.VITE_APP_ROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_APP_ID,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export default app;
