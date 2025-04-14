# Moshi-Moshi

**Moshi-Moshi** is a full-stack real-time chat application built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js) and **Socket.io**. It offers seamless communication with an intuitive UI, secure authentication, and scalable architecture.

---

## 🚀 Features

- **Real-Time Messaging** with Socket.io  
- **JWT-based Authentication & Authorization**  
- **Responsive Design** for desktop and mobile  
- **MongoDB Integration** for persistent chat storage  
- **Modular Codebase** with separate backend/frontend  

---
## 🧪 Test Credentials

Use the following credentials to log in as a test user (fill in your details below):

```txt
🔐 Email: jane@gmail.com 
🔑 Password: abcd1234
```

---

## 🛠️ Tech Stack

### Frontend

- React.js  
- HTML5 + CSS3  
- JavaScript (ES6+)  
- Socket.io-client  

### Backend

- Node.js  
- Express.js  
- MongoDB + Mongoose  
- Socket.io  
- JWT (JSON Web Tokens)  

---

## 📁 Project Structure

```plaintext
Moshi-Moshi/
├── Backend/
│   ├── .env
│   ├── src/
│       ├── config/
│       ├── controllers/
│       ├── middleware/
│       ├── models/
│       ├── routes/
│       └── index.js
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── config/
│   │   ├── constants/
│   │   ├── pages/
│   │   ├── store/
│   │   └── App.jsx
│   └── package.json
└── README.md
```

---

## 🔧 Getting Started

### 📦 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)  
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)  
- [MongoDB](https://www.mongodb.com/)  

---

### 🧰 Installation

1. **Clone the repository**

```bash
git clone https://github.com/aaryank1/Moshi-Moshi.git
```

2. **Navigate to the project directory**

```bash
cd Moshi-Moshi
```

3. **Install dependencies**

```bash
# Backend
cd Backend
npm install

# Frontend
cd ../Frontend
npm install
```

4. **Set up environment variables**

Create a `.env` file inside the `Backend/` directory with the following content:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV='development'
CLOUDINARY_CLOUD_NAME=your_cloudinary_username
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

5. **Run the application**

Open two terminal windows or tabs:

**Terminal 1: Run the Backend**

```bash
cd Backend
nodemon src/index.js
```

**Terminal 2: Run the Frontend**

```bash
cd Frontend
npm run dev
```

Visit the app at: [http://localhost:5173](http://localhost:5173)

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!  
Feel free to fork the repo and submit a pull request.

To contribute:

```bash
# Fork the repository
# Create your feature branch
git checkout -b feature/your-feature-name

# Commit your changes
git commit -m "Add some feature"

# Push to the branch
git push origin feature/your-feature-name

# Open a pull request
```

---

## 🌐 Links

- [Project Repository](https://github.com/aaryank1/Moshi-Moshi)
- [Author GitHub](https://github.com/aaryank1)
