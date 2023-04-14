import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBmIQtxyOzJl6CgW7U4TE2Zby1SkRYpizc",
  authDomain: "micromundoreact.firebaseapp.com",
  projectId: "micromundoreact",
  storageBucket: "micromundoreact.appspot.com",
  messagingSenderId: "1017225255022",
  appId: "1:1017225255022:web:82672ad85a9e0ab20e2e7f",
  measurementId: "G-TQ6CF2RJ8N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// getfirestore me conecta con la database de firebase (sería getstorage si quiero conectarme con el servicio de storage)
export const dataBase= getFirestore (app);
