document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    const strengthDots = document.querySelectorAll('.strength-dot');
    let strength = 0;
    
    if (password.length > 0) strength++;
    if (password.length > 7) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    
    strengthDots.forEach((dot, index) => {
      dot.classList.toggle('active', index < strength);
    });
  });

  function togglePassword() {
    const passwordInput = document.getElementById("password");
    const toggleIcon = document.querySelector(".toggle-password");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleIcon.classList.remove("fa-eye-slash");
      toggleIcon.classList.add("fa-eye");
    } else {
      passwordInput.type = "password";
      toggleIcon.classList.remove("fa-eye");
      toggleIcon.classList.add("fa-eye-slash");
    }
  }