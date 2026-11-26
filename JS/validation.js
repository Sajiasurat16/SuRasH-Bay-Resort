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

// Contact form submission
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    fields.forEach(function(id) {
        capitalizeFirstLetter(document.getElementById(id));
    });

    if (form.reportValidity()) {
        status.textContent =
            "Thank you! Your form was successfully validated. "
            + "This is a demonstration website.";
    }
});

// Clear confirmation message when resetting the form
form.addEventListener("reset", function() {
    status.textContent = "";
});
