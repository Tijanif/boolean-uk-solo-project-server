import { Request, Response } from 'express';
import prisma from '../../utills/database';

// Create A Person
export const createAPerson = async (req: Request, res: Response) => {
  const personInfo = { ...req.body };

  try {
    const CreatedPerson = await prisma.person.create({
      data: personInfo,
    });

    res.json(CreatedPerson);
  } catch (error) {
    console.log(error);
    res.json({ Error: 'Fail to create a user' });
  }
};

// Get All Person
export const getAllPerson = async (req: Request, res: Response) => {
  try {
    const allPerson = await prisma.person.findMany();
    res.json({ data: allPerson });
  } catch (error) {
    console.log(error);
    res.json({ error: 'The is an issue' });
  }
};

// Get Person by Id
export const getAPersonById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  try {
    const personById = await prisma.user.findUnique({
      where: { id },
    });
    res.json({ date: personById });
  } catch (error) {
    console.log(error);

    res.json({ error: `Could not find the user with ${id}` });
  }
};
