import express from 'express';
import { json } from 'body-parser';
import { setRoutes } from './routes/auth';
import { authMiddleware } from './middleware/authMiddleware';

const app = express();

// Middleware
app.use(json());
app.use(authMiddleware);

// Routes
setRoutes(app);

export default app;