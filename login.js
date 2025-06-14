import {
  auth,
  signInWithEmailAndPassword
} from "./assets/js/firebase.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const errorEl = document.getElementById("error");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        if (!user.emailVerified) {
          errorEl.textContent = "⚠️ Please verify your email before logging in.";
          return;
        }

        // Save login state
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("authUser", user.email);

        // Redirect to home/dashboard
        window.location.href = "./index.html";
      })
      .catch((error) => {
        errorEl.textContent = `❌ ${error.message}`;
      });
  });
});
