import React, { useState } from 'react';

// Logo Component
const SpeedForgeLogo = ({ size = 40 }) => (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
    </svg>

);

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            style={{
                background: 'white',
                padding: '32px',
                borderRadius: '12px',
                border: `1px solid ${isHovered ? '#6a9bcc' : 'rgba(106, 155, 204, 0.15)'}`,
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                boxShadow: isHovered
                    ? '0 12px 36px rgba(106, 155, 204, 0.15)'
                    : '0 0 0 rgba(106, 155, 204, 0)',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                style={{
                    width: '48px',
                    height: '48px',
                    background: 'rgba(106, 155, 204, 0.1)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    marginBottom: '16px',
                    color: '#6a9bcc',
                }}
            >
                {icon}
            </div>
            <h3
                style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#141413',
                    marginBottom: '12px',
                    margin: '0 0 12px 0',
                }}
            >
                {title}
            </h3>
            <p
                style={{
                    fontSize: '14px',
                    color: '#888',
                    lineHeight: '1.6',
                    margin: '0',
                }}
            >
                {description}
            </p>
        </div>
    );
};

// FAQ Item Component
const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            style={{
                marginBottom: '16px',
                border: `1px solid rgba(106, 155, 204, 0.15)`,
                borderRadius: '8px',
                overflow: 'hidden',
                background: 'white',
            }}
        >
            <div
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    padding: '20px',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontWeight: '600',
                    color: '#141413',
                    transition: 'all 0.3s ease',
                    background: isOpen ? 'rgba(106, 155, 204, 0.05)' : 'transparent',
                    userSelect: 'none',
                }}
                onMouseEnter={(e) => {
                    if (!isOpen) {
                        e.currentTarget.style.background = 'rgba(106, 155, 204, 0.05)';
                        e.currentTarget.style.color = '#6a9bcc';
                    }
                }}
                onMouseLeave={(e) => {
                    if (!isOpen) {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = '#141413';
                    }
                }}
            >
                <span>{question}</span>
                <span
                    style={{
                        color: '#6a9bcc',
                        transition: 'transform 0.3s ease',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        fontSize: '20px',
                    }}
                >
                    ›
                </span>
            </div>
            {isOpen && (
                <div
                    style={{
                        padding: '0 20px 20px 20px',
                        color: '#666',
                        lineHeight: '1.7',
                        animation: 'slideDown 0.3s ease',
                    }}
                >
                    {answer}
                </div>
            )}
        </div>
    );
};

// Main Landing Page Component
const SpeedForgeLanding = () => {
    const [isNavHovered, setIsNavHovered] = useState(null);

    const features = [
        {
            icon: '⚡',
            title: 'Pre-built Components',
            description:
                'Battle-tested UI components and patterns that work out of the box. Reduce boilerplate by 60% and focus on your business logic.',
        },
        {
            icon: '🔒',
            title: 'Security Hardened',
            description:
                'Enterprise-grade security with authentication, authorization, and compliance built in. GDPR, SOC 2, and HIPAA ready.',
        },
        {
            icon: '📈',
            title: 'Auto-scaling Infrastructure',
            description:
                'Seamlessly scale from your first user to millions. Built-in database optimization and caching strategies included.',
        },
        {
            icon: '🛠️',
            title: 'Developer Tools',
            description:
                'Intuitive CLI, local development server, and debugging tools. Real-time hot reload and type-safe API generation.',
        },
        {
            icon: '📚',
            title: 'Complete Documentation',
            description:
                'Comprehensive guides, API references, and interactive examples. Responsive community and dedicated support for enterprises.',
        },
        {
            icon: '🌍',
            title: 'Global CDN & APIs',
            description:
                'Lightning-fast content delivery globally. Multi-region deployment with automatic failover and 99.99% uptime SLA.',
        },
    ];

    const faqs = [
        {
            question: 'How much faster can I build with Speed Forge?',
            answer:
                'Most teams report 50-60% reduction in time to market. With pre-built components, security out of the box, and intelligent scaffolding, you spend less time on infrastructure and more time building features.',
        },
        {
            question: 'Is Speed Forge suitable for enterprise applications?',
            answer:
                'Absolutely. Speed Forge is built from the ground up for enterprise needs with GDPR, SOC 2, and HIPAA compliance, role-based access control, advanced auditing, and dedicated support. Many Fortune 500 companies use Speed Forge in production.',
        },
        {
            question: 'Can I migrate my existing application to Speed Forge?',
            answer:
                'Yes. We provide migration guides for common frameworks and platforms. Our team can also help with custom migrations. Most teams complete the transition in 2-4 weeks with minimal downtime.',
        },
        {
            question: "What's included in the pricing?",
            answer:
                'Our pricing is based on usage and team size. The Starter plan includes unlimited projects, community support, and standard analytics. Enterprise plans include priority support, advanced security, and custom deployment options.',
        },
        {
            question: 'Is there vendor lock-in with Speed Forge?',
            answer:
                'No. Speed Forge is built on open standards and you own your data. You can export your application and data at any time without penalties. We believe in building trust through transparency.',
        },
        {
            question: 'What kind of support is available?',
            answer:
                'We offer community support for all plans, email support for Pro, and 24/7 priority support for Enterprise customers. Our average response time is under 2 hours for critical issues.',
        },
    ];

    return (
        <div
            style={{
                background: 'linear-gradient(135deg, #f5f7fa 0%, #ffffff 100%)',
                minHeight: '100vh',
                fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                margin: 0,
                padding: 0,
            }}
        >
            <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

            {/* Header */}


            {/* Hero Section */}
            <section
                style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '80px 24px',
                    textAlign: 'center',
                }}
            >
                <h1
                    style={{
                        fontSize: '56px',
                        fontWeight: '700',
                        color: '#141413',
                        marginBottom: '20px',
                        lineHeight: '1.2',
                        margin: '0 0 20px 0',
                    }}
                >
                    Build Enterprise Apps
                    <br />
                    In Record Time
                </h1>

                <p
                    style={{
                        fontSize: '18px',
                        color: '#6a9bcc',
                        marginBottom: '40px',
                        lineHeight: '1.6',
                    }}
                >
                    The complete SaaS toolkit for teams that demand velocity,
                    <br />
                    reliability, and developer empowerment.
                </p>

                <div style={{ animation: 'float 3s ease-in-out infinite' }}>
                    <SpeedForgeLogo size={200} />
                </div>

                <div
                    style={{
                        display: 'flex',
                        gap: '16px',
                        justifyContent: 'center',
                        marginBottom: '60px',
                        marginTop: '40px',
                        flexWrap: 'wrap',
                    }}
                >
                    <CTAButton variant="primary" text="Get Started Free" />
                    <CTAButton variant="secondary" text="View Demo" />
                </div>
            </section>

            {/* Features Section */}
            <section
                id="features"
                style={{
                    padding: '100px 0',
                    background: 'rgba(255, 255, 255, 0.5)',
                }}
            >
                <div
                    style={{
                        maxWidth: '1200px',
                        margin: '0 auto',
                        padding: '0 24px',
                    }}
                >
                    <h2
                        style={{
                            fontSize: '42px',
                            fontWeight: '700',
                            color: '#141413',
                            textAlign: 'center',
                            marginBottom: '60px',
                            margin: '0 0 60px 0',
                        }}
                    >
                        Powerful Features Built for Speed
                    </h2>

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns:
                                'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '24px',
                        }}
                    >
                        {features.map((feature, idx) => (
                            <FeatureCard key={idx} {...feature} />
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section
                id="faq"
                style={{
                    padding: '100px 0',
                }}
            >
                <div
                    style={{
                        maxWidth: '1200px',
                        margin: '0 auto',
                        padding: '0 24px',
                    }}
                >
                    <h2
                        style={{
                            fontSize: '42px',
                            fontWeight: '700',
                            color: '#141413',
                            textAlign: 'center',
                            marginBottom: '60px',
                            margin: '0 0 60px 0',
                        }}
                    >
                        Frequently Asked Questions
                    </h2>

                    <div
                        style={{
                            maxWidth: '800px',
                            margin: '0 auto',
                        }}
                    >
                        {faqs.map((faq, idx) => (
                            <FAQItem key={idx} {...faq} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer
                style={{
                    padding: '40px 0',
                    borderTop: '1px solid rgba(106, 155, 204, 0.1)',
                    textAlign: 'center',
                    color: '#888',
                    fontSize: '14px',
                }}
            >
                <div
                    style={{
                        maxWidth: '1200px',
                        margin: '0 auto',
                        padding: '0 24px',
                    }}
                >
                    <p style={{ margin: 0 }}>
                        © 2025 Speed Forge. Built with trust, reliability, and developer
                        empowerment.
                    </p>
                </div>
            </footer>
        </div>
    );
};

// CTA Button Component
const CTAButton = ({ variant, text }) => {
    const [isHovered, setIsHovered] = useState(false);

    const primaryStyles = {
        background: isHovered ? '#5586b8' : '#6a9bcc',
        color: 'white',
        boxShadow: isHovered
            ? '0 8px 24px rgba(106, 155, 204, 0.3)'
            : 'none',
    };

    const secondaryStyles = {
        background: isHovered ? 'rgba(106, 155, 204, 0.1)' : 'transparent',
        color: '#6a9bcc',
        boxShadow: 'none',
    };

    const styles = variant === 'primary' ? primaryStyles : secondaryStyles;

    return (
        <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => {
                console.log(`${text} clicked`);
                // Add your click handler here
            }}
            style={{
                padding: '14px 32px',
                borderRadius: '8px',
                border: `2px solid #6a9bcc`,
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                ...styles,
            }}
        >
            {text}
        </button>
    );
};

export default SpeedForgeLanding;
