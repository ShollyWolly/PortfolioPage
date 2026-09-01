window.APP = window.APP || { data: {}, i18n: {} };

APP.data.projects = [
  {
    id: "onprem-data-lakehouse",
    title: "On-Prem Data Lakehouse",
    link: "https://github.com/ShollyWolly/On-Prem-Data-Lakehouse",
    environment: "onprem",
    highlights: ["identity", "orchestration", "analytics"],
    tech: [
      "Apache Spark", "Apache Iceberg", "Apache Airflow", "Trino", "Apache Ranger"
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
      "LibreChat", "Authentik", "Cube", "Apache Superset", "Azure AI Foundry"
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
      "Apache Airflow", "MLflow", "PostgreSQL", "SHAP", "scikit-learn"
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
      "Microsoft Fabric", "Terraform", "fabric-cicd", "Power BI", "Open WebUI"
    ],
    order: 4
  }
];
