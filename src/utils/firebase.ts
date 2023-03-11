// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { GoogleAuthProvider } from 'firebase/auth';

const env = import.meta.env;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: 'my-chat-5acd2.firebaseapp.com',
  projectId: 'my-chat-5acd2',
  storageBucket: 'my-chat-5acd2.appspot.com',
  messagingSenderId: '290436098036',
  appId: '1:290436098036:web:eb18b70ac427871794bba1',
  measurementId: 'G-2598QTYH67'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// Initial Auth
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export {
  db,
  analytics,
  provider
};

export default app;
