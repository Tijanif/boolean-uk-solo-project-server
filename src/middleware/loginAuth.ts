import { NextFunction, Request, Response } from 'express';

import { validateToken } from '../utills/authGenerator';

export default (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;

  const userData = token && validateToken(token);

  if (userData) {
    req.currentUser = userData;
    next();
  } else {
    res.status(401).json({ err: 'You need to loggin to acces this' });
  }
};
