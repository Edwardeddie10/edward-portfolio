
"use client";

import { useState } from "react";
import LeadershipPortfolio from "@/components/LeadershipPortfolio";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#leadership" },
  { label: "Impact", href: "#impact" },
  { label: "Strategic Initiatives", href: "#modernization" },
  { label: "Selected Work", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const expertise = [
  {
    title: "Cloud & Platform Engineering",
    description:
      "Cloud architecture, AWS infrastructure, Kubernetes, infrastructure as code, and internal developer platforms that support secure, scalable enterprise systems.",
  },
  {
    title: "Data Engineering & Platforms",
    description:
      "Data platform architecture and modernization, including ingestion, validation, ETL workflows, data warehousing, and cloud-based analytics capabilities.",
  },
  {
    title: "DevOps & Automation",
    description:
      "Terraform, CI/CD pipelines, containerization, infrastructure automation, and repeatable delivery practices that improve engineering efficiency.",
  },
  {
    title: "Site Reliability & Observability",
    description:
      "Monitoring, incident response, performance visibility, and operational practices that improve platform reliability and production support.",
  },
  {
    title: "Engineering Leadership",
    description:
      "Leading cross-functional engineering teams, mentoring technical professionals, aligning priorities, and improving delivery through practical engineering standards.",
  },
  {
    title: "Technical Product & Strategy",
    description:
      "Translating business needs into technical roadmaps, platform capabilities, and measurable outcomes through stakeholder collaboration and prioritization.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0b0c0e] text-white">
      {/* Navigation */}
      <nav className="relative z-50 mx-auto max-w-6xl px-6 py-8">
        <div className="flex items-center justify-between gap-4">
          <a
            href="#"
            className="text-lg font-bold tracking-wide"
            onClick={() => setMenuOpen(false)}
          >
            EDWARD UNUKPO
          </a>

          {/* Desktop Navigation */}
          <div className="hidden flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-[#c6a879]"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-md border border-[#34373d] text-[#c6a879] transition hover:border-[#c6a879] lg:hidden"
          >
            {menuOpen ? (
              <span
                aria-hidden="true"
                className="text-3xl leading-none"
              >
                ×
              </span>
            ) : (
              <span
                aria-hidden="true"
                className="text-2xl leading-none"
              >
                ☰
              </span>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div
            id="mobile-navigation"
            className="mt-6 rounded-xl border border-[#34373d] bg-[#191b1f] p-4 lg:hidden"
          >
            <div className="flex flex-col">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-4 py-3 text-sm text-[#f5f2ec] transition hover:bg-[#2b2d32] hover:text-[#c6a879]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="mx-auto flex min-h-[75vh] max-w-6xl flex-col justify-center px-6 py-20">
        <div className="mb-8 h-1 w-16 rounded-full bg-[#c6a879]" />

        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#c6a879]">
          Cloud • Data • Platform Engineering • DevOps
        </p>

        <h1 className="max-w-5xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          Engineering Solutions.
          <br />
          Enabling Teams.
          <br />
          <span className="text-[#c6a879]">
            Delivering Impact.
          </span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
          I work at the intersection of cloud infrastructure,
          data platforms, DevOps, and engineering leadership—
          building reliable systems, automating delivery,
          and connecting technology to business outcomes.
        </p>

        <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#c6a879]">
          <span>Cloud & Data Platforms</span>
          <span className="text-slate-600">•</span>
          <span>DevOps & SRE</span>
          <span className="text-slate-600">•</span>
          <span>Engineering Leadership</span>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="#impact"
            className="rounded-md bg-[#c6a879] px-7 py-3 font-semibold text-slate-950 transition hover:bg-amber-200"
          >
            Explore My Impact →
          </a>

          <a
            href="#leadership"
            className="rounded-md border border-slate-500 px-7 py-3 font-semibold transition hover:border-[#c6a879] hover:text-[#c6a879]"
          >
            Explore Expertise
          </a>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="bg-[#191b1f] px-6 py-24 text-[#f5f2ec]"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 font-semibold uppercase tracking-widest text-[#c6a879]">
            About Me
          </p>

          <h2 className="max-w-3xl text-4xl font-bold md:text-5xl">
            Connecting cloud, data, and engineering execution.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[#b4b4b8]">
            I am a technology professional with over a decade
            of experience across cloud engineering, platform
            modernization, DevOps, production reliability,
            and engineering leadership. My work spans
            infrastructure automation, Kubernetes-based
            platforms, CI/CD, observability, and cloud data
            architecture—from ingestion and transformation
            to analytics-ready platforms. I combine hands-on
            technical problem-solving with team leadership
            and strategic planning to deliver practical,
            scalable enterprise solutions.
          </p>
        </div>
      </section>

      {/* Expertise Section */}
      <section
        id="leadership"
        className="bg-[#111316] px-6 py-24 text-[#f5f2ec]"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 font-semibold uppercase tracking-widest text-[#c6a879]">
            Expertise
          </p>

          <h2 className="mb-10 text-4xl font-bold">
            Areas of Focus
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {expertise.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[#34373d] bg-[#191b1f] p-8 transition hover:border-[#c6a879]"
              >
                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-[#b4b4b8]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact, Strategic Initiatives & Selected Work */}
      <LeadershipPortfolio />

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-[#0b0c0e] px-6 py-24 text-center"
      >
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 font-semibold uppercase tracking-widest text-[#c6a879]">
            Let's Connect
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Let's Build Something Meaningful.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            Interested in discussing cloud engineering,
            data platforms, DevOps, infrastructure automation,
            or technology collaboration? I'd welcome
            the conversation.
          </p>

          <a
            href="mailto:edwardunukpo@gmail.com"
            className="mt-10 inline-flex items-center justify-center rounded-md bg-[#c6a879] px-8 py-3 font-semibold text-slate-950 transition hover:bg-amber-200"
          >
            Get in Touch →
          </a>

          <p className="mt-6 text-sm text-slate-400">
            Or email me directly at{" "}
            <a
              href="mailto:edwardunukpo@gmail.com"
              className="text-[#c6a879] underline underline-offset-4 hover:text-amber-200"
            >
              edwardunukpo@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#08090b] px-6 py-8 text-center text-sm text-slate-400">
        © 2026 Edward Unukpo. All rights reserved.
      </footer>
    </main>
  );
}
