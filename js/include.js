document.addEventListener("DOMContentLoaded", function () {
    const navbarHTML = `
    <!-- Top Navbar for desktop -->
    <nav class="navbar-desktop">
        <div class="navbar-container">
            <a href="/" class="navbar-logo">
                <img src="/images/nuvio-logo.png" alt="Nuvio Logo" width="901" height="277">
            </a>
            <ul class="navbar-menu">
                <li><a href="/"><i class="fa fa-house"></i>Home</a></li>
                <li><a href="/about.html"><i class="fa fa-info"></i>About</a></li>
                <li><a href="/projects.html"><i class="fa fa-book"></i>Projects</a></li>
                <li><a href="/news.html"><i class="fa fa-newspaper-o"></i>News</a></li>
                <li><a href="/contact.html"><i class="envelope"></i>Contact</a></li>
            </ul>
        </div>
    </nav>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
<style>
    #mobile-bottom-nav {
        position: fixed;
        bottom: 0;
        height: 3em; /* Iets verhoogd voor betere klikruimte */
        left: 0;
        right: 0;
        background: #fff;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-top: 1px solid #ddd;
    }

    @media (min-width: 768px) {
        #mobile-bottom-nav { display: none; }
    }

    #mobile-bottom-nav .nav-item {
        text-align: center;
        flex: 1;
        color: #333;
        text-decoration: none;
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #mobile-bottom-nav .nav-item i {
        display: block;
        font-size: 18px;
    }

    /* De styling voor je specifieke logo-afbeelding */
    .icon-image {
        width: 2em;
        height: 2em;
        object-fit: contain;
        transition: filter 0.2s ease; /* Zorgt voor een vloeiende kleurovergang */
    }

    /* De blauwe kleur bij hover (jouw specifieke filter) */
    #mobile-bottom-nav .nav-item:hover {
        color: #007bff;
    }

    #mobile-bottom-nav .nav-item:hover .icon-image {
        filter: brightness(0) saturate(100%) invert(30%) sepia(88%) saturate(1784%) hue-rotate(198deg) brightness(100%) contrast(111%);
    }
</style>

<div id="mobile-bottom-nav">
    <a href="/" class="nav-item">
        <i class="fa fa-home"></i>
    </a>
    <a href="https://nuvioplanet.odoo.com" class="nav-item">
        <i class="fa fa-book"></i>
    </a>
    
    <a href="/planet/" class="nav-item">
        <img src="https://nuvioplanet.odoo.com/web/image/867-5b6b4b91/Untitled%20design.svg" class="icon-image" alt="nuvio logo" loading="lazy" href="/mobile/app/planet/">
    </a>
    <a href="javascipt:history.back()" class="nav-item">
        <i class="fa fa-reply"></i>
    </a>
    <a href="/projects.html" class="nav-item">
        <i class="fa fa-user"></i>
    </a>
    /* Only show on small screens */
@media (min-width: 768px) {
    #mobile-bottom-nav {
        display: none;
    }
}
</div>

    `;

    document.body.insertAdjacentHTML("afterbegin", navbarHTML);
});




