import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full Stack AI Developer (Software Engineering) | Codetrain Africa",
  description: "Become a Full Stack AI Developer in 18 months. Master MERN stack, integrate LLM APIs (Claude, OpenAI, Gemini), build RAG pipelines, and deploy production AI systems with real users. No prior experience required.",
};

export default function SoftwareEngineering() {
  return (
    <main>
      <header className="chero">
        <div className="wrap chero-grid">
          <div>
            <span className="kicker">Flagship · Beginner-friendly · 18 months</span>
            <h1>Full Stack AI Developer</h1>
            <p className="lede">
              Graduates of this programme build and ship AI-powered software products — and compete for engineering
              roles at Ghanaian companies, African startups, and global employers in Germany, the UK, the US, and
              Canada. No prior experience required.
            </p>
            <div className="hero-ctas">
              <a
                className="btn btn-primary"
                href="https://codetrainafrica.heiapply.com/application"
                target="_blank"
                rel="noopener noreferrer"
              >
                Enroll now
              </a>
              <a
                className="btn btn-outline"
                href="https://calendly.com/fosterfrimpong63/one-one-with-codetrain-admissions"
                target="_blank"
                rel="noopener noreferrer"
              >
                Let's talk
              </a>
            </div>
          </div>
          <img
            src="https://codetrainafrica.com/_next/image?url=%2Fpeople%2Fsoftware.jpg&w=1920&q=75"
            alt="Software engineering class at Codetrain"
          />
        </div>
        <div className="wrap facts">
          <div className="fact">
            <span>Duration</span>
            <b>18 months · 3 phases</b>
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
            <b>July 2026</b>
          </div>
        </div>
      </header>

      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">Curriculum</span>
            <h2>What you'll build, phase by phase</h2>
            <p>
              Three milestone-gated phases. You cannot advance without passing each milestone — so what you know at
              the end is real.
            </p>
          </div>
          <div className="blocks">
            <div className="block">
              <span className="step-n" style={{ background: "var(--violet)" }}>
                M 1–6
              </span>
              <div>
                <small>Phase 1 · Foundation</small>
                <h3>Full-stack fundamentals</h3>
                <p>
                  HTML, CSS, and JavaScript fundamentals. Build your portfolio page and a JavaScript mini-app, then
                  move into React and frontend development and a full CRUD application. AI tools are introduced
                  from Month 3. <b>Milestone 1:</b> build and deploy a full MERN (MongoDB, Express, React, Node.js)
                  application.
                </p>
              </div>
            </div>
            <div className="block">
              <span className="step-n" style={{ background: "var(--violet)" }}>
                M 7–12
              </span>
              <div>
                <small>Phase 2 · AI Integration</small>
                <h3>Building with AI</h3>
                <p>
                  TypeScript. Working with LLM APIs (Claude, OpenAI, Gemini). Building RAG (Retrieval-Augmented
                  Generation) pipelines and AI agents. A team sprint project building a real product together.{" "}
                  <b>Milestone 2:</b> build and deploy an AI-powered product.
                </p>
              </div>
            </div>
            <div className="block">
              <span className="step-n" style={{ background: "var(--violet)" }}>
                M 13–18
              </span>
              <div>
                <small>Phase 3 · Production</small>
                <h3>Production AI systems</h3>
                <p>
                  Multi-agent AI systems. Production monitoring and evaluation. System hardening. A capstone project
                  — a real-world problem of your choosing, deployed to live users. <b>Milestone 3:</b> a production AI
                  system with real users, evaluated by industry reviewers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--alt)" }}>
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">Milestones</span>
            <h2>Three milestones gate the programme</h2>
          </div>
          <table className="milestone-table">
            <thead>
              <tr>
                <th>Milestone</th>
                <th>When</th>
                <th>What is assessed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>M1 — Full MERN App</td>
                <td>End of Month 6</td>
                <td>Functionality, code quality, code explanation, deployment, AI tool usage</td>
              </tr>
              <tr>
                <td>M2 — AI-Powered Product</td>
                <td>End of Month 12</td>
                <td>AI feature quality, architecture, code explanation, production quality, team collaboration</td>
              </tr>
              <tr>
                <td>M3 — Production AI System</td>
                <td>End of Month 18</td>
                <td>System design, AI capability, production hardening, code explanation, AI tool evidence</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <div className="wrap twocol">
          <div>
            <span className="kicker">Outcomes</span>
            <h2 style={{ fontSize: "1.45rem" }}>What graduates can do</h2>
            <ul className="checks">
              <li>Call and manage AI APIs (Claude, OpenAI, Gemini) in production applications</li>
              <li>Build retrieval-augmented generation (RAG) systems on real data</li>
              <li>Build and deploy AI agents with real tool integrations</li>
              <li>Write production-quality code in JavaScript, TypeScript, and Python</li>
              <li>Build full-stack MERN applications and deploy them to live URLs</li>
              <li>Work in engineering teams on real client projects</li>
              <li>Compete for remote AI engineering roles internationally</li>
            </ul>
          </div>
          <div>
            <span className="kicker">Who it's for</span>
            <h2 style={{ fontSize: "1.45rem" }}>This programme is right for you if…</h2>
            <ul className="checks">
              <li>You're a complete beginner — no prior coding experience required</li>
              <li>You're a university student or recent graduate who wants real, applicable skills</li>
              <li>You're a young professional entering the software industry</li>
              <li>You want to build products, not just use them</li>
              <li>You want to work for international companies remotely from Ghana</li>
            </ul>
            <div style={{ marginTop: "24px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                className="btn btn-primary"
                href="https://codetrainafrica.heiapply.com/application"
                target="_blank"
                rel="noopener noreferrer"
              >
                Enroll now
              </a>
              <a
                className="btn btn-outline"
                href="https://codetrainafrica.com/scholarship"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply for a scholarship
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--alt)", paddingTop: "56px", paddingBottom: "56px" }}>
        <div className="wrap twocol">
          <div>
            <span className="kicker">Admission</span>
            <h2 style={{ fontSize: "1.45rem" }}>What you need to get accepted</h2>
            <ul className="checks">
              <li>Computer literacy</li>
              <li>Openness to learning and growth</li>
              <li>Willingness to put in the work</li>
              <li>Pass our intake assessment</li>
            </ul>
          </div>
          <div>
            <span className="kicker" style={{ background: "#fff", border: "1px solid var(--line)" }}>
              Not required
            </span>
            <h2 style={{ fontSize: "1.45rem" }}>What you don't need</h2>
            <ul className="checks crosses">
              <li>A computer science certificate</li>
              <li>Previous tech experience</li>
              <li>Any degree</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
