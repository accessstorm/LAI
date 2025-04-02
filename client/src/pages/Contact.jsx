import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Please check the form and try again.');
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowSuccess(false);
    setShowError(false);
    
    try {
      // Use your form submission code here
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '3727fcb0-26b4-4893-83c1-14a59a2ad826',
          subject: 'New Contact Form Submission',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setShowSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setErrorMessage('There was an error submitting the form. Please try again.');
        setShowError(true);
      }
    } catch (error) {
      setErrorMessage('There was an error submitting the form. Please try again.');
      setShowError(true);
    }
  };
  
  // All styles as objects for inline styling
  const styles = {
    body: {
      color: '#fbffff',
      backgroundColor: '#19244f',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box'
    },
    nav: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'saturate(180%) blur(20px)',
      width: '100%',
      zIndex: 100,
      height: '44px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    navUl: {
      display: 'flex',
      listStyle: 'none',
      maxWidth: '1000px',
      width: '100%',
      justifyContent: 'space-around',
      padding: 0,
      margin: 0
    },
    navLink: {
      color: '#f5f5f7',
      textDecoration: 'none',
      fontSize: '14px',
      opacity: '0.8',
      transition: 'opacity 0.3s ease'
    },
    mainContainer: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '40px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
      width: '100%',
      overflowY: 'auto'
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px',
      color: '#fbffff'
    },
    h1: {
      fontSize: '48px',
      fontWeight: 600,
      letterSpacing: '-0.5px',
      lineHeight: 1.07,
      marginBottom: '20px',
      color: '#fbffff'
    },
    h2: {
      fontSize: '28px',
      fontWeight: 500,
      letterSpacing: '-0.3px',
      lineHeight: 1.1,
      marginBottom: '20px',
      color: '#58daa6'
    },
    contactContainer: {
      display: 'flex',
      width: '100%',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)'
    },
    contactInfo: {
      flex: 1,
      backgroundColor: '#33437c',
      color: '#fbffff',
      padding: '50px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    contactInfoH2: {
      color: '#fbffff',
      fontSize: '32px',
      marginBottom: '30px'
    },
    contactLinks: {
      marginTop: '30px'
    },
    contactLink: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '25px',
      textDecoration: 'none',
      color: '#fbffff',
      fontSize: '18px',
      transition: 'transform 0.3s ease'
    },
    contactIcon: {
      width: '40px',
      height: '40px',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '15px'
    },
    contactForm: {
      flex: 1.5,
      padding: '50px',
      backgroundColor: '#33437c'
    },
    formGroup: {
      marginBottom: '25px'
    },
    formLabel: {
      display: 'block',
      marginBottom: '8px',
      fontWeight: 500,
      color: '#fbffff',
      textAlign: 'left'
    },
    formControl: {
      width: '100%',
      padding: '15px',
      border: '1px solid #58daa6',
      borderRadius: '10px',
      fontSize: '16px',
      transition: 'border-color 0.3s ease',
      color: '#fbffff',
      backgroundColor: 'transparent'
    },
    textarea: {
      height: '180px',
      resize: 'vertical'
    },
    submitButton: {
      backgroundColor: '#58daa6',
      color: 'rgb(0, 0, 0)',
      border: 'none',
      padding: '15px 30px',
      fontSize: '18px',
      fontWeight: 500,
      borderRadius: '10px',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    feedbackMessage: {
      marginTop: '20px',
      padding: '15px',
      borderRadius: '10px',
      textAlign: 'center',
      fontWeight: 500,
      display: 'none'
    },
    successMessage: {
      backgroundColor: '#e3f8e2',
      color: '#1d7f1d',
      border: '1px solid #a8e9a7',
      display: 'block'
    },
    errorMessage: {
      backgroundColor: '#fde8e8',
      color: '#c53030',
      border: '1px solid #f8b4b4',
      display: 'block'
    },
    // Media query styles are handled with conditional rendering
  };

  // Conditional styles for responsive design (to be used in place of media queries)
  const isMobile = window.innerWidth <= 900;
  const isSmallMobile = window.innerWidth <= 600;
  
  // Apply responsive styles
  if (isMobile) {
    styles.contactContainer.flexDirection = 'column';
    styles.contactContainer.maxHeight = 'none';
    styles.contactContainer.marginBottom = '20px';
    styles.contactInfo.padding = '30px';
    styles.contactForm.padding = '30px';
    styles.h1.fontSize = '36px';
  }
  
  if (isSmallMobile) {
    styles.navLink.fontSize = '12px';
    styles.contactInfo.padding = '20px';
    styles.contactForm.padding = '20px';
    styles.contactLink.fontSize = '16px';
  }

  return (
    <div style={styles.body}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <ul style={styles.navUl}>
          <li><a href="/" style={styles.navLink}>Home</a></li>
          <li><a href="./about" style={styles.navLink}>About Us</a></li>
          <li><a href="./howto.html" style={styles.navLink}>How-To-Use?</a></li>
          <li><a href="#" style={styles.navLink}>Refer a professional</a></li>
          <li><a href="./More.html" style={styles.navLink}>More</a></li>
        </ul>
      </nav>

      {/* Main Content Container */}
      <div style={styles.mainContainer}>
        <div style={styles.header}>
          <h1 style={styles.h1}>Contact Us</h1>
          <h2 style={styles.h2}>We'd love to hear from you</h2>
        </div>

        <div style={styles.contactContainer}>
          {/* Contact Info Section */}
          <div style={styles.contactInfo}>
            <h2 style={styles.contactInfoH2}>Get in touch</h2>
            <p>Have questions, feedback, or need support? Reach out to our team through any of these channels.</p>

            <div style={styles.contactLinks}>
              <a href="mailto:contact@lawai.com" style={styles.contactLink}>
                <div style={styles.contactIcon}>@</div>
                <span>contact@lawai.com</span>
              </a>

              <a href="mailto:support@lawai.com" style={styles.contactLink}>
                <div style={styles.contactIcon}>?</div>
                <span>support@lawai.com</span>
              </a>

              <a href="mailto:lawai@gmail.com" style={styles.contactLink}>
                <div style={styles.contactIcon}>G</div>
                <span>lawai@gmail.com</span>
              </a>

              <a href="https://twitter.com/lawai" target="_blank" rel="noopener noreferrer" style={styles.contactLink}>
                <div style={styles.contactIcon}>X</div>
                <span>@lawai</span>
              </a>

              <a href="tel:+918005551234" style={styles.contactLink}>
                <div style={styles.contactIcon}>☎</div>
                <span>+91 (800) 555-1234</span>
              </a>
            </div>
          </div>

          {/* Contact Form Section */}
          <div style={styles.contactForm}>
            <form onSubmit={handleSubmit}>
              <div style={styles.formGroup}>
                <label htmlFor="name" style={styles.formLabel}>Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  style={styles.formControl} 
                  placeholder="Enter your name" 
                  required 
                />
              </div>

              <div style={styles.formGroup}>
                <label htmlFor="email" style={styles.formLabel}>Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  style={styles.formControl} 
                  placeholder="Enter your email" 
                  required 
                />
              </div>

              <div style={styles.formGroup}>
                <label htmlFor="subject" style={styles.formLabel}>Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  style={styles.formControl} 
                  placeholder="What is this regarding?" 
                />
              </div>

              <div style={styles.formGroup}>
                <label htmlFor="message" style={styles.formLabel}>Message</label>
                <textarea 
                  id="message" 
                  value={formData.message}
                  onChange={handleChange}
                  style={{...styles.formControl, ...styles.textarea}} 
                  placeholder="Write your query here" 
                  required
                />
              </div>

              <button type="submit" style={styles.submitButton}>Send Message</button>

              {showSuccess && (
                <div style={{...styles.feedbackMessage, ...styles.successMessage}}>
                  Thank you for your message! We will get back to you soon.
                </div>
              )}
              
              {showError && (
                <div style={{...styles.feedbackMessage, ...styles.errorMessage}}>
                  {errorMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;