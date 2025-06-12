document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const errorEl = document.getElementById("error");

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const matchedUser = users.find(
    (user) => user.username === username && user.password === password
  );

  if (matchedUser) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("authUser", username);
    window.location.href = "index.html";
  } else {
    errorEl.textContent = "❌ Invalid username or password.";
  }
});
