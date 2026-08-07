// firebase.js


import { initializeApp } 
from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";


import { getFirestore } 
from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";


import { getAuth } 
from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";



// Configuration Firebase

const firebaseConfig = {

  apiKey: "AIzaSyC-4f3v5hKMeGKKd1NwvZt_h1Mx1g1yXFE",

  authDomain: "map-velo-f63ad.firebaseapp.com",

  projectId: "map-velo-f63ad",

  storageBucket: "map-velo-f63ad.firebasestorage.app",

  messagingSenderId: "915926626440",

  appId: "1:915926626440:web:96868d343fce5c5d2a2f3d"

};



// Initialisation Firebase

const app = initializeApp(firebaseConfig);



// Firestore (base de données)

const db = getFirestore(app);



// Authentification

const auth = getAuth(app);



// Export pour les autres pages

export {
    db,
    auth
};
