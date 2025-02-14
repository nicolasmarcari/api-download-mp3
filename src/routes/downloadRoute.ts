import { Router } from 'express';
import DownloadController from '../controllers/downloadController';

export default class DownloadRoutes {

  router: Router

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post('/download', (req, res) => {
      DownloadController.startDownload(req, res)
    })
  }
}