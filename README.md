# Ticket Management System   ## [Live URL](https://ticket-management-system-kappa.vercel.app)

## Objective
Develop a backend system for managing bus tickets with the ability for users to purchase tickets for specific buses at specified time periods. The system includes authentication, role-based management (admin and user), and ticket purchasing functionality.

---

## Key Features

1. **Authentication and Authorization**
   - Secure sign-in, sign-up and logout for users and admins using JWT.
   - Role-based access control for different functionalities.

2. **Admin Capabilities**
   - Create, update, and delete of bus and ticket listing listings.

3. **User Capabilities**
   - View all available buses and specific bus details.
   - purchase a ticket and view all available tickets .

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

- **Backend**: TypeScript, Express.js
- **Authentication**: JWT (JSON Web Tokens), bcrypt
- **Database**: MongoDB with Mongoose ODM
- **Validation**: Zod for type validation
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
Submit Postman API Documentation with all endpoints, their request/response structures, and sample payloads. *([Include a link to the documentation here.](https://documenter.getpostman.com/view/13933973/2sAYJ6CKyQ))*

---

## Getting Started

To use this project, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/rasel-chowdhury1/Ticket_Management_System_Backend.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd Ticket_Management_System
    ```

3. **Install the dependencies:**

    ```bash
    npm install
    ```

4. **Set up environment variables:**

    Create a `.env` file in the root directory with the following content:

    ```plaintext
    MONGODB_URI=mongodb://localhost:27017/car-rental
    JWT_SECRET=your_jwt_secret
    PORT=3000
    ```

5. **Run the development server:**

    ```bash
    npm start
    ```

6. **Access the application:**

    Open your browser and go to `https://ticket-management-system-kappa.vercel.app`.

## Feedback

If you have any feedback or encounter any issues, please don't hesitate to inform me.

Thank you for using our bus management System! ❤️

## Contact
For inquiries or support, contact:
- **Email**: [chowhduryrasel040@gmail.com]
- **GitHub**: [rasel-chowdhury1](https://github.com/rasel-chowdhury1)


