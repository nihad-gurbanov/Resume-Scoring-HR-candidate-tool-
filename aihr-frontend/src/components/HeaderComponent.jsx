const HeaderComponent = () => {
  return (
    <header>
      <nav>
        <a href="/">Landing Page</a>
        <a href="/generate-report">Generate Report</a>
        <a href="/reports">Reports</a>
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
