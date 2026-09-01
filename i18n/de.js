window.APP = window.APP || { data: {}, i18n: {} };

APP.i18n.de = {
  meta: {
    htmlLang: "de",
    title: "Alexander Hilberer | Data & AI Systems Engineer",
    description: "Portfolio von Alexander Hilberer, Data & AI Systems Engineer aus dem Saarland, Deutschland. Data Platforms, MLOps, Google Cloud, Azure und Open-Source-Systeme."
  },
  nav: {
    brand: "Alexander Hilberer",
    langToggleAria: "Sprache wählen",
    menuToggleAria: "Menü öffnen",
    menuCloseAria: "Menü schließen",
    about: "Über mich",
    projects: "Projekte",
    experience: "Erfahrung",
    credentials: "Zertifizierungen",
    contact: "Kontakt"
  },
  hero: {
    role: "Data & AI Systems Engineer",
    location: "Saarland, Deutschland",
    tagline: "Ich entwickle Daten- und KI-Systeme mit Fokus auf nachvollziehbare Datenflüsse, klare Zugriffsgrenzen und langfristige Weiterentwicklung.",
    ctaProjects: "Projekte entdecken",
    ctaContact: "Kontakt aufnehmen",
    ctaResume: "Lebenslauf herunterladen"
  },
  about: {
    heading: "Über mich",
    intro: "Ich entwickle Daten- und KI-Lösungen an der Schnittstelle von Architektur, Betrieb und Governance. Entscheidend ist für mich nicht nur, dass ein System funktioniert, sondern dass Datenflüsse, Zugriffe und Weiterentwicklung von Anfang an nachvollziehbar sind.",
    personal: "Neue Technologien erschließe ich praktisch, in eigenen Projekten und beim Self-Hosting. So prüfe ich nicht nur, was ein Werkzeug verspricht, sondern auch, wie es sich integriert und wo seine Grenzen liegen. Beim Schwimmen und Wandern finde ich den Ausgleich dazu.",
    principleOne: "Datenflüsse und Betriebswege so gestalten, dass Änderungen und Fehler sichtbar bleiben.",
    principleTwo: "Zugriffe und Governance als Architekturentscheidungen behandeln.",
    principleThree: "Neue Technologien dort einsetzen, wo sie eine konkrete Anforderung besser lösen.",
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
      description: "Konzeption einer agentischen KI-Lösung zur Simulation und Analyse von Vertriebsdaten. Entwicklung eines End-to-End-MLOps-Workflows in Azure Machine Learning zur Klassifikation von Kundenabwanderung. Implementierung eines Empfehlungssystems für Bankprodukte mittels hybrider kollaborativer Filterverfahren. Unterstützung bei der Migration von Azure Synapse Analytics zu Microsoft Fabric."
    },
    "previsionz-werkstudent": {
      role: "Werkstudent Data Science",
      location: "Saarbrücken, Deutschland",
      description: "Analyse und Vergleich von MLOps-Lebenszyklen in Azure, Google Cloud Platform und AWS. Konzeption und Implementierung einer On-Premises-Lakehouse-Architektur. Bewertung und Integration von Microsoft Fabric in das zentrale Unternehmensportfolio."
    },
    "neodigital-bachelor-thesis-werkstudent": {
      role: "Bachelorarbeit & Werkstudent IT",
      location: "Neunkirchen, Deutschland",
      description: "Entwicklung und Evaluation linearer Modelle zur Schätzung des Treibstoffverbrauchs von Fahrzeugen auf Basis einfacher Sensordaten. Anschließend Mitarbeit an Entwicklungsprojekten mit Schwerpunkt auf Frontend-Softwareentwicklung."
    },
    "neodigital-internship-telematics": {
      role: "Praktikum IT-Entwicklung · Telematik",
      location: "Neunkirchen, Deutschland",
      description: "Evaluierung geeigneter NoSQL-Datenbanklösungen. Aufbau eines Cassandra-Clusters mit mehreren Docker-Containern. Entwicklung eines Datenmodells zur Speicherung von Geschwindigkeitsdaten. Anbindung von Cassandra an die bestehende Backend-Landschaft."
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
    intro: "Die Projekte zeigen, wie ich enterprise-orientierte Daten- und KI-Architekturen von der Integration bis zum Betrieb umsetze. Im Fokus stehen klare Datenflüsse, kontrollierte Zugriffe, wiederholbare Bereitstellung und das praktische Erproben neuer Technologien.",
    linkLabel: "Repository öffnen",
    environments: {
      onprem: "Self-hosted",
      azure: "Azure"
    },
    "onprem-data-lakehouse": {
      description: "Enterprise-orientiertes, selbst gehostetes Single-Host-Lakehouse für Retaildaten. Sie verbindet Batch-Verarbeitung, offene Tabellenformate, rollenbasierte Datenzugriffe und Analytics in einer lokalen Umgebung.",
      highlights: {
        identity: "LDAP-Rollen und Ranger-Policies für kontrollierten Trino-Zugriff modelliert.",
        orchestration: "Bronze-, Silver- und Gold-Transformationen mit Airflow und Spark orchestriert, inklusive Data-Quality-Checks.",
        analytics: "Kuratierten Datenzugriff über Trino, Cube und Superset bereitgestellt."
      }
    },
    "onprem-agentic-bi": {
      description: "Lokale Agentic-BI-Umgebung für kontrollierte Abfragen auf modellierten Daten. Sie zeigt, wie Chat-Agenten über eine semantische Schicht auf modellierte Daten zugreifen und welche Identitäts- und Berechtigungsschritte dafür nötig sind.",
      highlights: {
        access: "LDAP, Authentik OIDC/OAuth und einen eigenen Cube-MCP-Gateway verbunden.",
        governance: "MCP-Abfragen an die angemeldete Identität gebunden und für diesen Pfad rollenbasierte PII-Maskierung umgesetzt.",
        tools: "Agentenabfragen und Dashboard-Zugriff bewusst getrennt, das Dashboard nutzt eine gemeinsame Service-Identität."
      }
    },
    "onprem-mlops": {
      description: "Lokaler MLOps-Workflow für ein Klassifikationsszenario. Sie verbindet Training, Tracking, Batch-Inferenz und Monitoring, um Modelllebenszyklen praktisch abzubilden.",
      highlights: {
        lifecycle: "Airflow-DAGs für Batch-Inferenz, Monitoring und Retraining mit MLflow-Tracking verknüpft.",
        monitoring: "Klassifikationsmetriken, Feature-Drift und SHAP-Erklärungen als wiederholbare Auswertungen implementiert.",
        delivery: "Challenger-Modelle per Cross-Validation verglichen und Promotion-Entscheidungen protokolliert."
      }
    },
    "fabric-agentic-analytics": {
      description: "Reproduzierbare Fabric-Analytics-Strecke für Finanztransaktionen. Schwerpunkt sind Infrastructure as Code, Medallion-Verarbeitung und die Bereitstellung von Analytics-Artefakten.",
      highlights: {
        infrastructure: "Azure-Basisinfrastruktur und Fabric-Workspace mit Terraform bereitgestellt.",
        analytics: "Medallion-Pipeline, semantisches Modell und Power-BI-Report reproduzierbar veröffentlicht.",
        integration: "Lokale KI-Chat-Schicht und Realtime-Erweiterung als getrennte, optionale Module umgesetzt."
      }
    }
  },
  contact: {
    heading: "Kontakt",
    intro: "Wenn du dich austauschen oder einfach Kontakt aufnehmen möchtest, freue ich mich über eine Nachricht."
  }
};
