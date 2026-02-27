
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
    let form = event.target;

    // Reset validation
    form.classList.remove("was-validated");

    // Check password match
    let password = document.getElementById("password");
    let repeatPassword = document.getElementById("repeat-password");
    if (password.value !== repeatPassword.value) {
        repeatPassword.setCustomValidity("Passwords do not match");
    } else {
        repeatPassword.setCustomValidity("");
    }

    // Trigger validation
    if (!form.checkValidity()) {
        event.stopPropagation();
    } else {
        alert("Form submitted successfully!");
        // You can replace this with actual form submission logic
    }

    form.classList.add("was-validated");
});
