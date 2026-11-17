import { Helmet } from "react-helmet-async";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  Send,
  MessageCircle,
  Building2,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Website Enquiry - ${formData.service || "General Enquiry"}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:Support@infotech-rs.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="contact-page">

      {/* SEO META TAGS */}
    
<Helmet>
  <title>Contact R&S Info Tech | Faridabad, Haryana</title>

  <meta
    name="description"
    content="Contact R&S Info Tech in Faridabad, Haryana for IT support, staffing solutions, software development and AI business automation. Call or email our team today."
  />

  <meta
    name="keywords"
    content="Contact R&S Info Tech, IT company Faridabad, IT services Faridabad, software development Faridabad, business automation, staffing solutions"
  />

  <link
    rel="canonical"
    href="https://infotech-rs.com/contact"
  />

  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Contact R&S Info Tech | Faridabad, Haryana"
  />
  <meta
    property="og:description"
    content="Get in touch with R&S Info Tech for IT support, staffing, software development and business automation solutions."
  />
  <meta
    property="og:url"
    content="https://infotech-rs.com/contact"
  />
  <meta property="og:site_name" content="R&S Info Tech" />
  <meta
    property="og:image"
    content="https://infotech-rs.com/images/logo.png"
  />

  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Contact R&S Info Tech"
  />
  <meta
    name="twitter:description"
    content="Contact our team for IT services, software development and business automation."
  />
  <meta
    name="twitter:image"
    content="https://infotech-rs.com/images/logo.png"
  />
</Helmet>


      <section className="contact-hero">
        <div className="contact-hero-content">
          <span>GET IN TOUCH</span>
          <h1>
            Let's Talk About
            <strong> Your Business Needs.</strong>
          </h1>
          <p>
            Looking for IT support, staffing, software development or
            business automation? Tell us what you need. We'd be happy
            to discuss how we can help.
          </p>
          <a href="tel:9935719755" className="contact-hero-btn">
            <Phone size={18} /> Call Us: 9935719755
          </a>
        </div>

        <div className="contact-hero-visual">
          <div className="contact-visual-icon">
            <MessageCircle size={58} />
          </div>
          <h3>Let's Connect</h3>
          <p>Good solutions start with a conversation.</p>
        </div>
      </section>

      <section className="contact-main-section">
        <div className="contact-main-container">
          <div className="contact-info">
            <span className="contact-section-label">CONTACT INFORMATION</span>
            <h2>We’re Here to Help Your Business.</h2>
            <p className="contact-info-intro">
              Reach out to us for enquiries, service details or business
              requirements. Connect with our team through the details below.
            </p>

            <div className="contact-info-card">
              <div className="contact-info-icon"><Phone size={22} /></div>
              <div>
                <h4>Phone</h4>
                <a href="tel:9935719755">9935719755</a>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon"><Mail size={22} /></div>
              <div>
                <h4>Email</h4>
                <a href="mailto:Support@infotech-rs.com">
                  Support@infotech-rs.com
                </a>
                <a href="mailto:rsinfotech630@gmail.com">
                  rsinfotech630@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon"><Clock size={22} /></div>
              <div>
                <h4>Website</h4>
                <a href="https://infotech-rs.com" target="_blank" rel="noreferrer">
                  www.infotech-rs.com
                </a>
              </div>
            </div>

            <a
              href="https://wa.me/919935719755"
              target="_blank"
              rel="noreferrer"
              className="contact-whatsapp"
            >
              <MessageCircle size={19} />
              Connect on WhatsApp
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="contact-form-card">
            <span className="contact-section-label">SEND AN ENQUIRY</span>
            <h2>Tell Us What You Need</h2>
            <p>Fill in the details below and start a conversation with us.</p>

            <form onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">Your Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">Email Address *</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-phone">Phone Number *</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-service">Interested Service</label>
                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="IT Services">IT Services</option>
                    <option value="Staffing Solutions">Staffing Solutions</option>
                    <option value="Software Development">Software Development</option>
                    <option value="AI & Business Automation">AI & Business Automation</option>
                    <option value="Other Enquiry">Other Enquiry</option>
                  </select>
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">Your Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="contact-submit-btn">
                Send Enquiry <Send size={17} />
              </button>

              <p className="contact-form-note">
                Submitting opens your email application with the enquiry details
                ready to send.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="contact-address-section">
        <div className="contact-address-heading">
          <span>FIND US</span>
          <h2>Our Office Locations</h2>
          <p>Connect with R&S Info Tech at our Faridabad locations.</p>
        </div>

        <div className="contact-address-grid">
          <div className="contact-address-card">
            <div className="contact-address-icon"><Building2 size={25} /></div>
            <h3>Registered Address</h3>
            <p>
              H.No.-87, Nahar Singh Colony, Gali No-6, Sector-3,
              Ballabgarh, Faridabad, Haryana, Pin 121004.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=H.No.87+Nahar+Singh+Colony+Sector+3+Ballabgarh+Faridabad+Haryana+121004"
              target="_blank"
              rel="noreferrer"
            >
              View on Map <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="contact-address-card">
            <div className="contact-address-icon"><MapPin size={25} /></div>
            <h3>Office Address</h3>
            <p>
              H.No.-2277, Near Tagore Academy Public School, Sector-3,
              Ballabgarh, Faridabad, Haryana, Pin 121004.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=H.No.2277+Near+Tagore+Academy+Public+School+Sector+3+Ballabgarh+Faridabad+Haryana+121004"
              target="_blank"
              rel="noreferrer"
            >
              View on Map <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="contact-bottom-cta">
        <h2>Have a Requirement? Let's Discuss.</h2>
        <p>
          One conversation can be the first step towards a smarter
          business workflow.
        </p>
        <a href="tel:9935719755">
          <Phone size={18} /> Call R&S Info Tech
        </a>
      </section>
    </main>
  );
}

export default Contact;
