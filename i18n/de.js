window.APP = window.APP || { data: {}, i18n: {} };

APP.i18n.de = {
  meta: {
    htmlLang: "de",
    title: "Alexander Hilberer | Data & AI Systems Engineer"
  },
  nav: {
    brand: "Alexander Hilberer",
    langToggleAria: "Sprache wählen",
    menuToggleAria: "Menü öffnen",
    about: "Über mich",
    projects: "Projekte",
    experience: "Erfahrung",
    credentials: "Zertifizierungen",
    contact: "Kontakt"
  },
  hero: {
    role: "Data & AI Systems Engineer",
    tagline: "Ich beschäftige mich mit Daten- und KI-Systemen, die sich nachvollziehbar betreiben, absichern und weiterentwickeln lassen.",
    ctaProjects: "Projekte entdecken",
    ctaContact: "Kontakt aufnehmen",
    ctaResume: "Lebenslauf herunterladen"
  },
  about: {
    heading: "Über mich",
    intro: "Mich interessieren Datenplattformen, MLOps und KI-Systeme – von der Datenbasis über Modelllebenszyklen bis hin zu kontrollierten Schnittstellen für LLMs. Besonders spannend finde ich die Entscheidungen zwischen Architektur, Betrieb und Governance.",
    principleOne: "Systeme so entwerfen, dass Betrieb und Weiterentwicklung mitgedacht sind.",
    principleTwo: "Governance, Zugriffsrechte und Nachvollziehbarkeit als Teil des Designs behandeln.",
    principleThree: "Cloud- und Open-Source-Werkzeuge pragmatisch einsetzen.",
    educationHeading: "Ausbildung",
    educationBachelor: "B.Sc. Wirtschaftsinformatik · Hochschule Trier",
    educationMaster: "M.Sc. Artificial Intelligence & Data Science · Hochschule Trier"
  },
  experience: {
    heading: "Erfahrung",
    present: "Heute",
    "previsionz-consultant": {
      role: "BI & Data Science Consultant",
      location: "Saarbrücken, Deutschland",
      description: "Entwurf und Entwicklung von LLM-basierten sowie agentischen KI-Lösungen. Aufbau von MLOps-Workflows für Bereitstellung, Monitoring und Automatisierung sowie von Datenpipelines und ETL/ELT-Prozessen für Analytics- und ML-Workloads. Arbeit mit Azure/Fabric, GCP und Open-Source-Werkzeugen wie Apache Spark, MinIO und Airflow."
    },
    "previsionz-werkstudent": {
      role: "Werkstudent Data Science",
      location: "Saarbrücken, Deutschland",
      description: "Analyse der Datenfähigkeiten von Google Cloud Platform und Microsoft Fabric sowie Unterstützung bei der Einordnung relevanter Services in das zentrale Technologieportfolio. Mitarbeit an Datenarchitekturen, Entwicklungsaufgaben und der Bewertung von MLOps-Anforderungen über AWS SageMaker, Azure Machine Learning und Google Vertex AI hinweg."
    },
    "neodigital-bachelor-thesis-werkstudent": {
      role: "Bachelorarbeit & Werkstudent IT",
      location: "Neunkirchen, Deutschland",
      description: "Entwicklung und Evaluation linearer Modelle zur Schätzung des Treibstoffverbrauchs von Fahrzeugen auf Basis einfacher Sensordaten. Anschließend Mitarbeit an Entwicklungsprojekten mit Schwerpunkt auf Frontend-Softwareentwicklung."
    },
    "neodigital-internship-telematics": {
      role: "Praktikum IT-Entwicklung · Telematik",
      location: "Neunkirchen, Deutschland",
      description: "Einblicke in die Backend-Entwicklung: Auswahl eines NoSQL-Datenbanksystems, Aufbau eines Cassandra-Clusters mit Docker, Modellierung von Beschleunigungsdaten und Anbindung über Java mit Spring Boot."
    }
  },
  certifications: {
    heading: "Zertifizierungen",
    intro: "Aktuelle Zertifizierungen ergänzen meine praktische Arbeit.",
    supportingHeading: "Weitere Zertifizierungen",
    retiredHeading: "Zurückgezogene Zertifizierungen",
    verifyLabel: "Nachweis"
  },
  projects: {
    heading: "Projekte",
    intro: "Eigene Projekte geben mir Raum, Daten- und KI-Systeme von der Architektur bis zum Betrieb praktisch zu durchdenken. Sie zeigen, wie ich komplexe Komponenten zu nachvollziehbaren und betreibbaren Gesamtsystemen verbinde.",
    linkLabel: "Repository öffnen",
    environments: {
      onprem: "Self-hosted",
      azure: "Azure"
    },
    "onprem-data-lakehouse": {
      description: "In diesem Projekt baue ich ein Single-Host-Lakehouse auf, das generierte Retaildaten über Spark-Transformationen und Iceberg-Tabellen bis zu kontrollierten Analytics führt.",
      highlights: {
        identity: "OpenLDAP und Ranger UserSync für Identitäten, Rollen und den geregelten Trino-Zugriff verbunden.",
        orchestration: "Airflow mit Scheduler, Celery-Workern und Spark für orchestrierte und qualitätsgeprüfte Transformationen eingerichtet.",
        analytics: "Trino, Cube und Superset als kontrollierte Abfrage-, Semantic- und Dashboard-Schicht kombiniert."
      }
    },
    "onprem-agentic-bi": {
      description: "Hier verbinde ich ein Pagila-Warehouse, Semantic Layer, Dashboards und LibreChat-Agenten zu einer lokalen Agentic-BI-Demonstration für kontrollierte Datenabfragen.",
      highlights: {
        access: "OpenLDAP als Verzeichnisquelle mit Authentik für LibreChat-OIDC und Cube-MCP-OAuth verbunden.",
        governance: "Cube-MCP prüft Token und Gruppen, erstellt kurzlebige Cube-JWTs und liefert rollenbasiert maskierte PII.",
        tools: "MCP-Dienste für kontrollierte Semantic Queries und Dashboard-Inspektion integriert."
      }
    },
    "onprem-mlops": {
      description: "Mit dieser Plattform bilde ich den vollständigen MLOps-Lebenszyklus für Kreditrisiko-Klassifikation ab – von Datengenerierung und Feature Engineering bis zu Serving, Monitoring und Challenger-Vergleichen.",
      highlights: {
        lifecycle: "MLflow-Experimente, Model Registry, Promotion und Flask-Serving über Airflow-DAGs verbunden.",
        monitoring: "Klassifikationsmetriken, KS-basierte Feature-Drift und SHAP-Erklärungen in wiederholbare Workflows überführt.",
        delivery: "Retraining, Qualitätsregeln und 5-fache Challenger-Vergleiche mit auditierbarer Entscheidungskette umgesetzt."
      }
    },
    "fabric-agentic-analytics": {
      description: "In diesem Projekt automatisiere ich die Bereitstellung einer Microsoft-Fabric-Plattform für Finanztransaktionen – mit Medallion-Pipeline, Semantic Model, Power BI und Data Agent.",
      highlights: {
        infrastructure: "Azure-Infrastruktur, Fabric-Artefakte und Bereitstellungsskripte über Terraform, Fabric CLI und fabric-cicd reproduzierbar gemacht.",
        analytics: "Bronze-Silber-Gold-Pipeline, DirectQuery-Semantikmodell und Power-BI-Dashboard zu einer durchgängigen Analytics-Strecke verbunden.",
        integration: "Data Agent, MCP-gestützte Chat-Schicht und ein eigenständig deploybares Eventhouse/KQL-Realtime-Modul ergänzt."
      }
    }
  },
  contact: {
    heading: "Kontakt",
    intro: "Du möchtest dich zu Daten, MLOps oder KI-Systemen austauschen? Ich freue mich über eine Nachricht."
  }
};
