"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <div className="wrap nav-inner">
        <Link href="/" onClick={closeMenu}>
          {/* Using a standard img tag because next/image requires domains config for external URLs, 
              which is safer for absolute URLs from codetrain's live site */}
          <img
            className="logo"
            src="https://codetrainafrica.com/_next/image?url=%2Fcodetrain-logo.png&w=256&q=75"
            alt="Codetrain Africa"
          />
        </Link>
        
        <button
          className="hamburger"
          aria-label="Menu"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          ☰
        </button>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link href="/#about" onClick={closeMenu}>
            About Us
          </Link>
          
          <div className="dropdown">
            <button aria-haspopup="true" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              Courses <ChevronDown size={14} />
            </button>
            <div className="dropdown-menu">
              <Link href="/software-engineering" onClick={closeMenu}>
                <span className="tag-dot" style={{ background: "var(--violet)" }}></span>
                <span>
                  Full Stack AI Developer
                  <small>Flagship · 18 months · beginner-friendly</small>
                </span>
              </Link>
              <Link href="/product-design" onClick={closeMenu}>
                <span className="tag-dot" style={{ background: "var(--pink)" }}></span>
                <span>
                  Product Design
                  <small>18 months · research to published products</small>
                </span>
              </Link>
              <Link href="/ai-program" onClick={closeMenu}>
                <span className="tag-dot" style={{ background: "var(--indigo)" }}></span>
                <span>
                  AI Program — Talent Accelerator
                  <small>16 weeks · for working developers</small>
                </span>
              </Link>
              <Link href="/ai-advantage" onClick={closeMenu}>
                <span className="tag-dot" style={{ background: "var(--lblue)" }}></span>
                <span>
                  AI Advantage Programme
                  <small>3 Saturdays · for professionals, no coding</small>
                </span>
              </Link>
              <Link href="/kids" onClick={closeMenu}>
                <span className="tag-dot" style={{ background: "var(--yellow)" }}></span>
                <span>
                  Codetrain Solara (Kids)
                  <small>Ages 8–14 · online Saturdays</small>
                </span>
              </Link>
            </div>
          </div>
          
          <Link href="/#stories" onClick={closeMenu}>
            Success Stories
          </Link>
          <Link href="/hire" onClick={closeMenu}>
            Hire a Grad
          </Link>
          <a
            href="https://codetrainafrica.com/partnerships"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Partnerships
          </a>
          <a
            href="https://codetrainafrica.com/donate"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Donate
          </a>
          <a
            className="btn btn-primary btn-sm"
            href="https://codetrainafrica.heiapply.com/application"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Apply Now
          </a>
        </div>
      </div>
    </nav>
  );
}
