document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll(".code-input");
    const form = document.getElementById("reset-form");
    const resetBtn = document.getElementById("reset-btn");
  
    // Automatically move to next input
    inputs.forEach((input, index) => {
      input.addEventListener("input", (e) => {
        if (e.target.value.length === 1 && index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      });
  
      // Handle backspace
      input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && index > 0 && !e.target.value) {
          inputs[index - 1].focus();
        }
      });
    });
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      // Check if all fields are filled
      const code = Array.from(inputs).map(input => input.value).join("");
      if (code.length === inputs.length && /^\d{4}$/.test(code)) {
        // Redirect to another page
        window.location.href = "resetpassword.html"; // Change to the desired URL
      } else {
        alert("Please enter a valid 4-digit code.");
      }
    });
  });
  