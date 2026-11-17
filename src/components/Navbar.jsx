
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Industries", path: "/industries" },
  ];

  const serviceLinks = [
    { name: "IT Services", path: "/services#it-services" },
    { name: "Staffing Solutions", path: "/services#staffing" },
    { name: "Software Development", path: "/services#software" },
    { name: "AI Automation", path: "/services#automation" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* Company Logo */}
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img
            src="/images/logo.png"
            alt="R&S Info Tech"
            className="company-logo"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Navigation */}
        <nav className={menuOpen ? "nav-links active" : "nav-links"}>

          {navLinks.slice(0, 2).map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              end={link.path === "/"}
            >
              {link.name}
            </NavLink>
          ))}

          {/* Services Dropdown */}
          <div className="nav-dropdown">
            <button
              className="dropdown-trigger"
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
            >
              Services
              <ChevronDown
                size={16}
                className={servicesOpen ? "rotate-icon" : ""}
              />
            </button>

            <div className={servicesOpen ? "dropdown-menu show" : "dropdown-menu"}>
              {serviceLinks.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  onClick={closeMenu}
                >
                  {service.name}
                </Link>
              ))}
              <Link to="/services" onClick={closeMenu}>
                View All Services →
              </Link>
            </div>
          </div>

          <NavLink to="/industries" onClick={closeMenu}>
            Industries
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>

          <a href="tel:9935719755" className="nav-contact">
            <Phone size={16} />
            Call Us
          </a>

        </nav>
      </div>
    </header>
  );
}

export default Navbar;
