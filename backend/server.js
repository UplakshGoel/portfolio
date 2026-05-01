import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import { corsMiddleware } from './middleware/corsConfig.js';
import { errorHandler } from './middleware/errorHandler.js';
import projectRoutes from './routes/projectRoutes.js';
import certificateRoutes from './routes/certificateRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import skillRoutes from './routes/skillRoutes.js';

dotenv.config();
import connectDB from './config/db.js';

// Connect to Database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Security & parsing middleware
app.use(helmet());
app.use(corsMiddleware);
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/api/projects', projectRoutes);
app.use('/api/certificates', certificateRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/skills', skillRoutes);

// Health check
app.get('/api/health', (_req, res) => {
  res.json({
    success: true,
    message: 'Portfolio API is running',
    timestamp: new Date().toISOString(),
  });
});

// 404 handler
app.use((_req, res) => {
  res.status(404).json({ success: false, message: 'Route not found', data: null });
});

// Global error handler
app.use(errorHandler);

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`\n🚀 Portfolio API running on http://localhost:${PORT}\n`);
  });
}

export default app;
