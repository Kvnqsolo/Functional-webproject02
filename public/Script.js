// script.js

document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.querySelector(".sub-form");
    const successMessage = document.getElementById("success-message");
    const successGif = document.getElementById("success-gif");
    let gifPlayed = false;

    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        // You can add your registration logic here

        // Display the success message and hide the form
        registrationForm.style.display = "none";
        successMessage.style.display = "block";

        // Play the GIF only once
        if (!gifPlayed) {
            successGif.src = "./successful.gif";
            gifPlayed = true;

            // Redirect to the login page after a delay (e.g., 3 seconds)
            setTimeout(function() {
                window.location.href = "login.html"; // Change to your login page URL
            }, 3000); // 3000 milliseconds (3 seconds) delay
        }
    });
});
