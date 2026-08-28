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
      document.body.classList.remove("nav-menu-open");
      updateToggleLabel();
    }

    function toggleMenu() {
      var isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      document.body.classList.toggle("nav-menu-open", isOpen);
      updateToggleLabel();
    }

    function updateToggleLabel() {
      var key = toggle.getAttribute("aria-expanded") === "true"
        ? "nav.menuCloseAria"
        : "nav.menuToggleAria";
      toggle.setAttribute("aria-label", APP.i18n.t(key));
    }

    toggle.addEventListener("click", toggleMenu);
    links.addEventListener("click", function (event) {
      if (event.target.closest("a, [data-lang]")) closeMenu();
    });
    document.addEventListener("keydown", function (event) {
      if (event.key !== "Escape" || toggle.getAttribute("aria-expanded") !== "true") return;
      closeMenu();
      toggle.focus();
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 760) closeMenu();
    });
    window.addEventListener("langchange", updateToggleLabel);
    updateToggleLabel();
  }

  document.addEventListener("DOMContentLoaded", function () {
    APP.i18n.initI18n();
    APP.initContent();
    initFooterYear();
    initNavToggle();
  });
})();
