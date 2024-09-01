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
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Generate Report</h2>
        <label htmlFor="userId">User ID:</label>
        <input type="number" id="userId" name="userId" required />
        <br />
        <label htmlFor="reportName">Report Name:</label>
        <input type="text" id="reportName" name="reportName" required />
        <br />
        <label htmlFor="requirements">Requirements File:</label>
        <input type="file" id="requirements" name="requirements" required />
        <br />
        <label htmlFor="resumesZip">Resumes Zip File:</label>
        <input type="file" id="resumesZip" name="resumesZip" required />
        <br />
        <button type="submit">Generate Report</button>
      </form>

      {isLoading && (
        <div>
          <h3>Generating report{loadingDots}</h3>
        </div>
      )}

      {result && result.results && result.results.length > 0 && (
        <div>
          <h3>Report generated successfully:</h3>
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
              {result.results.map((item, index) => (
                <tr key={index}>
                  <td>{item.applicantId}</td>
                  <td>{item.fileName}</td>
                  <td>
                    <button 
                      onClick={() => handleButtonClick(item.originalLink)}
                    >
                      View Resume
                    </button>
                  </td>
                  <td>{item.similarityScore}</td>
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
