
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-about">
    <img
  src="/images/logo.png"
  alt="R&S Info Tech"
  className="footer-logo"
  width="170"
  height="69"
/>

          <p>
            Smart Automation for Smarter Tomorrow.
            We provide IT services, staffing, software
            development and business automation solutions.
          </p>

          <a href="https://infotech-rs.com"
             target="_blank"
             rel="noreferrer"
             className="footer-website">
            Visit Our Website <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Our Services</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footer-links">
          <h3>Our Services</h3>
          <Link to="/services#it-services">IT Services</Link>
          <Link to="/services#staffing">Staffing Solutions</Link>
          <Link to="/services#software">Software Development</Link>
          <Link to="/services#automation">AI & Automation</Link>
        </div>

        <div className="footer-contact">
          <h3>Contact Information</h3>

          <p>
            <Phone size={17} />
            <a href="tel:9935719755">9935719755</a>
          </p>

          <p>
            <Mail size={17} />
            <a href="mailto:Support@infotech-rs.com">
              Support@infotech-rs.com
            </a>
          </p>

          <p>
            <MapPin size={17} />
            <span>
              H.No.-2277, Near Tagore Academy Public School,
              Sector-3, Ballabgarh, Faridabad, Haryana - 121004
            </span>
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} R&S Info Tech.
          All Rights Reserved.
        </p>
        <p>Smart Automation for Smarter Tomorrow</p>
      </div>
    </footer>
  );
}

export default Footer;
