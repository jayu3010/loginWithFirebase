import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAL9pA0u7jG1S7Li689uSfb_LktXdS4MXU",
  authDomain: "react-login-2ec0f.firebaseapp.com",
  projectId: "react-login-2ec0f",
  storageBucket: "react-login-2ec0f.appspot.com",
  messagingSenderId: "613734378913",
  appId: "1:613734378913:web:1cd0c756991eb2cb57efe0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


