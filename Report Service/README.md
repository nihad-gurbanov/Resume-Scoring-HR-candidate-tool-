# Report Service

## Overview

The Report Service is a Spring Boot application designed to generate and manage reports based on job requirements and resumes. It processes job requirement documents and resumes to compute similarity scores, stores the results, and provides endpoints to retrieve the reports and their details.

## Features

- **Report Generation**: Generates reports by processing job requirements and resumes.
- **Data Storage**: Stores report data and applicant details in a PostgreSQL database.
- **Feign Client Integration**: Uses Feign clients to interact with external services.
- **Swagger Documentation**: Provides API documentation for testing and integration.

## Requirements

- Java 17+
- PostgreSQL

## Dependencies

- Spring Boot
- Spring Data JPA
- Spring Cloud OpenFeign
- Jackson Datatype Hibernate
- ModelMapper
- Lombok
- PostgreSQL Driver

## Installation & Setup

1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-repo/report-service.git
   cd report-service
   ```

2. **Configure the Database**
   Update the database configuration in `src/main/resources/application.properties`:
   ```ini
   spring.datasource.url=jdbc:postgresql://localhost:5432/reportservice
   spring.datasource.username=your_db_username
   spring.datasource.password=your_db_password
   ```

3. **Build the Project**
   ```sh
   ./gradlew build
   ```

4. **Run the Application**
   ```sh
   ./gradlew bootRun
   ```

## API Endpoints

### Generate Report

- **Endpoint**: `POST /report/generate`
- **Request**: Multipart form-data containing:
    - `userId` (User ID)
    - `reportName` (Name of the report)
    - `requirements` (Job description file in DOCX, PDF, or Image format)
    - `resumesZip` (ZIP file containing resumes in DOCX, PDF, or Image format)
- **Response**: JSON object with the generated report details.

### Get Report by User ID and Report ID

- **Endpoint**: `GET /report/get`
- **Request**: Query parameters:
    - `userId` (User ID)
    - `reportId` (Report ID)
- **Response**: JSON object with the report details and applicants.

### Get All Reports by User ID

- **Endpoint**: `GET /report/get-all-reports`
- **Request**: Query parameter:
    - `userId` (User ID)
- **Response**: JSON array with all reports for the specified user.

## Logs

The application logs all operations, including report generation and data retrieval. Logs help diagnose issues and track execution flow.

## Notes

- Ensure the PostgreSQL database is running and accessible.
- The application uses Feign clients to interact with external services for report generation.

## Future Enhancements

- Add support for additional document formats.
- Improve error handling and validation.
- Implement caching for frequently accessed data.
- Deploy as a Docker container for easier scalability.
