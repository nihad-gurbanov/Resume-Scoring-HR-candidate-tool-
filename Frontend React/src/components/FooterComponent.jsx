const FooterComponent = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        {/* About Section */}
        <div style={styles.footerSection}>
          <h3 style={styles.footerTitle}>About Us</h3>
          <p style={styles.footerText}>
            We are dedicated to revolutionizing the recruitment process with our
            advanced automation tools. Our mission is to make hiring faster,
            smarter, and more efficient for both recruiters and candidates.
          </p>
        </div>

        {/* Quick Links Section */}
        <div style={styles.footerSection}>
          <h3 style={styles.footerTitle}>Quick Links</h3>
          <ul style={styles.footerList}>
            <li style={styles.footerItem}>
              <a href="/generate-report" style={styles.footerLink}>
                Match Resumes
              </a>
            </li>
            <li style={styles.footerItem}>
              <a href="/user-reports" style={styles.footerLink}>
                Recruiter Reports
              </a>
            </li>
            <li style={styles.footerItem}>
              <a href="/score-resume" style={styles.footerLink}>
                Score Resume
              </a>
            </li>
            <li style={styles.footerItem}>
              <a href="/update-resume" style={styles.footerLink}>
                Update Resume
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div style={styles.footerSection}>
          <h3 style={styles.footerTitle}>Contact Us</h3>
          <p style={styles.footerText}>
            Email: support@recruitmenttool.com
            <br />
            Phone: +1 (123) 456-7890
            <br />
            Address: 123 Recruitment St, Tech City, USA
          </p>
          <div style={styles.socialIcons}>
            <a href="https://facebook.com" style={styles.socialLink}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
                alt="Facebook"
                style={styles.socialIcon}
              />
            </a>
            <a href="https://twitter.com" style={styles.socialLink}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/124/124021.png"
                alt="Twitter"
                style={styles.socialIcon}
              />
            </a>
            <a href="https://linkedin.com" style={styles.socialLink}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/124/124011.png"
                alt="LinkedIn"
                style={styles.socialIcon}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div style={styles.copyrightSection}>
        <p style={styles.copyrightText}>
          &copy; {new Date().getFullYear()} Recruitment Automation Tool. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent;

// Inline Styles
const styles = {
  footer: {
    backgroundColor: "#2575fc",
    color: "#ffffff",
    padding: "40px 20px 20px 20px",
    marginTop: "40px",
  },
  footerContent: {
    display: "flex",
    justifyContent: "space-around",
    maxWidth: "1200px",
    margin: "0 auto",
    flexWrap: "wrap",
    gap: "20px",
  },
  footerSection: {
    flex: "1 1 300px",
    marginBottom: "20px",
  },
  footerTitle: {
    fontSize: "1.5rem",
    marginBottom: "15px",
    fontWeight: "600",
  },
  footerText: {
    fontSize: "1rem",
    lineHeight: "1.6",
    margin: "0",
  },
  footerList: {
    listStyle: "none",
    padding: "0",
    margin: "0",
  },
  footerItem: {
    marginBottom: "10px",
  },
  footerLink: {
    textDecoration: "none",
    color: "#ffffff",
    fontSize: "1rem",
    transition: "color 0.3s ease",
  },
  footerLinkHover: {
    color: "#6a11cb",
  },
  socialIcons: {
    display: "flex",
    gap: "10px",
    marginTop: "15px",
  },
  socialLink: {
    display: "inline-block",
  },
  socialIcon: {
    width: "24px",
    height: "24px",
    transition: "transform 0.3s ease",
  },
  socialIconHover: {
    transform: "scale(1.2)",
  },
  copyrightSection: {
    textAlign: "center",
    marginTop: "20px",
    paddingTop: "20px",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
  },
  copyrightText: {
    fontSize: "0.9rem",
    margin: "0",
  },
  "@media (max-width: 768px)": {
    footerContent: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
    footerSection: {
      flex: "1 1 100%",
    },
  },
};
