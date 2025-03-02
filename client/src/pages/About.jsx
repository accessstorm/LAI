import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    const [activeSection, setActiveSection] = useState('company-section');

    const switchSection = (targetId) => {
        setActiveSection(targetId);

        // Animation will be handled by CSS transitions
        // The active class will be applied based on the state
    };

    // Animation function to apply animations after section change
    useEffect(() => {
        const animateElements = (section) => {
            // Get elements from current active section
            const sectionElement = document.getElementById(activeSection);
            if (!sectionElement) return;

            // Animate cards with delay
            const cards = sectionElement.querySelectorAll('.content-card');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100 * index);
            });
            
            // Animate timeline items with delay
            const timelineItems = sectionElement.querySelectorAll('.timeline-item');
            timelineItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    if (index % 2 === 0) {
                        item.style.animation = 'slideInLeft 0.5s forwards';
                    } else {
                        item.style.animation = 'slideInRight 0.5s forwards';
                    }
                }, 150 * index);
            });
            
            // Animate team members with delay
            const teamMembers = sectionElement.querySelectorAll('.team-member');
            teamMembers.forEach((member, index) => {
                setTimeout(() => {
                    member.style.opacity = '1';
                    member.style.transform = 'translateY(0)';
                }, 150 * index);
            });
            
            // Animate location cards with delay
            const locationCards = sectionElement.querySelectorAll('.location-card');
            locationCards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 150 * index);
            });
            
            // Animate achievement cards with delay
            const achievementCards = sectionElement.querySelectorAll('.achievement-card');
            achievementCards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 150 * index);
            });
        };

        // Call animation function whenever active section changes
        animateElements();
    }, [activeSection]);

    return (
        <>
            {/* Navigation */}
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/howto">How-To-Use?</Link></li>
                    <li><Link to="/">Refer a professional</Link></li>
                    <li><Link to="/more">More</Link></li>
                    <li><Link to="/contact">Support</Link></li>
                </ul>
            </nav>
            
            {/* Page Container */}
            <div className="page-container">
                {/* Sidebar */}
                <aside className="sidebar">
                    <h2 className="sidebar-title">About Us</h2>
                    <ul className="sidebar-menu">
                        <li className="sidebar-menu-item">
                            <button 
                                className={`sidebar-menu-button ${activeSection === 'company-section' ? 'active' : ''}`} 
                                onClick={() => switchSection('company-section')}
                            >
                                Our Platform
                            </button>
                        </li>
                        <li className="sidebar-menu-item">
                            <button 
                                className={`sidebar-menu-button ${activeSection === 'history-section' ? 'active' : ''}`} 
                                onClick={() => switchSection('history-section')}
                            >
                                Our Process
                            </button>
                        </li>
                        <li className="sidebar-menu-item">
                            <button 
                                className={`sidebar-menu-button ${activeSection === 'team-section' ? 'active' : ''}`} 
                                onClick={() => switchSection('team-section')}
                            >
                                Our Team
                            </button>
                        </li>
                        <li className="sidebar-menu-item">
                            <button 
                                className={`sidebar-menu-button ${activeSection === 'achievements-section' ? 'active' : ''}`} 
                                onClick={() => switchSection('achievements-section')}
                            >
                                Key Features
                            </button>
                        </li>
                        <li className="sidebar-menu-item">
                            <button 
                                className={`sidebar-menu-button ${activeSection === 'values-section' ? 'active' : ''}`} 
                                onClick={() => switchSection('values-section')}
                            >
                                FAQ & Resources
                            </button>
                        </li>
                    </ul>
                </aside>

                {/* Main Content */}
                <main className="main-content">
                    <header className="page-header">
                        <h1>About LawAI</h1>
                        <p>Your one-stop solution for understanding legal agreements and connecting with experienced lawyers.</p>
                    </header>
                    
                    {/* Our Company Section */}
                    <section id="company-section" className={`content-section ${activeSection === 'company-section' ? 'active' : ''}`}>
                        <h2>Our Platform</h2>
                        <p>LawAI was founded with a simple yet ambitious goal: to make legal agreements accessible and understandable for everyone. We believe in empowering people with the knowledge they need to make informed decisions about their legal matters.</p>
                        
                        <div className="card-container">
                            <div className="content-card">
                                <div className="card-image">
                                    <img src="https://media.istockphoto.com/id/2149530993/photo/digital-human-head-concept-for-ai-metaverse-and-facial-recognition-technology.jpg?b=1&s=612x612&w=0&k=20&c=XfjE8RB5tOafi11x0ULuLBIr_lHijrGpx6ukKpcQGF0=" alt="Document Analysis" />
                                </div>
                                <div className="card-content">
                                    <h3>Agreement Scanner</h3>
                                    <p>Our AI-powered scanner analyzes your legal documents and explains complex terms in simple, understandable language.</p>
                                </div>
                            </div>
                            
                            <div className="content-card">
                                <div className="card-image">
                                    <img src="https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Lawyer Connection" />
                                </div>
                                <div className="card-content">
                                    <h3>Lawyer Directory</h3>
                                    <p>Connect with verified lawyers specializing in various fields of law, filtered according to your specific legal needs.</p>
                                </div>
                            </div>
                            
                            <div className="content-card">
                                <div className="card-image">
                                    <img src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Security" />
                                </div>
                                <div className="card-content">
                                    <h3>Secure & Confidential</h3>
                                    <p>We are open source with no private keys visible to any third party users and we use session storage only.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    {/* Our History Section */}
                    <section id="history-section" className={`content-section ${activeSection === 'history-section' ? 'active' : ''}`}>
                        <h2>Our Process</h2>
                        <p>Using Legal Clarity is simple and straightforward. Here's how our platform works to help you navigate your legal matters with confidence.</p>
                        
                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="timeline-content">
                                    <h3>Upload Your Agreement</h3>
                                    <p>Scan or upload your legal document (contract, agreement, policy, etc.) to our secure platform.</p>
                                </div>
                            </div>
                            
                            <div className="timeline-item">
                                <div className="timeline-content">
                                    <h3>Automated Analysis</h3>
                                    <p>Our system analyzes the document and identifies key clauses, terms, and potential issues.</p>
                                </div>
                            </div>
                            
                            <div className="timeline-item">
                                <div className="timeline-content">
                                    <h3>Understand the Clauses</h3>
                                    <p>Get a clear and concise explanation of complex legal terms and conditions in everyday language.</p>
                                </div>
                            </div>
                            
                            <div className="timeline-item">
                                <div className="timeline-content">
                                    <h3>Risk Assessment</h3>
                                    <p>Receive recommendations on potential risks and red flags that might be hidden in the document.</p>
                                </div>
                            </div>
                            
                            <div className="timeline-item">
                                <div className="timeline-content">
                                    <h3>Browse Lawyer Directory</h3>
                                    <p>If needed, browse our directory of verified lawyers based on your specific legal needs and location.</p>
                                </div>
                            </div>
                            
                            <div className="timeline-item">
                                <div className="timeline-content">
                                    <h3>Book a Consultation</h3>
                                    <p>Schedule an online consultation for professional legal advice or hire a lawyer for your case.</p>
                                </div>
                            </div>
                            
                            <div className="timeline-item">
                                <div className="timeline-content">
                                    <h3>Stay Updated</h3>
                                    <p>Receive tips, legal updates, and personalized suggestions based on your uploaded agreements.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    {/* Our Team Section */}
                    <section id="team-section" className={`content-section ${activeSection === 'team-section' ? 'active' : ''}`}>
                        <h2>Meet Our Team</h2>
                        <div className="team-grid">
                            <div className="team-member">
                                <div className="team-photo">
                                    <img src="https://media.istockphoto.com/id/1387754659/photo/3d-render-illustration-of-male-and-female-figures-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=By66qYDbRJYLPKJKAki79bEJih6xVi5NE8PEet_Gnzo=" alt="CEO" />
                                </div>
                                <h3 className="team-name">Jennifer Adams</h3>
                                <p className="team-title">Chief Executive Officer</p>
                                <p className="team-bio">With over 15 years of experience in legal tech, Jennifer leads our company's mission to democratize legal knowledge.</p>
                            </div>
                            
                            <div className="team-member">
                                <div className="team-photo">
                                    <img src="https://media.istockphoto.com/id/1387754659/photo/3d-render-illustration-of-male-and-female-figures-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=By66qYDbRJYLPKJKAki79bEJih6xVi5NE8PEet_Gnzo=" alt="CTO" />
                                </div>
                                <h3 className="team-name">Marcus Thompson</h3>
                                <p className="team-title">Chief Technology Officer</p>
                                <p className="team-bio">Marcus oversees our AI development, ensuring our platform delivers accurate and helpful legal document analysis.</p>
                            </div>
                            
                            <div className="team-member">
                                <div className="team-photo">
                                    <img src="https://media.istockphoto.com/id/1387754659/photo/3d-render-illustration-of-male-and-female-figures-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=By66qYDbRJYLPKJKAki79bEJih6xVi5NE8PEet_Gnzo=" alt="CLO" />
                                </div>
                                <h3 className="team-name">Rebecca Patel</h3>
                                <p className="team-title">Chief Legal Officer</p>
                                <p className="team-bio">Rebecca ensures the legal accuracy of our platform and manages relationships with our network of partner attorneys.</p>
                            </div>
                            
                            <div className="team-member">
                                <div className="team-photo">
                                    <img src="https://media.istockphoto.com/id/1387754659/photo/3d-render-illustration-of-male-and-female-figures-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=By66qYDbRJYLPKJKAki79bEJih6xVi5NE8PEet_Gnzo=" alt="CMO" />
                                </div>
                                <h3 className="team-name">James Wilson</h3>
                                <p className="team-title">Chief Marketing Officer</p>
                                <p className="team-bio">James drives our outreach strategy, helping to connect our platform with people who need legal clarity and support.</p>
                            </div>
                        </div>
                    </section>
                    
                    {/* Achievements Section */}
                    <section id="achievements-section" className={`content-section ${activeSection === 'achievements-section' ? 'active' : ''}`}>
                        <h2>Gemini 2.0 Features</h2>
                        <p>Our platform is powered by Gemini 2.0, Google's most advanced AI model, offering unprecedented capabilities for understanding and analyzing legal documents.</p>
                        
                        <div className="achievements-container">
                            <div className="achievement-card">
                                <div className="achievement-icon">+</div>
                                <h3 className="achievement-number">1T+</h3>
                                <h3>Parameters</h3>
                                <p>Gemini 2.0 utilizes over a trillion parameters to understand the nuances of legal language with exceptional accuracy.</p>
                            </div>
                            
                            <div className="achievement-card">
                                <div className="achievement-icon">+</div>
                                <h3 className="achievement-number">200+</h3>
                                <h3>Legal Specialties</h3>
                                <p>Our AI model has been trained on documentation covering over 200 specialized legal domains and practice areas.</p>
                            </div>
                            
                            <div className="achievement-card">
                                <div className="achievement-icon">+</div>
                                <h3 className="achievement-number">98%</h3>
                                <h3>Accuracy Rate</h3>
                                <p>Gemini 2.0 achieves an industry-leading 98% accuracy in identifying key clauses and potential legal issues.</p>
                            </div>
                            
                            <div className="achievement-card">
                                <div className="achievement-icon">+</div>
                                <h3 className="achievement-number">10x</h3>
                                <h3>Processing Speed</h3>
                                <p>Analyze complex legal documents in seconds, with processing speeds ten times faster than previous AI solutions.</p>
                            </div>
                            
                            <div className="achievement-card">
                                <div className="achievement-icon">+</div>
                                <h3 className="achievement-number">40+</h3>
                                <h3>Languages</h3>
                                <p>Gemini 2.0 understands and analyzes legal documents across more than 40 different languages and jurisdictions.</p>
                            </div>
                            
                            <div className="achievement-card">
                                <div className="achievement-icon">+</div>
                                <h3 className="achievement-number">24/7</h3>
                                <h3>Availability</h3>
                                <p>Access Gemini 2.0's powerful AI analysis capabilities around the clock, with no downtime or waiting periods.</p>
                            </div>
                        </div>
                    </section>
                    
                    {/* Values & Mission Section */}
                    <section id="values-section" className={`content-section ${activeSection === 'values-section' ? 'active' : ''}`}>
                        <h2>FAQ & Resources</h2>
                        <p>Find answers to common questions and access helpful resources to enhance your legal knowledge and make the most of our platform.</p>
                        
                        <div className="card-container">
                            <div className="content-card" style={{ display: 'flex', flexDirection: 'column', width: '100%', marginBottom: '20px' }}>
                                <div className="card-content" style={{ width: '100%', padding: '24px' }}>
                                    <h3>Is my uploaded document safe?</h3>
                                    <p>Yes, we use advanced encryption to ensure your documents remain private and confidential at all times.</p>
                                </div>
                            </div>
                            
                            <div className="content-card" style={{ display: 'flex', flexDirection: 'column', width: '100%', marginBottom: '20px' }}>
                                <div className="card-content" style={{ width: '100%', padding: '24px' }}>
                                    <h3>Can I get legal advice for free?</h3>
                                    <p>We offer a free basic analysis of your agreement. However, lawyer consultations may have associated fees.</p>
                                </div>
                            </div>
                            
                            <div className="content-card" style={{ display: 'flex', flexDirection: 'column', width: '100%', marginBottom: '20px' }}>
                                <div className="card-content" style={{ width: '100%', padding: '24px' }}>
                                    <h3>How do I book a lawyer?</h3>
                                    <p>Simply browse the lawyer directory, select a lawyer based on your needs, and book an appointment through our platform.</p>
                                </div>
                            </div>
                            
                            <div className="content-card" style={{ display: 'flex', flexDirection: 'column', width: '100%', marginBottom: '20px' }}>
                                <div className="card-content" style={{ width: '100%', padding: '24px' }}>
                                    <h3>Video Tutorials</h3>
                                    <p>Watch our step-by-step video guides to help you navigate our platform efficiently and make the most of our services.</p>
                                </div>
                            </div>
                            
                            <div className="content-card" style={{ display: 'flex', flexDirection: 'column', width: '100%', marginBottom: '20px' }}>
                                <div className="card-content" style={{ width: '100%', padding: '24px' }}>
                                    <h3>Do you support all types of agreements?</h3>
                                    <p>Our Gemini 2.0 AI works with most standard legal documents, including employment contracts, lease agreements, service contracts, NDAs, and many other types of legal agreements.</p>
                                </div>
                            </div>
                            
                            <div className="content-card" style={{ display: 'flex', flexDirection: 'column', width: '100%', marginBottom: '20px' }}>
                                <div className="card-content" style={{ width: '100%', padding: '24px' }}>
                                    <h3>How accurate is the AI analysis?</h3>
                                    <p>Gemini 2.0 achieves an industry-leading 98% accuracy rate in identifying key clauses and potential issues in legal documents, though we still recommend professional legal review for critical matters.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div style={{ marginTop: '60px' }}>
                            <h3 align="center">Our Mission</h3>
                            <p style={{ fontSize: '24px', lineHeight: '1.4', fontWeight: '300', maxWidth: '800px', margin: '0 auto', textAlign: 'center', color: '#e8e8f0' }}>
                                "To democratize legal knowledge and empower people with the tools and resources they need to navigate legal matters with confidence and clarity."
                            </p>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
};

export default About;