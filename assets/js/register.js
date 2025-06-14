import {
  auth,
  createUserWithEmailAndPassword,
  sendEmailVerification
} from "./assets/js/firebase.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");
  const errorEl = document.getElementById("regError");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("newEmail").value.trim();
    const password = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // ✅ Validation
    if (password !== confirmPassword) {
      errorEl.textContent = "❌ Passwords do not match.";
      return;
    }

    if (password.length < 6) {
      errorEl.textContent = "❌ Password must be at least 6 characters.";
      return;
    }

    // ✅ Firebase Registration
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        return sendEmailVerification(userCredential.user);
      })
      .then(() => {
        errorEl.style.color = "lime";
        errorEl.textContent = "✅ Registration successful! Verify your email before logging in.";
        setTimeout(() => {
          window.location.href = "login.html";
        }, 3000);
      })
      .catch((error) => {
        errorEl.textContent = `❌ ${error.message}`;
      });
  });
});
