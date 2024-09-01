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
    <div>
      <h2>Recruiter Reports</h2>
      {!selectedReportId ? (
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              User ID:
              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </label>
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Loading..." : "Fetch Reports"}
            </button>
          </form>

          {isLoading && <p>Loading reports...</p>}

          {!isLoading && reports.length > 0 && (
            <table>
              <thead>
                <tr>
                  <th>Report Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report) => (
                  <tr key={report.reportId}>
                    <td>{report.reportName}</td>
                    <td>
                      <button onClick={() => handleViewReport(report.reportId)}>
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
