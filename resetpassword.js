document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const togglePasswordIcons = document.querySelectorAll(".toggle-password");
    const form = document.querySelector("form");
    const passwordStrengthIndicators = document.querySelectorAll(".password-strength");

    // Toggle password visibility
    togglePasswordIcons.forEach(icon => {
        icon.addEventListener("click", function () {
            const input = this.previousElementSibling;
            if (input.type === "password") {
                input.type = "text";
                this.classList.remove("fa-eye-slash");
                this.classList.add("fa-eye");
            } else {
                input.type = "password";
                this.classList.remove("fa-eye");
                this.classList.add("fa-eye-slash");
            }
        });
    });

    // Password strength checker
    function checkPasswordStrength(password, strengthIndicator) {
        const strengthDots = strengthIndicator.querySelectorAll(".strength-dot");
        let strength = 0;

        if (password.length >= 8) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^a-zA-Z0-9]/.test(password)) strength++;

        strengthDots.forEach((dot, index) => {
            if (index < strength) {
                dot.style.backgroundColor = "green";
            } else {
                dot.style.backgroundColor = "#ccc";
            }
        });
    }

    passwordInput.addEventListener("input", function () {
        checkPasswordStrength(passwordInput.value, passwordStrengthIndicators[0]);
    });

    confirmPasswordInput.addEventListener("input", function () {
        checkPasswordStrength(confirmPasswordInput.value, passwordStrengthIndicators[1]);
    });

    // Form submission validation
    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        if (passwordInput.value !== confirmPasswordInput.value) {
            alert("Passwords do not match. Please try again.");
            return;
        }

        // Redirect to another page if passwords match
        window.location.href = "sload.html"; 
    });
});
