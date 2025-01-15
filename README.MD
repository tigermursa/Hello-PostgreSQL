# User Management API

This is a production-ready User Management API built with **Node.js**, **Express**, and **Sequelize** (PostgreSQL). The API supports CRUD operations for managing user data.

---

## Features

- Create, Read, Update, and Delete (CRUD) operations for users.
- Custom error handling for improved developer experience.
- Optimized database interaction for production-level performance.
- JSONB fields for nested data (e.g., addresses, phone numbers, education).
- Follows RESTful API principles.

---

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- PostgreSQL (>= 13.x)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/user-management-api.git
   cd user-management-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables in `.env`:

   ```env
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=your_database_name
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   PORT=5000
   ```

4. Run the database migration and start the server:

   ```bash
   npm start
   ```

5. Access the API at [http://localhost:5000](http://localhost:5000).

---

## API Endpoints

### Base URL: `/api/users`

### 1. **Create a User**

- **URL**: `POST /api/users`
- **Description**: Create a new user.
- **Request Body**:
  ```json
  {
    "username": "JohnDoe",
    "email": "johndoe@example.com",
    "gender": "male",
    "age": 30,
    "address": [
      {
        "presentAddress": "123 Present St",
        "permanentAddress": "456 Permanent St"
      }
    ],
    "phone": [
      {
        "numberOne": "1234567890",
        "numberTwo": "0987654321"
      }
    ],
    "education": {
      "school": {
        "schoolOne": "ABC High School",
        "schoolTwo": "XYZ Grammar School"
      },
      "college": "DEF College",
      "university": "GHI University"
    },
    "sscBoard": "National Board",
    "sscGPA": 4.9,
    "hscBoard": "State Board",
    "hscGPA": 4.8,
    "universityRoll": "UNI12345"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "User created successfully",
    "user": { ...userData }
  }
  ```

---

### 2. **Get All Users**

- **URL**: `GET /api/users`
- **Description**: Retrieve all users.
- **Response**:
  ```json
  {
    "success": true,
    "message": "Users retrieved successfully",
    "users": [ ... ]
  }
  ```

---

### 3. **Get Single User by ID**

- **URL**: `GET /api/users/:id`
- **Description**: Retrieve a user by their ID.
- **Response**:
  ```json
  {
    "success": true,
    "message": "User retrieved successfully",
    "user": { ...userData }
  }
  ```

---

### 4. **Update a User**

- **URL**: `PUT /api/users/:id`
- **Description**: Update user information by their ID.
- **Request Body**:
  ```json
  {
    "username": "UpdatedName",
    "email": "updated@example.com"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "User updated successfully",
    "updatedUser": { ...updatedUserData }
  }
  ```

---

### 5. **Delete a User**

- **URL**: `DELETE /api/users/:id`
- **Description**: Delete a user by their ID.
- **Response**:
  ```json
  {
    "success": true,
    "message": "User deleted successfully"
  }
  ```
