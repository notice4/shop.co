let container = document.getElementById('container');
let registerBtn = document.getElementById('register');
let loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


//
document.addEventListener("DOMContentLoaded", function () {

    // Registration
    const signUpForm = document.querySelector(".sign-up form");

    signUpForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let errors = {};

        // Username
        const username = document.getElementById("usernamefield").value.trim();
        if (username === "") {
            errors.username = "Username field cannot be empty";
        }

        // Passwords
        const passw1 = document.getElementById("passwordfield").value.trim();
        const passw2 = document.getElementById("passwordfield2").value.trim();

        if (passw1 === "") {
            errors.password = "Password field cannot be empty";
        }
        if (passw1 !== passw2) {
            errors.password2 = "Passwords do not match";
        }

        // Email
        const emailValue = document.querySelector(".sign-up #email").value.trim();
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (emailValue === "") {
            errors.email = "Email field cannot be empty";
        } else if (!emailPattern.test(emailValue)) {
            errors.email = "Invalid email format";
        }

        // Reset Errors
        signUpForm.querySelectorAll(".error-text").forEach(el => el.textContent = "");
        signUpForm.querySelector("#email-error").textContent = "";

        // Print Errors
        for (let key in errors) {
            const errorElement = document.getElementById("error-" + key);
            if (errorElement) {
                errorElement.textContent = errors[key];
            }
            if (key === "email") {
                signUpForm.querySelector("#email-error").textContent = errors[key];
            }
        }

        if (Object.keys(errors).length === 0) {
            this.submit();
        }
    });

    // Live validation for email in sign-up
    const emailInputSignUp = document.querySelector(".sign-up #email");
    emailInputSignUp.addEventListener("keyup", function () {
        const emailValue = this.value.trim();
        const pError = signUpForm.querySelector("#email-error");
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (emailValue === "") {
            pError.textContent = "";
        } else if (pattern.test(emailValue)) {
            pError.textContent = "Your Email is Valid";
            pError.style.color = "green";
        } else {
            pError.textContent = "Your Email is Invalid";
            pError.style.color = "red";
        }
    });


    // Sign In
    const signInForm = document.querySelector(".sign-in form");

    signInForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let errors = {};

        // Password
        const password = document.querySelector(".sign-in #passwordfield").value.trim();
        if (password === "") {
            errors.password = "Password field cannot be empty";
        }

        // Email
        const emailValue = document.querySelector(".sign-in #email").value.trim();
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (emailValue === "") {
            errors.email = "Email field cannot be empty";
        } else if (!emailPattern.test(emailValue)) {
            errors.email = "Invalid email format";
        }

        // Reset Errors
        signInForm.querySelectorAll(".error-text").forEach(el => el.textContent = "");
        signInForm.querySelector("#email-error").textContent = "";

        // Print Errors
        for (let key in errors) {
            const errorElement = signInForm.querySelector("#error-" + key);
            if (errorElement) {
                errorElement.textContent = errors[key];
            }
            if (key === "email") {
                signInForm.querySelector("#email-error").textContent = errors[key];
            }
        }

        if (Object.keys(errors).length === 0) {
            this.submit();
        }
    });

    // Validation for email in sign-in
    const emailInputSignIn = document.querySelector(".sign-in #email");
    emailInputSignIn.addEventListener("keyup", function () {
        const emailValue = this.value.trim();
        const pError = signInForm.querySelector("#email-error");
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (emailValue === "") {
            pError.textContent = "";
        } else if (pattern.test(emailValue)) {
            pError.textContent = "Your Email is Valid";
            pError.style.color = "green";
        } else {
            pError.textContent = "Your Email is Invalid";
            pError.style.color = "red";
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const arrow = document.getElementById("arrow");

    arrow.addEventListener("click", function () {
        window.location.href = "index.html";
    });
});

// 

