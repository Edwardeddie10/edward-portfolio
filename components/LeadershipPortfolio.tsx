
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
    outcome:
      "Demonstrates data pipeline design, validation, transformation, and governance considerations",
  },
  {
    category: "DEVELOPER EXPERIENCE",
    title: "Internal Developer Platform & Self-Service",
    description:
      "Advanced Backstage-based developer portal capabilities, reusable delivery patterns, and standardized onboarding to simplify engineering workflows.",
    outcome:
      "Enabled scalable developer experiences across 100+ application teams",
  },
  {
    category: "CLOUD TRANSFORMATION",
    title: "Cloud Infrastructure & Automation",
    description:
      "Led infrastructure-as-code modernization using reusable Terraform and CDKTF patterns, CI/CD automation, and cloud governance practices.",
    outcome:
      "Established more consistent provisioning and delivery practices",
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
    strengths: [
      "AWS",
      "Terraform / CDKTF",
      "Kubernetes",
      "Developer Enablement",
    ],
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
    strengths: [
      "Engineering Leadership",
      "Technical Strategy",
      "Agile Delivery",
    ],
  },
];

const projects = [
  {
    category: "AWS & DATA ENGINEERING",
    title: "AWS Claims Data Engineering Platform",
    status: "IMPLEMENTED & TESTED",
    github: "https://github.com/Edwardeddie10/aws-claims-platform",
    architecture: "https://github.com/Edwardeddie10/aws-claims-platform/blob/main/docs/architecture.md",
    description:
      "Building a hands-on AWS data engineering platform using synthetic claims data, infrastructure as code, automated data validation, and cloud-native processing patterns.",
    technologies: [
      "AWS S3",
      "AWS Lambda",
      "Python",
      "Terraform",
    ],
  },
];

export default function LeadershipPortfolio() {
  return (
    <div className="bg-[#0b0c0e] text-[#f5f2ec]">
      {/* Engineering Impact */}
      <section id="impact" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-[#c6a879]">
            01 / ENGINEERING IMPACT
          </p>

          <h2 className="max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
            Engineering Solutions.
            <span className="text-[#c6a879]">
              {" "}Delivering Outcomes.
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#b4b4b8]">
            Combining hands-on cloud and platform engineering with team
            leadership, enterprise delivery, and measurable business value.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {impact.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-[#34373d] bg-[#191b1f] p-8 transition hover:border-[#c6a879]"
              >
                <p className="text-3xl font-bold text-[#c6a879]">
                  {item.metric}
                </p>

                <h3 className="mt-5 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-[#b4b4b8]">
                  {item.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-[#2b2d32] px-3 py-2 text-xs text-[#e3cba6]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Initiatives */}
      <section
        id="modernization"
        className="bg-[#111316] px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-[#c6a879]">
            02 / STRATEGIC INITIATIVES
          </p>

          <h2 className="max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
            Transforming Technology.
            <span className="text-[#c6a879]">
              {" "}Enabling Business Value.
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#b4b4b8]">
            Selected work spanning data architecture, cloud platforms,
            DevOps automation, developer experience, reliability,
            and engineering leadership.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {initiatives.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-[#34373d] bg-[#191b1f] p-8 transition hover:border-[#c6a879]"
              >
                <p className="text-xs font-semibold tracking-widest text-[#c6a879]">
                  {item.category}
                </p>

                <h3 className="mt-5 text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-5 leading-relaxed text-[#b4b4b8]">
                  {item.description}
                </p>

                <div className="mt-8 border-t border-[#34373d] pt-5">
                  <p className="text-sm font-medium text-[#c6a879]">
                    {item.outcome}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Engineering Work */}
      <section id="experience" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-[#c6a879]">
            03 / SELECTED ENGINEERING WORK
          </p>

          <h2 className="max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
            Real Engineering Challenges.
            <span className="text-[#c6a879]">
              {" "}Practical Solutions.
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#b4b4b8]">
            A capability-led view of enterprise contributions, technical
            architecture, and engineering leadership — without a traditional
            employment timeline.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {selectedWork.map((work) => (
              <article
                key={work.title}
                className="rounded-xl border border-[#34373d] bg-[#191b1f] p-8 transition hover:border-[#c6a879]"
              >
                <p className="text-xs font-semibold tracking-widest text-[#c6a879]">
                  {work.category}
                </p>

                <h3 className="mt-5 text-2xl font-bold">
                  {work.title}
                </h3>

                <p className="mt-5 leading-relaxed text-[#b4b4b8]">
                  {work.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2 border-t border-[#34373d] pt-6">
                  {work.strengths.map((strength) => (
                    <span
                      key={strength}
                      className="rounded bg-[#2b2d32] px-3 py-2 text-xs text-[#e3cba6]"
                    >
                      {strength}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Projects */}
      <section
        id="projects"
        className="bg-[#111316] px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-[#c6a879]">
            04 / ENGINEERING PROJECTS
          </p>

          <h2 className="max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
            Building Solutions.
            <span className="text-[#c6a879]">
              {" "}Demonstrating Engineering.
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#b4b4b8]">
            Independent, hands-on engineering projects focused on
            cloud architecture, data engineering, infrastructure
            automation, DevOps, and operational reliability.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-xl border border-[#34373d] bg-[#191b1f] p-8 transition hover:border-[#c6a879]"
              >
                <p className="text-xs font-semibold tracking-widest text-[#c6a879]">
                  {project.category}
                </p>

                <h3 className="mt-5 text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-3 text-xs font-semibold tracking-widest text-[#e3cba6]">
                  {project.status}
                </p>

                <p className="mt-5 leading-relaxed text-[#b4b4b8]">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2 border-t border-[#34373d] pt-6">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded bg-[#2b2d32] px-3 py-2 text-xs text-[#e3cba6]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
                <a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-flex items-center rounded-lg border border-[#c6a879] px-5 py-3 text-sm font-semibold text-[#c6a879] transition hover:bg-[#c6a879] hover:text-[#0b0c0e]"
>
  View GitHub Repository →
</a>

                                <a
                  href={project.architecture}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 ml-3 inline-flex items-center rounded-lg border border-[#34373d] px-5 py-3 text-sm font-semibold text-[#f5f2ec] transition hover:border-[#c6a879] hover:text-[#c6a879]"
                >
                  View Architecture →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
