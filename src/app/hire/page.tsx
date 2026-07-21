import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire Codetrain Graduates | Codetrain Africa",
  description: "Hire job-ready AI developers and product designers who can ship from day one. Zero-cost talent matching, vetted portfolios, and Demo Day hiring.",
};

export default function Hire() {
  return (
    <main>
      <header className="chero">
        <div className="wrap chero-grid">
          <div>
            <span className="kicker">For employers</span>
            <h1>Hire graduates who can ship from day one</h1>
            <p className="lede">
              Codetrain graduates are trained on real projects with modern AI tooling, vetted through milestone
              assessments, and proven at Demo Day. Tell us the role — we'll match you with job-ready AI developers and
              product designers at no cost to you.
            </p>
            <div className="hero-ctas">
              <a
                className="btn btn-primary"
                href="https://calendly.com/fosterfrimpong63/one-one-with-codetrain-admissions"
                target="_blank"
                rel="noopener noreferrer"
              >
                Request talent
              </a>
              <a className="btn btn-outline" href="mailto:admissions@codetrainafrica.com">
                Email us
              </a>
            </div>
          </div>
          <img
            src="https://codetrainafrica.com/_next/image?url=%2Fpeople%2Fgroup1.jpg&w=1080&q=75"
            alt="Codetrain graduates"
          />
        </div>
      </header>

      <section>
        <div className="wrap">
          <div className="blocks">
            <div className="block">
              <span className="step-n" style={{ background: "var(--violet)" }}>
                1
              </span>
              <div>
                <h3>Tell us what you need</h3>
                <p>Role, stack, seniority, remote or on-site. A short call is all it takes.</p>
              </div>
            </div>
            <div className="block">
              <span className="step-n" style={{ background: "var(--violet)" }}>
                2
              </span>
              <div>
                <h3>Meet matched candidates</h3>
                <p>We shortlist graduates whose training and portfolios fit your requirements.</p>
              </div>
            </div>
            <div className="block">
              <span className="step-n" style={{ background: "var(--violet)" }}>
                3
              </span>
              <div>
                <h3>Hire — or attend Demo Day</h3>
                <p>
                  Interview and hire directly, or join our next Demo Day &amp; Career Fair and meet an entire
                  graduating cohort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
