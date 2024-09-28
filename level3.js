function validateForm() {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessages = document.getElementById('errorMessages');
    
    errorMessages.innerHTML = '';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMessages.innerHTML += '<p style="color:red;">Invalid email format. Please enter a valid email address.</p>';
        return false; 
    }

    // Password validation
    if (password.length < 8) {
        errorMessages.innerHTML += '<p style="color:red;">Password must be at least 8 characters long.</p>';
        return false;
    }

    if (!/[A-Z]/.test(password)) {
        errorMessages.innerHTML += '<p style="color:red;">Password must contain at least one uppercase letter.</p>';
        return false;
    }

    if (!/[a-z]/.test(password)) {
        errorMessages.innerHTML += '<p style="color:red;">Password must contain at least one lowercase letter.</p>';
        return false;
    }

    if (!/[0-9]/.test(password)) {
        errorMessages.innerHTML += '<p style="color:red;">Password must contain at least one number.</p>';
        return false;
    }

    if (!/[!@#$%^&*]/.test(password)) {
        errorMessages.innerHTML += '<p style="color:red;">Password must contain at least one special character (e.g., !, @, #, $, etc.).</p>';
        return false;
    }

    // If all validations pass
    alert('Form submitted successfully!');
    return true;
}