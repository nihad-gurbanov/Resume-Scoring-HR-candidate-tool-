# User Service

## Overview
The User Service is a Spring Boot application that provides RESTful APIs for managing users. It supports operations such as registering a new user, retrieving user details, updating user information, and deleting a user.

## Features
- Register a new user
- Retrieve user details by ID
- Retrieve all users
- Update user information
- Delete a user

## Technologies Used
- Java 17
- Spring Boot 3.3.2
- Spring Data JPA
- PostgreSQL
- Testcontainers
- JaCoCo for code coverage
- Gradle for build automation

## Prerequisites
- Java 17
- Gradle
- Docker (for Testcontainers)

## Getting Started

### Clone the Repository
```sh
git clone https://github.com/nihad-gurbanov/user-service.git
cd user-service
```

### Build the Project
```sh
./gradlew clean build
```

### Run the Application
```sh
./gradlew bootRun
```

### Running Tests
To run the tests and generate a code coverage report:
```sh
./gradlew test jacocoTestReport
```

## API Endpoints

### Register a User
- **URL**: `/api/user/register`
- **Method**: POST
- **Request Body**:
  ```json
  {
    "firstName": "Nihad",
    "lastName": "Gurbanov",
    "email": "hello@nihadgurbanov.com"
  }
  ```
- **Response**: `User created successfully`

### Get User by ID
- **URL**: `/api/user/{id}`
- **Method**: GET
- **Response**:
  ```json
  {
    "userId": 1,
    "firstName": "Nihad",
    "lastName": "Gurbanov",
    "email": "hello@nihadgurbanov.com"
  }
  ```

### Get All Users
- **URL**: `/api/user/all`
- **Method**: GET
- **Response**:
  ```json
  [
    {
      "userId": 1,
      "firstName": "Nihad",
      "lastName": "Gurbanov",
      "email": "hello@nihadgurbanov.com"
    }
  ]
  ```

### Update User
- **URL**: `/api/user/{id}`
- **Method**: PUT
- **Request Body**:
  ```json
  {
    "firstName": "Nihad",
    "lastName": "Gurbanov",
    "email": "newemail@nihadgurbanov.com"
  }
  ```
- **Response**: `User updated successfully`

### Delete User
- **URL**: `/api/user/{id}`
- **Method**: DELETE
- **Response**: `User deleted successfully`
