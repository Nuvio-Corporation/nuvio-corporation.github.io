function appendHeadLink(rel, href, crossOrigin) {
  if (document.querySelector('link[href="' + href + '"]')) {
    return;
  }

  var link = document.createElement("link");
  link.rel = rel;
  link.href = href;
  if (crossOrigin) {
    link.crossOrigin = crossOrigin;
  }
  document.head.appendChild(link);
}

function appendScript(src) {
  if (document.querySelector('script[src="' + src + '"]')) {
    return;
  }

  var script = document.createElement("script");
  script.src = src;
  script.defer = true;
  document.head.appendChild(script);
}

appendHeadLink("preconnect", "https://fonts.googleapis.com");
appendHeadLink("preconnect", "https://fonts.gstatic.com", "anonymous");
appendHeadLink(
  "stylesheet",
  "https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap"
);
appendHeadLink(
  "stylesheet",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
);
appendScript("/auth.js");

document.addEventListener("DOMContentLoaded", function () {
  var navbarHTML =
    '<nav class="navbar-desktop">' +
    '  <div class="navbar-container">' +
    '    <a href="/" class="navbar-logo">' +
    '      <img src="/images/nuvio-logo.png" alt="Nuvio Logo" width="901" height="277">' +
    "    </a>" +
    '    <ul class="navbar-menu">' +
    '      <li><a href="/"><i class="fa fa-house"></i> Home</a></li>' +
    '      <li><a href="/about.html"><i class="fa fa-info"></i> About</a></li>' +
    '      <li><a href="/projects.html"><i class="fa fa-server"></i> Projects</a></li>' +
    '      <li><a href="/news.html"><i class="fa fa-globe"></i> News</a></li>' +
    '      <li><a href="/contact.html"><i class="fa fa-envelope"></i> Contact</a></li>' +
    "    </ul>" +
    '    <div class="navbar-auth" aria-live="polite">' +
    '      <a class="btn auth-login-link" data-auth="guest login-link" href="/login.html">Log in</a>' +
    '      <div class="auth-user-chip" data-auth="user" hidden>' +
    '        <span class="auth-user-email" data-auth="email"></span>' +
    '        <button class="sbasic" type="button" data-auth="logout">Log out</button>' +
    "      </div>" +
    "    </div>" +
    "  </div>" +
    "</nav>";

  document.body.insertAdjacentHTML("afterbegin", navbarHTML);
});
