const HeaderComponent = () => {
  return (
    <header>
      <nav>
        <a href="/" style={{ margin: "0px 0px 0px 0px" }}>
          <img
            src="../public/942830.png"
            style={{ width: "60px", height: "60px", margin: "0px 0px 0px 0px" }}
          />
        </a>
        <ul style={{ margin: "0px 0px 0px 0px", listStyle: "none" }}>
          <h3 style={{ margin: "0px 0px 0px 0px" }}>Recruiter Tools</h3>
          <li>
            <a href="/generate-report">Match Resumes</a>
          </li>
          <li>
            <a href="/user-reports">Recruiter Reports</a>
          </li>
        </ul>

        <ul style={{ margin: "0px 0px 0px 0px", listStyle: "none" }}>
          <h3 style={{ margin: "0px 0px 0px 0px" }}>Candidate Tools (Coming Soon)</h3>
          <li>
            <a href="/#">Score Resume</a>
          </li>
          <li>
            <a href="/#">Update Resume</a>
          </li>
        </ul>

        <ul style={{ margin: "0px 0px 0px 0px", listStyle: "none" }}>
          <h3 style={{ margin: "0px 0px 0px 0px" }}>Profile (Coming Soon)</h3>
          <li>
            <a href="/#">Sign In</a>
          </li>
          <li>
            <a href="/#">Sign Up</a>
          </li>
        </ul>
      </nav>
      <style>{`
        header {
          background-color: #f8f9fa;
          padding: 1rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        nav {
          display: flex;
          justify-content: space-around;
        }
        a {
          text-decoration: none;
          color: #007bff;
          font-weight: bold;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </header>
  );
};

export default HeaderComponent;
