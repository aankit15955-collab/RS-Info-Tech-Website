import { Helmet } from "react-helmet-async";
import {
  Monitor,
  Users,
  Code2,
  Workflow,
  Target,
  Lightbulb,
  Handshake,
  ArrowRight,
} from "lucide-react";

const capabilities = [
  {
    icon: Monitor,
    title: "IT Services",
    description:
      "IT support, computer repair, networking, CCTV, printer and hardware solutions.",
  },
  {
    icon: Users,
    title: "Staffing Solutions",
    description:
      "IT and non-IT staffing, technical resources and office workforce support.",
  },
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Custom software, web applications, databases and business applications.",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description:
      "Workflow, Excel, PDF, reports, invoices and AI-powered automation solutions.",
  },
];

function About() {
  return (
    <main className="about-page">


<Helmet>
  <title>About R&S Info Tech | Business IT & Automation Partner</title>

  <meta
    name="description"
    content="Learn about R&S Info Tech, your trusted partner for IT services, staffing solutions, software development and business automation in Faridabad, Haryana."
  />

  <meta
    name="keywords"
    content="About R&S Info Tech, IT company Faridabad, business automation, software development, IT staffing"
  />

  <link rel="canonical" href="https://infotech-rs.com/about" />

  <meta property="og:type" content="website" />
  <meta property="og:title" content="About R&S Info Tech | Business IT & Automation Partner" />
  <meta
    property="og:description"
    content="Discover R&S Info Tech and our integrated IT, staffing, software and business automation solutions."
  />
  <meta property="og:url" content="https://infotech-rs.com/about" />
  <meta property="og:site_name" content="R&S Info Tech" />
  <meta property="og:image" content="https://infotech-rs.com/images/logo.png" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="About R&S Info Tech" />
  <meta
    name="twitter:description"
    content="Your trusted partner for technology and business automation."
  />
  <meta name="twitter:image" content="https://infotech-rs.com/images/logo.png" />
</Helmet>

      {/* ABOUT HERO */}
      <section className="about-hero">
        <div className="about-hero-container">
          <span className="about-tag">ABOUT R&S INFO TECH</span>
          

          <h1>
            ABOUT R&S INFO TECH
            <span> Businesses Move Forward.</span>
          </h1>

          <p>
            We bring IT services, staffing, software development
            and business automation together to support smarter
            and more efficient business operations.
          </p>

          <a href="/contact" className="about-hero-btn">
            Connect With Us <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* COMPANY INTRODUCTION */}
      <section className="about-intro-section">
        <div className="about-intro-container">

          <div className="about-intro-content">
            <span className="section-tag">WHO WE ARE</span>

            <h2>
              Your Business Support Partner for
              <span> Technology & Automation</span>
            </h2>

            <p>
              R&S Info Tech provides a range of business-focused
              solutions across IT services, staffing, software
              development and automation.
            </p>

            <p>
              Our approach is to understand business requirements
              and provide practical solutions that help simplify
              everyday operations, improve productivity and support
              business needs.
            </p>

            <p>
              From IT infrastructure support to custom software
              and automated workflows, we aim to bring essential
              business solutions under one roof.
            </p>
          </div>

          <div className="about-intro-visual">
            <div className="about-visual-card">
            <img
  src="/images/logo.png"
  alt="R&S Info Tech Logo"
  className="about-page-logo"
/>
              <h3>Smart Automation</h3>
              <p>for Smarter Tomorrow</p>
              <div className="about-visual-line"></div>
              <span>IT · Software · Staffing · Automation</span>
            </div>
          </div>

        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="about-capabilities-section">
        <div className="about-section-container">

          <div className="section-heading">
            <span className="section-tag">WHAT WE DO</span>
            <h2>
              Our Core
              <span> Capabilities</span>
            </h2>
            <p>
              Different business needs, connected through
              practical technology and support solutions.
            </p>
          </div>

          <div className="about-capabilities-grid">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article className="about-capability-card" key={item.title}>
                  <div className="about-capability-icon">
                    <Icon size={28} />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="about-approach-section">
        <div className="about-section-container">

          <div className="section-heading">
            <span className="section-tag">OUR APPROACH</span>
            <h2>
              Built Around
              <span> Business Needs</span>
            </h2>
            <p>
              We focus on understanding requirements and
              matching them with suitable solutions.
            </p>
          </div>

          <div className="about-approach-grid">

            <div className="about-approach-card">
              <div className="about-approach-icon">
                <Target size={27} />
              </div>
              <h3>Understand</h3>
              <p>
                Understand the business requirement,
                challenges and goals.
              </p>
            </div>

            <div className="about-approach-card">
              <div className="about-approach-icon">
                <Lightbulb size={27} />
              </div>
              <h3>Plan & Solve</h3>
              <p>
                Identify practical IT, staffing,
                software or automation solutions.
              </p>
            </div>

            <div className="about-approach-card">
              <div className="about-approach-icon">
                <Handshake size={27} />
              </div>
              <h3>Support</h3>
              <p>
                Provide solutions aligned with
                business requirements.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT CTA */}
      <section className="about-cta-section">
        <div className="about-cta-container">
          <div>
            <span>LET'S BUILD SOMETHING SMARTER</span>
            <h2>Looking for the Right Business Solution?</h2>
            <p>
              Talk to R&S Info Tech about your business requirements.
            </p>
          </div>

          <a href="/contact" className="about-cta-btn">
            Contact Us <ArrowRight size={18} />
          </a>
        </div>
      </section>

    </main>
  );
}




export default About;




