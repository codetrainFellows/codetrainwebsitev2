import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The AI Advantage Programme | Codetrain Africa",
  description: "Three Saturdays to master AI briefing and workflow methods, build a customized working AI assistant for your role, and present it at Demo Day. No coding required.",
};

export default function AiAdvantage() {
  return (
    <main>
      <header className="chero">
        <div className="wrap chero-grid">
          <div>
            <span className="kicker" style={{ color: "#1E7E96", background: "#E3F7FC" }}>
              Executive cohorts · No coding required · Next cohort October 2026
            </span>
            <h1>The AI Advantage Programme</h1>
            <p className="lede">
              Three Saturdays that change how you work. Learn a practical, repeatable method for getting real results
              from AI, build your own working AI assistant from your actual work — and prove it at a public Demo Day.
              For working professionals in finance, HR, education, sales, NGOs, and administration.
            </p>
            <div className="hero-ctas">
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
          <img
            src="/people/expe2.jpg"
            alt="Professionals learning AI at Codetrain"
          />
        </div>
        <div className="wrap facts">
          <div className="fact">
            <span>Format</span>
            <b>3 Saturdays + 2 application weeks</b>
          </div>
          <div className="fact">
            <span>Cohort size</span>
            <b>Capped at 25 · by application</b>
          </div>
          <div className="fact">
            <span>Fee</span>
            <b>GHS 2,800 · paid at enrolment</b>
          </div>
          <div className="fact">
            <span>Certification</span>
            <b>Present a working assistant at Demo Day</b>
          </div>
        </div>
      </header>

      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="kicker" style={{ color: "#1E7E96", background: "#E3F7FC" }}>
              The journey
            </span>
            <h2>Learn. Build. Prove.</h2>
          </div>
          <div className="blocks">
            <div className="block">
              <span className="step-n" style={{ background: "var(--lblue)" }}>
                S1
              </span>
              <div>
                <small>Saturday 1 · Learn</small>
                <h3>The briefing method &amp; AI workflows</h3>
                <p>
                  Master a five-part briefing framework for directing AI — then apply it to real tasks from your own
                  profession, with exercise banks for finance, HR, education, sales &amp; marketing, NGOs, and
                  administration.
                </p>
              </div>
            </div>
            <div className="block">
              <span className="step-n" style={{ background: "#8FDDEF" }}>
                W1
              </span>
              <div>
                <small>Application week</small>
                <h3>Put it to work</h3>
                <p>
                  Structured exercises in your real job between sessions — because the skill only counts if it
                  survives Monday morning.
                </p>
              </div>
            </div>
            <div className="block">
              <span className="step-n" style={{ background: "var(--lblue)" }}>
                S2
              </span>
              <div>
                <small>Saturday 2 · Build</small>
                <h3>Build your work assistant</h3>
                <p>
                  Build a working AI assistant from a template, tailored to your role — with guest practitioners
                  sharing how they use AI at work, and training in judgment: knowing when to trust AI and when not
                  to.
                </p>
              </div>
            </div>
            <div className="block">
              <span className="step-n" style={{ background: "#8FDDEF" }}>
                W2
              </span>
              <div>
                <small>Application week</small>
                <h3>Refine and rehearse</h3>
                <p>Sharpen your assistant on real tasks and prepare your Demo Day presentation.</p>
              </div>
            </div>
            <div className="block">
              <span className="step-n" style={{ background: "var(--lblue)" }}>
                S3
              </span>
              <div>
                <small>Saturday 3 · Prove</small>
                <h3>Demo Day &amp; certification</h3>
                <p>
                  Present your working assistant at a public Demo Day. Certification is earned by demonstrating a
                  working tool — not by attendance. Embossed certificates presented on stage, with managers invited.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--alt)" }}>
        <div className="wrap twocol">
          <div>
            <span className="kicker" style={{ color: "#1E7E96", background: "#E3F7FC" }}>
              For organisations
            </span>
            <h2 style={{ fontSize: "1.45rem" }}>Run a cohort for your team</h2>
            <p style={{ marginTop: "10px" }}>
              Dedicated organisational cohorts, customised to your sector, invoiced directly to your organisation. A
              one-day intensive format is available for corporate teams. Minimum 10 participants.
            </p>
            <div style={{ marginTop: "20px" }}>
              <a
                className="btn btn-primary"
                href="https://wa.me/233545792397"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
          <div>
            <span className="kicker" style={{ color: "#1E7E96", background: "#E3F7FC" }}>
              Not ready yet?
            </span>
            <h2 style={{ fontSize: "1.45rem" }}>Join the free AI &amp; Work session</h2>
            <p style={{ marginTop: "10px" }}>
              A free monthly online discussion on how professionals are actually using AI at work. Come with
              questions, leave with ideas — and see if the full programme is right for you.
            </p>
            <div style={{ marginTop: "20px" }}>
              <a
                className="btn btn-outline"
                href="https://tally.so/r/wodqVO"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register interest
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
