# Google OAuth 2.0 Authentication with JWT

A secure authentication system built using **Node.js**, **Express.js**, **MongoDB**, **Passport.js**, and **Google OAuth 2.0**. This project allows users to sign in with their Google account and authenticates them using **JWT Access Tokens** and **Refresh Tokens** stored in **HTTP-only cookies**.

---

## 🚀 Features

- Google OAuth 2.0 Login
- Automatic User Registration
- Existing User Login
- JWT Authentication
- Access Token & Refresh Token
- HTTP-only Cookie Authentication
- Protected Routes
- User Profile API
- Logout Functionality
- MongoDB User Storage
- Passport.js Google Strategy

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Passport.js
- Google OAuth 2.0
- JSON Web Token (JWT)
- Cookie Parser
- dotenv

---

## 📂 Project Structure

```text
Backend/
│
├── auth/
│   ├── google.js
│   └── auth.routes.js
│
├── controllers/
│   └── auth.controller.js
│
├── middleware/
│   └── auth.middleware.js
│
├── models/
│   └── user.model.js
│
├── app.js
├── index.js
├── .env
└── package.json
```

---

## 🔄 Authentication Flow

```text
User
 │
 ▼
Click "Login with Google"
 │
 ▼
Google OAuth Consent Screen
 │
 ▼
Google verifies user
 │
 ▼
Passport Google Strategy
 │
 ▼
Find User in Database
 │
 ├── User Exists
 │
 └── Create New User
 │
 ▼
Generate JWT Access Token
Generate JWT Refresh Token
 │
 ▼
Store Tokens in HTTP-only Cookies
 │
 ▼
Redirect to Frontend
```



## 🔐 Environment Variables

Create a `.env` file inside the Backend folder.

```env
PORT=8000

MONGODB_URI=your_mongodb_uri

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
CALLBACK_URL=http://localhost:8000/auth/google/callback

ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
```

---

## 📦 Dependencies

```json
express
passport
passport-google-oauth20
mongoose
jsonwebtoken
cookie-parser
dotenv
cors
```

---


## 👨‍💻 Author

Developed by **Pritam Ghosh**.
