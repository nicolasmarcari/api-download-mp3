import { Router } from 'express';
import DownloadController from '../controllers/downloadController';
import { validateDownload } from '../middlewares/validateMiddleware';

export default class DownloadRoutes {

  router: Router

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post('/download', validateDownload, DownloadController.startDownload)
  }
}