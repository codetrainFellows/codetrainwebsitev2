import React from "react";
import Link from "next/link";
import {
  Rocket,
  Bot,
  Baby,
  Mic,
  Globe,
  Handshake,
  Shield,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

export default function Home() {
  return (
    <main>
      {/* ════════ HERO ════════ */}
      <header className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="kicker">Accra · In-person &amp; online · Since 2017</span>
            <h1>
              Ghana's leading <span className="accent">AI &amp; software engineering</span> training institution.
            </h1>
            <ul>
              <li>We take complete beginners and turn them into job-ready tech professionals in 18 months.</li>
              <li>Build real projects and a professional portfolio from month one.</li>
              <li>89% graduate employment rate — independently verified.</li>
            </ul>
            <div className="hero-ctas">
              <a className="btn btn-primary" href="#courses">
                Explore courses
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
            <p className="hero-note">
              <b>●</b> Admission is in progress — join the July cohort
            </p>
          </div>
          <div className="hero-img">
            <img
              src="/people/group1.jpg"
              alt="Codetrain students at Demo Day"
            />
            <div className="float-stat">
              <b>89%</b>
              <span>of graduates employed — independently audited</span>
            </div>
          </div>
        </div>
      </header>

      {/* ════════ IMPACT ════════ */}
      <div className="impact" id="about">
        <div className="wrap impact-grid">
          <div>
            <h2>Our Impact</h2>
            <p>
              Since 2017, Codetrain has trained 700+ developers — with graduates at Microsoft, Andela, mPharma,
              Hubtel, and companies in Germany, the UK, the US, Kenya, and Canada.
            </p>
          </div>
          <div className="num">
            <b>700+</b>
            <span>developers trained since 2017</span>
          </div>
          <div className="num">
            <b>89%</b>
            <span>employment rate — independently audited</span>
          </div>
          <div className="num">
            <b>91%</b>
            <span>report improved quality of life (60 Decibels)</span>
          </div>
        </div>
      </div>

      {/* ════════ COURSES ════════ */}
      <section id="courses">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">Our Courses</span>
            <h2>Find the right course for where you are today</h2>
            <p>
              Starting from zero, already a developer, a busy professional, or a parent — there's a Codetrain course
              built for you.
            </p>
          </div>

          <div className="group-label" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Rocket size={20} style={{ color: "var(--indigo)" }} />
            <span>18-month career programmes — become a tech professional</span>
          </div>
          <div className="course-grid">
            <article className="course">
              <div className="course-top" style={{ background: "var(--violet)" }}></div>
              <div className="course-body">
                <div className="course-tags">
                  <span className="tag hot">Flagship</span>
                  <span className="tag">Beginner-friendly</span>
                </div>
                <h3>Software Engineering (Full Stack AI Developer)</h3>
                <p>
                  From zero to building and shipping AI-powered software products. Three milestone-gated phases:
                  master full-stack development, integrate AI into real products, then deploy a production AI system
                  with real users — assessed by industry reviewers.
                </p>
                <div className="facts-line">
                  <b>18 months</b>
                  <i>•</i>
                  <span>In-person or online · weekday or weekend</span>
                  <i>•</i>
                  <b>GHS 38,500</b>
                  <span>· up to 50% scholarship</span>
                </div>
                <div className="course-cta">
                  <a
                    className="btn btn-primary"
                    href="https://codetrainafrica.heiapply.com/application"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enroll now
                  </a>
                  <Link className="more" href="/software-engineering">
                    Course details →
                  </Link>
                </div>
              </div>
            </article>

            <article className="course">
              <div className="course-top" style={{ background: "var(--pink)" }}></div>
              <div className="course-body">
                <div className="course-tags">
                  <span className="tag">Beginner-friendly</span>
                  <span className="tag">Career changers welcome</span>
                </div>
                <h3>Product Design and AI</h3>
                <p>
                  Design digital products from research through to live, published applications. Master design
                  fundamentals, AI-assisted workflows, Figma, and Framer — graduating with a capstone product used
                  by real users.
                </p>
                <div className="facts-line">
                  <b>18 months</b>
                  <i>•</i>
                  <span>In-person or online · weekday or weekend</span>
                  <i>•</i>
                  <b>GHS 38,500</b>
                  <span>· up to 50% scholarship</span>
                </div>
                <div className="course-cta">
                  <a
                    className="btn btn-primary"
                    href="https://codetrainafrica.heiapply.com/application"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enroll now
                  </a>
                  <Link className="more" href="/product-design">
                    Course details →
                  </Link>
                </div>
              </div>
            </article>
          </div>

          <div className="group-label" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {/* <Bot size={20} style={{ color: "var(--indigo)" }} /> */}
            {/* <span>AI programmes — upgrade the skills you already have</span> */}
          </div>
          <div className="course-grid">
            <article className="course">
              <div className="course-top" style={{ background: "var(--indigo)" }}></div>
              <div className="course-body">
                <div className="course-tags">
                  <span className="tag">For working developers</span>
                </div>
                <h3>AI Program ( For Software Developers )</h3>
                <p>
                  A 16-week intensive that turns experienced web developers into AI engineers. LLM apps, RAG,
                  agents, and production systems — graduating with a deployed AI product that has real users.
                </p>
                <div className="facts-line">
                  <b>16 weeks</b>
                  <span>(12-week fast track)</span>
                  <i>•</i>
                  <span>Virtual &amp; in-person</span>
                  <i>•</i>
                  <b>GHS 15,000</b>
                </div>
                <div className="course-cta">
                  <a
                    className="btn btn-primary"
                    href="https://codetrainafrica.heiapply.com/application"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply now
                  </a>
                  <Link className="more" href="/ai-program">
                    Course details →
                  </Link>
                </div>
              </div>
            </article>

            <article className="course">
              <div className="course-top" style={{ background: "var(--lblue)" }}></div>
              <div className="course-body">
                <div className="course-tags">
                  <span className="tag">For professionals</span>
                  <span className="tag">No coding required</span>
                </div>
                <h3>AI Advantage Programme</h3>
                <p>
                  Three Saturdays to master a practical AI method, build a working AI assistant from your real
                  work, and present it at a public Demo Day. Application-only executive cohorts, capped at 25 —
                  for finance, HR, education, sales, NGO, and admin professionals.
                </p>
                <div className="facts-line">
                  <b>3 Saturdays</b>
                  <i>•</i>
                  <span>By application</span>
                  <i>•</i>
                  <b>GHS 2,800</b>
                </div>
                <div className="course-cta">
                  <a
                    className="btn btn-primary"
                    href="https://codetrainafrica.heiapply.com/application"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply for a cohort
                  </a>
                  <Link className="more" href="/ai-advantage">
                    Programme details →
                  </Link>
                </div>
              </div>
            </article>
          </div>

          <div className="group-label" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Mic size={20} style={{ color: "var(--indigo)" }} />
            <span>University Fellowship — for students who want real experience</span>
          </div>
          <div className="course-grid">
            <article className="course" style={{ gridColumn: "1/-1" }}>
              <div className="course-top" style={{ background: "#10B981" }}></div>
              <div className="course-body">
                <div className="course-tags">
                  <span className="tag">University students</span>
                  <span className="tag">By selection · 30 Fellows</span>
                  <span className="tag">In-person or online</span>
                </div>
                <h3>University Fellows Programme</h3>
                <p>
                  A one-year fellowship for university students who want real engineering experience, not just a
                  certificate. Two residencies bookend a semester of guided practice: build real skills, solve a real
                  problem for a Ghanaian business or community, and demo it live — with a mentor's sign-off and a
                  completion letter covering your internship hours.
                </p>
                <div className="facts-line">
                  <b>12 months</b>
                  <i>•</i>
                  <span>In-person (East Legon) or online · 30 Fellows per cohort, by selection</span>
                  <i>•</i>
                  <b>GHS 12,000</b>
                  <span>· flexible payment plans</span>
                </div>
                <div className="course-cta">
                  <a
                    className="btn btn-primary"
                    href="https://codetrainafrica.heiapply.com/application"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply now
                  </a>
                  <Link className="more" href="/university-fellowship">
                    Fellowship details →
                  </Link>
                </div>
              </div>
            </article>
          </div>

          <div className="group-label" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Baby size={20} style={{ color: "var(--indigo)" }} />
            <span>For the next generation</span>
          </div>
          <div className="course-grid">
            <article className="course" style={{ gridColumn: "1/-1" }}>
              <div className="course-top" style={{ background: "var(--yellow)" }}></div>
              <div className="course-body">
                <div className="course-tags">
                  <span className="tag">Ages 8–16</span>
                  <span className="tag">Online Saturdays · 12noon–3pm GMT</span>
                  <span className="tag">Enrol anytime</span>
                </div>
                <h3>Codetrain Solara — Coding for Kids</h3>
                <p>
                  Africa's premier online school for future innovators. Through project-based learning in coding,
                  AI, and leadership, kids build real apps and games — and grow into innovators, leaders, and
                  entrepreneurs. Includes an in-person Summer Bootcamp and Annual Innovation Conference.
                </p>
                <div className="facts-line">
                  <b>3–5 years</b>
                  <span>(annual subscription)</span>
                  <i>•</i>
                  <b>GHS 10,000/year</b>
                  <span>· part-scholarships available</span>
                </div>
                <div className="course-cta">
                  <a
                    className="btn btn-primary"
                    href="https://codetrainafrica.heiapply.com/application"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enroll now
                  </a>
                  <Link className="more" href="/kids">
                    Course details →
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ════════ TUITION STORY ════════ */}
      <section>
        <div className="wrap twocol" style={{ alignItems: "center" }}>
          <div className="video-frame">
            <iframe
              src="https://www.youtube.com/embed/-YUY-MFGdQw?si=WHj55QBrwtf4kJMl"
              title="From Codetrain Fellow to Senior Software Engineer — Awal's journey"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <span className="kicker">Earn Back Your Tuition</span>
            <h2>From Codetrain fellow to Senior Developer in Canada</h2>
            <p style={{ marginTop: "12px" }}>
              Five years after joining Codetrain, Awal made the leap into the international tech scene — a remote
              role with Big Viking Games, a Canadian gaming company, where he rose to Senior Developer in less
              than a year. He works from his home in Ghana, or anywhere he chooses.
            </p>
            <p style={{ marginTop: "10px" }}>
              The high demand for tech professionals makes it one of the best-paying industries globally — on
              average, our graduates move from little or no income to $800–1,000/month after placement.
            </p>
            <div style={{ marginTop: "22px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                className="btn btn-primary"
                href="https://codetrainafrica.heiapply.com/application"
                target="_blank"
                rel="noopener noreferrer"
              >
                Enroll now
              </a>
              <a className="btn btn-outline" href="#stories">
                More success stories
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ SUCCESS STORIES ════════ */}
      <section style={{ background: "var(--alt)" }} id="stories">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">Success Stories</span>
            <h2>Real people. Real transformations.</h2>
            <p>
              Our graduates work at Microsoft, Andela, mPharma, Hubtel, and companies in Germany, the UK, the US,
              and Canada — many remotely from Ghana.
            </p>
          </div>
          <div className="story-grid">
            <article className="story">
              <img
                src="/people/korkor.jpg"
                alt="Korkor Mensah"
              />
              <div className="story-body">
                <p>
                  Korkor enrolled after struggling to help her kids with coding homework despite her IT experience.
                  She never missed a class — and earned a promotion and a whole new career trajectory.
                </p>
                <div className="who">
                  <b>Korkor Mensah</b>
                  <span>Software Engineer</span>
                </div>
              </div>
            </article>
            <article className="story">
              <img
                src="/people/Gerald.jpg"
                alt="Gerald"
              />
              <div className="story-body">
                <p>
                  Gerald was hired on the spot by Meqasa's CEO during Demo Day. He now works at Hubtel, building
                  expertise, solving problems, and growing his software development career.
                </p>
                <div className="who">
                  <b>Gerald</b>
                  <span>Software Engineer, Hubtel</span>
                </div>
              </div>
            </article>
            <article className="story">
              <img
                src="/people/Ofoe.jpg"
                alt="Ofoe Fiergbor"
              />
              <div className="story-body">
                <p>
                  Two years after graduating, Ofoe transitioned from accounting into a thriving tech career at
                  Turntabl — with the flexibility, job security, and problem-solving mindset he was looking for.
                </p>
                <div className="who">
                  <b>Ofoe Fiergbor</b>
                  <span>Software Engineer, Turntabl</span>
                </div>
              </div>
            </article>
          </div>
          <p className="center" style={{ marginTop: "30px" }}>
            <a
              className="btn btn-outline"
              href="https://codetrainafrica.com/success-stories"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discover more success stories
            </a>
          </p>
        </div>
      </section>

      {/* ════════ THE CODETRAIN EXPERIENCE ════════ */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">The Codetrain Experience</span>
            <h2>More than a bootcamp</h2>
            <p>
              An internationally recognised educational journey — hands-on learning, mentorship, and career
              guidance in an inclusive, empowering environment.
            </p>
          </div>
          <div className="exp-grid">
            <div className="exp">
              <div className="ic">
                <Mic size={20} style={{ color: "var(--violet)" }} />
              </div>
              <h3>Demo Day &amp; Career Fair</h3>
              <p>Present your projects to industry leaders and hiring companies. Graduates have received offers on the spot.</p>
            </div>
            <div className="exp">
              <div className="ic">
                <Globe size={20} style={{ color: "var(--violet)" }} />
              </div>
              <h3>Global experience</h3>
              <p>International industry standards in the curriculum, and graduates working for employers in Germany, the UK, the US, Kenya, and Canada.</p>
            </div>
            <div className="exp">
              <div className="ic">
                <Handshake size={20} style={{ color: "var(--violet)" }} />
              </div>
              <h3>Supporting women &amp; persons with disability</h3>
              <p>Part and full scholarships for women, neurodivergent individuals, and persons living with sickle cell or disability.</p>
            </div>
            <div className="exp">
              <div className="ic">
                <Shield size={20} style={{ color: "var(--violet)" }} />
              </div>
              <h3>Safeguarding</h3>
              <p>A safe, harassment-free environment with strict policies protecting every student — with focus on underrepresented groups.</p>
            </div>
          </div>
          <div className="twocol" style={{ marginTop: "44px", alignItems: "center" }}>
            <div>
              <h3 style={{ fontSize: "1.3rem", marginBottom: "8px" }}>Experience the Codetrain Demo Day</h3>
              <p>
                Your journey culminates in Demo Day &amp; Career Fair — presenting your projects to industry
                leaders, potential employers, and the Codetrain community. Watch what it looks like.
              </p>
            </div>
            <div className="video-frame">
              <iframe
                src="https://www.youtube.com/embed/uqozP61jgKQ?si=G4gwbtAlaS9H-Tsj"
                title="Codetrain Demo Day"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ PARTNERS & SUPPORTERS ════════ */}
      <section style={{ background: "var(--alt)", padding: "52px 0" }}>
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: "28px" }}>
            <span className="kicker">Partners &amp; Supporters</span>
            <h2 style={{ fontSize: "1.4rem" }}>Trusted by leading organisations</h2>
          </div>
          <div className="partner-row">
            <span>GIZ</span>
            <span>SAP</span>
            <span>Chancen International</span>
            <span>Bloomberg</span>
            <span>I&amp;P Investments</span>
            <span>Berlin Partner</span>
            <span>Jobberman</span>
            <span>BlackInTech</span>
            <span>Kaatch</span>
            <span>Terratalent</span>
            <span>AfricaBerlin</span>
          </div>
        </div>
      </section>

      {/* ════════ FEES ════════ */}
      <section id="fees">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">Our Fees</span>
            <h2>Transparent fees. Flexible ways to pay.</h2>
            <p>
              Investing in your future is an important decision — so we keep pricing clear and offer three ways to
              fund your training.
            </p>
          </div>
          <div className="fee-cols">
            <div className="fee-card">
              <span className="tag hot" style={{ marginBottom: "10px", display: "inline-block" }}>
                18-month career programmes
              </span>
              <h3>Software Engineering and AI (Full Stack AI Developer) · Product Design and AI</h3>
              <div className="price">
                GHS 38,500 <small>· $3,000 for international applicants · up to 50% scholarship available</small>
              </div>
              <div className="pay-opts">
                <div className="pay-opt">
                  <span className="n">1</span>
                  <div>
                    <b>Pay upfront</b>
                    <span>Full tuition before the programme starts.</span>
                  </div>
                </div>
                <div className="pay-opt">
                  <span className="n">2</span>
                  <div>
                    <b>Payment plan</b>
                    <span>Start with an initial payment, then monthly installments while you study.</span>
                  </div>
                </div>
                <div className="pay-opt">
                  <span className="n">3</span>
                  <div>
                    <b>Income Share Agreement — GHS 0 deposit</b>
                    <span>Pay tuition only after landing a job, in partnership with Chancen International.</span>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: "20px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a
                  className="btn btn-primary btn-sm"
                  href="https://codetrainafrica.com/payment-plan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ask for a payment plan
                </a>
                <a
                  className="btn btn-outline btn-sm"
                  href="https://wa.me/233545792397"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
            <div className="fee-card">
              <span className="tag" style={{ marginBottom: "10px", display: "inline-block" }}>
                Short programmes
              </span>
              <div className="mini-fee">
                <span className="p">GHS 15,000</span>
                <b>AI Program ( For Software Developers )</b>
                <span>16 weeks · for working developers</span>
              </div>
              <div className="mini-fee">
                <span className="p">GHS 2,800</span>
                <b>AI Advantage Programme</b>
                <span>3 Saturdays · paid at enrolment</span>
              </div>
              <div className="mini-fee">
                <span className="p">GHS 10,000/yr</span>
                <b>Codetrain Solara (Kids)</b>
                <span>Ages 8–16 · rolling admissions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ CAMPUS ════════ */}
      <section style={{ background: "var(--alt)" }} id="campus">
        <div className="wrap campus-grid">
          <div>
            <span className="kicker">Discover Our Campus</span>
            <h2>Learn in East Legon — or from anywhere</h2>
            <p style={{ marginTop: "12px" }}>
              In-person training at our East Legon campus, or live, interactive online classes — same curriculum,
              same instructors, same milestones. Students join from across Ghana, Nigeria, Cameroon, Liberia, and
              The Gambia.
            </p>
            <div className="contact-rows">
              <a className="contact-row" href="tel:+233545792397">
                <span className="ic">
                  <Phone size={18} style={{ color: "var(--violet)" }} />
                </span>
                <span>
                  <small>Talk to us</small>+233 545 792 397
                </span>
              </a>
              <a className="contact-row" href="mailto:admissions@codetrainafrica.com">
                <span className="ic">
                  <Mail size={18} style={{ color: "var(--violet)" }} />
                </span>
                <span>
                  <small>Email us</small>admissions@codetrainafrica.com
                </span>
              </a>
              <div className="contact-row">
                <span className="ic">
                  <MapPin size={18} style={{ color: "var(--violet)" }} />
                </span>
                <span>
                  <small>Visit us</small>16a Parsnip Street, East Legon, Accra — near the A&amp;C Mall
                </span>
              </div>
            </div>
          </div>
          <img
            src="/people/campus2.jpg"
            alt="Codetrain East Legon campus"
          />
        </div>
      </section>

      {/* ════════ FAQ ════════ */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">FAQ</span>
            <h2>Frequently asked questions</h2>
            <p>Have questions about our programs, fees, or anything else? Find answers here.</p>
          </div>
          <div className="faq-wrap">
            <details>
              <summary>Do I need any tech background to join?</summary>
              <p>
                No. You don't need a degree, a computer science certificate, or previous tech experience. Most of
                our graduates started from zero — including a medical doctor, a finance executive, and a former
                farm worker. You need computer literacy, teachability, willingness to put in the work — and to pass
                our intake assessment.
              </p>
            </details>
            <details>
              <summary>How long are the programmes?</summary>
              <p>
                The Software Engineering and AI (Full Stack AI Developer) and Product Design and AI programmes are 18 months. The AI Program (Talent
                Accelerator) is 16 weeks, with a 12-week accelerated track by assessment. The AI Advantage Programme
                runs over 3 Saturdays.
              </p>
            </details>
            <details>
              <summary>Can I join while working or still in school?</summary>
              <p>
                Yes — that's exactly what our weekend class is for. Both delivery modes (in-person and online) offer
                weekday or weekend schedules, so you can train without leaving your current job or studies.
              </p>
            </details>
            <details>
              <summary>I'm not in Accra. Can I still join?</summary>
              <p>
                Yes. Our online classes are live and interactive — same sessions, same instructors, same milestones
                as in-person. Students have joined from Kumasi, Cape Coast, Tamale, and from Nigeria, Cameroon,
                Liberia, and The Gambia.
              </p>
            </details>
            <details>
              <summary>Are you sure people get jobs after?</summary>
              <p>
                89% of our graduates are employed after the programme — a number that is independently audited, not
                a claim we made up. Our graduates work at Microsoft, Andela, mPharma, Hubtel, and companies in
                Germany, the UK, the US, and Canada.
              </p>
            </details>
            <details>
              <summary>Can I really start with zero deposit?</summary>
              <p>
                Yes. Through our Income Share Agreement with Chancen International, eligible students start with no
                deposit and pay tuition only after landing a job. Scholarships of up to 50% and payment plans are
                also available.
              </p>
            </details>
            <details>
              <summary>Does Codetrain provide laptops?</summary>
              <p>Not currently — you'll need your own laptop for training.</p>
            </details>
          </div>
        </div>
      </section>

      {/* ════════ CTA BAND ════════ */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band">
            <h2>Are you excited to start your career?</h2>
            <p>
              Your journey to a fulfilling tech career starts here. Apply in minutes, or book a free 1-on-1 call
              with our admissions team.
            </p>
            <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
              <a
                className="btn btn-primary"
                href="https://codetrainafrica.heiapply.com/application"
                target="_blank"
                rel="noopener noreferrer"
              >
                Enroll Now
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
        </div>
      </section>
    </main>
  );
}
