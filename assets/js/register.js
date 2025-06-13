import {
  auth,
  createUserWithEmailAndPassword,
  sendEmailVerification
} from "./firebase.js";

document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("newEmail").value.trim();
  const password = document.getElementById("newPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const errorEl = document.getElementById("regError");

  if (password !== confirmPassword) {
    errorEl.textContent = "❌ Passwords do not match.";
    return;
  }

  if (password.length < 6) {
    errorEl.textContent = "❌ Password must be at least 6 characters.";
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Send email verification
      sendEmailVerification(userCredential.user)
        .then(() => {
          errorEl.style.color = "lime";
          errorEl.textContent = "✅ Registration successful! Verify your email before logging in.";
          // Optional: auto-redirect after few seconds
          setTimeout(() => {
            window.location.href = "login.html";
          }, 3000);
        });
    })
    .catch((error) => {
      errorEl.textContent = `❌ ${error.message}`;
    });
});
