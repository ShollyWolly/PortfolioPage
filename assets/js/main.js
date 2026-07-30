(function () {
  "use strict";

  function initFooterYear() {
    var yearNode = document.getElementById("year");
    if (yearNode) yearNode.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    APP.i18n.initI18n();
    APP.initContent();
    initFooterYear();
  });
})();
