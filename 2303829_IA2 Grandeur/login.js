const defUsername = "Dreamer";
const passkey = "Password";

// Display message while password is less than 8 characters and disables login button 
function validate(x) {
    let pass = document.getElementById("password").value;
    if (pass.length >= 8) {
        x.innerHTML = "";
    } else {
        x.innerHTML = "Password should be 8 or more characters";
    }
}

// Removes message when focus is outside of password field
document.getElementById("password").onblur = function() {
    document.getElementById("check").style.display = 'none';
}

let fail_counter = 0;

// Functions to convert and revert inputs to strings
function stringify(item) {
    return JSON.stringify(item);
}

function getitem(item) {
    return JSON.parse(localStorage.getItem(item));
}

document.getElementById("loginBtn").onclick = function(e) {
    e.preventDefault(); // Prevents the default button behavior
    const password = document.getElementById("password").value;
    const username = document.getElementById("username").value; // Change 'user' to 'username'

    // Validate password length before attempting to login
    if (password.length < 8) {
        alert("Password should be 8 or more characters");
        return;
    }

    // Storing the information in local storage
    localStorage.setItem("StoredUser ", stringify(username));
    localStorage.setItem("StoredPassword", stringify(password));

    // Retrieve stored values
    const storedUser  = getitem("StoredUser ");
    const storedPassword = getitem("StoredPassword");

    // Check credentials
    if (storedUser  === defUsername && storedPassword === passkey) {
        window.location.href = "grandeur.html";
    } else {
        fail_counter++;
        window.alert(`Incorrect login. You have 3 tries. Current try: ${fail_counter}`);
        if (fail_counter >= 3) {
            window.location.href = "errorpg.html";
        }
    }
};