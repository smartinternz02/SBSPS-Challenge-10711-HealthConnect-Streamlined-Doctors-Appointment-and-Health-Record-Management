
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth , GoogleAuthProvider } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCaPtuBYpssf3p0ZFeV40Cd5wOP4erIYTo",
//   authDomain: "moody-ae579.firebaseapp.com",
//   projectId: "moody-ae579",
//   storageBucket: "moody-ae579.appspot.com",
//   messagingSenderId: "200079976835",
//   appId: "1:200079976835:web:00e891af073fb938162eb6",
//   // measurementId: "G-NGGKGW2HX1"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export  const provider= new GoogleAuthProvider();
// export  const auth=getAuth();
// export default app;

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCaPtuBYpssf3p0ZFeV40Cd5wOP4erIYTo",
   authDomain: "moody-ae579.firebaseapp.com",
  projectId: "moody-ae579",
  storageBucket: "moody-ae579.appspot.com",
  messagingSenderId: "200079976835",
  appId: "1:200079976835:web:00e891af073fb938162eb6",
  measurementId: "G-NGGKGW2HX1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
