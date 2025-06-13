// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAAlgR8b99MqimCwjarDHoS7dHZb-mFEnU",
  authDomain: "hackopsauthsystem.firebaseapp.com",
  projectId: "hackopsauthsystem",
  storageBucket: "hackopsauthsystem.firebasestorage.app",
  messagingSenderId: "352126488925",
  appId: "1:352126488925:web:fa7a3ab7a1e87447be18b4"
  measurementId: "G-Y34RFR893Q"
};

firebase.initializeApp(firebaseConfig);

// Login logic
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();  // use email not username
  const password = document.getElementById("password").value;
  const errorEl = document.getElementById("error");

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Successful login
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("authUser", email);
      window.location.href = "index.html"; // Redirect
    })
    .catch((error) => {
      errorEl.textContent = `❌ ${error.message}`;
    });
});
