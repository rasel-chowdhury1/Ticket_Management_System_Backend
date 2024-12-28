# Ticket Management System

## Objective
Develop a backend system for managing bus tickets with the ability for users to purchase tickets for specific buses at specified time periods. The system includes authentication, role-based management (admin and user), and ticket purchasing functionality.

---

## Features

### Core Functionalities
1. **User Authentication**:
   - User registration, login, and logout.
   - Password hashing and JWT-based authentication.
   - Role-based authorization (Admin, User).

2. **Admin Functionalities**:
   - Add, update, and delete bus information.
   - Upload, update, and delete tickets for buses with specific prices and time slots.

3. **User Functionalities**:
   - View available buses and tickets.
   - Purchase tickets for a specific bus at a specified time.

4. **Additional Requirements**:
   - Proper validation and error handling for all endpoints.
   - Modular design pattern for scalability and maintainability.

---

## Technology Stack
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB with Mongoose.
- **Validation**: Zod.
- **Language**: TypeScript .

---

## Required APIs

### Authentication APIs
- **POST /auth/register**: User registration.
- **POST /auth/login**: User login.
- **POST /auth/logout**: User logout.

### Admin APIs
- **POST /admin/bus**: Add a new bus.
- **PUT /admin/bus/:id**: Update bus information.
- **DELETE /admin/bus/:id**: Delete a bus.
- **POST /admin/ticket**: Upload a new ticket for a specific bus and time.
- **PUT /admin/ticket/:id**: Update ticket information.
- **DELETE /admin/ticket/:id**: Delete a ticket.

### User APIs
- **GET /buses**: View all available buses.
- **GET /tickets**: View available tickets for specific buses and time periods.
- **POST /tickets/purchase**: Purchase a ticket for a specific bus and time.

---

## ER Diagram
Provide an ER diagram outlining the relationships between users, buses, and tickets. *(Include a link or attach the diagram here.)*

---

## API Documentation
Submit Postman API Documentation with all endpoints, their request/response structures, and sample payloads. *(Include a link to the documentation here.)*

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ticket-management-system
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     PORT=<port-number>
     MONGO_URI=<mongodb-connection-string>
     JWT_SECRET=<your-secret-key>
     ```

4. Run the application:
   ```bash
   npm run dev
   ```



---

## Contact
For inquiries or support, contact:
- **Email**: [chowhduryrasel040@gmail.com]
- **GitHub**: [rasel-chowdhury1](https://github.com/rasel-chowdhury1)

