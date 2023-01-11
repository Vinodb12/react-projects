import firebase from "firebase/compat/app";
import "firebase/compat/database"

const firebaseConfig = {
    apiKey: "AIzaSyBcY1ZujbUggPYoahzUUHZfp2nY5kBFhPs",
    authDomain: "contact-app-aca9b.firebaseapp.com",
    projectId: "contact-app-aca9b",
    storageBucket: "contact-app-aca9b.appspot.com",
    messagingSenderId: "238848855887",
    appId: "1:238848855887:web:ae950e14d186da33cc3f3a"
  };
  const fireDb =firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();
  
