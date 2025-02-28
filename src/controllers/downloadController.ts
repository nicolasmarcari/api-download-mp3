import { Request, Response } from 'express';
import Producer from '../rabbitmq/producer';

export default class DownloadController {

  static startDownload(req: Request, res: Response): void {
    const audio = req.body;
    Producer.sendMessage(audio);

    res.status(200).send("Download initialized!")
  }

}
