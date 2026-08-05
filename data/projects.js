window.APP = window.APP || { data: {}, i18n: {} };

APP.data.projects = [
  {
    id: "onprem-data-lakehouse",
    title: "On-Prem Data Lakehouse",
    link: "https://github.com/ShollyWolly/On-Prem-Data-Lakehouse",
    environment: "onprem",
    tech: [
      "Apache Airflow", "Apache Spark", "Apache Iceberg", "Garage",
      "Apache Polaris", "Trino", "OpenLDAP", "Apache Ranger",
      "Cube Core", "Apache Superset", "PostgreSQL", "Streamlit", "Traefik", "Docker"
    ],
    order: 1
  },
  {
    id: "onprem-agentic-bi",
    title: "On-Prem AgenticBI",
    link: "https://github.com/ShollyWolly/On-Prem-AgenticBI",
    environment: "onprem",
    tech: [
      "LibreChat", "Apache Superset", "OpenLDAP", "Cube Core",
      "PostgreSQL", "Garage", "MCP", "Docker"
    ],
    order: 2
  },
  {
    id: "onprem-mlops",
    title: "On-Prem Machine Learning Operations",
    link: "https://github.com/ShollyWolly/OnPremise-Machine-Learning-Operations",
    environment: "onprem",
    tech: [
      "Apache Airflow", "MLflow", "PostgreSQL", "scikit-learn",
      "XGBoost", "Flask", "Streamlit", "JupyterLab",
      "Evidently", "SHAP", "Docker"
    ],
    order: 3
  },
  {
    id: "fabric-agentic-analytics",
    title: "Fabric Agentic Analytics",
    link: "https://github.com/ShollyWolly/Fabric-Agentic-Analytics",
    environment: "azure",
    tech: [
      "Microsoft Fabric", "Terraform", "Azure ADLS Gen2", "fabric-cicd",
      "Power BI", "Open WebUI", "MCP", "Docker"
    ],
    order: 4
  }
];
