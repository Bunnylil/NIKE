document.addEventListener("DOMContentLoaded", function () {
    const resetForm = document.getElementById("reset-form");
    const emailInput = document.getElementById("email");
  
    resetForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const email = emailInput.value.trim();
      if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
      }
  
      // Redirect to a confirmation page (change 'reset-success.html' as needed)
      window.location.href = "verificationcode.html";
    });
  
    function validateEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }
  });
  