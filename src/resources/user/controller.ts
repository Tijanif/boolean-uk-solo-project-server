import { Request, Response } from 'express';
import prisma from '../../utills/database';
import { createToken } from '../../utills/authGenerator';
import user from './services';

// Create A User
// export const createAUser = async (req: Request, res: Response) => {
//   const userInfo = { ...req.body };
//   console.log(req.body);

//   console.log(userInfo);

//   try {
//     const CreatedUser = await prisma.user.create({
//       data: userInfo,
//     });

//     res.json(CreatedUser);
//   } catch (error) {
//     console.log(error);
//     res.json({ Error: 'Fail to create a user' });
//   }
// };

// Create a user with Hashed password
export const createAUser = async (req: Request, res: Response) => {
  const newUser = req.body;

  // new user created with hashed password
  const createUser = await user.create(newUser);

  // creat token
  const token = createToken({
    id: createUser.id,
    name: createUser.name,
  });

  res.cookie('token', token, { httpOnly: true });

  res.json({ data: { name: createUser.name } });
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

// Get User by Id
export const getAUserById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  try {
    const userById = await prisma.user.findUnique({
      where: { id },
    });
    res.json({ date: userById });
  } catch (error) {
    console.log(error);

    res.json({ error: `Could not find the user with ${id}` });
  }
};
