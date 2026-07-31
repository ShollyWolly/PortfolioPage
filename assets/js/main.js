(function () {
  "use strict";

  function initFooterYear() {
    var yearNode = document.getElementById("year");
    if (yearNode) yearNode.textContent = new Date().getFullYear();
  }

  function initNavToggle() {
    var toggle = document.getElementById("nav-toggle");
    var links = document.getElementById("nav-links");
    if (!toggle || !links) return;

    function closeMenu() {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }

    function toggleMenu() {
      var isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    }

    toggle.addEventListener("click", toggleMenu);
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 640) closeMenu();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    APP.i18n.initI18n();
    APP.initContent();
    initFooterYear();
    initNavToggle();
  });
})();
