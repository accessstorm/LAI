import React, { useEffect, useRef } from 'react';

const LawAIHomepage = () => {
  const sliderRef = useRef(null);
  const leftBtnRef = useRef(null);
  const rightBtnRef = useRef(null);
  
  useEffect(() => {
    // Intersection Observer for animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fadeUp 1s ease forwards';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observe all feature items for animation
    document.querySelectorAll('.feature-item').forEach(item => {
      observer.observe(item);
    });
    
    // Card slider functionality setup
    const slider = sliderRef.current;
    const leftBtn = leftBtnRef.current;
    const rightBtn = rightBtnRef.current;
    
    if (slider && leftBtn && rightBtn) {
      let sliderPosition = 0;
      const cards = slider.querySelectorAll('.slider-card');
      const cardWidth = cards.length > 0 ? cards[0].offsetWidth + 20 : 0; // card width + gap
      const visibleCards = 3.5; // Show 3.5 cards initially
      const totalCards = cards.length;
      const maxSliderPosition = (totalCards - visibleCards) * cardWidth;
      
      // Initialize slider position
      slider.style.transform = `translateX(0px)`;
      
      // Right button click - move slider left
      const handleRightClick = () => {
        if (sliderPosition < maxSliderPosition) {
          sliderPosition += cardWidth * 3; // Move 3 cards at a time
          
          // Don't go beyond the last card
          if (sliderPosition > maxSliderPosition) {
            sliderPosition = maxSliderPosition;
          }
          
          slider.style.transform = `translateX(-${sliderPosition}px)`;
          
          // Show left button after first slide
          leftBtn.style.opacity = '1';
          leftBtn.style.visibility = 'visible';
          
          // Hide right button if at the end
          if (sliderPosition >= maxSliderPosition) {
            rightBtn.style.opacity = '0';
            rightBtn.style.visibility = 'hidden';
          }
        }
      };
      
      // Left button click - move slider right
      const handleLeftClick = () => {
        if (sliderPosition > 0) {
          sliderPosition -= cardWidth * 3; // Move 3 cards at a time
          
          // Don't go beyond the first card
          if (sliderPosition < 0) {
            sliderPosition = 0;
          }
          
          slider.style.transform = `translateX(-${sliderPosition}px)`;
          
          // Hide left button if at the beginning
          if (sliderPosition <= 0) {
            leftBtn.style.opacity = '0';
            leftBtn.style.visibility = 'hidden';
          }
          
          // Show right button
          rightBtn.style.opacity = '1';
          rightBtn.style.visibility = 'visible';
        }
      };
      
      rightBtn.addEventListener('click', handleRightClick);
      leftBtn.addEventListener('click', handleLeftClick);
      
      // Initial slider setup
      leftBtn.style.opacity = '0';
      leftBtn.style.visibility = 'hidden';
      rightBtn.style.opacity = '1';
      rightBtn.style.visibility = 'visible';
      
      // Adjust slider on window resize
      const handleResize = () => {
        // Reset position when window size changes
        sliderPosition = 0;
        slider.style.transform = `translateX(0px)`;
        
        // Hide left button, show right button
        leftBtn.style.opacity = '0';
        leftBtn.style.visibility = 'hidden';
        rightBtn.style.opacity = '1';
        rightBtn.style.visibility = 'visible';
      };
      
      window.addEventListener('resize', handleResize);
      
      // Cleanup
      return () => {
        rightBtn.removeEventListener('click', handleRightClick);
        leftBtn.removeEventListener('click', handleLeftClick);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);
  
  return (
    <div style={{
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      overflowX: 'hidden',
      color: '#fbffff',
      backgroundColor: '#19244f'
    }}>
      <style jsx>{`
        /* Typography */
        h1 {
            font-size: 56px;
            font-weight: 600;
            letter-spacing: -0.5px;
            line-height: 1.07;
            color: #fbffff;
        }

        .h1-green {
            font-size: 56px;
            font-weight: 600;
            letter-spacing: -0.5px;
            line-height: 1.07;
            color: #58daa6;
        }
        
        h2 {
            font-size: 40px;
            font-weight: 600;
            letter-spacing: -0.3px;
            line-height: 1.1;
            margin-bottom: 20px;
            color: #fbffff;
        }
        
        h3 {
            font-size: 28px;
            font-weight: 600;
            letter-spacing: -0.2px;
            line-height: 1.14;
            margin-bottom: 14px;
            color: #fbffff;
        }
        
        p {
            font-size: 17px;
            line-height: 1.47;
            font-weight: 650;
            letter-spacing: -0.022em;
            margin-bottom: 20px;
            color: #58daa6;
        }
        
        /* Nav styles */
        nav {
            background-color: rgba(0, 0, 0, 0.8);
            backdrop-filter: saturate(180%) blur(20px);
            position: fixed;
            width: 100%;
            z-index: 100;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        nav ul {
            display: flex;
            list-style: none;
            max-width: 1000px;
            width: 100%;
            justify-content: space-around;
        }
        
        nav ul li a {
            color: #f5f5f7;
            text-decoration: none;
            font-size: 14px;
            opacity: 0.8;
            transition: opacity 0.3s ease;
        }
        
        nav ul li a:hover {
            opacity: 1;
        }
        
        /* Button styles */
        .btn {
            background-color: #58daa6;
            color: rgb(0, 0, 0);
            border-radius: 980px;
            font-size: 17px;
            line-height: 1.17648;
            font-weight: 400;
            letter-spacing: -0.022em;
            padding: 12px 22px;
            display: inline-block;
            text-decoration: none;
            cursor: pointer;
            border: none;
            transition: all 0.3s ease;
        }
        
        .btn:hover {
            background-color: #ffffff;
            transform: scale(1.02);
        }
        
        /* Hero section */
        .hero {
            height: 100vh;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            background: url('/api/placeholder/1600/900') center/cover no-repeat;
            color: white;
            padding-top: 44px;
            position: relative;
        }
        
        .hero::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 1;
        }
        
        .hero-content {
            max-width: 800px;
            padding: 0 20px;
            position: relative;
            z-index: 2;
        }

        .hero-video {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 101%;
            height: 100%;
            object-fit: cover;
            transform: translate(-50%, -50%);
            z-index: 1;
        }

        .hero-content h1 {
            margin-bottom: 10px;
            opacity: 0;
            transform: translateY(20px);
            animation: fadeUp 1s ease forwards 0.3s;
        }
        
        .hero-content p {
            margin-bottom: 30px;
            font-size: 21px;
            opacity: 0;
            transform: translateY(20px);
            animation: fadeUp 1s ease forwards 0.5s;
        }
        
        .hero-btn {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeUp 1s ease forwards 0.7s;
        }
        
        /* Product showcase */
        .product-showcase {
            padding: 120px 20px;
            max-width: 1200px;
            margin: 0 auto;
            text-align: center;
        }
        
        .product-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 40px;
            margin-top: 60px;
        }
        
        .product-card {
            background-color: #33437c;
            border-radius: 18px;
            overflow: hidden;
            transition: transform 0.5s ease, box-shadow 0.5s ease;
            cursor: pointer;
        }
        
        .product-card:hover {
            transform: scale(1.02) translateY(-10px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .product-image {
            width: 100%;
            height: 240px;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            transition: transform 0.5s ease;
        }

        .product-image-1 {
            background-image: url('https://images.pexels.com/photos/48195/document-agreement-documents-sign-48195.jpeg?auto=compress&cs=tinysrgb&w=600');
        }

        .product-image-2 {
            background-image: url('https://images.pexels.com/photos/7319070/pexels-photo-7319070.jpeg?auto=compress&cs=tinysrgb&w=600');
        }

        .product-image-3 {
            background-image: url('https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600');
        }
        
        .product-card:hover .product-image {
            transform: scale(1.05);
        }
        
        .product-details {
            padding: 30px 20px;
        }
        
        /* Promotions section */
        .promotions {
            padding: 120px 0;
            background-color: #19244f;
            overflow: hidden;
            position: relative;
        }

        .promotion-video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 120%;
            object-fit: cover;
            z-index: 1;
            opacity: 0.9;
            transform: translateY(-55px);
        }

        .promotion-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            position: relative;
            z-index: 2;
        }

        .promotion-content {
            flex: 1;
            padding: 0 60px;
            color: #fbffff;
            z-index: 2;
            background-color: rgba(51, 67, 124, 0.1);
            border-radius: 12px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .promotion-image {
            flex: 1;
            height: 600px;
            background: url('https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=600') center/cover no-repeat;
            border-radius: 12px;
            box-shadow: 0 20px 40px rgba(241, 240, 240, 0.1);
            transition: transform 0.7s ease;
        }
        
        .promotion-image:hover {
            transform: scale(1.03) rotate(1deg);
        }
        
        /* Card slider section */
        .card-slider-section {
            padding: 120px 0;
            position: relative;
            overflow: hidden;
        }
        
        .card-slider-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
            text-align: center;
        }
        
        .card-slider-wrapper {
            position: relative;
            padding: 40px 0;
            overflow: hidden;
        }
        
        .card-slider {
            display: flex;
            transition: transform 0.5s ease-in-out;
            gap: 20px;
            padding: 20px 0;
        }
        
        .slider-card {
            flex: 0 0 calc(28% - 15px);
            background-color: #33437c;
            border-radius: 18px;
            overflow: hidden;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            opacity: 0.9;
        }
        
        .slider-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
            opacity: 1;
        }
        
        .slider-card-image {
            height: 200px;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }

        .slider-image-1 {
            background-image: url('https://images.pexels.com/photos/262438/pexels-photo-262438.jpeg?auto=compress&cs=tinysrgb&w=600');
        }

        .slider-image-2 {
            background-image: url('https://media.istockphoto.com/id/1631438620/photo/artificial-intelligence-unit-processing-big-data-arrays-powerful-quantum-ai-component-the.jpg?b=1&s=612x612&w=0&k=20&c=T5PQR0cEwQVHfPkctPDJ2xGX975vPWkztryoRG7KNPU=');
        }

        .slider-image-3 {
            background-image: url('https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg?auto=compress&cs=tinysrgb&w=600');
        }

        .slider-image-4 {
            background-image: url('https://media.istockphoto.com/id/2151954310/photo/shield-security-network-technology-wire-frame-concept.jpg?b=1&s=612x612&w=0&k=20&c=-eOdhRY6zOEeZx3RM8w-1MkxG2M0IBCKyK3ZTUNAlKs=');
        }

        .slider-image-5 {
            background-image: url('https://media.istockphoto.com/id/1311858440/photo/close-up-hourglass-measuring-time-indian-businesswoman-working.jpg?b=1&s=612x612&w=0&k=20&c=Y0Wf6cgFD84T4vw2dli2zXtMrSM-KTX6vHCADoM34tI=');
        }

        .slider-image-6 {
            background-image: url('https://media.istockphoto.com/id/1970247987/photo/customer-service-management-digital-transformation-technology-strategy-optimize-and-automate.jpg?b=1&s=612x612&w=0&k=20&c=V5gN1L4JH67OylBMUfr42Lx7nvZtNDlWRcb9eKZQpHg=');
        }
        
        .slider-card-content {
            padding: 25px 20px;
            text-align: left;
            color: #fbffff;
        }
        
        .slider-card-content h3 {
            font-size: 22px;
            margin-bottom: 10px;
            color: #fbffff;
        }
        
        .slider-nav-button {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: white;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10;
            transition: all 0.3s ease;
        }
        
        .slider-nav-button:hover {
            background-color: #f5f5f7;
            transform: translateY(-50%) scale(1.05);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }
        
        .slider-nav-left {
            left: 10px;
            opacity: 0;
            visibility: hidden;
        }
        
        .slider-nav-right {
            right: 10px;
        }
        
        .slider-nav-icon {
            width: 12px;
            height: 12px;
            border-top: 2px solid #1d1d1f;
            border-right: 2px solid #1d1d1f;
        }
        
        .slider-nav-left .slider-nav-icon {
            transform: rotate(-135deg);
            margin-left: 4px;
        }
        
        .slider-nav-right .slider-nav-icon {
            transform: rotate(45deg);
            margin-right: 4px;
        }
        
        /* Features section */
        .features {
            padding: 120px 20px;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .features-title {
            text-align: center;
            margin-bottom: 80px;
            color: #fbffff;
        }
        
        .features-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 60px;
        }
        
        .feature-item {
            display: flex;
            align-items: flex-start;
            opacity: 0;
            transform: translateY(20px);
        }
        
        .feature-icon {
            width: 60px;
            height: 60px;
            font-weight: 900;
            background-color: #0071e3;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 20px;
            color: white;
            font-size: 24px;
            flex-shrink: 0;
        }
        
        /* Footer */
        footer {
            background-color: #33437c;
            padding: 60px 20px;
            text-align: center;
            font-size: 12px;
            color: #86868b;
        }
        
        .extra {
            color: white;
            text-align: center;
        }
        
        /* Animations */
        @keyframes fadeUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        /* Responsive styles */
        @media (max-width: 1024px) {
            h1 {
                font-size: 48px;
            }
            
            h2 {
                font-size: 36px;
            }
            
            .product-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .promotion-container {
                flex-direction: column;
            }
            
            .promotion-content {
                margin-bottom: 60px;
                padding: 0 20px;
                text-align: center;
            }
            
            .slider-card {
                flex: 0 0 calc(33.333% - 15px);
            }
        }
        
        @media (max-width: 768px) {
            h1 {
                font-size: 40px;
            }
            
            h2 {
                font-size: 32px;
            }
            
            .product-grid {
                grid-template-columns: 1fr;
                gap: 30px;
            }
            
            .features-grid {
                grid-template-columns: 1fr;
                gap: 40px;
            }
            
            nav ul {
                padding: 0 20px;
            }
            
            nav ul li:not(:first-child):not(:last-child) {
                display: none;
            }
            
            .slider-card {
                flex: 0 0 calc(80% - 15px);
            }
        }
      `}</style>
      
      {/* Navigation */}
      <nav>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/howto">How-To-Use?</a></li>
          <li><a href="https://precrastai.vercel.app/">Our Website</a></li>
          <li><a href="/download">Download Mobile App</a></li>
          <li><a href="/more">More</a></li>
          <li><a href="/contact">Support</a></li>
        </ul>
      </nav>
      
      {/* Hero Section */}
      <section className="hero">
        <video autoPlay loop muted playsInline className="hero-video">
        <source src={`${process.env.PUBLIC_URL}/videos/LP11.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
          <h1>Introducing the all-new <span className="h1-green">LawAI</span></h1>
          <br/>
          <p className="extra">Transforming the Future of Law with Intelligent Solutions, Unparalleled Accuracy, and Unmatched Efficiency.</p>
          <a href="./More.html" className="btn hero-btn">Learn more</a>
        </div>
      </section>
      
      {/* Product Showcase */}
      <section className="product-showcase">
        <h2>What we offer?</h2>
        <p>Empowering Individuals with Cutting-Edge Legal Intelligence!</p>
        
        <div className="product-grid">
          <div className="product-card">
            <div className="product-image product-image-1"></div>
            <div className="product-details">
              <h3>Legal Simplifier</h3>
              <p>Upload your documents and get clear, simple explanations in seconds.</p>
            </div>
          </div>
        
          <div className="product-card">
            <div className="product-image product-image-2"></div>
            <div className="product-details">
              <h3>Hidden Clause Detector</h3>
              <p>Identify potentially risky clauses in your agreements automatically.</p>
            </div>
          </div>
        
          <div className="product-card">
            <div className="product-image product-image-3"></div>
            <div className="product-details">
              <h3>Scheme Finder</h3>
              <p>Discover government schemes and benefits you're eligible for.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Promotions Section */}
      <section className="promotions">
        <video autoPlay loop muted playsInline className="promotion-video">
        <source src={`${process.env.PUBLIC_URL}/videos/LP2.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="promotion-container">
          <div className="promotion-content">
            <h2>Special Features</h2>
            <p>✅ AI-Powered Legal Research - Get precise, real-time legal insights in seconds.<br/>
              ✅ Contract Analysis & Drafting - Automate contract review and creation with accuracy.<br/>
              ✅ Case Prediction & Analytics - Leverage AI to assess case outcomes and legal trends.<br/>
              ✅ Regulatory Compliance - Stay ahead with automated compliance monitoring.<br/>
              ✅ 24/7 Virtual Legal Assistant - Instant legal guidance and support anytime, anywhere.</p>
            <a href="./howto.html" className="btn">Get Started</a>
          </div>
          <div className="promotion-image"></div>
        </div>
      </section>
      
      {/* Card Slider Section */}
      <section className="card-slider-section">
        <div className="card-slider-container">
          <h2 className="h1-green">Transforming the Future of Law with Intelligent Solutions</h2>
          <p className="extra">Simplifying Law, Amplifying Justice.</p>
          
          <div className="card-slider-wrapper">
            <div className="card-slider" ref={sliderRef}>
              <div className="slider-card">
                <div className="slider-card-image slider-image-1"></div>
                <div className="slider-card-content">
                  <h3>🚀 Unmatched Accuracy</h3>
                  <p>Leverage cutting-edge AI trained on vast legal databases to provide precise, reliable insights.</p>
                </div>
              </div>
          
              <div className="slider-card">
                <div className="slider-card-image slider-image-2"></div>
                <div className="slider-card-content">
                  <h3>💡 Smart Case Predictions</h3>
                  <p>Use AI-driven analytics to assess legal trends and case outcomes, giving you a competitive edge.</p>
                </div>
              </div>
          
              <div className="slider-card">
                <div className="slider-card-image slider-image-3"></div>
                <div className="slider-card-content">
                  <h3>📜 Contract Analysis</h3>
                  <p>Detect risks, errors, and key clauses instantly with AI-powered contract review.</p>
                </div>
              </div>
          
              <div className="slider-card">
                <div className="slider-card-image slider-image-4"></div>
                <div className="slider-card-content">
                  <h3>🔐 Secure & Confidential</h3>
                  <p>No third party connections and No sensitive data stored.</p>
                </div>
              </div>
          
              <div className="slider-card">
                <div className="slider-card-image slider-image-5"></div>
                <div className="slider-card-content">
                  <h3>⏳ Time-Saving Efficiency</h3>
                  <p>Automate research, contract drafting, and compliance tasks, reducing hours of manual work to minutes.</p>
                </div>
              </div>
          
              <div className="slider-card">
                <div className="slider-card-image slider-image-6"></div>
                <div className="slider-card-content">
                  <h3>🧠 Always Learn & Evolve</h3>
                  <p>Our AI continuously improves, staying up to date with the latest legal developments.</p>
                </div>
              </div>
            </div>
            
            <button className="slider-nav-button slider-nav-left" id="sliderLeft" ref={leftBtnRef}>
              <div className="slider-nav-icon"></div>
            </button>
            
            <button className="slider-nav-button slider-nav-right" id="sliderRight" ref={rightBtnRef}>
              <div className="slider-nav-icon"></div>
            </button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="features">
        <div className="features-title">
          <h2>Why Choose Our Product?</h2>
          <p>Revolutionizing Law, Empowering Justice!</p>
        </div>
        
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">+</div>
            <div>
              <h3>🌍 Revolutionizing Legal Assistance</h3>
              <p>Bringing AI-powered intelligence to the legal world, making complex legal tasks easier than ever.</p>
            </div>
          </div>
          
          <div className="feature-item">
            <div className="feature-icon">+</div>
            <div>
              <h3>⚡ Lightning-Fast Research</h3>
              <p>No more endless hours of searching! Our AI delivers case laws, statutes, and legal precedents instantly.</p>
            </div>
          </div>
          
          <div className="feature-item">
            <div className="feature-icon">+</div>
            <div>
              <h3>⚖️ Regulatory & Compliance Monitoring</h3>
              <p>Stay ahead of evolving laws and regulations, avoiding costly legal pitfalls.</p>
            </div>
          </div>
          
          <div className="feature-item">
            <div className="feature-icon">+</div>
            <div>
              <h3>🔎 AI-Powered Case Analysis </h3>
              <p> Predict case outcomes based on past rulings, legal arguments, and judicial trends, giving you an edge in decision-making.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer>
        <h1>LawAI</h1>
        <br/>
        <p>Copyright © 2025 LawAI. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LawAIHomepage;