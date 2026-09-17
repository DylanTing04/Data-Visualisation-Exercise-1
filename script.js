document.addEventListener("DOMContentLoaded", () => {
  const navContainer = document.getElementById("navbar-pl");
  if (!navContainer) return;

  const rawPath = window.location.pathname.split("/").pop();
  const currentPage = (!rawPath || rawPath === "") ? "index.html" : rawPath;

  navContainer.innerHTML = `
    <header class="site-header">
      <div class="navbar">
        <a href="index.html">
          <img src="PowerIcon.png" alt="Power Logo" class="power-logo" />
        </a>
        <nav class="nav-menu">
          <a href="index.html" class="nav-link ${currentPage === "index.html" ? "active" : ""}">Home</a> 
          <a href="Televisions.html" class="nav-link ${currentPage === "Televisions.html" ? "active" : ""}">Televisions</a>
          <a href="About.html" class="nav-link ${currentPage === "About.html" ? "active" : ""}">About Us</a>
        </nav>
      </div>
    </header>
  `;
});
