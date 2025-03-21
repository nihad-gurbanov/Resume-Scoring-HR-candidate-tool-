
const CardsComponent = () => {
  return (
    <div style={styles.container}>
      <div style={styles.cardsContainer}>
        <div style={styles.card} onClick={() => window.location.href = '/sign-in'}>
          <h2 style={styles.cardTitle}>Sign In</h2>
          <p style={styles.cardDescription}>Click to sign in your account.</p>
        </div>
        <div style={styles.card} onClick={() => window.location.href = '/sign-up'}>
          <h2 style={styles.cardTitle}>Sign Up</h2>
          <p style={styles.cardDescription}>Click to create an account.</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f4f7fa",
    color: "#333",
    padding: "20px",
  },
  header: {
    marginBottom: "20px",
  },
  nav: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "20px",
  },
  navItem: {
    textDecoration: "none",
    color: "#2575fc",
    fontSize: "1rem",
    fontWeight: "600",
  },
  cardsContainer: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
  },
  card: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    flex: "1 1 calc(50% - 40px)",
    maxWidth: "500px",
  },
  cardTitle: {
    fontSize: "1.8rem",
    marginBottom: "10px",
    color: "#2575fc",
  },
  cardDescription: {
    fontSize: "1.1rem",
    lineHeight: "1.5",
  },
};

export default CardsComponent;