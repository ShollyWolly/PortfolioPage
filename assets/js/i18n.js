window.APP = window.APP || { data: {}, i18n: {} };

(function () {
  "use strict";

  var SUPPORTED_LANGS = ["de", "en"];
  var DEFAULT_LANG = "de";
  var STORAGE_KEY = "site:lang";

  function resolveKey(dict, path) {
    var parts = path.split(".");
    var node = dict;
    for (var i = 0; i < parts.length; i++) {
      if (node == null || !(parts[i] in node)) {
        console.warn("[i18n] missing key:", path);
        return undefined;
      }
      node = node[parts[i]];
    }
    return node;
  }

  function getInitialLang() {
    try {
      var stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored && SUPPORTED_LANGS.indexOf(stored) !== -1) {
        return stored;
      }
    } catch (e) {
      /* localStorage unavailable (e.g. privacy mode) - fall through to default */
    }
    var documentLang = document.documentElement.lang;
    if (SUPPORTED_LANGS.indexOf(documentLang) !== -1) return documentLang;
    return DEFAULT_LANG;
  }

  var currentLang = DEFAULT_LANG;

  function t(path) {
    var dict = APP.i18n[currentLang];
    var value = resolveKey(dict, path);
    if (value === undefined) return path;
    return value;
  }

  function applyStaticBindings(lang) {
    var dict = APP.i18n[lang];

    var titleValue = resolveKey(dict, "meta.title");
    if (titleValue) document.title = titleValue;

    var htmlLangValue = resolveKey(dict, "meta.htmlLang");
    document.documentElement.lang = htmlLangValue || lang;

    var nodes = document.querySelectorAll("[data-i18n-key]");
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      var key = node.getAttribute("data-i18n-key");
      var value = resolveKey(dict, key);
      if (value === undefined) continue;

      var attr = node.getAttribute("data-i18n-attr");
      if (attr) {
        node.setAttribute(attr, value);
      } else {
        node.textContent = value;
      }
    }
  }

  function updateToggleState(lang) {
    var buttons = document.querySelectorAll("#lang-toggle [data-lang]");
    for (var i = 0; i < buttons.length; i++) {
      var isActive = buttons[i].getAttribute("data-lang") === lang;
      buttons[i].classList.toggle("is-active", isActive);
      buttons[i].setAttribute("aria-pressed", String(isActive));
    }
  }

  function applyLanguage(lang) {
    currentLang = lang;
    applyStaticBindings(lang);
    updateToggleState(lang);
    window.dispatchEvent(new CustomEvent("langchange", { detail: { lang: lang } }));
  }

  function setLanguage(lang) {
    if (SUPPORTED_LANGS.indexOf(lang) === -1) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* ignore - persistence is a nice-to-have, not a requirement */
    }
    applyLanguage(lang);
  }

  function renderLangToggle() {
    var mount = document.getElementById("lang-toggle");
    if (!mount) return;
    mount.innerHTML = "";
    SUPPORTED_LANGS.forEach(function (lang) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "lang-toggle__button";
      button.setAttribute("data-lang", lang);
      button.setAttribute("aria-pressed", "false");
      button.textContent = lang.toUpperCase();
      button.addEventListener("click", function () {
        setLanguage(lang);
      });
      mount.appendChild(button);
    });
  }

  function initI18n() {
    renderLangToggle();
    applyLanguage(getInitialLang());
  }

  APP.i18n.t = t;
  APP.i18n.initI18n = initI18n;
  APP.i18n.setLanguage = setLanguage;
})();
