// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDHiGO7dYk9SPwfOlw0Zz9u7imxhPBjz1A",
    authDomain: "knit-pattern.firebaseapp.com",
    projectId: "knit-pattern",
    storageBucket: "knit-pattern.firebasestorage.app",
    messagingSenderId: "455409022745",
    appId: "1:455409022745:web:b4c651870fc74f36e07788",
    measurementId: "G-ZTNTX1V249"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;