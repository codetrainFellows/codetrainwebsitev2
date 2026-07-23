import React from "react";
import type { Metadata } from "next";
import { Monitor, Rocket, Mic, Globe } from "lucide-react";

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
              Unlock your child's potential with Africa's premier online school for future innovators. Through hands-on,
              project-based learning that combines coding, AI, creativity, and leadership, Solara transforms kids
              into world-class innovators, leaders, and entrepreneurs.
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
                href="https://wa.me/233545792397"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
          <img
            src="/people/jeremy.jpg"
            alt="Young innovators at Codetrain Solara"
            style={{ objectPosition: "top" }}
          />
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
              Your child's journey
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
                href="https://codetrainafrica.heiapply.com/application"
                target="_blank"
                rel="noopener noreferrer"
              >
                Enroll now
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
            <h2 style={{ fontSize: "1.45rem" }}>Jermaine's journey</h2>
            <p style={{ marginTop: "10px" }}>
              At just 8 years old, Jermaine's parents recognised his passion for technology and enrolled him at
              Codetrain. By 11, he had developed a COVID-19 statistics app. He mastered full-stack web development —
              JavaScript, React, and MongoDB — alongside teamwork, public speaking, and technical communication.
              Today he advises two companies and mentors at Moonshot Pirates in Austria.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
