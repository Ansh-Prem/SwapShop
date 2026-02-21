# 🛍️ CampusMarket (SwapShop)

> Developed with ❤️ by [Ansh Prem](https://github.com/anshprem) & [Piyush Ghegade](https://github.com/piyushghegade)

---

A full-stack marketplace built for IIT Patna students to buy, sell, and swap items within their campus community.  

## 🚀 Features

- **Browse and search listings**: Students can easily explore items by category or keyword.
- **Category-based filtering**: Click on categories to see specific items.
- **Create listings**: Logged-in users can post new items with images and details.
- **User profiles**: Each user has a profile page showing personal info, listings, and settings.
- **Messaging**: Students can message sellers directly within the platform.
- **Secure authentication**: JWT-based login system, restricted to @iitp.ac.in emails.
- **Responsive UI**: Works on desktop and mobile with a clean, modern design.
- **Admin-approved categories**: Supports dynamic category links in the footer and header.
- **Account deletion & settings management**.

---

## 💻 Tech Stack

### Frontend

- React (with JSX, no TypeScript)
- Tailwind CSS
- Wouter (for routing)
- React Query (`@tanstack/react-query`)
- Zod (form validation)
- Lucide React icons
- Remix Icon

### Backend

- Node.js & Express
- MongoDB & Mongoose
- JWT authentication
- Bcrypt for password hashing

---


---

## 🗺️ Features Overview

### 🔎 Search & Filter
- Full-text search on item titles.
- Dynamic URL query parameters for search and category.

### 💬 Messaging
- Real-time conversations between buyers and sellers.
- Unread messages indicator in header.

### 🧑‍💼 Profile
- Tabs for Profile, My Listings, Settings.
- Glow/active highlighting on active tab.

### 📝 Listings
- Create listings with multiple images (base64 uploaded).
- Automatic category selection and image preview.
- Price and description validation.

---

## 🔒 Authentication

- Only IIT Patna emails (`@iitp.ac.in`) are allowed.
- JWT stored securely and included in API calls.
- Support for session restore on refresh.

---

## 🚧 Setup Instructions

### Prerequisites

- Node.js & npm
- MongoDB instance (local or Atlas)

### Setup Backend

```bash
cd server
npm install
npm run dev
Setup Frontend
bash
Copy
Edit
cd client
npm install
npm run dev

git config user.name "Ansh Prem"
git config user.email "your.email@example.com"















###HOW TO RUN SWAPSHOP 

## 🚀 Setup Instructions for CampusMarket (Swap Shop)

### 🧑‍💻 Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn
- MongoDB installed locally (or use MongoDB Atlas)

---

### 💻 Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
cd YOUR_REPOSITORY_NAME
```

---

### 📦 Install dependencies

#### For backend
```bash
cd server
npm install
```

#### For frontend
```bash
cd ../client
npm install
```

---

### ⚙️ Setup environment variables

#### In `server` directory

Create a `.env` file and add:

```
MONGO_URI=mongodb://localhost:27017/campusmarket
JWT_SECRET=your_jwt_secret_here
PORT=5000
```

---

### 🗃️ Seed initial categories

In `server/scripts`, run:

```bash
cd ../scripts
node seedCategories.js
```

(Adjust `seedCategories.js` script as needed to customize categories.)

---

### ⚡ Start backend server

```bash
cd ../
npm run dev
```

Backend runs at: `http://localhost:5000`

---

### 🌐 Start frontend

```bash
cd ../client
npm run dev
```

Frontend runs at: `http://localhost:5173`

---

### ✅ Access the application

Visit: [http://localhost:5173](http://localhost:5173)

---

### 💡 Features
- User authentication (JWT-based)
- Role-based actions (seller, buyer)
- Category-wise and keyword search
- Real-time chat with Socket.IO
- Create, edit, and delete listings
- Secure image uploads (base64)
- User profile management
- Admin dashboard for approving products (if enabled)

---

### 🏗️ Technologies Used
- **Frontend:** React (Vite), Wouter, Tailwind CSS
- **Backend:** Node.js, Express, Mongoose, JWT, Bcrypt
- **Database:** MongoDB
- **Real-time:** Socket.IO
- **Others:** React Query, Zod validation, Lucide icons, Remix icons

---

### ⚙️ Folder Structure (high-level)

```
client/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── lib/
│   └── main.tsx
server/
├── controllers/
├── models/
├── routes/
├── middleware/
├── scripts/
├── utils/
└── server.ts
```

---

### 🚨 Important
- Make sure MongoDB service is running before starting backend.
- Update `.env` variables if using MongoDB Atlas or other connection strings.
- Check `scripts/seedCategories.js` to ensure your categories are correct.

---

✅ **Done!** You can now fully run, modify, and extend the CampusMarket (Swap Shop) project on any machine.
