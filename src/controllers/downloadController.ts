import { Request, Response } from 'express';

export default class DownloadController {

  static startDownload(req: Request, res: Response): void {
    const { url, title } = req.body;

    res.status(200).send("Download initialized!")
  }

}
