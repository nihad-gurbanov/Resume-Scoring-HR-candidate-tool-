import React from "react";

export const HomeComponent = () => {
  return (
    <div style={styles.homeContainer}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <h1 style={styles.heroTitle}>
          Welcome to the Best Recruitment Automation Tool
        </h1>
        <p style={styles.heroDescription}>
          Revolutionize your recruitment process with our advanced automation
          tool. Generate insightful reports, match candidates to jobs, and
          streamline your workflow effortlessly.
        </p>
        <div style={styles.ctaButtons}>
          <button style={styles.ctaButton}>Get Started</button>
          <button style={styles.ctaButtonOutline}>Learn More</button>
        </div>
      </div>

      {/* Features Section */}
      <div style={styles.featuresSection}>
        {/* Recruiters Feature Card */}
        <div style={styles.featureCard}>
          <div style={styles.iconContainer}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1995/1995485.png"
              alt="Recruiter Icon"
              style={styles.icon}
            />
          </div>
          <h2 style={styles.featureTitle}>For Recruiters</h2>
          <ul style={styles.featureList}>
            <li style={styles.listItem}>
              Generate detailed reports based on your data.
            </li>
            <li style={styles.listItem}>
              Retrieve reports using user ID and report ID.
            </li>
            <li style={styles.listItem}>
              Analyze candidate-job match scores efficiently.
            </li>
          </ul>
        </div>

        {/* Candidates Feature Card */}
        <div style={styles.featureCard}>
          <div style={styles.iconContainer}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Candidate Icon"
              style={styles.icon}
            />
          </div>
          <h2 style={styles.featureTitle}>For Candidates</h2>
          <ul style={styles.featureList}>
            <li style={styles.listItem}>
              Upload resume and job requirements to get match scores.
            </li>
            <li style={styles.listItem}>
              Update your job preferences anytime.
            </li>
            <li style={styles.listItem}>
              Discover your compatibility with target jobs instantly.
            </li>
          </ul>
        </div>
      </div>

      {/* How It Works Section */}
      <div style={styles.howItWorksSection}>
        <h2 style={styles.sectionTitle}>How It Works</h2>
        <div style={styles.stepsContainer}>
          <div style={styles.step}>
            <div style={styles.stepIcon}>1</div>
            <h3 style={styles.stepTitle}>Sign Up</h3>
            <p style={styles.stepDescription}>
              Create an account to get started. It’s quick and easy!
            </p>
          </div>
          <div style={styles.step}>
            <div style={styles.stepIcon}>2</div>
            <h3 style={styles.stepTitle}>Upload Data</h3>
            <p style={styles.stepDescription}>
              Upload resumes, job requirements, or other relevant data.
            </p>
          </div>
          <div style={styles.step}>
            <div style={styles.stepIcon}>3</div>
            <h3 style={styles.stepTitle}>Generate Reports</h3>
            <p style={styles.stepDescription}>
              Get detailed reports and match scores in seconds.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div style={styles.testimonialsSection}>
        <h2 style={styles.sectionTitle}>What Our Users Say</h2>
        <div style={styles.testimonialsContainer}>
          <div style={styles.testimonial}>
            <p style={styles.testimonialText}>
              "This tool has transformed our recruitment process. Highly
              recommended!"
            </p>
            <p style={styles.testimonialAuthor}>- John Doe, HR Manager</p>
          </div>
          <div style={styles.testimonial}>
            <p style={styles.testimonialText}>
              "I found my dream job thanks to the match score feature. Amazing!"
            </p>
            <p style={styles.testimonialAuthor}>- Jane Smith, Candidate</p>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Ready to Transform Recruitment?</h2>
        <p style={styles.ctaDescription}>
          Join thousands of recruiters and candidates who are already benefiting
          from our tool.
        </p>
        <button style={styles.ctaButton}>Sign Up Now</button>
      </div>
    </div>
  );
};

export default HomeComponent;

// Inline Styles
const styles = {
  homeContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f4f7fa",
    color: "#333",
  },
  heroSection: {
    textAlign: "center",
    padding: "60px 20px",
    background: "linear-gradient(135deg, #6a11cb, #2575fc)",
    color: "white",
    borderRadius: "15px",
    marginBottom: "40px",
    animation: "fadeIn 1.5s ease-in-out",
  },
  heroTitle: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    fontWeight: "700",
  },
  heroDescription: {
    fontSize: "1.2rem",
    maxWidth: "800px",
    margin: "0 auto",
    lineHeight: "1.6",
  },
  ctaButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
  },
  ctaButton: {
    backgroundColor: "#ffffff",
    color: "#2575fc",
    padding: "10px 20px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  ctaButtonOutline: {
    backgroundColor: "transparent",
    color: "#ffffff",
    padding: "10px 20px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "2px solid #ffffff",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  featuresSection: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "40px",
  },
  featureCard: {
    background: "white",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    flex: "1 1 calc(50% - 40px)",
    maxWidth: "500px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  iconContainer: {
    textAlign: "center",
    marginBottom: "20px",
  },
  icon: {
    width: "60px",
    height: "60px",
  },
  featureTitle: {
    fontSize: "1.8rem",
    marginBottom: "15px",
    color: "#2575fc",
  },
  featureList: {
    listStyle: "none",
    padding: "0",
  },
  listItem: {
    marginBottom: "10px",
    fontSize: "1.1rem",
    lineHeight: "1.5",
    paddingLeft: "20px",
    position: "relative",
  },
  listItemBefore: {
    content: '"✔"',
    position: "absolute",
    left: "0",
    color: "#6a11cb",
  },
  howItWorksSection: {
    textAlign: "center",
    marginBottom: "40px",
  },
  sectionTitle: {
    fontSize: "2rem",
    color: "#2575fc",
    marginBottom: "20px",
    fontWeight: "600",
  },
  stepsContainer: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  step: {
    flex: "1 1 calc(33.33% - 40px)",
    maxWidth: "300px",
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  stepIcon: {
    width: "50px",
    height: "50px",
    backgroundColor: "#2575fc",
    color: "white",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5rem",
    fontWeight: "600",
    margin: "0 auto 15px auto",
  },
  stepTitle: {
    fontSize: "1.5rem",
    color: "#2575fc",
    marginBottom: "10px",
  },
  stepDescription: {
    fontSize: "1rem",
    lineHeight: "1.5",
  },
  testimonialsSection: {
    textAlign: "center",
    marginBottom: "40px",
  },
  testimonialsContainer: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  testimonial: {
    flex: "1 1 calc(50% - 40px)",
    maxWidth: "500px",
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  testimonialText: {
    fontSize: "1.1rem",
    lineHeight: "1.5",
    marginBottom: "10px",
  },
  testimonialAuthor: {
    fontSize: "1rem",
    fontWeight: "600",
    color: "#2575fc",
  },
  ctaSection: {
    textAlign: "center",
    padding: "40px 20px",
    background: "linear-gradient(135deg, #6a11cb, #2575fc)",
    color: "white",
    borderRadius: "15px",
    marginBottom: "40px",
  },
  ctaTitle: {
    fontSize: "2rem",
    marginBottom: "20px",
    fontWeight: "700",
  },
  ctaDescription: {
    fontSize: "1.2rem",
    maxWidth: "800px",
    margin: "0 auto 30px auto",
    lineHeight: "1.6",
  },
  "@keyframes fadeIn": {
    from: {
      opacity: "0",
      transform: "translateY(20px)",
    },
    to: {
      opacity: "1",
      transform: "translateY(0)",
    },
  },
  "@media (max-width: 768px)": {
    heroTitle: {
      fontSize: "2rem",
    },
    heroDescription: {
      fontSize: "1rem",
    },
    featuresSection: {
      flexDirection: "column",
    },
    featureCard: {
      flex: "1 1 100%",
    },
    stepsContainer: {
      flexDirection: "column",
    },
    step: {
      flex: "1 1 100%",
    },
    testimonialsContainer: {
      flexDirection: "column",
    },
    testimonial: {
      flex: "1 1 100%",
    },
  },
};
