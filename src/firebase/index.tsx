import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWLFlqWr6N3bHCil4iWWwmefhMeIDCMso",
  authDomain: "vue-firebase-bd512.firebaseapp.com",
  projectId: "vue-firebase-bd512",
  storageBucket: "vue-firebase-bd512.appspot.com",
  messagingSenderId: "343136068959",
  appId: "1:343136068959:web:ecf2a35351521e4d8082ea"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);