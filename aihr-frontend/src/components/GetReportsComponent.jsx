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
    <div>
      <button onClick={handleBack}>Back to Reports</button>
      <h2>Report Details</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        reportData.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Applicant ID</th>
                <th>File Name</th>
                <th>Actions</th>
                <th>Similarity Score</th>
              </tr>
            </thead>
            <tbody>
              {reportData.map((applicant, index) => (
                <tr key={applicant[0]}>
                  <td>{applicant[0]}</td>
                  <td>{applicant[1]}</td>
                  <td>
                    <button onClick={() => handleView(applicant[2])}>
                      View Resume
                    </button>
                  </td>
                  <td>{applicant[3]}</td>
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
