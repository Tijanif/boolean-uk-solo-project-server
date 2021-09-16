require('dotenv').config();
import express, { NextFunction } from 'express';
const cookieParser = require('cookie-parser');
import cors from 'cors';
const morgan = require('morgan');
import { JwtPayload } from 'jsonwebtoken';
import authRouter from './Auth/routes';

import loginAuth from './middleware/loginAuth';

declare global {
  namespace Express {
    interface Request {
      currentUser: string | JwtPayload;
    }
  }
}

import userRouter from '../src/resources/user/routes';

const app = express();

/* SETUP MIDDLEWARE */

app.disable('x-powered-by');

app.use(cors({ origin: 'http://localhost:3030', credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));

/* SETUP ROUTES */
app.use(authRouter);

app.use(loginAuth);

app.use('/user', userRouter);

app.get('*', (req, res) => {
  res.json({ ok: true });
});

/* START SERVER */

const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`\n🚀 Server is running on http://localhost:${port}/\n`);
});
