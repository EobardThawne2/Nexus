
import { Link } from 'react-router-dom';
import '../index.css';

export const Footer = () => {
  return (
    <footer className="nexus-footer">
      <div className="footer-container">
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>

      </div>
    </footer>
  );
};
