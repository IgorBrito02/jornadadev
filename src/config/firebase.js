
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyBZRcv1LufdSefhfwFhzflevk3DnBymXEo",
  authDomain: "tiktok---jornada-25a29.firebaseapp.com",
  projectId: "tiktok---jornada-25a29",
  storageBucket: "tiktok---jornada-25a29.appspot.com",
  messagingSenderId: "777935389489",
  appId: "1:777935389489:web:8f4f72ba7c36bfa704a610"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;