document.addEventListener("DOMContentLoaded", function () {
    const navbarHTML = `
    <!-- Top Navbar for desktop -->
    <nav class="navbar-desktop">
        <div class="navbar-container">
            <a href="/" class="navbar-logo">
                <img src="images/nuvio-logo.png" alt="Nuvio Logo" width="901" height="277">
            </a>
            <ul class="navbar-menu">
                <li><a href="/">Home</a></li>
                <li><a href="/about.html">About</a></li>
                <li><a href="/projects.html">Projects</a></li>
                <li><a href="/news.html">News</a></li>
                <li><a href="/contact.html">Contact</a></li>
            </ul>
        </div>
    </nav>

    <!-- Bottom Navbar for mobile -->
    <nav class="navbar-mobile">
        <ul class="navbar-mobile-menu">
            <li><a href="/">Home</a></li>
            <li><a href="/about.html">About</a></li>
            <li><a href="/projects.html">Projects</a></li>
        </ul>
    </nav>
    `;

    document.body.insertAdjacentHTML("afterbegin", navbarHTML);
});


