import { initializeApp }
from 'firebase/app'

import {
 getAuth
}
from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:  import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: "santobocado-api.firebasestorage.app",
  messagingSenderId: "676670110523",
  appId: "1:676670110523:web:f25d36ceaa522ca121d51e",
  measurementId: "G-LZ5FHXW7MS"
};

const app =
initializeApp(firebaseConfig)

export const auth =
getAuth(app)

export default app