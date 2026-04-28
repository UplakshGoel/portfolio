import cors from 'cors';

const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? true // reflect request origin for now to simplify Vercel deployment
    : ['http://localhost:5173', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

export const corsMiddleware = cors(corsOptions);
