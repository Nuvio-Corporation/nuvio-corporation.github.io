import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

const auth = getAuth();

window.login = function() {
  // For demo purposes, prompt for email/password
  const email = prompt("Enter your AlJiVi-ID email:");
  const password = prompt("Enter your password:");

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Logged in successfully!");
      window.location = "index.html"; // redirect to main site or dashboard
    })
    .catch(err => {
      document.getElementById("error").innerText = err.message;
    });
};
