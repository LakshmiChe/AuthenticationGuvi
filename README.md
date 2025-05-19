
# Authentication and Authorization with Bearer Tokens

## Overview
This project demonstrates how to implement user authentication and authorization using Bearer tokens in a Node.js application. The application follows the MVC pattern, uses JWT for authentication, and connects to a MongoDB database.

---

## Features
- **User Registration**: Create new user accounts with hashed passwords.
- **User Login**: Authenticate users and issue a JWT.
- **Protected Routes**: Access user information via routes protected by JWT middleware.
- **API Documentation**: Endpoints are tested and documented using Postman.
- **Error Handling**: Comprehensive validation and error responses.

---

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Authentication**: JSON Web Token (JWT)
- **API Testing**: Postman

---

## Installation and Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (Local or Atlas)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/auth-project.git
   cd auth-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the project root and add:
   ```plaintext
   PORT=3000
   MONGO_URI=<Your MongoDB Connection URI>
   JWT_SECRET=<Your JWT Secret Key>
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. For development with auto-restart:
   ```bash
   npm run dev
   ```

---

## API Endpoints

### Base URL
`https://authentication-guvi-lakshmiches-projects.vercel.app/`

### Endpoints
#### 1. **Register User**
- **POST** `/api/auth/register`
- **Body**:
  ```json
  {
    "username": "testuser",
    "email": "test@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "message": "User registered successfully"
  }
  ```

#### 2. **Login User**
- **POST** `/api/auth/login`
- **Body**:
  ```json
  {
    "email": "test@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "token": "<JWT-TOKEN>"
  }
  ```

#### 3. **Get User Info**
- **GET** `/api/auth/user-info`
- **Headers**:
  ```plaintext
  Authorization: Bearer <JWT-TOKEN>
  example: 
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MmIxMDc1MThiNmY5NWU1ODliMDJlNyIsInVzZXJuYW1lIjoidGVzdHVzZXIyIiwiaWF0IjoxNzQ3NjUyNzg1LCJleHAiOjE3NDc2NTYzODV9.q0bAaHcC4rUl6cn3D3ZYBm1rB2nWznuc02If7I7dlbY
  ```
- **Response**:
  ```json
  {
    "id": "<USER-ID>",
    "username": "testuser"
  }
  ```

---

## Project Structure
```plaintext
auth-project/
├── controllers/
│   ├── authController.js
├── middlewares/
│   ├── authMiddleware.js
├── models/
│   ├── User.js
├── routes/
│   ├── authRoutes.js
├── config/
│   ├── db.js
├── .env
├── server.js
├── package.json
├── README.md
```

---

## Testing with Postman
1. Import the provided Postman collection or manually create requests for each endpoint.
2. Use the `/register` endpoint to create a user.
3. Use the `/login` endpoint to get a JWT.
4. Use the `/user-info` endpoint with the JWT to fetch user details.

---

## Future Improvements
- Add refresh token support.
- Implement role-based or claim-based authorization.
- Extend user model with additional fields like profile picture or bio.
- Use a service layer for better separation of concerns.

---

## License
This project is licensed under the MIT License.
