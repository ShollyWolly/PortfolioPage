window.APP = window.APP || { data: {}, i18n: {} };

APP.i18n.de = {
  meta: {
    htmlLang: "de",
    title: "Alexander Hilberer - BI & Data Science Consultant"
  },
  nav: {
    brand: "A. Hilberer",
    langToggleAria: "Sprache wählen",
    about: "Über mich",
    experience: "Erfahrung",
    certifications: "Zertifizierungen",
    projects: "Projekte",
    contact: "Kontakt"
  },
  hero: {
    eyebrow: "Hallo, ich bin",
    role: "BI & Data Science Consultant",
    tagline: "Ich baue daten- und KI-getriebene Systeme - vom On-Prem-Lakehouse bis zu produktionsreifem MLOps.",
    ctaProjects: "Projekte ansehen",
    ctaContact: "Kontakt aufnehmen",
    ctaResume: "Lebenslauf herunterladen"
  },
  about: {
    heading: "Über mich",
    intro: "Ich entwickle skalierbare Datenpipelines, implementiere MLOps-Workflows und konzipiere LLM- sowie agentenbasierte KI-Lösungen. Erfahren im Umgang mit Cloud-Plattformen wie Azure und GCP sowie Open-Source-Tools - mit Leidenschaft für praxisnahe Datenlösungen und stetiges Lernen.",
    educationHeading: "Ausbildung",
    educationBachelor: "B.Sc. Wirtschaftsinformatik - Hochschule Trier",
    educationMaster: "M.Sc. Artificial Intelligence & Data Science - Hochschule Trier",
    currentRoleLabel: "Aktuelle Rolle",
    currentRole: "BI & Data Science Consultant"
  },
  experience: {
    heading: "Erfahrung",
    present: "Heute",
    "previsionz-consultant": {
      role: "BI & Data Science Consultant",
      location: "Saarbrücken, Deutschland",
      description: "Konzeption und Entwicklung von LLM- und agentenbasierten KI-Lösungen, Aufbau skalierbarer Datenpipelines und Implementierung von MLOps-Workflows für Cloud-Plattformen wie Azure/Fabric und GCP."
    },
    "previsionz-werkstudent": {
      role: "Werkstudent Data Science",
      location: "Saarbrücken, Deutschland",
      description: "Evaluierung von Microsoft Fabric und Google Cloud Platform sowie Unterstützung bei Datenarchitektur- und MLOps-Themen über mehrere Cloud-Anbieter hinweg."
    },
    "neodigital-werkstudent": {
      role: "Werkstudent IT",
      location: "Neunkirchen, Deutschland",
      description: "Unterstützung bei Entwicklungsprojekten mit Schwerpunkt Frontend-Softwareentwicklung."
    },
    "neodigital-praktikum-thesis": {
      role: "Praktikum IT-Entwicklung & Bachelorarbeit",
      location: "Neunkirchen, Deutschland",
      description: "Praktikum im Bereich Telematik-Backend (NoSQL-Datenmodell, Cassandra-Cluster mit Docker, Zugriff via Java/Spring Boot) sowie anschließende Bachelorarbeit zur Schätzung von Ruß-Emissionen aus Fahrzeugsensordaten mittels linearer Modelle."
    }
  },
  certifications: {
    heading: "Zertifizierungen",
    retiredHeading: "Zurückgezogene Zertifizierungen",
    verifyLabel: "Verifizieren"
  },
  projects: {
    heading: "Projekte",
    linkLabel: "Repository ansehen",
    environments: {
      onprem: "On-Premise"
    },
    "onprem-data-lakehouse": {
      description: "Unternehmenstaugliche On-Prem-Datenplattform mit Medallion-Architektur (Bronze/Silber/Gold) auf Iceberg-Tabellen."
    },
    "onprem-agentic-bi": {
      description: "Selbstständiges, governance-fähiges BI-System mit agentischer Chat-Oberfläche, rollenbasierter Datenmaskierung über eine Semantic Layer und MCP-Services für kontrollierten SQL-/Dashboard-Zugriff."
    },
    "onprem-mlops": {
      description: "Vollständige MLOps-Plattform für binäre Kreditrisiko-Klassifikation: Training, Deployment, Monitoring, Drift-Erkennung und Modell-Governance."
    }
  },
  contact: {
    heading: "Kontakt",
    intro: "Offen für Projekte rund um Datenplattformen, BI und angewandte KI."
  }
};
