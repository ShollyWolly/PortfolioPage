window.APP = window.APP || { data: {}, i18n: {} };

APP.i18n.en = {
  meta: {
    htmlLang: "en",
    title: "Alexander Hilberer, BI & Data Science Consultant"
  },
  nav: {
    brand: "A. Hilberer",
    langToggleAria: "Select language",
    menuToggleAria: "Open menu",
    about: "About",
    experience: "Experience",
    certifications: "Certifications",
    projects: "Projects",
    contact: "Contact"
  },
  hero: {
    eyebrow: "Hi, I'm",
    role: "BI & Data Science Consultant",
    tagline: "I build data- and AI-driven systems, on-prem and in the cloud.",
    ctaProjects: "View projects",
    ctaContact: "Get in touch",
    ctaResume: "Download resume"
  },
  about: {
    heading: "About",
    intro: "I design scalable data pipelines, build MLOps workflows, and develop LLM- and agent-based AI solutions, across on-prem infrastructure and cloud platforms like Azure and GCP, plus the open-source tools around them. I care about practical, production-ready data solutions and enjoy picking up new tools along the way.",
    educationHeading: "Education",
    educationBachelor: "B.Sc. Business Informatics - Hochschule Trier",
    educationMaster: "M.Sc. Artificial Intelligence & Data Science - Hochschule Trier",
    currentRoleLabel: "Current role",
    currentRole: "BI & Data Science Consultant"
  },
  experience: {
    heading: "Experience",
    present: "Present",
    "previsionz-consultant": {
      role: "BI & Data Science Consultant",
      location: "Saarbrücken, Germany",
      description: "Design and build LLM- and agent-based AI solutions, scalable data pipelines, and MLOps workflows across cloud platforms such as Azure/Fabric and GCP."
    },
    "previsionz-werkstudent": {
      role: "Working Student, Data Science",
      location: "Saarbrücken, Germany",
      description: "Evaluated Microsoft Fabric and Google Cloud Platform, supporting data architecture and cross-cloud MLOps initiatives."
    },
    "neodigital-werkstudent": {
      role: "Working Student, IT",
      location: "Neunkirchen, Germany",
      description: "Contributed to development projects with a focus on front-end engineering."
    },
    "neodigital-praktikum-thesis": {
      role: "IT Development Internship & Bachelor's Thesis",
      location: "Neunkirchen, Germany",
      description: "Internship in telematics backend development (NoSQL data modeling, a Dockerized Cassandra cluster, accessed via Java/Spring Boot), followed by a bachelor's thesis estimating vehicle soot emissions from sensor data using linear models."
    }
  },
  certifications: {
    heading: "Certifications",
    retiredHeading: "Retired Certifications",
    verifyLabel: "Verify"
  },
  projects: {
    heading: "Projects",
    linkLabel: "View repository",
    environments: {
      onprem: "On-Prem",
      azure: "Azure"
    },
    "onprem-data-lakehouse": {
      description: "Enterprise-grade on-prem data platform with a medallion architecture (bronze/silver/gold) built on Iceberg tables."
    },
    "onprem-agentic-bi": {
      description: "Self-contained, governed BI system with an agentic chat interface, role-based data masking via a semantic layer, and MCP services for controlled SQL/dashboard access."
    },
    "onprem-mlops": {
      description: "Full MLOps platform for binary credit-risk classification: training, deployment, monitoring, drift detection, and model governance."
    },
    "fabric-agentic-analytics": {
      description: "Terraform-deployed Microsoft Fabric retail analytics platform with a medallion architecture (bronze/silver/gold), Power BI reporting, and a natural-language Data Agent, plus an optional Open WebUI/MCP chat layer."
    }
  },
  contact: {
    heading: "Contact",
    intro: "Want to connect? Reach out, I'd love to hear from you."
  }
};
