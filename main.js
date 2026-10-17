
const loginForm = document.getElementById("loginForm");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const togglePassword = document.getElementById("togglePassword");
const message = document.getElementById("message");

// Show or hide password
togglePassword.addEventListener("click", function () {

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        togglePassword.textContent = "Show";
    }

});

// Handle form submission
loginForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    // Validate email
    if (email === "" || !emailInput.validity.valid) {
        message.textContent = "Please enter a valid email address.";
        message.style.color = "red";
        return;
    }

    // Validate password length
    if (password.length < 6) {
        message.textContent = "Password must contain at least 6 characters.";
        message.style.color = "red";
        return;
    }

    // Display success message
    message.textContent = "Form validated successfully!";
    message.style.color = "green";

    console.log("Email:", email);
    console.log("Password validation passed.");

});

// Forgot password link
document.getElementById("forgotPassword").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Please connect a password recovery feature.");
});

// Sign up link
document.getElementById("signupLink").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Please connect a registration page.");
});

