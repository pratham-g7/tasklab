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
<pre> \`\`\`text 
tasklab/
├── tasklab-backend/                  # Backend code (Express + MongoDB)
│   ├── controllers/                  # Request handlers
│   │   ├── authController.js         # Handles signup/login logic
│   │   └── taskController.js         # Handles task operations
│   ├── database/                     # DB connection and schemas
│   │   ├── db.js                     # Connects to MongoDB
│   │   └── models/
│   │       ├── task.js               # Task Mongoose schema
│   │       └── user.js               # User Mongoose schema
│   ├── middleware/
│   │   └── verifyToken.js            # JWT validation middleware
│   ├── routes/                       # Express route handlers
│   │   ├── auth.js                   # Auth routes (login/signup)
│   │   └── tasks.js                  # Task routes (CRUD)
│   ├── .env                          # Environment variables (DB URI, JWT secret)
│   └── server.js                     # Main Express server file
│
├── tasklab-frontend/                 # Frontend files (HTML/CSS/JS)
│   ├── assets/
│   │   └── notes.png                 # Decorative image
│   ├── public/                       # Static HTML pages
│   │   ├── faq.html                  # FAQ/help page
│   │   ├── index.html                # Landing page
│   │   ├── login.html                # Login page
│   │   └── signup.html               # Signup page
│   ├── scripts/                      # Frontend JavaScript logic
│   │   ├── app.js                    # Main UI logic
│   │   ├── login.js                  # Login request handler
│   │   └── signup.js                 # Signup request handler
│   └── styles/
│       └── style.css                 # Main stylesheet
│
└── package.json                      # Project metadata and dependencies
\`\`\` </pre>

---
