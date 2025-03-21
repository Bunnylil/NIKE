 // Firebase Imports (must be at the top)
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
 import {
   getAuth,
   signInWithPopup,
   GoogleAuthProvider
 } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

 // Firebase Configuration
 const firebaseConfig = {
   apiKey: "AIzaSyBbjwB8BGzzGeg3hYkNDMTIWY5kQ6xaTZQ",
   authDomain: "inceptor-7c036.firebaseapp.com",
   projectId: "inceptor-7c036",
   storageBucket: "inceptor-7c036.appspot.com",
   messagingSenderId: "251784547484",
   appId: "1:251784547484:web:46ce4a6da235ac75723159",
   measurementId: "G-10BE1RRDC2"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const provider = new GoogleAuthProvider();

 // Ensure DOM is fully loaded before executing scripts
 document.addEventListener("DOMContentLoaded", () => {
   
   // Password Strength Checker
   const passwordInput = document.getElementById("password");
   if (passwordInput) {
     passwordInput.addEventListener("input", function () {
       const password = this.value;
       const strengthDots = document.querySelectorAll(".strength-dot");
       let strength = 0;

       if (password.length >= 8) strength++; 
       if (/[A-Z]/.test(password)) strength++;
       if (/[0-9]/.test(password)) strength++;
       if (/[\W_]/.test(password)) strength++;

       // Update strength indicators
       strengthDots.forEach((dot, index) => {
         dot.classList.toggle("active", index < strength);
       });
     });
   }

   // Toggle Password Visibility
   const togglePasswordBtn = document.querySelector(".toggle-password");
   if (togglePasswordBtn) {
     togglePasswordBtn.addEventListener("click", () => {
       if (passwordInput.type === "password") {
         passwordInput.type = "text";
         togglePasswordBtn.classList.replace("fa-eye-slash", "fa-eye");
       } else {
         passwordInput.type = "password";
         togglePasswordBtn.classList.replace("fa-eye", "fa-eye-slash");
       }
     });
   }

// Google Sign-In Button
const googleButton = document.getElementById("google-signin");
if (googleButton) {
  googleButton.addEventListener("click", async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User signed in:", user);
      alert(`Welcome, ${user.displayName}!`);

      // Redirect to another page after successful sign-in
      window.location.href = "sload.html"; // Replace with your desired URL
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      alert(`Sign-In Failed: ${error.message}`);
    }
  });
}

   // Sign-Up Button
   const signupButton = document.getElementById("signup-btn");
   if (signupButton) {
     signupButton.addEventListener("click", (event) => {
       event.preventDefault(); // Prevent default form submission

       // Get all required fields
       const password = document.getElementById("password").value;
       const termsChecked = document.getElementById("terms").checked;

       // Validate if all fields are filled
       if (!password || !termsChecked) {
         alert("Please fill in all the required fields and agree to the terms.");
         return; // Stop execution if validation fails
       }

       // Simulate a successful sign-up (replace this with actual sign-up logic)
       const isSignUpSuccessful = true; // Assume sign-up is successful for this example

       if (isSignUpSuccessful) {
         alert("Sign up successful! Redirecting...");
         window.location.href = "sload.html"; // Redirect to the next page
       } else {
         alert("Sign up failed. Please try again.");
       }
     });
   }
 });