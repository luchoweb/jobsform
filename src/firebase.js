import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBhRfIIfpkuETZg9TET5YIVgVa_pgYs-28",
  authDomain: "jobsform-lw.firebaseapp.com",
  projectId: "jobsform-lw",
  storageBucket: "jobsform-lw.appspot.com",
  messagingSenderId: "574720709146",
  appId: "1:574720709146:web:d1b470404f49d79d6e37a3",
  measurementId: "G-T7Y046BH74"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);