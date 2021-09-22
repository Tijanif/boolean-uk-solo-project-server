import { Request, Response } from 'express';
import prisma from '../../utills/database';

// Create A Division
export const createADivision = async (req: Request, res: Response) => {
  const divisionInfo = { ...req.body };
  console.log(req.body);
  console.log(divisionInfo);
  try {
    const CreatedDivision = await prisma.division.create({
      data: divisionInfo,
    });

    res.json(CreatedDivision);
  } catch (error) {
    console.log(error);
    res.json({ Error: 'Fail to create a user' });
  }
};

// Get All Division
export const getAllDivision = async (req: Request, res: Response) => {
  try {
    const allDivision = await prisma.division.findMany();
    res.json({ data: allDivision });
  } catch (error) {
    console.log(error);
    res.json({ error: 'The is an issue' });
  }
};
