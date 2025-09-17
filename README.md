📌 Task Manager API

A simple RESTful API for managing tasks, built with Node.js and Express.js.
This project demonstrates CRUD operations, error handling, input validation, and in-memory data storage.

🚀 Features

Create, Read, Update, and Delete (CRUD) tasks

Input validation (title required, description optional, completed as boolean)

Error handling with proper HTTP status codes

In-memory storage (no database needed)

Tested with Postman or curl

🛠️ Tech Stack

Node.js

Express.js

📂 Project Structure
task-manager-api/
│── index.js        # Main entry point
│── package.json    # Project metadata & dependencies
│── README.md       # Documentation
│── .gitignore      # Ignored files (e.g., node_modules)

⚡ Installation & Setup

Clone the repository:

git clone https://github.com/airtribe-projects/task-manager-api-janardanmalik.git
cd task-manager-api-janardanmalik


Install dependencies:

npm install


Start the server:

node index.js


By default, the server runs at http://localhost:3000

🔑 API Endpoints
1️⃣ Get all tasks
GET /tasks

2️⃣ Get task by ID
GET /tasks/:id

3️⃣ Create a new task
POST /tasks


Request Body (JSON):

{
  "title": "Learn Express",
  "description": "Understand routing and middleware"
}

4️⃣ Update a task
PUT /tasks/:id


Request Body (JSON):

{
  "title": "Learn Express.js",
  "description": "Updated description",
  "completed": true
}

5️⃣ Delete a task
DELETE /tasks/:id

✅ Example with curl
# Create a task
curl -X POST http://localhost:3000/tasks \
-H "Content-Type: application/json" \
-d '{"title":"Learn Node.js","description":"Build REST APIs"}'
