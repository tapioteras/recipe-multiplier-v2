import { getAnalytics, isSupported } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import "firebaseui/dist/firebaseui.css";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: publicRuntimeConfig.firebaseApiKey,
  authDomain: "recipe-multiplier-70883.firebaseapp.com",
  databaseURL:
    "https://recipe-multiplier-70883-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "recipe-multiplier-70883",
  storageBucket: "recipe-multiplier-70883.appspot.com",
  messagingSenderId: "580152422655",
  appId: publicRuntimeConfig.firebaseAppId,
  measurementId: "G-V5T306CVHK",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = isSupported().then((yes) =>
  yes ? getAnalytics(app) : null
);

export const uiConfig = () => {
  return {
    signInFlow: "popup",
    signInSuccessUrl: "/",
    tosUrl: "/terms-of-service",
    privacyPolicyUrl: "/privacy-policy",
    signInOptions: [GoogleAuthProvider.PROVIDER_ID],
  };
};
