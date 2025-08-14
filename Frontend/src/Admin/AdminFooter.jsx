import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './AdminFooter.css';

const AdminFooter = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [activeQuickAction, setActiveQuickAction] = useState(null);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Footer visibility animation
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      
      if (scrollTop + clientHeight >= scrollHeight - 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const quickActions = [
    { icon: 'fas fa-plus-circle', label: 'Add New', color: '#28a745', action: 'add' },
    { icon: 'fas fa-chart-bar', label: 'Analytics', color: '#007bff', action: 'analytics' },
    { icon: 'fas fa-cog', label: 'Settings', color: '#6c757d', action: 'settings' },
    { icon: 'fas fa-bell', label: 'Notifications', color: '#ffc107', action: 'notifications' },
    { icon: 'fas fa-users', label: 'Users', color: '#17a2b8', action: 'users' },
    { icon: 'fas fa-download', label: 'Export', color: '#6f42c1', action: 'export' }
  ];

  const systemStats = [
    { label: 'Server Status', value: 'Online', icon: 'fas fa-server', color: '#28a745' },
    { label: 'Active Users', value: '127', icon: 'fas fa-users', color: '#007bff' },
    { label: 'Messages', value: '1,234', icon: 'fas fa-envelope', color: '#ffc107' },
    { label: 'Bookings', value: '856', icon: 'fas fa-calendar', color: '#17a2b8' }
  ];

  const socialLinks = [
    { icon: 'fab fa-facebook-f', url: '#', color: '#3b5998' },
    { icon: 'fab fa-twitter', url: '#', color: '#1da1f2' },
    { icon: 'fab fa-instagram', url: '#', color: '#e4405f' },
    { icon: 'fab fa-linkedin-in', url: '#', color: '#0077b5' },
    { icon: 'fab fa-github', url: '#', color: '#333' },
    { icon: 'fab fa-youtube', url: '#', color: '#ff0000' }
  ];

  const handleQuickAction = (action) => {
    setActiveQuickAction(action);
    setTimeout(() => setActiveQuickAction(null), 300);
    
    // Simulate action
    console.log(`Quick action: ${action}`);
    
    // Add your actual action handlers here
    switch(action) {
      case 'add':
        // Handle add new action
        break;
      case 'analytics':
        // Handle analytics action
        break;
      case 'settings':
        // Handle settings action
        break;
      case 'notifications':
        // Handle notifications action
        break;
      case 'users':
        // Handle users action
        break;
      case 'export':
        // Handle export action
        break;
      default:
        break;
    }
  };

  const containerVariants = {
    hidden: { 
      opacity: 0,
      y: 100,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  const pulseVariants = {
    initial: { scale: 1 },
    animate: { 
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.footer 
        className="admin-footer"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        {/* Animated Background */}
        <div className="footer-background">
          <div className="animated-shapes">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className={`shape shape-${i + 1}`}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5
                }}
              />
            ))}
          </div>
        </div>

        <div className="container-fluid">
          {/* Quick Actions Bar */}
          <motion.div 
            className="quick-actions-bar mb-4"
            variants={itemVariants}
          >
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="d-flex justify-content-center flex-wrap gap-3">
                  {quickActions.map((action, index) => (
                    <motion.button
                      key={action.action}
                      className={`quick-action-btn ${activeQuickAction === action.action ? 'active' : ''}`}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleQuickAction(action.action)}
                      style={{ '--action-color': action.color }}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <motion.i 
                        className={action.icon}
                        animate={activeQuickAction === action.action ? { rotate: 360 } : {}}
                        transition={{ duration: 0.3 }}
                      />
                      <span>{action.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Footer Content */}
          <div className="row">
            {/* System Stats */}
            <motion.div 
              className="col-lg-3 col-md-6 mb-4"
              variants={itemVariants}
            >
              <div className="footer-section">
                <motion.h5 
                  className="section-title"
                  whileHover={{ scale: 1.05 }}
                >
                  <i className="fas fa-chart-line me-2"></i>
                  System Status
                </motion.h5>
                <div className="stats-grid">
                  {systemStats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="stat-item"
                      whileHover={{ scale: 1.05, y: -2 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="stat-icon" style={{ color: stat.color }}>
                        <motion.i 
                          className={stat.icon}
                          variants={pulseVariants}
                          initial="initial"
                          animate="animate"
                        />
                      </div>
                      <div className="stat-info">
                        <div className="stat-value">{stat.value}</div>
                        <div className="stat-label">{stat.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Admin Info */}
            <motion.div 
              className="col-lg-3 col-md-6 mb-4"
              variants={itemVariants}
            >
              <div className="footer-section">
                <motion.h5 
                  className="section-title"
                  whileHover={{ scale: 1.05 }}
                >
                  <i className="fas fa-user-shield me-2"></i>
                  Admin Panel
                </motion.h5>
                <motion.div 
                  className="admin-info"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="admin-avatar">
                    <motion.img 
                      src="https://via.placeholder.com/60x60/007bff/ffffff?text=AP"
                      alt="Admin"
                      className="rounded-circle"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="online-indicator">
                      <motion.div 
                        className="pulse-dot"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [1, 0.5, 1]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity
                        }}
                      />
                    </div>
                  </div>
                  <div className="admin-details">
                    <div className="admin-name">Holiday Inn Admin</div>
                    <div className="admin-role">System Administrator</div>
                    <div className="login-time">
                      <i className="fas fa-clock me-1"></i>
                      Last login: 2 hours ago
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Current Time & Weather */}
            <motion.div 
              className="col-lg-3 col-md-6 mb-4"
              variants={itemVariants}
            >
              <div className="footer-section">
                <motion.h5 
                  className="section-title"
                  whileHover={{ scale: 1.05 }}
                >
                  <i className="fas fa-globe me-2"></i>
                  Live Info
                </motion.h5>
                <div className="live-info">
                  <motion.div 
                    className="current-time"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="time-display">
                      <motion.div 
                        className="time"
                        key={currentTime.getSeconds()}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {currentTime.toLocaleTimeString()}
                      </motion.div>
                      <div className="date">
                        {currentTime.toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                    </div>
                    <div className="timezone">
                      <i className="fas fa-map-marker-alt me-1"></i>
                      {Intl.DateTimeFormat().resolvedOptions().timeZone}
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="weather-widget"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="weather-icon">
                      <motion.i 
                        className="fas fa-sun"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      />
                    </div>
                    <div className="weather-info">
                      <div className="temperature">24°C</div>
                      <div className="condition">Sunny</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Social & Links */}
            <motion.div 
              className="col-lg-3 col-md-6 mb-4"
              variants={itemVariants}
            >
              <div className="footer-section">
                <motion.h5 
                  className="section-title"
                  whileHover={{ scale: 1.05 }}
                >
                  <i className="fas fa-share-alt me-2"></i>
                  Connect
                </motion.h5>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      className="social-link"
                      style={{ '--social-color': social.color }}
                      whileHover={{ 
                        scale: 1.2, 
                        y: -5,
                        rotate: 360 
                      }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <motion.i 
                        className={social.icon}
                        whileHover={{ scale: 1.1 }}
                      />
                    </motion.a>
                  ))}
                </div>
                
                <div className="footer-links mt-3">
                  {['Documentation', 'API Reference', 'Support', 'Terms'].map((link, index) => (
                    <motion.a
                      key={link}
                      href="#"
                      className="footer-link"
                      whileHover={{ x: 5, color: '#007bff' }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {link}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div 
            className="footer-bottom"
            variants={itemVariants}
          >
            <div className="row align-items-center">
              <div className="col-md-6">
                <motion.div 
                  className="copyright"
                  whileHover={{ scale: 1.02 }}
                >
                  <i className="fas fa-copyright me-2"></i>
                  {new Date().getFullYear()} Holiday Inn Admin Panel. All rights reserved.
                </motion.div>
              </div>
              <div className="col-md-6 text-md-end">
                <motion.div 
                  className="version-info"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="version-badge">
                    <i className="fas fa-code-branch me-1"></i>
                    Version 2.1.4
                  </span>
                  <motion.div 
                    className="build-status"
                    animate={{
                      backgroundColor: ['#28a745', '#20c997', '#28a745']
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity
                    }}
                  >
                    <i className="fas fa-check-circle me-1"></i>
                    Build: Stable
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Action Button */}
        <motion.div 
          className="floating-action"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <button 
            className="fab-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <motion.i 
              className="fas fa-chevron-up"
              animate={{ y: [-2, 2, -2] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </button>
        </motion.div>
      </motion.footer>
    </AnimatePresence>
  );
};

export default AdminFooter;
