# 3D Portfolio — Full Stack

A modern, immersive 3D portfolio built with React Three Fiber, Node.js, and Tailwind CSS.

## Tech Stack

- **Frontend**: React 19 + Vite + React Three Fiber + Tailwind CSS v3
- **Backend**: Node.js + Express (MVC architecture)
- **3D**: Three.js via @react-three/fiber + @react-three/drei

## Quick Start

### Backend

```bash
cd backend
npm install
npm run dev
```

Server starts on `http://localhost:5000`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

App starts on `http://localhost:5173`

## Project Structure

```
portfolio/
├── backend/          # Node.js API (MVC)
│   ├── config/       # Database & app config
│   ├── controllers/  # Request handlers
│   ├── models/       # Data models with placeholders
│   ├── routes/       # API route definitions
│   ├── views/        # Response formatters
│   ├── middleware/    # CORS, error handling
│   └── server.js     # Entry point
│
├── frontend/         # React + Vite + R3F
│   ├── src/
│   │   ├── components/   # Reusable UI & 3D components
│   │   ├── sections/     # Page sections (Hero, About, etc.)
│   │   ├── data/         # Placeholder data
│   │   ├── services/     # API client
│   │   ├── hooks/        # Custom React hooks
│   │   └── styles/       # Global CSS
│   └── ...
└── README.md
```

## Customization

Edit `frontend/src/data/placeholder.js` to replace placeholder content with your real information.
