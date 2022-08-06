import { initializeApp } from 'firebase/app';
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY.replace(",", "").trim(),
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN.replace(",", "").trim(),
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID.replace(",", "").trim(),
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL.replace(",", "").trim(),
};

export const firebaseApp = initializeApp(firebaseConfig);
