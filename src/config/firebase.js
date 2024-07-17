import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID } from '@env';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCoiqFzzo3VezlRonDYQVts48sUir0xEmU",
    authDomain: "practica-firebase-202203-efb31.firebaseapp.com",
    projectId: "practica-firebase-202203-efb31",
    storageBucket: "practica-firebase-202203-efb31.appspot.com",
    messagingSenderId: "907930266866",
    appId: "1:907930266866:web:d1447f24f30af3ca6cb46b"
};

console.log("Valor de configuracion", firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if (app) {
    console.log('Firebase initialized successfully');
} else {
    console.log('Firebase initialization failed');
}

const database = getFirestore(app);
if (database) {
    console.log('Firestore initialized correctly');
} else {
    console.log('Firestore initialization failed');
}

const storage = getStorage(app);

if (storage) {
    console.log('storage initialized correctly');
} else {
    console.log('storage initialization failed');
}

// Obtén referencias a los servicios que necesitas
const auth = getAuth(app);

export { auth, database, storage };