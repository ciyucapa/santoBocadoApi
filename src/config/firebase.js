import { initializeApp }
from 'firebase/app'

import {
 getAuth
}
from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjYadHmZosE3etO6fq_G1CT4RLbOwOBhI",
  authDomain: "santobocado-api.firebaseapp.com",
  projectId: "santobocado-api",
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