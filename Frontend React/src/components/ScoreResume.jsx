import { useState } from "react";

export const ScoreResume = () => {
  const [requirements, setRequirements] = useState("");
  const [resumeFile, setResumeFile] = useState(null);
  const [score, setScore] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    ScoreResume(requirements, resumeFile)
      .then((response) => {
        setScore(response.data.score);
      })
      .catch((error) => {
        console.error("Error scoring resume:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Score Resume</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label htmlFor="requirements" style={styles.label}>
          Requirements:
        </label>
        <input
          type="text"
          id="requirements"
          value={requirements}
          onChange={(e) => setRequirements(e.target.value)}
          required
          style={styles.input}
        />
        <br />
        <label htmlFor="resumeFile" style={styles.label}>
          Resume File:
        </label>
        <input
          type="file"
          id="resumeFile"
          onChange={(e) => setResumeFile(e.target.files[0])}
          required
          style={styles.fileInput}
        />
        <br />
        <button type="submit" style={styles.button} disabled={isLoading}>
          {isLoading ? "Scoring..." : "Score Resume"}
        </button>
      </form>

      {isLoading && <p style={styles.loadingText}>Scoring resume...</p>}

      {score !== null && (
        <div style={styles.resultContainer}>
          <h3 style={styles.resultTitle}>Resume Score:</h3>
          <p style={styles.resultText}>{score}</p>
        </div>
      )}
    </div>
  );
};

export default ScoreResume;

// Inline Styles
const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f4f7fa",
    color: "#333",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "2rem",
    color: "#2575fc",
    marginBottom: "20px",
    fontWeight: "600",
    textAlign: "center",
  },
  form: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
    paddingRight: "40px",
  },
  label: {
    fontSize: "1rem",
    fontWeight: "500",
    marginBottom: "10px",
    display: "block",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginBottom: "15px",
  },
  fileInput: {
    width: "100%",
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginBottom: "15px",
  },
  button: {
    backgroundColor: "#2575fc",
    color: "#ffffff",
    padding: "10px 20px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    width: "100%",
  },
  loadingText: {
    fontSize: "1.2rem",
    color: "#2575fc",
    textAlign: "center",
  },
  resultContainer: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  resultTitle: {
    fontSize: "1.5rem",
    color: "#2575fc",
    marginBottom: "20px",
    fontWeight: "600",
  },
  resultText: {
    fontSize: "1.2rem",
    color: "#333",
  },
  "@media (max-width: 768px)": {
    container: {
      padding: "10px",
    },
    title: {
      fontSize: "1.5rem",
    },
    input: {
      fontSize: "0.9rem",
    },
    button: {
      fontSize: "0.9rem",
    },
    resultTitle: {
      fontSize: "1.2rem",
    },
  },
};
