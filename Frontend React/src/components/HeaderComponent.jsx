const HeaderComponent = () => {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        {/* Logo */}
        <a href="/" style={styles.logoLink}>
          <img
            src="../public/942830.png"
            style={styles.logoImage}
            alt="Recruitment Automation Tool Logo"
          />
          <span style={styles.logoText}>AutoRec</span>
        </a>

        {/* Navigation Links */}
        <div style={styles.navLinks}>
          {/* Recruiter Tools */}
          <div style={styles.navGroup}>
            <a href="/hr-features" style={styles.navTitle}>
              Recruiter Tools
            </a>
          </div>

          {/* Candidate Tools */}
          <div style={styles.navGroup}>
            <a href="/user-features" style={styles.navTitle}>
              Candidate Tools (Soon)
            </a>
          </div>

          {/* Profile */}
          <div style={styles.navGroup}>
            <a href="/profile" style={styles.navTitle}>
              Profile (Soon)
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;

// Inline Styles
const styles = {
  header: {
    backgroundColor: "#ffffff",
    padding: "0.01rem",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    position: "sticky",
    top: "0",
    zIndex: "1000",
    marginBottom: "30px",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  logoLink: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },
  logoImage: {
    width: "60px",
    height: "60px",
    marginRight: "10px",
  },
  logoText: {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#2575fc",
  },
  navLinks: {
    display: "flex",
    gap: "40px",
  },
  navGroup: {
    textAlign: "center",
  },
  navTitle: {
    fontSize: "1.2rem",
    color: "#2575fc",
    marginBottom: "10px",
    fontWeight: "600",
  },
  navList: {
    listStyle: "none",
    margin: "0",
    padding: "0",
  },
  navItem: {
    marginBottom: "8px",
  },
  navLink: {
    textDecoration: "none",
    color: "#333",
    fontSize: "1rem",
    fontWeight: "500",
    transition: "color 0.3s ease",
  },
  navLinkHover: {
    color: "#6a11cb",
  },
  "@media (max-width: 768px)": {
    nav: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
    navLinks: {
      flexDirection: "column",
      gap: "20px",
      width: "100%",
    },
    navGroup: {
      textAlign: "left",
    },
    logoText: {
      fontSize: "1.2rem",
    },
  },
};
