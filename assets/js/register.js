document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("newUsername").value.trim();
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

  // Load existing users or empty array
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if username already exists
  const userExists = users.find((user) => user.username === username);
  if (userExists) {
    errorEl.textContent = "❌ Username already taken.";
    return;
  }

  // Add new user
  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));

  // Login the user automatically
  localStorage.setItem("authUser", username);
  localStorage.setItem("isLoggedIn", "true");

  // Redirect to dashboard
  window.location.href = "dashboard.html";
});
