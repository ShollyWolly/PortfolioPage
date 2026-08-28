window.APP = window.APP || { data: {}, i18n: {} };

APP.i18n.en = {
  meta: {
    htmlLang: "en",
    title: "Alexander Hilberer | Data & AI Systems Engineer"
  },
  nav: {
    brand: "Alexander Hilberer",
    langToggleAria: "Select language",
    menuToggleAria: "Open menu",
    about: "About",
    projects: "Projects",
    experience: "Experience",
    credentials: "Credentials",
    contact: "Contact"
  },
  hero: {
    role: "Data & AI Systems Engineer",
    tagline: "I explore data and AI systems that can be operated, secured, and evolved with confidence.",
    ctaProjects: "Explore projects",
    ctaContact: "Get in touch",
    ctaResume: "Download résumé"
  },
  about: {
    heading: "About",
    intro: "I am interested in data platforms, MLOps, and AI systems, from data foundations and model lifecycles to controlled interfaces for LLMs. I am especially drawn to the decisions that connect architecture, operations, and governance.",
    principleOne: "Design systems with operation and evolution in mind.",
    principleTwo: "Treat governance, access control, and traceability as part of the design.",
    principleThree: "Use cloud and open-source tools pragmatically.",
    educationHeading: "Education",
    educationBachelor: "B.Sc. Business Informatics · Trier University of Applied Sciences",
    educationMaster: "M.Sc. Artificial Intelligence & Data Science · Trier University of Applied Sciences"
  },
  experience: {
    heading: "Experience",
    present: "Present",
    "previsionz-consultant": {
      role: "BI & Data Science Consultant",
      location: "Saarbrücken, Germany",
      description: "Design and development of LLM-based and agentic AI solutions. Building MLOps workflows for deployment, monitoring, and automation, alongside data pipelines and ETL/ELT processes for analytics and ML workloads. Working with Azure/Fabric, GCP, and open-source tools including Apache Spark, MinIO, and Airflow."
    },
    "previsionz-werkstudent": {
      role: "Working Student, Data Science",
      location: "Saarbrücken, Germany",
      description: "Analysed the data capabilities of Google Cloud Platform and Microsoft Fabric, supporting the assessment of relevant services for the central technology portfolio. Contributed to data architecture and development work, and evaluated MLOps requirements across AWS SageMaker, Azure Machine Learning, and Google Vertex AI."
    },
    "neodigital-bachelor-thesis-werkstudent": {
      role: "Bachelor's Thesis & Working Student, IT",
      location: "Neunkirchen, Germany",
      description: "Developed and evaluated linear models to estimate vehicle fuel consumption from simple sensor data. Then contributed to software development projects with a focus on front-end engineering."
    },
    "neodigital-internship-telematics": {
      role: "IT Development Internship · Telematics",
      location: "Neunkirchen, Germany",
      description: "Gained hands-on backend development experience: selected a NoSQL database, built a Cassandra cluster with Docker, modelled acceleration data, and connected it through Java with Spring Boot."
    }
  },
  certifications: {
    heading: "Credentials",
    intro: "Current certifications complement my practical work.",
    supportingHeading: "Additional certifications",
    retiredHeading: "Retired certifications",
    verifyLabel: "Verify"
  },
  projects: {
    heading: "Projects",
    intro: "Personal projects give me space to think through data and AI systems hands-on, from architecture through to operation. They show how I connect complex components into understandable, operable systems.",
    linkLabel: "Open repository",
    environments: {
      onprem: "Self-hosted",
      azure: "Azure"
    },
    "onprem-data-lakehouse": {
      description: "In this project, I build a single-host lakehouse that carries generated retail data through Spark transformations and Iceberg tables to governed analytics.",
      highlights: {
        identity: "Connected OpenLDAP and Ranger UserSync for identities, roles, and governed Trino access.",
        orchestration: "Set up Airflow with schedulers, Celery workers, and Spark for orchestrated, quality-checked transformations.",
        analytics: "Combined Trino, Cube, and Superset into governed query, semantic, and dashboard layers."
      }
    },
    "onprem-agentic-bi": {
      description: "Here, I connect a Pagila warehouse, semantic layer, dashboards, and LibreChat agents into a local agentic BI demonstration for governed data access.",
      highlights: {
        access: "Connected OpenLDAP as the directory source with Authentik for LibreChat OIDC and Cube MCP OAuth.",
        governance: "Cube MCP verifies tokens and groups, mints short-lived Cube JWTs, and returns role-based masked PII.",
        tools: "Integrated MCP services for governed semantic queries and dashboard inspection."
      }
    },
    "onprem-mlops": {
      description: "With this platform, I map the complete MLOps lifecycle for credit-risk classification, from data generation and feature engineering through to serving, monitoring, and challenger comparison.",
      highlights: {
        lifecycle: "Connected MLflow experiments, model registry, promotion, and Flask serving through Airflow DAGs.",
        monitoring: "Turned classification metrics, KS-based feature drift, and SHAP explanations into repeatable workflows.",
        delivery: "Implemented retraining, quality gates, and five-fold challenger comparisons with an auditable decision trail."
      }
    },
    "fabric-agentic-analytics": {
      description: "In this project, I automate the delivery of a Microsoft Fabric platform for financial transactions, with a medallion pipeline, semantic model, Power BI, and a Data Agent.",
      highlights: {
        infrastructure: "Made Azure infrastructure, Fabric artefacts, and deployment scripts reproducible with Terraform, Fabric CLI, and fabric-cicd.",
        analytics: "Connected a bronze–silver–gold pipeline, DirectQuery semantic model, and Power BI dashboard into one analytics path.",
        integration: "Extended it with a Data Agent, MCP-backed chat layer, and independently deployable Eventhouse/KQL real-time module."
      }
    }
  },
  contact: {
    heading: "Contact",
    intro: "Would you like to exchange ideas about data, MLOps, or AI systems? I would be glad to hear from you."
  }
};
