
# 📝 To-Do List Web App (Node.js + Express + MongoDB + EJS)
[🚀 Live Demo]- 

A clean and responsive To-Do List application built using Node.js, Express.js, MongoDB, and EJS templating. Users can add, edit, prioritize, and delete tasks — all powered by RESTful HTTP methods (POST, PUT, DELETE).

- ✅ Add new tasks to the list
- 📝 Edit existing tasks using HTTP PUT
- ❌ Delete tasks using HTTP DELETE
- 📄 Render tasks dynamically using EJS
- 🌐 MongoDB Atlas integration
- 🔁 Uses RESTful routing and standard HTTP verbs
- 🛡️ Includes basic input validation and error logging

Live Preview
https:

🧰 Tech Stack
Layer	Technology
Frontend	EJS, HTML5, CSS3
Backend	Node.js, Express
Database	MongoDB + Mongoose
Utilities	body-parser, method-override
📦 Installation
Clone the repo:
git clone https://github.com/yourusername/todo-app.git
cd todo-app

2. **Install dependencies:**

```bash

npm install

3. **Update your MongoDB URI in server.js:**

mongoose.connect('your_mongodb_uri', {...});

4. **Run the app:**

```bash

node app.js

## 📂 Project Structure

first-step/
├── views/
│   └── list.ejs           # Main template
├── public/
│   └── css/
│       └── style.css      # Dark theme stylesheet
├── server.js              # Express application
├── package.json
└── README.md

## 🧑‍💻 Author

**Krushna Borude**
