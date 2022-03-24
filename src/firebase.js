import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5FKJyzm5ziSWlBew5w2D2yj3vuZUwicw",
  authDomain: "auth-crash-25c19.firebaseapp.com",
  projectId: "auth-crash-25c19",
  storageBucket: "auth-crash-25c19.appspot.com",
  messagingSenderId: "354843264683",
  appId: "1:354843264683:web:4976b9d046f694bb3919ee",
  measurementId: "G-YGKLMV8CRX",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
