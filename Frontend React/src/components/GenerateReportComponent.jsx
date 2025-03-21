import { useState, useEffect } from "react";
import { generateReport } from "../services/ReportService";

export const GenerateReportComponent = () => {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingDots, setLoadingDots] = useState("");

  useEffect(() => {
    let timer;
    if (isLoading) {
      timer = setInterval(() => {
        setLoadingDots((prevDots) => {
          if (prevDots === "...") return ".";
          return prevDots + ".";
        });
      }, 500);
    } else {
      setLoadingDots("");
    }
    return () => clearInterval(timer);
  }, [isLoading]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const userId = event.target.userId.value;
    const reportName = event.target.reportName.value;
    const requirementsFile = event.target.requirements.files[0];
    const resumesZipFile = event.target.resumesZip.files[0];

    generateReport(userId, reportName, requirementsFile, resumesZipFile)
      .then((response) => {
        console.log("Generated Report Response:", response.data);
        setResult(response.data.reportData); // Ensure you are accessing the correct property
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error generating report:", error);
        setIsLoading(false);
      });
  };

  const handleButtonClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Generate Report</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label htmlFor="userId" style={styles.label}>
          User ID:
        </label>
        <input
          type="number"
          id="userId"
          name="userId"
          required
          style={styles.input}
        />
        <br />
        <label htmlFor="reportName" style={styles.label}>
          Report Name:
        </label>
        <input
          type="text"
          id="reportName"
          name="reportName"
          required
          style={styles.input}
        />
        <br />
        <label htmlFor="requirements" style={styles.label}>
          Requirements File:
        </label>
        <input
          type="file"
          id="requirements"
          name="requirements"
          required
          style={styles.fileInput}
        />
        <br />
        <label htmlFor="resumesZip" style={styles.label}>
          Resumes Zip File:
        </label>
        <input
          type="file"
          id="resumesZip"
          name="resumesZip"
          required
          style={styles.fileInput}
        />
        <br />
        <button type="submit" style={styles.button}>
          Generate Report
        </button>
      </form>

      {isLoading && (
        <div style={styles.loadingContainer}>
          <h3 style={styles.loadingText}>Generating report{loadingDots}</h3>
        </div>
      )}

      {result && result.results && result.results.length > 0 && (
        <div style={styles.resultContainer}>
          <h3 style={styles.resultTitle}>Report generated successfully:</h3>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableHeader}>Applicant ID</th>
                <th style={styles.tableHeader}>File Name</th>
                <th style={styles.tableHeader}>Actions</th>
                <th style={styles.tableHeader}>Similarity Score</th>
              </tr>
            </thead>
            <tbody>
              {result.results.map((item, index) => (
                <tr key={index} style={styles.tableRow}>
                  <td style={styles.tableCell}>{item.applicantId}</td>
                  <td style={styles.tableCell}>{item.fileName}</td>
                  <td style={styles.tableCell}>
                    <button
                      onClick={() => handleButtonClick(item.originalLink)}
                      style={styles.viewButton}
                    >
                      View Resume
                    </button>
                  </td>
                  <td style={styles.tableCell}>{item.similarityScore}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default GenerateReportComponent;

// Inline Styles
const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f4f7fa",
    color: "#333",
  },
  form: {
    backgroundColor: "#ffffff",
    padding: "20px",
    paddingRight: "40px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
  },
  title: {
    fontSize: "2rem",
    color: "#2575fc",
    marginBottom: "20px",
    fontWeight: "600",
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
  },
  buttonHover: {
    backgroundColor: "#6a11cb",
  },
  loadingContainer: {
    textAlign: "center",
    marginTop: "20px",
  },
  loadingText: {
    fontSize: "1.2rem",
    color: "#2575fc",
  },
  resultContainer: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  resultTitle: {
    fontSize: "1.5rem",
    color: "#2575fc",
    marginBottom: "20px",
    fontWeight: "600",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  tableHeader: {
    backgroundColor: "#2575fc",
    color: "#ffffff",
    padding: "10px",
    textAlign: "left",
  },
  tableRow: {
    borderBottom: "1px solid #ddd",
  },
  tableCell: {
    padding: "10px",
  },
  viewButton: {
    backgroundColor: "#6a11cb",
    color: "#ffffff",
    padding: "5px 10px",
    fontSize: "0.9rem",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  viewButtonHover: {
    backgroundColor: "#2575fc",
  },
  "@media (max-width: 768px)": {
    container: {
      padding: "10px",
    },
    form: {
      padding: "15px",
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
