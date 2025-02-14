import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import DownloadRoutes from './routes/downloadRoute';

dotenv.config();

const downloadRoutes = new DownloadRoutes()
const app = express();

app.use(express.json());

app.get('/ping', (req, res) => {
  res.status(200).send('pong');
})

app.use('/api', downloadRoutes.router)

export default app;