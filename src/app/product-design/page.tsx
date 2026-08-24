import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Design and AI | Codetrain Africa",
  description: "Learn Product Design and AI (UI/UX) in 18 months. Master design fundamentals, Figma, AI-assisted workflows, and Framer to design and publish real applications. No prior experience required.",
};

export default function ProductDesign() {
  return (
    <main>
      <header className="chero">
        <div className="wrap chero-grid">
          <div>
            <span className="kicker" style={{ color: "var(--pink)", background: "#FFE5F0" }}>
              Beginner-friendly · 18 months
            </span>
            <h1>Product Design and AI</h1>
            <p className="lede">
              Graduates design digital products from research through to live, published applications — working in
              Ghana's growing tech sector, African startups, and with international clients who need African designers
              who understand local contexts.
            </p>
            <div className="hero-ctas">
              <a
                className="btn btn-primary"
                href="https://tally.so/r/xX5jKy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Request a call
              </a>
              <a
                className="btn btn-outline"
                href="https://wa.me/233545792397"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
          <img
            src="/people/uximage.jpg"
            alt="Product design students at Codetrain"
          />
        </div>
        <div className="wrap facts">
          <div className="fact">
            <span>Duration</span>
            <b>18 months · 4 phases</b>
          </div>
          <div className="fact">
            <span>Delivery</span>
            <b>In-person or online · weekday or weekend</b>
          </div>
          <div className="fact">
            <span>Tuition</span>
            <b>GHS 38,500 · up to 50% scholarship</b>
          </div>
          <div className="fact">
            <span>Next cohort</span>
            <b>October 2026</b>
          </div>
        </div>
      </header>

      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="kicker" style={{ color: "var(--pink)", background: "#FFE5F0" }}>
              Curriculum
            </span>
            <h2>What you'll build, phase by phase</h2>
            <p>
              Four milestone-gated phases — fundamentals first, then AI-assisted workflows, then real, published
              products.
            </p>
          </div>
          <div className="blocks">
            <div className="block">
              <span className="step-n" style={{ background: "var(--pink)" }}>
                M 1–3
              </span>
              <div>
                <small>Phase 1 · Design Foundations</small>
                <h3>Fundamentals before AI</h3>
                <p>
                  Visual design principles. Typography, colour, layout. Research methods, wireframing, brand
                  identity, and accessibility. No AI tools in this phase — you must understand design fundamentals
                  first. <b>Milestone 1:</b> brand identity and app screens.
                </p>
              </div>
            </div>
            <div className="block">
              <span className="step-n" style={{ background: "var(--pink)" }}>
                M 4–6
              </span>
              <div>
                <small>Phase 2 · AI-Assisted Design</small>
                <h3>Design faster and smarter with AI</h3>
                <p>
                  AI tools introduced from Month 4. AI-assisted product design, component libraries, usability
                  testing, developer handoff, and Figma mastery. <b>Milestone 2:</b> a full product design with AI
                  workflow evidence.
                </p>
              </div>
            </div>
            <div className="block">
              <span className="step-n" style={{ background: "var(--pink)" }}>
                M 7–9
              </span>
              <div>
                <small>Phase 3 · Building &amp; Publishing</small>
                <h3>Ship real products with Framer</h3>
                <p>
                  Framer — a no-code design tool for building real websites and apps. Motion design, collaboration
                  with developers, and a real client brief. <b>Milestone 3:</b> a live, published Framer product — it
                  must work on the assessment panel's own device.
                </p>
              </div>
            </div>
            <div className="block">
              <span className="step-n" style={{ background: "var(--pink)" }}>
                M 10–18
              </span>
              <div>
                <small>Phase 4 · Strategy &amp; Graduation</small>
                <h3>Strategy, portfolio &amp; capstone</h3>
                <p>
                  Design strategy and international design standards. Portfolio development. Technical writing — 3
                  published blog posts. A capstone project on a problem you choose, with at least 5 real users.{" "}
                  <b>Milestone 4:</b> graduation, assessed by industry reviewers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--alt)" }}>
        <div className="wrap">
          <div className="section-head">
            <span className="kicker" style={{ color: "var(--pink)", background: "#FFE5F0" }}>
              Milestones
            </span>
            <h2>Four milestones gate the programme</h2>
          </div>
          <table className="milestone-table">
            <thead>
              <tr>
                <th>Milestone</th>
                <th>When</th>
                <th>The bar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>M1 — Brand Identity + App Screens</td>
                <td>End of Month 3</td>
                <td>Pass threshold on design fundamentals</td>
              </tr>
              <tr>
                <td>M2 — Full Product Design + AI Workflow</td>
                <td>End of Month 6</td>
                <td>Pass threshold, with AI workflow evidence</td>
              </tr>
              <tr>
                <td>M3 — Published Framer Product</td>
                <td>End of Month 9</td>
                <td>The site must be live on the panel's device on assessment day</td>
              </tr>
              <tr>
                <td>M4 — Graduation Capstone</td>
                <td>End of Month 18</td>
                <td>Minimum 5 real users — regardless of design quality</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <div className="wrap twocol">
          <div>
            <span className="kicker" style={{ color: "var(--pink)", background: "#FFE5F0" }}>
              Outcomes
            </span>
            <h2 style={{ fontSize: "1.45rem" }}>What graduates can do</h2>
            <ul className="checks">
              <li>Design full digital products from user research through to published, live application</li>
              <li>Use Figma professionally for UI/UX design and developer handoff</li>
              <li>Use Framer to build and publish real websites and apps without coding</li>
              <li>Integrate AI tools into their design workflow purposefully and critically</li>
              <li>Present and defend design decisions to clients and stakeholders</li>
              <li>Write and publish technical content about their design process</li>
              <li>Work with development teams on real products</li>
            </ul>
          </div>
          <div>
            <span className="kicker" style={{ color: "var(--pink)", background: "#FFE5F0" }}>
              Who it's for
            </span>
            <h2 style={{ fontSize: "1.45rem" }}>This programme is right for you if…</h2>
            <ul className="checks">
              <li>You're a complete beginner with no design experience</li>
              <li>You're a working professional in any field who wants to move into product design or UX</li>
              <li>You're visual and creative and want a structured, professional pathway</li>
              <li>You've used apps and wanted to design them instead</li>
              <li>You work in finance, healthcare, education, admin, or communication and want to pivot into tech</li>
            </ul>
            <div style={{ marginTop: "24px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                className="btn btn-primary"
                href="https://tally.so/r/b510B7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Request a call
              </a>
              <a
                className="btn btn-outline"
                href="https://wa.me/233545792397"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
