# 🧪 TaskLab – Collaborative Task Rooms for Teams

**TaskLab** is a full-stack web app that lets users create and join shared task rooms (called *TaskLabs*) where they can collaboratively add, claim, and complete tasks — like Google Meet, but for productivity.

---

## 🔧 Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB + Mongoose
- **Auth:** bcrypt + express-session

---

## ✨ Features

- 🔐 User registration and login
- 🏷️ Create TaskLabs with unique codes
- 🚪 Join TaskLabs via shared code
- 📝 Add and manage tasks collaboratively
- 🙋 Claim and ✅ complete tasks
- 🧱 Structured with page-based navigation (no SPA)

---

## 📁 Project Structure
tasklab/
├── tasklab-backend/                   # Backend code (Express + MongoDB)
│   ├── controllers/                   # Request handlers / controller logic
│   │   ├── authController.js          # Handles signup/login
│   │   └── taskController.js          # Handles task operations
│   ├── database/                      # DB connection and Mongoose models
│   │   ├── db.js                      # Connects to MongoDB
│   │   └── models/
│   │       ├── task.js                # Task schema
│   │       └── user.js                # User schema
│   ├── middleware/
│   │   └── verifyToken.js             # JWT auth middleware
│   ├── routes/                        # Express route definitions
│   │   ├── auth.js                    # Auth routes (login/signup)
│   │   └── tasks.js                   # Task routes (CRUD)
│   ├── .env                           # Environment config (DB URI, JWT secret)
│   └── server.js                      # Entry point for the Express server
│
├── tasklab-frontend/                  # Frontend static site
│   ├── assets/
│   │   └── notes.png                  # Decorative image
│   ├── public/                        # HTML pages
│   │   ├── faq.html                   # FAQ/help page
│   │   ├── index.html                 # Landing page
│   │   ├── login.html                 # Login form
│   │   └── signup.html                # Signup form
│   ├── scripts/                       # Frontend JavaScript
│   │   ├── app.js                     # General DOM/task logic
│   │   ├── login.js                   # Login request logic
│   │   └── signup.js                  # Signup request logic
│   └── styles/
│       └── style.css                  # Main CSS file
│
└── package.json                       # Project dependencies and metadata

---
