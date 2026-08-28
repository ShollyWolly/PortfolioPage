window.APP = window.APP || { data: {}, i18n: {} };

APP.data.projects = [
  {
    id: "onprem-data-lakehouse",
    title: "On-Prem Data Lakehouse",
    link: "https://github.com/ShollyWolly/On-Prem-Data-Lakehouse",
    environment: "onprem",
    highlights: ["identity", "orchestration", "analytics"],
    tech: [
      "Apache Airflow", "Apache Spark", "Apache Iceberg", "Apache Polaris",
      "Garage", "PostgreSQL", "Redis", "OpenLDAP", "Apache Ranger", "Trino",
      "Cube Core", "Apache Superset", "Streamlit", "Traefik", "Docker"
    ],
    order: 1
  },
  {
    id: "onprem-agentic-bi",
    title: "On-Prem AgenticBI",
    link: "https://github.com/ShollyWolly/On-Prem-AgenticBI",
    environment: "onprem",
    highlights: ["access", "governance", "tools"],
    tech: [
      "LibreChat", "Azure AI Foundry", "OpenLDAP", "Authentik", "OIDC/OAuth",
      "Cube Core", "Apache Superset", "PostgreSQL", "pgvector", "MCP", "Docker"
    ],
    order: 2
  },
  {
    id: "onprem-mlops",
    title: "On-Prem Machine Learning Operations",
    link: "https://github.com/ShollyWolly/OnPremise-Machine-Learning-Operations",
    environment: "onprem",
    highlights: ["lifecycle", "monitoring", "delivery"],
    tech: [
      "Apache Airflow", "MLflow", "PostgreSQL", "scikit-learn", "XGBoost",
      "Flask", "Streamlit", "JupyterLab", "Evidently", "SHAP", "Docker"
    ],
    order: 3
  },
  {
    id: "fabric-agentic-analytics",
    title: "Fabric Financial Analytics Platform",
    link: "https://github.com/ShollyWolly/Fabric-Agentic-Analytics",
    environment: "azure",
    highlights: ["infrastructure", "analytics", "integration"],
    tech: [
      "Microsoft Fabric", "Terraform", "Azure ADLS Gen2", "Fabric CLI", "fabric-cicd",
      "Power BI", "Data Agent", "Eventhouse", "KQL", "Azure Container Instances",
      "Open WebUI", "Open Terminal", "MCP", "Docker"
    ],
    order: 4
  }
];
