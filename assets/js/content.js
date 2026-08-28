window.APP = window.APP || { data: {}, i18n: {} };

(function () {
  "use strict";

  function byOrder(a, b) {
    return a.order - b.order;
  }

  function renderProjects() {
    var mount = document.getElementById("projects-grid");
    if (!mount) return;
    var t = APP.i18n.t;

    var projects = APP.data.projects.slice().sort(byOrder);
    mount.innerHTML = "";

    projects.forEach(function (project) {
      var card = document.createElement("article");
      card.className = "project-entry";

      var title = document.createElement("h3");
      title.className = "project-entry__title";
      title.textContent = project.title;
      card.appendChild(title);

      var environment = document.createElement("span");
      environment.className = "project-entry__environment";
      var environmentIcon = document.createElement("span");
      environmentIcon.className = "issuer-icon";
      environmentIcon.innerHTML = APP.icons.getIcon(project.environment);
      environment.appendChild(environmentIcon);
      var environmentLabel = document.createElement("span");
      environmentLabel.textContent = t("projects.environments." + project.environment);
      environment.appendChild(environmentLabel);
      card.appendChild(environment);

      var description = document.createElement("p");
      description.className = "project-entry__description";
      description.textContent = t("projects." + project.id + ".description");
      card.appendChild(description);

      var highlights = document.createElement("ul");
      highlights.className = "project-entry__highlights";
      project.highlights.forEach(function (highlight) {
        var item = document.createElement("li");
        item.textContent = t("projects." + project.id + ".highlights." + highlight);
        highlights.appendChild(item);
      });
      card.appendChild(highlights);

      var tagList = document.createElement("ul");
      tagList.className = "tag-list";
      project.tech.forEach(function (tech) {
        var tag = document.createElement("li");
        tag.className = "tag";
        tag.textContent = tech;
        tagList.appendChild(tag);
      });
      card.appendChild(tagList);

      var link = document.createElement("a");
      link.className = "project-entry__link";
      link.href = project.link;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = t("projects.linkLabel") + " ->";
      card.appendChild(link);

      mount.appendChild(card);
    });
  }

  function formatDate(dateStr) {
    var parts = dateStr.split("-");
    return parts[1] + "/" + parts[0];
  }

  function renderExperience() {
    var mount = document.getElementById("experience-list");
    if (!mount) return;
    var t = APP.i18n.t;

    var experience = APP.data.experience.slice().sort(byOrder);
    mount.innerHTML = "";

    experience.forEach(function (job) {
      var item = document.createElement("li");
      item.className = "experience-item";

      var header = document.createElement("div");
      header.className = "experience-item__header";

      var role = t("experience." + job.id + ".role");
      var roleCompany = document.createElement("span");
      roleCompany.className = "experience-item__role";
      roleCompany.textContent = role + " - " + job.company;
      header.appendChild(roleCompany);

      item.appendChild(header);

      var meta = document.createElement("div");
      meta.className = "experience-item__meta";

      var dates = document.createElement("span");
      dates.className = "experience-item__dates";
      var dateIcon = document.createElement("span");
      dateIcon.className = "issuer-icon";
      dateIcon.innerHTML = APP.icons.getIcon("calendar");
      dates.appendChild(dateIcon);
      var dateLabel = document.createElement("span");
      var end = job.endDate ? formatDate(job.endDate) : t("experience.present");
      dateLabel.textContent = formatDate(job.startDate) + " - " + end;
      dates.appendChild(dateLabel);
      meta.appendChild(dates);

      var location = document.createElement("span");
      location.className = "experience-item__location";
      location.textContent = t("experience." + job.id + ".location");
      meta.appendChild(location);

      item.appendChild(meta);

      var description = document.createElement("p");
      description.className = "experience-item__description";
      description.textContent = t("experience." + job.id + ".description");
      item.appendChild(description);

      mount.appendChild(item);
    });
  }

  function renderResumeLink() {
    var link = document.getElementById("resume-download-link");
    if (!link) return;
    var resume = APP.data.profile.resume;
    var lang = document.documentElement.lang;
    link.href = resume[lang] || resume.en || resume.de;
  }

  function buildIssuerIcon(cert) {
    var icon = document.createElement("span");
    icon.className = "issuer-icon";
    icon.innerHTML = APP.icons.getIcon(cert.issuerIcon);
    return icon;
  }

  function buildVerifyLink(cert, className, label) {
    var link = document.createElement("a");
    link.className = className;
    link.href = cert.verifyUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = label;
    return link;
  }

  function renderCertificationCards(mount, certifications) {
    if (!mount) return;
    var t = APP.i18n.t;
    mount.innerHTML = "";

    certifications.forEach(function (cert) {
      var card = document.createElement("div");
      card.className = "card cert-card";

      var name = document.createElement("span");
      name.className = "cert-card__name";
      name.textContent = cert.name;
      card.appendChild(name);

      var code = document.createElement("span");
      code.className = "cert-card__code";
      code.textContent = cert.code;
      card.appendChild(code);

      var footer = document.createElement("div");
      footer.className = "cert-card__footer";

      var issuer = document.createElement("span");
      issuer.className = "cert-issuer";
      issuer.appendChild(buildIssuerIcon(cert));
      var issuerName = document.createElement("span");
      issuerName.textContent = cert.issuer;
      issuer.appendChild(issuerName);
      footer.appendChild(issuer);

      footer.appendChild(buildVerifyLink(cert, "cert-card__verify-link", t("certifications.verifyLabel")));

      card.appendChild(footer);
      mount.appendChild(card);
    });
  }

  function renderCertifications() {
    var certifications = APP.data.certifications.slice().sort(byOrder);
    var active = certifications.filter(function (cert) {
      return cert.status === "active";
    });
    var primary = active.filter(function (cert) {
      return cert.group !== "supporting";
    });
    var supporting = active.filter(function (cert) {
      return cert.group === "supporting";
    });
    var retired = certifications.filter(function (cert) {
      return cert.status === "retired";
    });
    var more = document.getElementById("credentials-more");
    var retiredSection = document.getElementById("credentials-retired");

    renderCertificationCards(document.getElementById("certifications-grid"), primary);
    renderCertificationCards(document.getElementById("supporting-certifications-grid"), supporting);
    renderCertificationCards(document.getElementById("retired-certifications-grid"), retired);

    if (more) more.style.display = supporting.length ? "" : "none";
    if (retiredSection) retiredSection.style.display = retired.length ? "" : "none";
  }

  function renderProfileBindings() {
    var profile = APP.data.profile;

    document.querySelectorAll("[data-bind='profile.name']").forEach(function (node) {
      node.textContent = profile.name;
    });

    document.querySelectorAll("[data-bind='profile.githubUrl']").forEach(function (node) {
      node.href = profile.githubUrl;
    });

    document.querySelectorAll("[data-bind='profile.linkedinUrl']").forEach(function (node) {
      node.href = profile.linkedinUrl;
    });

    document.querySelectorAll("[data-bind='profile.emailHref']").forEach(function (node) {
      node.href = "mailto:" + profile.email;
    });

    document.querySelectorAll("[data-bind='profile.email']").forEach(function (node) {
      node.textContent = profile.email;
    });
  }

  function initContent() {
    renderProfileBindings();
    renderResumeLink();
    renderExperience();
    renderProjects();
    renderCertifications();
    window.addEventListener("langchange", function () {
      renderResumeLink();
      renderExperience();
      renderProjects();
      renderCertifications();
    });
  }

  APP.initContent = initContent;
})();
