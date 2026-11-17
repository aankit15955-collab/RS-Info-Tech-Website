
import { Helmet } from "react-helmet-async";
import {
  Monitor,
  Users,
  Code2,
  Workflow,
  ArrowUpRight,
  CheckCircle,
  Headset,
  Network,
  ShieldCheck,
  Database,
  Bot,
  FileSpreadsheet,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "it-services",
    number: "01",
    label: "TECHNOLOGY SUPPORT",
    title: "IT Services & Technical Support",
    description:
      "Keep your business technology running smoothly with reliable IT support, maintenance and infrastructure solutions.",
    icon: Monitor,
    features: [
      "Annual Maintenance Contracts (AMC)",
      "Computer, Laptop & Printer Repair",
      "Network Setup & Troubleshooting",
      "CCTV Installation & Support",
      "Hardware & Software Support",
      "IT Infrastructure Management",
    ],
    points: [
      { icon: Headset, title: "Reliable Support", text: "Technical assistance when your business needs it." },
      { icon: Network, title: "Better Connectivity", text: "Network solutions for smooth business operations." },
      { icon: ShieldCheck, title: "System Maintenance", text: "Keep your systems secure and up to date." },
    ],
  },
  {
    id: "staffing",
    number: "02",
    label: "WORKFORCE SOLUTIONS",
    title: "Staffing Solutions",
    description:
      "Find the right people for your business with flexible staffing solutions for technical, administrative and operational roles.",
    icon: Users,
    features: [
      "IT & Technical Staffing",
      "Office & Administrative Staff",
      "Manufacturing & Industrial Manpower",
      "Temporary & Contract Staffing",
      "Skilled & Unskilled Workforce",
      "Recruitment Support",
    ],
    points: [
      { icon: Users, title: "Right Talent", text: "Connect with people suited to your requirements." },
      { icon: Settings, title: "Flexible Staffing", text: "Workforce support based on business needs." },
      { icon: CheckCircle, title: "Business Focus", text: "Spend more time on your core operations." },
    ],
  },
  {
    id: "software",
    number: "03",
    label: "DIGITAL DEVELOPMENT",
    title: "Software & Web Development",
    description:
      "Simplify your business operations with custom software, web applications and database solutions built around your workflow.",
    icon: Code2,
    features: [
      "Custom Business Software",
      "Website & Web Application Development",
      "Database Design & Development",
      "Business Management Applications",
      "API & System Integration",
      "Software Maintenance & Support",
    ],
    points: [
      { icon: Code2, title: "Custom Solutions", text: "Software designed around your business process." },
      { icon: Database, title: "Organized Data", text: "Manage business information more effectively." },
      { icon: Monitor, title: "Digital Growth", text: "Build tools that support your business growth." },
    ],
  },
  {
    id: "automation",
    number: "04",
    label: "SMART BUSINESS AUTOMATION",
    title: "AI & Business Process Automation",
    description:
      "Reduce repetitive manual work and improve productivity with smart automation, AI-powered tools and customized workflows.",
    icon: Workflow,
    features: [
      "Excel & Spreadsheet Automation",
      "PDF & Document Automation",
      "MIS & Business Report Automation",
      "Quotation & Invoice Automation",
      "Email & File Workflow Automation",
      "AI-Powered Business Solutions",
    ],
    points: [
      { icon: Bot, title: "AI Solutions", text: "Explore practical AI tools for business tasks." },
      { icon: FileSpreadsheet, title: "Less Manual Work", text: "Automate repetitive spreadsheet and document tasks." },
      { icon: Workflow, title: "Smooth Workflows", text: "Connect tasks into more efficient processes." },
    ],
  },
];

function Services() {
  return (
    <main className="services-page">

      {/* SEO META TAGS */}
     
<Helmet>
  <title>IT Services & Software Development | R&S Info Tech</title>

  <meta
    name="description"
    content="Explore R&S Info Tech services including IT support, AMC, computer repair, networking, staffing solutions, custom software development and AI-powered business automation."
  />

  <meta
    name="keywords"
    content="IT services Faridabad, IT support, AMC services, software development, IT staffing, AI automation, business automation"
  />

  <link rel="canonical" href="https://infotech-rs.com/services" />

  <meta property="og:type" content="website" />
  <meta property="og:title" content="IT Services & Software Development | R&S Info Tech" />
  <meta
    property="og:description"
    content="Discover IT support, staffing, custom software and intelligent automation solutions for your business."
  />
  <meta property="og:url" content="https://infotech-rs.com/services" />
  <meta property="og:site_name" content="R&S Info Tech" />
  <meta property="og:image" content="https://infotech-rs.com/images/logo.png" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="IT Services | R&S Info Tech" />
  <meta
    name="twitter:description"
    content="IT support, software development, staffing and business automation solutions."
  />
  <meta name="twitter:image" content="https://infotech-rs.com/images/logo.png" />
</Helmet>

     
      <section className="services-page-hero">
        <div className="services-page-hero-content">
          <span className="services-eyebrow">WHAT WE DO</span>
          <h1>
            Complete Business Solutions.
            <span> One Technology Partner.</span>
          </h1>
          <p>
            From IT support and staffing to software development and
            intelligent automation, we help businesses work smarter.
          </p>
          <Link to="/contact" className="services-hero-btn">
            Discuss Your Requirements <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="services-hero-decoration">
          <div className="services-hero-icon"><Workflow size={65} /></div>
          <span>Technology</span>
          <span>People</span>
          <span>Automation</span>
        </div>
      </section>

      <section className="services-overview">
        <div className="services-overview-heading">
          <span>OUR EXPERTISE</span>
          <h2>Solutions That Move Your Business Forward</h2>
          <p>
            Explore our services and discover how we can support your
            day-to-day operations and long-term goals.
          </p>
        </div>

        <div className="services-overview-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <a href={`#${service.id}`} className="service-overview-card" key={service.id}>
                <div className="service-overview-icon"><Icon size={27} /></div>
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-overview-link">
                  Explore Service <ArrowUpRight size={17} />
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <section
            className={`service-detail-section ${index % 2 !== 0 ? "service-detail-alt" : ""}`}
            id={service.id}
            key={service.id}
          >
            <div className="service-detail-container">
              <div className="service-detail-content">
                <span className="service-detail-label">
                  {service.number} / {service.label}
                </span>
                <h2>{service.title}</h2>
                <p className="service-detail-description">{service.description}</p>

                <div className="service-feature-grid">
                  {service.features.map((feature) => (
                    <div className="service-feature" key={feature}>
                      <CheckCircle size={18} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to="/contact" className="service-detail-btn">
                  Enquire Now <ArrowUpRight size={18} />
                </Link>
              </div>

              <div className="service-detail-visual">
                <div className="service-visual-main-icon"><Icon size={55} /></div>
                <span className="service-visual-number">{service.number}</span>
                <div className="service-benefit-list">
                  {service.points.map((point) => {
                    const PointIcon = point.icon;
                    return (
                      <div className="service-benefit" key={point.title}>
                        <div className="service-benefit-icon"><PointIcon size={21} /></div>
                        <div>
                          <h4>{point.title}</h4>
                          <p>{point.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="services-bottom-cta">
        <span>LET'S WORK TOGETHER</span>
        <h2>Have a Business Challenge to Solve?</h2>
        <p>
          Tell us what your business needs. Let's explore the right
          technology, staffing or automation solution together.
        </p>
        <Link to="/contact">
          Talk to Our Team <ArrowUpRight size={18} />
        </Link>
      </section>
    </main>
  );
}

export default Services;
