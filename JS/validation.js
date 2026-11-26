// Capitalize the first letter
function capitalizeFirstLetter(input) {
    let value = input.value.trim();

    input.value = value.charAt(0).toUpperCase()
                  + value.slice(1);
}

// Capitalize first name, last name, and city
const fields = ["firstName", "lastName", "city"];

fields.forEach(function(id) {
    const input = document.getElementById(id);

    input.addEventListener("blur", function() {
        capitalizeFirstLetter(input);
    });
});

// Contact form elements
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");
const email = document.getElementById("email");
const zip = document.getElementById("zip");

// JavaScript email validation
function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value.trim())) {
        email.setCustomValidity(
            "Please enter a valid email address."
        );
    } else {
        email.setCustomValidity("");
    }
}

// JavaScript ZIP code validation
function validateZip() {
    const zipPattern = /^[0-9]{5}$/;

    if (!zipPattern.test(zip.value.trim())) {
        zip.setCustomValidity(
            "Please enter a valid 5-digit ZIP code."
        );
    } else {
        zip.setCustomValidity("");
    }
}

// Validate fields while the visitor types
email.addEventListener("input", validateEmail);
zip.addEventListener("input", validateZip);

// Contact form submission
form.addEventListener("submit", function(event) {
    event.preventDefault();

    status.textContent = "";

    fields.forEach(function(id) {
        capitalizeFirstLetter(document.getElementById(id));
    });

    validateEmail();
    validateZip();

    if (form.reportValidity()) {
        status.textContent =
            "Thank you! Your form was successfully validated. "
            + "This is a demonstration website.";
    }
});

// Clear confirmation and validation messages
form.addEventListener("reset", function() {
    status.textContent = "";
    email.setCustomValidity("");
    zip.setCustomValidity("");
});
