window.APP = window.APP || { data: {}, i18n: {} };

(function () {
  "use strict";

  var ICONS = {
    azure:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
      '<path d="M8.5 3h5.1l-5.3 15.4L2 20.5 8.5 3z"/>' +
      '<path d="M14.2 3.8 8.9 18.6h11.7L15 9.4h-5l1.7-4.9z"/>' +
      "</svg>",
    gcp:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
      '<path d="M14.5 8.3a5.6 5.6 0 0 0-5.4 4.1A4.3 4.3 0 0 0 5 16.6 4.3 4.3 0 0 0 9.3 21h9a4 4 0 0 0 .6-8 5.6 5.6 0 0 0-4.4-4.7z"/>' +
      "</svg>",
    onprem:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
      '<rect x="3" y="4" width="18" height="4.5" rx="1"/>' +
      '<rect x="3" y="10" width="18" height="4.5" rx="1"/>' +
      '<rect x="3" y="16" width="18" height="4.5" rx="1"/>' +
      "</svg>",
    calendar:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<rect x="3" y="5" width="18" height="16" rx="2"/>' +
      '<path d="M16 3v4M8 3v4M3 10h18"/>' +
      "</svg>"
  };

  function getIcon(key) {
    return ICONS[key] || "";
  }

  APP.icons = {
    getIcon: getIcon
  };
})();
