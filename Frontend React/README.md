# Recruitment Automation Tool Frontend

This is the frontend application for the **Recruitment Automation Tool**, built using **React** and **Vite**. The application provides tools for recruiters and candidates to streamline the hiring process, including generating reports, scoring resumes, and managing user profiles.

## Features

- **Recruiter Tools**:

  - Generate detailed reports by uploading job requirements and resumes.
  - View and manage recruiter reports.
  - Match candidates with job requirements.

- **Candidate Tools**:

  - Score resumes based on job requirements.
  - Update resumes with personal details, experience, and education.

- **User Management**:

  - Sign up and sign in functionality.
  - Profile management.

- **Responsive Design**:
  - Fully responsive UI for both desktop and mobile devices.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/recruitment-automation-tool-frontend.git
   cd recruitment-automation-tool-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the application in your browser at `http://localhost:5173`.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run preview`: Preview the production build.
- `npm run lint`: Run ESLint to check for code quality issues.

## Configuration

### API Configuration

The API base URL is defined in the `ReportService.js` file. Update the `API_URL` constant to match your backend server's URL:

```js
const API_URL = "http://localhost:8081/report";
```

### Routing

The application uses **React Router** for navigation. Routes are defined in `App.jsx`:

- `/`: Home page
- `/generate-report`: Generate reports for recruiters
- `/user-reports`: View recruiter reports
- `/sign-in`: Sign in page
- `/sign-up`: Sign up page
- `/score-resume`: Score resumes for candidates
- `/update-resume`: Update resumes for candidates
- `/hr-features`: Recruiter tools
- `/user-features`: Candidate tools

## Dependencies

- **React**: UI library
- **React Router**: Routing library
- **Axios**: HTTP client for API requests
- **Vite**: Build tool for fast development
- **TailwindCSS**: Utility-first CSS framework (optional, not actively used in this project)

## Development

### Linting

The project uses **ESLint** for code quality checks. Run the following command to lint the code:

```bash
npm run lint
```

### Styling

The project uses **inline styles** for components. Global styles are defined in `App.css`.

## Deployment

1. Build the application:

   ```bash
   npm run build
   ```

2. Serve the `dist/` folder using a static file server or deploy it to a hosting platform like **Netlify**, **Vercel**, or **GitHub Pages**.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push the branch.
4. Open a pull request.

## Acknowledgments

- Built with [React](https://reactjs.org/) and [Vite](https://vitejs.dev/).
- Icons from [Flaticon](https://www.flaticon.com/).
