// More.jsx
import React, { useEffect } from 'react';
import './More.css'; // Import More.css

const ResearchPapers = () => {
    useEffect(() => {
        // Function to handle sidebar navigation and card animations
        const sidebarButtons = document.querySelectorAll('.sidebar-menu-button');
        const contentSections = document.querySelectorAll('.content-section');

        // Function to animate cards in a section
        function animateCards(section) {
            const cards = section.querySelectorAll('.paper-card, .resource-item, .conference-card');

            cards.forEach((card, index) => {
                card.style.transitionDelay = `${100 * index}ms`; // Stagger the transitions
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            });
        }

        // Handle sidebar button clicks
        sidebarButtons.forEach(button => {
            button.addEventListener('click', function () {
                // Remove active class from all buttons and ARIA attributes
                sidebarButtons.forEach(btn => {
                    btn.classList.remove('active');
                    btn.setAttribute('aria-selected', 'false');
                });
                // Add active class to clicked button and ARIA attribute
                this.classList.add('active');
                this.setAttribute('aria-selected', 'true');

                // Hide all sections and reset animations
                contentSections.forEach(section => {
                    section.classList.remove('active');
                    // Reset card animations before hiding
                    section.querySelectorAll('.paper-card, .resource-item, .conference-card').forEach(card => {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(30px)';
                        card.style.transitionDelay = '0ms'; // Remove delay for hiding
                    });
                });

                // Show selected section
                const targetSection = document.getElementById(this.dataset.target);
                targetSection.classList.add('active');

                // Animate cards in the new section
                animateCards(targetSection);
            });
        });

        // Form submission handling (if needed, though not in this file)
        // const researchForm = document.getElementById('research-submission-form');
        // if (researchForm) {
        //     researchForm.addEventListener('submit', function(e) {
        //         e.preventDefault();
        //         alert('Thank you for your submission. Our team will review your research and get back to you shortly.');
        //         this.reset();
        //     });
        // }

        // Initial animation for the default active section on page load
        const initialActiveSection = document.querySelector('.content-section.active');
        if (initialActiveSection) {
            animateCards(initialActiveSection);
        }
    }, []); // Empty dependency array for running once after initial render

    return (
        <>
            {/* Navigation */}
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/howto">How-To-Use?</a></li>
                    <li><a href="#">Refer a professional</a></li>
                    <li><a href="/contact">Support</a></li>
                </ul>
            </nav>

            {/* Page Container */}
            <div className="page-container">
                {/* Sidebar */}
                <aside className="sidebar">
                    <h2 className="sidebar-title">Precrast AI Insights</h2>
                    <ul className="sidebar-menu">
                        <li className="sidebar-menu-item">
                            <button className="sidebar-menu-button active" data-target="papers-section" aria-selected="true">Legal Guides & Analysis</button>
                        </li>
                        <li className="sidebar-menu-item">
                            <button className="sidebar-menu-button" data-target="resources-section" aria-selected="false">Relevant Legislation & Case Law</button>
                        </li>
                        <li className="sidebar-menu-item">
                            <button className="sidebar-menu-button" data-target="conferences-section" aria-selected="false">Legal Tech Conferences</button>
                        </li>
                        <li className="sidebar-menu-item">
                            <button className="sidebar-menu-button" data-target="collaborations-section" aria-selected="false">AI & Law Research Initiatives</button>
                        </li>
                    </ul>
                </aside>

                {/* Main Content */}
                <main className="main-content">
                    <header className="page-header">
                        <h1>Precrast AI Insights</h1>
                        <p>Explore legal guides, legislation, and resources powered by Precrast AI technology to help you understand your uploaded documents.</p>
                    </header>

                    {/* Research Papers Section */}
                    <section id="papers-section" className="content-section active">
                        <h2>Legal Guides & Analysis</h2>
                        <p>Access simplified explanations and structured highlights related to legal concepts and document analysis provided by Precrast AI.</p>



                        <div className="papers-grid">
                            {/* Paper 1 */}
                            <div className="paper-card">
                                <div className="paper-content">
                                    <h3 className="paper-title">Understanding Key Clauses in Commercial Contracts</h3>
                                    <p className="paper-authors">Precrast AI Analysis Team</p>
                                    <p className="paper-abstract">This guide provides a simplified overview of common contract clauses, including termination, indemnification, and dispute resolution, as interpreted by Precrast AI using its technology.</p>
                                    <p className="paper-details"><strong>Published:</strong> March 2025</p>
                                    <p className="paper-details"><strong>Category:</strong> Contract Law</p>
                                    <p className="paper-details"><strong>Jurisdiction:</strong> General</p>
                                    <a href="#" className="download-button">View Guide</a>
                                </div>
                            </div>
                            <br />
                            <br />
                            {/* Paper 2 */}
                            <div className="paper-card">
                                <div className="paper-content">
                                    <h3 className="paper-title">Navigating Intellectual Property Rights for Software Developers</h3>
                                    <p className="paper-authors">Precrast AI Analysis Team</p>
                                    <p className="paper-abstract">A breakdown of copyright, patents, and trademarks relevant to software development, explained through the lens of Precrast AI's analysis.</p>
                                    <p className="paper-details"><strong>Published:</strong> February 2025</p>
                                    <p className="paper-details"><strong>Category:</strong> Intellectual Property</p>
                                    <p className="paper-details"><strong>Jurisdiction:</strong> United States</p>
                                    <a href="#" className="download-button">View Guide</a>
                                </div>
                            </div>
                            <br />
                            <br />
                            {/* Paper 3 */}
                            <div className="paper-card">
                                <div className="paper-content">
                                    <h3 className="paper-title">GDPR Compliance for Small Businesses: A Practical Guide</h3>
                                    <p className="paper-authors">Precrast AI Analysis Team</p>
                                    <p className="paper-abstract">This guide simplifies the General Data Protection Regulation (GDPR) for small businesses, offering practical steps for compliance as understood by Precrast AI.</p>
                                    <p className="paper-details"><strong>Published:</strong> January 2025</p>
                                    <p className="paper-details"><strong>Category:</strong> Data Privacy</p>
                                    <p className="paper-details"><strong>Jurisdiction:</strong> European Union</p>
                                    <a href="#" className="download-button">View Guide</a>
                                </div>
                            </div>
                            <br />
                            <br />
                        </div>
                    </section>

                    {/* External Resources Section */}
                    <section id="resources-section" className="content-section">
                        <h2>Relevant Legislation & Case Law</h2>
                        <p>Explore these external resources to access primary legal sources and enhance your understanding of the law.</p>

                        <div className="resources-list">
                            {/* Resource 1 */}
                            <div className="resource-item">
                                <h3 className="resource-title">United States Code (USC)</h3>
                                <p className="resource-description">The official compilation and codification of the general and permanent federal laws of the United States.  Use this to research specific US laws. (Source: uscode.house.gov)</p>
                                <a href="https://uscode.house.gov/" className="resource-link">Visit Resource</a>
                            </div>

                            {/* Resource 2 */}
                            <div className="resource-item">
                                <h3 className="resource-title">FindLaw</h3>
                                <p className="resource-description">A comprehensive online legal resource providing case law, statutes, legal news, and lawyer directory. Excellent for legal research. (Source: findlaw.com)</p>
                                <a href="https://www.findlaw.com/" className="resource-link">Visit Resource</a>
                            </div>

                            {/* Resource 3 */}
                            <div className="resource-item">
                                <h3 className="resource-title">Cornell Law School Legal Information Institute (LII)</h3>
                                <p className="resource-description">Provides free access to legal information, including the U.S. Constitution, federal statutes, and regulations.  A reliable source for legal information. (Source: law.cornell.edu)</p>
                                <a href="https://www.law.cornell.edu/" className="resource-link">Visit Resource</a>
                            </div>

                            {/* Resource 4 */}
                            <div className="resource-item">
                                <h3 className="resource-title">The UK Legislation Website</h3>
                                <p className="resource-description">Access UK legislation including Acts of Parliament, Statutory Instruments and Explanatory Memoranda.  The official source for UK law. (Source: legislation.gov.uk)</p>
                                <a href="https://www.legislation.gov.uk/" className="resource-link">Visit Resource</a>
                            </div>

                            {/* Resource 5 */}
                            <div className="resource-item">
                                <h3 className="resource-title">EUR-Lex</h3>
                                <p className="resource-description">Provides direct free access to European Union law. You can consult the Official Journal of the European Union as well as EU law, treaties, case-law and legislative proposals. (Source: eur-lex.europa.eu)</p>
                                <a href="https://eur-lex.europa.eu/" className="resource-link">Visit Resource</a>
                            </div>
                        </div>
                    </section>

                    {/* Upcoming Conferences Section */}
                    <section id="conferences-section" className="content-section">
                        <h2>Legal Tech Conferences</h2>
                        <p>Stay informed about upcoming conferences and events related to legal technology and AI in law.</p>

                        {/* Conference 1 */}
                        <div className="conference-card">
                            <span className="conference-date">June 5-7, 2025</span>
                            <h3 className="conference-title">ABA TECHSHOW</h3>
                            <p className="conference-location">Chicago, Illinois, USA</p>
                            <p className="conference-description">A premier legal technology conference showcasing the latest innovations for legal professionals.</p>
                            <a href="#" className="conference-link">Learn More</a>
                        </div>

                        {/* Conference 2 */}
                        <div className="conference-card">
                            <span className="conference-date">September 10-12, 2025</span>
                            <h3 className="conference-title">LegalGeek Conference</h3>
                            <p className="conference-location">London, United Kingdom</p>
                            <p className="conference-description">A leading conference exploring the future of law through technology and innovation.</p>
                            <a href="#" className="conference-link">Learn More</a>
                        </div>

                        {/* Conference 3 */}
                        <div className="conference-card">
                            <span className="conference-date">November 1-3, 2025</span>
                            <h3 className="conference-title">AI in Law Conference</h3>
                            <p className="conference-location">Virtual Event</p>
                            <p className="conference-description">An online conference focused on the latest advancements and applications of artificial intelligence in the legal field.</p>
                            <a href="#" className="conference-link">Learn More</a>
                        </div>
                    </section>

                    {/* Research Collaborations Section */}
                    <section id="collaborations-section" className="content-section">
                        <h2>AI & Law Research Initiatives</h2>
                        <p>Learn about ongoing research collaborations focusing on the intersection of artificial intelligence and law.</p>

                        <div className="papers-grid">
                            {/* Collaboration 1 */}
                            <div className="paper-card">
                                <div className="paper-content">
                                    <h3 className="paper-title">Stanford Center for Legal Informatics (CodeX)</h3>
                                    <p className="paper-abstract">CodeX accelerates the research and development of computational law.  They are developing technology and policy to improve the legal system. </p>
                                    <p className="paper-details"><strong>Focus Areas:</strong> Computational Law, AI Ethics, Legal Tech</p>
                                    <a href="https://law.stanford.edu/codex-the-stanford-center-for-legal-informatics/" className="download-button">View Details</a>
                                </div>
                                <br />
                                <br />
                                {/* Collaboration 2 */}
                                <div className="paper-card">
                                    <div className="paper-content">
                                        <h3 className="paper-title">The Alan Turing Institute: AI for Justice Programme</h3>
                                        <p className="paper-abstract">Exploring how AI and data science can support and transform the UK justice system.  Focus areas include fairness, transparency and accountability. </p>
                                        <p className="paper-details"><strong>Focus Areas:</strong> AI Fairness, Justice System Transformation</p>
                                        <a href="https://www.turing.ac.uk/research/research-programmes/ai-for-justice" className="download-button">View Details</a>
                                    </div>
                                </div>
                                <br />
                                <br />
                                {/* Collaboration 3 */}
                                <div className="paper-card">
                                    <div className="paper-content">
                                        <h3 className="paper-title">Berkman Klein Center for Internet & Society at Harvard University</h3>
                                        <p className="paper-abstract">Exploring the ethical, legal, and societal implications of AI in the context of law and justice.  Research includes algorithmic accountability and fairness.</p>
                                        <p className="paper-details"><strong>Focus Areas:</strong> AI Ethics, Algorithmic Accountability</p>
                                        <a href="https://cyber.harvard.edu/" className="download-button">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>



                </main>
            </div>
        </>
            );
};

            export default ResearchPapers;
