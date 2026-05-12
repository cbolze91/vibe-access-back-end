# VibeAccess Back End
![VibeAccess Logo](https://images.unsplash.com/photo-1523998956902-6d4f549de43d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)
The VibeAccess back end is a Node.js and Express API that powers the VibeAccess MERN stack application.

This API manages authentication, event CRUD functionality, RSVP workflows, and MongoDB data storage for the VibeAccess front-end application.

For more information about the full project and front-end experience, visit the front-end repository:

https://github.com/cbolze91/vibe-access-front-end

---

## Project Overview

The VibeAccess back end provides:

- JWT authentication
- Protected API routes
- Event CRUD functionality
- RSVP creation and deletion
- User authorization
- MongoDB database integration
- RESTful API routing

The API is designed to support an accessibility-focused event discovery platform where users can browse, create, edit, delete, and RSVP to events.

---

## Technologies Used

### Back End

- Node.js
- Express
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt
- dotenv
- cors
- morgan

### Development Tools

- Git
- GitHub
- VS Code
- Postman
- Nodemon

---

## Features

### Authentication

- User sign up
- User sign in
- JWT token generation
- Protected routes
- Authorization middleware

### Event Features

- Create events
- Read all events
- View event details
- Edit events
- Delete events

### RSVP Features

- RSVP to events
- View user RSVPs
- Cancel RSVPs

---

## RESTful Routes

### Authentication Routes

| Method | Endpoint | Description |
|---|---|---|
| POST | `/auth/sign-up` | Register a new user |
| POST | `/auth/sign-in` | Sign in an existing user |

### Event Routes

| Method | Endpoint | Description |
|---|---|---|
| GET | `/events` | Get all events |
| GET | `/events/:eventId` | Get one event |
| POST | `/events` | Create event |
| PUT | `/events/:eventId` | Update event |
| DELETE | `/events/:eventId` | Delete event |

### RSVP Routes

| Method | Endpoint | Description |
|---|---|---|
| GET | `/rsvps/my-rsvps` | Get current user's RSVPs |
| POST | `/rsvps` | Create RSVP |
| DELETE | `/rsvps/:rsvpId` | Cancel RSVP |

---

## MongoDB Models

### User

Stores:

- Username
- Hashed password
- Email
- Phone number
- Address

### Event

Stores:

- Event title
- Date
- Time
- Location
- Category
- Price
- Description
- Accessibility features
- RSVP enabled status
- Event creator

### RSVP

Stores:

- User reference
- Event reference
- RSVP status

---

## Environment Variables

Create a `.env` file in the project root:

```env
MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING
SECRET_KEY=YOUR_SECRET_KEY
PORT=3000
````

---

## How to Run Locally

Clone the repository:

```bash
git clone https://github.com/cbolze91/vibe-access-back-end.git
```

Navigate into the project folder:

```bash
cd vibe-access-back-end
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The server should run on:

```txt
http://localhost:3000
```

---

## API Testing

The API was tested using Postman for:

* Authentication
* Protected routes
* CRUD functionality
* RSVP workflows
* Authorization validation

---

## Attributions

- MongoDB Documentation  
  https://www.mongodb.com/docs/

- Express Documentation  
  https://expressjs.com/

- Mongoose Documentation  
  https://mongoosejs.com/

- JWT Authentication  
  https://jwt.io/

- bcrypt  
  https://www.npmjs.com/package/bcrypt

---

## Future Enhancements

Potential future improvements include:

* Search and filtering APIs
* Event categories
* Comment functionality
* Production deployment optimizations

---

## Team

Collaborative full-stack project created by:

* Thara Messeroux
* Christina Boles

Focused on authentication, CRUD workflows, RSVP systems, and accessibility-focused event discovery.
