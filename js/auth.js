import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

const auth = getAuth();

window.login = function() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    document.getElementById("error").innerText = "Please enter email and password.";
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location = "index.html"; // redirect after login
    })
    .catch(err => {
      document.getElementById("error").innerText = err.message;
    });
};

// Optional: function to create a new account
window.signup = function() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    document.getElementById("error").innerText = "Please enter email and password.";
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location = "index.html";
    })
    .catch(err => {
      document.getElementById("error").innerText = err.message;
    });
};
