import { Request, Response } from 'express';
import prisma from '../../utills/database';

// Create An Income
export const createAnIncome = async (req: Request, res: Response) => {
  const incomeInfo = { ...req.body };

  try {
    const CreatedIncome = await prisma.income.create({
      data: incomeInfo,
    });

    res.json(CreatedIncome);
  } catch (error) {
    console.log(error);
    res.json({ Error: 'Fail to create a user' });
  }
};

// Get All Income
export const getAllIncom = async (req: Request, res: Response) => {
  try {
    const allIncome = await prisma.income.findMany();
    res.json({ data: allIncome });
  } catch (error) {
    console.log(error);
    res.json({ error: 'The is an issue' });
  }
};

// Get Income by Id
export const getIncomeById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  try {
    const incomeById = await prisma.income.findUnique({
      where: { id },
    });
    res.json({ date: incomeById });
  } catch (error) {
    console.log(error);

    res.json({ error: `Could not find the user with ${id}` });
  }
};
