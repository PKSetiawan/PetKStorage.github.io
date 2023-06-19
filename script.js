function submitForm(event) {
  event.preventDefault();

  const passwordInput = document.getElementById('passwordInput');
  const message = document.getElementById('message');

  // Add your password validation logic here
  const password = 'Petkstorage'; // Replace with your actual password

  if (passwordInput.value === password) {
    // Password is correct
    message.textContent = 'Password correct. Redirecting...';
    message.style.color = 'green';
    message.style.display = 'block';

    setTimeout(() => {
      window.location.href = 'homepage.html'; // Redirect to homepage.html
    }, 2000); // Delay for 2 seconds before redirecting
  } else {
    // Password is incorrect
    message.textContent = 'Password incorrect. Please try again.';
    message.style.color = 'red';
    message.style.display = 'block';
  }
}
