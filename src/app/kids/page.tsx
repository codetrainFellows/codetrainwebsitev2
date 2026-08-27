import React from "react";
import type { Metadata } from "next";
import { Monitor, Rocket, Mic, Globe, GraduationCap, User, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Codetrain Solara (Kids Coding) | Codetrain Africa",
  description: "Africa's premier online school for coding, AI, and leadership for kids aged 8–16. Hands-on, project-based learning, Saturday classes, and innovation bootcamp.",
};

export default function Kids() {
  return (
    <main>
      <header className="chero">
        <div className="wrap chero-grid">
          <div>
            <span className="kicker" style={{ color: "#9A7100", background: "#FFF3D1" }}>
              Ages 8–16 · Online school · Rolling admissions
            </span>
            <h1>Codetrain Solara — Coding for Kids</h1>
            <p className="lede">
              Unlock your child&apos;s potential with Africa&apos;s premier online school for future innovators. Through hands-on,
              project-based learning that combines coding, AI, creativity, and leadership, Solara transforms kids
              into world-class innovators, leaders, and entrepreneurs.
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
          <div className="hero-story-photo">
            <img
              src="/people/jeremy.jpg"
              alt="Jermaine speaking on stage at Demo Day"
            />
            <div className="hero-story-overlay">
              <div className="hero-story-name">Jermaine</div>
              <span className="hero-story-tag">Started Solara at Age 8</span>
              <ul className="hero-story-stats">
                <li>
                  <span className="hero-story-icon"><User size={14} /></span>
                  <span>
                    <b>Age 8</b>
                    Enrolled at Codetrain at just 8 years old
                  </span>
                </li>
                <li>
                  <span className="hero-story-icon"><Monitor size={14} /></span>
                  <span>
                    <b>Age 11</b>
                    Built a COVID-19 statistics app
                  </span>
                </li>
                <li>
                  <span className="hero-story-icon"><Rocket size={14} /></span>
                  <span>
                    <b>Age 12</b>
                    Started his first company
                  </span>
                </li>
                <li>
                  <span className="hero-story-icon"><Briefcase size={14} /></span>
                  <span>
                    <b>Teen Years</b>
                    Interned with a technology startup
                  </span>
                </li>
                <li className="hero-story-climax">
                  <span className="hero-story-icon"><GraduationCap size={14} /></span>
                  <span>
                    <b>Today</b>
                    Earned 5 full A-Level scholarship offers in the UK
                    <span className="hero-story-badge">Including Eton College, UK</span>
                  </span>
                </li>
              </ul>
              <div className="hero-story-quote">
                <span className="hero-quote-mark">&ldquo;</span>
                <p>
                  <em>Start early. Stay curious.</em>
                  <span>The future is built by those who start today.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="wrap facts">
          <div className="fact">
            <span>Ages</span>
            <b>8–16</b>
          </div>
          <div className="fact">
            <span>Schedule</span>
            <b>Online Saturday classes · 12noon–3pm GMT</b>
          </div>
          <div className="fact">
            <span>Duration</span>
            <b>3–5 years · annual subscription</b>
          </div>
          <div className="fact">
            <span>Admissions</span>
            <b>Rolling — enrol anytime · GHS 10,000/year</b>
          </div>
        </div>
      </header>

      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="kicker" style={{ color: "#9A7100", background: "#FFF3D1" }}>
              Your child&apos;s journey
            </span>
            <h2>What your child will grow into</h2>
            <p>
              Kids as young as 10–14 at Codetrain have built an NFC-powered mobile wallet, a COVID-19 data tracker, a
              communicable diseases app, and their own games — and mentored peers and spoken at international
              innovation challenges.
            </p>
          </div>
          <div className="exp-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
            <div className="exp">
              <div className="ic" style={{ background: "#FFF3D1" }}>
                <Monitor size={20} style={{ color: "#9A7100" }} />
              </div>
              <h3>Excel in technology &amp; innovation</h3>
              <p>
                Master the fundamentals of coding, AI, and app development — positioning them to lead advancements in
                cutting-edge technologies.
              </p>
            </div>
            <div className="exp">
              <div className="ic" style={{ background: "#FFF3D1" }}>
                <Rocket size={20} style={{ color: "#9A7100" }} />
              </div>
              <h3>Shape industries &amp; launch startups</h3>
              <p>Gain entrepreneurial skills to create transformative solutions and drive innovation within global markets.</p>
            </div>
            <div className="exp">
              <div className="ic" style={{ background: "#FFF3D1" }}>
                <Mic size={20} style={{ color: "#9A7100" }} />
              </div>
              <h3>Inspire &amp; mentor others</h3>
              <p>Build communication and leadership skills — from mentoring peers to speaking on global stages.</p>
            </div>
            <div className="exp">
              <div className="ic" style={{ background: "#FFF3D1" }}>
                <Globe size={20} style={{ color: "#9A7100" }} />
              </div>
              <h3>Pursue global tech opportunities</h3>
              <p>Prepare to thrive as a tech leader working on international teams and solving pressing global challenges.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--alt)" }}>
        <div className="wrap twocol">
          <div>
            <span className="kicker" style={{ color: "#9A7100", background: "#FFF3D1" }}>
              Programme structure
            </span>
            <h2 style={{ fontSize: "1.45rem" }}>How Solara works</h2>
            <ul className="checks">
              <li>Online Saturday classes, 12noon–3pm GMT</li>
              <li>In-person Summer Bootcamp</li>
              <li>Annual Innovation Conference</li>
              <li>Hands-on, project-based learning with real projects</li>
            </ul>
            <p style={{ marginTop: "16px", fontSize: ".9rem" }}>
              Part-scholarships are awarded to children who submit compelling applications and demonstrate eligibility
              based on financial need, gender inclusion, neurodivergence, or living with a disability.
            </p>
            <div style={{ marginTop: "20px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
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
          <div>
            <span className="kicker" style={{ color: "#9A7100", background: "#FFF3D1" }}>
              Proof it works
            </span>
            <h2 style={{ fontSize: "1.45rem" }}>Jermaine&apos;s journey</h2>
            <p style={{ marginTop: "10px" }}>
              Jermaine started his journey with Codetrain at just 8 years old, when his parents recognised his interest
              in technology and made the decision to nurture it early.
            </p>
            <p style={{ marginTop: "10px" }}>
              By 11, he had built a COVID-19 statistics app. At 12, he started his first company. As his technical
              skills grew, so did his confidence, leadership, communication and ability to turn ideas into real projects.
            </p>
            <p style={{ marginTop: "10px" }}>
              His journey went beyond the classroom. Jermaine gained real-world experience through an internship with a
              technology startup and went on to mentor at Moonshot Pirates in Austria.
            </p>
            <p style={{ marginTop: "10px" }}>
              Today, Jermaine has earned five full A-Level scholarship offers in the UK, including Eton College.
            </p>
            <p style={{ marginTop: "10px" }}>
              His journey shows what is possible when a child&apos;s potential is discovered, nurtured and developed early.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
