import { Request, Response } from 'express';

export default class DownloadController {

  static startDownload(req: Request, res: Response): Response {
    const { url, title } = req.body;

    return res.status(200).send("Download initialized!")
  }

}
