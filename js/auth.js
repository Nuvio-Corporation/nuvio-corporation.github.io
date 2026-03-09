// auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

// 1️⃣ Initialize Firebase here
const firebaseConfig = {
  apiKey: "AIzaSyB3XxIedMSt3UKzp6yjEJIPOUq18iIb2tU",
  authDomain: "aljivi-id.firebaseapp.com",
  projectId: "aljivi-id",
  storageBucket: "aljivi-id.firebasestorage.app",
  messagingSenderId: "994469586829",
  appId: "1:994469586829:web:44f46e1bee906db8c8ffc4",
  measurementId: "G-64W3GDWQBN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 2️⃣ Helper to get form values
function getValues() {
  return {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };
}

// 3️⃣ Login function
window.login = function() {
  const {email, password} = getValues();
  if (!email || !password) {
    document.getElementById("error").innerText = "Please enter email and password.";
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location = "index.html";
    })
    .catch(e => {
      document.getElementById("error").innerText = e.message;
    });
};

// 4️⃣ Signup function
window.signup = function() {
  const {email, password} = getValues();
  if (!email || !password) {
    document.getElementById("error").innerText = "Please enter email and password.";
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location = "index.html";
    })
    .catch(e => {
      document.getElementById("error").innerText = e.message;
    });
};
