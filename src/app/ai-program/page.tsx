import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Program ( For Software Developers ) | Codetrain Africa",
  description: "Transform from a web developer to an AI engineer in 16 weeks. Master Python, LLM APIs, prompt engineering, RAG, agents, LangChain, vector databases, and production scaling.",
};

export default function AiProgram() {
  return (
    <main>
      <header className="chero">
        <div className="wrap chero-grid">
          <div>
            <span className="kicker" style={{ color: "var(--indigo)", background: "#F0E7FD" }}>
              For working developers · Next cohort October 2026
            </span>
            <h1>AI Program ( For Software Developers )</h1>
            <p className="lede">
              A 16-week intensive that turns experienced web developers into AI engineers. If you build with JavaScript
              today, you'll leave shipping production AI systems — LLM-powered apps, RAG pipelines, and agents — with
              a deployed capstone product that has real users.
            </p>
            <div className="hero-ctas">
              <a
                className="btn btn-primary"
                href="https://codetrainafrica.heiapply.com/application"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply now
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
            src="/people/group3.jpg"
            alt="AI Talent Accelerator students"
          />
        </div>
        <div className="wrap facts">
          <div className="fact">
            <span>Duration</span>
            <b>16 weeks · 12-week fast track</b>
          </div>
          <div className="fact">
            <span>Format</span>
            <b>Virtual &amp; in-person</b>
          </div>
          <div className="fact">
            <span>Fee</span>
            <b>GHS 15,000</b>
          </div>
          <div className="fact">
            <span>Prerequisite</span>
            <b>Working web dev experience (JS/MERN)</b>
          </div>
        </div>
      </header>

      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="kicker" style={{ color: "var(--indigo)", background: "#F0E7FD" }}>
              Curriculum
            </span>
            <h2>Four blocks. Build before theory.</h2>
            <p>You'll understand everything you ship — and ship production systems, not demos.</p>
          </div>
          <div className="blocks">
            <div className="block">
              <span className="step-n" style={{ background: "var(--indigo)" }}>
                B1
              </span>
              <div>
                <small>Block 1</small>
                <h3>Python for the AI ecosystem</h3>
                <p>
                  Move from JavaScript into the AI stack: Python, FastAPI, and the frameworks behind modern AI
                  engineering.
                </p>
              </div>
            </div>
            <div className="block">
              <span className="step-n" style={{ background: "var(--indigo)" }}>
                B2
              </span>
              <div>
                <small>Block 2</small>
                <h3>AI engineering foundations</h3>
                <p>
                  LLM APIs, prompt engineering, retrieval-augmented generation (RAG), embeddings, and vector
                  databases.
                </p>
              </div>
            </div>
            <div className="block">
              <span className="step-n" style={{ background: "var(--indigo)" }}>
                B3
              </span>
              <div>
                <small>Block 3</small>
                <h3>Agents, automation &amp; production</h3>
                <p>
                  Agentic and multi-agent systems, workflow automation, monitoring and evaluation, cost control, and
                  security.
                </p>
              </div>
            </div>
            <div className="block">
              <span className="step-n" style={{ background: "var(--indigo)" }}>
                B4
              </span>
              <div>
                <small>Block 4</small>
                <h3>Capstone &amp; career readiness</h3>
                <p>
                  Ship a deployed AI product with real users, publish your work, and defend it before a panel — proof
                  employers can see.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--alt)" }}>
        <div className="wrap twocol">
          <div>
            <span className="kicker" style={{ color: "var(--indigo)", background: "#F0E7FD" }}>
              Tools you'll work with
            </span>
            <h2 style={{ fontSize: "1.45rem" }}>The modern AI engineering stack</h2>
            <ul className="checks">
              <li>Claude, OpenAI &amp; Gemini APIs</li>
              <li>LangChain &amp; LangGraph</li>
              <li>Vector databases (Pinecone, pgvector)</li>
              <li>Automation platforms (n8n, Make)</li>
              <li>Monitoring &amp; evals (LangSmith, Helicone)</li>
              <li>AI coding tools (Claude Code, Cursor, Copilot)</li>
            </ul>
          </div>
          <div>
            <span className="kicker" style={{ color: "var(--indigo)", background: "#F0E7FD" }}>
              Is this for you?
            </span>
            <h2 style={{ fontSize: "1.45rem" }}>Built for developers, not beginners</h2>
            <ul className="checks">
              <li>You build web apps professionally (JavaScript/MERN or similar)</li>
              <li>No Python or AI experience required — we bridge you in</li>
              <li>You want to compete for AI engineering roles globally</li>
              <li>Strong candidates can fast-track to 12 weeks by assessment</li>
            </ul>
            <div style={{ marginTop: "22px" }}>
              <a
                className="btn btn-primary"
                href="https://codetrainafrica.heiapply.com/application"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
