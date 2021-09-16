require('dotenv').config();
import express, { NextFunction } from 'express';
const cookieParser = require('cookie-parser');
import cors from 'cors';
const morgan = require('morgan');

const app = express();

/* SETUP MIDDLEWARE */

app.disable('x-powered-by');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));

/* SETUP ROUTES */

app.get('*', (req, res) => {
  res.json({ ok: true });
});

/* START SERVER */

const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`\n🚀 Server is running on http://localhost:${port}/\n`);
});
