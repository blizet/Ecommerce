
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyClnauGKN2A8RViLSub9I5T_Q-_TlB3n8k",
  authDomain: "ecommerceapp-205c5.firebaseapp.com",
  projectId: "ecommerceapp-205c5",
  storageBucket: "ecommerceapp-205c5.appspot.com",
  messagingSenderId: "949531678444",
  appId: "1:949531678444:web:5ad20f2fe21d77185c37c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
export const storage=getStorage(app);

export default app