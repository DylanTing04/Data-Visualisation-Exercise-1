document.addEventListencer("DOMContentLoaded",() => {
  const navContainer = document.GetElementByID("navbar-pl");
  if (!navContainer) return;

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  navContainer.innerHTML = `<header>
  <div class = "navbar">
    <a href="index.html">
      <img src="PowerIcon.png" alt="Power Logo" class="power-logo" /> 
    </a>
    <nav class="nav=menu">
      <a href="index.html" class = "nav-link ${currentPage === "index.html" ? "active" : ""}">Index</a>
      <a href="home.html" class = "nav-link ${currentPage === "home.html" ? "active" : ""}">Home</a>
      <a href="television.html" class = "nav-link ${currentPage === "televisions.html" ? "active" : ""}">Television</a>
      <a href="about.html" class = "nav-link ${currentPage === "about.html" ? "active" : ""}">About Us</a>
    </nav>
  </header>`;
});
