
import { initializeApp ,getApp ,getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import{getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDqjacvw7UiCp3tI55mL1cWHWHR6z-Ipjo",
    authDomain: "prepwise-dccc5.firebaseapp.com",
    projectId: "prepwise-dccc5",
    storageBucket: "prepwise-dccc5.firebasestorage.app",
    messagingSenderId: "463333974983",
    appId: "1:463333974983:web:855e9760a1b288d2e1afe2",
    measurementId: "G-ZWGD19ZSJ8"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);