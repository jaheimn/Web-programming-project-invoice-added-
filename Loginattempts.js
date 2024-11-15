let attempts = 0;
const maxAttempts = 3;
const correctPassword = "password"; 

function checkPassword() {
    const passwordInput = document.getElementById("password").value;
    const message = document.getElementById("message");
    const loginContainer = document.getElementById("login-container");
    const errorScreen = document.getElementById("error-screen");

    if (passwordInput === correctPassword) {
        message.textContent = "Access Granted!";
        message.style.color = "green";
    } else {
        attempts++;
        message.textContent = `Incorrect password. Attempts: ${attempts}`;

        if (attempts >= maxAttempts) {
            loginContainer.style.display = "none"; 
            errorScreen.style.display = "block"; 
        }
    }
}
