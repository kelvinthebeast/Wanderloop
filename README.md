# 📌 WanderLoop

**WanderLoop** is a visual discovery and idea-sharing platform inspired by Pinterest. The project is structured as a **monorepo** with both frontend and backend in a single GitHub repository.

---

## 📁 Project Structure

```
wanderloop/
│
├── client/         # Frontend - React (or your framework)
│   └── package.json
│
├── backend/        # Backend - Node.js/Express (or your framework)
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### 📦 Step 1: Install dependencies

```bash
# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../backend
npm install
```

---

### 🧪 Step 2: Setup environment variables

Create a `.env` file inside the `backend/` folder.

#### Example `backend/.env`:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/wanderloop
JWT_SECRET=your_jwt_secret
```

*Adjust the variables to match your backend setup.*

---

### 🖥️ Step 3: Run the application

#### Option 1: Run frontend and backend separately

```bash
# Start frontend
cd client
npm start

# Start backend
cd ../backend
npm run dev
```

#### Option 2: Run both at once (if you’ve set up a root-level script)

First, install `concurrently`:

```bash
npm install concurrently --save-dev
```

Then in your root `package.json`:

```json
{
  "scripts": {
    "start": "concurrently \"npm run dev --prefix backend\" \"npm start --prefix client\""
  }
}
```

Now run:

```bash
npm run start
```

---

## 🐳 Optional: Run with Docker

Create a `docker-compose.yml` in the root directory:

```yaml
version: '3'
services:
  backend:
    build: ./backend
    ports:
      - "5000:5000"
    env_file:
      - ./backend/.env

  client:
    build: ./client
    ports:
      - "3000:3000"
```

Then run:

```bash
docker-compose up --build
```

---

## ✨ Key Features (MVP)

- User registration and login
- Create, save, and share image pins
- Pinterest-style visual interface
- Categorize and manage pins by topics

---

## 🧑‍💻 Tech Stack

- **Frontend:** React (Vite or CRA), TailwindCSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT

---

## 📬 Contact

Built with ❤️ by Kelvin.  
Feel free to contribute, fork, or star the project!
