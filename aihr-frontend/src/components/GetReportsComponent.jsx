import { useState, useEffect } from "react";
import { getReport } from "../services/ReportService";

export const GetReportsComponent = () => {
  const [userId, setUserId] = useState("");
  const [reportId, setReportId] = useState("");
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

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchReport();
  };

  useEffect(() => {
    if (userId && reportId) {
      fetchReport(); // Directly call the API fetch here
    }
  }, [userId, reportId]);

  const handleView = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div>
      <h2>Report</h2>
      <form onSubmit={handleSubmit}>
        <label>
          User ID:
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </label>
        <br />
        <label>
          Report ID:
          <input
            type="text"
            value={reportId}
            onChange={(e) => setReportId(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Get Report"}
        </button>
      </form>

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
