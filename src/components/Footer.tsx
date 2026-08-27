import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <span className="foot-logo">
              <img
                src="/codetrain-logo.png"
                alt="Codetrain Africa"
              />
            </span>
            <p style={{ color: "#B9B3D6", fontSize: ".88rem" }}>
              Ghana&apos;s leading AI and software engineering training institution.
              In-person at East Legon, Accra — and live online, wherever you are.
            </p>
          </div>
          <div>
            <h4>Courses</h4>
            <Link href="/software-engineering">Software Engineering and AI (Full Stack AI Developer)</Link>
            <Link href="/product-design">Product Design and AI</Link>
            <Link href="/ai-program">AI Program ( For Software Developers )</Link>
            <Link href="/ai-advantage">AI Advantage Programme</Link>
            <Link href="/kids">Codetrain Solara (Kids)</Link>
          </div>
          <div>
            <h4>Company</h4>
            <Link href="/hire">Hire a graduate</Link>
            <Link href="/#stories">Success stories</Link>
            <a href="https://codetrain.medium.com/" target="_blank" rel="noopener noreferrer">
              Blog
            </a>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="tel:+233545792397" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Phone size={14} style={{ color: "var(--yellow)" }} /> +233 545 792 397
            </a>
            <a href="mailto:admissions@codetrainafrica.com" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Mail size={14} style={{ color: "var(--yellow)" }} /> admissions@codetrainafrica.com
            </a>
            <span style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "#B9B3D6", fontSize: "0.89rem" }}>
              <MapPin size={14} style={{ color: "var(--yellow)", marginTop: "4px", flexShrink: 0 }} /> 16a Parsnip Street, East Legon, Accra (near A&amp;C Mall)
            </span>
            <div style={{ marginTop: "14px" }}>
              <a
                style={{ display: "inline", marginRight: "12px" }}
                href="https://www.linkedin.com/school/codetrain/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                style={{ display: "inline", marginRight: "12px" }}
                href="https://www.instagram.com/codetrainafrica/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                style={{ display: "inline", marginRight: "12px" }}
                href="https://www.facebook.com/codetraingh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                style={{ display: "inline" }}
                href="https://x.com/codetraingh"
                target="_blank"
                rel="noopener noreferrer"
              >
                X
              </a>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Codetrain — All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}
