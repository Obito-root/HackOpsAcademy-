import {
  auth,
  signInWithEmailAndPassword
} from "./assets/js/firebase.js";

// ✅ This alert helps check if login.js is loading correctly
alert("✅ login.js loaded!");

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

        // ✅ This alert confirms successful login before redirect
        alert("✅ Login successful, redirecting to index.html...");

        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("authUser", user.email);

        window.location.href = "index.html";
      })
      .catch((error) => {
        errorEl.textContent = `❌ ${error.message}`;
      });
  });
});
