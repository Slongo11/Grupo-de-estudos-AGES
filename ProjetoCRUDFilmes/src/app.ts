import express from 'express';
import filmRoutes from './routes/filmRouter';
import reviewRoutes from './routes/reviewRouter';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(express.json());

// Routes
app.use('/films', filmRoutes);
app.use('/reviews', reviewRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;
