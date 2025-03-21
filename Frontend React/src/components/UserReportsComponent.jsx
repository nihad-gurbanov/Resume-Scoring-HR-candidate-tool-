import { useState } from "react";
import { getAllReports } from "../services/ReportService";
import { GetReportsComponent } from "./GetReportsComponent"; // Make sure the path is correct

export const UserReportsComponent = () => {
  const [userId, setUserId] = useState("");
  const [reports, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedReportId, setSelectedReportId] = useState(null);

  const fetchReports = () => {
    setIsLoading(true);
    getAllReports(userId)
      .then((response) => {
        setReports(response.data);
      })
      .catch((error) => {
        console.error("Error fetching reports:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleViewReport = (reportId) => {
    setSelectedReportId(reportId); // Set the selected report ID to view details
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchReports();
  };

  const handleBackToReports = () => {
    setSelectedReportId(null); // Reset the selected report ID to go back to the report list
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Recruiter Reports</h2>
      {!selectedReportId ? (
        <div>
          <form onSubmit={handleSubmit} style={styles.form}>
            <label style={styles.label}>
              User ID:
              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                style={styles.input}
              />
            </label>
            <button type="submit" disabled={isLoading} style={styles.button}>
              {isLoading ? "Loading..." : "Fetch Reports"}
            </button>
          </form>

          {isLoading && <p style={styles.loadingText}>Loading reports...</p>}

          {!isLoading && reports.length > 0 && (
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.tableHeader}>Report Name</th>
                  <th style={styles.tableHeader}>Action</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report) => (
                  <tr key={report.reportId} style={styles.tableRow}>
                    <td style={styles.tableCell}>{report.reportName}</td>
                    <td style={styles.tableCell}>
                      <button
                        onClick={() => handleViewReport(report.reportId)}
                        style={styles.viewButton}
                      >
                        View Report
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      ) : (
        <GetReportsComponent
          userId={userId}
          reportId={selectedReportId}
          handleBack={handleBackToReports}
        />
      )}
    </div>
  );
};

export default UserReportsComponent;

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
  title: {
    fontSize: "2rem",
    color: "#2575fc",
    marginBottom: "20px",
    fontWeight: "600",
  },
  form: {
    backgroundColor: "#ffffff",
    padding: "20px",
    paddingRight: "40px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
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
    marginTop: "10px",
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
    input: {
      fontSize: "0.9rem",
    },
    button: {
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
