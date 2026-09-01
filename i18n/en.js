window.APP = window.APP || { data: {}, i18n: {} };

APP.i18n.en = {
  meta: {
    htmlLang: "en",
    title: "Alexander Hilberer | Data & AI Systems Engineer",
    description: "Portfolio of Alexander Hilberer, a Data & AI Systems Engineer based in Saarland, Germany. Data platforms, MLOps, Google Cloud, Azure, and open-source systems."
  },
  nav: {
    brand: "Alexander Hilberer",
    langToggleAria: "Select language",
    menuToggleAria: "Open menu",
    menuCloseAria: "Close menu",
    about: "About",
    projects: "Projects",
    experience: "Experience",
    credentials: "Credentials",
    contact: "Contact"
  },
  hero: {
    role: "Data & AI Systems Engineer",
    location: "Saarland, Germany",
    tagline: "I build data and AI systems with a focus on traceable data flows, clear access boundaries, and long-term evolution.",
    ctaProjects: "Explore projects",
    ctaContact: "Get in touch",
    ctaResume: "Download résumé"
  },
  about: {
    heading: "About",
    intro: "I build data and AI solutions at the intersection of architecture, operations, and governance. What matters to me is not only that a system works, but that its data flows, access model, and future evolution are understandable from the start.",
    personal: "I learn new technologies best by building with them, in my own projects and through self-hosting. That lets me evaluate not only what a tool promises, but also how it integrates and where its boundaries lie. Swimming and hiking provide the balance away from the screen.",
    principleOne: "Design data flows and operating paths so changes and failures remain visible.",
    principleTwo: "Treat access and governance as architecture decisions.",
    principleThree: "Use new technology where it improves a concrete requirement.",
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
      description: "Designed an agentic AI solution to simulate and analyse sales data. Developed an end-to-end MLOps workflow in Azure Machine Learning for customer churn classification. Implemented a recommendation system for banking products using hybrid collaborative-filtering methods. Supported the migration from Azure Synapse Analytics to Microsoft Fabric."
    },
    "previsionz-werkstudent": {
      role: "Working Student, Data Science",
      location: "Saarbrücken, Germany",
      description: "Analysed and compared MLOps lifecycles across Azure, Google Cloud Platform, and AWS. Designed and implemented an on-premises lakehouse architecture. Evaluated and integrated Microsoft Fabric into the central technology portfolio."
    },
    "neodigital-bachelor-thesis-werkstudent": {
      role: "Bachelor's Thesis & Working Student, IT",
      location: "Neunkirchen, Germany",
      description: "Developed and evaluated linear models to estimate vehicle fuel consumption from simple sensor data. Then contributed to software development projects with a focus on front-end engineering."
    },
    "neodigital-internship-telematics": {
      role: "IT Development Internship · Telematics",
      location: "Neunkirchen, Germany",
      description: "Evaluated suitable NoSQL database solutions. Set up a Cassandra cluster across multiple Docker containers. Developed a data model for storing vehicle speed data. Integrated Cassandra with the existing backend architecture."
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
    intro: "These projects show how I implement enterprise-oriented data and AI architectures from integration through to operations. The focus is on clear data flows, controlled access, repeatable delivery, and hands-on exploration of new technologies.",
    linkLabel: "Open repository",
    environments: {
      onprem: "Self-hosted",
      azure: "Azure"
    },
    "onprem-data-lakehouse": {
      description: "Enterprise-oriented, self-hosted single-host lakehouse for generated retail data. It combines batch processing, open table formats, role-based data access, and analytics in a local environment.",
      highlights: {
        identity: "Modelled LDAP roles and Ranger policies for controlled Trino access.",
        orchestration: "Orchestrated bronze, silver, and gold transformations with Airflow and Spark, including data-quality checks.",
        analytics: "Provided curated data access through Trino, Cube, and Superset."
      }
    },
    "onprem-agentic-bi": {
      description: "Local agentic BI environment for controlled queries on modelled data. It shows how chat agents access modelled data through a semantic layer and which identity and authorization steps this requires.",
      highlights: {
        access: "Connected LDAP, Authentik OIDC/OAuth, and a dedicated Cube MCP gateway.",
        governance: "Bound MCP queries to the signed-in identity and implemented role-based PII masking for this path.",
        tools: "Kept agent queries and dashboard access intentionally separate; the dashboard uses a shared service identity."
      }
    },
    "onprem-mlops": {
      description: "Local MLOps workflow for a classification scenario. It combines training, tracking, batch inference, and monitoring to make model lifecycles tangible.",
      highlights: {
        lifecycle: "Connected Airflow DAGs for batch inference, monitoring, and retraining with MLflow tracking.",
        monitoring: "Implemented repeatable evaluations for classification metrics, feature drift, and SHAP explanations.",
        delivery: "Compared challenger models through cross-validation and recorded promotion decisions."
      }
    },
    "fabric-agentic-analytics": {
      description: "Reproducible Fabric analytics flow for financial transactions. It focuses on infrastructure as code, medallion processing, and the publication of analytics artefacts.",
      highlights: {
        infrastructure: "Provisioned Azure base infrastructure and a Fabric workspace with Terraform.",
        analytics: "Published a medallion pipeline, semantic model, and Power BI report reproducibly.",
        integration: "Implemented the local AI chat layer and real-time extension as separate, optional modules."
      }
    }
  },
  contact: {
    heading: "Contact",
    intro: "If you would like to connect or simply get in touch, I would be glad to hear from you."
  }
};
