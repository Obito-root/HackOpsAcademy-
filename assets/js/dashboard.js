import {
  auth,
  onAuthStateChanged,
  signOut
} from "./firebase.js";

// Dummy quiz data - to be replaced by Firestore later
const quizProgress = JSON.parse(localStorage.getItem("quizProgress")) || {
  linux: false,
  networking: false,
  xss: false
};

// Show user info and progress
onAuthStateChanged(auth, (user) => {
  if (!user || !user.emailVerified) {
    window.location.href = "login.html";
  } else {
    document.getElementById("userName").textContent = user.displayName || "Cyber Ghost";
    document.getElementById("userEmail").textContent = user.email;

    // Progress bars
    document.getElementById("linuxQuiz").value = quizProgress.linux ? 1 : 0;
    document.getElementById("networkingQuiz").value = quizProgress.networking ? 1 : 0;
    document.getElementById("xssQuiz").value = quizProgress.xss ? 1 : 0;

    // Detect specialization (example logic)
    const total = Object.values(quizProgress).filter(val => val).length;
    let specialization = "Beginner";
    if (quizProgress.xss && quizProgress.networking) specialization = "Web Pentester";
    if (quizProgress.linux && quizProgress.networking) specialization = "System Analyst";
    if (total === 3) specialization = "Advanced Cyber Warrior";

    document.getElementById("userSpecialization").textContent = specialization;
  }
});

// Logout button
document.getElementById("logoutBtn").addEventListener("click", () => {
  signOut(auth).then(() => {
    localStorage.removeItem("quizProgress");
    window.location.href = "login.html";
  });
});
