// Dynamically inserts the navbar into pages
document.addEventListener("DOMContentLoaded", function () {
    const navbarHTML = `
    <nav class="navbar">
        <div class="navbar-container">
            <a href="index.html" class="navbar-logo">
                <img src="images/nuvio-logo.png" alt="Nuvio Logo" width="901" height="277">
            </a>
            <ul class="navbar-menu">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="news.html">News</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </div>
    </nav>
    `;

    // Insert navbar at the top of body
    document.body.insertAdjacentHTML("afterbegin", navbarHTML);
});
