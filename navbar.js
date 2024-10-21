
const isLoggedIn = localStorage.getItem('isLoggedIn');
const navLinks = document.getElementById('nav-links');

if (isLoggedIn) {
    // If logged in, show the following links
    navLinks.innerHTML = `
        <li><a href="index.html">Home</a></li>
        <li><a href="therapist.html">Therapists</a></li>
        <li><a href="appointment.html">Appointments</a></li>
        <li><a href="contact.html">Contact Us</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="#" onclick="logout()">Logout</a></li>
    `;
} else {
    // If not logged in, show these links
    navLinks.innerHTML = `
        <li><a href="index.html">Home</a></li>
        <li><a href="therapist.html">Therapists</a></li>
        <li><a href="contact.html">Contact Us</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="login.html">Login</a> / <a href="signup.html">Signup</a></li>
    `;
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.reload();
}
