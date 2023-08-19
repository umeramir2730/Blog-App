// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, doc, setDoc, getDoc, deleteDoc, updateDoc, serverTimestamp, query, orderBy } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZMmWMVfJfAK4jVkJVu-kpXMfpesF9JzM",
    authDomain: "hackathon-app-2442e.firebaseapp.com",
    projectId: "hackathon-app-2442e",
    storageBucket: "hackathon-app-2442e.appspot.com",
    messagingSenderId: "636089793256",
    appId: "1:636089793256:web:f84bc93ee9521bcea8275d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, auth, createUserWithEmailAndPassword, db, doc, setDoc, signInWithEmailAndPassword, onAuthStateChanged, signOut, getDoc, collection, addDoc, getDocs, deleteDoc, updateDoc, serverTimestamp, query, orderBy, storage, ref, uploadBytesResumable, getDownloadURL }
