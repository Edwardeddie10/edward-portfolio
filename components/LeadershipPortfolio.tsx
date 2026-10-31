
const impact = [
  {
    metric: "100+",
    title: "Application Teams Enabled",
    description:
      "Supported enterprise application teams through shared cloud capabilities, standardized developer workflows, and scalable platform services.",
    tags: ["Enterprise Scale", "Developer Enablement"],
  },
  {
    metric: "People",
    title: "Engineering & Technical Leadership",
    description:
      "Led and coached cross-functional engineers, aligning team development, delivery priorities, and technical strategy with organizational goals.",
    tags: ["Talent Development", "Strategic Leadership"],
  },
  {
    metric: "Change",
    title: "Cloud & Platform Modernization",
    description:
      "Advanced infrastructure automation, platform modernization, observability, and operational practices to strengthen engineering effectiveness.",
    tags: ["Transformation", "Operational Excellence"],
  },
];

const initiatives = [
  {
    category: "DATA ENGINEERING & ARCHITECTURE",
    title: "Cloud Data Pipeline Architecture",
    description:
      "Designed a reference architecture for data ingestion and modernization using Amazon S3, AWS Lambda validation, AWS Glue ETL, Amazon Redshift, and Athena-based auditing. Illustrative design; not presented as a production deployment.",
    outcome: "Demonstrates data pipeline design, validation, transformation, and governance considerations",
  },
  {
    category: "DEVELOPER EXPERIENCE",
    title: "Internal Developer Platform & Self-Service",
    description:
      "Advanced Backstage-based developer portal capabilities, reusable delivery patterns, and standardized onboarding to simplify engineering workflows.",
    outcome: "Enabled scalable developer experiences across 100+ application teams",
  },
  {
    category: "CLOUD TRANSFORMATION",
    title: "Cloud Infrastructure & Automation",
    description:
      "Led infrastructure-as-code modernization using reusable Terraform and CDKTF patterns, CI/CD automation, and cloud governance practices.",
    outcome: "Established more consistent provisioning and delivery practices",
  },
  {
    category: "OPERATIONAL RESILIENCE",
    title: "Observability & Reliability",
    description:
      "Oversaw observability and resilience initiatives using Dynatrace SaaS, CloudWatch, Splunk, and enterprise cloud capabilities.",
    outcome: "Strengthened service visibility and operational readiness",
  },
  {
    category: "ENGINEERING EXCELLENCE",
    title: "DevSecOps & Delivery Transformation",
    description:
      "Expanded delivery automation, reusable engineering standards, security integration, and consistent platform workflows.",
    outcome: "Strengthened engineering consistency and governance",
  },
  {
    category: "INNOVATION",
    title: "AI-Enabled Developer Experience",
    description:
      "Supported an AI-enabled engineering assistant designed to improve access to approved standards, troubleshooting guidance, and reusable technical knowledge.",
    outcome: "Made engineering knowledge more accessible",
  },
  {
    category: "FINANCIAL STEWARDSHIP",
    title: "FinOps & Cost Visibility",
    description:
      "Led cloud financial management initiatives using Apptio and AWS Cost Explorer to support cost transparency and optimization planning.",
    outcome: "Improved visibility into cloud consumption and spending",
  },
];

const selectedWork = [
  {
    category: "CLOUD & PLATFORM ENGINEERING",
    title: "Enterprise Cloud Platform Modernization",
    description:
      "Supported cloud platform capabilities, infrastructure automation, reusable Terraform/CDKTF patterns, and developer self-service for enterprise application teams.",
    strengths: ["AWS", "Terraform / CDKTF", "Kubernetes", "Developer Enablement"],
  },
  {
    category: "DEVOPS & SITE RELIABILITY",
    title: "Delivery Automation & Operational Reliability",
    description:
      "Contributed to CI/CD standardization, observability modernization, incident response practices, and production reliability across complex enterprise systems.",
    strengths: ["CI/CD", "Dynatrace", "CloudWatch", "SRE"],
  },
  {
    category: "DATA ENGINEERING & ARCHITECTURE",
    title: "Cloud Data Pipeline Reference Architecture",
    description:
      "Designed a reference architecture for data ingestion, validation, transformation, warehousing, and audit using S3, Lambda, Glue, Redshift, and Athena. Architecture concept; not represented as a production deployment.",
    strengths: ["S3", "Lambda", "AWS Glue", "Redshift", "Athena"],
  },
  {
    category: "TECHNICAL LEADERSHIP",
    title: "Engineering Enablement & Product Delivery",
    description:
      "Led cross-functional engineering efforts, aligned technical roadmaps with business needs, and supported platform delivery, team development, and stakeholder collaboration.",
    strengths: ["Engineering Leadership", "Technical Strategy", "Agile Delivery"],
  },
];

export default function LeadershipPortfolio() {
  return (
    <div className="bg-[#0b0c0e] text-[#f5f2ec]">
      {/* Leadership Impact */}
      <section id="impact" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-[#c6a879]">
            01 / ENGINEERING IMPACT
          </p>

          <h2 className="max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
            Engineering Solutions.
            <span className="text-[#c6a879]"> Delivering Outcomes.</span>
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#b4b4b8]">
            Combining hands-on cloud and platform engineering with team
            leadership, enterprise delivery, and measurable business value.
          </p>
