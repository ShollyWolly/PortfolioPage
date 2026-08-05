window.APP = window.APP || { data: {}, i18n: {} };

APP.i18n.de = {
  meta: {
    htmlLang: "de",
    title: "Alexander Hilberer, BI & Data Science Consultant"
  },
  nav: {
    brand: "A. Hilberer",
    langToggleAria: "Sprache wählen",
    menuToggleAria: "Menü öffnen",
    about: "Über mich",
    experience: "Erfahrung",
    certifications: "Zertifizierungen",
    projects: "Projekte",
    contact: "Kontakt"
  },
  hero: {
    eyebrow: "Hallo, ich bin",
    role: "BI & Data Science Consultant",
    tagline: "Ich baue daten- und KI-getriebene Systeme, On-Prem und in der Cloud.",
    ctaProjects: "Projekte ansehen",
    ctaContact: "Kontakt aufnehmen",
    ctaResume: "Lebenslauf herunterladen"
  },
  about: {
    heading: "Über mich",
    intro: "Ich konzipiere skalierbare Datenpipelines, entwickle MLOps-Workflows und baue LLM- sowie agentenbasierte KI-Lösungen, über On-Prem-Infrastruktur und Cloud-Plattformen wie Azure und GCP hinweg, inklusive der dazugehörigen Open-Source-Tools. Mir ist wichtig, praxisnahe und produktionsreife Datenlösungen zu bauen, und ich lerne gerne dazu.",
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
      description: "Konzeption und Entwicklung von LLM- und agentenbasierten KI-Lösungen sowie Aufbau skalierbarer Datenpipelines und MLOps-Workflows für Cloud-Plattformen wie Azure/Fabric und GCP."
    },
    "previsionz-werkstudent": {
      role: "Werkstudent Data Science",
      location: "Saarbrücken, Deutschland",
      description: "Evaluierung von Microsoft Fabric und Google Cloud Platform, mit Unterstützung bei Datenarchitektur- und MLOps-Themen über mehrere Cloud-Anbieter hinweg."
    },
    "neodigital-werkstudent": {
      role: "Werkstudent IT",
      location: "Neunkirchen, Deutschland",
      description: "Mitarbeit an Entwicklungsprojekten mit Schwerpunkt Frontend-Entwicklung."
    },
    "neodigital-praktikum-thesis": {
      role: "Praktikum IT-Entwicklung & Bachelorarbeit",
      location: "Neunkirchen, Deutschland",
      description: "Praktikum im Bereich Telematik-Backend (NoSQL-Datenmodell, Cassandra-Cluster via Docker, Zugriff über Java/Spring Boot), gefolgt von der Bachelorarbeit zur Schätzung von Ruß-Emissionen aus Fahrzeugsensordaten mittels linearer Modelle."
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
      onprem: "On-Premise",
      azure: "Azure"
    },
    "onprem-data-lakehouse": {
      description: "Unternehmenstaugliche On-Prem-Datenplattform mit Medallion-Architektur (Bronze/Silber/Gold) auf Iceberg-Tabellen."
    },
    "onprem-agentic-bi": {
      description: "Selbstständiges, governance-fähiges BI-System mit agentischer Chat-Oberfläche, rollenbasierter Datenmaskierung über eine Semantic Layer und MCP-Services für kontrollierten SQL-/Dashboard-Zugriff."
    },
    "onprem-mlops": {
      description: "Vollständige MLOps-Plattform für binäre Kreditrisiko-Klassifikation: Training, Deployment, Monitoring, Drift-Erkennung und Modell-Governance."
    },
    "fabric-agentic-analytics": {
      description: "Per Terraform bereitgestellte Microsoft-Fabric-Analytics-Plattform für den Retail-Bereich mit Medallion-Architektur (Bronze/Silber/Gold), Power-BI-Reporting und einem Natural-Language-Data-Agent sowie optionaler Open-WebUI-/MCP-Chat-Ebene."
    }
  },
  contact: {
    heading: "Kontakt",
    intro: "Hast du Lust auf einen Austausch? Meld dich gerne bei mir."
  }
};
