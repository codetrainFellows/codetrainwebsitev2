"use client";

import React, { useState } from "react";
import "./solara.css";

export default function SolaraPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="solara-route">
      {/* ANNOUNCEMENT */}
      <div className="announce">
        Applications are open for the 2026 Founding Cohort — limited to 40 Fellows.{" "}
        <a href="#admissions">Apply Now</a>
      </div>

      <header>
        <nav>
          <a className="logo" href="#top">
            <svg className="mark" viewBox="0 0 40 40" fill="none">
              <circle cx="16" cy="20" r="12" stroke="#211C4D" strokeWidth="2.4" />
              <circle cx="24" cy="20" r="12" stroke="#211C4D" strokeWidth="2.4" />
            </svg>
            <span className="word">
              Solara<span>by Codetrain Africa</span>
            </span>
          </a>
          <div className={`navlinks ${menuOpen ? "open" : ""}`}>
            <a href="#outcomes" onClick={() => setMenuOpen(false)}>Outcomes</a>
            <a href="#jermaine" onClick={() => setMenuOpen(false)}>Success Story</a>
            <a href="#curriculum" onClick={() => setMenuOpen(false)}>Curriculum</a>
            <a href="#team" onClick={() => setMenuOpen(false)}>Our Team</a>
            <a href="#admissions" onClick={() => setMenuOpen(false)}>Admissions</a>
            <a href="#fees" onClick={() => setMenuOpen(false)}>Tuition</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          </div>
          <div className="navcta">
            <a className="btn btn-amber" href="#admissions">
              Apply Now
            </a>
            <button
              className="hamburger"
              aria-label="Menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero" id="top" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <span className="eyebrow">A Fellowship by Codetrain Africa</span>
          <h1>Preparing the next generation of AI engineers, founders, and global innovators.</h1>
        </div>
        <div className="hero-photo-band">
          <div className="media-slot" style={{ position: "absolute", inset: 0, borderRadius: 0 }}>
            <span className="slot-label">Photo placeholder</span>
            <span className="slot-meta">Fellows at work · full-bleed background, low opacity</span>
          </div>
          <div className="wrap">
            <div className="lead-wrap" style={{ background: "rgba(242, 241, 247, 0.88)", padding: "8px 0" }}>
              {/* Proof chips */}
              <div className="proof-chips">
                <span className="proof-chip">
                  <span className="dot"></span>One alum founded a startup at 12
                </span>
                <span className="proof-chip">
                  <span className="dot"></span>5 UK A-Level scholarship offers, age 15
                </span>
                <span className="proof-chip">
                  <span className="dot"></span>Built by the team behind 700+ engineers
                </span>
                <span className="proof-chip">
                  <span className="dot"></span>AI careers pay $150K–$400K+ globally
                </span>
              </div>
              <ul>
                <li>Learn AI, software engineering and computer science through real projects, not worksheets</li>
                <li>Graduate with a professional portfolio, GitHub profile and public speaking experience</li>
                <li>Join a fellowship built by the team behind Codetrain Africa — 700+ engineers trained since 2017</li>
              </ul>
              <div className="herobtns">
                <a className="btn btn-amber" href="#admissions">
                  Apply Now
                </a>
                <a className="btn btn-whatsapp" href="https://wa.me/233545792397" target="_blank" rel="noopener noreferrer">
                  <svg className="wa" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.4A10 10 0 1 0 12 2zm0 18.2a8.1 8.1 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-1.3-.6-2.2-1.1-3.1-2.6-.2-.3 0-.5.1-.6.2-.2.4-.5.6-.7.1-.2.1-.4 0-.6-.1-.2-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.1 0 1.3 1 2.5 1.1 2.7.1.2 1.9 3 4.7 4.1 2.3.9 2.3.6 2.7.6.4 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.4-.3z" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>
              <span className="note">* Applications are still open — join the 2026 Founding Cohort. Ages 10–16.</span>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT / TRUST STATS */}
      <section className="impact">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Backed by Codetrain Africa</span>
            <h2>Our Impact</h2>
            <p>Solara is built and mentored by the team behind Codetrain Africa, training software developers since 2017.</p>
          </div>
          <div className="stats">
            <div>
              <div className="stat-label">Alumni</div>
              <div className="stat-num">700+</div>
              <div className="stat-cap">Engineers trained and counting</div>
            </div>
            <div>
              <div className="stat-label">Job Placement</div>
              <div className="stat-num">89%</div>
              <div className="stat-cap">Of graduates secure jobs within 6–9 months</div>
            </div>
            <div>
              <div className="stat-label">Experience</div>
              <div className="stat-num">8 yrs</div>
              <div className="stat-cap">Building tech talent in Ghana</div>
            </div>
          </div>
          <div className="badge-strip">
            <span className="trust-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z" />
              </svg>
              Safe &amp; Vetted Mentors
            </span>
            <span className="trust-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 15a5 5 0 100-10 5 5 0 000 10zM8.5 14L7 22l5-3 5 3-1.5-8" />
              </svg>
              Certificate on Completion
            </span>
            <span className="trust-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Selective Admissions
            </span>
          </div>
          <p style={{ textAlign: "center", fontSize: ".78rem", color: "var(--muted)", marginTop: "28px", letterSpacing: ".05em", textTransform: "uppercase", fontWeight: 600 }}>
            The team behind Solara has been featured in
          </p>
          <div className="press-strip" style={{ marginTop: "14px" }}>
            <span>Joy FM</span>
            <span>Citi News</span>
            <span>TechPoint Africa</span>
            <span>Disrupt Africa</span>
            <span>TAP Magazine</span>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section id="outcomes">
        <div className="wrap">
          <div className="swoosh" style={{ top: "-20px", left: "-50px", width: "340px", height: "200px", opacity: 0.5 }}>
            <svg viewBox="0 0 400 200">
              <path d="M20,150 C150,20 250,20 380,150" stroke="#6FDBE0" strokeWidth="30" fill="none" strokeLinecap="round" />
            </svg>
          </div>
          <div className="section-head">
            <span className="eyebrow">Why This Matters</span>
            <h2>Built in Ghana. Built for the world.</h2>
            <p>
              These are the kinds of outcomes the skills Solara teaches can open doors to — real alumni results, global proof points, and market data. Not a promise for any one Fellow, but a picture of the ceiling.
            </p>
          </div>
          <div className="outcomes">
            <div className="outcome-card">
              <span className="tag2">Real Alumni Outcome</span>
              <h4>From Codetrain Fellow to Senior Developer, Canada</h4>
              <p>
                Awal joined Codetrain as a fellow. Within five years, he was working remotely as a Senior Developer for Big Viking Games, a Canadian gaming company — earning international pay while based at home in Ghana.
              </p>
            </div>
            <div className="outcome-card">
              <span className="tag2">Global Proof Point</span>
              <h4>Two African Engineers. Y Combinator. A $200M Acquisition.</h4>
              <p>
                Paystack was built by two engineers in a Lagos apartment. It became the first Nigerian startup accepted into Y Combinator — the world's top startup accelerator — and in 2020, Stripe acquired it for over $200 million. Proof that African-built technology can compete and win on the global stage.
              </p>
              <p style={{ fontSize: ".78rem", marginTop: "10px", fontStyle: "italic" }}>
                Paystack has no connection to Codetrain or Solara — it's included as proof of what's possible for African-built technology, not a guaranteed outcome.
              </p>
            </div>
            <div className="outcome-card">
              <span className="tag2">Founder at 12</span>
              <h4>A Portfolio That Stands Out Globally</h4>
              <p>
                Jermaine founded his first startup, Zest, at 12. At 15, he's Lead Design Engineer on CediRates — a live product with 100,000 monthly active users — and heading to the UK on A-Level scholarship this August. Built on real, shipped work, not test scores alone. That's the same portfolio model every Solara Fellow graduates with.
              </p>
              <p style={{ fontSize: ".78rem", marginTop: "10px", fontStyle: "italic" }}>
                Individual outcomes vary. Solara does not promise scholarships, admission, or startup outcomes for any Fellow.
              </p>
            </div>
            <div className="outcome-card">
              <span className="tag2">Global Earning Potential</span>
              <h4>What These Skills Are Worth Globally</h4>
              <p>The same disciplines Solara teaches — software engineering and AI — command some of the highest salaries in the world.</p>
              <ul className="figs">
                <li>
                  Entry-level engineer, major US tech firms <span>$150K–$185K</span>
                </li>
                <li>
                  AI / ML engineer, total compensation <span>$170K–$310K</span>
                </li>
                <li>
                  Senior engineer, leading AI labs <span>$400K+</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="outcome-fineprint">
            Figures reflect 2026 US market data (Levels.fyi, Robert Half Salary Guide) and are shown for general context only — they are not a projection, guarantee, or promise of any individual Fellow's future earnings.
          </p>
        </div>
      </section>

      {/* MEET JERMAINE */}
      <section id="jermaine">
        <div className="wrap">
          <div className="swoosh" style={{ top: "-10px", left: "20%", width: "60%", height: "140px", opacity: 0.5 }}>
            <svg viewBox="0 0 400 120">
              <path d="M10,100 C120,10 280,10 390,100" stroke="#6FDBE0" strokeWidth="26" fill="none" strokeLinecap="round" />
            </svg>
          </div>
          <div className="story-wrap">
            <div className="story-card">
              <div className="media-slot photo" style={{ padding: 0, overflow: "hidden" }}>
                <img
                  src="/people/jeremy.jpg"
                  alt="Jermaine speaking on stage at Demo Day"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
                />
              </div>
              <div className="body">
                <p>
                  Jermaine's journey shows what's possible when a child starts early, builds consistently, and has the right mentors behind them. By 12 he had founded his first startup; at 15 he's leading design engineering on a product with 100,000 monthly users. His path isn't a guarantee for every fellow — it's proof of what becomes possible.
                </p>
                <hr />
                <div className="name">Jermaine Antwi</div>
                <div className="role">Founder at 12 · Lead Design Engineer, CediRates, at 15</div>
              </div>
            </div>
            <div>
              <span className="eyebrow">Success Stories from Solara</span>
              <h2 style={{ fontSize: "1.9rem", marginBottom: "16px" }}>Meet Jermaine.</h2>
              <div className="timeline">
                <div className="tl-item">
                  <span className="age">Age 9</span>
                  <span className="desc">
                    Joins Codetrain's Software Engineering programme (2020–2022), after years of building on his family's business, JubAy Avenue.
                  </span>
                </div>
                <div className="tl-item">
                  <span className="age">Age 11</span>
                  <span className="desc">JavaScript Developer intern at ThinkSopht Labs.</span>
                </div>
                <div className="tl-item">
                  <span className="age">Age 12</span>
                  <span className="desc">
                    Founds his first startup, Zest — and interns as a Software Engineer at Classify, based remotely from London.
                  </span>
                </div>
                <div className="tl-item">
                  <span className="age">Age 15</span>
                  <span className="desc">
                    Now Lead Design Engineer building CediRates — a live product with 100,000 monthly active users. Set to begin A-Levels in the UK this August on scholarship.
                  </span>
                </div>
              </div>
              <p className="disclaimer">Individual outcomes vary. Jermaine's journey began through Codetrain, the team building Solara.</p>
            </div>
          </div>
        </div>
      </section>

      {/* JERMAINE INTERVIEW VIDEO */}
      <section className="gray-band">
        <div className="swoosh" style={{ top: "-30px", left: "-40px", width: "380px", height: "220px", opacity: 0.6 }}>
          <svg viewBox="0 0 400 200">
            <path d="M20,150 C150,20 250,20 380,150" stroke="#F5C343" strokeWidth="30" fill="none" strokeLinecap="round" />
          </svg>
        </div>
        <div className="wrap content">
          <h2>Hear It From Jermaine</h2>
          <p className="body">
            In his own words: what it felt like to start coding at eight, what building his first real app taught him, and what he'd tell a Solara Fellow just starting out.
          </p>
          <div className="video-card" style={{ maxWidth: "640px" }}>
            <div className="media-slot video-wide">
              <span className="play">▶</span>
              <span className="slot-label">Video placeholder</span>
              <span className="slot-meta">Jermaine — the interview</span>
            </div>
            <div className="name-tag">
              <b>Jermaine Antwi</b>
              <span>Founder, Zest · Lead Design Engineer, CediRates</span>
            </div>
          </div>
        </div>
      </section>

      {/* THE FELLOWSHIP */}
      <section id="fellowship">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">The Fellowship Model</span>
            <h2>Here's how we get them there.</h2>
            <p>Solara Fellows progress through three years of increasingly ambitious projects, mentorship and challenges.</p>
          </div>
          <div className="years">
            <div className="year-card">
              <span className="num">Year One — Foundations</span>
              <h3>Think Like a Builder</h3>
              <p className="theme">Computational thinking, block-based coding, and first real projects.</p>
              <ul>
                <li>Computational thinking &amp; logic through games and puzzles</li>
                <li>Block-based programming, building into Python basics</li>
                <li>Digital creativity: simple websites, stories &amp; animations</li>
                <li>End-of-year: a small website or game solving a real problem</li>
              </ul>
            </div>
            <div className="year-card">
              <span className="num">Year Two — Engineering</span>
              <h3>Build Real Projects</h3>
              <p className="theme">JavaScript, interactive websites, and working in teams.</p>
              <ul>
                <li>JavaScript &amp; interactive web pages</li>
                <li>Intro to app design &amp; user-friendly interfaces</li>
                <li>Team projects — building and improving together</li>
                <li>Capstone: a working app or website shared with real users</li>
              </ul>
            </div>
            <div className="year-card">
              <span className="num">Year Three — Innovation</span>
              <h3>Explore AI &amp; Build Ideas</h3>
              <p className="theme">AI tools, problem-solving, and pitching an idea.</p>
              <ul>
                <li>Using &amp; building with AI tools and assistants</li>
                <li>Problem-solving &amp; logic challenges</li>
                <li>Innovation Studio: pitch and prototype an idea using simple tools and AI</li>
                <li>Graduate with a portfolio of real, shared projects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TEAL BAND: SIX PILLARS */}
      <section className="teal-band" id="curriculum">
        <div className="swoosh" style={{ top: "-40px", left: "-60px", width: "420px", height: "220px", opacity: 0.55 }}>
          <svg viewBox="0 0 400 200">
            <path d="M20,150 C150,20 250,20 380,150" stroke="#F5C343" strokeWidth="34" fill="none" strokeLinecap="round" />
          </svg>
        </div>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow" style={{ color: "var(--navy)" }}>What Fellows Learn</span>
            <h2>Six pillars. One capability: building.</h2>
            <p>Every fellow develops across six areas — not memorising syntax, but learning to design, build and ship real software.</p>
          </div>
          <div className="pillars">
            <div className="pillar">
              <svg className="ic" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
                <path d="M8 20h8M12 16v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <h4>Computer Science</h4>
              <p>Logic, puzzles, and computational thinking — the fundamentals of how computers "think."</p>
            </div>
            <div className="pillar">
              <svg className="ic" viewBox="0 0 24 24" fill="none">
                <path d="M8 6L3 12l5 6M16 6l5 6-5 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h4>Software Engineering</h4>
              <p>Block-based coding, Python, JavaScript, and building real websites and apps.</p>
            </div>
            <div className="pillar">
              <svg className="ic" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
                <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <h4>Artificial Intelligence</h4>
              <p>Using AI tools thoughtfully, simple prompt engineering, and AI ethics.</p>
            </div>
            <div className="pillar">
              <svg className="ic" viewBox="0 0 24 24" fill="none">
                <path d="M12 2l3 6 6 1-4.5 4.5 1 6L12 17l-5.5 2.5 1-6L3 9l6-1 3-6z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
              </svg>
              <h4>Product Building</h4>
              <p>Every term ends with a shipped web, mobile or AI product.</p>
            </div>
            <div className="pillar">
              <svg className="ic" viewBox="0 0 24 24" fill="none">
                <path d="M3 17l6-6 4 4 8-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15 7h6v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h4>Innovation &amp; Entrepreneurship</h4>
              <p>Design thinking, customer discovery, pitching and business models.</p>
            </div>
            <div className="pillar">
              <svg className="ic" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.6" />
                <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <h4>Leadership</h4>
              <p>Communication, teamwork, mentoring and presenting with confidence.</p>
            </div>
          </div>
          <div className="bandcta">
            <a className="btn btn-amber" href="#admissions">
              Apply Now
            </a>
            <a className="btn btn-navy" href="#curriculum">
              Curriculum Details
            </a>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section id="team">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Who's Behind Solara</span>
            <h2>Led by a founder, not an app.</h2>
            <p>
              Solara is built and run personally by the founder of Codetrain Africa — not a franchise, not outsourced, not a course licensed from somewhere else.
            </p>
          </div>
          <div className="story-wrap">
            <div className="story-card">
              <div className="media-slot photo" style={{ padding: 0, overflow: "hidden" }}>
                <img
                  src="/people/richard.jpg"
                  alt="Richard Brandt, Founder & CEO of Codetrain Africa"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
                />
              </div>
              <div className="body">
                <div className="name">Richard Brandt</div>
                <div className="role">Founder &amp; CEO, Codetrain Africa</div>
              </div>
            </div>
            <div>
              <p style={{ fontSize: "1rem", marginBottom: "20px" }}>
                Richard founded Codetrain Africa in 2017 and has personally built it, without outside investors, into an institution that has trained 700+ engineers with an 89% job placement rate. Solara is his fellowship — the same standards, the same accountability, with his name on it.
              </p>
              <ul style={{ listStyle: "none" }}>
                <li style={{ display: "flex", gap: "10px", marginBottom: "14px", fontSize: ".95rem", color: "var(--ink)", fontWeight: 500 }}>
                  <span style={{ color: "var(--pink)", fontWeight: 700 }}>•</span>Completed the two-year MEST Africa entrepreneurship programme and Startup Chile
                </li>
                <li style={{ display: "flex", gap: "10px", marginBottom: "14px", fontSize: ".95rem", color: "var(--ink)", fontWeight: 500 }}>
                  <span style={{ color: "var(--pink)", fontWeight: 700 }}>•</span>Recipient of the World Summit Youth Award and named among Ghana's 50 Most Influential Youth
                </li>
                <li style={{ display: "flex", gap: "10px", marginBottom: "14px", fontSize: ".95rem", color: "var(--ink)", fontWeight: 500 }}>
                  <span style={{ color: "var(--pink)", fontWeight: 700 }}>•</span>Built partnerships with GIZ (the German government's development agency) and Chancen International
                </li>
              </ul>
              <p className="disclaimer" style={{ marginTop: "6px" }}>
                Not an anonymous edtech platform — a founder personally accountable to every parent who enrolls a child.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SAFEGUARDING & INCLUSION */}
      <section className="gray-band">
        <div className="wrap content">
          <div className="section-head">
            <span className="eyebrow">Your Child's Safety &amp; Belonging</span>
            <h2 style={{ textTransform: "none" }}>Safeguarding &amp; Inclusion Come First</h2>
            <p>
              We know you're trusting us with your child. That's a responsibility we take as seriously as the curriculum — and it includes making sure every kind of learner belongs here.
            </p>
          </div>
          <div className="safe-grid">
            <div className="safe-card">
              <svg className="ic2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z" />
              </svg>
              <h4>Vetted Mentors</h4>
              <p>Every mentor is background-checked before working with Fellows, in person or online.</p>
            </div>
            <div className="safe-card">
              <svg className="ic2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
              </svg>
              <h4>Supervised Studios</h4>
              <p>In-person sessions are always supervised by at least two adults; virtual sessions are recorded.</p>
            </div>
            <div className="safe-card">
              <svg className="ic2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <h4>Open Parent Line</h4>
              <p>Direct WhatsApp access to mentors and admissions — no question is too small.</p>
            </div>
            <div className="safe-card">
              <svg className="ic2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="8" r="3.2" />
                <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
              </svg>
              <h4>Neurodivergent-Friendly Studios</h4>
              <p>
                Flexible pacing, sensory-considerate spaces, and mentors trained to support different learning styles — following Codetrain's existing inclusion practice for neurodivergent learners.
              </p>
            </div>
            <div className="safe-card">
              <svg className="ic2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="4" y="4" width="16" height="16" rx="3" />
                <path d="M8 12h8M12 8v8" />
              </svg>
              <h4>Accessible for Disabled Fellows</h4>
              <p>Physical accessibility and assistive-technology accommodations are available — tell us what your child needs during the application.</p>
            </div>
            <div className="safe-card">
              <svg className="ic2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 2l3 6 6 1-4.5 4.5 1 6L12 17l-5.5 2.5 1-6L3 9l6-1 3-6z" />
              </svg>
              <h4>Inclusion Scholarships</h4>
              <p>
                Part and full scholarships are available for girls, neurodivergent Fellows, and those living with sickle cell — the same commitment Codetrain has held since 2017.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">What Parents Say</span>
            <h2>Real families, real feedback.</h2>
          </div>
          <div className="testi-grid">
            <div className="testi-card">
              <p className="quote">"Placeholder — replace with a real parent quote once the pilot cohort has run a term."</p>
              <div className="who">
                <div className="avatar"></div>
                <div>
                  <b>Parent Name</b>
                  <span>Parent of a Fellow</span>
                </div>
              </div>
            </div>
            <div className="testi-card">
              <p className="quote">"Placeholder — replace with a real parent quote once the pilot cohort has run a term."</p>
              <div className="who">
                <div className="avatar"></div>
                <div>
                  <b>Parent Name</b>
                  <span>Parent of a Fellow</span>
                </div>
              </div>
            </div>
            <div className="testi-card">
              <p className="quote">"Placeholder — replace with a real parent quote once the pilot cohort has run a term."</p>
              <div className="who">
                <div className="avatar"></div>
                <div>
                  <b>Parent Name</b>
                  <span>Parent of a Fellow</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE / DEMO DAY VIDEOS */}
      <section id="experience">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">The Solara Experience</span>
            <h2>Learning that feels like an engineering team, not a classroom.</h2>
            <p>
              Every fellow follows the same cycle on every project: Learn → Build → Test → Present → Improve. Instead of exams, terms end with Demo Day.
            </p>
          </div>
          <div className="video-pair">
            <div className="video-card">
              <div className="media-slot video-wide">
                <span className="play">▶</span>
                <span className="slot-label">Video placeholder</span>
                <span className="slot-meta">Demo Day clip 1</span>
              </div>
              <div className="name-tag">
                <b>Demo Day</b>
                <span>Fellows present to parents &amp; mentors</span>
              </div>
            </div>
            <div className="video-card">
              <div className="media-slot video-wide">
                <span className="play">▶</span>
                <span className="slot-label">Video placeholder</span>
                <span className="slot-meta">Demo Day clip 2</span>
              </div>
              <div className="name-tag">
                <b>Demo Day</b>
                <span>Fellows present to parents &amp; mentors</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADMISSIONS */}
      <section id="admissions">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Admissions</span>
            <h2>Becoming a Solara Fellow</h2>
            <p>
              Joining Solara is a selection process, like joining an academy. We look for curiosity, commitment and teachability — not existing skill.
            </p>
          </div>
          <div className="scarcity-note">The 2026 Founding Cohort is limited to 40 Fellows, so mentors can know every child personally.</div>
          <div className="steps">
            <div className="step">
              <div className="n">1</div>
              <h4>Online Application</h4>
              <p>Tell us about your child — interests, school, goals and availability.</p>
            </div>
            <div className="step">
              <div className="n">2</div>
              <h4>Student Challenge</h4>
              <p>An age-appropriate puzzle or creative challenge — no exam, just how they think.</p>
            </div>
            <div className="step">
              <div className="n">3</div>
              <h4>Parent Conversation</h4>
              <p>We walk through the fellowship, time commitment and what to expect.</p>
            </div>
            <div className="step">
              <div className="n">4</div>
              <h4>Welcome Session</h4>
              <p>Meet mentors and future classmates before the first term begins.</p>
            </div>
          </div>
          <div className="admit-cta">
            <a className="btn btn-amber" href="#">
              Start Your Application
            </a>
            <a className="btn btn-whatsapp" href="https://wa.me/233545792397" target="_blank" rel="noopener noreferrer">
              <svg className="wa" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.4A10 10 0 1 0 12 2zm0 18.2a8.1 8.1 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-1.3-.6-2.2-1.1-3.1-2.6-.2-.3 0-.5.1-.6.2-.2.4-.5.6-.7.1-.2.1-.4 0-.6-.1-.2-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.1 0 1.3 1 2.5 1.1 2.7.1.2 1.9 3 4.7 4.1 2.3.9 2.3.6 2.7.6.4 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.4-.3z" />
              </svg>
              Ask a Question on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FEES */}
      <section className="gray-band" id="fees">
        <div className="swoosh" style={{ top: "20px", right: "-60px", width: "360px", height: "220px", opacity: 0.5 }}>
          <svg viewBox="0 0 400 200">
            <path d="M20,150 C150,20 250,20 380,150" stroke="#F5C343" strokeWidth="30" fill="none" strokeLinecap="round" />
          </svg>
        </div>
        <div className="wrap content">
          <div className="section-head">
            <span className="eyebrow">Tuition</span>
            <h2>Our Fees</h2>
            <p>Investing in your child's future is an important decision. We offer flexible payment plans to make the fellowship accessible.</p>
          </div>
          <div className="fee-card">
            <div className="head">
              <h3>Annual Fellowship</h3>
            </div>
            <div className="body">
              <p>
                Our three-year fellowship is priced at <b>GHS 12,000</b> per year, covering mentorship, curriculum, Demo Days, Engineering Labs and the Builder's Portfolio.
              </p>
              <p style={{ marginTop: "10px" }}>
                We offer flexible payment options and Merit Fellowships based on potential and financial need. Every Fellow graduates with a signed <b>Certificate of Completion</b>.
              </p>
              <div className="plans">
                <div className="plan">
                  <b>GHS 12,000</b>
                  <span>Annual</span>
                </div>
                <div className="plan">
                  <b>GHS 6,000</b>
                  <span>Per semester</span>
                </div>
                <div className="plan">
                  <b>GHS 3,000</b>
                  <span>Per term</span>
                </div>
                <div className="plan">
                  <b>GHS 1,000</b>
                  <span>Monthly</span>
                </div>
              </div>
              <div className="btnrow">
                <a className="btn btn-amber" href="#admissions">
                  Enroll Now
                </a>
                <a className="btn btn-navy" href="#admissions">
                  Ask About Merit Fellowships
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAMPUS */}
      <section>
        <div className="wrap">
          <div className="campus-text">
            <span className="eyebrow">Where We Meet</span>
            <h2>Discover Our Campus</h2>
            <p>We offer in-person studios at our East Legon campus and virtual options for fellows joining from anywhere.</p>
          </div>
          <div className="campus-rows">
            <div className="row">
              <b>Location</b>
              <span>15 Parsnip Street, East Legon, Accra</span>
            </div>
            <div className="row">
              <b>Talk To Us</b>
              <span>+233 545 792 397</span>
            </div>
            <div className="row">
              <b>Email</b>
              <span>admissions@solara.africa</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="wrap" style={{ maxWidth: "800px" }}>
          <div className="section-head" style={{ textAlign: "left", marginBottom: "20px" }}>
            <span className="eyebrow">Questions</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faqlist">
            {[
              {
                q: "Does my child need previous coding experience?",
                a: "No. Many fellows begin with no programming experience at all — curiosity and commitment matter far more than prior skill.",
              },
              {
                q: "How much time does the fellowship require each week?",
                a: "Most fellows spend 6–8 hours a week on studio time, guided practice and project work.",
              },
              {
                q: "Will this interfere with school?",
                a: "No. Solara is designed to complement school, developing skills traditional classrooms often have limited time to explore.",
              },
              {
                q: "What equipment does my child need?",
                a: "A laptop capable of running modern development tools, and a reliable internet connection for online activities.",
              },
              {
                q: "Does Solara guarantee university admission or scholarships?",
                a: "No. We don't promise scholarships or admission to any particular university — we promise your child will leave more capable, confident and prepared, with a portfolio of real work.",
              },
              {
                q: "What happens after graduation?",
                a: "Graduates join the Solara Alumni Network, with continued mentorship, university guidance and opportunities to mentor future fellows.",
              },
              {
                q: "How do you keep my child safe?",
                a: "Every mentor is background-checked before working with Fellows. In-person sessions are always supervised by at least two adults, and parents have a direct WhatsApp line to mentors and admissions at all times.",
              },
              {
                q: "Does Solara accommodate disabled or neurodivergent children?",
                a: "Yes. We offer accessibility accommodations and neurodivergent-friendly studios, plus part and full inclusion scholarships for girls, neurodivergent Fellows, and those living with sickle cell. Tell us what your child needs during the application so we can prepare properly.",
              },
            ].map((faq, index) => (
              <div key={index} className={`faq-item ${openFaq === index ? "open" : ""}`}>
                <button className="faq-q" onClick={() => toggleFaq(index)}>
                  {faq.q}
                  <span className="plus">+</span>
                </button>
                <div className="faq-a">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <div className="pink-band">
        <div className="wrap">
          <h2>Talk To Us</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", maxWidth: "480px", margin: "0 auto 26px" }}>
            Every remarkable journey starts with curiosity. Let's talk about whether Solara is right for your child.
          </p>
          <a className="pink-pill" href="#admissions">
            solara.africa
          </a>
          <div className="admit-cta">
            <a className="btn btn-navy" href="#admissions" style={{ background: "#fff", color: "var(--pink)" }}>
              Apply Now
            </a>
            <a className="btn btn-whatsapp" href="https://wa.me/233545792397" target="_blank" rel="noopener noreferrer">
              <svg className="wa" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.4A10 10 0 1 0 12 2zm0 18.2a8.1 8.1 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-1.3-.6-2.2-1.1-3.1-2.6-.2-.3 0-.5.1-.6.2-.2.4-.5.6-.7.1-.2.1-.4 0-.6-.1-.2-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.1 0 1.3 1 2.5 1.1 2.7.1.2 1.9 3 4.7 4.1 2.3.9 2.3.6 2.7.6.4 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.4-.3z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <a className="logo" href="#top" style={{ marginBottom: "14px" }}>
                <svg className="mark" viewBox="0 0 40 40" fill="none">
                  <circle cx="16" cy="20" r="12" stroke="#211C4D" strokeWidth="2.4" />
                  <circle cx="24" cy="20" r="12" stroke="#211C4D" strokeWidth="2.4" />
                </svg>
                <span className="word">Solara</span>
              </a>
              <p style={{ maxWidth: "260px" }}>
                A three-year AI &amp; Computer Science Fellowship for ambitious young innovators aged 10–16. A programme by Codetrain Africa.
              </p>
            </div>
            <div>
              <h5>Fellowship</h5>
              <a href="#outcomes">Outcomes</a>
              <a href="#curriculum">Curriculum</a>
              <a href="#experience">Experience</a>
            </div>
            <div>
              <h5>Join Us</h5>
              <a href="#admissions">Admissions</a>
              <a href="#fees">Tuition</a>
              <a href="#faq">FAQ</a>
            </div>
            <div>
              <h5>Company</h5>
              <a href="https://codetrainafrica.com" target="_blank" rel="noopener noreferrer">
                Codetrain Africa
              </a>
              <a href="#">Contact Admissions</a>
              <a href="#">+233 545 792 397</a>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© 2026 Solara — A Programme by Codetrain Africa. All Rights Reserved.</span>
            <span>East Legon, Accra, Ghana</span>
          </div>
        </div>
      </footer>

      {/* STICKY MOBILE CTA BAR */}
      <div className="sticky-cta">
        <a className="btn btn-amber" href="#admissions">
          Apply Now
        </a>
        <a className="btn btn-whatsapp" href="https://wa.me/233545792397" target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
      </div>
    </div>
  );
}
