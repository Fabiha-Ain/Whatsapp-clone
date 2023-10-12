import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDiWrX1_KhhY5HTDWWydxHjge_jBP7-OII",
    authDomain: "whatsapp-clone-7dbbc.firebaseapp.com",
    projectId: "whatsapp-clone-7dbbc",
    storageBucket: "whatsapp-clone-7dbbc.appspot.com",
    messagingSenderId: "953865859700",
    appId: "1:953865859700:web:82641f405bcbc3ba8d9721",
    measurementId: "G-D782935F2V"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;