import React from 'react';
import AdminFooter from './AdminFooter.jsx';
import AdminNavBar from './AdminNavBar.jsx';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const AdminDemo = () => {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
      {/* Admin NavBar */}
      <AdminNavBar />

      {/* Demo Content */}
      <div className="container py-5">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-5"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="display-4 fw-bold text-primary mb-3">
            <i className="fas fa-crown me-3"></i>
            Advanced Admin Footer Demo
          </h1>
          <p className="lead text-muted">
            Experience the most advanced, animated footer for admin panels with modern design and smooth interactions.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="row mb-5">
          {[
            {
              icon: 'fas fa-magic',
              title: 'Advanced Animations',
              description: 'Smooth Framer Motion animations with spring physics and staggered children.',
              color: '#007bff'
            },
            {
              icon: 'fas fa-palette',
              title: 'Modern Design',
              description: 'Glassmorphism effects, gradient backgrounds, and backdrop filters for a premium look.',
              color: '#28a745'
            },
            {
              icon: 'fas fa-mobile-alt',
              title: 'Fully Responsive',
              description: 'Perfect adaptation to all screen sizes with mobile-first approach.',
              color: '#ffc107'
            },
            {
              icon: 'fas fa-bolt',
              title: 'Quick Actions',
              description: 'Interactive quick action buttons for common admin tasks with hover effects.',
              color: '#dc3545'
            },
            {
              icon: 'fas fa-chart-line',
              title: 'Live Statistics',
              description: 'Real-time system stats with animated counters and status indicators.',
              color: '#17a2b8'
            },
            {
              icon: 'fas fa-clock',
              title: 'Live Information',
              description: 'Real-time clock, weather widget, and timezone information with smooth updates.',
              color: '#6f42c1'
            }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              className="col-lg-4 col-md-6 mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="card h-100 shadow-lg border-0 rounded-4 overflow-hidden">
                <div className="card-body p-4">
                  <div 
                    className="feature-icon mb-3 d-inline-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: '60px',
                      height: '60px',
                      backgroundColor: feature.color + '20',
                      color: feature.color
                    }}
                  >
                    <motion.i 
                      className={feature.icon + ' fa-2x'}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <h5 className="card-title fw-bold">{feature.title}</h5>
                  <p className="card-text text-muted">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instructions */}
        <motion.div 
          className="alert alert-info rounded-4 shadow-sm border-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              <i className="fas fa-info-circle fa-2x text-info"></i>
            </div>
            <div className="flex-grow-1 ms-3">
              <h6 className="alert-heading fw-bold mb-2">How to Experience the Footer</h6>
              <p className="mb-2">
                Scroll down to see the advanced admin footer with all its interactive features:
              </p>
              <ul className="mb-0">
                <li><strong>Quick Actions:</strong> Hover over the action buttons to see smooth animations</li>
                <li><strong>System Stats:</strong> Watch the pulsing animations on status icons</li>
                <li><strong>Live Time:</strong> See the real-time clock updating every second</li>
                <li><strong>Social Links:</strong> Hover for 360° rotation effects</li>
                <li><strong>Floating Button:</strong> Use the floating action button to scroll back to top</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Spacer for scrolling */}
        <div style={{ height: '50vh' }}></div>
        
        {/* Call to Action */}
        <motion.div 
          className="text-center py-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h3 className="mb-4">Ready to see the magic?</h3>
          <motion.button 
            className="btn btn-primary btn-lg rounded-pill px-5"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
          >
            <i className="fas fa-arrow-down me-2"></i>
            Scroll to Footer
          </motion.button>
        </motion.div>

        {/* More content for scrolling */}
        <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <motion.div 
            className="text-center"
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <i className="fas fa-arrow-down fa-3x text-muted mb-3"></i>
            <h4 className="text-muted">Keep scrolling to see the footer</h4>
          </motion.div>
        </div>
      </div>

      {/* The Advanced Admin Footer */}
      <AdminFooter />
    </div>
  );
};

export default AdminDemo;
