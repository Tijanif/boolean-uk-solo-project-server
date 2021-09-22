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
import personRouter from '../src/resources/Person/routes';
import divisionRouter from '../src/resources/Division/routes';
import expenseRouter from '../src/resources/Expenses/routes';
import incomeRouter from '../src/resources/Income/routes';
const app = express();

/* SETUP MIDDLEWARE */

app.disable('x-powered-by');

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.urlencoded({ extended: true }));

/* SETUP ROUTES */
app.use(authRouter);

app.use(loginAuth);

app.use('/user', userRouter);
app.use('/person', personRouter);
app.use('/division', divisionRouter);
app.use('/expense', expenseRouter);
app.use('/income', incomeRouter);

app.get('*', (req, res) => {
  res.json({ ok: true });
});

/* START SERVER */

const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`\n🚀 Server is running on http://localhost:${port}/\n`);
});
