let container = document.getElementById('container');
let registerBtn = document.getElementById('register');
let loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.addEventListener('DOMContentLoaded', function() {
    const passwordField = document.getElementById('passwordfield');
    const passwordField2 = document.getElementById('passwordfield2');
    const passwordField3 = document.getElementById('passwordfield3');
    const showPasswordToggle = document.getElementById('showPasswordToggle');
    const showPasswordToggle2 = document.getElementById('showPasswordToggle2');
    const showPasswordToggle3 = document.getElementById('showPasswordToggle3');

    if (passwordField && showPasswordToggle) {
        showPasswordToggle.addEventListener('change', function() {
            const type = this.checked ? 'text' : 'password';
            passwordField.type = type;
        });
    }

    if (passwordField2 && showPasswordToggle2) {
        showPasswordToggle2.addEventListener('change', function() {
            const type = this.checked ? 'text' : 'password';
            passwordField2.type = type;
        });
    }

    if (passwordField3 && showPasswordToggle3) {
        showPasswordToggle3.addEventListener('change', function() {
            const type = this.checked ? 'text' : 'password';
            passwordField3.type = type;
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const signUpForm = document.querySelector(".sign-up form");
    const signInForm = document.querySelector(".sign-in form");
    const signInEmailField = signInForm.querySelector('input[type="email"]');
    const signInPasswordField = signInForm.querySelector('#passwordfield3');

    // --- Registration Form Logic ---
    signUpForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let errors = {};

        // Username Validation
        const username = document.getElementById("usernamefield").value.trim();
        if (username === "") {
            errors.username = "Username field cannot be empty";
        }

        // Passwords Validation
        const passw1 = document.getElementById("passwordfield").value.trim();
        const passw2 = document.getElementById("passwordfield2").value.trim();

        if (passw1 === "") {
            errors.password = "Password field cannot be empty";
        }
        if (passw1 !== passw2) {
            errors.password2 = "Passwords do not match";
        }

        // Email Validation
        const emailValue = document.querySelector(".sign-up #email").value.trim();
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (emailValue === "") {
            errors.email = "Email field cannot be empty";
        } else if (!emailPattern.test(emailValue)) {
            errors.email = "Invalid email format";
        }

        // Reset previous errors
        signUpForm.querySelectorAll(".error-text").forEach(el => el.textContent = "");
        signUpForm.querySelector("#email-error").textContent = "";

        // Display new errors
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
            Cookies.set("userEmail", emailValue, { expires: 30 });
            Cookies.set("userPassword", passw1, { expires: 30 });
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

    // Function to autofill the Sign In form from cookies.
    function autofillSignInForm() {
        const savedEmail = Cookies.get("userEmail");
        const savedPassword = Cookies.get("userPassword");

        if (savedEmail && signInEmailField.value === '') {
            signInEmailField.value = savedEmail;
        }
        if (savedPassword && signInPasswordField.value === '') {
            signInPasswordField.value = savedPassword;
        }
    }

    signInEmailField.addEventListener('focus', autofillSignInForm);
    signInPasswordField.addEventListener('focus', autofillSignInForm);


    signInForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let errors = {};

        // Password Validation
        const password = document.querySelector(".sign-in #passwordfield3").value.trim();
        if (password === "") {
            errors.password = "Password field cannot be empty";
        }

        // Email Validation
        const emailValue = document.querySelector(".sign-in #email").value.trim();
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (emailValue === "") {
            errors.email = "Email field cannot be empty";
        } else if (!emailPattern.test(emailValue)) {
            errors.email = "Invalid email format";
        }

        // Reset previous errors
        signInForm.querySelectorAll(".error-text").forEach(el => el.textContent = "");
        signInForm.querySelector("#email-error").textContent = "";

        // Display new errors
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
            this.submit(); // Proceed with form submission if validation passes
        }
    });

    // Live validation for email in sign-in
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


// --- Navigation for Back Arrow ---
document.addEventListener("DOMContentLoaded", function () {
    const arrow = document.getElementById("arrow");

    arrow.addEventListener("click", function () {
        window.location.href = "index.html"; // Navigates back to index.html
    });
});

// Fetching and displaying the privacy policy text

fetch(`https://api.allorigins.win/get?url=https://www.freeprivacypolicy.com/live/c8a4bd6b-57ac-4a13-866a-8b5320c77e8f`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data.contents, 'text/html');

    // Finding the specific text in the document
    const paragraphs = doc.querySelectorAll('p');
    let targetText = '';

    paragraphs.forEach(p => {
      if (p.textContent.includes('We use Your Personal data to provide and improve the Service')) {
        targetText = p.textContent;
      }
    });

    const policyContainer = document.querySelector('.policy-container');

    if (targetText) {
      policyContainer.innerText = targetText;

      // Creating a link to the full document
      const link = document.createElement('a');
      link.href = 'https://www.freeprivacypolicy.com/live/c8a4bd6b-57ac-4a13-866a-8b5320c77e8f';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = 'Read the full Privacy Policy';
      link.style.display = 'block';
      link.style.marginTop = '15px';
      link.style.color = '#007BFF';
      link.style.textDecoration = 'none';
      link.onmouseover = () => link.style.textDecoration = 'underline';
      link.onmouseout = () => link.style.textDecoration = 'none';

      policyContainer.appendChild(link);

    } else {
      policyContainer.innerText = 'Text not found';
    }
  })
  .catch(err => {
    console.error(err);
    document.querySelector('.policy-container').innerText = 'Error fetching the privacy policy text';
  });