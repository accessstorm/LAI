// How.jsx
import React, { useEffect } from 'react';
import './How.css'; // Assuming How.css is in the same directory

const ProductGuide = () => {
    useEffect(() => {
        // JavaScript for interactive elements
        const sidebarButtons = document.querySelectorAll('.sidebar-menu-button');

        sidebarButtons.forEach(button => {
            button.addEventListener('click', function () {
                // Remove active class from all buttons
                sidebarButtons.forEach(btn => btn.classList.remove('active'));

                // Add active class to clicked button
                this.classList.add('active');

                // Hide all sections
                const sections = document.querySelectorAll('.content-section');
                sections.forEach(section => section.classList.remove('active'));

                // Show the target section
                const targetSection = document.getElementById(this.dataset.target);
                targetSection.classList.add('active');
            });
        });

        const animateElements = (elements, delay = 0) => {
            elements.forEach((element, index) => {
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, delay + (index * 100));
            });
        };

        // Animate initial section elements
        const activeSection = document.querySelector('.content-section.active');
        if (activeSection) {
            const cards = activeSection.querySelectorAll('.content-card');
            const steps = activeSection.querySelectorAll('.step-item');

            animateElements(cards, 300);
            animateElements(steps, 100);
        }

        sidebarButtons.forEach(button => {
            button.addEventListener('click', function () {
                const targetSectionId = this.dataset.target;
                const targetSection = document.getElementById(targetSectionId);

                setTimeout(() => {
                    const cards = targetSection.querySelectorAll('.content-card');
                    const steps = targetSection.querySelectorAll('.step-item');
                    const faqItems = targetSection.querySelectorAll('.faq-item');
                    const tipCards = targetSection.querySelectorAll('.tip-card');
                    const troubleItems = targetSection.querySelectorAll('.trouble-item');
                    const videoCards = targetSection.querySelectorAll('.video-card');
                    const supportCards = targetSection.querySelectorAll('.support-card');

                    animateElements(cards, 300);
                    animateElements(steps, 100);
                    animateElements(faqItems, 100);
                    animateElements(tipCards, 100);
                    animateElements(troubleItems, 100);
                    animateElements(videoCards, 100);
                    animateElements(supportCards, 100);
                }, 100);
            });
        });

        const faqQuestions = document.querySelectorAll('.faq-question');

        faqQuestions.forEach(question => {
            question.addEventListener('click', function () {
                const faqItem = this.parentElement;
                faqItem.classList.toggle('active');
            });
        });
    }, []); // Empty dependency array ensures this effect runs only once after initial render

    return (
        <html lang="en">

        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" type="image/png" href="PrecrastAIcircle.png" /> {/* Assuming icon name change */}
            <title>Precrast AI Guide</title>

        </head>

        <body>
            {/* Navigation */}
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="#">Refer a professional</a></li>
                    <li><a href="/more">More</a></li>
                    <li><a href="/contact">Support</a></li>
                </ul>
            </nav>

            {/* Page Container */}
            <div className="page-container">
                {/* Sidebar */}
                <aside className="sidebar">
                    <h2 className="sidebar-title">Precrast AI Guide</h2>
                    <ul className="sidebar-menu">
                        <li className="sidebar-menu-item">
                            <button className="sidebar-menu-button active" data-target="getting-started-section">Getting Started</button>
                        </li>
                        <li className="sidebar-menu-item">
                            <button className="sidebar-menu-button" data-target="features-section">Key Features</button>
                        </li>
                        <li className="sidebar-menu-item">
                            <button className="sidebar-menu-button" data-target="setup-section">Setup & Installation</button>
                        </li>
                        <li className="sidebar-menu-item">
                            <button className="sidebar-menu-button" data-target="tips-section">Tips & Tricks</button>
                        </li>
                        <li className="sidebar-menu-item">
                            <button className="sidebar-menu-button" data-target="troubleshooting-section">Troubleshooting</button>
                        </li>
                        <li className="sidebar-menu-item">
                            <button className="sidebar-menu-button" data-target="faq-section">FAQ</button>
                        </li>
                        <li className="sidebar-menu-item">
                            <button className="sidebar-menu-button" data-target="videos-section">Video Tutorials</button>
                        </li>
                    </ul>
                </aside>

                {/* Main Content */}
                <main className="main-content">
                    <header className="page-header">
                        <h1>How to Use Precrast AI</h1>
                        <p>Discover everything you need to know about using our powerful legal document analyzer powered by Precrast AI technology.</p>
                    </header>

                    {/* Getting Started Section */}
                    <section id="getting-started-section" className="content-section active">
                        <h2>Getting Started</h2>
                        <p>Welcome to Precrast AI! Our tool simplifies legal document analysis by leveraging our advanced AI to provide clear, structured insights. Follow these simple steps to begin transforming complex legal documents into accessible information.</p>

                        <div className="steps-container">
                            <div className="step-item">
                                <div className="step-number">1</div>
                                <div className="step-content">
                                    <h3>Create Your Account</h3>
                                    <p>Sign up for Precrast AI with your professional credentials:</p>
                                    <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
                                        <li>Professional email address</li>
                                        <li>Secure password</li>
                                        <li>Basic firm or organization information</li>
                                        <li>Payment details (for premium features)</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="step-item">
                                <div className="step-number">2</div>
                                <div className="step-content">
                                    <h3>Access Your Dashboard</h3>
                                    <p>After verification, you'll receive login details via email. Sign in to access your personalized Precrast AI dashboard where all your documents and analyses will be stored securely.</p>
                                </div>
                            </div>

                            <div className="step-item">
                                <div className="step-number">3</div>
                                <div className="step-content">
                                    <h3>Upload Your Legal Document</h3>
                                    <p>Click the "Upload Document" button on your dashboard to add your legal files. We support multiple formats including PDF, DOCX, TXT, and scanned images. Our AI-powered system will process the document for in-depth analysis.</p>
                                </div>
                            </div>

                            <div className="step-item">
                                <div className="step-number">4</div>
                                <div className="step-content">
                                    <h3>Review Structured Highlights</h3>
                                    <p>Once processing completes, Precrast AI presents a simplified breakdown of your document with key sections highlighted. Navigate through structured insights including important clauses, potential obligations, risks, and opportunities identified by the AI.</p>
                                </div>
                            </div>

                            <div className="step-item">
                                <div className="step-number">5</div>
                                <div className="step-content">
                                    <h3>Customize Your Analysis</h3>
                                    <p>Tailor the analysis to your specific practice area by adjusting settings in the preferences panel. Configure focus areas, terminology sensitivity, and output formats to optimize results for your particular legal specialization.</p>
                                </div>
                            </div>
                        </div>

                        <div className="card-container">
                            <div className="content-card">
                                <div className="card-image">
                                    <img src="/api/placeholder/600/400" alt="Document Insights" />
                                </div>
                                <div className="card-content">
                                    <h3>Structured Document Insights</h3>
                                    <p>See how our Precrast AI technology identifies and categorizes key elements within legal documents for faster review.</p>
                                </div>
                            </div>

                            <div className="content-card">
                                <div className="card-image">
                                    <img src="/api/placeholder/600/400" alt="Legal Community" />
                                </div>
                                <div className="card-content">
                                    <h3>Join Our Legal Tech Community</h3>
                                    <p>Connect with fellow legal professionals using Precrast AI to share best practices and specialized workflows.</p>
                                </div>
                            </div>

                            <div className="content-card">
                                <div className="card-image">
                                    <img src="/api/placeholder/600/400" alt="Learning Resources" />
                                </div>
                                <div className="card-content">
                                    <h3>Comprehensive Resources</h3>
                                    <p>Access our library of tutorials, case studies, and practical guides designed specifically for legal practitioners.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Key Features Section */}
                    <section id="features-section" className="content-section">
                        <h2>Key Features</h2>
                        <p>Discover how Precrast AI transforms legal document review using our advanced AI technology. Our platform offers these powerful capabilities designed specifically for legal professionals.</p>

                        <div className="card-container">
                            <div className="content-card">
                                <div className="card-image">
                                    <img src="/api/placeholder/600/400" alt="Smart Analysis" />
                                </div>
                                <div className="card-content">
                                    <h3>Intelligent Document Parsing</h3>
                                    <p>Precrast AI parses complex legal documents of any length, automatically identifying key clauses, terms, obligations, and potential issues with human-like understanding.</p>
                                </div>
                            </div>

                            <div className="content-card">
                                <div className="card-image">
                                    <img src="/api/placeholder/600/400" alt="Plain Language" />
                                </div>
                                <div className="card-content">
                                    <h3>Simplified Language Summaries</h3>
                                    <p>Convert dense legal language into clear, accessible explanations that help clients understand their agreements without sacrificing accuracy or legal precision.</p>
                                </div>
                            </div>

                            <div className="content-card">
                                <div className="card-image">
                                    <img src="/api/placeholder/600/400" alt="Risk Identification" />
                                </div>
                                <div className="card-content">
                                    <h3>Automated Risk Detection</h3>
                                    <p>Instantly identify potentially problematic clauses, inconsistencies, ambiguities, and unusual terms that require special attention or negotiation before signing.</p>
                                </div>
                            </div>

                            <div className="content-card">
                                <div className="card-image">
                                    <img src="/api/placeholder/600/400" alt="Compliance Check" />
                                </div>
                                <div className="card-content">
                                    <h3>Compliance Verification</h3>
                                    <p>Verify documents against current regulatory requirements in various jurisdictions, highlighting potential compliance issues and suggesting appropriate modifications.</p>
                                </div>
                            </div>
                        </div>

                        <h3 style={{ marginTop: '40px' }}>Plan Comparison</h3>
                        <table className="feature-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Basic</th>
                                    <th>Professional</th>
                                    <th>Enterprise</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Documents Per Month</td>
                                    <td>15</td>
                                    <td>150</td>
                                    <td>Unlimited</td>
                                </tr>
                                <tr>
                                    <td>Document Size Limit</td>
                                    <td>50 pages</td>
                                    <td>200 pages</td>
                                    <td>Unlimited</td>
                                </tr>
                                <tr>
                                    <td>Analysis Depth</td>
                                    <td>Standard</td>
                                    <td>Advanced</td>
                                    <td>Comprehensive</td>
                                </tr>
                                <tr>
                                    <td>Custom Templates</td>
                                    <td>5</td>
                                    <td>30</td>
                                    <td>Unlimited</td>
                                </tr>
                                <tr>
                                    <td>API Access</td>
                                    <td>No</td>
                                    <td>Limited</td>
                                    <td>Full Access</td>
                                </tr>
                                <tr>
                                    <td>User Accounts</td>
                                    <td>2</td>
                                    <td>10</td>
                                    <td>50+</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    {/* Setup & Installation Section */}
                    <section id="setup-section" className="content-section">
                        <h2>Setup & Integration</h2>
                        <p>Follow these detailed steps to configure Precrast AI for your practice and integrate it with your existing document management workflow. Proper setup ensures optimal AI performance and seamless document analysis.</p>

                        <div className="steps-container">
                            <div className="step-item">
                                <div className="step-number">1</div>
                                <div className="step-content">
                                    <h3>Prepare Your Environment</h3>
                                    <p>Before beginning setup, ensure you have:</p>
                                    <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
                                        <li>Admin access to your systems</li>
                                        <li>List of team members who need Precrast AI access</li>
                                        <li>Information about your document management system</li>
                                        <li>Specific practice areas and jurisdictions</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="step-item">
                                <div className="step-number">2</div>
                                <div className="step-content">
                                    <h3>Configure Your Profile</h3>
                                    <p>After first login, complete your organizational profile with details about your practice areas, jurisdictions, and document types. This critical information helps Precrast AI tailor its analysis to your specific legal focus.</p>
                                </div>
                            </div>

                            <div className="step-item">
                                <div className="step-number">3</div>
                                <div className="step-content">
                                    <h3>Set Up Team Access</h3>
                                    <p>For multi-user accounts, add team members with appropriate permissions:</p>
                                    <ol style={{ marginLeft: '20px', marginBottom: '20px' }}>
                                        <li>Go to "Settings  Team Management"</li>
                                        <li>Click "Add User" and enter professional emails</li>
                                        <li>Assign roles (Administrator, Attorney, Paralegal, Viewer)</li>
                                        <li>Set document access permissions for each user</li>
                                    </ol>
                                </div>
                            </div>

                            <div className="step-item">
                                <div className="step-number">4</div>
                                <div className="step-content">
                                    <h3>Connect Your Document System</h3>
                                    <p>Integrate Precrast AI with your existing document management system. We support seamless connections with leading platforms including Clio, NetDocuments, iManage, and more. Select your platform from "Integrations" and follow the authentication process.</p>
                                </div>
                            </div>

                            <div className="step-item">
                                <div className="step-number">5</div>
                                <div className="step-content">
                                    <h3>Create Analysis Templates</h3>
                                    <p>Develop specialized templates for common document types:</p>
                                    <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
                                        <li>Contracts: Focus on obligations, termination, liability provisions</li>
                                        <li>NDAs: Highlight confidentiality terms, duration, exclusions</li>
                                        <li>Employment Agreements: Emphasize compensation, benefits, restrictions</li>
                                        <li>Real Estate Documents: Focus on property rights, encumbrances, conditions</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="step-item">
                                <div className="step-number">6</div>
                                <div className="step-content">
                                    <h3>Add Specialized Terminology</h3>
                                    <p>Enhance Precrast AI's understanding by adding industry-specific or client-specific terminology to your customized legal dictionary. Upload specialized glossaries or add terms manually through "Language Settings."</p>
                                </div>
                            </div>

                            <div className="step-item">
                                <div className="step-number">7</div>
                                <div className="step-content">
                                    <h3>Configure Output Formats</h3>
                                    <p>Customize how analysis reports are presented:</p>
                                    <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
                                        <li>Report Structure: Arrange sections by priority and relevance</li>
                                        <li>Risk Highlighting: Set color coding for different risk categories</li>
                                        <li>Export Options: Configure PDF, DOCX, or presentation formats</li>
                                        <li>Branding: Add your firm's logo and styling to client-facing reports</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="step-item">
                                <div className="step-number">8</div>
                                <div className="step-content">
                                    <h3>Verify Configuration</h3>
                                    <p>Run a test analysis using a sample document to verify your settings. Review the AI-generated highlights and insights, then adjust templates, terminology, or sensitivity settings as needed before using with client documents.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Tips & Tricks Section */}
                    <section id="tips-section" className="content-section">
                        <h2>Tips & Tricks</h2>
                        <p>Maximize the power of Precrast AI's technology with these expert tips. These insights will help you get the most accurate and useful structured highlights from your legal document analysis.</p>

                        <div className="tips-grid">
                            <div className="tip-card">
                                <div className="tip-icon">📄</div>
                                <h3>Document Optimization</h3>
                                <p>Prepare documents for best results:</p>
                                <ul style={{ marginLeft: '15px', marginTop: '10px' }}>
                                    <li>Use searchable PDFs whenever possible</li>
                                    <li>Ensure high-quality scans for image-based documents</li>
                                    <li>Remove watermarks that might interfere with text recognition</li>
                                    <li>Include table of contents for complex documents</li>
                                </ul>
                            </div>

                            <div className="tip-card">
                                <div className="tip-icon">🔍</div>
                                <h3>Advanced Search Techniques</h3>
                                <p>Find important information quickly:</p>
                                <ul style={{ marginLeft: '15px', marginTop: '10px' }}>
                                    <li>Use Boolean operators in search (AND, OR, NOT)</li>
                                    <li>Search by legal concept rather than just keywords</li>
                                    <li>Filter results by risk level or clause category</li>
                                    <li>Save frequent searches as favorites</li>
                                </ul>
                            </div>

                            <div className="tip-card">
                                <div className="tip-icon">⚖️</div>
                                <h3>Document Comparison</h3>
                                <p>Compare versions effectively:</p>
                                <ul style={{ marginLeft: '15px', marginTop: '10px' }}>
                                    <li>Use the side-by-side comparison tool</li>
                                    <li>Toggle highlighting of substantive changes</li>
                                    <li>Track modifications across multiple drafts</li>
                                    <li>Generate redline reports for negotiations</li>
                                </ul>
                            </div>

                            <div className="tip-card">
                                <div className="tip-icon">📊</div>
                                <h3>Report Customization</h3>
                                <p>Create impactful client reports:</p>
                                <ul style={{ marginLeft: '15px', marginTop: '10px' }}>
                                    <li>Tailor executive summaries for different stakeholders</li>
                                    <li>Use visual risk heatmaps for impact</li>
                                    <li>Include specific recommendations with findings</li>
                                    <li>Save client-specific report templates</li>
                                </ul>
                            </div>

                            <div className="tip-card">
                                <div className="tip-icon">🧠</div>
                                <h3>AI Enhancement</h3>
                                <p>Help the AI learn your preferences:</p>
                                <ul style={{ marginLeft: '15px', marginTop: '10px' }}>
                                    <li>Provide feedback on analysis accuracy</li>
                                    <li>Flag and correct misinterpreted clauses</li>
                                    <li>Add practice-specific terminology regularly</li>
                                    <li>Update templates as legal standards evolve</li>
                                </ul>
                            </div>

                            <div className="tip-card">
                                <div className="tip-icon">🔄</div>
                                <h3>Workflow Integration</h3>
                                <p>Incorporate Precrast AI into your practice:</p>
                                <ul style={{ marginLeft: '15px', marginTop: '10px' }}>
                                    <li>Set up automated notifications for completed analyses</li>
                                    <li>Use batch processing for related documents</li>
                                    <li>Schedule periodic contract reviews</li>
                                    <li>Create matter-specific document workflows</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Troubleshooting Section */}
                    <section id="troubleshooting-section" className="content-section">
                        <h2>Troubleshooting</h2>
                        <p>Encountering issues with Precrast AI? Review these common problems and solutions to quickly resolve technical difficulties and optimize your document analysis experience.</p>

                        <div className="trouble-item">
                            <h3 className="trouble-problem">Document Upload Issues</h3>
                            <p>If you're experiencing problems uploading documents, try these solutions:</p>
                            <ol style={{ marginLeft: '20px', marginBottom: '20px' }}>
                                <li>Verify your document is in a supported format (PDF, DOCX, TXT, RTF, JPG, PNG)</li>
                                <li>Check that the file size is under your plan limit (50MB for Basic, 200MB for Professional)</li>
                                <li>Convert image-only scans to searchable PDFs before uploading</li>
                                <li>Try using a different browser or clearing your cache</li>
                                <li>For multiple files, upload individually to identify problematic documents</li>
                            </ol>
                        </div>

                        <div className="trouble-item">
                            <h3 className="trouble-problem">Analysis Accuracy Issues</h3>
                            <p>If the AI analysis seems incomplete or inaccurate:</p>
                            <ol style={{ marginLeft: '20px', marginBottom: '20px' }}>
                                <li>Check document quality (poor scans can affect AI comprehension)</li>
                                <li>Verify that the correct document type template was selected</li>
                                <li>Add specialized terminology that may be missing from the system</li>
                                <li>Adjust sensitivity settings for your specific document type</li>
                                <li>Use the "Improve Results" feedback option to help Precrast AI learn</li>
                            </ol>
                        </div>

                        <div className="trouble-item">
                            <h3 className="trouble-problem">Integration Challenges</h3>
                            <p>If you're having trouble with your document system integrations:</p>
                            <ol style={{ marginLeft: '20px', marginBottom: '20px' }}>
                                <li>Confirm API credentials are current and correctly entered</li>
                                <li>Verify your DMS version is compatible with Precrast AI</li>
                                <li>Check that your account has sufficient permissions in both systems</li>
                                <li>Temporarily disable security software that might block connections</li>
                                <li>Contact your IT department to review network configurations</li>
                            </ol>
                        </div>

                        <div className="trouble-item">
                            <h3 className="trouble-problem">Performance Issues</h3>
                            <p>If the system is responding slowly during analysis:</p>
                            <ol style={{ marginLeft: '20px', marginBottom: '20px' }}>
                                <li>Test your internet connection speed and stability</li>
                                <li>Close other resource-intensive applications</li>
                                <li>For very large documents, consider splitting into smaller sections</li>
                                <li>Clear browser cache and restart your browser</li>
                                <li>For multiple documents, process sequentially rather than simultaneously</li>
                            </ol>
                        </div>

                        <div className="trouble-item">
                            <h3 className="trouble-problem">Export and Sharing Issues</h3>
                            <p>If you can't export or share your analysis results:</p>
                            <ol style={{ marginLeft: '20px', marginBottom: '20px' }}>
                                <li>Confirm you have appropriate export permissions</li>
                                <li>Verify recipients have been granted access to the document</li>
                                <li>Try a different export format if one is causing problems</li>
                                <li>Check that shared files aren't exceeding email size limits</li>
                                <li>Use the secure sharing link option for large analysis reports</li>
                            </ol>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section id="faq-section" className="content-section">
                        <h2>Frequently Asked Questions</h2>
                        <p>Find answers to common questions about LawAI and our document analysis capabilities. If your question isn't addressed here, please contact our specialized legal tech support team.</p>

                        <div className="faq-item">
                            <div className="faq-question">How does LawAI protect sensitive legal information?</div>
                            <div className="faq-answer">
                                <p>LawAI implements rigorous security measures to safeguard your confidential legal documents:</p>
                                <ul>
                                    <li>End-to-end encryption for all data in transit (TLS 1.3) and at rest (AES-256)</li>
                                    <li>SOC 2 Type II compliance with regular third-party security audits</li>
                                    <li>Document processing in isolated environments with no data retention</li>
                                    <li>Strict role-based access controls for document viewing and editing</li>
                                    <li>Optional client-side encryption for Enterprise plans</li>
                                </ul>
                                <p>We also provide data residency options for organizations with specific geographic compliance requirements.</p>
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-question">Does LawAI replace attorney review of legal documents?</div>
                            <div className="faq-answer">
                                <p>LawAI is designed to enhance, not replace, the work of legal professionals. While our Gemini 2.0-powered system can identify key provisions, potential issues, and summarize complex information with remarkable accuracy, it should be used as a tool to improve efficiency and thoroughness.</p>
                                <p>Final legal analysis, advice, and decision-making should always be performed by qualified attorneys who can apply contextual judgment, professional experience, and ethical considerations that AI cannot replicate. LawAI helps legal professionals work more efficiently by handling the initial document analysis and highlighting areas that require closer expert attention.</p>
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-question">What types of legal documents can LawAI analyze?</div>
                            <div className="faq-answer">
                                <p>LawAI can analyze virtually any type of legal document, including:</p>
                                <ul>
                                    <li>Contracts (sales, service, employment, licensing, etc.)</li>
                                    <li>Non-disclosure agreements and confidentiality provisions</li>
                                    <li>Terms of service and privacy policies</li>
                                    <li>Leases and real estate documentation</li>
                                    <li>Corporate governance documents and bylaws</li>
                                    <li>Intellectual property agreements</li>
                                    <li>Compliance documentation</li>
                                    <li>Litigation documents and legal briefs</li>
                                    <li>Regulatory filings and submissions</li>
                                </ul>
                                <p>Our Gemini 2.0 technology is continually expanding its capabilities for specialized document types. Contact us to discuss specific document needs for your practice area.</p>
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-question">How accurate is LawAI's document analysis?</div>
                            <div className="faq-answer">
                                <p>LawAI powered by Google's Gemini 2.0 achieves industry-leading accuracy:</p>
                                <ul>
                                    <li>Over 97% accuracy in identifying standard legal clauses and provisions</li>
                                    <li>Risk assessment accuracy of approximately 92% compared to expert human review</li>
                                    <li>Plain language summaries maintain 98% semantic accuracy with original text</li>
                                    <li>Obligation and deadline extraction with 95% precision</li>
                                </ul>
                                <p>Accuracy varies based on document complexity, quality, and specialized terminology. We recommend attorney review of all AI analyses, especially for high-stakes or novel document types. The system continuously improves through professional feedback and regular model updates.</p>
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-question">Does LawAI support multiple languages?</div>
                            <div className="faq-answer">
                                <p>Yes, LawAI supports document analysis across multiple languages, including:</p>
                                <ul>
                                    <li>English (US, UK, Canadian, Australian variants)</li>
                                    <li>Spanish (including Latin American variants)</li>
                                    <li>French (including Canadian French)</li>
                                    <li>German</li>
                                    <li>Italian</li>
                                    <li>Portuguese</li>
                                    <li>Chinese (Simplified and Traditional)</li>
                                    <li>Japanese</li>
                                </ul>
                                <p>Professional and Enterprise plans include cross-language functionality, allowing documents to be analyzed in one language and results presented in another—particularly valuable for international legal work and multi-jurisdictional practices.</p>
                            </div>
                        </div>
                    </section>

                    {/* Video Tutorials Section */}
                    <section id="videos-section" className="content-section">
                        <h2>Video Tutorials</h2>
                        <p>Master LawAI's features with these comprehensive video tutorials designed specifically for legal professionals.</p>

                        <div className="video-container">
                            <div className="video-card">
                                <div className="video-thumbnail">
                                    <img src="/api/placeholder/600/400" alt="Getting Started Tutorial" />
                                </div>
                                <div className="video-details">
                                    <h3 className="video-title">Getting Started with LawAI</h3>
                                    <p className="video-description">A complete walkthrough of account setup, document uploading, and understanding your first AI-powered document analysis.</p>
                                </div>
                            </div>

                            <div className="video-card">
                                <div className="video-thumbnail">
                                    <img src="/api/placeholder/600/400" alt="Contract Analysis Tutorial" />
                                </div>
                                <div className="video-details">
                                    <h3 className="video-title">Contract Analysis Essentials</h3>
                                    <p className="video-description">Learn how to leverage Gemini 2.0 to identify key provisions, risks, and obligations in various contract types.</p>
                                </div>
                            </div>

                            <div className="video-card">
                                <div className="video-thumbnail">
                                    <img src="/api/placeholder/600/400" alt="Custom Templates Tutorial" />
                                </div>
                                <div className="video-details">
                                    <h3 className="video-title">Creating Custom Analysis Templates</h3>
                                    <p className="video-description">Discover how to build specialized templates for different practice areas and document categories.</p>
                                </div>
                            </div>

                            <div className="video-card">
                                <div className="video-thumbnail">
                                    <img src="/api/placeholder/600/400" alt="DMS Integration Tutorial" />
                                </div>
                                <div className="video-details">
                                    <h3 className="video-title">Document Management Integration</h3>
                                    <p className="video-description">Step-by-step instructions for connecting LawAI with popular legal document management systems.</p>
                                </div>
                            </div>

                            <div className="video-card">
                                <div className="video-thumbnail">
                                    <img src="/api/placeholder/600/400" alt="Client Reports Tutorial" />
                                </div>
                                <div className="video-details">
                                    <h3 className="video-title">Creating Client-Ready Reports</h3>
                                    <p className="video-description">Learn how to generate professional, branded analysis reports that effectively communicate findings to clients.</p>
                                </div>
                            </div>

                            <div className="video-card">
                                <div className="video-thumbnail">
                                    <img src="/api/placeholder/600/400" alt="Advanced Features Tutorial" />
                                </div>
                                <div className="video-details">
                                    <h3 className="video-title">Advanced Features for Legal Teams</h3>
                                    <p className="video-description">Master collaboration tools, batch processing, and AI training features designed for larger legal practices.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>


        </body>

        </html>
    );
};

export default ProductGuide;
