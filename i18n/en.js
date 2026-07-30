window.APP = window.APP || { data: {}, i18n: {} };

APP.i18n.en = {
  meta: {
    htmlLang: "en",
    title: "Alexander Hilberer - BI & Data Science Consultant"
  },
  nav: {
    brand: "A. Hilberer",
    langToggleAria: "Select language",
    about: "About",
    experience: "Experience",
    certifications: "Certifications",
    projects: "Projects",
    contact: "Contact"
  },
  hero: {
    eyebrow: "Hi, I'm",
    role: "BI & Data Science Consultant",
    tagline: "I build data- and AI-driven systems - from on-prem lakehouses to production-grade MLOps.",
    ctaProjects: "View projects",
    ctaContact: "Get in touch",
    ctaResume: "Download resume"
  },
  about: {
    heading: "About",
    intro: "I build scalable data pipelines, implement MLOps workflows, and design LLM- and agent-based AI solutions. Experienced with cloud platforms like Azure and GCP as well as open-source tools - passionate about practical data solutions and continuous learning.",
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
      description: "Designing and building LLM- and agent-based AI solutions, scalable data pipelines, and MLOps workflows across cloud platforms like Azure/Fabric and GCP."
    },
    "previsionz-werkstudent": {
      role: "Working Student, Data Science",
      location: "Saarbrücken, Germany",
      description: "Evaluated Microsoft Fabric and Google Cloud Platform, and supported data architecture and cross-cloud MLOps initiatives."
    },
    "neodigital-werkstudent": {
      role: "Working Student, IT",
      location: "Neunkirchen, Germany",
      description: "Supported development projects with a focus on front-end software engineering."
    },
    "neodigital-praktikum-thesis": {
      role: "IT Development Internship & Bachelor's Thesis",
      location: "Neunkirchen, Germany",
      description: "Internship in telematics backend development (NoSQL data modeling, a Dockerized Cassandra cluster, Java/Spring Boot access) followed by a bachelor's thesis estimating vehicle soot emissions from sensor data using linear models."
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
      onprem: "On-Prem"
    },
    "onprem-data-lakehouse": {
      description: "Enterprise-grade on-prem data platform with a medallion architecture (bronze/silver/gold) built on Iceberg tables."
    },
    "onprem-agentic-bi": {
      description: "Self-contained, governed BI system with an agentic chat interface, role-based data masking via a semantic layer, and MCP services for controlled SQL/dashboard access."
    },
    "onprem-mlops": {
      description: "Full MLOps platform for binary credit-risk classification: training, deployment, monitoring, drift detection, and model governance."
    }
  },
  contact: {
    heading: "Contact",
    intro: "Open to projects around data platforms, BI, and applied AI."
  }
};
