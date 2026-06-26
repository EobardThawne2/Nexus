
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import '../index.css';

export const Navbar = () => {
  return (
    <nav className="nexus-navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Nexus
        </Link>
        <div className="navbar-links">
          <Link to="/onboarding" className="nexus-button nav-cta">
            Get Started <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </nav>
  );
};
