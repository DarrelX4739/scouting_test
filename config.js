import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getFirestore }
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {

    apiKey: "PUT_API_KEY_HERE",

    authDomain: "PUT_AUTH_DOMAIN_HERE",

    projectId: "PUT_PROJECT_ID_HERE",

    storageBucket: "PUT_STORAGE_BUCKET_HERE",

    messagingSenderId: "PUT_MESSAGING_ID_HERE",

    appId: "PUT_APP_ID_HERE"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
