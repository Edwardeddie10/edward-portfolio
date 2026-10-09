
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
    title: "Engineering Leadership",
    description:
      "Led and coached cross-functional engineers, aligning team development, delivery priorities, and technical strategy with organizational goals.",
    tags: ["Talent Development", "Strategic Leadership"],
  },
  {
    metric: "Change",
    title: "Enterprise Transformation",
    description:
      "Advanced infrastructure automation, platform modernization, observability, and operational practices to strengthen engineering effectiveness.",
    tags: ["Transformation", "Operational Excellence"],
  },
];

const initiatives = [
  {
    category: "DEVELOPER EXPERIENCE",
    title: "Internal Developer Platform & Self-Service",
    description:
      "Advanced Backstage-based developer portal capabilities, reusable delivery patterns, and standardized onboarding to simplify engineering workflows.",
    outcome: "Enabled scalable developer experiences across 100+ application teams",
  },
  {
    category: "CLOUD TRANSFORMATION",
    title: "Cloud Infrastructure Modernization",
    description:
      "Directed infrastructure-as-code modernization through reusable Terraform and CDKTF patterns, CI/CD automation, and cloud governance.",
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

const executiveExperience = [
  {
    company: "CENTENE",
    period: "2021 – 2026",
    title: "Cloud Platform Engineering Leadership",
    roles: [
      "Manager, Cloud Platform Engineering",
      "Senior Technical Platform Manager",
    ],
    description:
      "Led engineering teams and strategic initiatives across enterprise cloud enablement, platform modernization, developer experience, observability, resilience, and operational excellence.",
    strengths: [
      "People Leadership",
      "Platform Strategy",
      "Enterprise Enablement",
    ],
  },
  {
    company: "CENTURYLINK / LUMEN",
    period: "2019 – 2021",
    title: "Technical Product & Operations Leadership",
    roles: [
      "Technical Product Owner",
      "Senior Operations Solution Analyst",
    ],
    description:
      "Connected business priorities with technical product delivery, operational platform improvements, cross-functional execution, and enterprise technology initiatives.",
    strengths: [
      "Product Delivery",
      "Stakeholder Alignment",
      "Operational Transformation",
    ],
  },
];

export default function LeadershipPortfolio() {
  return (
    <div className="bg-[#0b0c0e] text-[#f5f2ec]">
      {/* Leadership Impact */}
      <section id="impact" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-[#c6a879]">
            01 / LEADERSHIP IMPACT
          </p>

          <h2 className="max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
            Leading People.
            <span className="text-[#c6a879]"> Delivering Outcomes.</span>
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#b4b4b8]">
            Building high-performing engineering teams, scaling
            enterprise capabilities, and connecting technology
            investments with meaningful organizational value.
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
            <span className="text-[#c6a879]"> Enabling Business Value.</span>
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#b4b4b8]">
            Selected initiatives spanning platform strategy,
            developer experience, cloud transformation, engineering
            excellence, innovation, and financial stewardship.
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

      {/* Executive Experience */}
      <section id="experience" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-[#c6a879]">
            03 / EXECUTIVE EXPERIENCE
          </p>

          <h2 className="max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
            Leadership Across
            <span className="text-[#c6a879]">
              {" "}Technology & Transformation.
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#b4b4b8]">
            A career built around developing teams, translating
            strategy into execution, and modernizing enterprise
            technology capabilities.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {executiveExperience.map((job) => (
              <article
                key={job.company}
                className="rounded-xl border border-[#34373d] bg-[#191b1f] p-8 transition hover:border-[#c6a879]"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm font-semibold tracking-widest text-[#c6a879]">
                    {job.company}
                  </p>
                  <p className="text-sm text-[#b4b4b8]">
                    {job.period}
                  </p>
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {job.title}
                </h3>

                <div className="mt-5 space-y-2">
                  {job.roles.map((role) => (
                    <p
                      key={role}
                      className="text-sm text-[#d3d3d5]"
                    >
                      {role}
                    </p>
                  ))}
                </div>

                <p className="mt-6 leading-relaxed text-[#b4b4b8]">
                  {job.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2 border-t border-[#34373d] pt-6">
                  {job.strengths.map((strength) => (
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

          <div className="mt-6 rounded-xl border border-[#34373d] bg-[#141619] p-8">
            <p className="text-xs font-semibold tracking-widest text-[#c6a879]">
              EARLIER CAREER FOUNDATIONS
            </p>

            <h3 className="mt-4 text-xl font-semibold">
              Systems Analysis, Financial Services & Business Operations
            </h3>

            <p className="mt-4 leading-relaxed text-[#b4b4b8]">
              Earlier experience across Sedgwick, BNY Mellon,
              and JPMorgan Chase established a foundation in
              business analysis, technology delivery, financial
              operations, and client relationship management.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}