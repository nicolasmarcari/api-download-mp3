import { z } from 'zod';
import { Request, Response, NextFunction } from 'express';

const downloadSchema = z.object({
  url: z.string().url({message: "Url must be valid"}),
  title: z.string().min(1, {message: "Title can't be empty"})
});

export function validateDownload(req: Request, res: Response, next: NextFunction): void {
  const result = downloadSchema.safeParse(req.body);

  if(!result.success) {
    res.status(400).json({ errors: result.error.format()});
  }

  next();
}