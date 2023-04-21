import  TERRARIOS  from "../datos/TERRARIOS.json" assert{type:"json"}
import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBmIQtxyOzJl6CgW7U4TE2Zby1SkRYpizc",
  authDomain: "micromundoreact.firebaseapp.com",
  projectId: "micromundoreact",
  storageBucket: "micromundoreact.appspot.com",
  messagingSenderId: "1017225255022",
  appId: "1:1017225255022:web:82672ad85a9e0ab20e2e7f",
  measurementId: "G-TQ6CF2RJ8N"
};


const app = initializeApp(firebaseConfig);
const dataBase= getFirestore (app);
const productosRef= collection(dataBase, "productos")

TERRARIOS.forEach((item)=>{
    addDoc(productosRef, item)
})

