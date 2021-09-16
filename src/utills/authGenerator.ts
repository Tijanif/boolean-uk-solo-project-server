import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT as string;

export const createToken = (payload: jwt.JwtPayload) => {
  return jwt.sign(payload, JWT_SECRET);
};

export const validateToken = (token: string) => {
  console.log('JWT Secret', JWT_SECRET);
  return jwt.verify(token, JWT_SECRET);
};
