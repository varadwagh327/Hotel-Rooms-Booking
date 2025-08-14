import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import AdminFooter from './AdminFooter.jsx';
import AdminNavBar from "./AdminNavBar.jsx";
import './GetContactInfo.css';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [viewMode, setViewMode] = useState("grid"); // grid or list

  const fetchMessages = async () => {
    try {
      console.log('Fetching messages from API...');
      const response = await axios.get("http://localhost:4000/api/v1/message/getall");
      console.log('API Response:', response.data);
      
      if (response.data.success && response.data.messages) {
        setMessages(response.data.messages);
        console.log('Messages set:', response.data.messages);
      } else {
        console.log('No messages found in response');
        setMessages([]);
      }
    } catch (err) {
      console.error('Error fetching messages:', err);
      setError(err.response?.data?.message || "Failed to fetch messages. Please check if the backend server is running.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleRefresh = () => {
    setLoading(true);
    setError("");
    fetchMessages();
  };

  const filteredMessages = messages.filter(msg => {
    const matchesSearch = msg.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         msg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         msg.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         msg.message.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  // Loading Animation Component
  if (loading) {
    return (
      <div className="contact-info-page">
        <AdminNavBar/>
        <div className="loading-container">
          <motion.div 
            className="loading-3d"
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="cube">
              <div className="face front"><i className="fas fa-envelope"></i></div>
              <div className="face back"><i className="fas fa-message"></i></div>
              <div className="face right"><i className="fas fa-paper-plane"></i></div>
              <div className="face left"><i className="fas fa-inbox"></i></div>
              <div className="face top"><i className="fas fa-mail-bulk"></i></div>
              <div className="face bottom"><i className="fas fa-comment"></i></div>
            </div>
          </motion.div>
          <motion.h3 
            className="loading-text"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Loading Messages...
          </motion.h3>
          <div className="loading-progress">
            <motion.div 
              className="progress-bar"
              animate={{ width: ["0%", "100%", "0%"] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </div>
    );
  }

  // Error Component
  if (error) {
    return (
      <div className="contact-info-page">
        <AdminNavBar/>
        <motion.div 
          className="error-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="error-3d"
            animate={{
              rotateY: [0, 15, -15, 0],
              y: [0, -10, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <i className="fas fa-exclamation-triangle"></i>
          </motion.div>
          <h3 className="error-title">Oops! Something went wrong</h3>
          <p className="error-message">{error}</p>
          <motion.button 
            className="btn btn-gradient btn-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRefresh}
          >
            <i className="fas fa-redo me-2"></i>
            Try Again
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="contact-info-page">
      {/* Background Elements */}
      <div className="bg-particles">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.6, 0.1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <AdminNavBar/>
      
      {/* Header Section */}
      <motion.div 
        className="page-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <motion.div 
                className="header-content"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div 
                  className="header-icon"
                  animate={{
                    rotateY: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <i className="fas fa-envelope-open-text"></i>
                </motion.div>
                <h1 className="page-title">
                  Contact Messages
                  <span className="title-accent">Dashboard</span>
                </h1>
                <p className="page-subtitle">
                  Manage and view all customer inquiries and feedback
                </p>
              </motion.div>
            </div>
            <div className="col-lg-4">
              <motion.div 
                className="header-stats"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="stat-card">
                  <motion.div 
                    className="stat-number"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {messages.length}
                  </motion.div>
                  <div className="stat-label">Total Messages</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Control Panel */}
      <motion.div 
        className="control-panel"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="container">
          <div className="panel-content">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="search-section">
                  <motion.div 
                    className="search-wrapper"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <i className="fas fa-search search-icon"></i>
                    <input
                      type="text"
                      className="form-control search-input"
                      placeholder="Search messages by name, email, subject..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {searchTerm && (
                      <motion.button
                        className="clear-search"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        onClick={() => setSearchTerm("")}
                      >
                        <i className="fas fa-times"></i>
                      </motion.button>
                    )}
                  </motion.div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="control-buttons">
                  <motion.button
                    className="btn btn-gradient btn-refresh"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleRefresh}
                    disabled={loading}
                  >
                    <motion.i 
                      className="fas fa-sync-alt"
                      animate={loading ? { rotate: 360 } : {}}
                      transition={{ duration: 1, repeat: loading ? Infinity : 0, ease: "linear" }}
                    />
                    <span className="ms-2">{loading ? 'Refreshing...' : 'Refresh'}</span>
                  </motion.button>
                  
                  <div className="view-toggle">
                    <motion.button
                      className={`btn ${viewMode === 'grid' ? 'btn-active' : 'btn-outline'}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setViewMode('grid')}
                    >
                      <i className="fas fa-th-large"></i>
                    </motion.button>
                    <motion.button
                      className={`btn ${viewMode === 'list' ? 'btn-active' : 'btn-outline'}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setViewMode('list')}
                    >
                      <i className="fas fa-list"></i>
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Messages Section */}
      <div className="messages-section">
        <div className="container">
          {filteredMessages.length === 0 ? (
            <motion.div 
              className="empty-state"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="empty-icon"
                animate={{
                  rotateX: [0, 360],
                  y: [0, -20, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <i className="fas fa-inbox"></i>
              </motion.div>
              <h3 className="empty-title">
                {searchTerm ? 'No matching messages found' : 'No messages yet'}
              </h3>
              <p className="empty-subtitle">
                {searchTerm ? 'Try adjusting your search criteria' : 'Messages will appear here when customers contact you'}
              </p>
              {searchTerm && (
                <motion.button
                  className="btn btn-outline-primary"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSearchTerm("")}
                >
                  Clear Search
                </motion.button>
              )}
            </motion.div>
          ) : (
            <motion.div 
              className={`messages-grid ${viewMode}`}
              layout
            >
              <AnimatePresence mode="popLayout">
                {filteredMessages.map((msg, index) => (
                  <motion.div
                    key={msg._id || index}
                    className="message-card-wrapper"
                    layout
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -50, scale: 0.9 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.05,
                      layout: { duration: 0.3 }
                    }}
                    whileHover={{ y: -10, scale: 1.02 }}
                  >
                    <div className="message-card">
                      <div className="card-header">
                        <motion.div 
                          className="user-avatar"
                          whileHover={{ scale: 1.1, rotateY: 180 }}
                          transition={{ duration: 0.3 }}
                        >
                          <i className="fas fa-user"></i>
                        </motion.div>
                        <div className="user-info">
                          <h5 className="user-name">{msg.Name}</h5>
                          <p className="user-email">{msg.email}</p>
                        </div>
                        <motion.button
                          className="expand-btn"
                          whileHover={{ scale: 1.1, rotate: 90 }}
                          onClick={() => setSelectedMessage(selectedMessage === msg._id ? null : msg._id)}
                        >
                          <i className="fas fa-expand-alt"></i>
                        </motion.button>
                      </div>
                      
                      <div className="card-body">
                        <div className="message-meta">
                          <span className="subject">
                            <i className="fas fa-tag"></i>
                            {msg.subject}
                          </span>
                        </div>
                        
                        <motion.div 
                          className="message-content"
                          animate={{
                            height: selectedMessage === msg._id ? 'auto' : '60px'
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <p>{msg.message}</p>
                        </motion.div>
                      </div>
                      
                      
                      
                      {/* 3D Hover Effect Overlay */}
                      <div className="card-overlay"></div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>

      <AdminFooter />
    </div>
  );
};

export default Messages;
