import { useState, useEffect } from "react";
import { getReport } from "../services/ReportService";

export const GetReportsComponent = ({ userId, reportId, handleBack }) => {
  const [reportData, setReportData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchReport = () => {
    setIsLoading(true);
    getReport(userId, reportId)
      .then((response) => {
        setReportData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching report data:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (userId && reportId) {
      fetchReport();
    }
  }, [userId, reportId]);

  const handleView = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div style={styles.container}>
      <button onClick={handleBack} style={styles.backButton}>
        Back to Reports
      </button>
      <h2 style={styles.title}>Report Details</h2>
      {isLoading ? (
        <p style={styles.loadingText}>Loading...</p>
      ) : (
        reportData.length > 0 && (
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
              {reportData.map((applicant, index) => (
                <tr key={applicant[0]} style={styles.tableRow}>
                  <td style={styles.tableCell}>{applicant[0]}</td>
                  <td style={styles.tableCell}>{applicant[1]}</td>
                  <td style={styles.tableCell}>
                    <button
                      onClick={() => handleView(applicant[2])}
                      style={styles.viewButton}
                    >
                      View Resume
                    </button>
                  </td>
                  <td style={styles.tableCell}>{applicant[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )
      )}
    </div>
  );
};

export default GetReportsComponent;

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
  backButton: {
    backgroundColor: "#2575fc",
    color: "#ffffff",
    padding: "10px 20px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    marginBottom: "20px",
    transition: "background-color 0.3s ease",
  },
  backButtonHover: {
    backgroundColor: "#6a11cb",
  },
  title: {
    fontSize: "2rem",
    color: "#2575fc",
    marginBottom: "20px",
    fontWeight: "600",
  },
  loadingText: {
    fontSize: "1.2rem",
    color: "#2575fc",
    textAlign: "center",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
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
    title: {
      fontSize: "1.5rem",
    },
    backButton: {
      fontSize: "0.9rem",
    },
    tableHeader: {
      fontSize: "0.9rem",
    },
    tableCell: {
      fontSize: "0.9rem",
    },
    viewButton: {
      fontSize: "0.8rem",
    },
  },
};
