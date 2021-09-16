import { Request, Response } from 'express';
import { User } from '.prisma/client';

import { foundUserWithValidation } from './services';

import { createToken } from '../utills/authGenerator';

export const loginUser = async (req: Request, res: Response) => {
  // user details
  const userDetails: User = req.body;

  try {
    // check if credential are valid
    const loggedUser = await foundUserWithValidation(userDetails);

    // create a token
    const token = createToken({
      id: loggedUser.id,
      usename: loggedUser.username,
    });
    res.cookie('token', token, { httpOnly: true });
    // result
    res.json({
      user: {
        msg: `Hello ${loggedUser.username}! You are now logged in`,
        username: loggedUser.username,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(401).json({ error: error });
  }
};

export const logOutUser = async (req: Request, res: Response) => {
  res.clearCookie('token');
  res.json({ msg: 'Sad to see you go! You are now logged out.', data: null });
};
