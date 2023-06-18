<!DOCTYPE html>
<html>
<head>
    <title>Password Protected Website</title>
</head>
<body>
    <h1>Enter the Password</h1>
    <form id="passwordForm" onsubmit="submitForm(event)">
        <input type="password" id="passwordInput" placeholder="Enter the password">
        <button type="submit">Submit</button>
    </form>
    <div id="message" style="display: none;"></div>

    <script>
        function submitForm(event) {
            event.preventDefault();
            var password = document.getElementById('passwordInput').value;
            
            // Replace 'your-password' with the actual password you want to use
            if (password === 'your-password') {
                window.location.href = 'home.html';
            } else {
                document.getElementById('message').textContent = 'Incorrect password. Please try again.';
                document.getElementById('message').style.display = 'block';
            }
        }
    </script>
</body>
</html>

