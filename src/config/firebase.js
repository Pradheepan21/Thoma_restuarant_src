import { initializeApp } from "firebase/app";
<<<<<<< HEAD
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
=======

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID
// };
>>>>>>> 75852d355f4fadcada072ebaab96ce90b14c0433

const firebaseConfig = {
    apiKey: "AIzaSyB9a2LNuH_Q9Ggb5fFxa_Inj32N7zWljCg",
    authDomain: "thoma-db.firebaseapp.com",
    projectId: "thoma-db",
    storageBucket: "thoma-db.firebasestorage.app",
    messagingSenderId: "881242519331",
    appId: "1:881242519331:web:e8524cb96a78d26aa97e96",
    measurementId: "G-HTJ1ZJP82L"
<<<<<<< HEAD
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const firestore = getFirestore(app);

// Export Firebase services
export { auth, firestore };
=======
  };
  

// Initialize Firebase
const initializeAuthentication = () => {
    return initializeApp(firebaseConfig)
}

export default initializeAuthentication;
>>>>>>> 75852d355f4fadcada072ebaab96ce90b14c0433
