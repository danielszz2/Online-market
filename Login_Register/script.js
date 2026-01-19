// script.js

// Background images
const loginBg = '../assets/images/bg1.jpg'; // Login uses bg2
const registerBg = '../assets/images/bg2.jpg'; // Register uses bg3

// Set initial background
document.body.style.backgroundImage = `url('${loginBg}')`;

// Go to main page when login/register button clicked
function goToMain() {
  window.location.href = "../index.html";
}

// Toggle between Login and Register forms
function toggleForms() {
  const loginCard = document.getElementById('login-card');
  const registerCard = document.getElementById('register-card');

  const isRegisterVisible = !registerCard.classList.contains('hidden');

  // Toggle visibility
  loginCard.classList.toggle('hidden');
  registerCard.classList.toggle('hidden');

  // Change background based on visible form
  if (!isRegisterVisible) {
    // Showing Register
    document.body.style.backgroundImage = `url('${registerBg}')`;
  } else {
    // Showing Login
    document.body.style.backgroundImage = `url('${loginBg}')`;
  }
}




