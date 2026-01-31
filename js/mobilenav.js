// 1. Preconnect naar Google Fonts API
const preconnect1 = document.createElement('link');
preconnect1.rel = 'preconnect';
preconnect1.href = 'https://fonts.googleapis.com';
document.head.appendChild(preconnect1);

// 2. Preconnect naar Gstatic (voor de font-bestanden)
const preconnect2 = document.createElement('link');
preconnect2.rel = 'preconnect';
preconnect2.href = 'https://fonts.gstatic.com';
preconnect2.crossOrigin = 'anonymous';
document.head.appendChild(preconnect2);

// 3. Nunito Sans stylesheet
const fontStylesheet = document.createElement('link');
fontStylesheet.rel = 'stylesheet';
fontStylesheet.href =
  'https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap';
document.head.appendChild(fontStylesheet);

// 4. Font Awesome (ONLY ONCE, correct place)
const faStylesheet = document.createElement('link');
faStylesheet.rel = 'stylesheet';
faStylesheet.href =
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css';
document.head.appendChild(faStylesheet);

document.addEventListener("DOMContentLoaded", function () {
    const navbarHTML = `
<style>
#mobile-bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #ddd;
  padding: 6px 0;
  z-index: 9999;
  font-family: 'Nunito Sans', sans-serif;
}

/* Only show on small screens */
@media (min-width: 768px) {
  #mobile-bottom-nav {
    display: none;
  }
}

#mobile-bottom-nav .nav-item {
  text-align: center;
  flex: 1;
  color: #333;
  text-decoration: none;
  font-size: 12px;
}

#mobile-bottom-nav .nav-item i {
  display: block;
  font-size: 18px;
}

#mobile-bottom-nav .nav-item:hover {
  color: #0000FF;
}

.icon-image {
  width: 2em;
  height: 2em;
  object-fit: contain;
}

.icon-image:hover {
  filter: brightness(0) saturate(100%) invert(7%) sepia(100%)
          saturate(7333%) hue-rotate(248deg)
          brightness(112%) contrast(143%);
}
</style>

<div id="mobile-bottom-nav">
  <a href="/" class="nav-item">
    <i class="fa fa-home"></i>
  </a>

  <a href="/links.html" class="nav-item">
    <i class="fa fa-sitemap"></i>
  </a>

  <a href="/projects.html" class="nav-item">
    <i class="fa fa-server"></i>
  </a>

  <a href="https://nuvioplanet.odoo.com" class="nav-item">
    <img
      src="https://nuvioplanet.odoo.com/web/image/867-5b6b4b91/Untitled%20design.svg"
      class="icon-image"
      alt="nuvio logo"
      loading="lazy"
    >
  </a>

  <a href="#" class="nav-item" onclick="history.back(); return false;">
    <i class="fa fa-reply"></i>
  </a>
</div>
`;

  document.body.insertAdjacentHTML("afterbegin", navbarHTML);
});
