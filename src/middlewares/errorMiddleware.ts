import { Request, Response, NextFunction } from 'express';
import RequiredError from '../erros/index';

export default async (err: RequiredError, _req: Request, res: Response, _next: NextFunction) => {
  const { code, message } = err;
  if (code) return res.status(code).json({ message });
  res.status(500).json({ message });
};