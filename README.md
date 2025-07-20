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
├── tasklab-backend/                ── Backend code (Express + MongoDB)
│   ├── controllers/                ── Request handlers / controller logic
│   │   ├── authController.js       ── Handles signup/login
│   │   └── taskController.js       ── Handles task-related operations
│   ├── database/                   ── DB connection and models
│   │   ├── db.js                   ── MongoDB connection setup
│   │   └── models/
│   │       ├── task.js             ── Task schema
│   │       └── user.js             ── User schema
│   ├── middleware/
│   │   └── verifyToken.js          ── JWT token validation middleware
│   ├── routes/                     ── Route definitions
│   │   ├── auth.js                 ── Auth routes (login/signup)
│   │   └── tasks.js                ── Task routes (CRUD operations)
│   ├── .env                        ── Environment variables (DB URI, JWT secret)
│   └── server.js                   ── Entry point for Express server
│
├── tasklab-frontend/               ── Frontend static files (HTML/CSS/JS)
│   ├── assets/
│   │   └── notes.png               ── Decorative image
│   ├── public/                     ── Main HTML pages
│   │   ├── faq.html                ── FAQ/help page
│   │   ├── index.html              ── Landing page
│   │   ├── login.html              ── Login form
│   │   └── signup.html             ── Signup form
│   ├── scripts/                    ── Frontend JavaScript
│   │   ├── app.js                  ── General DOM/task logic
│   │   ├── login.js                ── Handles login requests
│   │   └── signup.js               ── Handles signup requests
│   └── styles/
│       └── style.css               ── Main stylesheet
│
└── package.json                    ── Project metadata and dependencies


---
