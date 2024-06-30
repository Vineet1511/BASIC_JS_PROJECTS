document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    // Username validation
    const username = document.getElementById('username').value;
    const usernameError = document.getElementById('usernameError');
    if (username === '') {
        usernameError.textContent = 'Username is required';
        usernameError.style.display = 'block';
        isValid = false;
    } else {
        usernameError.style.display = 'none';
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Invalid email address';
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Password validation
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        passwordError.style.display = 'none';
    }

    // Confirm Password validation
    const confirmPassword = document.getElementById('confirmPassword').value;
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match';
        confirmPasswordError.style.display = 'block';
        isValid = false;
    } else {
        confirmPasswordError.style.display = 'none';
    }

    if (isValid) {
        alert('Registration successful!');
        // Submit form or do whatever you want upon successful validation
    }
});
