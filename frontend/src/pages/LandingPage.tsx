import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Search, Activity, Network } from 'lucide-react';
import { motion } from 'framer-motion';

export const LandingPage = () => {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {/* Animated Hero Section */}
      <motion.div 
        className="hero-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Subtle Background Animation */}
        <div style={{
          position: 'absolute',
          top: '-50%', left: '-50%', width: '200%', height: '200%',
          background: 'radial-gradient(circle at center, rgba(94, 106, 210, 0.08) 0%, transparent 40%)',
          animation: 'spin 20s linear infinite',
          zIndex: 0,
          pointerEvents: 'none'
        }} />

        <div className="hero-badge">Nexus OS v2.0 is now live</div>
        <h1 style={{ position: 'relative', zIndex: 1 }}>Autonomous Infrastructure for <br />Elite Engineering Teams</h1>
        <p style={{ position: 'relative', zIndex: 1, fontSize: '16px', maxWidth: '540px', margin: '0 auto 2rem auto', color: 'var(--text-secondary)' }}>
          Eliminate technical debt in hiring. Nexus deploys highly specialized AI agents to rigorously analyze profiles, conduct architectural interviews, and instantly route talent based on cryptographic validation.
        </p>
        
        <Link to="/onboarding" className="nexus-button large" style={{ position: 'relative', zIndex: 1 }}>
          Initialize Assembly <ArrowRight size={18} />
        </Link>
      </motion.div>

      {/* Bento Box Grid */}
      <div className="bento-grid">
        
        {/* Feature 1 (Large Span) */}
        <motion.div className="bento-item" style={{ gridColumn: 'span 8' }} whileHover={{ scale: 0.995 }}>
          <div>
            <Activity size={28} color="var(--accent-primary)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ color: 'var(--text-primary)' }}>Deterministic Skill Scanning</h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '400px' }}>
              Our agents ingest raw signals from GitHub and LinkedIn to synthesize a zero-bias, cryptographic map of a developer's true technical capabilities.
            </p>
          </div>
          {/* Faux UI Graphic */}
          <div style={{ marginTop: '2rem', height: '120px', background: 'var(--bg-base)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'flex-end', padding: '1rem', gap: '8px' }}>
             {[40, 70, 45, 90, 60, 80, 50, 85].map((h, i) => (
                <div key={i} style={{ flex: 1, height: `${h}%`, background: 'var(--border-strong)', borderRadius: '2px' }} />
             ))}
          </div>
        </motion.div>

        {/* Feature 2 (Small Span) */}
        <motion.div className="bento-item" style={{ gridColumn: 'span 4' }} whileHover={{ scale: 0.995 }}>
          <Search size={28} color="var(--status-success)" style={{ marginBottom: '1rem' }} />
          <h3 style={{ color: 'var(--text-primary)' }}>Gap Analysis</h3>
          <p style={{ color: 'var(--text-secondary)' }}>
            Instantly surface architectural blind spots before a single human interview takes place.
          </p>
        </motion.div>

        {/* Feature 3 (Small Span) */}
        <motion.div className="bento-item" style={{ gridColumn: 'span 4' }} whileHover={{ scale: 0.995 }}>
          <Network size={28} color="var(--status-warning)" style={{ marginBottom: '1rem' }} />
          <h3 style={{ color: 'var(--text-primary)' }}>Automated Resume Routing</h3>
          <p style={{ color: 'var(--text-secondary)' }}>
            Dynamically route candidates to internal project vacancies using real-time skill matching algorithms.
          </p>
        </motion.div>

        {/* Feature 4 (Large Span) */}
        <motion.div className="bento-item" style={{ gridColumn: 'span 8' }} whileHover={{ scale: 0.995 }}>
          <div>
            <Shield size={28} color="#8b5cf6" style={{ marginBottom: '1rem' }} />
            <h3 style={{ color: 'var(--text-primary)' }}>Cryptographic Governance</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Every cognitive evaluation is secured via immutable SHA-256 transaction traces, guaranteeing complete auditability of the hiring lifecycle.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
