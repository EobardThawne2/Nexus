import { motion } from 'framer-motion';
import { ShieldCheck, Activity, Terminal, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export const Dashboard = () => {
  return (
    <div style={{ width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        
        <motion.div variants={itemVariants} style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--text-primary)' }}>Command Center</h2>
          <p>Your cryptographic footprint has been validated and ingested.</p>
        </motion.div>

        <div className="bento-grid">
          
          {}
          <motion.div className="bento-item" style={{ gridColumn: 'span 4' }} variants={itemVariants}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <ShieldCheck size={24} color="var(--status-success)" />
              <span className="badge success">Validated</span>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1 }}>94%</div>
              <p style={{ marginTop: '0.5rem', marginBottom: 0 }}>Global Match Score</p>
            </div>
          </motion.div>

          {}
          <motion.div className="bento-item" style={{ gridColumn: 'span 8' }} variants={itemVariants}>
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Activity size={20} color="var(--accent-primary)" /> Actionable Intelligence
              </h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '1rem', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <CheckCircle2 size={18} color="var(--status-success)" style={{ marginTop: '2px' }} />
                <div>
                  <h4 style={{ color: 'var(--text-primary)', fontSize: '14px', marginBottom: '4px' }}>Review Architectural Blindspots</h4>
                  <p style={{ fontSize: '13px', margin: 0 }}>SYNAPSE detected a potential gap in distributed caching strategies based on your repository history.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ width: '18px', height: '18px', borderRadius: '50%', border: '2px solid var(--text-tertiary)', marginTop: '2px' }} />
                <div>
                  <h4 style={{ color: 'var(--text-primary)', fontSize: '14px', marginBottom: '4px' }}>Connect Communication Channels</h4>
                  <p style={{ fontSize: '13px', margin: 0 }}>Join the dedicated Discord matrix for your assigned pod.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {}
          <motion.div className="bento-item" style={{ gridColumn: 'span 12' }} variants={itemVariants}>
             <h3 style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <Terminal size={20} color="var(--text-tertiary)" /> Recent Agent Activity
             </h3>
             <table className="data-table">
               <thead>
                 <tr>
                   <th>TIMESTAMP</th>
                   <th>AGENT IDENTIFIER</th>
                   <th>OPERATION</th>
                   <th>STATUS</th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   <td>Just now</td>
                   <td style={{ color: 'var(--accent-primary)', fontWeight: 500 }}>VALIDATOR</td>
                   <td>Cryptographic answer evaluation</td>
                   <td><span className="badge success">COMPLETED</span></td>
                 </tr>
                 <tr>
                   <td>2 minutes ago</td>
                   <td style={{ color: 'var(--status-warning)', fontWeight: 500 }}>SYNAPSE</td>
                   <td>Cognitive profile sanitization protocol</td>
                   <td><span className="badge success">COMPLETED</span></td>
                 </tr>
                 <tr>
                   <td>5 minutes ago</td>
                   <td style={{ color: 'var(--text-tertiary)', fontWeight: 500 }}>GATEWAY</td>
                   <td>Footprint extraction (GitHub, LinkedIn)</td>
                   <td><span className="badge success">COMPLETED</span></td>
                 </tr>
               </tbody>
             </table>
             <div style={{ marginTop: '2rem', textAlign: 'right' }}>
               <Link to="/analysis-history" className="nexus-button secondary">View Full Trace History</Link>
             </div>
          </motion.div>
          
        </div>
      </motion.div>
    </div>
  );
};
