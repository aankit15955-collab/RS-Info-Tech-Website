
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  Phone,
  Monitor,
  Users,
  Code2,
  Workflow,
  ShieldCheck,
  Wallet,
  Headset,
  Settings,
  TrendingUp,
  Factory,
  Package,
  Zap,
  Shirt,
  FlaskConical,
  ShoppingCart,
  GraduationCap,
  Briefcase,
  Building2,
  Lightbulb,
  ClipboardCheck,
  Rocket,
  Target,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    number: "01",
    title: "IT Services",
    description:
      "Reliable IT support, computer repair, networking, CCTV, printer and hardware solutions for businesses.",
    link: "/services#it-services",
  },
  {
    icon: Users,
    number: "02",
    title: "Staffing Solutions",
    description:
      "IT and non-IT staffing support, technical staff, office employees and temporary workforce solutions.",
    link: "/services#staffing",
  },
  {
    icon: Code2,
    number: "03",
    title: "Software Development",
    description:
      "Custom software, web applications, database development and business application solutions.",
    link: "/services#software",
  },
  {
    icon: Workflow,
    number: "04",
    title: "AI & Business Automation",
    description:
      "Smarter workflows, Excel, PDF, reports, invoices, email and AI-powered business automation.",
    link: "/services#automation",
  },
];

const reasons = [
  {
    icon: ShieldCheck,
    title: "One Partner",
    description: "Multiple business solutions under one roof.",
  },
  {
    icon: Wallet,
    title: "Cost-Effective Solutions",
    description: "Practical solutions designed around your budget.",
  },
  {
    icon: Headset,
    title: "Quick Support",
    description: "Reliable assistance for your business needs.",
  },
  {
    icon: Settings,
    title: "Customized Solutions",
    description: "Solutions tailored to your business requirements.",
  },
  {
    icon: TrendingUp,
    title: "Better Productivity",
    description: "Reduce repetitive tasks and improve daily workflows.",
  },
];

const industries = [
  { icon: Factory, name: "Manufacturing" },
  { icon: Settings, name: "Engineering" },
  { icon: Package, name: "Plastic & Rubber" },
  { icon: Zap, name: "Electrical" },
  { icon: Shirt, name: "Textile" },
  { icon: FlaskConical, name: "Pharma" },
  { icon: ShoppingCart, name: "Trading" },
  { icon: GraduationCap, name: "Education" },
  { icon: Briefcase, name: "Services" },
];

const audiences = [
  "MSMEs",
  "Manufacturing Units",
  "CA Firms",
  "Corporate Offices",
  "Traders",
  "Job Work Units",
  "Growing Businesses",
];

const approach = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Understand",
    description:
      "We begin by understanding your business requirements, challenges and goals.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Plan & Solve",
    description:
      "We identify suitable IT, staffing, software or automation solutions for your needs.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Support & Improve",
    description:
      "We help you move forward with practical solutions and ongoing support.",
  },
];

function Home() {
  return (
    <main className="home-page">
      <Helmet>
        <title>
          R&S Info Tech | IT Services, Software Development & AI Automation
        </title>

        <meta
          name="description"
          content="R&S Info Tech provides reliable IT support, staffing solutions, custom software development and AI-powered business automation for growing businesses in Faridabad, Haryana."
        />

        <meta
          name="keywords"
          content="IT services Faridabad, software development, IT staffing, AI automation, business automation, R&S Info Tech"
        />

        <link rel="canonical" href="https://infotech-rs.com/" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="R&S Info Tech | Smart Automation for Smarter Tomorrow"
        />
        <meta
          property="og:description"
          content="Your trusted technology partner for IT services, staffing, software development and business automation."
        />
        <meta property="og:url" content="https://infotech-rs.com/" />
        <meta property="og:site_name" content="R&S Info Tech" />
        <meta
          property="og:image"
          content="https://infotech-rs.com/images/logo.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="R&S Info Tech" />
        <meta
          name="twitter:description"
          content="Smart Automation for Smarter Tomorrow."
        />
        <meta
          name="twitter:image"
          content="https://infotech-rs.com/images/logo.png"
        />
      </Helmet>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-tag">
              SMART IT & AUTOMATION SOLUTIONS
            </span>

            <h1>
              Smart Automation
              <br />
              for a <span>Smarter Tomorrow.</span>
            </h1>

            <p>
              Empowering businesses with reliable IT services,
              staffing solutions, custom software development
              and intelligent automation.
            </p>

            <div className="hero-buttons">
              <a href="/services" className="primary-btn">
                Explore Our Services <ArrowRight size={18} />
              </a>

              <a href="tel:9935719755" className="secondary-btn">
                <Phone size={18} /> Contact Us
              </a>
            </div>

            <div className="hero-points">
              <span>
                <CheckCircle size={17} /> Customized Solutions
              </span>
              <span>
                <CheckCircle size={17} /> Reliable Support
              </span>
            </div>
          </div>

          {/* PREMIUM 3D HERO VISUAL */}
          <div className="hero-visual">
            <div className="hero-orbit orbit-one" aria-hidden="true"></div>
            <div className="hero-orbit orbit-two" aria-hidden="true"></div>
            <div className="hero-orbit orbit-three" aria-hidden="true"></div>

            <div className="hero-glow" aria-hidden="true"></div>

            <div className="hero-3d-scene">
              <div className="hero-globe">
                <div className="globe-inner">
                  <Building2 size={75} strokeWidth={1.2} />
                  <span>R&S</span>
                  <small>INFO TECH</small>
                </div>

                <div className="globe-shine"></div>
              </div>

              <div className="floating-tech tech-one" aria-hidden="true">
                <Monitor size={25} />
              </div>

              <div className="floating-tech tech-two" aria-hidden="true">
                <Code2 size={25} />
              </div>

              <div className="floating-tech tech-three" aria-hidden="true">
                <Workflow size={25} />
              </div>

              <div className="floating-tech tech-four" aria-hidden="true">
                <ShieldCheck size={25} />
              </div>

              <div className="hero-tech-label label-one">
                <span></span>
                SMART IT SOLUTIONS
              </div>

              <div className="hero-tech-label label-two">
                <span></span>
                BUSINESS AUTOMATION
              </div>
            </div>

            <div className="hero-bottom-caption">
              <Zap size={16} />
              <span>POWERING THE DIGITAL FUTURE</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services-section">
        <div className="services-container">
          <div className="section-heading">
            <span className="section-tag">WHAT WE DO</span>
            <h2>
              Complete Solutions for
              <span> Growing Businesses</span>
            </h2>
            <p>
              From everyday IT support to intelligent business
              automation, we help businesses work smarter.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article className="service-card" key={service.number}>
                  <div className="service-card-top">
                    <div className="service-icon">
                      <Icon size={27} />
                    </div>
                    <span className="service-number">
                      {service.number}
                    </span>
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <a href={service.link} className="service-link">
                    Explore Service <ArrowUpRight size={18} />
                  </a>
                </article>
              );
            })}
          </div>

          <div className="services-bottom">
            <a href="/services" className="all-services-btn">
              View All Services <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

    
      {/* SMART AUTOMATION HIGHLIGHT SECTION */}
      <section
        style={{
          padding: "90px 7%",
          background: "linear-gradient(135deg, #06172b, #0c3156, #071b32)",
          color: "#ffffff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "45px",
          }}
        >
          <div style={{ flex: "1 1 420px" }}>
            <span
              style={{
                color: "#48c7ff",
                fontWeight: 800,
                letterSpacing: "3px",
                fontSize: "13px",
              }}
            >
              SMART AUTOMATION SOLUTIONS
            </span>

            <h2
              style={{
                fontSize: "clamp(36px, 5vw,  sixtypx)".replace("sixty", "60"),
                lineHeight: 1.15,
                margin: "22px 0",
                fontWeight: 900,
              }}
            >
              HOURS OF WORK
              <br />
              <span style={{ color: "#45c7ff" }}>→ MINUTES</span>
            </h2>

            <p
              style={{
                color: "#c5d7e9",
                fontSize: "17px",
                lineHeight: 1.8,
                maxWidth: "560px",
              }}
            >
              Turn repetitive business tasks into smarter workflows.
              R&S Info Tech helps businesses save time, reduce manual
              effort and improve productivity through intelligent
              automation solutions.
            </p>

            <a
              href="/services#automation"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                marginTop: "25px",
                padding: "15px 25px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #38bdf8, #0875c9)",
                color: "#ffffff",
                textDecoration: "none",
                fontWeight: 800,
                boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
              }}
            >
              Explore Automation <ArrowRight size={18} />
            </a>
          </div>

          <div
            style={{
              flex: "1 1 350px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(145px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              { icon: Zap, title: "Faster Operations", text: "Complete tasks in less time." },
              { icon: Settings, title: "Smart Workflows", text: "Automate repetitive processes." },
              { icon: TrendingUp, title: "Better Productivity", text: "Focus on important work." },
              { icon: CheckCircle, title: "Fewer Manual Tasks", text: "Simplify everyday operations." },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  style={{
                    padding: "25px 18px",
                    minHeight: "145px",
                    borderRadius: "16px",
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(110,200,255,0.25)",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <Icon size={29} color="#48c7ff" />
                  <h3 style={{ fontSize: "17px", margin: "15px 0 8px" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "#b9cde0", fontSize: "13px", lineHeight: 1.6, margin: 0 }}>
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT COMPANY SECTION */}
      <section className="home-about-section">
        <div className="home-about-container">
          <div className="home-about-visual">
            <div className="home-about-main-card">
              <Building2 size={55} />
              <span>R&S INFO TECH</span>
              <h3>One Partner for Multiple Business Needs</h3>
              <p>Technology · People · Automation</p>
            </div>

            <div className="home-about-small-card">
              <Target size={22} />
              <span>Business-Focused Solutions</span>
            </div>
          </div>

          <div className="home-about-content">
            <span className="section-tag">ABOUT R&S INFO TECH</span>
            <h2>
              Helping Businesses
              <span> Work Smarter</span>
            </h2>

            <p>
              R&S Info Tech provides integrated business solutions
              across IT services, staffing, software development
              and business automation.
            </p>

            <p>
              We focus on understanding business requirements and
              providing practical solutions that help simplify
              everyday operations, improve workflows and support
              business productivity.
            </p>

            <div className="home-about-points">
              <span>
                <CheckCircle size={18} /> Business-focused approach
              </span>
              <span>
                <CheckCircle size={18} /> Customized solutions
              </span>
              <span>
                <CheckCircle size={18} /> Multiple services under one roof
              </span>
            </div>

            <a href="/about" className="home-about-btn">
              Discover Our Company <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="why-section">
        <div className="why-container">
          <div className="why-content">
            <span className="section-tag">
              WHY CHOOSE R&S INFO TECH
            </span>

            <h2>
              Your Trusted Partner for
              <span> Business Growth</span>
            </h2>

            <p>
              We bring IT services, staffing, software development
              and automation together to help businesses operate
              efficiently.
            </p>

            <a href="/contact" className="why-button">
              Let's Work Together <ArrowRight size={18} />
            </a>
          </div>

          <div className="why-grid">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div className="why-card" key={reason.title}>
                  <div className="why-icon">
                    <Icon size={25} />
                  </div>
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section className="industries-section">
        <div className="industries-container">
          <div className="section-heading">
            <span className="section-tag">INDUSTRIES WE SERVE</span>
            <h2>
              Supporting Businesses Across
              <span> Multiple Industries</span>
            </h2>
            <p>
              We provide practical IT, staffing, software and automation
              solutions for businesses across different sectors.
            </p>
          </div>

          <div className="industries-grid">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <div className="industry-card" key={industry.name}>
                  <div className="industry-icon">
                    <Icon size={30} />
                  </div>
                  <h3>{industry.name}</h3>
                  <ArrowUpRight className="industry-arrow" size={19} />
                </div>
              );
            })}
          </div>

          <div className="industries-bottom">
            <p>Looking for solutions for your business?</p>
            <a href="/industries" className="industry-contact-btn">
              Explore Industries <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE SECTION */}
      <section className="who-we-serve-section">
        <div className="who-we-serve-container">
          <div className="who-we-serve-content">
            <span className="section-tag">WHO WE SERVE</span>
            <h2>
              Supporting Businesses
              <span> of Different Sizes</span>
            </h2>
            <p>
              Our solutions are designed for organizations with
              different operational needs, from growing businesses
              to established industrial units.
            </p>
            <a href="/contact" className="who-serve-btn">
              Discuss Your Requirements <ArrowRight size={18} />
            </a>
          </div>

          <div className="audience-list">
            {audiences.map((audience) => (
              <div className="audience-item" key={audience}>
                <CheckCircle size={19} />
                <span>{audience}</span>
                <ArrowUpRight size={17} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH SECTION */}
      <section className="home-approach-section">
        <div className="section-heading">
          <span className="section-tag">HOW WE WORK</span>
          <h2>
            A Simple Approach to
            <span> Better Business Solutions</span>
          </h2>
          <p>
            We keep the process straightforward, from understanding
            your needs to supporting your business.
          </p>
        </div>

        <div className="home-approach-grid">
          {approach.map((step) => {
            const Icon = step.icon;

            return (
              <div className="home-approach-card" key={step.number}>
                <div className="approach-card-top">
                  <div className="approach-icon">
                    <Icon size={27} />
                  </div>
                  <span>{step.number}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CONTACT CTA SECTION */}
      <section className="home-contact-section">
        <div className="home-contact-container">
          <div>
            <span className="contact-tag">LET'S CONNECT</span>
            <h2>Ready to Make Your Business Smarter?</h2>
            <p>
              Let's discuss how R&S Info Tech can help your business
              with technology, staffing and automation solutions.
            </p>
          </div>

          <a href="/contact" className="home-contact-btn">
            Get in Touch <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;
