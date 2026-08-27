import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Codetrain University Fellows — A one-year engineering fellowship for university students",
  description:
    "A selective one-year software engineering fellowship built around the university calendar. 30 Fellows. Two residencies (Accra, in-person or online), one Demo Day. Graduate with more than a degree.",
};

export default function UniversityFellowship() {
  return (
    <div className="fellowship-page">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .fellowship-page {
              --violet: #1B1049;
              --violet-dark: #120B33;
              --violet-soft: #EDEAF7;
              --yellow: #FFBE0C;
              --yellow-dark: #E8AC00;
              --pink: #FF006E;
              --ink: #1B1049;
              --sub: rgba(27, 16, 73, 0.64);
              --line: #E7E4F0;
              --paper: #FFFFFF;
              --alt: #F8F7FC;
              
              font-family: 'Helvetica Neue', Helvetica, Arial, system-ui, sans-serif;
              color: var(--ink);
              background: var(--paper);
              line-height: 1.65;
              font-size: 17px;
              -webkit-font-smoothing: antialiased;
            }

            .fellowship-page h1,
            .fellowship-page h2,
            .fellowship-page h3 {
              line-height: 1.08;
              letter-spacing: -0.025em;
              color: var(--violet);
            }

            .fellowship-page h1 {
              font-size: clamp(2.6rem, 6.5vw, 4.6rem);
              font-weight: 700;
            }

            .fellowship-page h2 {
              font-size: clamp(1.9rem, 4vw, 2.9rem);
              font-weight: 700;
            }

            .fellowship-page h3 {
              font-size: 1.15rem;
              font-weight: 700;
              letter-spacing: -0.01em;
            }

            .fellowship-page p {
              color: var(--sub);
            }

            .fellowship-page a {
              text-decoration: none;
              color: inherit;
            }

            .fellowship-page .wrap {
              max-width: 1040px;
              margin: 0 auto;
              padding: 0 24px;
            }

            .fellowship-page .narrow {
              max-width: 720px;
              margin: 0 auto;
            }

            .fellowship-page section {
              padding: 110px 0;
            }

            /* Hard color-contrast transitions stack two full section paddings
               into one very large gap — trim the padding on both sides of
               those specific boundaries so the jump doesn't read as broken. */
            .fellowship-page #selection {
              padding-bottom: 60px;
            }

            .fellowship-page #selection + section {
              padding-top: 60px;
            }

            .fellowship-page .dark.final {
              padding-top: 70px;
            }

            .fellowship-page .k {
              display: inline-block;
              font-size: 0.72rem;
              font-weight: 700;
              letter-spacing: 0.16em;
              text-transform: uppercase;
              color: var(--pink);
              margin-bottom: 18px;
            }

            .fellowship-page .dark .k {
              color: var(--yellow);
            }

            .fellowship-page .btn {
              display: inline-block;
              padding: 16px 34px;
              border-radius: 999px;
              font-weight: 700;
              font-size: 1rem;
              transition: 0.18s;
              cursor: pointer;
              border: none;
            }

            .fellowship-page .btn-y {
              background: var(--yellow);
              color: var(--violet);
            }

            .fellowship-page .btn-y:hover {
              background: var(--yellow-dark);
              transform: translateY(-1px);
            }

            .fellowship-page .btn-o {
              border: 1.5px solid var(--violet);
              color: var(--violet);
              background: transparent;
            }

            .fellowship-page .btn-o:hover {
              background: var(--violet);
              color: #fff;
            }

            .fellowship-page .dark {
              background: var(--violet);
              color: #fff;
            }

            .fellowship-page .dark h1,
            .fellowship-page .dark h2,
            .fellowship-page .dark h3 {
              color: #fff;
            }

            .fellowship-page .dark p {
              color: rgba(255, 255, 255, 0.72);
            }

            .fellowship-page .dark .btn-o {
              border-color: rgba(255, 255, 255, 0.5);
              color: #fff;
            }

            .fellowship-page .dark .btn-o:hover {
              background: #fff;
              color: var(--violet);
            }

            /* hero */
            .fellowship-page .hero {
              padding: 130px 0 120px;
              position: relative;
              overflow: hidden;
            }

            .fellowship-page .hero::after {
              content: '';
              position: absolute;
              bottom: -260px;
              right: -260px;
              width: 640px;
              height: 640px;
              border-radius: 50%;
              background: radial-gradient(circle, rgba(255, 190, 12, 0.16), transparent 65%);
              pointer-events: none;
            }

            .fellowship-page .hero .wrap {
              position: relative;
              z-index: 1;
            }

            .fellowship-page .hero p.lede {
              font-size: 1.25rem;
              max-width: 560px;
              margin: 26px 0 40px;
              color: rgba(255, 255, 255, 0.78);
            }

            .fellowship-page .hero-ctas {
              display: flex;
              gap: 16px;
              flex-wrap: wrap;
              align-items: center;
            }

            .fellowship-page .hero-meta {
              display: flex;
              gap: 40px;
              margin-top: 64px;
              flex-wrap: wrap;
            }

            .fellowship-page .hm b {
              display: block;
              font-size: 1.6rem;
              font-weight: 700;
              letter-spacing: -0.02em;
            }

            .fellowship-page .hm span {
              font-size: 0.85rem;
              color: rgba(255, 255, 255, 0.6);
            }

            /* statement */
            .fellowship-page .statement p {
              font-size: clamp(1.3rem, 2.6vw, 1.7rem);
              line-height: 1.5;
              color: var(--violet);
              font-weight: 500;
              letter-spacing: -0.01em;
            }

            .fellowship-page .statement p b {
              color: var(--pink);
            }

            /* year timeline */
            .fellowship-page .chapters {
              display: grid;
              gap: 2px;
              border-radius: 20px;
              overflow: hidden;
              margin-top: 56px;
            }

            .fellowship-page .chapter {
              background: var(--alt);
              padding: 44px 40px;
              display: grid;
              grid-template-columns: 170px 1fr;
              gap: 36px;
              align-items: start;
            }

            .fellowship-page .chapter .num {
              font-size: 0.75rem;
              font-weight: 700;
              letter-spacing: 0.14em;
              text-transform: uppercase;
              color: var(--pink);
            }

            .fellowship-page .chapter .num b {
              display: block;
              font-size: 1.5rem;
              letter-spacing: -0.02em;
              color: var(--violet);
              text-transform: none;
              margin-top: 6px;
              line-height: 1.2;
            }

            .fellowship-page .chapter h3 {
              font-size: 1.35rem;
              margin-bottom: 10px;
            }

            .fellowship-page .chapter p {
              font-size: 1rem;
            }

            .fellowship-page .chapter .tagline {
              display: inline-block;
              margin-top: 14px;
              font-size: 0.8rem;
              font-weight: 700;
              color: var(--violet);
              background: #fff;
              border: 1px solid var(--line);
              padding: 6px 14px;
              border-radius: 999px;
            }

            .fellowship-page .chapter.gold {
              background: var(--violet);
            }

            .fellowship-page .chapter.gold h3,
            .fellowship-page .chapter.gold .num b {
              color: #fff;
            }

            .fellowship-page .chapter.gold .num {
              color: var(--yellow);
            }

            .fellowship-page .chapter.gold p {
              color: rgba(255, 255, 255, 0.72);
            }

            .fellowship-page .chapter.gold .tagline {
              background: var(--yellow);
              border: none;
              color: var(--violet);
            }

            /* learn grid */
            .fellowship-page .grid3 {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 20px;
              margin-top: 56px;
            }

            .fellowship-page .cell {
              border: 1px solid var(--line);
              border-radius: 18px;
              padding: 32px 28px;
              background: #fff;
            }

            .fellowship-page .cell .dot {
              width: 12px;
              height: 12px;
              border-radius: 50%;
              background: var(--yellow);
              margin-bottom: 20px;
            }

            .fellowship-page .cell h3 {
              margin-bottom: 8px;
              font-size: 1.05rem;
            }

            .fellowship-page .cell p {
              font-size: 0.94rem;
            }

            /* calendar fit */
            .fellowship-page .fit {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 64px;
              align-items: center;
            }

            .fellowship-page .fit ul {
              list-style: none;
              display: grid;
              gap: 16px;
              margin-top: 28px;
            }

            .fellowship-page .fit li {
              padding-left: 34px;
              position: relative;
              font-size: 1.02rem;
              color: var(--ink);
            }

            .fellowship-page .fit li::before {
              content: '';
              position: absolute;
              left: 0;
              top: 7px;
              width: 18px;
              height: 18px;
              border-radius: 50%;
              background: var(--yellow);
            }

            .fellowship-page .fit li span {
              display: block;
              font-size: 0.88rem;
              color: var(--sub);
              font-weight: 400;
            }

            .fellowship-page .calendar {
              background: var(--alt);
              border: 1px solid var(--line);
              border-radius: 20px;
              padding: 36px;
            }

            .fellowship-page .cal-row {
              display: grid;
              grid-template-columns: 92px 1fr;
              gap: 16px;
              align-items: center;
              padding: 13px 0;
              border-bottom: 1px solid var(--line);
            }

            .fellowship-page .cal-row:last-child {
              border-bottom: none;
            }

            .fellowship-page .cal-row .m {
              font-size: 0.78rem;
              font-weight: 700;
              letter-spacing: 0.08em;
              text-transform: uppercase;
              color: var(--sub);
            }

            .fellowship-page .cal-bar {
              height: 34px;
              border-radius: 8px;
              display: flex;
              align-items: center;
              padding: 0 16px;
              font-size: 0.82rem;
              font-weight: 700;
              color: #fff;
            }

            .fellowship-page .cal-bar.full {
              background: var(--violet);
            }

            .fellowship-page .cal-bar.light {
              background: #B7AEE0;
              color: var(--violet);
              width: 52%;
            }

            .fellowship-page .cal-bar.sprint {
              background: var(--pink);
            }

            /* selection */
            .fellowship-page .sel {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 64px;
            }

            .fellowship-page .sel ul {
              list-style: none;
              display: grid;
              gap: 12px;
              margin-top: 22px;
            }

            .fellowship-page .sel li {
              padding-left: 30px;
              position: relative;
              font-size: 1rem;
              color: var(--ink);
            }

            .fellowship-page .sel li::before {
              content: '✓';
              position: absolute;
              left: 0;
              top: 2px;
              width: 20px;
              height: 20px;
              border-radius: 50%;
              background: var(--violet-soft);
              color: var(--violet);
              font-weight: 700;
              font-size: 0.72rem;
              display: grid;
              place-items: center;
            }

            .fellowship-page .dark .sel li {
              color: #fff;
            }

            .fellowship-page .dark .sel li::before {
              background: rgba(255, 255, 255, 0.12);
              color: var(--yellow);
            }

            /* details strip */
            .fellowship-page .details {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 2px;
              border-radius: 20px;
              overflow: hidden;
              margin-top: 56px;
            }

            .fellowship-page .dcell {
              background: rgba(255, 255, 255, 0.06);
              padding: 34px 28px;
            }

            .fellowship-page .dcell span {
              font-size: 0.72rem;
              font-weight: 700;
              letter-spacing: 0.12em;
              text-transform: uppercase;
              color: var(--yellow);
              display: block;
              margin-bottom: 10px;
            }

            .fellowship-page .dcell b {
              font-size: 1.25rem;
              font-weight: 700;
              letter-spacing: -0.01em;
              display: block;
              line-height: 1.3;
            }

            .fellowship-page .dcell p {
              font-size: 0.85rem;
              margin-top: 6px;
            }

            /* after */
            .fellowship-page .after {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 20px;
              margin-top: 56px;
            }

            /* instagram reel embed */
            .fellowship-page .reel-wrap {
              border-radius: 20px;
              overflow: hidden;
              position: relative;
              width: 100%;
              max-width: 340px;
              margin: 0 auto;
              box-shadow: 0 20px 60px rgba(27, 16, 73, 0.18);
            }

            .fellowship-page .reel-wrap iframe {
              display: block;
              width: 100%;
              height: 600px;
              border: none;
            }

            /* media placeholder */
            .fellowship-page .ph {
              border: 2px dashed #B7AEE0;
              background: var(--violet-soft);
              border-radius: 20px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              gap: 8px;
              text-align: center;
              padding: 24px;
              color: var(--violet);
              aspect-ratio: 16/9;
            }

            .fellowship-page .ph .ic {
              width: 56px;
              height: 56px;
              border-radius: 50%;
              background: var(--yellow);
              color: var(--violet);
              display: grid;
              place-items: center;
              font-size: 1.3rem;
            }

            .fellowship-page .ph b {
              font-size: 0.95rem;
            }

            .fellowship-page .ph span {
              font-size: 0.82rem;
              color: var(--sub);
              max-width: 420px;
              line-height: 1.5;
            }

            .fellowship-page .ph .tag {
              font-size: 0.66rem;
              font-weight: 700;
              letter-spacing: 0.1em;
              text-transform: uppercase;
              color: var(--pink);
            }

            /* faq */
            .fellowship-page details {
              border-bottom: 1px solid var(--line);
              padding: 22px 0;
            }

            .fellowship-page summary {
              cursor: pointer;
              font-weight: 700;
              font-size: 1.05rem;
              list-style: none;
              display: flex;
              justify-content: space-between;
              gap: 16px;
              color: var(--violet);
            }

            .fellowship-page summary::-webkit-details-marker {
              display: none;
            }

            .fellowship-page summary::after {
              content: '+';
              color: var(--pink);
              font-weight: 700;
              font-size: 1.3rem;
              flex-shrink: 0;
            }

            .fellowship-page details[open] summary::after {
              content: '−';
            }

            .fellowship-page details p {
              margin-top: 12px;
              font-size: 0.98rem;
              max-width: 640px;
            }

            /* final cta */
            .fellowship-page .final {
              text-align: center;
              padding: 130px 0;
            }

            .fellowship-page .final p {
              max-width: 520px;
              margin: 20px auto 42px;
              font-size: 1.1rem;
            }

            .fellowship-page .final .small {
              font-size: 0.85rem;
              margin-top: 26px;
              color: rgba(255, 255, 255, 0.5);
            }

            /* statement section two-col layout */
            .fellowship-page .statement-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 64px;
              align-items: center;
            }

            /* life as a fellow two-col layout */
            .fellowship-page .life-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 40px;
              align-items: center;
            }

            @media (max-width: 880px) {
              .fellowship-page section {
                padding: 80px 0;
              }

              .fellowship-page #selection {
                padding-bottom: 44px;
              }

              .fellowship-page #selection + section {
                padding-top: 44px;
              }

              .fellowship-page .dark.final {
                padding-top: 50px;
              }

              .fellowship-page .hero {
                padding: 90px 0;
              }

              .fellowship-page .chapter {
                grid-template-columns: 1fr;
                gap: 14px;
                padding: 34px 26px;
              }

              .fellowship-page .grid3,
              .fellowship-page .after,
              .fellowship-page .fit,
              .fellowship-page .sel,
              .fellowship-page .statement-grid,
              .fellowship-page .life-grid {
                grid-template-columns: 1fr;
              }

              .fellowship-page .details {
                grid-template-columns: 1fr 1fr;
              }

              .fellowship-page .fit {
                gap: 40px;
              }

              .fellowship-page .statement .wrap {
                grid-template-columns: 1fr;
              }

              .fellowship-page .statement-grid img {
                order: 1;
              }
            }

            @media (max-width: 640px) {
              .fellowship-page section {
                padding: 60px 0;
              }

              .fellowship-page #selection {
                padding-bottom: 36px;
              }

              .fellowship-page #selection + section {
                padding-top: 36px;
              }

              .fellowship-page .dark.final {
                padding-top: 40px;
              }

              .fellowship-page .hero {
                padding: 70px 0 60px;
              }

              .fellowship-page .hero-meta {
                gap: 24px;
                margin-top: 40px;
              }

              .fellowship-page .details {
                grid-template-columns: 1fr;
              }

              .fellowship-page .chapter {
                padding: 28px 20px;
              }

              .fellowship-page .calendar {
                padding: 24px 18px;
              }

              .fellowship-page .cal-row {
                grid-template-columns: 70px 1fr;
                gap: 10px;
              }

              .fellowship-page .cell {
                padding: 24px 20px;
              }

              .fellowship-page .wrap {
                padding: 0 16px;
              }

              .fellowship-page .final {
                padding: 80px 0;
              }
            }

            @media (prefers-reduced-motion: reduce) {
              .fellowship-page * {
                transition: none !important;
                scroll-behavior: auto;
              }
            }
          `,
        }}
      />

      <header className="hero dark">
        <div className="wrap">
          <span className="k">Codetrain University Fellows · Class of 2027</span>
          <h1>
            Graduate with more
            <br />
            than a degree.
          </h1>
          <p className="lede">
            A selective one-year software engineering fellowship, built around the university calendar. Thirty Fellows.
            Two residencies — in Accra or online. One Demo Day in front of employers.
          </p>
          <div className="hero-ctas">
            <a
              className="btn btn-y"
              href="https://tally.so/r/q4QAvd"
              target="_blank"
              rel="noopener noreferrer"
            >
              Request a call
            </a>
            <a className="btn btn-o" href="#year">
              See the year →
            </a>
          </div>
          <div className="hero-meta">
            <div className="hm">
              <b>30</b>
              <span>Fellows per cohort</span>
            </div>
            <div className="hm">
              <b>1 year</b>
              <span>September to May</span>
            </div>
            <div className="hm">
              <b>GHS 12,000</b>
              <span>flexible payment plans</span>
            </div>
            <div className="hm">
              <b>Accra</b>
              <span>East Legon campus</span>
            </div>
          </div>
        </div>
      </header>

      <section className="statement">
        <div className="wrap statement-grid">
          <div>
            <span className="k">Why this exists</span>
            <p>
              Every year, thousands of students graduate with the same certificate. Employers can&apos;t tell them apart — so
              they hire the ones who can <b>build</b>. The Fellowship exists to make you one of them: a university student
              who ships real software, presents real work, and walks into interviews with proof instead of promises.
            </p>
          </div>
          <img
            src="/people/home-hero.png"
            alt="Codetrain University Fellows"
            style={{ width: "100%", borderRadius: "20px" }}
          />
        </div>
      </section>

      <section
        id="year"
        style={{
          background: "var(--alt)",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div className="wrap">
          <span className="k">The Year</span>
          <h2>One year. Three chapters.</h2>
          <p style={{ marginTop: "14px", maxWidth: "560px" }}>
            The Fellowship is engineered around your academic life — intensive when university is out, light when
            lectures are on.
          </p>
          <div className="chapters">
            <div className="chapter" style={{ background: "#fff" }}>
              <div className="num">
                Chapter 1 · Sep – Dec<b>Engineering Residency I</b>
              </div>
              <div>
                <h3>Learn to build like an engineer</h3>
                <p>
                  Four days a week, in Accra or online, during the long vacation. Fellows train intensively in modern
                  software engineering — writing real code, working with AI-assisted development tools — then put it to
                  work on a real problem: each Fellow takes on an actual challenge facing a business or community in
                  Ghana, builds a working solution, and demos it live to close out the residency. With a named mentor
                  and a completion letter documenting your hours, the residency covers your internship or industrial
                  attachment requirement.
                </p>
                <span className="tagline">4 days/week · Accra or online</span>
                <span className="tagline" style={{ marginLeft: "8px" }}>
                  Covers your internship requirement
                </span>
              </div>
            </div>
            <div className="chapter" style={{ background: "#fff" }}>
              <div className="num">
                Chapter 2 · Jan – Apr<b>Engineering Practice</b>
              </div>
              <div>
                <h3>Keep building through the semester</h3>
                <p>
                  When lectures resume, the Fellowship flexes. A structured practice track of 3–5 hours a week keeps
                  your skills compounding — guided projects, code reviews, and mentorship that fit around your course
                  load, not against it.
                </p>
                <span className="tagline">3–5 hrs/week · alongside university</span>
              </div>
            </div>
            <div className="chapter gold">
              <div className="num">
                Chapter 3 · May<b>Engineering Residency II</b>
              </div>
              <div>
                <h3>The four-week sprint — and Demo Day</h3>
                <p>
                  Back in Accra or online for an intensive four-week build sprint. Fellows take a product from idea to
                  deployed, then present it at Demo Day — in front of the Codetrain community, industry engineers, and
                  hiring companies.
                </p>
                <span className="tagline">4-week sprint · Demo Day finale</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <span className="k">What Fellows gain</span>
          <h2>What a year makes.</h2>
          <div className="grid3">
            <div className="cell">
              <div className="dot"></div>
              <h3>Real engineering skill</h3>
              <p>
                Modern full-stack development and AI-assisted engineering — learned by building, not by watching slides.
              </p>
            </div>
            <div className="cell">
              <div className="dot"></div>
              <h3>A shipped portfolio</h3>
              <p>
                Deployed projects with live URLs — including a real problem solved for a business or community in
                Ghana, demoed live and documented like an internship.
              </p>
            </div>
            <div className="cell">
              <div className="dot"></div>
              <h3>Demo Day exposure</h3>
              <p>
                Present your work to engineers and employers. Codetrain graduates have been hired on the spot at Demo
                Day.
              </p>
            </div>
            <div className="cell">
              <div className="dot"></div>
              <h3>A selective peer group</h3>
              <p>Thirty Fellows chosen competitively — the ambitious students from across universities who push each other.</p>
            </div>
            <div className="cell">
              <div className="dot"></div>
              <h3>Mentorship that continues</h3>
              <p>Teaching fellows and industry mentors through both residencies and the semester in between.</p>
            </div>
            <div className="cell">
              <div className="dot"></div>
              <h3>A pathway forward</h3>
              <p>
                Top Fellows may earn advanced standing into Codetrain&apos;s flagship programme, or consideration for the AI
                Program.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          background: "var(--alt)",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div className="wrap fit">
          <div>
            <span className="k">Built for students</span>
            <h2>Your degree stays first. Your skills don&apos;t wait.</h2>
            <ul>
              <li>
                Residencies run during vacation
                <span>The intensive months happen when campus is closed — no clash with lectures or exams.</span>
              </li>
              <li>
                Join in Accra or online
                <span>
                  Outside Accra? Join both residencies live online — same mentors, same project, same Demo Day.
                </span>
              </li>
              <li>
                Semester load: 3–5 hours a week
                <span>Lighter than one extra course — designed to survive a real academic timetable.</span>
              </li>
              <li>
                Finish before finals
                <span>The May sprint and Demo Day wrap before the academic year&apos;s heaviest period.</span>
              </li>
            </ul>
          </div>
          <div className="calendar" aria-label="Fellowship calendar">
            <div className="cal-row">
              <span className="m">Sep–Dec</span>
              <div className="cal-bar full">Residency I — 4 days/week</div>
            </div>
            <div className="cal-row">
              <span className="m">Jan–Apr</span>
              <div className="cal-bar light">Practice — 3–5 hrs/week</div>
            </div>
            <div className="cal-row">
              <span className="m">May</span>
              <div className="cal-bar sprint">Residency II — sprint + Demo Day</div>
            </div>
          </div>
        </div>
      </section>

      <section className="dark" id="selection">
        <div className="wrap sel">
          <div>
            <span className="k">Selection</span>
            <h2>
              Thirty seats.
              <br />
              Chosen, not sold.
            </h2>
            <p style={{ marginTop: "16px" }}>
              Admission is competitive. We&apos;re not selecting for experience — we&apos;re selecting for trajectory.
            </p>
          </div>
          <div>
            <h3 style={{ marginTop: "8px" }}>What we look for</h3>
            <ul>
              <li>Currently enrolled university students, any programme of study</li>
              <li>No coding experience required — evidence of drive is</li>
              <li>Willingness to commit to both residencies in full</li>
              <li>Pass the Fellowship assessment and interview</li>
            </ul>
          </div>
        </div>
        <div className="wrap" id="details">
          <div className="details">
            <div className="dcell">
              <span>Cohort</span>
              <b>30 Fellows</b>
              <p>Competitive admission, one cohort per year.</p>
            </div>
            <div className="dcell">
              <span>Fellowship fee</span>
              <b>GHS 12,000</b>
              <p>Flexible payment plans available.</p>
            </div>
            <div className="dcell">
              <span>Begins</span>
              <b>September</b>
              <p>Residency I — East Legon, Accra, or online.</p>
            </div>
            <div className="dcell">
              <span>Culminates</span>
              <b>Demo Day</b>
              <p>May — present your work to employers.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="life-grid">
            <div>
              <span className="k">See it</span>
              <h2>Life as a Fellow</h2>
              <p style={{ marginTop: "14px" }}>
                Residency mornings, build nights, Demo Day. This is what a year of momentum looks like.
              </p>
            </div>
            <div className="reel-wrap">
              <iframe
                src="https://www.instagram.com/reel/DZxKOK-ql5n/embed/"
                title="Codetrain University Fellows — Life as a Fellow"
                allowFullScreen
                loading="lazy"
                scrolling="no"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--alt)", borderTop: "1px solid var(--line)" }}>
        <div className="wrap narrow">
          <span className="k">Questions</span>
          <h2 style={{ marginBottom: "30px" }}>Before you apply</h2>
          <details>
            <summary>Can I do this alongside my degree?</summary>
            <p>
              That&apos;s the entire design. The intensive residencies run during the long vacation and the May window, and
              the semester track is 3–5 hours a week — lighter than one extra course. Your degree stays first.
            </p>
          </details>
          <details>
            <summary>Can this satisfy my university&apos;s internship or attachment requirement?</summary>
            <p>
              Yes — Residency I is structured to function as your internship. Each Fellow takes on a real problem
              facing a business or community in Ghana, builds a working solution, and demos it live at the end. With a
              named mentor and a completion letter documenting your work and hours, the residency serves as your
              internship or industrial attachment. Requirements differ by department, so check with your coordinator
              on what they&apos;ll accept.
            </p>
          </details>
          <details>
            <summary>I&apos;ve never written code. Can I still apply?</summary>
            <p>
              Yes. The Fellowship starts from first principles. We select for drive, teachability, and commitment — not
              prior experience.
            </p>
          </details>
          <details>
            <summary>What does it cost?</summary>
            <p>
              The Fellowship fee is GHS 12,000 for the full year, with flexible payment plans. Talk to admissions about
              a plan that works for you.
            </p>
          </details>
          <details>
            <summary>What happens after the Fellowship?</summary>
            <p>
              You leave with a shipped portfolio, Demo Day exposure to employers, and a Codetrain Fellowship
              certificate. Top Fellows may earn advanced standing into Codetrain&apos;s flagship programme or consideration for
              the AI Program.
            </p>
          </details>
          <details>
            <summary>Which universities can apply?</summary>
            <p>
              Any. Fellows are selected from across universities and programmes of study — what unites them is
              ambition, not their department.
            </p>
          </details>
          <details>
            <summary>How do I apply?</summary>
            <p>
              Submit the online application, complete the Fellowship assessment, and if shortlisted, join a selection
              interview. Cohorts are capped at 30, so early applications are advised.
            </p>
          </details>
        </div>
      </section>

      <section className="dark final">
        <div className="wrap">
          <span className="k">Applications open</span>
          <h2>
            One year from now, you&apos;ll be a different engineer.
            <br />
            Or the same student.
          </h2>
          <p>Thirty seats. September start. The application takes ten minutes — the interview is where you earn it.</p>
          <a
            className="btn btn-y"
            href="https://tally.so/r/q4QAvd"
            target="_blank"
            rel="noopener noreferrer"
          >
            Request a call
          </a>
          <p className="small">Questions? Call +233 545 792 397 or email admissions@codetrainafrica.com</p>
        </div>
      </section>
    </div>
  );
}
