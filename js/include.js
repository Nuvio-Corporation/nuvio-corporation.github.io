// 1. Preconnect naar Google Fonts API
const preconnect1 = document.createElement('link');
preconnect1.rel = 'preconnect';
preconnect1.href = 'https://fonts.googleapis.com';
document.head.appendChild(preconnect1);

// 2. Preconnect naar Gstatic (voor de font-bestanden)
const preconnect2 = document.createElement('link');
preconnect2.rel = 'preconnect';
preconnect2.href = 'https://fonts.gstatic.com';
preconnect2.crossOrigin = 'anonymous'; // Belangrijk voor CORS
document.head.appendChild(preconnect2);

// 3. De daadwerkelijke Nunito Sans stylesheet link
const fontStylesheet = document.createElement('link');
fontStylesheet.rel = 'stylesheet';
fontStylesheet.href = 'https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap';
document.head.appendChild(fontStylesheet);

document.addEventListener("DOMContentLoaded", function () {
    const navbarHTML = `
    <!-- Top Navbar for desktop -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    <nav class="navbar-desktop">
        <div class="navbar-container">
            <a href="/" class="navbar-logo">
                <img src="/images/nuvio-logo.png" alt="Nuvio Logo" width="901" height="277">
            </a>
            <ul class="navbar-menu">
                <li><a href="/"><i class="fa fa-house"></i> Home</a></li>
                <li><a href="/about.html"><i class="fa fa-info"></i> About</a></li>
                <li><a href="/projects.html"><i class="fa fa-server"></i> Projects</a></li>
                <li><a href="/news.html"><i class="fa fa-globe"></i> News</a></li>
                <li><a href="/contact.html"><i class="fa fa-envelope"></i> Contact</a></li>
            </ul>
        </div>
    </nav>
`
    document.body.insertAdjacentHTML("afterbegin", navbarHTML);
    }
        );
