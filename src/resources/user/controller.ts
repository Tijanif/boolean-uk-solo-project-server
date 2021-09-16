import { Request, Response } from 'express';
import prisma from '../../utills/database';

// Create A User
export const createAUser = async (req: Request, res: Response) => {
  const userInfo = { ...req.body };
  console.log(req.body);

  console.log(userInfo);

  try {
    const CreatedUser = await prisma.user.create({
      data: userInfo,
    });

    res.json(CreatedUser);
  } catch (error) {
    console.log(error);
    res.json({ Error: 'Fail to create a user' });
  }
};

// Get All Users
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await prisma.user.findMany();
    res.json({ data: allUsers });
  } catch (error) {
    console.log(error);
    res.json({ error: 'The is an issue' });
  }
};
