import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDsLST5gWFrWkW_Uh6-Miikl-5Xkh5ZKis",
    authDomain: "linkedin-clone-2a723.firebaseapp.com",
    projectId: "linkedin-clone-2a723",
    storageBucket: "linkedin-clone-2a723.appspot.com",
    messagingSenderId: "614563490215",
    appId: "1:614563490215:web:c980fbbcaabd48f2772e82"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };