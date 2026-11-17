
import { Helmet } from "react-helmet-async";
import {
  Factory,
  Cog,
  Package,
  Zap,
  Shirt,
  FlaskConical,
  ShoppingCart,
  GraduationCap,
  BriefcaseBusiness,
  ArrowUpRight,
  CheckCircle,
  Building2,
} from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  {
    number: "01",
    title: "Manufacturing",
    icon: Factory,
    description:
      "Technology, staffing and automation support to help manufacturing units manage their daily operations efficiently.",
    solutions: ["IT Infrastructure Support", "Production Data Automation", "Workforce Solutions"],
  },
  {
    number: "02",
    title: "Engineering",
    icon: Cog,
    description:
      "Practical IT and software solutions for engineering businesses that need reliable systems and organized workflows.",
    solutions: ["Software & Database Solutions", "IT Support", "Process Automation"],
  },
  {
    number: "03",
    title: "Plastic & Rubber",
    icon: Package,
    description:
      "Business technology and operational support for plastic and rubber manufacturing and processing units.",
    solutions: ["MIS & Report Automation", "Staffing Support", "Computer & Network Support"],
  },
  {
    number: "04",
    title: "Electrical",
    icon: Zap,
    description:
      "Digital and technical support for electrical businesses, distributors and related industrial operations.",
    solutions: ["Business Software", "Inventory Data Management", "IT Infrastructure"],
  },
  {
    number: "05",
    title: "Textile",
    icon: Shirt,
    description:
      "Technology and automation solutions to support textile businesses with routine office and operational tasks.",
    solutions: ["Excel Automation", "Staffing Solutions", "IT Maintenance"],
  },
  {
    number: "06",
    title: "Pharmaceutical",
    icon: FlaskConical,
    description:
      "IT support and business process solutions for pharmaceutical offices and related business operations.",
    solutions: ["Document Automation", "Data & Report Management", "IT Support"],
  },
  {
    number: "07",
    title: "Trading",
    icon: ShoppingCart,
    description:
      "Simplify everyday trading operations with software, reporting and workflow automation solutions.",
    solutions: ["Quotation & Invoice Automation", "Inventory Management Solutions", "Business Reports"],
  },
  {
    number: "08",
    title: "Education",
    icon: GraduationCap,
    description:
      "Technology support and digital solutions for educational institutions and training organizations.",
    solutions: ["Computer & Network Support", "Website Development", "IT Maintenance"],
  },
  {
    number: "09",
    title: "Professional Services",
    icon: BriefcaseBusiness,
    description:
      "Practical technology and automation support for offices, CA firms and growing service-based businesses.",
    solutions: ["Office Workflow Automation", "Database Solutions", "IT & Staffing Support"],
  },
];

function Industries() {
  return (
    <main className="industries-page">

      {/* SEO META TAGS */}
      
<Helmet>
  <title>Industries We Serve | R&S Info Tech</title>

  <meta
    name="description"
    content="R&S Info Tech provides IT support, staffing, software development and business automation solutions for manufacturing, engineering, textile, pharmaceutical, trading and other industries."
  />

  <meta
    name="keywords"
    content="industries we serve, manufacturing IT solutions, engineering software, textile automation, pharmaceutical IT support, business automation, R&S Info Tech"
  />

  <link
    rel="canonical"
    href="https://infotech-rs.com/industries"
  />

  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Industries We Serve | R&S Info Tech"
  />
  <meta
    property="og:description"
    content="Explore how R&S Info Tech supports manufacturing, engineering, textile, pharmaceutical, trading and other industries with technology and automation solutions."
  />
  <meta
    property="og:url"
    content="https://infotech-rs.com/industries"
  />
  <meta property="og:site_name" content="R&S Info Tech" />
  <meta
    property="og:image"
    content="https://infotech-rs.com/images/logo.png"
  />

  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Industries We Serve | R&S Info Tech"
  />
  <meta
    name="twitter:description"
    content="Technology, IT support and automation solutions for multiple industries."
  />
  <meta
    name="twitter:image"
    content="https://infotech-rs.com/images/logo.png"
  />
</Helmet>


      <section className="industries-hero">
        <div className="industries-hero-content">
          <span className="industries-eyebrow">INDUSTRIES WE SERVE</span>
          <h1>
            Supporting Businesses
            <span> Across Industries.</span>
          </h1>
          <p>
            Every industry has different needs. We provide practical IT,
            staffing, software and automation solutions designed to
            support different business environments.
          </p>
          <Link to="/contact" className="industries-hero-btn">
            Discuss Your Business Needs <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="industries-hero-visual">
          <div className="industries-visual-icon">
            <Building2 size={65} />
          </div>
          <div className="industries-visual-line"></div>
          <span>Technology</span>
          <span>Business</span>
          <span>Growth</span>
        </div>
      </section>

      <section className="industries-intro">
        <span>OUR INDUSTRY FOCUS</span>
        <h2>Solutions for Different Business Environments</h2>
        <p>
          From industrial units to professional offices, we aim to
          simplify operations through reliable technology and
          business-focused solutions.
        </p>
      </section>

      <section className="industries-grid-section">
        <div className="industries-grid">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <article className="industry-card" key={industry.number}>
                <div className="industry-card-top">
                  <div className="industry-icon">
                    <Icon size={28} />
                  </div>
                  <span>{industry.number}</span>
                </div>

                <h3>{industry.title}</h3>
                <p className="industry-description">
                  {industry.description}
                </p>

                <div className="industry-solutions">
                  <h4>Relevant Solutions</h4>
                  {industry.solutions.map((solution) => (
                    <div className="industry-solution" key={solution}>
                      <CheckCircle size={16} />
                      <span>{solution}</span>
                    </div>
                  ))}
                </div>

                <Link to="/contact" className="industry-card-link">
                  Discuss Your Needs <ArrowUpRight size={17} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="industries-bottom">
        <div className="industries-bottom-content">
          <span>YOUR BUSINESS, OUR SUPPORT</span>
          <h2>Don't See Your Industry Listed?</h2>
          <p>
            Tell us about your business and its requirements. We can
            discuss a suitable combination of IT, staffing, software
            and automation solutions.
          </p>
          <Link to="/contact">
            Contact Our Team <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Industries;
