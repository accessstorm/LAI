import React, { useState, useEffect } from 'react';

const DownloadPage = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  
  // Simulate download progress
  useEffect(() => {
    if (isDownloading && downloadProgress < 100) {
      const timer = setTimeout(() => {
        setDownloadProgress(prev => Math.min(prev + 5, 100));
      }, 100);
      
      return () => clearTimeout(timer);
    } else if (isDownloading && downloadProgress === 100) {
      setIsDownloading(false);
      setShowConfetti(true);
      
      // Hide confetti after animation completes
      setTimeout(() => {
        setShowConfetti(false);
        setDownloadProgress(0);
      }, 3000);
    }
  }, [isDownloading, downloadProgress]);
  
  const handleDownload = () => {
    setIsDownloading(true);
    
    // Start the APK download
    // This is where you'd actually trigger the file download
    const link = document.createElement('a');
    link.href = './public/PRECRAST AI.apk'; // Replace with your actual APK file path
    link.download = './public/PRECRAST AI.apk';
    
    // Wait until animation gets to 100% before triggering actual download
    setTimeout(() => {
      link.click();
    }, 2000);
  };
  
  // All styles as objects for inline styling, matching your theme
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
      justifyContent: 'center',
      padding: '40px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
      width: '100%',
      position: 'relative'
    },
    downloadSection: {
      textAlign: 'center',
      backgroundColor: '#33437c',
      borderRadius: '20px',
      padding: '60px',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
      maxWidth: '800px',
      width: '100%',
      position: 'relative',
      overflow: 'hidden'
    },
    heading: {
      fontSize: '48px',
      fontWeight: 700,
      color: '#fbffff',
      marginBottom: '20px',
      letterSpacing: '-0.5px',
    },
    subheading: {
      fontSize: '24px',
      fontWeight: 400,
      color: '#fbffff',
      marginBottom: '40px',
      lineHeight: 1.5,
      opacity: 0.9
    },
    downloadButton: {
      backgroundColor: '#58daa6',
      color: '#000000',
      border: 'none',
      fontSize: '18px',
      fontWeight: 600,
      padding: '18px 40px',
      borderRadius: '12px',
      cursor: 'pointer',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
      display: 'inline-block',
      boxShadow: '0 4px 14px rgba(88, 218, 166, 0.4)',
      zIndex: 1
    },
    downloadButtonHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 7px 20px rgba(88, 218, 166, 0.5)'
    },
    downloadProgress: {
      position: 'absolute',
      left: 0,
      top: 0,
      height: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      transition: 'width 0.1s linear'
    },
    appIcon: {
      marginBottom: '30px',
      display: 'flex',
      justifyContent: 'center'
    },
    iconCircle: {
      width: '120px',
      height: '120px',
      backgroundColor: '#58daa6',
      borderRadius: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '40px',
      color: '#19244f',
      boxShadow: '0 8px 16px rgba(88, 218, 166, 0.3)',
      animation: 'pulse 2s infinite'
    },
    featureRow: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      marginTop: '60px'
    },
    featureItem: {
      flex: '0 0 30%',
      marginBottom: '30px',
      padding: '20px 10px',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '10px',
      transition: 'transform 0.3s ease'
    },
    featureIcon: {
      fontSize: '24px',
      marginBottom: '10px',
      color: '#58daa6'
    },
    confetti: {
      position: 'absolute',
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      animation: 'fall 3s linear forwards'
    }
  };

  // Create confetti particles
  const confettiColors = ['#58daa6', '#fbffff', '#33437c', '#4682B4', '#FFD700'];
  const confettiParticles = [];
  
  if (showConfetti) {
    for (let i = 0; i < 100; i++) {
      const left = Math.random() * 100;
      const animationDuration = 2 + Math.random() * 3;
      const size = 5 + Math.random() * 10;
      const backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
      
      confettiParticles.push(
        <div 
          key={i} 
          style={{
            ...styles.confetti,
            left: `${left}%`,
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor,
            animation: `fall ${animationDuration}s ease-out forwards`,
            top: `-${size}px`,
            transform: `rotate(${Math.random() * 360}deg)`
          }} 
        />
      );
    }
  }

  // Responsive adjustments
  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    styles.downloadSection.padding = '30px 20px';
    styles.heading.fontSize = '32px';
    styles.subheading.fontSize = '18px';
    styles.featureRow.flexDirection = 'column';
    styles.featureItem.flex = '1 0 100%';
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
        {confettiParticles}
        
        <div style={styles.downloadSection}>
          <div style={styles.appIcon}>
            <div style={styles.iconCircle}>
              ⚖️
            </div>
          </div>
          
          <h1 style={styles.heading}>Download LawAI App</h1>
          <p style={styles.subheading}>
            Get instant access to legal assistance, document analysis, and AI-powered legal guidance right on your Android device.
          </p>
          
          <button 
            onClick={handleDownload}
            onMouseOver={(e) => isDownloading ? null : Object.assign(e.target.style, styles.downloadButtonHover)}
            onMouseOut={(e) => isDownloading ? null : Object.assign(e.target.style, { transform: 'none', boxShadow: styles.downloadButton.boxShadow })}
            style={styles.downloadButton}
            disabled={isDownloading}
          >
            <div style={{...styles.downloadProgress, width: `${downloadProgress}%`}}></div>
            <span>{isDownloading ? `Downloading... ${downloadProgress}%` : 'Download App (APK)'}</span>
          </button>
          
          <div style={styles.featureRow}>
            <div style={styles.featureItem}>
              <div style={styles.featureIcon}>⚡</div>
              <h3>Fast Analysis</h3>
              <p>Get legal document analysis in seconds</p>
            </div>
            <div style={styles.featureItem}>
              <div style={styles.featureIcon}>🔒</div>
              <h3>Secure</h3>
              <p>Your data stays private and protected</p>
            </div>
            <div style={styles.featureItem}>
              <div style={styles.featureIcon}>📱</div>
              <h3>Offline Mode</h3>
              <p>Access key features without internet</p>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(90vh) rotate(720deg);
            opacity: 0;
          }
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
            box-shadow: 0 8px 16px rgba(88, 218, 166, 0.3);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 12px 24px rgba(88, 218, 166, 0.5);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 8px 16px rgba(88, 218, 166, 0.3);
          }
        }
      `}</style>
    </div>
  );
};

export default DownloadPage;